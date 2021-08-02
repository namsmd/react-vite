"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React),reactRouter=require("react-router"),reactRouterDom=require("react-router-dom"),isProduction="production"===process.env.NODE_ENV,prefix="Invariant failed";function invariant(e,t){if(!e)throw isProduction?new Error(prefix):new Error(prefix+": "+(t||""))}var ErrorPageContext=React.createContext(null),FromRouteContext=React.createContext(null),GuardContext=React.createContext(null),LoadingPageContext=React.createContext(null),useGlobalGuards=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=!1);var r=React.useContext(GuardContext),n=React.useMemo(function(){return t?e.slice():(r||[]).concat(e)},[e,t]);return React.useDebugValue(n.map(function(e){return e.name}).join(" | ")),n};function usePrevious(e){var t=React.useRef(e);return React.useEffect(function(){t.current=e}),React.useDebugValue(t.current),t.current}function useStateWhenMounted(e){var t=React.useRef(!0),r=React.useState(e),n=r[0],a=r[1];return React.useEffect(function(){return function(){t.current=!1}},[]),React.useDebugValue(n),[n,function(e){t.current&&a(e)}]}function useStateRef(e){var t=React.useRef(e),r=useStateWhenMounted(0)[1];return[t,function(e){t.current="function"==typeof e?e(t.current):e,r(function(e){return e+1})}]}var GuardProvider=function(e){var t=e.children,r=e.guards,n=e.ignoreGlobal,a=e.loading,u=e.error,o=React.useContext(reactRouter.__RouterContext);invariant(!!o,"You should not use <GuardProvider> outside a <Router>");var c=usePrevious(o),i=useGlobalGuards(r,n),l=React.useContext(LoadingPageContext),s=React.useContext(ErrorPageContext);return React__default.createElement(GuardContext.Provider,{value:i},a?React__default.createElement(LoadingPageContext.Provider,{value:a||l},React__default.createElement(ErrorPageContext.Provider,{value:u||s},React__default.createElement(FromRouteContext.Provider,{value:c},t))):React__default.createElement(ErrorPageContext.Provider,{value:u||s},React__default.createElement(FromRouteContext.Provider,{value:c},t)))};GuardProvider.defaultProps={guards:[],ignoreGlobal:!1};var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function __awaiter(e,t,r,n){return new(r||(r=Promise))(function(a,u){function o(e){try{i(n.next(e))}catch(e){u(e)}}function c(e){try{i(n.throw(e))}catch(e){u(e)}}function i(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(o,c)}i((n=n.apply(e,t||[])).next())})}function __generator(e,t){var r,n,a,u,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(a=2&u[0]?n.return:u[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,u[1])).done)return a;switch(n=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,n=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){o.label=u[1];break}if(6===u[0]&&o.label<a[1]){o.label=a[1],a=u;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(u);break}a[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],n=0}finally{r=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}function ContextWrapper(e){var t=e.children,r=e.context,n=e.value;if(n){var a=r.Provider;return React__default.createElement(a,{value:n},t)}return React__default.createElement(React.Fragment,null,t)}function renderPage(e,t){return e?"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e?React.createElement(e,t||{}):React__default.createElement(React.Fragment,null,e):null}var GuardTypes=Object.freeze({CONTINUE:"CONTINUE",PROPS:"PROPS",REDIRECT:"REDIRECT"}),_this=null,Guard=function(e){var t=e.children,r=e.component,n=e.meta,a=e.render,u=React.useContext(reactRouter.__RouterContext),o=usePrevious(u),c=React.useMemo(function(){return u.location.pathname!==o.location.pathname},[o,u]),i=React.useContext(FromRouteContext),l=React.useContext(GuardContext),s=React.useContext(LoadingPageContext),d=React.useContext(ErrorPageContext),f=React.useMemo(function(){return!!(l&&l.length>0)},[l]),R=useStateRef(0),p=R[0],_=R[1],v=useStateRef(!f),m=v[0],g=v[1],x=useStateWhenMounted(null),h=x[0],P=x[1],C=useStateWhenMounted(null),E=C[0],b=C[1],y=useStateWhenMounted({}),G=y[0],w=y[1],O=React.useCallback(function(){return p.current},[p]),S=React.useCallback(function(e){var t=function(t){return function(r){return e({type:t,payload:r})}};return Object.assign(function(){return e({type:GuardTypes.CONTINUE})},{props:t(GuardTypes.PROPS),redirect:t(GuardTypes.REDIRECT)})},[]),D=function(){return __awaiter(_this,void 0,void 0,function(){var e,t,r,a,o,c,s,d;return __generator(this,function(f){switch(f.label){case 0:e=p.current,t={},r=null,a=null,f.label=1;case 1:return f.trys.push([1,3,,4]),[4,__awaiter(_this,void 0,void 0,function(){var e,t,r,a,o,c;return __generator(this,function(s){switch(s.label){case 0:if(e=0,t={},r=null,!l)return[3,3];s.label=1;case 1:return!r&&e<l.length?[4,(d=l[e],new Promise(function(e,t){return __awaiter(_this,void 0,void 0,function(){var r,a;return __generator(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),r=__assign({},u,{meta:n||{}}),[4,d(r,i,S(e))];case 1:return o.sent(),[3,3];case 2:return a=o.sent(),t(a),[3,3];case 3:return[2]}})})}))]:[3,3];case 2:return a=s.sent(),o=a.type,(c=a.payload)&&(o===GuardTypes.REDIRECT?r=c:o===GuardTypes.PROPS&&(t=Object.assign(t,c))),e+=1,[3,1];case 3:return[2,{props:t,redirect:r}]}var d})})];case 2:return o=f.sent(),c=o.props,s=o.redirect,t=c,a=s,[3,4];case 3:return d=f.sent(),r=d.message||"Not found.",[3,4];case 4:return e===O()&&(w(t),P(r),b(a),g(!0)),[2]}})})};if(React.useEffect(function(){D()},[]),React.useEffect(function(){c&&(_(function(e){return e+1}),P(null),b(null),g(!f),f&&D())},[c]),c)return f?renderPage(s,u):null;if(!m.current)return renderPage(s,u);if(h)return renderPage(d,__assign({},u,{error:h}));if(E){var T="string"==typeof E?E:E.pathname,j=u.match,I=j.path,N=j.isExact;if(T&&!reactRouterDom.matchPath(T,{path:I,exact:N}))return React__default.createElement(reactRouterDom.Redirect,{to:E})}return React__default.createElement(reactRouter.__RouterContext.Provider,{value:__assign({},u,G)},React__default.createElement(reactRouterDom.Route,{component:r,render:a},t))},GuardedRoute=function(e){var t=e.children,r=e.component,n=e.error,a=e.guards,u=e.ignoreGlobal,o=e.loading,c=e.meta,i=e.render,l=e.path,s=__rest(e,["children","component","error","guards","ignoreGlobal","loading","meta","render","path"]);invariant(!!React.useContext(GuardContext),"You should not use <GuardedRoute> outside a <GuardProvider>");var d=useGlobalGuards(a,u);return React__default.createElement(reactRouterDom.Route,__assign({path:l},s,{render:function(){return React__default.createElement(GuardContext.Provider,{value:d},o?React__default.createElement(ContextWrapper,{context:LoadingPageContext,value:o},React__default.createElement(ContextWrapper,{context:ErrorPageContext,value:n},React__default.createElement(Guard,{name:l,component:r,meta:c,render:i},t))):React__default.createElement(ContextWrapper,{context:ErrorPageContext,value:n},React__default.createElement(Guard,{name:l,component:r,meta:c,render:i},t)))}}))};GuardedRoute.defaultProps={guards:[],ignoreGlobal:!1},exports.GuardProvider=GuardProvider,exports.GuardedRoute=GuardedRoute;
