(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Wcqk:function(_,E,t){"use strict";t.r(E);var r=t("q1tI"),e=t.n(r),a=t("dEAq"),o=t.n(a),c=t("aa4L"),l=t("H1Ra");const m=e.a.memo(({demos:u})=>e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"\u83B7\u53D6\u968F\u673A\u6570"},e.a.createElement(a.AnchorLink,{to:"#\u83B7\u53D6\u968F\u673A\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u83B7\u53D6\u968F\u673A\u6570"),e.a.createElement("h2",{id:"\u9ED8\u8BA4\u7528\u6CD5"},e.a.createElement(a.AnchorLink,{to:"#\u9ED8\u8BA4\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9ED8\u8BA4\u7528\u6CD5"),e.a.createElement("p",null,"\u57FA\u7840\u4F7F\u7528\u65F6\uFF0C\u4F1A\u968F\u673A\u8FD4\u56DE\u4E00\u4E2A0-1\u4E4B\u95F4\u7684\u6570\u5B57"),e.a.createElement(l.a,{code:`import { random } from '@moretime/utils'

const num = random.getRandom()`,lang:"ts"}),e.a.createElement("h2",{id:"\u8FDB\u9636\u7528\u6CD5"},e.a.createElement(a.AnchorLink,{to:"#\u8FDB\u9636\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u8FDB\u9636\u7528\u6CD5"),e.a.createElement("p",null,"\u4F20\u5165\u6700\u5927\u3001\u6700\u5C0F\u503C\uFF0C\u5C06\u751F\u6210\u6B64\u533A\u95F4\u4E4B\u95F4\u7684\u6570\uFF0C\u6700\u5C0F\u503C\u9ED8\u8BA4\u4E3A0\uFF0C\u6700\u5927\u503C\u9ED8\u8BA4\u4E3A1"),e.a.createElement(l.a,{code:`import { random } from '@moretime/utils'

const num = random.getRandom(3) // 0 ~ 3
const num = random.getRandom(100, 1) // 1 ~ 100`,lang:"ts"}),e.a.createElement("h2",{id:"\u4F20\u53C2"},e.a.createElement(a.AnchorLink,{to:"#\u4F20\u53C2","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F20\u53C2")),e.a.createElement(c.a,{params:"[\\n {keyword: 'param0', type: 'number', description: '\u6700\u5927\u503C', default: '1'},\\n {keyword: 'param1', type: 'number', description: '\u6700\u5C0F\u503C', default: '0'},\\n]"}))));E.default=u=>{const d=e.a.useContext(a.context),i=d.demos;return e.a.useEffect(()=>{var n;u!=null&&(n=u.location)!==null&&n!==void 0&&n.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.a.createElement(m,{demos:i})}},aa4L:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),dumi_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("dEAq"),dumi_theme__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__),dumi_theme_default_src_builtins_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("wCci");const LOCALE_TEXTS={"zh-CN":{name:"\u5C5E\u6027\u540D",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",default:"\u9ED8\u8BA4\u503C",required:"(\u5FC5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};__webpack_exports__.a=({params,title})=>{const fmt=params==null?void 0:params.replace(/\\n/g,""),Apis=eval(fmt),_useContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(dumi_theme__WEBPACK_IMPORTED_MODULE_1__.context),locale=_useContext.locale,texts=/^zh|cn$/i.test(locale||"")?LOCALE_TEXTS["zh-CN"]:LOCALE_TEXTS["en-US"];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Apis&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markdown"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme_default_src_builtins_Table__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.name),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.description),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.type),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,texts.default))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,Apis.map(_=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{key:_.keyword},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,_.keyword),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,_.description||"--"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,_.type)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,_.default||_.required&&texts.required||"--"))))))))}}}]);