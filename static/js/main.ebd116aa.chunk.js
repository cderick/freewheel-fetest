(window["webpackJsonpfreewheel-fe-test"]=window["webpackJsonpfreewheel-fe-test"]||[]).push([[0],{11:function(e,t,a){e.exports={infoService:"DisrupInfo_infoService__3hdMI",linesClass:"DisrupInfo_linesClass__eNFo3",allClear:"DisrupInfo_allClear__jbtzO",notWorking:"DisrupInfo_notWorking__6axfG"}},15:function(e,t,a){e.exports={containerBackground:"HeroBanner_containerBackground__22L26",customMargin:"HeroBanner_customMargin__3HAIw",forms:"HeroBanner_forms__1TQA4"}},21:function(e,t,a){e.exports={topnav:"Navigation_topnav__1fqZC",imgResize:"Navigation_imgResize__1gmWh"}},33:function(e,t,a){e.exports={dataClick:"TflInfo_dataClick__2w6eC"}},34:function(e,t,a){e.exports={containerBackground:"TFLBanner_containerBackground__sV_U2"}},35:function(e,t,a){e.exports={customWidth:"DataBanner_customWidth__2Wtxq"}},36:function(e,t,a){e.exports=a.p+"static/media/loadingImage.bb01ab84.gif"},37:function(e,t,a){e.exports=a(77)},54:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),l=a.n(o),c=a(8),s=a(30),i=a.n(s),u=a(14);a(50),a(53),a(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(32),d="GET_DATACONTENT",f="GET_TFL_INFORMATION",h=a(13),p={queryContent:{entries:null,errors:null,status:"CONTENT_RETRIEVED_01"},tflContent:{entries:null,errors:null,status:"TFL_CONTENT_01"}},v=Object(h.fromJS)(p);var g=Object(m.combineReducers)({queryContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.getIn(["queryContent"]),t=arguments.length>1?arguments[1]:void 0;if(t.payload&&t.payload.data)switch(t.type){case d:return e.set("entries",t.payload.data);default:return e}else if(t.payload&&t.payload.data&&!t.payload.data.IsSuccessful)switch(t.type){case d:return e.set("errors",t.payload.data.ErrorMessage);default:return e}return e},tflContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.getIn(["tflContent"]),t=arguments.length>1?arguments[1]:void 0;if(t.payload&&t.payload.data)switch(t.type){case f:return e.set("entries",t.payload.data);default:return e}else if(t.payload&&t.payload.data&&!t.payload.data.IsSuccessful)switch(t.type){case f:return e.set("errors",t.payload.data.ErrorMessage);default:return e}return e}}),b=a(1),y=a(2),E=a(4),N=a(3),C=a(6),O=a(5),j=a(12),w=a.n(j),k="https://api.tfl.gov.uk/BikePoint/Search?query=",_="https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true";function I(e){var t=w.a.get("".concat(k).concat(e));return{type:d,payload:t}}function B(){var e=w.a.get(_);return{type:f,payload:e}}w.a.defaults.withCredentials=!1;var S=a(21),D=a.n(S),T=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.navItems)return null;var t=this.props.navItems,a=t.navigationIcon,n=t.navigation;return r.a.createElement("section",null,r.a.createElement("nav",{className:D.a.topnav,id:a.id},r.a.createElement("a",{className:"".concat(a.classes&&a.classes),id:a.id,href:a.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:D.a.imgResize,src:a.image,alt:a.alt})),n&&n.length&&n.map((function(t,a){return r.a.createElement("button",{key:"nav".concat(a),onClick:function(){return e.props.changeNav(t.id)}},t.title)}))))}}]),t}(r.a.Component);T.defaultProps={navItems:void 0};var x=T,q=a(33),L=a.n(q),A=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(N.a)(t).call(this,e))).sortData=a.sortData.bind(Object(C.a)(a)),a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"sortData",value:function(e){return e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:e.modeName>t.modeName?1:e.modeName<t.modeName?-1:0}))}},{key:"render",value:function(){var e=this;if(!this.props.tflInfo)return null;var t=this.sortData(this.props.tflInfo);return r.a.createElement("div",{className:"col-5 m-5"},t&&t.length&&t.map((function(t,a){return r.a.createElement("section",{key:"tlfInfo".concat(a),className:L.a.dataClick,onClick:function(){return e.props.handleClick(t)}},r.a.createElement("p",null,r.a.createElement("strong",null,t.modeName,": "),"".concat(t.name),r.a.createElement("span",null,t.serviceTypes.filter((function(e){return"night"===e.name.toLowerCase()})).length>0&&r.a.createElement("i",{className:"fas fa-moon"})),r.a.createElement("span",null,t.lineStatuses.filter((function(e){return 10!==e.statusSeverity})).length>0&&r.a.createElement("i",{className:"fas fa-ban"}))))})))}}]),t}(r.a.Component);A.defaultProps={tflInfo:null};var F=A,M=a(11),V=a.n(M),W=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){if(!this.props.transportSelect)return r.a.createElement("div",{className:"col-5 m-5 ".concat(V.a.infoService)});var e=this.props.transportSelect;return r.a.createElement("div",{className:"col-5 m-5 ".concat(V.a.infoService)},e&&r.a.createElement("section",null,r.a.createElement("p",{className:V.a.linesClass},r.a.createElement("strong",{className:"h5"},"Line:")," ",e.name),e.lineStatuses.filter((function(e){return 10===e.statusSeverity})).length>0?r.a.createElement("p",{className:V.a.allClear},"No service disruptions"):r.a.createElement("div",null,r.a.createElement("p",{className:V.a.notWorking},"Service currently suffering disruptions"),e.lineStatuses.map((function(e,t){return r.a.createElement("section",{key:"dis".concat(t)},r.a.createElement("p",null,r.a.createElement("strong",{className:"h5"},"Reason: "),e.reason))})))))}}]),t}(r.a.Component);W.defaultProps={transportSelect:null};var P=W,Q=a(34),R=a.n(Q),H=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(N.a)(t).call(this,e))).state={transportSelect:void 0},a.handleClick=a.handleClick.bind(Object(C.a)(a)),a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"handleClick",value:function(e){this.setState({transportSelect:e})}},{key:"render",value:function(){if(!this.props.tubeBanner)return null;var e=this.props.tubeBanner.tubeMessage;return r.a.createElement("section",null,r.a.createElement("div",{className:"container-fluid ".concat(R.a.containerBackground)},r.a.createElement("div",{className:"row h-100"},r.a.createElement("div",{className:"col my-auto text-center"},r.a.createElement("h1",{className:"display-4"},e&&e.title?e.title:"")))),r.a.createElement("div",{className:"row"},r.a.createElement(F,{tflInfo:this.props.tflInfo,handleClick:this.handleClick}),r.a.createElement(P,{transportSelect:this.state.transportSelect})))}}]),t}(r.a.Component);H.defaultProps={tubeBanner:null,tflInfo:null};var z=H,J=a(15),G=a.n(J),K=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(N.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(C.a)(a)),a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"handleChange",value:function(e){if(e){var t=e.target.value;t.length>1?this.props.getApiQuery(t):this.props.cleanData()}}},{key:"render",value:function(){var e=this;if(!this.props.heroBanner)return null;var t=this.props.heroBanner,a=t.heroMessage,n=t.heroForms;return r.a.createElement("div",{id:"homePage",className:"container-fluid ".concat(G.a.containerBackground)},r.a.createElement("div",{className:"row h-100"},r.a.createElement("div",{className:"col my-auto"},r.a.createElement("h1",{className:"display-4"},a&&a.title?a.title:""),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 m-auto"},n&&n.length&&n.map((function(t,a){return r.a.createElement("div",{key:"main".concat(a),className:"form-group text-left ".concat(G.a.forms," ").concat(t.customClass?G.a[t.customClass]:"")},r.a.createElement("label",{className:"text-white",htmlFor:t.id},t.label),r.a.createElement("input",{type:"text",onChange:function(t){e.handleChange(t)},className:"form-control",id:t.id,placeholder:t.placeholder}))}))))))))}}]),t}(r.a.Component);K.defaultProps={heroBanner:null};var U=K,Y=a(35),Z=a.n(Y),$=function(e){function t(){return Object(b.a)(this,t),Object(E.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cardsData,a=e.queryValue,n=e.showContent;return t?r.a.createElement("div",{id:"DataBanner",className:"container pt-5 pb-5"},n&&r.a.createElement("section",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h2",{className:"pb-5"},"You searching at: ",r.a.createElement("span",{className:"text-danger"},a)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},t&&t.length&&t.map((function(e,t){return r.a.createElement("div",{key:"map".concat(t),className:"card float-left mr-3 mb-3 ".concat(Z.a.customWidth)},r.a.createElement("img",{src:"https://wallpapercave.com/wp/66stx2A.jpg",className:"card-img-top",alt:"catPlaceholder"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-danger font-weight-bold"},e.commonName),r.a.createElement("p",{className:"card-text"},"".concat(e.id.substring(e.id.indexOf("_")+1)," ").concat(e.commonName," (").concat(e.lat,", ").concat(e.lon,")")),r.a.createElement("a",{href:"https://www.google.com/maps/search/".concat(e.lat,",").concat(e.lon,"/").concat(e.lat,",").concat(e.lon,",17z"),rel:"noopener noreferrer",target:"_blank",className:"btn btn-primary"},"Check on Google Maps")))})))))):null}}]),t}(r.a.Component);$.defaultProps={cardsData:null,queryValue:void 0,showContent:!1};var X=$,ee={heroBanner:{heroMessage:{title:"Cycle hire scheme."},heroForms:[{label:"Find a cycle to hire:",id:"location",placeholder:"London, SW20, Waterloo..."}]},tubeBanner:{tubeMessage:{title:"TFL Information"}},mainNav:{navigationIcon:{image:"https://www.freewheel.com/wp-content/themes/understrap-child/img/FREEWHEEL-KO.png",link:"https://www.freewheel.com/",alt:"freewheel-logo",classes:"float-left",target:"myTopnav",id:"home"},navigation:[{title:"Hire a Bike",id:"bikeHire"},{title:"TFL Information",id:"tflInfo"}]}},te=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(N.a)(t).call(this,e))).state={heroBanner:void 0,navItems:void 0,tubeBanner:void 0,defaultNav:"tflInfo"},a.changeNav=a.changeNav.bind(Object(C.a)(a)),a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=ee.mainNav,t=ee.heroBanner,a=ee.tubeBanner;this.setState({heroBanner:t,navItems:e,tubeBanner:a})}},{key:"changeNav",value:function(e){this.state.defaultNav!==e&&this.setState({defaultNav:e})}},{key:"render",value:function(){var e=this.state,t=e.defaultNav,a=e.navItems,n=e.tubeBanner,o=e.heroBanner,l=this.props,c=l.tflInfo,s=l.cleanData,i=l.getApiQuery,u=l.showContent,m=l.queryValue,d=l.retrievedObjet;return r.a.createElement("section",null,r.a.createElement(x,{changeNav:this.changeNav,navItems:a}),"tflInfo"===t?r.a.createElement("section",null,r.a.createElement(z,{tflInfo:c,tubeBanner:n})):r.a.createElement("section",null,r.a.createElement(U,{cleanData:s,getApiQuery:i,heroBanner:o}),r.a.createElement(X,{showContent:u,queryValue:m,cardsData:d})))}}]),t}(r.a.Component);te.defaultProps={tflInfo:void 0,retrievedObjet:void 0,queryValue:void 0,showContent:!1};var ae=te,ne=a(36),re=a.n(ne),oe=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(E.a)(this,Object(N.a)(t).call(this,e))).state={queryValue:void 0,showContent:!1},a.getApiQuery=a.getApiQuery.bind(Object(C.a)(a)),a.cleanData=a.cleanData.bind(Object(C.a)(a)),a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.getTFLInformation()}},{key:"getApiQuery",value:function(e){this.props.getQueryValue(e),this.setState({queryValue:e,showContent:!0})}},{key:"cleanData",value:function(){this.setState({showContent:!1})}},{key:"render",value:function(){var e=this.state,t=e.queryValue,a=e.showContent,n=this.props,o=n.queryContent,l=n.tflContent;return l&&l.entries?r.a.createElement(ae,{queryValue:t,getApiQuery:this.getApiQuery,retrievedObjet:o.entries,tflInfo:l.entries,showContent:a,cleanData:this.cleanData}):r.a.createElement("section",{className:"w-100 text-center pt-5 mt-5"},r.a.createElement("object",{alt:"Loading","aria-label":"Loading",className:"mt-5",width:"200",height:"200",data:re.a}))}}]),t}(r.a.Component);oe.defaultProps={queryContent:null,tflContent:null};var le=Object(u.b)((function(e){return{queryContent:e.get("queryContent").toJS(),tflContent:e.get("tflContent").toJS()}}),(function(e){return Object(c.b)({getQueryValue:I,getTFLInformation:B},e)}))(oe),ce=null;ce=Object(c.c)(g,Object(c.a)(i.a)),l.a.render(r.a.createElement(u.a,{store:ce},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ebd116aa.chunk.js.map