import facilitiesService from 'barracao-digital/services/facilities.service'
import { getRequestContext, responseBuilder } from '../../helpers'

export const handler = async (event) => {
  try {
    const requestContext = await getRequestContext(event)

    const { path, pathParameters, body } = requestContext

    const { origin } = pathParameters

    const { destinations } = body || {}

    const isRemovingDestinations = path.endsWith('/destinations')
    if (isRemovingDestinations) {
      await facilitiesService.removeOriginDestinations(origin, destinations)
      return responseBuilder.success.noContent()
    }

    await facilitiesService.delete(origin)
    return responseBuilder.success.noContent()
  } catch (err) {
    return responseBuilder.genericError(err)
  }
}
