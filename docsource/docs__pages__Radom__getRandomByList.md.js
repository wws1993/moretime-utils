(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{aa4L:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("NS8C"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),dumi_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("urbB"),dumi_theme__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__),dumi_theme_default_src_builtins_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("Yn3I");const LOCALE_TEXTS={"zh-CN":{name:"\u5C5E\u6027\u540D",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",default:"\u9ED8\u8BA4\u503C",required:"(\u5FC5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};__webpack_exports__.a=({params,title})=>{const fmt=params==null?void 0:params.replace(/\\n/g,""),Apis=eval(fmt),_useContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context),locale=_useContext.locale,texts=/^zh|cn$/i.test(locale||"")?LOCALE_TEXTS["zh-CN"]:LOCALE_TEXTS["en-US"];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Apis&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markdown"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_src_builtins_Table__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.description),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.type),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.default))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,Apis.map((a,u)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{key:u},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,a.keyword),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,a.description||"--"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,a.type)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,a.default||a.required&&texts.required||"--"))))))))}},mZLO:function(a,u,_){"use strict";_.r(u);var r=_("NS8C"),e=_.n(r),t=_("urbB"),o=_.n(t),l=_("aa4L"),c=_("INx8");const m=e.a.memo(({demos:n})=>e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"\u83B7\u53D6\u968F\u673A\u5B50\u5143\u7D20"},e.a.createElement(t.AnchorLink,{to:"#\u83B7\u53D6\u968F\u673A\u5B50\u5143\u7D20","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u83B7\u53D6\u968F\u673A\u5B50\u5143\u7D20"),e.a.createElement("h2",{id:"\u57FA\u7840\u7528\u6CD5"},e.a.createElement(t.AnchorLink,{to:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u7528\u6CD5"),e.a.createElement("p",null,"\u5C06\u4ECE\u76EE\u6807list\u4E2D\u968F\u673A\u53D6\u4E00\u6761\u6570\u636E\u629B\u51FA"),e.a.createElement(c.a,{code:`import { random } from '@moretime/utils'

const lib: number[] = [1, 2, 3]
const result = random.getRandomByList(lib) // 1 or 2 or 3`,lang:"ts"}),e.a.createElement("h2",{id:"\u4F20\u53C2"},e.a.createElement(t.AnchorLink,{to:"#\u4F20\u53C2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F20\u53C2")),e.a.createElement(l.a,{params:"[\\n {keyword: 'param0', type: 'T[]', description: '\u5F85\u53D6\u503C\u7684list', required: true},\\n]"}),e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u56DE\u53C2"},e.a.createElement(t.AnchorLink,{to:"#\u56DE\u53C2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u56DE\u53C2")),e.a.createElement(l.a,{params:"[\\n {keyword: 'param0', type: 'T', description: '\u4EFB\u4E00\u5143\u7D20'},\\n]"}))));u.default=n=>{const d=e.a.useContext(t.context),i=d.demos;return e.a.useEffect(()=>{var E;n!=null&&(E=n.location)!==null&&E!==void 0&&E.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.a.createElement(m,{demos:i})}}}]);