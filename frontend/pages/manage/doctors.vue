<template>
  <v-container fluid>
    <v-card elevation="0" append>
      <v-toolbar color="primary" flat dark dense>
        <v-toolbar-title>Lista de médicos</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
          v-if="$auth.user.admin"
          icon
          title="Criar médico"
          @click="create"
        >
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </v-toolbar>

      <v-divider />

      <v-data-table
        :loading="isLoading"
        :headers="headers"
        :items="doctors"
        item-key="username"
        class="elevation-1"
      >
        <template v-slot:item.admin="{ item }">
          <v-switch :input-value="item.admin" readonly></v-switch>
        </template>

        <template v-slot:item.master="{ item }">
          <v-switch :input-value="item.master" readonly></v-switch>
        </template>

        <template v-slot:item.active="{ item }">
          <v-switch :input-value="item.active" readonly></v-switch>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="edit(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="remove(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>

      <infinite-loading @infinite="handleNextPageRequest"></infinite-loading>
    </v-card>

    <DoctorsResourceModal
      v-if="selectedDoctor"
      :doctor="selectedDoctor"
      :submit="doctorSave"
      @close="selectedDoctor = null"
    />
  </v-container>
</template>

<script>
import * as R from 'ramda'
import DoctorsResourceModal from '~/components/manage/DoctorsResourceModal'

const getAllDoctors = ($api) => ({ lastEvaluatedKey = '' } = {}) =>
  $api.getDoctors({ lastEvaluatedKey }).then(
    ({ items = [], lastEvaluatedKey = '' }) => ({
      doctors: items,
      lastEvaluatedKey: lastEvaluatedKey || '',
      isPaginationFinished: !lastEvaluatedKey,
    }),
    (error) => Promise.reject(error)
  )

const getDoctorsLoggedUserCep = ($api, cep) => ({
  lastEvaluatedKey = '',
} = {}) =>
  $api.getDoctorsByCep(cep, { lastEvaluatedKey }).then(
    ({ items = [], lastEvaluatedKey = '' }) => ({
      doctors: items,
      lastEvaluatedKey: lastEvaluatedKey || '',
      isPaginationFinished: !lastEvaluatedKey,
    }),
    (error) => Promise.reject(error)
  )

export default {
  middleware: ['auth', 'isAdminOrMaster'],
  components: {
    DoctorsResourceModal,
  },
  asyncData({ app, error }) {
    const listFunction = app.$auth.user.master
      ? getAllDoctors
      : getDoctorsLoggedUserCep

    return listFunction(app.$api, app.$auth.user.cep)().then(
      (response) => response,
      (err) => {
        const message = R.path(['response', 'data', 'message'], err) || err
        const statusCode = R.path(['response', 'status'], err) || 500
        error({ message, statusCode })
      }
    )
  },
  data: () => ({
    doctors: [],
    selectedDoctor: null,
    lastEvaluatedKey: '',
    isLoading: false,
    headers: [
      { text: 'Nome', value: 'name' },
      { text: 'Nome de usuário', value: 'username' },
      { text: 'Email', value: 'email' },
      { text: 'Admin?', value: 'admin' },
      { text: 'Master?', value: 'master' },
      { text: 'Ativo?', value: 'active' },
      { text: '', value: 'actions', sortable: false },
    ],
  }),
  methods: {
    handleNextPageRequest($loadingState) {
      if (this.isPaginationFinished)
        return $loadingState && $loadingState.complete()

      this.isLoading = true

      const listFunction = this.$auth.user.master
        ? getAllDoctors
        : getDoctorsLoggedUserCep

      return listFunction(
        this.$api,
        this.$auth.user.cep
      )({
        lastEvaluatedKey: this.lastEvaluatedKey,
      })
        .then(
          ({
            doctors = [],
            lastEvaluatedKey = '',
            isPaginationFinished = true,
          }) => {
            this.doctors = R.uniq([...this.doctors, ...doctors])
            this.lastEvaluatedKey = lastEvaluatedKey
            this.isPaginationFinished = isPaginationFinished
          },
          () => {
            this.$noty.error(
              'Ocorreu um erro ao tentar consultar os cadastros de médicos, tente novamente mais tarde'
            )
          }
        )
        .finally(() => {
          this.isLoading = false
          this.isPaginationFinished & $loadingState
            ? $loadingState.complete()
            : $loadingState.loaded()
        })
    },
    async doctorSave(isCreating, doctor) {
      try {
        let updatedDoctor
        if (isCreating) {
          updatedDoctor = await this.$api.createDoctor(doctor)
          this.lastEvaluatedKey = ''
          await this.handleNextPageRequest()
          this.$noty.success('Médico salvo com sucesso')
        } else {
          updatedDoctor = await this.$api.updateDoctor(
            this.selectedDoctor.username,
            doctor
          )
          const index = this._findDoctorIndex(this.selectedDoctor.username)
          this.$set(this.doctors, index, doctor)
          this.$noty.success('Médico atualizado com sucesso')
        }

        const index = this._findDoctorIndex(updatedDoctor.username)
        if (index !== -1) {
          this.doctors.splice(index, 1, updatedDoctor)
        } else {
          this.doctors.push(updatedDoctor)
        }
      } catch (error) {
        const message = R.path(['response', 'data', 'message'], error) || error
        this.$noty.error(message)
        return Promise.reject(error)
      }
    },
    create() {
      this.selectedDoctor = {
        username: '',
        sort: '',
        name: '',
        specialty: '',
        password: '',
        cep: '',
        email: '',
        fu: '',
        crm: null,
        active: null,
        master: null,
        admin: null,
        createdAt: null,
        updatedAt: null,
      }
    },
    edit(item) {
      this.selectedDoctor = item
    },
    async remove({ username }) {
      if (
        !(await this.$dialog.confirm({ text: `Deletar o médico ${username}?` }))
      )
        return
      this.isLoading = true
      const index = this._findDoctorIndex(username)

      if (index === -1) {
        this.$noty.error('Você não pode deletar este médico')
        return
      }

      return this.$api
        .deleteDoctor(username)
        .then(
          () => {
            this.$delete(this.doctors, index)
            this.$noty.success('Médico removido com sucesso')
          },
          () =>
            this.$noty.error(
              'Ocorreu um erro ao tentar deletar este médico, tente novamente mais tarde'
            )
        )
        .finally(() => {
          this.isLoading = false
        })
    },
    _findDoctorIndex(username) {
      return this.doctors.findIndex((doctor) => doctor.username === username)
    },
  },
}
</script>
