(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{506:function(e,t,r){"use strict";(function(e){r(29),r(30),r(7),r(66);var n=r(20),c=r(653),o=r.n(c),l=r(510),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],c={headers:{Authorization:r}},t.next=4,o.a.get("https://akh38d9he3.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),c).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();t.a={GET:d,get:v}}).call(this,r(14).Buffer)},508:function(e,t,r){"use strict";r(66);var n=r(20),c=r(506),o=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},510:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(66);var n,c=r(20),o=r(129),l=r(506),d=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,l.a.get(path,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},650:function(e,t,r){"use strict";r.r(t);r(23);var n=r(2),c=r(736),o=r.n(c);r(737);n.a.use(o.a);var l={name:"CentMeter",props:{value:Number},computed:{sections:{get:function(){return[{value:this.value,color:"#01ade3"},{value:100-this.value,color:"#f5f8ff"}]}}}},d=(r(739),r(55)),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("vc-donut",{attrs:{sections:this.sections,size:180,thickness:30}},[t("p",[this._v(this._s(this.value.toString()+"%"))])])}),[],!1,null,"3a318394",null);t.default=component.exports},662:function(e,t,r){var content=r(740);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("42f1fe8a",content,!0,{sourceMap:!1})},663:function(e,t,r){"use strict";var n=r(651);t.a={extends:n.b,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},665:function(e,t,r){var content=r(742);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("66dbdb1a",content,!0,{sourceMap:!1})},680:function(e,t,r){var map={"./af":515,"./af.js":515,"./ar":516,"./ar-dz":517,"./ar-dz.js":517,"./ar-kw":518,"./ar-kw.js":518,"./ar-ly":519,"./ar-ly.js":519,"./ar-ma":520,"./ar-ma.js":520,"./ar-sa":521,"./ar-sa.js":521,"./ar-tn":522,"./ar-tn.js":522,"./ar.js":516,"./az":523,"./az.js":523,"./be":524,"./be.js":524,"./bg":525,"./bg.js":525,"./bm":526,"./bm.js":526,"./bn":527,"./bn-bd":528,"./bn-bd.js":528,"./bn.js":527,"./bo":529,"./bo.js":529,"./br":530,"./br.js":530,"./bs":531,"./bs.js":531,"./ca":532,"./ca.js":532,"./cs":533,"./cs.js":533,"./cv":534,"./cv.js":534,"./cy":535,"./cy.js":535,"./da":536,"./da.js":536,"./de":537,"./de-at":538,"./de-at.js":538,"./de-ch":539,"./de-ch.js":539,"./de.js":537,"./dv":540,"./dv.js":540,"./el":541,"./el.js":541,"./en-au":542,"./en-au.js":542,"./en-ca":543,"./en-ca.js":543,"./en-gb":544,"./en-gb.js":544,"./en-ie":545,"./en-ie.js":545,"./en-il":546,"./en-il.js":546,"./en-in":547,"./en-in.js":547,"./en-nz":548,"./en-nz.js":548,"./en-sg":549,"./en-sg.js":549,"./eo":550,"./eo.js":550,"./es":551,"./es-do":552,"./es-do.js":552,"./es-mx":553,"./es-mx.js":553,"./es-us":554,"./es-us.js":554,"./es.js":551,"./et":555,"./et.js":555,"./eu":556,"./eu.js":556,"./fa":557,"./fa.js":557,"./fi":558,"./fi.js":558,"./fil":559,"./fil.js":559,"./fo":560,"./fo.js":560,"./fr":561,"./fr-ca":562,"./fr-ca.js":562,"./fr-ch":563,"./fr-ch.js":563,"./fr.js":561,"./fy":564,"./fy.js":564,"./ga":565,"./ga.js":565,"./gd":566,"./gd.js":566,"./gl":567,"./gl.js":567,"./gom-deva":568,"./gom-deva.js":568,"./gom-latn":569,"./gom-latn.js":569,"./gu":570,"./gu.js":570,"./he":571,"./he.js":571,"./hi":572,"./hi.js":572,"./hr":573,"./hr.js":573,"./hu":574,"./hu.js":574,"./hy-am":575,"./hy-am.js":575,"./id":576,"./id.js":576,"./is":577,"./is.js":577,"./it":578,"./it-ch":579,"./it-ch.js":579,"./it.js":578,"./ja":580,"./ja.js":580,"./jv":581,"./jv.js":581,"./ka":582,"./ka.js":582,"./kk":583,"./kk.js":583,"./km":584,"./km.js":584,"./kn":585,"./kn.js":585,"./ko":586,"./ko.js":586,"./ku":587,"./ku.js":587,"./ky":588,"./ky.js":588,"./lb":589,"./lb.js":589,"./lo":590,"./lo.js":590,"./lt":591,"./lt.js":591,"./lv":592,"./lv.js":592,"./me":593,"./me.js":593,"./mi":594,"./mi.js":594,"./mk":595,"./mk.js":595,"./ml":596,"./ml.js":596,"./mn":597,"./mn.js":597,"./mr":598,"./mr.js":598,"./ms":599,"./ms-my":600,"./ms-my.js":600,"./ms.js":599,"./mt":601,"./mt.js":601,"./my":602,"./my.js":602,"./nb":603,"./nb.js":603,"./ne":604,"./ne.js":604,"./nl":605,"./nl-be":606,"./nl-be.js":606,"./nl.js":605,"./nn":607,"./nn.js":607,"./oc-lnc":608,"./oc-lnc.js":608,"./pa-in":609,"./pa-in.js":609,"./pl":610,"./pl.js":610,"./pt":611,"./pt-br":612,"./pt-br.js":612,"./pt.js":611,"./ro":613,"./ro.js":613,"./ru":614,"./ru.js":614,"./sd":615,"./sd.js":615,"./se":616,"./se.js":616,"./si":617,"./si.js":617,"./sk":618,"./sk.js":618,"./sl":619,"./sl.js":619,"./sq":620,"./sq.js":620,"./sr":621,"./sr-cyrl":622,"./sr-cyrl.js":622,"./sr.js":621,"./ss":623,"./ss.js":623,"./sv":624,"./sv.js":624,"./sw":625,"./sw.js":625,"./ta":626,"./ta.js":626,"./te":627,"./te.js":627,"./tet":628,"./tet.js":628,"./tg":629,"./tg.js":629,"./th":630,"./th.js":630,"./tk":631,"./tk.js":631,"./tl-ph":632,"./tl-ph.js":632,"./tlh":633,"./tlh.js":633,"./tr":634,"./tr.js":634,"./tzl":635,"./tzl.js":635,"./tzm":636,"./tzm-latn":637,"./tzm-latn.js":637,"./tzm.js":636,"./ug-cn":638,"./ug-cn.js":638,"./uk":639,"./uk.js":639,"./ur":640,"./ur.js":640,"./uz":641,"./uz-latn":642,"./uz-latn.js":642,"./uz.js":641,"./vi":643,"./vi.js":643,"./x-pseudo":644,"./x-pseudo.js":644,"./yo":645,"./yo.js":645,"./zh-cn":646,"./zh-cn.js":646,"./zh-hk":647,"./zh-hk.js":647,"./zh-mo":648,"./zh-mo.js":648,"./zh-tw":649,"./zh-tw.js":649};function n(e){var t=c(e);return r(t)}function c(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=c,e.exports=n,n.id=680},683:function(e,t,r){"use strict";r.r(t);var n=r(512),c=r.n(n),o={name:"TopEnrollers",methods:{iframeLoaded:function(){c()({log:!1},"#iframeTopEnrollers")}}},l=r(55),d=r(92),v=r.n(d),f=r(768),m=r(493),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("Top Enrollers")])]),this._v(" "),t("iframe",{attrs:{id:"iframeTopEnrollers",width:"100%",frameborder:"0",scrolling:"no",src:"https://franco-bruno-corteletti.shinyapps.io/latam-cto-top-enrollers/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCol:f.a,VRow:m.a})},684:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),c=r(508),o=r(663),l=(r(681),r(512)),d=r.n(l),v={name:"ProceduralCharacteristics",components:{DoughnutChart:o.a},data:function(){return{loading:!0,sections:{angina:0,ischemia:0,other:0},optionsVascularAccess:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},optionsSheatSize:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},plugins:{colorschemes:{scheme:"brewer.PastelOne4"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},dataCollectionPrincipalAccessSheathSize:null,dataCollectionProceduralAccess:null}},methods:{iframeLoaded:function(){d()({log:!1},"#iframeProceduralIndication")}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.proceduralCharacteristics();case 2:data=t.sent,Object.assign(e.sections,data),e.dataCollectionPrincipalAccessSheathSize={labels:["6F","7F","8F"],datasets:[{data:[data.principalAccessSheathSize[0],data.principalAccessSheathSize[1],data.principalAccessSheathSize[2]]}]},e.dataCollectionProceduralAccess={labels:["Bifemoral","Biradial","Radial Femoral","Single Radial","Single Femoral"],datasets:[{data:[data.bifemoralProcedures,data.biradialProcedures,data.radialFemoralProcedures,data.singleRadialProcedures,data.singleFemoralProcedures]}]},e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},f=r(55),m=r(92),h=r.n(m),j=r(768),_=r(195),C=r(493),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:60,width:7,color:"#01ade3"}})],1):r("div",{staticClass:"container"},[r("v-row",{staticClass:"mb-12"},[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Procedural Indication")])]),e._v(" "),r("iframe",{attrs:{id:"iframeProceduralIndication",width:"100%",height:"10%",frameborder:"0",scrolling:"no",src:"https://franco-bruno-corteletti.shinyapps.io/latam-cto-procedural-indication/"},on:{load:e.iframeLoaded}})])],1),e._v(" "),r("v-row",{staticClass:"mb-10 mt-10"},[r("v-col",{attrs:{align:"center"}},[r("p",{staticClass:"mb-10"},[r("b",[e._v("Vascular Access")])]),e._v(" "),r("doughnut-chart",{attrs:{"chart-data":e.dataCollectionProceduralAccess,options:e.optionsVascularAccess}})],1)],1),e._v(" "),r("v-row",{staticClass:"mb-12"}),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",{staticClass:"mb-10 mt-10"},[r("b",[e._v("Principal Access Sheath Size")])]),e._v(" "),r("doughnut-chart",{attrs:{"chart-data":e.dataCollectionPrincipalAccessSheathSize,options:e.optionsSheatSize}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:j.a,VProgressCircular:_.a,VRow:C.a})},685:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),c=r(650),o=r(508),l={name:"AngiographicCharacteristics",components:{CentMeter:c.default},data:function(){return{loading:!0,sections:{ladTargetVessel:0,rcaTargetVessel:0,ctoMean:0,ctoStd:0,scoreMean:0,scoreStd:0,taperedStump:0,calcification:0,tortuosity:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,o.a.angiographicCharacteristics();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(55),v=r(92),f=r.n(v),m=r(768),h=r(195),j=r(493),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:60,width:7,color:"#01ade3"}})],1):r("div",{staticClass:"container"},[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Target Vessel LAD")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.ladTargetVessel,callback:function(t){e.$set(e.sections,"ladTargetVessel",t)},expression:"sections.ladTargetVessel"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Target Vessel RCA")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.rcaTargetVessel,callback:function(t){e.$set(e.sections,"rcaTargetVessel",t)},expression:"sections.rcaTargetVessel"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("CTO Length:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ctoMean)+" ± "+e._s(e.sections.ctoStd)+"\n          ")])])])]),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("J-CTO Score:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.scoreMean)+" ±\n            "+e._s(e.sections.scoreStd)+"\n          ")])])])])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Tapered Stump")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.taperedStump,callback:function(t){e.$set(e.sections,"taperedStump",t)},expression:"sections.taperedStump"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Severe Calcification")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.calcification,callback:function(t){e.$set(e.sections,"calcification",t)},expression:"sections.calcification"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Severe Tortuosity")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.tortuosity,callback:function(t){e.$set(e.sections,"tortuosity",t)},expression:"sections.tortuosity"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{CentMeter:r(650).default}),f()(component,{VCol:m.a,VProgressCircular:h.a,VRow:j.a})},686:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),c=r(650),o=r(508),l={name:"ClinicalCharacteristics",components:{CentMeter:c.default},data:function(){return{loading:!0,sections:{ageMean:0,ageStd:0,males:0,whites:0,hypertensives:0,previousPci:0,previousCtoAttempt:0,diabetes:0,ejectionFractionMean:0,ejectionFractionStd:0}}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.t1=e.sections,t.next=4,o.a.clinicalCharacteristics();case 4:t.t2=t.sent,t.t0.assign.call(t.t0,t.t1,t.t2),e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}},d=r(55),v=r(92),f=r.n(v),m=r(768),h=r(195),j=r(493),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("div",{attrs:{align:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",size:60,width:7,color:"#01ade3"}})],1):r("div",{staticClass:"container"},[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Average Age:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ageMean)+" ± "+e._s(e.sections.ageStd)+"\n          ")])])])]),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Ejection Fraction:\n          "),r("div",{staticClass:"rate"},[e._v("\n            "+e._s(e.sections.ejectionFractionMean)+" ±\n            "+e._s(e.sections.ejectionFractionStd)+"\n          ")])])])])],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Male Gender")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.males,callback:function(t){e.$set(e.sections,"males",t)},expression:"sections.males"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("White Race")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.whites,callback:function(t){e.$set(e.sections,"whites",t)},expression:"sections.whites"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Hypertension")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.hypertensives,callback:function(t){e.$set(e.sections,"hypertensives",t)},expression:"sections.hypertensives"}})],1)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Previous PCI")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.previousPci,callback:function(t){e.$set(e.sections,"previousPci",t)},expression:"sections.previousPci"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Previous CTO Attempt")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.previousCtoAttempt,callback:function(t){e.$set(e.sections,"previousCtoAttempt",t)},expression:"sections.previousCtoAttempt"}})],1),e._v(" "),r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Diabetes")])]),e._v(" "),r("CentMeter",{model:{value:e.sections.diabetes,callback:function(t){e.$set(e.sections,"diabetes",t)},expression:"sections.diabetes"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{CentMeter:r(650).default}),f()(component,{VCol:m.a,VProgressCircular:h.a,VRow:j.a})},739:function(e,t,r){"use strict";var n=r(662);r.n(n).a},740:function(e,t,r){(t=r(17)(!1)).push([e.i,"p[data-v-3a318394]{font-size:xxx-large;color:#b8b8b8}",""]),e.exports=t},741:function(e,t,r){"use strict";var n=r(665);r.n(n).a},742:function(e,t,r){(t=r(17)(!1)).push([e.i,"iframe{width:1px;min-width:100%}p{font-size:x-large}.rate{color:#b8b8b8;margin-top:20px;font-size:xx-large}",""]),e.exports=t},779:function(e,t,r){"use strict";r.r(t);r(23),r(734);var n=r(683),c=r(686),o=r(685),l=r(684),d={name:"dashboard",layout:"private",middleware:"authenticated",components:{TopEnrollers:n.default,ClinicalCharacteristics:c.default,AngiographicCharacteristics:o.default,ProceduralCharacteristics:l.default},data:function(){return{tab:null,items:["Enrollment Data","Clinical Data","Angiographic Data","Procedural Data"]}},computed:{dataTab:{get:function(){return this.$route.query.tab&&(this.tab=Number.parseInt(this.$route.query.tab||""),this.$route.query.tab=null),this.tab}}}},v=(r(741),r(55)),f=r(92),m=r.n(f),h=r(511),j=r(509),_=r(769),C=r(782),w=r(780),x=r(761),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-tabs",{attrs:{"background-color":"#272d95",grow:"","center-active":"","show-arrows":"",dark:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return r("v-tab",{key:t},[e._v("\n      "+e._s(t)+"\n    ")])})),1),e._v(" "),r("v-tabs-items",{model:{value:e.dataTab,callback:function(t){e.dataTab=t},expression:"dataTab"}},e._l(e.items,(function(t){return r("v-tab-item",{key:t},[r("v-card",[r("v-card-text",["Enrollment Data"==t?r("TopEnrollers"):e._e(),e._v(" "),"Clinical Data"==t?r("ClinicalCharacteristics"):e._e(),e._v(" "),"Angiographic Data"===t?r("AngiographicCharacteristics"):e._e(),e._v(" "),"Procedural Data"===t?r("ProceduralCharacteristics"):e._e()],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{TopEnrollers:r(683).default,ClinicalCharacteristics:r(686).default,AngiographicCharacteristics:r(685).default,ProceduralCharacteristics:r(684).default}),m()(component,{VCard:h.a,VCardText:j.a,VTab:_.a,VTabItem:C.a,VTabs:w.a,VTabsItems:x.a})}}]);