(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/7QA":function(M,l,e){"use strict";e.d(l,"a",function(){return a});var a={};e.r(a),e.d(a,"getRandom",function(){return m}),e.d(a,"getRandomByList",function(){return i}),e.d(a,"getRandomString",function(){return d});const r=(t,n="yyyy/MM/dd hh:mm:ss")=>{if(t=new Date(t),String(t)==="Invalid Date")return"Invalid Date";if(isNaN(t.getTime()))throw Error("\u8BF7\u68C0\u67E5\u4F20\u5165\u65F6\u95F4\uFF01");const o={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(n)&&(n=n.replace(RegExp.$1,String(t.getFullYear()).substr(4-RegExp.$1.length)));for(const u in o){const g=u;new RegExp("("+u+")").test(n)&&(n=n.replace(RegExp.$1,String(RegExp.$1.length===1?o[g]:("00"+o[g]).substr(String(o[g]).length))))}return n},s=t=>new Date(r(t,"yyyy/MM/dd 00:00:00")),E=t=>new Date(r(t,"yyyy/MM/dd 23:59:59")),_=t=>Array.from(new Set(t)),c=(t,n)=>t.sort((o,u)=>o[n]-u[n]),m=(t,n=0)=>Math.random()*(t+1)+n,i=t=>t[Math.floor(m(t.length))],d=(t="****-*****-***********-******-**")=>{const n="1234567890abcdefghijklmnopqrstuvwxyz".split("");return t.split("").map(o=>o!=="*"?o:i(n)).join("")}},tQ6A:function(M,l,e){"use strict";e.r(l);var a=e("tJVT"),r=e("q1tI"),s=e.n(r),E=e("/7QA");l.default=()=>{const _=Object(r.useState)(""),c=Object(a.a)(_,2),m=c[0],i=c[1],d=Object(r.useState)("yyyy-****-****-****"),t=Object(a.a)(d,2),n=t[0],o=t[1],u=()=>i(E.a.getRandomString(n));return Object(r.useEffect)(u,[]),s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("label",null,"template for string"),s.a.createElement("input",{type:"text",placeholder:"please write template here...",value:n,onInput:g=>o(g.target.value)})),s.a.createElement("p",null,s.a.createElement("code",null,s.a.createElement("b",{style:{color:"red"}},"result"),": ",m)),s.a.createElement("button",{onClick:u},"refresh"))}},"vKg/":function(M,l,e){"use strict";e.r(l);var a=e("tJVT"),r=e("q1tI"),s=e.n(r),E=e("/7QA");l.default=()=>{const _=Object(r.useState)(""),c=Object(a.a)(_,2),m=c[0],i=c[1],d=()=>i(E.a.getRandomString());return Object(r.useEffect)(d,[]),s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("code",null,s.a.createElement("b",{style:{color:"red"}},"result"),": ",m)),s.a.createElement("button",{onClick:d},"refresh"))}}}]);