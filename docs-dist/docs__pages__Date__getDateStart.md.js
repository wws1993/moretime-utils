(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PKSa:function(t,n,_){"use strict";_.r(n);var u=_("NS8C"),e=_.n(u),a=_("urbB"),D=_.n(a),r=_("aa4L"),c=_("INx8");const d=e.a.memo(({demos:E})=>e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"\u83B7\u53D6\u6BCF\u5929\u5F00\u59CB\u65F6\u95F4"},e.a.createElement(a.AnchorLink,{to:"#\u83B7\u53D6\u6BCF\u5929\u5F00\u59CB\u65F6\u95F4","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u83B7\u53D6\u6BCF\u5929\u5F00\u59CB\u65F6\u95F4"),e.a.createElement(c.a,{code:`import { date } from '@moretime/utils'

const t = date.getDateStart()`,lang:"ts"}),e.a.createElement("h2",{id:"\u4F20\u53C2"},e.a.createElement(a.AnchorLink,{to:"#\u4F20\u53C2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F20\u53C2")),e.a.createElement(r.a,{params:"[\\n {keyword: 'param0', type: 'string|number|Date', description: '\u65E5\u671F', default: 'Date.now()'},\\n]"}))));n.default=E=>{const m=e.a.useContext(a.context),i=m.demos;return e.a.useEffect(()=>{var l;E!=null&&(l=E.location)!==null&&l!==void 0&&l.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(E.location.hash.slice(1)))},[]),e.a.createElement(d,{demos:i})}},aa4L:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("NS8C"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),dumi_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("urbB"),dumi_theme__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__),dumi_theme_default_src_builtins_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("Yn3I");const LOCALE_TEXTS={"zh-CN":{name:"\u5C5E\u6027\u540D",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",default:"\u9ED8\u8BA4\u503C",required:"(\u5FC5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};__webpack_exports__.a=({params,title})=>{const fmt=params==null?void 0:params.replace(/\\n/g,""),Apis=eval(fmt),_useContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context),locale=_useContext.locale,texts=/^zh|cn$/i.test(locale||"")?LOCALE_TEXTS["zh-CN"]:LOCALE_TEXTS["en-US"];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Apis&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markdown"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_src_builtins_Table__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.description),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.type),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.default))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,Apis.map((t,n)=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{key:n},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,t.keyword),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,t.description||"--"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,t.type)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,t.default||t.required&&texts.required||"--"))))))))}}}]);
