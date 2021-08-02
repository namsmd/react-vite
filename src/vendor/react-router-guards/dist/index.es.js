import e,{createContext as r,useContext as n,useMemo as t,useDebugValue as o,useRef as u,useEffect as a,useState as c,Fragment as l,createElement as i,useCallback as f}from"react";import{__RouterContext as s}from"react-router";import{matchPath as p,Redirect as v,Route as d}from"react-router-dom";var m="production"===process.env.NODE_ENV,h="Invariant failed";function b(e,r){if(!e)throw m?new Error(h):new Error(h+": "+(r||""))}var y=r(null),E=r(null),g=r(null),P=r(null),O=function(e,r){void 0===e&&(e=[]),void 0===r&&(r=!1);var u=n(g),a=t(function(){return r?e.slice():(u||[]).concat(e)},[e,r]);return o(a.map(function(e){return e.name}).join(" | ")),a};function w(e){var r=u(e);return a(function(){r.current=e}),o(r.current),r.current}function x(e){var r=u(!0),n=c(e),t=n[0],l=n[1];return a(function(){return function(){r.current=!1}},[]),o(t),[t,function(e){r.current&&l(e)}]}function R(e){var r=u(e),n=x(0)[1];return[r,function(e){r.current="function"==typeof e?e(r.current):e,n(function(e){return e+1})}]}var j=function(r){var t=r.children,o=r.guards,u=r.ignoreGlobal,a=r.loading,c=r.error,l=n(s);b(!!l,"You should not use <GuardProvider> outside a <Router>");var i=w(l),f=O(o,u),p=n(P),v=n(y);return e.createElement(g.Provider,{value:f},a?e.createElement(P.Provider,{value:a||p},e.createElement(y.Provider,{value:c||v},e.createElement(E.Provider,{value:i},t))):e.createElement(y.Provider,{value:c||v},e.createElement(E.Provider,{value:i},t)))};j.defaultProps={guards:[],ignoreGlobal:!1};var G=function(){return(G=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};function I(e,r,n,t){return new(n||(n=Promise))(function(o,u){function a(e){try{l(t.next(e))}catch(e){u(e)}}function c(e){try{l(t.throw(e))}catch(e){u(e)}}function l(e){e.done?o(e.value):new n(function(r){r(e.value)}).then(a,c)}l((t=t.apply(e,r||[])).next())})}function N(e,r){var n,t,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,t&&(o=2&u[0]?t.return:u[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,t=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=r.call(e,a)}catch(e){u=[6,e],t=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}function S(r){var n=r.children,t=r.context,o=r.value;if(o){var u=t.Provider;return e.createElement(u,{value:o},n)}return e.createElement(l,null,n)}function T(r,n){return r?"string"!=typeof r&&"boolean"!=typeof r&&"number"!=typeof r?i(r,n||{}):e.createElement(l,null,r):null}var C=Object.freeze({CONTINUE:"CONTINUE",PROPS:"PROPS",REDIRECT:"REDIRECT"}),D=function(r){var o=r.children,u=r.component,c=r.meta,l=r.render,i=n(s),m=w(i),h=t(function(){return i.location.pathname!==m.location.pathname},[m,i]),b=n(E),O=n(g),j=n(P),S=n(y),D=t(function(){return!!(O&&O.length>0)},[O]),k=R(0),U=k[0],Y=k[1],z=R(!D),V=z[0],_=z[1],q=x(null),A=q[0],B=q[1],F=x(null),H=F[0],J=F[1],K=x({}),L=K[0],M=K[1],Q=f(function(){return U.current},[U]),W=f(function(e){var r=function(r){return function(n){return e({type:r,payload:n})}};return Object.assign(function(){return e({type:C.CONTINUE})},{props:r(C.PROPS),redirect:r(C.REDIRECT)})},[]),X=function(){return I(null,void 0,void 0,function(){var e,r,n,t,o,u,a,l;return N(this,function(f){switch(f.label){case 0:e=U.current,r={},n=null,t=null,f.label=1;case 1:return f.trys.push([1,3,,4]),[4,I(null,void 0,void 0,function(){var e,r,n,t,o,u;return N(this,function(a){switch(a.label){case 0:if(e=0,r={},n=null,!O)return[3,3];a.label=1;case 1:return!n&&e<O.length?[4,(l=O[e],new Promise(function(e,r){return I(null,void 0,void 0,function(){var n,t;return N(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n=G({},i,{meta:c||{}}),[4,l(n,b,W(e))];case 1:return o.sent(),[3,3];case 2:return t=o.sent(),r(t),[3,3];case 3:return[2]}})})}))]:[3,3];case 2:return t=a.sent(),o=t.type,(u=t.payload)&&(o===C.REDIRECT?n=u:o===C.PROPS&&(r=Object.assign(r,u))),e+=1,[3,1];case 3:return[2,{props:r,redirect:n}]}var l})})];case 2:return o=f.sent(),u=o.props,a=o.redirect,r=u,t=a,[3,4];case 3:return l=f.sent(),n=l.message||"Not found.",[3,4];case 4:return e===Q()&&(M(r),B(n),J(t),_(!0)),[2]}})})};if(a(function(){X()},[]),a(function(){h&&(Y(function(e){return e+1}),B(null),J(null),_(!D),D&&X())},[h]),h)return D?T(j,i):null;if(!V.current)return T(j,i);if(A)return T(S,G({},i,{error:A}));if(H){var Z="string"==typeof H?H:H.pathname,$=i.match,ee=$.path,re=$.isExact;if(Z&&!p(Z,{path:ee,exact:re}))return e.createElement(v,{to:H})}return e.createElement(s.Provider,{value:G({},i,L)},e.createElement(d,{component:u,render:l},o))},k=function(r){var t=r.children,o=r.component,u=r.error,a=r.guards,c=r.ignoreGlobal,l=r.loading,i=r.meta,f=r.render,s=r.path,p=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]])}return n}(r,["children","component","error","guards","ignoreGlobal","loading","meta","render","path"]);b(!!n(g),"You should not use <GuardedRoute> outside a <GuardProvider>");var v=O(a,c);return e.createElement(d,G({path:s},p,{render:function(){return e.createElement(g.Provider,{value:v},l?e.createElement(S,{context:P,value:l},e.createElement(S,{context:y,value:u},e.createElement(D,{name:s,component:o,meta:i,render:f},t))):e.createElement(S,{context:y,value:u},e.createElement(D,{name:s,component:o,meta:i,render:f},t)))}}))};k.defaultProps={guards:[],ignoreGlobal:!1};export{j as GuardProvider,k as GuardedRoute};
