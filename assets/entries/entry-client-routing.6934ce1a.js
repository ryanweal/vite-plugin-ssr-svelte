import{i as H,_ as I,s as et,p as L,a as O,b as l,c as F,d as Q,g as W,e as x,f as ye,h as v,j as u,m as w,k as j,l as d,n as tt,o as g,q as C,r as nt,t as be,u as Z,v as rt,w as k,x as _e,y as ve,z as ot,A as Y,B as st,C as it,D as at,E as Re,F as Se,G as lt,H as ut,I as ct,J as Pe,K as ft,L as ee,M as V,N as dt,O as gt}from"../chunks/chunk-dbd83a2f.js";function P(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function ae(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function z(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function ht(e){return typeof e=="object"&&e!==null&&"then"in e&&H(e.then)}const pt=["default"],mt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pt},Symbol.toStringTag,{value:"Module"})),yt=["default"],bt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yt},Symbol.toStringTag,{value:"Module"})),_t=["default"],vt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_t},Symbol.toStringTag,{value:"Module"})),Rt=["render","passToClient"],St=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rt},Symbol.toStringTag,{value:"Module"})),Pt=["onBeforeRender"],wt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Pt},Symbol.toStringTag,{value:"Module"})),Ot=["render"],Ft=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"})),te={},we={},Et={},D={},Ct=[],Tt={},kt=!0,xt=[],At={onBeforeRoute:null},It=Object.assign({"/pages/_error.page.svelte":()=>I(()=>import("./pages_error.page.94168d88.js"),["assets/entries/pages_error.page.94168d88.js","assets/chunks/chunk-b636a0bf.js","assets/static/_layout.254de47c.css"]),"/pages/about/index.page.svelte":()=>I(()=>import("./pages_about_index.page.0a14f1d3.js"),["assets/entries/pages_about_index.page.0a14f1d3.js","assets/chunks/chunk-b636a0bf.js","assets/static/_layout.254de47c.css","assets/chunks/chunk-98db9973.js","assets/static/index.page.e221c2a1.css"]),"/pages/index.page.svelte":()=>I(()=>import("./pages_index.page.93510f8d.js"),["assets/entries/pages_index.page.93510f8d.js","assets/chunks/chunk-b636a0bf.js","assets/static/_layout.254de47c.css","assets/chunks/chunk-98db9973.js"])}),jt={...It};te[".page"]=jt;const Nt=Object.assign({"/pages/_error.page.svelte":mt,"/pages/about/index.page.svelte":bt,"/pages/index.page.svelte":vt}),$t={...Nt};D[".page"]=$t;const Bt=Object.assign({"/pages/_default/_default.page.server.js":St,"/pages/about/index.page.server.js":wt}),Ht={...Bt};D[".page.server"]=Ht;const Lt=Object.assign({}),Wt={...Lt};we[".page.route"]=Wt;const Dt=Object.assign({"/pages/_default/_default.page.client.js":()=>I(()=>import("./pages_default_default.page.client.00038293.js"),[])}),Ut={...Dt};te[".page.client"]=Ut;const Vt=Object.assign({"/pages/_default/_default.page.client.js":Ft}),zt={...Vt};D[".page.client"]=zt;const Gt=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:kt,neverLoaded:Tt,pageConfigGlobal:At,pageConfigs:xt,pageFilesEager:we,pageFilesExportNamesEager:D,pageFilesExportNamesLazy:Et,pageFilesLazy:te,pageFilesList:Ct},Symbol.toStringTag,{value:"Module"}));et(Gt);function Kt(e){return L(e,"/").pathname}function Mt(){var e,t,n,o;const r=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),s=!!(!((o=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||o===void 0)&&o.size),i=!!window.__vite_plugin_react_preamble_installed__;return r||s||i}function Oe(e,t){const n=Object.keys,o=typeof e;return e&&t&&o==="object"&&o===typeof t?n(e).length===n(t).length&&n(e).every(s=>Oe(e[s],t[s])):e===t}function Yt(e,t){return O(e)&&O(t)&&e.constructor===t.constructor&&Oe({...e,stack:null},{...t,stack:null})&&t.message===t.message}function $(e){window.location.href=e}function qt(e){return new Promise(t=>setTimeout(t,e))}function Jt(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}l(Q());F();const le=W("navigationState.ts",{}),Xt=x(),Fe={markNavigationChange(){le.navigationChanged=!0},get noNavigationChangeYet(){return!le.navigationChanged&&this.isFirstUrl(x())},isFirstUrl(e){return e===Xt}};async function Qt(e,t){const o=ye(e,t).filter(s=>s.fileType===".page.server");return await Promise.all(o.map(async s=>{s.exportNames||(l(s.loadExportNames,t),await s.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:o.some(({exportNames:s})=>(l(s),s.includes("onBeforeRender")))}}function Zt(e,t){if(!P(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function en(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}Q()&&F();function Ee(e,t=!0){l(e.urlOriginal),"urlPathname"in e&&l(z(e,"urlPathname")),Object.defineProperty(e,"urlPathname",{get:Te,enumerable:t,configurable:!0}),"url"in e&&l(z(e,"url")),Object.defineProperty(e,"url",{get:tn,enumerable:!1,configurable:!0}),"urlParsed"in e&&l(z(e,"urlParsed")),Object.defineProperty(e,"urlParsed",{get:nn,enumerable:t,configurable:!0})}function Ce(e){let t=e._urlHandler;t||(t=r=>r);const n=t(e.urlOriginal),o=e._baseServer;return l(o.startsWith("/")),L(n,o)}function Te(){const{pathname:e}=Ce(this),t=e;return l(t.startsWith("/")),t}function tn(){return v(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),Te.call(this)}function nn(){const e=Ce(this),{origin:t,pathname:n,pathnameOriginal:o,search:r,searchAll:s,searchOriginal:i,hash:a,hashOriginal:f}=e,c={origin:t,pathname:n,pathnameOriginal:o,search:r,searchAll:s,searchOriginal:i,hash:a,hashOriginal:f,get hashString(){return v(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),f},get searchString(){return v(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),i}};return ue(c,"hashString"),ue(c,"searchString"),c}function ue(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function rn(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(P(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const ke="@",q=":";function on(e,t){u(e.startsWith("/")||e==="*",(()=>{t?t=t+" invalid":t="Invalid";const n=[`'${e}'`,e!==""?null:"(empty string)"].filter(Boolean).join(" ");return`${t} Route String ${n}: Route Strings should start with a leading slash '/' (or be '*')`})())}function J(e,t){on(e),l(t.startsWith("/"));const n=e.split("/"),o=t.split("/"),r={};sn(e),e==="*"&&(e="/*");for(let s=0;s<Math.max(n.length,o.length);s++){const i=n[s],a=o[s];if(i==="*")return r["*"]=o.slice(Math.max(1,s)).join("/"),{routeParams:r};if(i&&N(i)){if(v(!i.startsWith(q),`Outdated Route String \`${e}\`, use \`${e.split(q).join(ke)}\` instead.`,{onlyOnce:!0}),!a)return null;r[i.slice(1)]=a}else if((i||"")!==(a||""))return null}return{routeParams:r}}function sn(e){const t=e.split("*").length-1;u(t<=1,`Invalid Route String '${e}': Route Strings are not allowed to contain more than one glob character '*'`),u(t===0||t===1&&e.endsWith("*"),`Invalid Route String '${e}': make sure your Route String ends with the glob character '*'`)}function E(e){const t=e.split("/").filter(i=>i!==""&&i!=="*");let n=0;for(const i of t){if(N(i))break;n++}const o=t.filter(i=>!N(i)).length,r=t.filter(i=>N(i)).length,s=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:o,isCatchAll:s}}function N(e){return e.startsWith(ke)||e.startsWith(q)}function ce(e){const n=J(e,e);return l(n),Object.keys(n.routeParams).length===0}function an(e){e.sort(ln).sort(w(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(w(t=>t.routeType==="STRING"&&ce(t.routeString)===!1)).sort(w(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(w(t=>t.routeType==="STRING"&&ce(t.routeString)===!0)).sort(w(t=>t.routeType==="FILESYSTEM")).sort(w(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function ln(e,t){var n,o;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,s=(o=t.precedence)!==null&&o!==void 0?o:0;if(r!==s)return r>s?-1:1}if(!t.routeString||!e.routeString)return 0;{const s=j(i=>E(i).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(s!==0)return s}{const s=j(i=>E(i).numberOfStaticSegements)(e.routeString,t.routeString);if(s!==0)return s}{const s=j(i=>E(i).numberOfParameterSegments)(e.routeString,t.routeString);if(s!==0)return s}{if(E(t.routeString).isCatchAll)return-1;if(E(e.routeString).isCatchAll)return 1}return 0}async function un(e,t,n){rn(t);let o=e(t);if(xe(o,`The Route Function ${n}`),o=await o,o===!1)return null;if(o===!0&&(o={}),u(P(o),`The Route Function ${n} should return a boolean or a plain JavaScript object, instead it returns \`${d(o,"constructor")?o.constructor:o}\`.`),"match"in o){const{match:i}=o;if(u(typeof i=="boolean",`The \`match\` value returned by the Route Function ${n} should be a boolean.`),!i)return null}let r=null;"precedence"in o&&(r=o.precedence,u(typeof r=="number",`The \`precedence\` value returned by the Route Function ${n} should be a number.`)),Ae(o,`The \`routeParams\` object returned by the Route Function ${n} should`);const s=o.routeParams||{};return u(!("pageContext"in o),"Providing `pageContext` in Route Functions is prohibited, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext"),l(P(s)),Object.keys(o).forEach(i=>{u(i==="match"||i==="routeParams"||i==="precedence",`The Route Function ${n} returned an object with an unknown key \`{ ${i} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:r,routeParams:s}}function xe(e,t){v(!ht(e),`${t} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vite-plugin-ssr.com/route-function#async`,{onlyOnce:!0})}function Ae(e,t){l(t.endsWith(" should")),d(e,"routeParams")&&(l(t.endsWith(" should")),u(P(e.routeParams),`${t} be a plain JavaScript object.`),u(en(e.routeParams),`${t} only hold string values.`))}function ne(e,{hook:t,errorMessagePrefix:n,isRenderErrorPage:o}){const r=(()=>{if(n)return n;{l(t);const{hookName:s,hookFilePath:i}=t;return l(!s.endsWith(")")),`The \`pageContext\` object provided by the ${s}() hook defined by ${i}`}})();u(O(e),`${r} should be an object instead of \`${typeof e}\``),u(!("_objectCreatedByVitePluginSsr"in e),`${r} shouldn't be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),v(!("_pageId"in e),`${r} sets \`pageContext._pageId\` which means that vite-plugin-ssr's routing is overriden. This is an experimental feature: make sure to contact a vite-plugin-ssr maintainer before using this.`,{onlyOnce:!0}),o||u(!("is404"in e),`${r} sets \`pageContext.is404\` which is forbidden, use \`throw RenderErrorPage()\` instead, see https://vite-plugin-ssr.com/RenderErrorPage`)}async function cn(e,t){let n=e.onBeforeRoute(t);xe(n,`The onBeforeRoute() hook ${e.hookFilePath}`),n=await n;const o=`The onBeforeRoute() hook defined by ${e.hookFilePath}`;if(u(n==null||Zt(n,["pageContext"])&&d(n,"pageContext"),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(u(d(n,"pageContext","object"),`${o} returned \`{ pageContext }\` but pageContext should be a plain JavaScript object.`),d(n.pageContext,"_pageId")&&!d(n.pageContext,"_pageId","null")){const s=`${o} returned \`{ pageContext: { _pageId } }\` but _pageId should be`;u(d(n.pageContext,"_pageId","string"),`${s} a string or null`),u(t._allPageIds.includes(n.pageContext._pageId),`${s} one of following values: \`[${t._allPageIds.map(i=>`'${i}'`).join(", ")}]\`.`)}d(n.pageContext,"routeParams")&&Ae(n.pageContext,`${o} returned \`{ pageContext: { routeParams } }\` but routeParams should`);const r={};return d(n.pageContext,"url")&&(v(!1,`${o} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),d(n.pageContext,"urlOriginal")&&(tt(n.pageContext.urlOriginal,`${o} returned \`{ pageContext: { urlOriginal } }\` but urlOriginal`),g(r,{_urlPristine:t.urlOriginal})),ne(n.pageContext,{hook:{hookFilePath:e.hookFilePath,hookName:"onBeforeRoute"}}),g(r,n.pageContext),r}var A;function fe(...e){var t,n;A||(A=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),A&&A(...e)}Q()&&F();async function Ie(e){Ee(e),fe("Pages routes:",e._pageRoutes);const t={};if(e._onBeforeRouteHook){const i=await cn(e._onBeforeRouteHook,e);if(i){if(g(t,i),d(t,"_pageId","string")||d(t,"_pageId","null"))return d(t,"routeParams")?l(d(t,"routeParams","object")):g(t,{routeParams:{}}),g(t,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:t};g(e,t)}}g(t,{_routingProvidedByOnBeforeRouteHook:!1});const n=e._allPageIds;l(n.length>=0),u(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(n.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:o}=e;l(o.startsWith("/"));const r=[];await Promise.all(e._pageRoutes.map(async i=>{const{pageId:a,routeType:f}=i;if(i.routeType==="FILESYSTEM"){const{routeString:c}=i,p=J(c,o);if(p){const{routeParams:h}=p;r.push({pageId:a,routeParams:h,routeString:c,routeType:f})}return}if(i.routeType==="STRING"){const{routeString:c}=i,p=J(c,o);if(p){const{routeParams:h}=p;l(f==="STRING"),r.push({pageId:a,routeString:c,routeParams:h,routeType:f})}return}if(i.routeType==="FUNCTION"){const{routeFunction:c,routeDefinedAt:p}=i,h=await un(c,e,p);if(h){const{routeParams:_,precedence:R}=h;r.push({pageId:a,precedence:R,routeParams:_,routeType:f})}return}l(!1)})),an(r);const s=r[0];if(fe(`Route matches for URL \`${o}\` (in precedence order):`,r),g(t,{_routeMatches:r}),!s)return g(t,{_pageId:null,routeParams:{}}),{pageContextAddendum:t};{const{routeParams:i}=s;l(P(i)),g(t,{_pageId:s.pageId,routeParams:s.routeParams})}return{pageContextAddendum:t}}const de=["urlPathname","urlParsed"],fn=["Page","pageExports","exports"];function je(e){[...fn,...de].forEach(n=>{n in e&&(de.includes(n)?(l(n.startsWith("url")),v(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):v(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}const dn="/";function gn(e,t,n){const{pathnameOriginal:o,searchOriginal:r,hashOriginal:s}=L(e,dn);e.startsWith("/")&&l(e===`${o}${r||""}${s||""}`,{url:e});const i=o.endsWith("/");let a;return n&&o!=="/"?(i?a=C(o,0,-1):a=o,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=o+(i?"":"/")+"index",l(a),a=a+t,`${a}${r||""}${s||""}`}const hn=".pageContext.json",pn=!1;function mn(e){return gn(e,hn,pn)}function yn(e,t,n){l(!n.endsWith(" "));const o=[],r=Object.keys(e);for(const s of r)t.includes(s)||o.push(s);u(o.length===0,[n,"returned an object with following unknown keys:",ae(o)+".","Only following keys are allowed:",ae(t)+"."].join(" "))}function bn(e,t){if(e==null)return;const n=`The onBeforeRender() hook defined by ${t}`;u(P(e),`${n} should return a plain JavaScript object or \`undefined\`/\`null\``),yn(e,["pageContext"],n),e.pageContext&&ne(e.pageContext,{hook:{hookName:"onBeforeRender",hookFilePath:t}})}function _n(e,t){const o=t.filter(({filesystemRoot:s})=>e.startsWith(s)).sort(j(({filesystemRoot:s})=>s.length))[0];let r;if(o){const{filesystemRoot:s,urlRoot:i}=o,a={pageId:e,filesystemRoot:s,urlRoot:i};l(i.startsWith("/")&&e.startsWith("/")&&s.startsWith("/"),a),l(e.startsWith(s),a),s!=="/"?(l(!s.endsWith("/"),a),r=C(e,s.length,0)):r=e,l(r.startsWith("/"),a),r=i+(i.endsWith("/")?"":"/")+C(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(s=>s!=="pages"&&s!=="src"&&s!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=C(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}async function vn(e,t,n,o){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var f;return(f=a.loadFile)===null||f===void 0?void 0:f.call(a)}));const{onBeforeRouteHook:r,filesystemRoots:s}=Sn(e,t,n);return{pageRoutes:Rn(s,e,t,o),onBeforeRouteHook:r}}function Rn(e,t,n,o){const r=[];let s=[...o];if(n.length>0){l(e===null);const i=!0;n.filter(a=>!a.isErrorPage).forEach(a=>{const f=a.pageId;s=On(s,f);let c=null;{const p=a.configElements.route;if(p){l("configValue"in p);const h=p.configValue,_=p.configDefinedAt;if(l(_),typeof h=="string")c={pageId:f,comesFromV1PageConfig:i,routeString:h,routeDefinedAt:_,routeType:"STRING"};else{l(H(h));{const R=a.configElements.iKnowThePerformanceRisksOfAsyncRouteFunctions;if(R){const m=R.configValue;l(typeof m=="boolean",`${R.configDefinedAt} should be a boolean`)}}c={pageId:f,comesFromV1PageConfig:i,routeFunction:h,routeDefinedAt:_,routeType:"FUNCTION"}}}}if(!c){const{routeFilesystem:p,routeFilesystemDefinedBy:h}=a;l(p),l(p.startsWith("/")),l(h),c={pageId:f,routeFilesystemDefinedBy:h,comesFromV1PageConfig:i,routeString:p,routeDefinedAt:null,routeType:"FILESYSTEM"}}l(c),r.push(c)})}if(n.length===0){l(e);const i=!1;s.filter(a=>!nt(a)).forEach(a=>{const f=Ne(a,t);if(!f||!("default"in f.fileExports)){const c=_n(a,e);l(c.startsWith("/")),l(!c.endsWith("/")||c==="/"),r.push({pageId:a,comesFromV1PageConfig:i,routeString:c,routeDefinedAt:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}else{const{filePath:c,fileExports:p}=f;if(l(p.default),d(p,"default","string")){const h=p.default;u(h.startsWith("/"),`A Route String should start with a leading slash '/' but ${c} has \`export default '${h}'\`. Make sure to \`export default '/${h}'\` instead.`),r.push({pageId:a,comesFromV1PageConfig:i,routeString:h,routeDefinedAt:c,routeType:"STRING"});return}if(d(p,"default","function")){const h=p.default;{const _="iKnowThePerformanceRisksOfAsyncRouteFunctions";_ in p&&u(d(p,_,"boolean"),`The export \`${_}\` of ${c} should be a boolean.`)}r.push({pageId:a,comesFromV1PageConfig:i,routeFunction:h,routeDefinedAt:c,routeType:"FUNCTION"});return}u(!1,`The default export of ${c} should be a string or a function.`)}})}return r}function Sn(e,t,n){if(t.length>0){if(n.onBeforeRoute){const s=n.onBeforeRoute.configValue;if(s){const i=n.onBeforeRoute.codeFilePath;return l(i),u(H(s),`The hook onBeforeRoute() defined by ${i} should be a function.`),{onBeforeRouteHook:{hookFilePath:i,onBeforeRoute:s},filesystemRoots:null}}}return{onBeforeRouteHook:null,filesystemRoots:null}}let o=null;const r=[];return e.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:i})=>{if(l(i),"onBeforeRoute"in i){u(d(i,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:a}=i;o={hookFilePath:`${s} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in i&&(u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),r.push({filesystemRoot:wn(s),urlRoot:i.filesystemRoutingRoot}))}),{onBeforeRouteHook:o,filesystemRoots:r}}function Ne(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function Pn(e,t){const n=Ne(e,t);if(!n)return null;const{filePath:o,fileExports:r}=n;l(r);const s=r.guard;if(!s)return null;const i=o;return u(H(s),`guard() defined by ${i} should be a function`),{hookFn:s,hookFilePath:i}}function wn(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=C(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function On(e,t){const{length:n}=e;return e=e.filter(o=>o!==t),l(e.length===n-1),e}async function Fn(e,t){let n;if(e._pageFilesAll.length>0?(l(e._pageConfigs.length===0),n=Pn(e._pageId,e._pageFilesAll)):n=be(e,"guard"),!n)return;const o=n.hookFn;let r=e;const s=t(e);s&&(r=s);const i=await Z(()=>o(r),"guard",n.hookFilePath);u(i===void 0,`The guard() hook of ${n.hookFilePath} returns a value, but guard() doesn't accept any return value`)}async function En(e){return e._isFirstRenderAttempt&&Fe.isFirstUrl(e.urlOriginal)?(l(d(e,"_isFirstRenderAttempt","true")),Cn(e)):(l(d(e,"_isFirstRenderAttempt","false")),kn(e))}async function Cn(e){const t=rt();return je(t),g(t,{isHydration:!0,_comesDirectlyFromServer:!0}),g(t,await k(e._pageFilesAll,e._pageConfigs,t._pageId)),t}async function Tn(e){const t=_e(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page");const n={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return g(n,await k(e._pageFilesAll,e._pageConfigs,n._pageId)),n}async function kn(e){let t={};g(t,{isHydration:!1}),g(t,await In(e)),g(t,await k(e._pageFilesAll,e._pageConfigs,t._pageId)),await Fn({_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null,...e,...t},o=>ve(o,!0));const n=await xn({...e,...t});if(l([!0,!1].includes(n._comesDirectlyFromServer)),n._isError){t={},l(n._comesDirectlyFromServer===!0),l(d(n,"is404","boolean")),l(d(n,"pageProps","object")),l(d(n.pageProps,"is404","boolean")),l(!("serverSideError"in n));const o=_e(e._pageFilesAll,e._pageConfigs);return l(o),g(t,{isHydration:!1,_pageId:o}),g(t,n),g(t,await k(e._pageFilesAll,e._pageConfigs,t._pageId)),t}else return g(t,n),t}async function xn(e){const t=be(e,"onBeforeRender");if(t){const o=t.hookFn,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},s=ve({...e,...r},!0),i=await Z(()=>o(s),"onBeforeRender",t.hookFilePath);bn(i,t.hookFilePath);const a=i==null?void 0:i.pageContext;return g(r,a),r}if(await An(e)){const o=await $n(e),r={};return Object.assign(r,o),g(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:o}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function An(e){if(e._pageConfigs.length>0){const t=ot(e._pageId,e._pageConfigs);return!!Y(t,"onBeforeRender")&&t.configElements.onBeforeRender.configEnv==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:t}=await Qt(e._pageFilesAll,e._pageId);return t}}async function In(e){const n=(await Ie(e)).pageContextAddendum;if(!n._pageId){const o=new Error("No routing match");throw jn(o),o}return l(d(n,"_pageId","string")),n}function jn(e){g(e,{_is404:!0})}function Nn(e){return O(e)&&e._is404===!0}async function $n(e){var t;const n=mn((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),o=await fetch(n);{const a=o.headers.get("content-type"),f=a&&a.includes("application/json");if(!f&&o.status===404){$(e.urlOriginal);const c=new Error("Page doesn't exist");throw Object.assign(c,{_abortRendering:!0}),c}u(f,`Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const r=await o.text(),s=st(r);if("serverSideError"in s)throw it("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(d(s,"pageContext"));const i=s.pageContext;return l(P(i)),l(d(i,"_pageId","string")),je(i),i}function $e(){const e="/vite-plugin-ssr-svelte/";return l(Bn(e)),e}function Bn(e){return e.startsWith("/")}const G=W("createPageContext.ts",{});async function Be(e){G.pageFilesData||(G.pageFilesData=await at(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:o,pageConfigGlobal:r}=G.pageFilesData,{pageRoutes:s,onBeforeRouteHook:i}=await vn(t,o,r,n),a=$e();l(Re(a));const f={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_baseServer:a,_isProduction:!0,_pageFilesAll:t,_pageConfigs:o,_pageConfigGlobal:r,_allPageIds:n,_pageRoutes:s,_onBeforeRouteHook:i};return g(f,e),Ee(f),f}async function He(e){const t=await Be({urlOriginal:e}),n=await Ie(t),o=t._pageFilesAll,r=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:o,pageConfigs:r};const s=n.pageContextAddendum._pageId;return s?{pageId:s,pageFilesAll:o,pageConfigs:r}:{pageId:null,pageFilesAll:o,pageConfigs:r}}function T(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function Hn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:o(),isClientRouting:s()};function o(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(r(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&T(a).includes("render")))}function r(){const i=e.some(a=>T(a).includes("render"));u(i,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,f)=>` (${f+1}): ${a.filePath}`)].join(`
`)].join(" "))}function s(){return e.some(a=>T(a).includes("clientRouting"))}}function Ln({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:o}){let r=[];const s=t.filter(a=>!e.includes(a)),i=[];if(i.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),i.push(...s.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)r=e.map(a=>a.filePath);else{const a=Wn(o);i.push({id:a,onlyAssets:!1,eagerlyImported:!1}),r=[a]}return{clientEntries:r,clientDependencies:i}}function Wn(e){return e?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js"}function Dn(e,t){let n=Se(e,t);const o=ye(e,t),{isHtmlOnly:r,isClientRouting:s}=Hn({pageFilesClientSide:n,pageFilesServerSide:o,pageId:t});r&&(n=n.filter(f=>f.isEnv("CLIENT_ONLY")&&!T(f).includes("render")),n=Vn(n));const{clientEntries:i,clientDependencies:a}=Ln({pageFilesClientSide:n,pageFilesServerSide:o,isHtmlOnly:r,isClientRouting:s});return{isHtmlOnly:r,isClientRouting:s,clientEntries:i,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:o}}async function Un(e,t,{sharedPageFilesAlreadyLoaded:n}){const o=Se(e,t);await Promise.all(o.map(async r=>{var s;l(r.isEnv("CLIENT_ONLY")||r.isEnv("CLIENT_AND_SERVER")),!(n&&r.isEnv("CLIENT_AND_SERVER"))&&await((s=r.loadExportNames)===null||s===void 0?void 0:s.call(r))}))}function Vn(e){const t=[];for(const n of e)if(t.push(n),T(n).includes("overrideDefaultPages"))break;return t}function zn(e,t,n){var o;if(e){const r=(o=lt(e,"clientRouting","boolean"))!==null&&o!==void 0?o:!1,s=!!Y(e,"onRenderClient"),i=!!Y(e,"Page")&&e.configElements.Page.configEnv!=="server-only";return{isClientSideRenderable:s&&i,isClientRouting:r}}else{const{isHtmlOnly:r,isClientRouting:s}=Dn(t,n);return{isClientSideRenderable:!r,isClientRouting:s}}}async function Le(e){const{pageId:t,pageFilesAll:n,pageConfigs:o}=await He(e);if(!t)return!1;await Un(n,t,{sharedPageFilesAlreadyLoaded:!1});const r=ut(o,t),{isClientSideRenderable:s,isClientRouting:i}=zn(r,n,t);return s&&i}function We(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function De(e){const t=e.getAttribute("href");return!!(t===null||t===""||We(t)||Kn(e)||Mn(t)||!Yn(t)||!ct(t)||!Gn(e))}function Gn(e){if(hr()){const n=e.getAttribute("data-vike-link");return n!==null&&n!=="false"}else return!0}function Kn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function Mn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Yn(e){const t=$e();l(Re(t));const{hasBaseServer:n}=L(e,t);return n}function qn(e,t){let n=Jn(e,t);return n==="viewport"&&!e._isProduction&&(Pe(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),n="hover"),{prefetchStaticAssets:n}}function Jn(e,t){{const n=Xn(t);if(n!==null)return n}if("prefetchLinks"in e.exports&&u(!1,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:n}=e.exports;if(n===!1)return!1;if(n==="hover")return"hover";if(n==="viewport")return"viewport";const o="prefetchStaticAssets value should be false, 'hover', or 'viewport'";u(P(n),o);const r=Object.keys(n);u(r.length===1&&r[0]==="when",o);const{when:s}=n;if(s==="HOVER"||s==="VIEWPORT"){const i=s.toLowerCase();return v(!1,`prefetchStaticAssets value \`{ when: '${s}' }\` is outdated: set prefetchStaticAssets to '${i}' instead`,{onlyOnce:!0}),i}u(!1,o)}return"hover"}function Xn(e){const t=e.getAttribute("data-prefetch-static-assets"),n=e.getAttribute("data-prefetch");if(t===null&&n===null)return null;const o="The attribute data-prefetch is outdated, use data-prefetch-static-assets instead.";if(t){if(u(n===null,o),t==="hover"||t==="viewport")return t;if(t==="false")return!1;u(!1,`data-prefetch-static-assets has value "${t}" but it should instead be "false", "hover", or "viewport"`)}if(n){if(l(!t),v(!1,o,{onlyOnce:!0}),n==="true")return"viewport";if(n==="false")return"hover";u(!1,`data-prefetch has value "${n}" but it should instead be "true" or "false"`)}l(!1)}const Ue=new Map;function Ve(e){const t=Ge(e);return Ue.has(t)}function ze(e){const t=Ge(e);Ue.set(t,!0)}function Ge(e){return Kt(e)}F();const ge=new Map;async function K(e){if(u(ft(),"prefetch() only works with Client Routing, see https://vite-plugin-ssr.com/prefetch",{showStackTrace:!0}),u(!We(e),`You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`,{showStackTrace:!0}),Ve(e))return;ze(e);const{pageId:t,pageFilesAll:n,pageConfigs:o}=await He(e);if(t)try{await k(n,o,t)}catch(r){if(ee(r))X(r,!0);else throw r}}function Qn(e){ze(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async n=>{if(ge.has(n))return;ge.set(n,!0);const o=n.getAttribute("href");if(De(n))return;l(o);try{if(!await Le(o))return}catch{return}if(Ve(o))return;const{prefetchStaticAssets:r}=qn(e,n);if(r){if(r==="hover")n.addEventListener("mouseover",()=>K(o)),n.addEventListener("touchstart",()=>K(o),{passive:!0});else if(r==="viewport"){const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(K(o),s.disconnect())})});s.observe(n)}}else return})}function Ke(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=Ye()),"scrollPosition"in e||(t=!0,e.scrollPosition=Me()),qe(e),t&&oe(e)}function re(){const e=window.history.state||{};return qe(e),e}function Me(){return{x:window.scrollX,y:window.scrollY}}function Ye(){return new Date().getTime()}function he(){const e=Me(),t=re();oe({...t,scrollPosition:e})}function Zn(e,t){if(t)oe(re(),e);else{const n=Ye();er({timestamp:n,scrollPosition:null},e)}}function qe(e){if(l(O(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(d(t,"x","number")&&d(t,"y","number"))}}function oe(e,t){window.history.replaceState(e,"",t??null)}function er(e,t){window.history.pushState(e,"",t)}F();const tr=W("navigate.ts",{});function nr(e){tr.navigate=e}const Je="__isRenderErrorPageException";function M(e){return rr(e),typeof e=="object"&&e!==null&&Je in e}function Xe({pageContext:e}={}){{const n=this;u(!(typeof n=="object"&&(n==null?void 0:n.constructor)===Xe),"Don't use the `new` operator: use `throw RenderErrorPage()` instead of `throw new RenderErrorPage()`.",{showStackTrace:!0})}e!==void 0&&ne(e,{errorMessagePrefix:"The `pageContext` object provided by `throw RenderErrorPage({ pageContext })`",isRenderErrorPage:!0});const t=new Error("RenderErrorPage");return g(t,{pageContext:e,[Je]:!0}),t}function rr(e){u(e!==Xe,"Missing parentheses `()` in `throw RenderErrorPage`: it should be `throw RenderErrorPage()`.",{showStackTrace:!0})}const b=W("useClientRouter.ts",{previousState:B()});fr();Ke();function X(e,t){l(ee(e)),b.clientRoutingIsDisabled=!0,t&&console.log(e),Pe(!1,["Failed to fetch static asset.","This usually happens when a new frontend is deployed.","Falling back to Server Routing.","(The next page navigation will use Server Routing instead of Client Routing.)"].filter(Boolean).join(" "),{onlyOnce:!0})}function or(){ur(),sr((r,{keepScrollPosition:s})=>{o({scrollTarget:s?"preserve-scroll":"scroll-to-top-or-hash",url:r,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),ir((r,s)=>{o({scrollTarget:r,isBackwardNavigation:s})}),nr(async(r,{keepScrollPosition:s=!1,overwriteLastHistoryEntry:i=!1}={})=>{await o({scrollTarget:s?"preserve-scroll":"scroll-to-top-or-hash",url:r,overwriteLastHistoryEntry:i,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;o({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function o({scrollTarget:r,url:s=x(),overwriteLastHistoryEntry:i=!1,isBackwardNavigation:a,checkClientSideRenderable:f}){var c;if(b.clientRoutingIsDisabled){$(s);return}if(f){let y;try{y=await Le(s)}catch(S){if(M(S))y=!0;else throw S}if(!y){$(s);return}}const p={urlOriginal:s,isBackwardNavigation:a},h=++e;l(h>=1),h>1&&n===!1&&((c=b.onPageTransitionStart)===null||c===void 0||c.call(b,p),n=!0);let _=!1;const R=()=>h===1&&_===!1?!1:h!==e,m=await Be(p);if(R())return;const ie=h===1;g(m,{_isFirstRenderAttempt:ie});let U;try{U=await En(m)}catch(y){if(M(y)||console.error(y),me(y,m))return;M(y)?(g(m,{is404:!0}),g(m,y.pageContext)):g(m,{is404:Nn(y)});try{U=await Tn(m)}catch(S){if(me(S,m)||(ie||setTimeout(()=>{window.location.pathname=s},0),Yt(y,S)))return;throw S}}if(g(m,U),V(m,"onPageTransitionStart"),b.onPageTransitionStart=m.exports.onPageTransitionStart,m.exports.hydrationCanBeAborted?_=!0:v(!Mt(),"You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",{onlyOnce:!0}),!R()&&(t&&await t,!R())){if(ar(s,i),Fe.markNavigationChange(),l(t===void 0),t=(async()=>{await dt(m,!0),Qn(m)})(),await t,t=void 0,m._isFirstRenderAttempt){V(m,"onHydrationEnd");const{onHydrationEnd:y}=m.exports;if(y){const S=m.exportsAll.onHydrationEnd[0].exportSource;l(S),await Z(()=>y(m),"onHydrationEnd",S)}}else h===e&&(m.exports.onPageTransitionEnd&&(V(m,"onPageTransitionEnd"),m.exports.onPageTransitionEnd(m)),n=!1);Qe(r),se(),b.initialRenderIsDone=!0}}}function sr(e){document.addEventListener("click",t);return;function t(r){if(!n(r))return;const s=o(r.target);if(!s)return;const i=s.getAttribute("href");if(De(s))return;l(i),r.preventDefault();const a=![null,"false"].includes(s.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function o(r){for(;r.tagName!=="A";){const{parentNode:s}=r;if(!s)return null;r=s}return r}}function ir(e){window.addEventListener("popstate",()=>{const t=B(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",o=t.urlWithoutHash===b.previousState.urlWithoutHash,r=!t.historyState.timestamp||!b.previousState.historyState.timestamp?null:t.historyState.timestamp<b.previousState.historyState.timestamp;b.previousState=t,o?window.history.state===null?(Ke(),b.previousState=B()):Qe(n):e(n,r)})}function ar(e,t){x()!==e&&(se(),Zn(e,t),b.previousState=B())}function B(){return{urlWithoutHash:x({withoutHash:!0}),historyState:re()}}function Qe(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=cr();if(n&&n!=="top"){const o=document.getElementById(n)||document.getElementsByName(n)[0];if(o){o.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;lr(t)}function lr(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const o=new Date().getTime();for(;;)if(await qt(10),t(),n()||new Date().getTime()-o>100)return},0)}))}function ur(){window.addEventListener("scroll",Jt(he,Math.ceil(1e3/3)),{passive:!0}),Ze(he)}function cr(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function fr(){pe(),Ze(pe),dr(()=>b.initialRenderIsDone&&se())}function se(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function pe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Ze(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function dr(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function me(e,t){return!!(O(e)&&e._abortRendering||gr(e,t))}function gr(e,t){if(!ee(e))return!1;if(t._isFirstRenderAttempt)throw X(e,!1),e;return X(e,!0),$(t.urlOriginal),!0}function hr(){return!!window._disableAutomaticLinkInterception}F();gt(!0);or();
