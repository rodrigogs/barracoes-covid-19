(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{506:function(e,t,r){"use strict";(function(e){r(29),r(30),r(7),r(66);var n=r(20),o=r(653),c=r.n(o),l=r(510),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(l.a)(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(path,r){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],o={headers:{Authorization:r}},t.next=4,c.a.get("https://akh38d9he3.execute-api.us-west-2.amazonaws.com/dev/".concat(path||""),o).then((function(t){(n=t.data).body&&(n=JSON.parse(e.from(n.body).toString("utf-8")))})).catch((function(e){return console.error(e)}));case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();t.a={GET:d,get:f}}).call(this,r(14).Buffer)},508:function(e,t,r){"use strict";r(66);var n=r(20),o=r(506),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={countAll:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/count");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulStrategies:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulStrategies");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},successfulProceduresPerYear:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/successfulProceduresPerYear");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},annualProcedures:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/annualProcedures");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},clinicalCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/clinicalCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},angiographicCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/angiographicCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},proceduralCharacteristics:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("registry/procedures/proceduralCharacteristics");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};t.a=l},510:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(66);var n,o=r(20),c=r(129),l=r(506),d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.currentAuthenticatedUser().then((function(u){return n=u.signInUserSession.idToken.jwtToken})).catch((function(e){return console.log(e)}));case 2:return e.next=4,l.a.get(path,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},663:function(e,t,r){"use strict";var n=r(651);t.a={extends:n.b,mixins:[n.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},666:function(e,t,r){var content=r(752);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("ef07b3c0",content,!0,{sourceMap:!1})},667:function(e,t,r){var content=r(754);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("1b7833da",content,!0,{sourceMap:!1})},680:function(e,t,r){var map={"./af":515,"./af.js":515,"./ar":516,"./ar-dz":517,"./ar-dz.js":517,"./ar-kw":518,"./ar-kw.js":518,"./ar-ly":519,"./ar-ly.js":519,"./ar-ma":520,"./ar-ma.js":520,"./ar-sa":521,"./ar-sa.js":521,"./ar-tn":522,"./ar-tn.js":522,"./ar.js":516,"./az":523,"./az.js":523,"./be":524,"./be.js":524,"./bg":525,"./bg.js":525,"./bm":526,"./bm.js":526,"./bn":527,"./bn-bd":528,"./bn-bd.js":528,"./bn.js":527,"./bo":529,"./bo.js":529,"./br":530,"./br.js":530,"./bs":531,"./bs.js":531,"./ca":532,"./ca.js":532,"./cs":533,"./cs.js":533,"./cv":534,"./cv.js":534,"./cy":535,"./cy.js":535,"./da":536,"./da.js":536,"./de":537,"./de-at":538,"./de-at.js":538,"./de-ch":539,"./de-ch.js":539,"./de.js":537,"./dv":540,"./dv.js":540,"./el":541,"./el.js":541,"./en-au":542,"./en-au.js":542,"./en-ca":543,"./en-ca.js":543,"./en-gb":544,"./en-gb.js":544,"./en-ie":545,"./en-ie.js":545,"./en-il":546,"./en-il.js":546,"./en-in":547,"./en-in.js":547,"./en-nz":548,"./en-nz.js":548,"./en-sg":549,"./en-sg.js":549,"./eo":550,"./eo.js":550,"./es":551,"./es-do":552,"./es-do.js":552,"./es-mx":553,"./es-mx.js":553,"./es-us":554,"./es-us.js":554,"./es.js":551,"./et":555,"./et.js":555,"./eu":556,"./eu.js":556,"./fa":557,"./fa.js":557,"./fi":558,"./fi.js":558,"./fil":559,"./fil.js":559,"./fo":560,"./fo.js":560,"./fr":561,"./fr-ca":562,"./fr-ca.js":562,"./fr-ch":563,"./fr-ch.js":563,"./fr.js":561,"./fy":564,"./fy.js":564,"./ga":565,"./ga.js":565,"./gd":566,"./gd.js":566,"./gl":567,"./gl.js":567,"./gom-deva":568,"./gom-deva.js":568,"./gom-latn":569,"./gom-latn.js":569,"./gu":570,"./gu.js":570,"./he":571,"./he.js":571,"./hi":572,"./hi.js":572,"./hr":573,"./hr.js":573,"./hu":574,"./hu.js":574,"./hy-am":575,"./hy-am.js":575,"./id":576,"./id.js":576,"./is":577,"./is.js":577,"./it":578,"./it-ch":579,"./it-ch.js":579,"./it.js":578,"./ja":580,"./ja.js":580,"./jv":581,"./jv.js":581,"./ka":582,"./ka.js":582,"./kk":583,"./kk.js":583,"./km":584,"./km.js":584,"./kn":585,"./kn.js":585,"./ko":586,"./ko.js":586,"./ku":587,"./ku.js":587,"./ky":588,"./ky.js":588,"./lb":589,"./lb.js":589,"./lo":590,"./lo.js":590,"./lt":591,"./lt.js":591,"./lv":592,"./lv.js":592,"./me":593,"./me.js":593,"./mi":594,"./mi.js":594,"./mk":595,"./mk.js":595,"./ml":596,"./ml.js":596,"./mn":597,"./mn.js":597,"./mr":598,"./mr.js":598,"./ms":599,"./ms-my":600,"./ms-my.js":600,"./ms.js":599,"./mt":601,"./mt.js":601,"./my":602,"./my.js":602,"./nb":603,"./nb.js":603,"./ne":604,"./ne.js":604,"./nl":605,"./nl-be":606,"./nl-be.js":606,"./nl.js":605,"./nn":607,"./nn.js":607,"./oc-lnc":608,"./oc-lnc.js":608,"./pa-in":609,"./pa-in.js":609,"./pl":610,"./pl.js":610,"./pt":611,"./pt-br":612,"./pt-br.js":612,"./pt.js":611,"./ro":613,"./ro.js":613,"./ru":614,"./ru.js":614,"./sd":615,"./sd.js":615,"./se":616,"./se.js":616,"./si":617,"./si.js":617,"./sk":618,"./sk.js":618,"./sl":619,"./sl.js":619,"./sq":620,"./sq.js":620,"./sr":621,"./sr-cyrl":622,"./sr-cyrl.js":622,"./sr.js":621,"./ss":623,"./ss.js":623,"./sv":624,"./sv.js":624,"./sw":625,"./sw.js":625,"./ta":626,"./ta.js":626,"./te":627,"./te.js":627,"./tet":628,"./tet.js":628,"./tg":629,"./tg.js":629,"./th":630,"./th.js":630,"./tk":631,"./tk.js":631,"./tl-ph":632,"./tl-ph.js":632,"./tlh":633,"./tlh.js":633,"./tr":634,"./tr.js":634,"./tzl":635,"./tzl.js":635,"./tzm":636,"./tzm-latn":637,"./tzm-latn.js":637,"./tzm.js":636,"./ug-cn":638,"./ug-cn.js":638,"./uk":639,"./uk.js":639,"./ur":640,"./ur.js":640,"./uz":641,"./uz-latn":642,"./uz-latn.js":642,"./uz.js":641,"./vi":643,"./vi.js":643,"./x-pseudo":644,"./x-pseudo.js":644,"./yo":645,"./yo.js":645,"./zh-cn":646,"./zh-cn.js":646,"./zh-hk":647,"./zh-hk.js":647,"./zh-mo":648,"./zh-mo.js":648,"./zh-tw":649,"./zh-tw.js":649};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=680},682:function(e,t,r){"use strict";r.r(t);var n=r(512),o=r.n(n),c={name:"ProceduresLocals",methods:{iframeLoaded:function(){o()({log:!1},"#iframeProcedures")}}},l=r(55),d=r(92),f=r.n(d),m=r(768),h=r(493),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("Procedures By Region")])]),this._v(" "),t("iframe",{attrs:{id:"iframeProcedures",width:"100%",frameborder:"0",scrolling:"no",src:"https://franco-bruno-corteletti.shinyapps.io/latam-cto-procedures-locals/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:m.a,VRow:h.a})},749:function(e,t,r){e.exports=r.p+"img/latam-cto-registry_large.5058784.jpg"},750:function(e,t,r){e.exports=r.p+"img/CTO_phases.a2b0d15.webp"},751:function(e,t,r){"use strict";var n=r(666);r.n(n).a},752:function(e,t,r){(t=r(17)(!1)).push([e.i,'.SkeletonBox{display:inline-block;position:relative;overflow:hidden;vertical-align:middle;background-color:#dddbdd}.SkeletonBox:after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.2) 20%,hsla(0,0%,100%,.5) 60%,hsla(0,0%,100%,0));-webkit-animation:shimmer 5s infinite;animation:shimmer 5s infinite;content:""}@-webkit-keyframes shimmer{to{transform:translateX(100%)}}@keyframes shimmer{to{transform:translateX(100%)}}',""]),e.exports=t},753:function(e,t,r){"use strict";var n=r(667);r.n(n).a},754:function(e,t,r){(t=r(17)(!1)).push([e.i,"p{font-size:x-large;line-height:40px;margin-top:20px;margin-left:20px;margin-right:20px}p.stats{font-size:xxx-large}p.text{text-indent:50px;text-align:justify}",""]),e.exports=t},756:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(508),c=r(651),l={extends:c.c,mixins:[c.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},d=(r(668),{name:"Procedures",components:{LineChart:l},data:function(){return{optionsLineChart:null,datacollectionLineChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.annualProcedures();case 2:r=t.sent,n=r.countYears,c=r.uniqueYears,e.datacollectionLineChart={labels:c,datasets:[{borderAlign:"center",label:"Amount of procedures realized per year",backgroundColor:"blue",fill:!1,borderColor:"green",pointRadius:7,pointHoverRadius:10,data:n}]},e.optionsLineChart={plugins:{datalabels:{color:"gray",anchor:"center",clamp:!0,align:"top",font:{size:20}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:1e3,min:0}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),f=r(55),m=r(92),h=r.n(m),v=r(768),j=r(491),x=r(195),C=r(493),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Annual Procedures")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("line-chart",{attrs:{"chart-data":e.datacollectionLineChart,options:e.optionsLineChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:v.a,VContainer:j.a,VProgressCircular:x.a,VRow:C.a})},757:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(508),c=r(651),l={extends:c.a,mixins:[c.d.reactiveProp],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}},d=(r(668),{name:"SuccessfulProcedures",components:{BarChart:l},data:function(){return{optionsBarChart:null,datacollectionBarChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.successfulProceduresPerYear();case 2:r=t.sent,n=r.uniqueYears,c=r.perc,e.datacollectionBarChart={labels:n,datasets:[{borderAlign:"center",label:"% successful procedures per year",backgroundColor:"#019edf",data:c}]},e.optionsBarChart={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{max:100,min:50}}]}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),f=r(55),m=r(92),h=r.n(m),v=r(768),j=r(491),x=r(195),C=r(493),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Successful Procedures Per Year")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("bar-chart",{attrs:{"chart-data":e.datacollectionBarChart,options:e.optionsBarChart}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:v.a,VContainer:j.a,VProgressCircular:x.a,VRow:C.a})},758:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(508),c=r(663),l=(r(681),r(668),{name:"SuccessfulStrategies",components:{DoughnutChart:c.a},data:function(){return{optionsPieChart:null,datacollectionPieChart:null,loading:!0}},methods:{fillData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.successfulStrategies();case 2:r=t.sent,n=r.valuesStrategies,c=r.countStrategies,e.datacollectionPieChart={labels:n,datasets:[{borderAlign:"center",label:"Success strategies",data:c}]},e.optionsPieChart={responsive:!0,maintainAspectRatio:!1,plugins:{colorschemes:{scheme:"brewer.PastelTwo8"},datalabels:{formatter:function(e){return e+"%"},font:{size:20}}}},e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fillData();case 2:case"end":return t.stop()}}),t)})))()}}),d=r(55),f=r(92),m=r.n(f),h=r(768),v=r(491),j=r(195),x=r(493),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("p",[r("b",[e._v("Success Strategies")])]),e._v(" "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"blue",size:50}}):e._e(),e._v(" "),e.loading?e._e():r("doughnut-chart",{attrs:{"chart-data":e.datacollectionPieChart,options:e.optionsPieChart}}),r("br")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:h.a,VContainer:v.a,VProgressCircular:j.a,VRow:x.a})},759:function(e,t,r){"use strict";r.r(t);var n=r(512),o=r.n(n),c={name:"Angina",methods:{iframeLoaded:function(){o()({log:!1},"#iframeAngina")}}},l=r(55),d=r(92),f=r.n(d),m=r(768),h=r(491),v=r(493),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("Baseline & 1 Year Follow Up")])]),this._v(" "),t("iframe",{attrs:{id:"iframeAngina",width:"100%",frameborder:"0",scrolling:"no",src:"https://franco-bruno-corteletti.shinyapps.io/latam-cto-procedures/"},on:{load:this.iframeLoaded}})])],1)],1)}),[],!1,null,"5ca03638",null);t.default=component.exports;f()(component,{VCol:m.a,VContainer:h.a,VRow:v.a})},760:function(e,t,r){"use strict";r.r(t);var n=r(512),o=r.n(n),c={name:"Centers",methods:{iframeLoaded:function(){o()({log:!1},"#iframeCenters")}}},l=r(55),d=r(92),f=r.n(d),m=r(768),h=r(493),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",[t("v-col",{attrs:{align:"center"}},[t("p",[t("b",[this._v("LATAM CTO Centers")])]),this._v(" "),t("iframe",{attrs:{id:"iframeCenters",width:"100%",frameborder:"0",scrolling:"no",src:"https://franco-bruno-corteletti.shinyapps.io/latam-cto-centers/"},on:{load:this.iframeLoaded}})])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VCol:m.a,VRow:h.a})},776:function(e,t,r){"use strict";r.r(t);r(66);var n=r(20),o=r(508),c=r(506),l=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(path){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.GET(path));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={latamCtoCenters:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("centers/latamCtoCenters");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};r(7);function f(e){var t,r=e.componentFactory,n=e.loading,o=e.loadingData;return function(){return{component:new Promise((function(e){t=e})),loading:{mounted:function(){var e=this;if("IntersectionObserver"in window){var n=new IntersectionObserver((function(o){o[0].intersectionRatio<=0||(n.unobserve(e.$el),r().then(t))}));n.observe(this.$el)}else r().then(t)},render:function(e){return e(n,o)}}}}}r(23);var m={name:"SkeletonBox",props:{maxWidth:{default:100,type:Number},minWidth:{default:80,type:Number},height:{default:"1em",type:String},width:{default:null,type:String}},computed:{computedWidth:function(){return this.width||"".concat(Math.floor(Math.random()*(this.maxWidth-this.minWidth)+this.minWidth),"%")}}},h=(r(751),r(55)),v=Object(h.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"SkeletonBox",style:{height:this.height,width:this.computedWidth}})}),[],!1,null,null,null).exports,j=r(129),x={name:"index",layout:"public",components:{ProceduresLocals:r(682).default,Centers:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,760))},loading:v}),SuccessfulProcedures:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,757))},loading:v}),SuccessStrategies:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,758))},loading:v}),AnnualProcedures:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,756))},loading:v}),Angina:f({componentFactory:function(){return Promise.resolve().then(r.bind(null,759))},loading:v})},data:function(){return{countries:null,activeCenters:null,proceduresEnrolled:null,loadingCenters:!0,loadingProcedures:!0,logged:!1}},methods:{dashboard:function(){this.$router.push("/dashboard")},login:function(){this.$router.push("/auth")}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.currentAuthenticatedUser();case 3:e.logged=!0,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.logged=!1;case 9:return t.next=11,d.latamCtoCenters();case 11:return r=t.sent,e.countries=r.countries.length,e.activeCenters=r.centers.length,e.loadingCenters=!1,t.next=17,o.a.countAll();case 17:e.proceduresEnrolled=t.sent,e.loadingProcedures=!1;case 19:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},C=(r(753),r(92)),w=r.n(C),_=r(209),k=r(511),y=r(509),R=r(658),P=r(768),O=r(196),A=r(770),z=r(195),S=r(493),E=Object(h.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-card",{staticClass:"mx-auto"},[n("div",{attrs:{align:"center"}},[n("img",{attrs:{width:"65%",src:r(749)}})]),e._v(" "),n("img",{staticClass:"white--text align-end",attrs:{width:"100%",src:r(750)}}),e._v(" "),n("v-card-text",[n("p",{staticClass:"text"},[e._v("\n        The LATAM CTO Registry is the representation of the great work of a\n        community dedicated to improving the knowledge of complex PCI in Latin\n        America. The registry started as an idea in late 2016. After a year of\n        technical development, enrolled the first procedures in Brazil and\n        Argentina in early 2018 and surpassed the thousand procedures mark in\n        the same year.\n      ")]),e._v(" "),n("v-row",[n("v-col",{attrs:{align:"center"}},[n("p",[e._v("ACTIVE CENTERS")]),e._v(" "),e.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.activeCenters))]),e._v(" "),n("p",[e._v("COUNTRIES")]),e._v(" "),e.loadingCenters?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.countries))]),e._v(" "),n("p",[e._v("PROCEDURES ENROLLED")]),e._v(" "),e.loadingProcedures?n("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}}):e._e(),e._v(" "),n("p",{staticClass:"stats"},[e._v(e._s(this.proceduresEnrolled))])],1)],1),e._v(" "),n("div",{staticClass:"text-center"},[n("v-chip",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#geographicDistribution",expression:"'#geographicDistribution'"}],staticClass:"ma-10",attrs:{"x-large":""}},[e._v("\n          GEOGRAPHIC DISTRIBUTION\n        ")]),e._v(" "),n("v-chip",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#proceduralData",expression:"'#proceduralData'"}],staticClass:"ma-10",attrs:{"x-large":""}},[e._v("\n          PROCEDURAL DATA\n        ")]),e._v(" "),n("v-chip",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#anginaOutcome",expression:"'#anginaOutcome'"}],staticClass:"ma-10",attrs:{"x-large":""}},[e._v("\n          ONE YEAR OUTCOME\n        ")])],1),e._v(" "),n("div",{staticClass:"mb-10"},[n("Centers",{attrs:{id:"geographicDistribution"}})],1),e._v(" "),n("div",{staticClass:"mb-10"},[n("SuccessfulProcedures",{attrs:{id:"proceduralData"}}),e._v(" "),n("SuccessStrategies"),e._v(" "),n("AnnualProcedures"),e._v(" "),n("ProceduresLocals")],1),e._v(" "),n("div",{staticClass:"mb-10"},[n("Angina",{attrs:{id:"anginaOutcome"}})],1)],1),e._v(" "),e.logged?e._e():n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""},on:{click:e.login}},[n("v-icon",[e._v("mdi-account")])],1),e._v(" "),e.logged?n("v-btn",{attrs:{color:"blue",fab:"",large:"",dark:"",top:"",left:"",fixed:""},on:{click:e.dashboard}},[n("v-icon",[e._v("mdi-plus")])],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=E.exports;w()(E,{Centers:r(760).default,SuccessfulProcedures:r(757).default,SuccessStrategies:r(758).default,AnnualProcedures:r(756).default,ProceduresLocals:r(682).default,Angina:r(759).default}),w()(E,{VBtn:_.a,VCard:k.a,VCardText:y.a,VChip:R.a,VCol:P.a,VIcon:O.a,VLayout:A.a,VProgressCircular:z.a,VRow:S.a})}}]);