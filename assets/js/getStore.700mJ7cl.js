import{R as Ra,p as Pa}from"./compat.module.B6A616es.js";import{x as Pr,P as La,_ as Ma,y as It,T as ur,A as Ba,h as lr}from"./hooks.module.DTgcM_-a.js";import{r as Lr}from"./objectSpread2.Cp7eGu5m.js";import{G as $a}from"./preact.module.CHyAod6_.js";import{t as ja,f as Fa,i as Ua,r as Va,_ as Wa,g as Mr,j as Br,k as $r}from"./ApolloWrapper.W8lg4Npw.js";import{a5 as Ha,i as Ga,s as qa,c as Ue}from"./_baseFor.Bzwhonox.js";import{r as za}from"./Link.rk31aN69.js";import{X as Ka}from"./client.CDTOledn.js";import{g as jr,f as xt}from"./globalnav2.15dcd298.yarjxgix.js";import{g as ze}from"./index.BmHI7pNt.js";import{c as Xa,e as $e}from"./cookie-utils.CaDQHCDO.js";import{F as Ya}from"./apollo-constants.CVCHsjQc.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d4040e81-b114-4708-fd02-5214a5fd9736",e._sentryDebugIdIdentifier="sentry-dbid-d4040e81-b114-4708-fd02-5214a5fd9736")}catch{}})();var Fr={exports:{}},Ur={};/**
* @license React
* use-sync-external-store-shim.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var me=Lr;function Ja(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qa=typeof Object.is=="function"?Object.is:Ja,Za=me.useState,ei=me.useEffect,ti=me.useLayoutEffect,ri=me.useDebugValue;function ni(e,t){var r=t(),a=Za({inst:{value:r,getSnapshot:t}}),n=a[0].inst,i=a[1];return ti(function(){n.value=r,n.getSnapshot=t,pt(n)&&i({inst:n})},[e,r,t]),ei(function(){return pt(n)&&i({inst:n}),e(function(){pt(n)&&i({inst:n})})},[e]),ri(r),r}function pt(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Qa(e,r)}catch{return!0}}function ai(e,t){return t()}var ii=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ai:ni;Ur.useSyncExternalStore=me.useSyncExternalStore!==void 0?me.useSyncExternalStore:ii;Fr.exports=Ur;var oi=Fr.exports,Vr={exports:{}},Wr={};/**
* @license React
* use-sync-external-store-shim/with-selector.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Ke=Lr,si=oi;function ci(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ui=typeof Object.is=="function"?Object.is:ci,li=si.useSyncExternalStore,di=Ke.useRef,fi=Ke.useEffect,pi=Ke.useMemo,hi=Ke.useDebugValue;Wr.useSyncExternalStoreWithSelector=function(e,t,r,a,n){var i=di(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=pi(function(){function c(u){if(!h){if(h=!0,b=u,u=a(u),n!==void 0&&o.hasValue){var I=o.value;if(n(I,u))return l=I}return l=u}if(I=l,ui(b,u))return I;var m=a(u);return n!==void 0&&n(I,m)?I:(b=u,l=m)}var h=!1,b,l,f=r===void 0?null:r;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,r,a,n]);var s=li(e,i[0],i[1]);return fi(function(){o.hasValue=!0,o.value=s},[s]),hi(s),s};Vr.exports=Wr;var vi=Vr.exports;function gi(e){e()}let Hr=gi;const mi=e=>Hr=e,bi=()=>Hr,Ve=$a(null);function _i(){return Pr(Ve)}const yi=()=>{throw new Error("uSES not initialized!")};let Gr=yi;const wi=e=>{Gr=e},Ei=(e,t)=>e===t;function Si(e=Ve){const t=e===Ve?_i:()=>Pr(e);return function(a,n=Ei){const{store:i,subscription:o,getServerState:s}=t(),c=Gr(o.addNestedSub,i.getState,s||i.getState,a,n);return La(c),c}}const Nu=Si();var D={};/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Dt=Symbol.for("react.element"),kt=Symbol.for("react.portal"),Xe=Symbol.for("react.fragment"),Ye=Symbol.for("react.strict_mode"),Je=Symbol.for("react.profiler"),Qe=Symbol.for("react.provider"),Ze=Symbol.for("react.context"),Ii=Symbol.for("react.server_context"),et=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),xi=Symbol.for("react.offscreen"),qr;qr=Symbol.for("react.module.reference");function G(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dt:switch(e=e.type,e){case Xe:case Je:case Ye:case tt:case rt:return e;default:switch(e=e&&e.$$typeof,e){case Ii:case Ze:case et:case at:case nt:case Qe:return e;default:return t}}case kt:return t}}}D.ContextConsumer=Ze;D.ContextProvider=Qe;D.Element=Dt;D.ForwardRef=et;D.Fragment=Xe;D.Lazy=at;D.Memo=nt;D.Portal=kt;D.Profiler=Je;D.StrictMode=Ye;D.Suspense=tt;D.SuspenseList=rt;D.isAsyncMode=function(){return!1};D.isConcurrentMode=function(){return!1};D.isContextConsumer=function(e){return G(e)===Ze};D.isContextProvider=function(e){return G(e)===Qe};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dt};D.isForwardRef=function(e){return G(e)===et};D.isFragment=function(e){return G(e)===Xe};D.isLazy=function(e){return G(e)===at};D.isMemo=function(e){return G(e)===nt};D.isPortal=function(e){return G(e)===kt};D.isProfiler=function(e){return G(e)===Je};D.isStrictMode=function(e){return G(e)===Ye};D.isSuspense=function(e){return G(e)===tt};D.isSuspenseList=function(e){return G(e)===rt};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xe||e===Je||e===Ye||e===tt||e===rt||e===xi||typeof e=="object"&&e!==null&&(e.$$typeof===at||e.$$typeof===nt||e.$$typeof===Qe||e.$$typeof===Ze||e.$$typeof===et||e.$$typeof===qr||e.getModuleId!==void 0)};D.typeOf=G;function Ti(){const e=bi();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let a=t;for(;a;)a.callback(),a=a.next})},get(){let a=[],n=t;for(;n;)a.push(n),n=n.next;return a},subscribe(a){let n=!0,i=r={callback:a,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!n||t===null||(n=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const dr={notify(){},get:()=>[]};function Ai(e,t){let r,a=dr;function n(l){return c(),a.subscribe(l)}function i(){a.notify()}function o(){b.onStateChange&&b.onStateChange()}function s(){return!!r}function c(){r||(r=e.subscribe(o),a=Ti())}function h(){r&&(r(),r=void 0,a.clear(),a=dr)}const b={addNestedSub:n,notifyNestedSubs:i,handleChangeWrapper:o,isSubscribed:s,trySubscribe:c,tryUnsubscribe:h,getListeners:()=>a};return b}const Oi=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ci=Oi?Ma:It;function Du({store:e,context:t,children:r,serverState:a}){const n=ur(()=>{const s=Ai(e);return{store:e,subscription:s,getServerState:a?()=>a:void 0}},[e,a]),i=ur(()=>e.getState(),[e]);Ci(()=>{const{subscription:s}=n;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),i!==e.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[n,i]);const o=t||Ve;return Ra.createElement(o.Provider,{value:n},r)}wi(vi.useSyncExternalStoreWithSelector);mi(Pa);var zr={},j={},Kr={},it={},le={};const Ne=jr(Ha);var g={},fr={};Object.defineProperty(g,"__esModule",{value:!0});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=function(e,t){if(!e)throw Yr(t)},Yr=function(e){return new Error("Firebase Database ("+We.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=function(e){const t=[];let r=0;for(let a=0;a<e.length;a++){let n=e.charCodeAt(a);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=n&63|128):(n&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++a)&1023),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=n&63|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=n&63|128)}return t},Ni=function(e){const t=[];let r=0,a=0;for(;r<e.length;){const n=e[r++];if(n<128)t[a++]=String.fromCharCode(n);else if(n>191&&n<224){const i=e[r++];t[a++]=String.fromCharCode((n&31)<<6|i&63)}else if(n>239&&n<365){const i=e[r++],o=e[r++],s=e[r++],c=((n&7)<<18|(i&63)<<12|(o&63)<<6|s&63)-65536;t[a++]=String.fromCharCode(55296+(c>>10)),t[a++]=String.fromCharCode(56320+(c&1023))}else{const i=e[r++],o=e[r++];t[a++]=String.fromCharCode((n&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Rt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<e.length;n+=3){const i=e[n],o=n+1<e.length,s=o?e[n+1]:0,c=n+2<e.length,h=c?e[n+2]:0,b=i>>2,l=(i&3)<<4|s>>4;let f=(s&15)<<2|h>>6,u=h&63;c||(u=64,o||(f=64)),a.push(r[b],r[l],r[f],r[u])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Jr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ni(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<e.length;){const i=r[e.charAt(n++)],s=n<e.length?r[e.charAt(n)]:0;++n;const h=n<e.length?r[e.charAt(n)]:64;++n;const l=n<e.length?r[e.charAt(n)]:64;if(++n,i==null||s==null||h==null||l==null)throw new Qr;const f=i<<2|s>>4;if(a.push(f),h!==64){const u=s<<4&240|h>>2;if(a.push(u),l!==64){const I=h<<6&192|l;a.push(I)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Qr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zr=function(e){const t=Jr(e);return Rt.encodeByteArray(t,!0)},Tt=function(e){return Zr(e).replace(/\./g,"")},He=function(e){try{return Rt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){return Pt(void 0,e)}function Pt(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const r=t;return new Date(r.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const r in t)!t.hasOwnProperty(r)||!ki(r)||(e[r]=Pt(e[r],t[r]));return e}function ki(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof xt<"u")return xt;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=()=>en().__FIREBASE_DEFAULTS__,Pi=()=>{if(typeof process>"u"||typeof fr>"u")return;const e=fr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Li=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&He(e[1]);return t&&JSON.parse(t)},De=()=>{try{return Ri()||Pi()||Li()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},tn=e=>{var t,r;return(r=(t=De())===null||t===void 0?void 0:t.emulatorHosts)===null||r===void 0?void 0:r[e]},Mi=e=>{const t=tn(e);if(!t)return;const r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(r+1),10);return t[0]==="["?[t.substring(1,r-1),a]:[t.substring(0,r),a]},Bi=()=>{var e;return(e=De())===null||e===void 0?void 0:e.config},$i=e=>{var t;return(t=De())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Tt(JSON.stringify(r)),Tt(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function nn(){var e;const t=(e=De())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(xt.process)==="[object process]"}catch{return!1}}function Ui(){return typeof window<"u"||an()}function an(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Vi(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Wi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hi(){return ke().indexOf("Electron/")>=0}function Gi(){const e=ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function qi(){return ke().indexOf("MSAppHost/")>=0}function zi(){return We.NODE_CLIENT===!0||We.NODE_ADMIN===!0}function Ki(){return!nn()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xi(){try{return typeof indexedDB=="object"}catch{return!1}}function Yi(){return new Promise((e,t)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(a),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var i;t(((i=n.error)===null||i===void 0?void 0:i.message)||"")}}catch(r){t(r)}})}function Ji(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="FirebaseError";class ot extends Error{constructor(t,r,a){super(r),this.code=t,this.customData=a,this.name=Qi,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,on.prototype.create)}}class on{constructor(t,r,a){this.service=t,this.serviceName=r,this.errors=a}create(t,...r){const a=r[0]||{},n=`${this.service}/${t}`,i=this.errors[t],o=i?Zi(i,a):"Error",s=`${this.serviceName}: ${o} (${n}).`;return new ot(n,s,a)}}function Zi(e,t){return e.replace(eo,(r,a)=>{const n=t[a];return n!=null?String(n):`<${a}?>`})}const eo=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){return JSON.parse(e)}function to(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=function(e){let t={},r={},a={},n="";try{const i=e.split(".");t=At(He(i[0])||""),r=At(He(i[1])||""),n=i[2],a=r.d||{},delete r.d}catch{}return{header:t,claims:r,data:a,signature:n}},ro=function(e){const t=Re(e).claims,r=Math.floor(new Date().getTime()/1e3);let a=0,n=0;return typeof t=="object"&&(t.hasOwnProperty("nbf")?a=t.nbf:t.hasOwnProperty("iat")&&(a=t.iat),t.hasOwnProperty("exp")?n=t.exp:n=a+86400),!!r&&!!a&&!!n&&r>=a&&r<=n},no=function(e){const t=Re(e).claims;return typeof t=="object"&&t.hasOwnProperty("iat")?t.iat:null},ao=function(e){const t=Re(e),r=t.claims;return!!r&&typeof r=="object"&&r.hasOwnProperty("iat")},io=function(e){const t=Re(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function so(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function co(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function uo(e,t,r){const a={};for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=t.call(r,e[n],n,e));return a}function sn(e,t){if(e===t)return!0;const r=Object.keys(e),a=Object.keys(t);for(const n of r){if(!a.includes(n))return!1;const i=e[n],o=t[n];if(pr(i)&&pr(o)){if(!sn(i,o))return!1}else if(i!==o)return!1}for(const n of a)if(!r.includes(n))return!1;return!0}function pr(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(e,t=2e3){const r=new rn;return setTimeout(()=>r.reject("timeout!"),t),e.then(r.resolve,r.reject),r.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e){const t=[];for(const[r,a]of Object.entries(e))Array.isArray(a)?a.forEach(n=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function po(e){const t={};return e.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[n,i]=a.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function ho(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,r){r||(r=0);const a=this.W_;if(typeof t=="string")for(let l=0;l<16;l++)a[l]=t.charCodeAt(r)<<24|t.charCodeAt(r+1)<<16|t.charCodeAt(r+2)<<8|t.charCodeAt(r+3),r+=4;else for(let l=0;l<16;l++)a[l]=t[r]<<24|t[r+1]<<16|t[r+2]<<8|t[r+3],r+=4;for(let l=16;l<80;l++){const f=a[l-3]^a[l-8]^a[l-14]^a[l-16];a[l]=(f<<1|f>>>31)&4294967295}let n=this.chain_[0],i=this.chain_[1],o=this.chain_[2],s=this.chain_[3],c=this.chain_[4],h,b;for(let l=0;l<80;l++){l<40?l<20?(h=s^i&(o^s),b=1518500249):(h=i^o^s,b=1859775393):l<60?(h=i&o|s&(i|o),b=2400959708):(h=i^o^s,b=3395469782);const f=(n<<5|n>>>27)+h+c+b+a[l]&4294967295;c=s,s=o,o=(i<<30|i>>>2)&4294967295,i=n,n=f}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,r){if(t==null)return;r===void 0&&(r=t.length);const a=r-this.blockSize;let n=0;const i=this.buf_;let o=this.inbuf_;for(;n<r;){if(o===0)for(;n<=a;)this.compress_(t,n),n+=this.blockSize;if(typeof t=="string"){for(;n<r;)if(i[o]=t.charCodeAt(n),++o,++n,o===this.blockSize){this.compress_(i),o=0;break}}else for(;n<r;)if(i[o]=t[n],++o,++n,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=r}digest(){const t=[];let r=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=r&255,r/=256;this.compress_(this.buf_);let a=0;for(let n=0;n<5;n++)for(let i=24;i>=0;i-=8)t[a]=this.chain_[n]>>i&255,++a;return t}}function go(e,t){const r=new mo(e,t);return r.subscribe.bind(r)}class mo{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,a){let n;if(t===void 0&&r===void 0&&a===void 0)throw new Error("Missing Observer.");_o(t,["next","error","complete"])?n=t:n={next:t,error:r,complete:a},n.next===void 0&&(n.next=ht),n.error===void 0&&(n.error=ht),n.complete===void 0&&(n.complete=ht);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bo(e,t){return(...r)=>{Promise.resolve(!0).then(()=>{e(...r)}).catch(a=>{t&&t(a)})}}function _o(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function ht(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=function(e,t,r,a){let n;if(a<t?n="at least "+t:a>r&&(n=r===0?"none":"no more than "+r),n){const i=e+" failed: Was called with "+a+(a===1?" argument.":" arguments.")+" Expects "+n+".";throw new Error(i)}};function st(e,t){return`${e} failed: ${t} argument `}function wo(e,t,r){if(!(r&&!t)&&typeof t!="string")throw new Error(st(e,"namespace")+"must be a valid firebase namespace.")}function Eo(e,t,r,a){if(!(a&&!r)&&typeof r!="function")throw new Error(st(e,t)+"must be a valid function.")}function So(e,t,r,a){if(!(a&&!r)&&(typeof r!="object"||r===null))throw new Error(st(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=function(e){const t=[];let r=0;for(let a=0;a<e.length;a++){let n=e.charCodeAt(a);if(n>=55296&&n<=56319){const i=n-55296;a++,Xr(a<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(a)-56320;n=65536+(i<<10)+o}n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=n&63|128):n<65536?(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=n&63|128):(t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=n&63|128)}return t},xo=function(e){let t=0;for(let r=0;r<e.length;r++){const a=e.charCodeAt(r);a<128?t++:a<2048?t+=2:a>=55296&&a<=56319?(t+=4,r++):t+=3}return t};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=1e3,Oo=2,cn=4*60*60*1e3,un=.5;function Co(e,t=Ao,r=Oo){const a=t*Math.pow(r,e),n=Math.round(un*a*(Math.random()-.5)*2);return Math.min(cn,a+n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e){return Number.isFinite(e)?e+Do(e):`${e}`}function Do(e){e=Math.abs(e);const t=e%100;if(t>=10&&t<=20)return"th";const r=e%10;return r===1?"st":r===2?"nd":r===3?"rd":"th"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(e){return e&&e._delegate?e._delegate:e}g.CONSTANTS=We;g.DecodeBase64StringError=Qr;g.Deferred=rn;g.ErrorFactory=on;g.FirebaseError=ot;g.MAX_VALUE_MILLIS=cn;g.RANDOM_FACTOR=un;g.Sha1=vo;g.areCookiesEnabled=Ji;g.assert=Xr;g.assertionError=Yr;g.async=bo;g.base64=Rt;g.base64Decode=He;g.base64Encode=Zr;g.base64urlEncodeWithoutPadding=Tt;g.calculateBackoffMillis=Co;g.contains=oo;g.createMockUserToken=ji;g.createSubscribe=go;g.decode=Re;g.deepCopy=Di;g.deepEqual=sn;g.deepExtend=Pt;g.errorPrefix=st;g.extractQuerystring=ho;g.getDefaultAppConfig=Bi;g.getDefaultEmulatorHost=tn;g.getDefaultEmulatorHostnameAndPort=Mi;g.getDefaults=De;g.getExperimentalSetting=$i;g.getGlobal=en;g.getModularInstance=ko;g.getUA=ke;g.isAdmin=io;g.isBrowser=Ui;g.isBrowserExtension=Vi;g.isElectron=Hi;g.isEmpty=co;g.isIE=Gi;g.isIndexedDBAvailable=Xi;g.isMobileCordova=Fi;g.isNode=nn;g.isNodeSdk=zi;g.isReactNative=Wi;g.isSafari=Ki;g.isUWP=qi;g.isValidFormat=ao;g.isValidTimestamp=ro;g.isWebWorker=an;g.issuedAtTime=no;g.jsonEval=At;g.map=uo;g.ordinal=No;g.promiseWithTimeout=lo;g.querystring=fo;g.querystringDecode=po;g.safeGet=so;g.stringLength=xo;g.stringToByteArray=Io;g.stringify=to;g.uuidv4=To;g.validateArgCount=yo;g.validateCallback=Eo;g.validateContextObject=So;g.validateIndexedDBOpenable=Yi;g.validateNamespace=wo;Object.defineProperty(le,"__esModule",{value:!0});var z=Ne,Ro=g,Po=function(){function e(t,r,a){this.name=t,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ln=function(){function e(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){var a=new Ro.Deferred;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:r});n&&a.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise},e.prototype.getImmediate=function(t){var r,a=this.normalizeInstanceIdentifier(t?.identifier),n=(r=t?.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error("Service ".concat(this.name," is not available"))}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var r,a;if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,!!this.shouldAutoInitialize()){if(Mo(t))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}try{for(var n=z.__values(this.instancesDeferred.entries()),i=n.next();!i.done;i=n.next()){var o=z.__read(i.value,2),s=o[0],c=o[1],h=this.normalizeInstanceIdentifier(s);try{var b=this.getOrInitializeService({instanceIdentifier:h});c.resolve(b)}catch{}}}catch(l){r={error:l}}finally{try{i&&!i.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=oe),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return z.__awaiter(this,void 0,void 0,function(){var t;return z.__generator(this,function(r){switch(r.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(z.__spreadArray(z.__spreadArray([],z.__read(t.filter(function(a){return"INTERNAL"in a}).map(function(a){return a.INTERNAL.delete()})),!1),z.__read(t.filter(function(a){return"_delete"in a}).map(function(a){return a._delete()})),!1))];case 1:return r.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=oe),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=oe),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var r,a;t===void 0&&(t={});var n=t.options,i=n===void 0?{}:n,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error("".concat(this.name,"(").concat(o,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var s=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=z.__values(this.instancesDeferred.entries()),h=c.next();!h.done;h=c.next()){var b=z.__read(h.value,2),l=b[0],f=b[1],u=this.normalizeInstanceIdentifier(l);o===u&&f.resolve(s)}}catch(I){r={error:I}}finally{try{h&&!h.done&&(a=c.return)&&a.call(c)}finally{if(r)throw r.error}}return s},e.prototype.onInit=function(t,r){var a,n=this.normalizeInstanceIdentifier(r),i=(a=this.onInitCallbacks.get(n))!==null&&a!==void 0?a:new Set;i.add(t),this.onInitCallbacks.set(n,i);var o=this.instances.get(n);return o&&t(o,n),function(){i.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,r){var a,n,i=this.onInitCallbacks.get(r);if(i)try{for(var o=z.__values(i),s=o.next();!s.done;s=o.next()){var c=s.value;try{c(t,r)}catch{}}}catch(h){a={error:h}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}},e.prototype.getOrInitializeService=function(t){var r=t.instanceIdentifier,a=t.options,n=a===void 0?{}:a,i=this.instances.get(r);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Lo(r),options:n}),this.instances.set(r,i),this.instancesOptions.set(r,n),this.invokeOnInitCallbacks(i,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,i)}catch{}return i||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=oe),this.component?this.component.multipleInstances?t:oe:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function Lo(e){return e===oe?void 0:e}function Mo(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bo=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var r=this.getProvider(t.name);if(r.isComponentSet())throw new Error("Component ".concat(t.name," has already been registered with ").concat(this.name));r.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var r=this.getProvider(t.name);r.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var r=new ln(t,this);return this.providers.set(t,r),r},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();le.Component=Po;le.ComponentContainer=Bo;le.Provider=ln;var dn={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Ne;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var r,a=[];e.LogLevel=void 0,function(l){l[l.DEBUG=0]="DEBUG",l[l.VERBOSE=1]="VERBOSE",l[l.INFO=2]="INFO",l[l.WARN=3]="WARN",l[l.ERROR=4]="ERROR",l[l.SILENT=5]="SILENT"}(e.LogLevel||(e.LogLevel={}));var n={debug:e.LogLevel.DEBUG,verbose:e.LogLevel.VERBOSE,info:e.LogLevel.INFO,warn:e.LogLevel.WARN,error:e.LogLevel.ERROR,silent:e.LogLevel.SILENT},i=e.LogLevel.INFO,o=(r={},r[e.LogLevel.DEBUG]="log",r[e.LogLevel.VERBOSE]="log",r[e.LogLevel.INFO]="info",r[e.LogLevel.WARN]="warn",r[e.LogLevel.ERROR]="error",r),s=function(l,f){for(var u=[],I=2;I<arguments.length;I++)u[I-2]=arguments[I];if(!(f<l.logLevel)){var m=new Date().toISOString(),R=o[f];if(R)console[R].apply(console,t.__spreadArray(["[".concat(m,"]  ").concat(l.name,":")],u,!1));else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(f,")"))}},c=function(){function l(f){this.name=f,this._logLevel=i,this._logHandler=s,this._userLogHandler=null,a.push(this)}return Object.defineProperty(l.prototype,"logLevel",{get:function(){return this._logLevel},set:function(f){if(!(f in e.LogLevel))throw new TypeError('Invalid value "'.concat(f,'" assigned to `logLevel`'));this._logLevel=f},enumerable:!1,configurable:!0}),l.prototype.setLogLevel=function(f){this._logLevel=typeof f=="string"?n[f]:f},Object.defineProperty(l.prototype,"logHandler",{get:function(){return this._logHandler},set:function(f){if(typeof f!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=f},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(f){this._userLogHandler=f},enumerable:!1,configurable:!0}),l.prototype.debug=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];this._userLogHandler&&this._userLogHandler.apply(this,t.__spreadArray([this,e.LogLevel.DEBUG],f,!1)),this._logHandler.apply(this,t.__spreadArray([this,e.LogLevel.DEBUG],f,!1))},l.prototype.log=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];this._userLogHandler&&this._userLogHandler.apply(this,t.__spreadArray([this,e.LogLevel.VERBOSE],f,!1)),this._logHandler.apply(this,t.__spreadArray([this,e.LogLevel.VERBOSE],f,!1))},l.prototype.info=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];this._userLogHandler&&this._userLogHandler.apply(this,t.__spreadArray([this,e.LogLevel.INFO],f,!1)),this._logHandler.apply(this,t.__spreadArray([this,e.LogLevel.INFO],f,!1))},l.prototype.warn=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];this._userLogHandler&&this._userLogHandler.apply(this,t.__spreadArray([this,e.LogLevel.WARN],f,!1)),this._logHandler.apply(this,t.__spreadArray([this,e.LogLevel.WARN],f,!1))},l.prototype.error=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];this._userLogHandler&&this._userLogHandler.apply(this,t.__spreadArray([this,e.LogLevel.ERROR],f,!1)),this._logHandler.apply(this,t.__spreadArray([this,e.LogLevel.ERROR],f,!1))},l}();function h(l){a.forEach(function(f){f.setLogLevel(l)})}function b(l,f){for(var u=function(O){var F=null;f&&f.level&&(F=n[f.level]),l===null?O.userLogHandler=null:O.userLogHandler=function(ae,fe){for(var we=[],pe=2;pe<arguments.length;pe++)we[pe-2]=arguments[pe];var lt=we.map(function(V){if(V==null)return null;if(typeof V=="string")return V;if(typeof V=="number"||typeof V=="boolean")return V.toString();if(V instanceof Error)return V.message;try{return JSON.stringify(V)}catch{return null}}).filter(function(V){return V}).join(" ");fe>=(F??ae.logLevel)&&l({level:e.LogLevel[fe].toLowerCase(),message:lt,args:we,type:ae.name})}},I=0,m=a;I<m.length;I++){var R=m[I];u(R)}}e.Logger=c,e.setLogLevel=h,e.setUserLogHandler=b})(dn);const $o=(e,t)=>t.some(r=>e instanceof r);let hr,vr;function jo(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fo(){return vr||(vr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fn=new WeakMap,Ot=new WeakMap,pn=new WeakMap,vt=new WeakMap,Lt=new WeakMap;function Uo(e){const t=new Promise((r,a)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{r(K(e.result)),n()},o=()=>{a(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(r=>{r instanceof IDBCursor&&fn.set(r,e)}).catch(()=>{}),Lt.set(t,e),t}function Vo(e){if(Ot.has(e))return;const t=new Promise((r,a)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{r(),n()},o=()=>{a(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ot.set(e,t)}let Ct={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Ot.get(e);if(t==="objectStoreNames")return e.objectStoreNames||pn.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return K(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Wo(e){Ct=e(Ct)}function Ho(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const a=e.call(je(this),t,...r);return pn.set(a,t.sort?t.sort():[t]),K(a)}:Fo().includes(e)?function(...t){return e.apply(je(this),t),K(fn.get(this))}:function(...t){return K(e.apply(je(this),t))}}function Go(e){return typeof e=="function"?Ho(e):(e instanceof IDBTransaction&&Vo(e),$o(e,jo())?new Proxy(e,Ct):e)}function K(e){if(e instanceof IDBRequest)return Uo(e);if(vt.has(e))return vt.get(e);const t=Go(e);return t!==e&&(vt.set(e,t),Lt.set(t,e)),t}const je=e=>Lt.get(e);function qo(e,t,{blocked:r,upgrade:a,blocking:n,terminated:i}={}){const o=indexedDB.open(e,t),s=K(o);return a&&o.addEventListener("upgradeneeded",c=>{a(K(o.result),c.oldVersion,c.newVersion,K(o.transaction),c)}),r&&o.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),s.then(c=>{i&&c.addEventListener("close",()=>i()),n&&c.addEventListener("versionchange",h=>n(h.oldVersion,h.newVersion,h))}).catch(()=>{}),s}function zo(e,{blocked:t}={}){const r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",a=>t(a.oldVersion,a)),K(r).then(()=>{})}const Ko=["get","getKey","getAll","getAllKeys","count"],Xo=["put","add","delete","clear"],gt=new Map;function gr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(gt.get(t))return gt.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,n=Xo.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(n||Ko.includes(r)))return;const i=async function(o,...s){const c=this.transaction(o,n?"readwrite":"readonly");let h=c.store;return a&&(h=h.index(s.shift())),(await Promise.all([h[r](...s),n&&c.done]))[0]};return gt.set(t,i),i}Wo(e=>({...e,get:(t,r,a)=>gr(t,r)||e.get(t,r,a),has:(t,r)=>!!gr(t,r)||e.has(t,r)}));const Yo=Object.freeze(Object.defineProperty({__proto__:null,deleteDB:zo,openDB:qo,unwrap:je,wrap:K},Symbol.toStringTag,{value:"Module"})),Mt=jr(Yo);(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=le,r=Ne,a=dn,n=g,i=Mt;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var o=function(){function p(d){this.container=d}return p.prototype.getPlatformInfoString=function(){var d=this.container.getProviders();return d.map(function(v){if(s(v)){var y=v.getImmediate();return"".concat(y.library,"/").concat(y.version)}else return null}).filter(function(v){return v}).join(" ")},p}();function s(p){var d=p.getComponent();return d?.type==="VERSION"}var c="@firebase/app",h="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b=new a.Logger("@firebase/app"),l="@firebase/app-compat",f="@firebase/analytics-compat",u="@firebase/analytics",I="@firebase/app-check-compat",m="@firebase/app-check",R="@firebase/auth",O="@firebase/auth-compat",F="@firebase/database",ae="@firebase/database-compat",fe="@firebase/functions",we="@firebase/functions-compat",pe="@firebase/installations",lt="@firebase/installations-compat",V="@firebase/messaging",Qt="@firebase/messaging-compat",Qn="@firebase/performance",Zn="@firebase/performance-compat",ea="@firebase/remote-config",ta="@firebase/remote-config-compat",ra="@firebase/storage",na="@firebase/storage-compat",aa="@firebase/firestore",ia="@firebase/vertexai-preview",oa="@firebase/firestore-compat",sa="firebase",ca="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N,Ee="[DEFAULT]",ua=(N={},N[c]="fire-core",N[l]="fire-core-compat",N[u]="fire-analytics",N[f]="fire-analytics-compat",N[m]="fire-app-check",N[I]="fire-app-check-compat",N[R]="fire-auth",N[O]="fire-auth-compat",N[F]="fire-rtdb",N[ae]="fire-rtdb-compat",N[fe]="fire-fn",N[we]="fire-fn-compat",N[pe]="fire-iid",N[lt]="fire-iid-compat",N[V]="fire-fcm",N[Qt]="fire-fcm-compat",N[Qn]="fire-perf",N[Zn]="fire-perf-compat",N[ea]="fire-rc",N[ta]="fire-rc-compat",N[ra]="fire-gcs",N[na]="fire-gcs-compat",N[aa]="fire-fst",N[oa]="fire-fst-compat",N[ia]="fire-vertex",N["fire-js"]="fire-js",N[sa]="fire-js-all",N);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee=new Map,he=new Map,ve=new Map;function dt(p,d){try{p.container.addComponent(d)}catch(v){b.debug("Component ".concat(d.name," failed to register with FirebaseApp ").concat(p.name),v)}}function la(p,d){p.container.addOrOverwriteComponent(d)}function Be(p){var d,v,y,_,E=p.name;if(ve.has(E))return b.debug("There were multiple attempts to register component ".concat(E,".")),!1;ve.set(E,p);try{for(var T=r.__values(ee.values()),A=T.next();!A.done;A=T.next()){var C=A.value;dt(C,p)}}catch(q){d={error:q}}finally{try{A&&!A.done&&(v=T.return)&&v.call(T)}finally{if(d)throw d.error}}try{for(var M=r.__values(he.values()),L=M.next();!L.done;L=M.next()){var k=L.value;dt(k,p)}}catch(q){y={error:q}}finally{try{L&&!L.done&&(_=M.return)&&_.call(M)}finally{if(y)throw y.error}}return!0}function Zt(p,d){var v=p.container.getProvider("heartbeat").getImmediate({optional:!0});return v&&v.triggerHeartbeat(),p.container.getProvider(d)}function da(p,d,v){v===void 0&&(v=Ee),Zt(p,d).clearInstance(v)}function er(p){return p.options!==void 0}function fa(p){return p.settings!==void 0}function pa(){ve.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $,ha=($={},$["no-app"]="No Firebase App '{$appName}' has been created - call initializeApp() first",$["bad-app-name"]="Illegal App name: '{$appName}'",$["duplicate-app"]="Firebase App named '{$appName}' already exists with different options or config",$["app-deleted"]="Firebase App named '{$appName}' already deleted",$["server-app-deleted"]="Firebase Server App has been deleted",$["no-options"]="Need to provide options, when not being deployed to hosting via source.",$["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",$["invalid-log-argument"]="First argument to `onLog` must be null or a function.",$["idb-open"]="Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",$["idb-get"]="Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",$["idb-set"]="Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",$["idb-delete"]="Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",$["finalization-registry-not-supported"]="FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",$["invalid-server-app-environment"]="FirebaseServerApp is not for use in browser environments.",$),W=new n.ErrorFactory("app","Firebase",ha);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tr=function(){function p(d,v,y){var _=this;this._isDeleted=!1,this._options=r.__assign({},d),this._config=r.__assign({},v),this._name=v.name,this._automaticDataCollectionEnabled=v.automaticDataCollectionEnabled,this._container=y,this.container.addComponent(new t.Component("app",function(){return _},"PUBLIC"))}return Object.defineProperty(p.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(d){this.checkDestroyed(),this._automaticDataCollectionEnabled=d},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"name",{get:function(){return this.checkDestroyed(),this._name},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"options",{get:function(){return this.checkDestroyed(),this._options},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"config",{get:function(){return this.checkDestroyed(),this._config},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"container",{get:function(){return this._container},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"isDeleted",{get:function(){return this._isDeleted},set:function(d){this._isDeleted=d},enumerable:!1,configurable:!0}),p.prototype.checkDestroyed=function(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})},p}();/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var va=function(p){r.__extends(d,p);function d(v,y,_,E){var T=this,A=y.automaticDataCollectionEnabled!==void 0?y.automaticDataCollectionEnabled:!1,C={name:_,automaticDataCollectionEnabled:A};if(v.apiKey!==void 0)T=p.call(this,v,C,E)||this;else{var M=v;T=p.call(this,M.options,C,E)||this}return T._serverConfig=r.__assign({automaticDataCollectionEnabled:A},y),T._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(T._finalizationRegistry=new FinalizationRegistry(function(){T.automaticCleanup()})),T._refCount=0,T.incRefCount(T._serverConfig.releaseOnDeref),T._serverConfig.releaseOnDeref=void 0,y.releaseOnDeref=void 0,Se(c,h,"serverapp"),T}return d.prototype.toJSON=function(){},Object.defineProperty(d.prototype,"refCount",{get:function(){return this._refCount},enumerable:!1,configurable:!0}),d.prototype.incRefCount=function(v){this.isDeleted||(this._refCount++,v!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(v,this))},d.prototype.decRefCount=function(){return this.isDeleted?0:--this._refCount},d.prototype.automaticCleanup=function(){nr(this)},Object.defineProperty(d.prototype,"settings",{get:function(){return this.checkDestroyed(),this._serverConfig},enumerable:!1,configurable:!0}),d.prototype.checkDestroyed=function(){if(this.isDeleted)throw W.create("server-app-deleted")},d}(tr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ga=ca;function rr(p,d){var v,y;d===void 0&&(d={});var _=p;if(typeof d!="object"){var E=d;d={name:E}}var T=r.__assign({name:Ee,automaticDataCollectionEnabled:!1},d),A=T.name;if(typeof A!="string"||!A)throw W.create("bad-app-name",{appName:String(A)});if(_||(_=n.getDefaultAppConfig()),!_)throw W.create("no-options");var C=ee.get(A);if(C){if(n.deepEqual(_,C.options)&&n.deepEqual(T,C.config))return C;throw W.create("duplicate-app",{appName:A})}var M=new t.ComponentContainer(A);try{for(var L=r.__values(ve.values()),k=L.next();!k.done;k=L.next()){var q=k.value;M.addComponent(q)}}catch(xe){v={error:xe}}finally{try{k&&!k.done&&(y=L.return)&&y.call(L)}finally{if(v)throw v.error}}var ie=new tr(_,T,M);return ee.set(A,ie),ie}function ma(p,d){var v,y;if(n.isBrowser()&&!n.isWebWorker())throw W.create("invalid-server-app-environment");d.automaticDataCollectionEnabled===void 0&&(d.automaticDataCollectionEnabled=!1);var _;er(p)?_=p.options:_=p;var E=r.__assign(r.__assign({},d),_);E.releaseOnDeref!==void 0&&delete E.releaseOnDeref;var T=function(xe){return r.__spreadArray([],r.__read(xe),!1).reduce(function(Da,ka){return Math.imul(31,Da)+ka.charCodeAt(0)|0},0)};if(d.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw W.create("finalization-registry-not-supported",{});var A=""+T(JSON.stringify(E)),C=he.get(A);if(C)return C.incRefCount(d.releaseOnDeref),C;var M=new t.ComponentContainer(A);try{for(var L=r.__values(ve.values()),k=L.next();!k.done;k=L.next()){var q=k.value;M.addComponent(q)}}catch(xe){v={error:xe}}finally{try{k&&!k.done&&(y=L.return)&&y.call(L)}finally{if(v)throw v.error}}var ie=new va(_,d,A,M);return he.set(A,ie),ie}function ba(p){p===void 0&&(p=Ee);var d=ee.get(p);if(!d&&p===Ee&&n.getDefaultAppConfig())return rr();if(!d)throw W.create("no-app",{appName:p});return d}function _a(){return Array.from(ee.values())}function nr(p){return r.__awaiter(this,void 0,void 0,function(){var d,v,y;return r.__generator(this,function(_){switch(_.label){case 0:return d=!1,v=p.name,ee.has(v)?(d=!0,ee.delete(v)):he.has(v)&&(y=p,y.decRefCount()<=0&&(he.delete(v),d=!0)),d?[4,Promise.all(p.container.getProviders().map(function(E){return E.delete()}))]:[3,2];case 1:_.sent(),p.isDeleted=!0,_.label=2;case 2:return[2]}})})}function Se(p,d,v){var y,_=(y=ua[p])!==null&&y!==void 0?y:p;v&&(_+="-".concat(v));var E=_.match(/\s|\//),T=d.match(/\s|\//);if(E||T){var A=['Unable to register library "'.concat(_,'" with version "').concat(d,'":')];E&&A.push('library name "'.concat(_,'" contains illegal characters (whitespace or "/")')),E&&T&&A.push("and"),T&&A.push('version name "'.concat(d,'" contains illegal characters (whitespace or "/")')),b.warn(A.join(" "));return}Be(new t.Component("".concat(_,"-version"),function(){return{library:_,version:d}},"VERSION"))}function ya(p,d){if(p!==null&&typeof p!="function")throw W.create("invalid-log-argument");a.setUserLogHandler(p,d)}function wa(p){a.setLogLevel(p)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ea="firebase-heartbeat-database",Sa=1,Ie="firebase-heartbeat-store",ft=null;function ar(){return ft||(ft=i.openDB(Ea,Sa,{upgrade:function(p,d){switch(d){case 0:try{p.createObjectStore(Ie)}catch(v){console.warn(v)}}}}).catch(function(p){throw W.create("idb-open",{originalErrorMessage:p.message})})),ft}function Ia(p){return r.__awaiter(this,void 0,void 0,function(){var d,v,y,_,E;return r.__generator(this,function(T){switch(T.label){case 0:return T.trys.push([0,4,,5]),[4,ar()];case 1:return d=T.sent(),v=d.transaction(Ie),[4,v.objectStore(Ie).get(or(p))];case 2:return y=T.sent(),[4,v.done];case 3:return T.sent(),[2,y];case 4:return _=T.sent(),_ instanceof n.FirebaseError?b.warn(_.message):(E=W.create("idb-get",{originalErrorMessage:_?.message}),b.warn(E.message)),[3,5];case 5:return[2]}})})}function ir(p,d){return r.__awaiter(this,void 0,void 0,function(){var v,y,_,E,T;return r.__generator(this,function(A){switch(A.label){case 0:return A.trys.push([0,4,,5]),[4,ar()];case 1:return v=A.sent(),y=v.transaction(Ie,"readwrite"),_=y.objectStore(Ie),[4,_.put(d,or(p))];case 2:return A.sent(),[4,y.done];case 3:return A.sent(),[3,5];case 4:return E=A.sent(),E instanceof n.FirebaseError?b.warn(E.message):(T=W.create("idb-set",{originalErrorMessage:E?.message}),b.warn(T.message)),[3,5];case 5:return[2]}})})}function or(p){return"".concat(p.name,"!").concat(p.options.appId)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xa=1024,Ta=30*24*60*60*1e3,Aa=function(){function p(d){var v=this;this.container=d,this._heartbeatsCache=null;var y=this.container.getProvider("app").getImmediate();this._storage=new Ca(y),this._heartbeatsCachePromise=this._storage.read().then(function(_){return v._heartbeatsCache=_,_})}return p.prototype.triggerHeartbeat=function(){var d,v;return r.__awaiter(this,void 0,void 0,function(){var y,_,E,T,A;return r.__generator(this,function(C){switch(C.label){case 0:return C.trys.push([0,3,,4]),y=this.container.getProvider("platform-logger").getImmediate(),_=y.getPlatformInfoString(),E=sr(),((d=this._heartbeatsCache)===null||d===void 0?void 0:d.heartbeats)!=null?[3,2]:(T=this,[4,this._heartbeatsCachePromise]);case 1:if(T._heartbeatsCache=C.sent(),((v=this._heartbeatsCache)===null||v===void 0?void 0:v.heartbeats)==null)return[2];C.label=2;case 2:return this._heartbeatsCache.lastSentHeartbeatDate===E||this._heartbeatsCache.heartbeats.some(function(M){return M.date===E})?[2]:(this._heartbeatsCache.heartbeats.push({date:E,agent:_}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(function(M){var L=new Date(M.date).valueOf(),k=Date.now();return k-L<=Ta}),[2,this._storage.overwrite(this._heartbeatsCache)]);case 3:return A=C.sent(),b.warn(A),[3,4];case 4:return[2]}})})},p.prototype.getHeartbeatsHeader=function(){var d;return r.__awaiter(this,void 0,void 0,function(){var v,y,_,E,T,A;return r.__generator(this,function(C){switch(C.label){case 0:return C.trys.push([0,6,,7]),this._heartbeatsCache!==null?[3,2]:[4,this._heartbeatsCachePromise];case 1:C.sent(),C.label=2;case 2:return((d=this._heartbeatsCache)===null||d===void 0?void 0:d.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0?[2,""]:(v=sr(),y=Oa(this._heartbeatsCache.heartbeats),_=y.heartbeatsToSend,E=y.unsentEntries,T=n.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:_})),this._heartbeatsCache.lastSentHeartbeatDate=v,E.length>0?(this._heartbeatsCache.heartbeats=E,[4,this._storage.overwrite(this._heartbeatsCache)]):[3,4]);case 3:return C.sent(),[3,5];case 4:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache),C.label=5;case 5:return[2,T];case 6:return A=C.sent(),b.warn(A),[2,""];case 7:return[2]}})})},p}();function sr(){var p=new Date;return p.toISOString().substring(0,10)}function Oa(p,d){var v,y;d===void 0&&(d=xa);var _=[],E=p.slice(),T=function(k){var q=_.find(function(ie){return ie.agent===k.agent});if(q){if(q.dates.push(k.date),cr(_)>d)return q.dates.pop(),"break"}else if(_.push({agent:k.agent,dates:[k.date]}),cr(_)>d)return _.pop(),"break";E=E.slice(1)};try{for(var A=r.__values(p),C=A.next();!C.done;C=A.next()){var M=C.value,L=T(M);if(L==="break")break}}catch(k){v={error:k}}finally{try{C&&!C.done&&(y=A.return)&&y.call(A)}finally{if(v)throw v.error}}return{heartbeatsToSend:_,unsentEntries:E}}var Ca=function(){function p(d){this.app=d,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return p.prototype.runIndexedDBEnvironmentCheck=function(){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(d){return n.isIndexedDBAvailable()?[2,n.validateIndexedDBOpenable().then(function(){return!0}).catch(function(){return!1})]:[2,!1]})})},p.prototype.read=function(){return r.__awaiter(this,void 0,void 0,function(){var d,v;return r.__generator(this,function(y){switch(y.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return d=y.sent(),d?[3,2]:[2,{heartbeats:[]}];case 2:return[4,Ia(this.app)];case 3:return v=y.sent(),v?.heartbeats?[2,v]:[2,{heartbeats:[]}];case 4:return[2]}})})},p.prototype.overwrite=function(d){var v;return r.__awaiter(this,void 0,void 0,function(){var y,_;return r.__generator(this,function(E){switch(E.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return y=E.sent(),y?[3,2]:[2];case 2:return[4,this.read()];case 3:return _=E.sent(),[2,ir(this.app,{lastSentHeartbeatDate:(v=d.lastSentHeartbeatDate)!==null&&v!==void 0?v:_.lastSentHeartbeatDate,heartbeats:d.heartbeats})]}})})},p.prototype.add=function(d){var v;return r.__awaiter(this,void 0,void 0,function(){var y,_;return r.__generator(this,function(E){switch(E.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return y=E.sent(),y?[3,2]:[2];case 2:return[4,this.read()];case 3:return _=E.sent(),[2,ir(this.app,{lastSentHeartbeatDate:(v=d.lastSentHeartbeatDate)!==null&&v!==void 0?v:_.lastSentHeartbeatDate,heartbeats:r.__spreadArray(r.__spreadArray([],r.__read(_.heartbeats),!1),r.__read(d.heartbeats),!1)})]}})})},p}();function cr(p){return n.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:p})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(p){Be(new t.Component("platform-logger",function(d){return new o(d)},"PRIVATE")),Be(new t.Component("heartbeat",function(d){return new Aa(d)},"PRIVATE")),Se(c,h,p),Se(c,h,"cjs5"),Se("fire-js","")}Na("node"),Object.defineProperty(e,"FirebaseError",{enumerable:!0,get:function(){return n.FirebaseError}}),e.SDK_VERSION=ga,e._DEFAULT_ENTRY_NAME=Ee,e._addComponent=dt,e._addOrOverwriteComponent=la,e._apps=ee,e._clearComponents=pa,e._components=ve,e._getProvider=Zt,e._isFirebaseApp=er,e._isFirebaseServerApp=fa,e._registerComponent=Be,e._removeServiceInstance=da,e._serverApps=he,e.deleteApp=nr,e.getApp=ba,e.getApps=_a,e.initializeApp=rr,e.initializeServerApp=ma,e.onLog=ya,e.registerVersion=Se,e.setLogLevel=wa})(it);(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=it,r="firebase",a="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.registerVersion(r,a,"app"),Object.keys(t).forEach(function(n){n!=="default"&&!e.hasOwnProperty(n)&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})})(Kr);var hn={},de={},_e={};Object.defineProperty(_e,"__esModule",{value:!0});var ne=it,mr=le,S=Ne,vn=g,Jo=Mt,gn="@firebase/installations",Bt="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn=1e4,bn="w:".concat(Bt),_n="FIS_v2",Qo="https://firebaseinstallations.googleapis.com/v1",Zo=60*60*1e3,es="installations",ts="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te,rs=(te={},te["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',te["not-registered"]="Firebase Installation is not registered.",te["installation-not-found"]="Firebase Installation not found.",te["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',te["app-offline"]="Could not process request. Application offline.",te["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",te),Q=new vn.ErrorFactory(es,ts,rs);function yn(e){return e instanceof vn.FirebaseError&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e){var t=e.projectId;return"".concat(Qo,"/projects/").concat(t,"/installations")}function wn(e){return{token:e.token,requestStatus:2,expiresIn:ns(e.expiresIn),creationTime:Date.now()}}function jt(e,t){return S.__awaiter(this,void 0,void 0,function(){var r,a;return S.__generator(this,function(n){switch(n.label){case 0:return[4,t.json()];case 1:return r=n.sent(),a=r.error,[2,Q.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})]}})})}function En(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Sn(e,t){var r=t.refreshToken,a=En(e);return a.append("Authorization",as(r)),a}function Ft(e){return S.__awaiter(this,void 0,void 0,function(){var t;return S.__generator(this,function(r){switch(r.label){case 0:return[4,e()];case 1:return t=r.sent(),t.status>=500&&t.status<600?[2,e()]:[2,t]}})})}function ns(e){return Number(e.replace("s","000"))}function as(e){return"".concat(_n," ").concat(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t){var r=e.appConfig,a=e.heartbeatServiceProvider,n=t.fid;return S.__awaiter(this,void 0,void 0,function(){var i,o,s,c,h,b,l,f,u;return S.__generator(this,function(I){switch(I.label){case 0:return i=$t(r),o=En(r),s=a.getImmediate({optional:!0}),s?[4,s.getHeartbeatsHeader()]:[3,2];case 1:c=I.sent(),c&&o.append("x-firebase-client",c),I.label=2;case 2:return h={fid:n,authVersion:_n,appId:r.appId,sdkVersion:bn},b={method:"POST",headers:o,body:JSON.stringify(h)},[4,Ft(function(){return fetch(i,b)})];case 3:return l=I.sent(),l.ok?[4,l.json()]:[3,5];case 4:return f=I.sent(),u={fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:wn(f.authToken)},[2,u];case 5:return[4,jt("Create Installation",l)];case 6:throw I.sent()}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e){return new Promise(function(t){setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){var t=btoa(String.fromCharCode.apply(String,S.__spreadArray([],S.__read(e),!1)));return t.replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ss=/^[cdef][\w-]{21}$/,Nt="";function cs(){try{var e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;var r=us(e);return ss.test(r)?r:Nt}catch{return Nt}}function us(e){var t=os(e);return t.substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){return"".concat(e.appName,"!").concat(e.appId)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be=new Map;function xn(e,t){var r=ye(e);Tn(r,t),fs(r,t)}function ls(e,t){An();var r=ye(e),a=be.get(r);a||(a=new Set,be.set(r,a)),a.add(t)}function ds(e,t){var r=ye(e),a=be.get(r);a&&(a.delete(t),a.size===0&&be.delete(r),On())}function Tn(e,t){var r,a,n=be.get(e);if(n)try{for(var i=S.__values(n),o=i.next();!o.done;o=i.next()){var s=o.value;s(t)}}catch(c){r={error:c}}finally{try{o&&!o.done&&(a=i.return)&&a.call(i)}finally{if(r)throw r.error}}}function fs(e,t){var r=An();r&&r.postMessage({key:e,fid:t}),On()}var se=null;function An(){return!se&&"BroadcastChannel"in self&&(se=new BroadcastChannel("[Firebase] FID Change"),se.onmessage=function(e){Tn(e.data.key,e.data.fid)}),se}function On(){be.size===0&&se&&(se.close(),se=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ps="firebase-installations-database",hs=1,ce="firebase-installations-store",mt=null;function Ut(){return mt||(mt=Jo.openDB(ps,hs,{upgrade:function(e,t){switch(t){case 0:e.createObjectStore(ce)}}})),mt}function Ge(e,t){return S.__awaiter(this,void 0,void 0,function(){var r,a,n,i,o;return S.__generator(this,function(s){switch(s.label){case 0:return r=ye(e),[4,Ut()];case 1:return a=s.sent(),n=a.transaction(ce,"readwrite"),i=n.objectStore(ce),[4,i.get(r)];case 2:return o=s.sent(),[4,i.put(t,r)];case 3:return s.sent(),[4,n.done];case 4:return s.sent(),(!o||o.fid!==t.fid)&&xn(e,t.fid),[2,t]}})})}function Vt(e){return S.__awaiter(this,void 0,void 0,function(){var t,r,a;return S.__generator(this,function(n){switch(n.label){case 0:return t=ye(e),[4,Ut()];case 1:return r=n.sent(),a=r.transaction(ce,"readwrite"),[4,a.objectStore(ce).delete(t)];case 2:return n.sent(),[4,a.done];case 3:return n.sent(),[2]}})})}function Pe(e,t){return S.__awaiter(this,void 0,void 0,function(){var r,a,n,i,o,s;return S.__generator(this,function(c){switch(c.label){case 0:return r=ye(e),[4,Ut()];case 1:return a=c.sent(),n=a.transaction(ce,"readwrite"),i=n.objectStore(ce),[4,i.get(r)];case 2:return o=c.sent(),s=t(o),s!==void 0?[3,4]:[4,i.delete(r)];case 3:return c.sent(),[3,6];case 4:return[4,i.put(s,r)];case 5:c.sent(),c.label=6;case 6:return[4,n.done];case 7:return c.sent(),s&&(!o||o.fid!==s.fid)&&xn(e,s.fid),[2,s]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){return S.__awaiter(this,void 0,void 0,function(){var t,r,a;return S.__generator(this,function(n){switch(n.label){case 0:return[4,Pe(e.appConfig,function(i){var o=vs(i),s=gs(e,o);return t=s.registrationPromise,s.installationEntry})];case 1:return r=n.sent(),r.fid!==Nt?[3,3]:(a={},[4,t]);case 2:return[2,(a.installationEntry=n.sent(),a)];case 3:return[2,{installationEntry:r,registrationPromise:t}]}})})}function vs(e){var t=e||{fid:cs(),registrationStatus:0};return Cn(t)}function gs(e,t){if(t.registrationStatus===0){if(!navigator.onLine){var r=Promise.reject(Q.create("app-offline"));return{installationEntry:t,registrationPromise:r}}var a={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=ms(e,a);return{installationEntry:a,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:bs(e)}:{installationEntry:t}}function ms(e,t){return S.__awaiter(this,void 0,void 0,function(){var r,a;return S.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,7]),[4,is(e,t)];case 1:return r=n.sent(),[2,Ge(e.appConfig,r)];case 2:return a=n.sent(),yn(a)&&a.customData.serverCode===409?[4,Vt(e.appConfig)]:[3,4];case 3:return n.sent(),[3,6];case 4:return[4,Ge(e.appConfig,{fid:t.fid,registrationStatus:0})];case 5:n.sent(),n.label=6;case 6:throw a;case 7:return[2]}})})}function bs(e){return S.__awaiter(this,void 0,void 0,function(){var t,r,a,n;return S.__generator(this,function(i){switch(i.label){case 0:return[4,br(e.appConfig)];case 1:t=i.sent(),i.label=2;case 2:return t.registrationStatus!==1?[3,5]:[4,In(100)];case 3:return i.sent(),[4,br(e.appConfig)];case 4:return t=i.sent(),[3,2];case 5:return t.registrationStatus!==0?[3,7]:[4,Wt(e)];case 6:return r=i.sent(),a=r.installationEntry,n=r.registrationPromise,n?[2,n]:[2,a];case 7:return[2,t]}})})}function br(e){return Pe(e,function(t){if(!t)throw Q.create("installation-not-found");return Cn(t)})}function Cn(e){return _s(e)?{fid:e.fid,registrationStatus:0}:e}function _s(e){return e.registrationStatus===1&&e.registrationTime+mn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(e,t){var r=e.appConfig,a=e.heartbeatServiceProvider;return S.__awaiter(this,void 0,void 0,function(){var n,i,o,s,c,h,b,l,f;return S.__generator(this,function(u){switch(u.label){case 0:return n=ws(r,t),i=Sn(r,t),o=a.getImmediate({optional:!0}),o?[4,o.getHeartbeatsHeader()]:[3,2];case 1:s=u.sent(),s&&i.append("x-firebase-client",s),u.label=2;case 2:return c={installation:{sdkVersion:bn,appId:r.appId}},h={method:"POST",headers:i,body:JSON.stringify(c)},[4,Ft(function(){return fetch(n,h)})];case 3:return b=u.sent(),b.ok?[4,b.json()]:[3,5];case 4:return l=u.sent(),f=wn(l),[2,f];case 5:return[4,jt("Generate Auth Token",b)];case 6:throw u.sent()}})})}function ws(e,t){var r=t.fid;return"".concat($t(e),"/").concat(r,"/authTokens:generate")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e,t){return t===void 0&&(t=!1),S.__awaiter(this,void 0,void 0,function(){var r,a,n,i;return S.__generator(this,function(o){switch(o.label){case 0:return[4,Pe(e.appConfig,function(s){if(!Nn(s))throw Q.create("not-registered");var c=s.authToken;if(!t&&Is(c))return s;if(c.requestStatus===1)return r=Es(e,t),s;if(!navigator.onLine)throw Q.create("app-offline");var h=Ts(s);return r=Ss(e,h),h})];case 1:return a=o.sent(),r?[4,r]:[3,3];case 2:return i=o.sent(),[3,4];case 3:i=a.authToken,o.label=4;case 4:return n=i,[2,n]}})})}function Es(e,t){return S.__awaiter(this,void 0,void 0,function(){var r,a;return S.__generator(this,function(n){switch(n.label){case 0:return[4,_r(e.appConfig)];case 1:r=n.sent(),n.label=2;case 2:return r.authToken.requestStatus!==1?[3,5]:[4,In(100)];case 3:return n.sent(),[4,_r(e.appConfig)];case 4:return r=n.sent(),[3,2];case 5:return a=r.authToken,a.requestStatus===0?[2,Ht(e,t)]:[2,a]}})})}function _r(e){return Pe(e,function(t){if(!Nn(t))throw Q.create("not-registered");var r=t.authToken;return As(r)?S.__assign(S.__assign({},t),{authToken:{requestStatus:0}}):t})}function Ss(e,t){return S.__awaiter(this,void 0,void 0,function(){var r,n,a,n;return S.__generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,8]),[4,ys(e,t)];case 1:return r=i.sent(),n=S.__assign(S.__assign({},t),{authToken:r}),[4,Ge(e.appConfig,n)];case 2:return i.sent(),[2,r];case 3:return a=i.sent(),yn(a)&&(a.customData.serverCode===401||a.customData.serverCode===404)?[4,Vt(e.appConfig)]:[3,5];case 4:return i.sent(),[3,7];case 5:return n=S.__assign(S.__assign({},t),{authToken:{requestStatus:0}}),[4,Ge(e.appConfig,n)];case 6:i.sent(),i.label=7;case 7:throw a;case 8:return[2]}})})}function Nn(e){return e!==void 0&&e.registrationStatus===2}function Is(e){return e.requestStatus===2&&!xs(e)}function xs(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Zo}function Ts(e){var t={requestStatus:1,requestTime:Date.now()};return S.__assign(S.__assign({},e),{authToken:t})}function As(e){return e.requestStatus===1&&e.requestTime+mn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e){return S.__awaiter(this,void 0,void 0,function(){var t,r,a,n;return S.__generator(this,function(i){switch(i.label){case 0:return t=e,[4,Wt(t)];case 1:return r=i.sent(),a=r.installationEntry,n=r.registrationPromise,n?n.catch(console.error):Ht(t).catch(console.error),[2,a.fid]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e,t){return t===void 0&&(t=!1),S.__awaiter(this,void 0,void 0,function(){var r,a;return S.__generator(this,function(n){switch(n.label){case 0:return r=e,[4,Os(r)];case 1:return n.sent(),[4,Ht(r,t)];case 2:return a=n.sent(),[2,a.token]}})})}function Os(e){return S.__awaiter(this,void 0,void 0,function(){var t;return S.__generator(this,function(r){switch(r.label){case 0:return[4,Wt(e)];case 1:return t=r.sent().registrationPromise,t?[4,t]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e,t){return S.__awaiter(this,void 0,void 0,function(){var r,a,n,i;return S.__generator(this,function(o){switch(o.label){case 0:return r=Ns(e,t),a=Sn(e,t),n={method:"DELETE",headers:a},[4,Ft(function(){return fetch(r,n)})];case 1:return i=o.sent(),i.ok?[3,3]:[4,jt("Delete Installation",i)];case 2:throw o.sent();case 3:return[2]}})})}function Ns(e,t){var r=t.fid;return"".concat($t(e),"/").concat(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){return S.__awaiter(this,void 0,void 0,function(){var t,r;return S.__generator(this,function(a){switch(a.label){case 0:return t=e.appConfig,[4,Pe(t,function(n){if(!(n&&n.registrationStatus===0))return n})];case 1:if(r=a.sent(),!r)return[3,6];if(r.registrationStatus!==1)return[3,2];throw Q.create("delete-pending-registration");case 2:if(r.registrationStatus!==2)return[3,6];if(navigator.onLine)return[3,3];throw Q.create("app-offline");case 3:return[4,Cs(t,r)];case 4:return a.sent(),[4,Vt(t)];case 5:a.sent(),a.label=6;case 6:return[2]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e,t){var r=e.appConfig;return ls(r,t),function(){ds(r,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e){e===void 0&&(e=ne.getApp());var t=ne._getProvider(e,"installations").getImmediate();return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(e){var t,r;if(!e||!e.options)throw bt("App Configuration");if(!e.name)throw bt("App Name");var a=["projectId","apiKey","appId"];try{for(var n=S.__values(a),i=n.next();!i.done;i=n.next()){var o=i.value;if(!e.options[o])throw bt(o)}}catch(s){t={error:s}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function bt(e){return Q.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn="installations",Ls="installations-internal",Ms=function(e){var t=e.getProvider("app").getImmediate(),r=Ps(t),a=ne._getProvider(t,"heartbeat"),n={app:t,appConfig:r,heartbeatServiceProvider:a,_delete:function(){return Promise.resolve()}};return n},Bs=function(e){var t=e.getProvider("app").getImmediate(),r=ne._getProvider(t,Rn).getImmediate(),a={getId:function(){return Dn(r)},getToken:function(n){return kn(r,n)}};return a};function $s(){ne._registerComponent(new mr.Component(Rn,Ms,"PUBLIC")),ne._registerComponent(new mr.Component(Ls,Bs,"PRIVATE"))}$s();ne.registerVersion(gn,Bt);ne.registerVersion(gn,Bt,"cjs5");_e.deleteInstallations=Ds;_e.getId=Dn;_e.getInstallations=Rs;_e.getToken=kn;_e.onIdChange=ks;Object.defineProperty(de,"__esModule",{value:!0});var yr=le,w=Ne,Ae=Mt,re=g,ge=it;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var js="/firebase-messaging-sw.js",Fs="/firebase-cloud-messaging-push-scope",Pn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Us="https://fcmregistrations.googleapis.com/v1",Ln="google.c.a.c_id",Vs="google.c.a.c_l",Ws="google.c.a.ts",Hs="google.c.a.e",wr;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(wr||(wr={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ce;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Ce||(Ce={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){var t=new Uint8Array(e),r=btoa(String.fromCharCode.apply(String,w.__spreadArray([],w.__read(t),!1)));return r.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Gs(e){for(var t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=atob(r),n=new Uint8Array(a.length),i=0;i<a.length;++i)n[i]=a.charCodeAt(i);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t="fcm_token_details_db",qs=5,Er="fcm_token_object_Store";function zs(e){return w.__awaiter(this,void 0,void 0,function(){var t,r,a,n,i=this;return w.__generator(this,function(o){switch(o.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=o.sent(),r=t.map(function(s){return s.name}),!r.includes(_t))return[2,null];o.label=2;case 2:return a=null,[4,Ae.openDB(_t,qs,{upgrade:function(s,c,h,b){return w.__awaiter(i,void 0,void 0,function(){var l,f,u,u,u,I;return w.__generator(this,function(m){switch(m.label){case 0:return c<2?[2]:s.objectStoreNames.contains(Er)?(l=b.objectStore(Er),[4,l.index("fcmSenderId").get(e)]):[2];case 1:return f=m.sent(),[4,l.clear()];case 2:if(m.sent(),!f)return[2];if(c===2){if(u=f,!u.auth||!u.p256dh||!u.endpoint)return[2];a={token:u.fcmToken,createTime:(I=u.createTime)!==null&&I!==void 0?I:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:J(u.vapidKey)}}}else c===3?(u=f,a={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:J(u.auth),p256dh:J(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:J(u.vapidKey)}}):c===4&&(u=f,a={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:J(u.auth),p256dh:J(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:J(u.vapidKey)}});return[2]}})})}})];case 3:return n=o.sent(),n.close(),[4,Ae.deleteDB(_t)];case 4:return o.sent(),[4,Ae.deleteDB("fcm_vapid_details_db")];case 5:return o.sent(),[4,Ae.deleteDB("undefined")];case 6:return o.sent(),[2,Ks(a)?a:null]}})})}function Ks(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xs="firebase-messaging-database",Ys=1,ue="firebase-messaging-store",yt=null;function Gt(){return yt||(yt=Ae.openDB(Xs,Ys,{upgrade:function(e,t){switch(t){case 0:e.createObjectStore(ue)}}})),yt}function Mn(e){return w.__awaiter(this,void 0,void 0,function(){var t,r,a,n;return w.__generator(this,function(i){switch(i.label){case 0:return t=zt(e),[4,Gt()];case 1:return r=i.sent(),[4,r.transaction(ue).objectStore(ue).get(t)];case 2:return a=i.sent(),a?[2,a]:[3,3];case 3:return[4,zs(e.appConfig.senderId)];case 4:return n=i.sent(),n?[4,qt(e,n)]:[3,6];case 5:return i.sent(),[2,n];case 6:return[2]}})})}function qt(e,t){return w.__awaiter(this,void 0,void 0,function(){var r,a,n;return w.__generator(this,function(i){switch(i.label){case 0:return r=zt(e),[4,Gt()];case 1:return a=i.sent(),n=a.transaction(ue,"readwrite"),[4,n.objectStore(ue).put(t,r)];case 2:return i.sent(),[4,n.done];case 3:return i.sent(),[2,t]}})})}function Js(e){return w.__awaiter(this,void 0,void 0,function(){var t,r,a;return w.__generator(this,function(n){switch(n.label){case 0:return t=zt(e),[4,Gt()];case 1:return r=n.sent(),a=r.transaction(ue,"readwrite"),[4,a.objectStore(ue).delete(t)];case 2:return n.sent(),[4,a.done];case 3:return n.sent(),[2]}})})}function zt(e){var t=e.appConfig;return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P,Qs=(P={},P["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',P["only-available-in-window"]="This method is available in a Window context.",P["only-available-in-sw"]="This method is available in a service worker context.",P["permission-default"]="The notification permission was not granted and dismissed instead.",P["permission-blocked"]="The notification permission was not granted and blocked instead.",P["unsupported-browser"]="This browser doesn't support the API's required to use the Firebase SDK.",P["indexed-db-unsupported"]="This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",P["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",P["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",P["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",P["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",P["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",P["token-update-no-token"]="FCM returned no token when updating the user to push.",P["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",P["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",P["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",P["invalid-vapid-key"]="The public VAPID key must be a string.",P["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",P),B=new re.ErrorFactory("messaging","Messaging",Qs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e,t){return w.__awaiter(this,void 0,void 0,function(){var r,a,n,i,o,s,c;return w.__generator(this,function(h){switch(h.label){case 0:return[4,Xt(e)];case 1:r=h.sent(),a=$n(t),n={method:"POST",headers:r,body:JSON.stringify(a)},h.label=2;case 2:return h.trys.push([2,5,,6]),[4,fetch(Kt(e.appConfig),n)];case 3:return o=h.sent(),[4,o.json()];case 4:return i=h.sent(),[3,6];case 5:throw s=h.sent(),B.create("token-subscribe-failed",{errorInfo:s?.toString()});case 6:if(i.error)throw c=i.error.message,B.create("token-subscribe-failed",{errorInfo:c});if(!i.token)throw B.create("token-subscribe-no-token");return[2,i.token]}})})}function ec(e,t){return w.__awaiter(this,void 0,void 0,function(){var r,a,n,i,o,s,c;return w.__generator(this,function(h){switch(h.label){case 0:return[4,Xt(e)];case 1:r=h.sent(),a=$n(t.subscriptionOptions),n={method:"PATCH",headers:r,body:JSON.stringify(a)},h.label=2;case 2:return h.trys.push([2,5,,6]),[4,fetch("".concat(Kt(e.appConfig),"/").concat(t.token),n)];case 3:return o=h.sent(),[4,o.json()];case 4:return i=h.sent(),[3,6];case 5:throw s=h.sent(),B.create("token-update-failed",{errorInfo:s?.toString()});case 6:if(i.error)throw c=i.error.message,B.create("token-update-failed",{errorInfo:c});if(!i.token)throw B.create("token-update-no-token");return[2,i.token]}})})}function Bn(e,t){return w.__awaiter(this,void 0,void 0,function(){var r,a,n,i,o,s;return w.__generator(this,function(c){switch(c.label){case 0:return[4,Xt(e)];case 1:r=c.sent(),a={method:"DELETE",headers:r},c.label=2;case 2:return c.trys.push([2,5,,6]),[4,fetch("".concat(Kt(e.appConfig),"/").concat(t),a)];case 3:return n=c.sent(),[4,n.json()];case 4:if(i=c.sent(),i.error)throw o=i.error.message,B.create("token-unsubscribe-failed",{errorInfo:o});return[3,6];case 5:throw s=c.sent(),B.create("token-unsubscribe-failed",{errorInfo:s?.toString()});case 6:return[2]}})})}function Kt(e){var t=e.projectId;return"".concat(Us,"/projects/").concat(t,"/registrations")}function Xt(e){var t=e.appConfig,r=e.installations;return w.__awaiter(this,void 0,void 0,function(){var a;return w.__generator(this,function(n){switch(n.label){case 0:return[4,r.getToken()];case 1:return a=n.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS ".concat(a)})]}})})}function $n(e){var t=e.p256dh,r=e.auth,a=e.endpoint,n=e.vapidKey,i={web:{endpoint:a,auth:r,p256dh:t}};return n!==Pn&&(i.web.applicationPubKey=n),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tc=7*24*60*60*1e3;function rc(e){return w.__awaiter(this,void 0,void 0,function(){var t,r,a,n;return w.__generator(this,function(i){switch(i.label){case 0:return[4,ic(e.swRegistration,e.vapidKey)];case 1:return t=i.sent(),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:J(t.getKey("auth")),p256dh:J(t.getKey("p256dh"))},[4,Mn(e.firebaseDependencies)];case 2:return a=i.sent(),a?[3,3]:[2,Sr(e.firebaseDependencies,r)];case 3:if(oc(a.subscriptionOptions,r))return[3,8];i.label=4;case 4:return i.trys.push([4,6,,7]),[4,Bn(e.firebaseDependencies,a.token)];case 5:return i.sent(),[3,7];case 6:return n=i.sent(),console.warn(n),[3,7];case 7:return[2,Sr(e.firebaseDependencies,r)];case 8:return Date.now()>=a.createTime+tc?[2,ac(e,{token:a.token,createTime:Date.now(),subscriptionOptions:r})]:[2,a.token];case 9:return[2]}})})}function nc(e){return w.__awaiter(this,void 0,void 0,function(){var t,r;return w.__generator(this,function(a){switch(a.label){case 0:return[4,Mn(e.firebaseDependencies)];case 1:return t=a.sent(),t?[4,Bn(e.firebaseDependencies,t.token)]:[3,4];case 2:return a.sent(),[4,Js(e.firebaseDependencies)];case 3:a.sent(),a.label=4;case 4:return[4,e.swRegistration.pushManager.getSubscription()];case 5:return r=a.sent(),r?[2,r.unsubscribe()]:[2,!0]}})})}function ac(e,t){return w.__awaiter(this,void 0,void 0,function(){var r,a,n;return w.__generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,ec(e.firebaseDependencies,t)];case 1:return r=i.sent(),a=w.__assign(w.__assign({},t),{token:r,createTime:Date.now()}),[4,qt(e.firebaseDependencies,a)];case 2:return i.sent(),[2,r];case 3:throw n=i.sent(),n;case 4:return[2]}})})}function Sr(e,t){return w.__awaiter(this,void 0,void 0,function(){var r,a;return w.__generator(this,function(n){switch(n.label){case 0:return[4,Zs(e,t)];case 1:return r=n.sent(),a={token:r,createTime:Date.now(),subscriptionOptions:t},[4,qt(e,a)];case 2:return n.sent(),[2,a.token]}})})}function ic(e,t){return w.__awaiter(this,void 0,void 0,function(){var r;return w.__generator(this,function(a){switch(a.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return r=a.sent(),r?[2,r]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Gs(t)})]}})})}function oc(e,t){var r=t.vapidKey===e.vapidKey,a=t.endpoint===e.endpoint,n=t.auth===e.auth,i=t.p256dh===e.p256dh;return r&&a&&n&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e){var t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return sc(t,e),cc(t,e),uc(t,e),t}function sc(e,t){if(t.notification){e.notification={};var r=t.notification.title;r&&(e.notification.title=r);var a=t.notification.body;a&&(e.notification.body=a);var n=t.notification.image;n&&(e.notification.image=n);var i=t.notification.icon;i&&(e.notification.icon=i)}}function cc(e,t){t.data&&(e.data=t.data)}function uc(e,t){var r,a,n,i,o;if(!(!t.fcmOptions&&!(!((r=t.notification)===null||r===void 0)&&r.click_action))){e.fcmOptions={};var s=(n=(a=t.fcmOptions)===null||a===void 0?void 0:a.link)!==null&&n!==void 0?n:(i=t.notification)===null||i===void 0?void 0:i.click_action;s&&(e.fcmOptions.link=s);var c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(e){return typeof e=="object"&&!!e&&Ln in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");jn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function jn(e,t){for(var r=[],a=0;a<e.length;a++)r.push(e.charAt(a)),a<t.length&&r.push(t.charAt(a));return r.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(e){var t,r;if(!e||!e.options)throw wt("App Configuration Object");if(!e.name)throw wt("App Name");var a=["projectId","apiKey","appId","messagingSenderId"],n=e.options;try{for(var i=w.__values(a),o=i.next();!o.done;o=i.next()){var s=o.value;if(!n[s])throw wt(s)}}catch(c){t={error:c}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wt(e){return B.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fc=function(){function e(t,r,a){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;var n=dc(t);this.firebaseDependencies={app:t,appConfig:n,installations:r,analyticsProvider:a}}return e.prototype._delete=function(){return Promise.resolve()},e}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e){return w.__awaiter(this,void 0,void 0,function(){var t,r;return w.__generator(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),t=e,[4,navigator.serviceWorker.register(js,{scope:Fs})];case 1:return t.swRegistration=a.sent(),e.swRegistration.update().catch(function(){}),[3,3];case 2:throw r=a.sent(),B.create("failed-service-worker-registration",{browserErrorMessage:r?.message});case 3:return[2]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(e,t){return w.__awaiter(this,void 0,void 0,function(){return w.__generator(this,function(r){switch(r.label){case 0:return!t&&!e.swRegistration?[4,Fn(e)]:[3,2];case 1:r.sent(),r.label=2;case 2:if(!t&&e.swRegistration)return[2];if(!(t instanceof ServiceWorkerRegistration))throw B.create("invalid-sw-registration");return e.swRegistration=t,[2]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e,t){return w.__awaiter(this,void 0,void 0,function(){return w.__generator(this,function(r){return t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Pn),[2]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e,t){return w.__awaiter(this,void 0,void 0,function(){return w.__generator(this,function(r){switch(r.label){case 0:if(!navigator)throw B.create("only-available-in-window");return Notification.permission!=="default"?[3,2]:[4,Notification.requestPermission()];case 1:r.sent(),r.label=2;case 2:if(Notification.permission!=="granted")throw B.create("permission-blocked");return[4,hc(e,t?.vapidKey)];case 3:return r.sent(),[4,pc(e,t?.serviceWorkerRegistration)];case 4:return r.sent(),[2,rc(e)]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(e,t,r){return w.__awaiter(this,void 0,void 0,function(){var a,n;return w.__generator(this,function(i){switch(i.label){case 0:return a=gc(t),[4,e.firebaseDependencies.analyticsProvider.get()];case 1:return n=i.sent(),n.logEvent(a,{message_id:r[Ln],message_name:r[Vs],message_time:r[Ws],message_device_time:Math.floor(Date.now()/1e3)}),[2]}})})}function gc(e){switch(e){case Ce.NOTIFICATION_CLICKED:return"notification_open";case Ce.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e,t){return w.__awaiter(this,void 0,void 0,function(){var r,a;return w.__generator(this,function(n){switch(n.label){case 0:return r=t.data,r.isFirebaseMessaging?(e.onMessageHandler&&r.messageType===Ce.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ir(r)):e.onMessageHandler.next(Ir(r))),a=r.data,lc(a)&&a[Hs]==="1"?[4,vc(e,r.messageType,a)]:[3,2]):[2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}var xr="@firebase/messaging",Tr="0.12.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bc=function(e){var t=new fc(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",function(r){return mc(t,r)}),t},_c=function(e){var t=e.getProvider("messaging").getImmediate(),r={getToken:function(a){return Un(t,a)}};return r};function yc(){ge._registerComponent(new yr.Component("messaging",bc,"PUBLIC")),ge._registerComponent(new yr.Component("messaging-internal",_c,"PRIVATE")),ge.registerVersion(xr,Tr),ge.registerVersion(xr,Tr,"cjs5")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return w.__awaiter(this,void 0,void 0,function(){return w.__generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,re.validateIndexedDBOpenable()];case 1:return e.sent(),[3,3];case 2:return e.sent(),[2,!1];case 3:return[2,typeof window<"u"&&re.isIndexedDBAvailable()&&re.areCookiesEnabled()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(e){return w.__awaiter(this,void 0,void 0,function(){return w.__generator(this,function(t){switch(t.label){case 0:if(!navigator)throw B.create("only-available-in-window");return e.swRegistration?[3,2]:[4,Fn(e)];case 1:t.sent(),t.label=2;case 2:return[2,nc(e)]}})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e,t){if(!navigator)throw B.create("only-available-in-window");return e.onMessageHandler=t,function(){e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(e){return e===void 0&&(e=ge.getApp()),Vn().then(function(t){if(!t)throw B.create("unsupported-browser")},function(t){throw B.create("indexed-db-unsupported")}),ge._getProvider(re.getModularInstance(e),"messaging").getImmediate()}function Ic(e,t){return w.__awaiter(this,void 0,void 0,function(){return w.__generator(this,function(r){return e=re.getModularInstance(e),[2,Un(e,t)]})})}function xc(e){return e=re.getModularInstance(e),wc(e)}function Tc(e,t){return e=re.getModularInstance(e),Ec(e,t)}yc();de.deleteToken=xc;de.getMessaging=Sc;de.getToken=Ic;de.isSupported=Vn;de.onMessage=Tc;(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=de;Object.keys(t).forEach(function(r){r!=="default"&&!e.hasOwnProperty(r)&&Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})})})(hn);var ct={};Object.defineProperty(ct,"__esModule",{value:!0});ct.isLocalStorageSupported=void 0;ct.isLocalStorageSupported=function(){try{return typeof window>"u"?!1:"localStorage"in window&&window.localStorage!==null}catch{return!1}};var Le=Ga.default;Object.defineProperty(j,"__esModule",{value:!0});j.unregisterWebPush=j.supportsWebPush=j.saveBrowserTokenMutation=j.reregisterWebPush=j.registerWebPush=j.getIdentityDataQuery=j.checkPermission=void 0;var X=Le(za),Me=Le(Ka),Wn=Le(ja),Ac=Kr,ut=hn,x=Le(qa),Oc=Ua,Hn=Va,Yt=Le(Fa),Gn=ct,Ar,Or,Oe=(0,Oc.getLogger)("WebPushNotifications"),Cc=j.saveBrowserTokenMutation=(0,Hn.gql)(Ar||(Ar=(0,Wn.default)([`
  mutation SaveBrowserToken($browserToken: String!) {
    saveBrowserToken(browserToken: $browserToken) {
      id
      success
    }
  }
`]))),qn=j.getIdentityDataQuery=(0,Hn.gql)(Or||(Or=(0,Wn.default)([`
  query GetIdentityDataForWebPush {
    rawIdentity {
      data
    }
  }
`]))),zn=function(t){return"".concat(t,":enabledWebPush")},Kn=function(){var e=(0,Me.default)((0,X.default)().mark(function t(r){var a,n,i,o,s,c,h,b,l,f,u,I,m;return(0,X.default)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if((0,Gn.isLocalStorageSupported)()){O.next=2;break}return O.abrupt("return");case 2:return b=(0,Yt.default)({environment:x.default===null||x.default===void 0||(a=x.default._meta)===null||a===void 0?void 0:a.environment,name:x.default===null||x.default===void 0?void 0:x.default.CLIENT_ID,supergraphURL:x.default===null||x.default===void 0||(n=x.default.API)===null||n===void 0||(i=n.BASE_URLS)===null||i===void 0?void 0:i.SUPERGRAPH,version:x.default===null||x.default===void 0||(o=x.default._meta)===null||o===void 0?void 0:o.version}),O.next=5,b.query({query:qn});case 5:if(l=O.sent,f=l.data,u=f==null||(s=f.rawIdentity)===null||s===void 0||(c=s.data)===null||c===void 0||(h=c.identity)===null||h===void 0?void 0:h.id,u){O.next=10;break}return O.abrupt("return");case 10:if(I=zn(u),!r){O.next=14;break}return window.localStorage.setItem(I,"true"),O.abrupt("return");case 14:m=window.localStorage.getItem(I),m==="true"&&window.localStorage.setItem(I,"false");case 16:case"end":return O.stop()}},t)}));return function(r){return e.apply(this,arguments)}}(),Nc=j.checkPermission=function(){return typeof window>"u"||!("Notification"in window)?null:Notification.permission},Xn=j.supportsWebPush=function(){var e=(0,Me.default)((0,X.default)().mark(function t(){return(0,X.default)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,ut.isSupported)());case 1:case"end":return a.stop()}},t)}));return function(){return e.apply(this,arguments)}}(),Yn=function(){var t=(0,Ac.initializeApp)({apiKey:x.default.WEB_PUSH_NOTIFICATIONS.FIREBASE.PUBLIC_API_KEY,authDomain:x.default.WEB_PUSH_NOTIFICATIONS.FIREBASE.AUTH_DOMAIN,databaseURL:x.default.WEB_PUSH_NOTIFICATIONS.FIREBASE.DATABASE_URL,projectId:x.default.WEB_PUSH_NOTIFICATIONS.FIREBASE.PROJECT_ID,storageBucket:x.default.WEB_PUSH_NOTIFICATIONS.FIREBASE.STORAGE_BUCKET,messagingSenderId:x.default.WEB_PUSH_NOTIFICATIONS.FIREBASE.MESSAGING_SENDER_ID,appId:x.default.WEB_PUSH_NOTIFICATIONS.FIREBASE.APP_ID,measurementId:x.default.WEB_PUSH_NOTIFICATIONS.FIREBASE.MEASUREMENT_ID});return(0,ut.getMessaging)(t)},Dc=j.registerWebPush=function(){var e=(0,Me.default)((0,X.default)().mark(function t(){var r,a,n,i,o,s,c,h,b,l,f,u;return(0,X.default)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Xn();case 2:if(m.sent){m.next=4;break}return m.abrupt("return",!1);case 4:return o=Yn(),s=(0,Yt.default)({environment:x.default===null||x.default===void 0||(r=x.default._meta)===null||r===void 0?void 0:r.environment,name:x.default===null||x.default===void 0?void 0:x.default.CLIENT_ID,supergraphURL:x.default===null||x.default===void 0||(a=x.default.API)===null||a===void 0||(n=a.BASE_URLS)===null||n===void 0?void 0:n.SUPERGRAPH,version:x.default===null||x.default===void 0||(i=x.default._meta)===null||i===void 0?void 0:i.version}),m.prev=6,m.next=9,navigator.serviceWorker.register("/home/firebase-messaging-sw.js");case 9:return h=m.sent,m.next=12,(0,ut.getToken)(o,{vapidKey:x.default.WEB_PUSH_NOTIFICATIONS.FIREBASE.VAPID_KEY,serviceWorkerRegistration:h});case 12:return b=m.sent,Oe.info("Received browser token",b),m.next=16,s.mutate({mutation:Cc,variables:{browserToken:b}});case 16:return l=m.sent,f=l.data,u=f==null||(c=f.saveBrowserToken)===null||c===void 0?void 0:c.success,u||Oe.error("Failed to save browser token"),Kn(!0),m.abrupt("return",u);case 24:if(m.prev=24,m.t0=m.catch(6),m.t0.code!=="messaging/permission-blocked"){m.next=29;break}return Oe.info("User did not grant notification permission",m.t0),m.abrupt("return",!1);case 29:return Oe.error("Unhandled error",JSON.stringify(m.t0,null,4)),m.abrupt("return",!1);case 31:case"end":return m.stop()}},t,null,[[6,24]])}));return function(){return e.apply(this,arguments)}}();j.unregisterWebPush=function(){var e=(0,Me.default)((0,X.default)().mark(function t(){var r;return(0,X.default)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Xn();case 2:if(n.sent){n.next=4;break}return n.abrupt("return",!1);case 4:return r=Yn(),n.prev=5,Kn(!1),n.next=9,(0,ut.deleteToken)(r);case 9:return n.abrupt("return",n.sent);case 12:return n.prev=12,n.t0=n.catch(5),Oe.error("Failed to delete browser token",n.t0),n.abrupt("return",!1);case 16:case"end":return n.stop()}},t,null,[[5,12]])}));return function(){return e.apply(this,arguments)}}();j.reregisterWebPush=function(){var e=(0,Me.default)((0,X.default)().mark(function t(){var r,a,n,i,o,s,c,h,b,l,f,u,I,m;return(0,X.default)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return h=(0,Yt.default)({environment:x.default===null||x.default===void 0||(r=x.default._meta)===null||r===void 0?void 0:r.environment,name:x.default===null||x.default===void 0?void 0:x.default.CLIENT_ID,supergraphURL:x.default===null||x.default===void 0||(a=x.default.API)===null||a===void 0||(n=a.BASE_URLS)===null||n===void 0?void 0:n.SUPERGRAPH,version:x.default===null||x.default===void 0||(i=x.default._meta)===null||i===void 0?void 0:i.version}),O.next=3,h.query({query:qn});case 3:if(b=O.sent,l=b.data,f=l==null||(o=l.rawIdentity)===null||o===void 0||(s=o.data)===null||s===void 0||(c=s.identity)===null||c===void 0?void 0:c.id,!(!f||!(0,Gn.isLocalStorageSupported)())){O.next=8;break}return O.abrupt("return",!1);case 8:if(u=zn(f),I=window.localStorage.getItem(u),m=I==="false",!(m&&Nc()==="granted")){O.next=13;break}return O.abrupt("return",Dc());case 13:return O.abrupt("return",!1);case 14:case"end":return O.stop()}},t)}));return function(){return e.apply(this,arguments)}}();(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"checkPermission",{enumerable:!0,get:function(){return t.checkPermission}}),Object.defineProperty(e,"registerWebPush",{enumerable:!0,get:function(){return t.registerWebPush}}),Object.defineProperty(e,"reregisterWebPush",{enumerable:!0,get:function(){return t.reregisterWebPush}}),Object.defineProperty(e,"supportsWebPush",{enumerable:!0,get:function(){return t.supportsWebPush}}),Object.defineProperty(e,"unregisterWebPush",{enumerable:!0,get:function(){return t.unregisterWebPush}});var t=j})(zr);var kc=zr,ku=kc;const Cr="SHOW_REG_SUCCESS_STATUS",Nr="SHOW_REG_INBOX_SUCCESS_STATUS",Dr="SHOW_REG_ERROR_STATUS",Fe="HIDE_REG_STATUS",Et={REQUIRES_PASSWORD:"requires_password",USER_MUST_SET_PASSWORD:"user_must_set_password",PROVIDER_ID_CONFLICT:"provider_id_conflict",POPUP_CLOSED_BY_USER:"popup_closed_by_user",OTHER:"other"},Ru=[Et.OTHER,Et.USER_MUST_SET_PASSWORD,Et.PROVIDER_ID_CONFLICT],Rc={BRANDED_INVESTING_CONTEXTUAL_IGNORABLE_MODAL:"branded_investing_contextual_ignorable_modal",CONTEXTUAL_IGNORABLE_MODAL:"contextual_ignorable_modal",IGNORABLE_MODAL:"ignorable_modal",RETIREMENT_CONTEXTUAL_IGNORABLE_MODAL:"branded_retirement_contextual_ignorable_modal",RIGHT_MOVE_CONTEXTUAL_IGNORABLE_MODAL:"right_move_contextual_ignorable_modal",SMART_MORTGAGES_CONTEXTUAL_IGNORABLE_MODAL:"smart_mortgages_contextual_ignorable_modal",REDIRECT_TO_MY_TAXES_CONTEXTUAL_IGNORABLE_MODAL:"redirect_to_my_taxes_contextual_ignorable_modal",INSIGHTS_CONTEXTUAL_IGNORABLE_MODAL:"insights_contextual_ignorable_modal",ACCOUNT_CONTEXTUAL_IGNORABLE_MODAL:"account_contextual_ignorable_modal"},Pu=({initialDelay:e,subsequentDelay:t}={initialDelay:100,subsequentDelay:300})=>{const r=Ba(null);return[(i,o)=>{const s=o?t:e;clearTimeout(r.current),r.current=setTimeout(()=>{i(),r.current=null},s)},()=>{clearTimeout(r.current)}]},Pc=1024,Lc=768,Mc=750,Bc=396,Lu="--nav-height",Mu=["interstitial-client"],Bu=["Small Business"],$u=[],ju=[],Fu=["/a/insurance/best-home-insurance","/a/insurance/best-homeowners-insurance","/a/insurance/car-insurance","/a/insurance/car-insurance-m","/a/insurance/compare-car-insurance-c-1","/a/insurance/life-insurance","/article/insurance/allstate-geico-progressive-state-farm-comparison","/article/insurance/auto-insurance-reviews","/article/insurance/auto/liability-car-insurance","/article/insurance/auto/ways-to-get-cheapest-car-insurance","/article/insurance/best-car-insurance-companies","/article/insurance/best-car-insurance-in-texas","/article/insurance/best-cheap-car-insurance","/article/insurance/bundling-home-and-auto-insurance","/article/insurance/car-for-license-road-test","/article/insurance/car-insurance-d","/article/insurance/car-insurance-d-1-go-c-a","/article/insurance/car-insurance-d-1-go-c-a-sw","/article/insurance/car-insurance-discounts","/article/insurance/car-insurance-dui","/article/insurance/car-insurance-m-c-a","/article/insurance/car-insurance-m-c-a-sw","/article/insurance/car-insurance-rates-age-gender","/article/insurance/car-insurance-young-drivers","/article/insurance/cheap-full-coverage-insurance","/article/insurance/cheapest-car-insurance","/article/insurance/cheapest-car-insurance-in-alabama-al","/article/insurance/cheapest-car-insurance-in-arizona-az","/article/insurance/cheapest-car-insurance-in-colorado-co","/article/insurance/cheapest-car-insurance-in-florida-fl","/article/insurance/cheapest-car-insurance-in-georgia-ga","/article/insurance/cheapest-car-insurance-in-illinois-il","/article/insurance/cheapest-car-insurance-in-iowa-ia","/article/insurance/cheapest-car-insurance-in-maryland-md","/article/insurance/cheapest-car-insurance-in-massachusetts-ma","/article/insurance/cheapest-car-insurance-in-michigan-mi","/article/insurance/cheapest-car-insurance-in-missouri-mo","/article/insurance/cheapest-car-insurance-in-new-jersey-nj","/article/insurance/cheapest-car-insurance-in-new-york-ny","/article/insurance/cheapest-car-insurance-in-north-carolina-nc","/article/insurance/cheapest-car-insurance-in-ohio-oh","/article/insurance/cheapest-car-insurance-in-pennsylvania-pa","/article/insurance/cheapest-car-insurance-in-texas-tx","/article/insurance/cheapest-car-insurance-in-virginia-va","/article/insurance/cheapest-car-insurance-teenagers","/article/insurance/full-coverage-insurance","/article/insurance/how-much-is-car-insurance","/article/insurance/how-to-buy-car-insurance","/article/insurance/insurance-brokers","/article/insurance/insurance-calculators","/article/insurance/largest-auto-insurance-companies","/article/insurance/minimum-car-insurance-requirements","/article/insurance/non-owner-car-insurance-where-to-buy-and-what-it-covers","/article/insurance/rental-car-insurance","/article/insurance/salvage-title","/article/insurance/save-money-car-insurance","/article/insurance/seniors-auto-insurance","/article/insurance/tesla-insurance","/best/insurance/car-insurance-companies","/blog/insurance/find-homeowners-insurance/","/home-insurance/match","/home-insurance/match/results","/home/nerdwallet-plus/onboarding","/home/nerdwallet-plus/onboarding-insurance","/home/nerdwallet-plus/onboarding-401k","/home/nerdwallet-plus/onboarding-banking","/home/nerdwallet-plus/onboarding-cc","/home/nerdwallet-plus/onboarding-id-theft","/home/register","/home/signin","/home/signout","/home/unsubscribe","/insurance/auto/ca/los-angeles","/insurance/auto/ca/san-diego","/insurance/auto/fl/tampa","/insurance/auto/il/chicago","/insurance/auto/nv/las-vegas","/insurance/auto/ny/new-york-city","/insurance/auto/ok/oklahoma-city","/insurance/auto/tx/houston","/insurance/auto/tx/san-antonio","/insurance/match","/insurance/match/results","/l/auto-insurance-1","/l/auto-insurance-2","/l/auto-insurance-3","/l/auto-insurance-4","/l/auto-insurance-5","/l/auto-insurance-6","/l/banking-best-cd-rates-cross-sell-savings-fa","/l/banking-best-cd-rates-cross-sell-savings-fa-3","/l/banking-best-cd-rates-cross-sell-savings-fa-4","/l/investing-best-robo-cs-fa","/m/banking/standout-money-market-accounts","/m/banking/standout-money-market-accounts-2","/m/banking/standout-online-checking-accounts-2","/m/banking/standout-online-checking-accounts-2","/m/banking/standout-online-checking-accounts-cs","/m/banking/standout-online-savings-accounts-2","/m/banking/standout-online-savings-accounts-4","/m/banking/standout-online-savings-accounts-5","/m/banking/standout-online-savings-accounts-6","/m/banking/standout-online-savings-accounts-7","/m/banking/standout-online-savings-accounts-8","/m/banking/standout-online-savings-accounts-9","/m/credit-cards-you-should-not-ignore-if-you-have-excellent-credit","/m/credit-cards/excellent-airline-credit-cards","/m/credit-cards/excellent-balance-transfer-credit-cards-2","/m/credit-cards/excellent-cash-back-credit-cards","/m/credit-cards/excellent-cash-back-credit-cards-2","/m/credit-cards/excellent-credit-card-bonuses","/m/credit-cards/excellent-credit-cards","/m/credit-cards/excellent-credit-cards-2","/m/credit-cards/excellent-credit-cards-d1","/m/credit-cards/excellent-credit-cards-m1","/m/credit-cards/excellent-low-interest-credit-cards","/m/credit-cards/excellent-low-interest-credit-cards-2","/m/credit-cards/excellent-no-annual-fee-credit-cards","/m/credit-cards/excellent-rewards-credit-cards","/m/credit-cards/excellent-rewards-credit-cards-2","/m/credit-cards/excellent-secured-credit-cards","/m/credit-cards/excellent-student-credit-cards","/m/credit-cards/excellent-travel-credit-cards","/m/credit-cards/excellent-travel-credit-cards-2","/m/credit-cards/make-all-the-right-money-moves","/m/credit-cards/make-all-the-right-money-moves-2","/m/credit-cards/pay-0-intro-interest","/m/credit-cards/pay-0-intro-interest-2","/m/excellent-no-foreign-transaction-fee-credit-cards","/m/insurance/compare-excellent-car-insurance-rates-for-you-b","/m/insurance/compare-excellent-car-insurance-rates-for-you-m","/m/insurance/life/compare-life-insurance","/m/investing/how-to-buy-stocks-cs","/m/investing/standout-online-brokers-cs-2","/m/mortgages/best-mortgage-lenders","/m/mortgages/best-mortgage-lenders-2","/m/mortgages/compare-mortgage-lenders-2","/m/mortgages/compare-top-mortgage-lenders","/m/mortgages/compare-top-mortgage-lenders-2","/m/mortgages/compare-top-mortgage-lenders-3","/m/mortgages/compare-top-mortgage-lenders-4","/m/mortgages/compare-top-mortgage-lenders-5","/m/mortgages/compare-top-mortgage-lenders-pre-qual_pre-approval-desktop-2","/m/mortgages/compare-top-mortgage-lenders-pre-qual_pre-approval-mobile-2","/m/mortgages/compare-top-mortgage-lenders-rate_purchase-desktop-2","/m/mortgages/compare-top-mortgage-lenders-rate_purchase-mobile-2","/m/mortgages/compare-top-mortgage-lenders-rate_refinance-desktop-2?loanPurpose=refinance","/m/mortgages/heloc-lenders-2","/mortgages/best-mortgage-lenders","/mortgages/home-loans","/mortgages/mortgage-prequalification","/reviews/insurance/aarp-the-hartford","/reviews/insurance/allstate","/reviews/insurance/american-family","/reviews/insurance/american-national","/reviews/insurance/auto-owners","/reviews/insurance/direct-auto","/reviews/insurance/elephant","/reviews/insurance/erie","/reviews/insurance/geico","/reviews/insurance/good2go","/reviews/insurance/liberty-mutual","/reviews/insurance/njm","/reviews/insurance/progressive","/reviews/insurance/root","/reviews/insurance/safeco","/reviews/insurance/state-farm","/reviews/insurance/travelers","/reviews/insurance/usaa"],Uu=["/m/banking/standout-online-savings-accounts-4"],Vu=["/article/insurance/car-insurance-m-c-b","/article/insurance/car-insurance-quotes-m","/article/insurance/pay-per-mile-car-insurance","/article/insurance/types-of-life-insurance","/m/banking/standout-online-savings-accounts-6","/reviews/insurance/amica","/reviews/insurance/farmers","/reviews/insurance/metromile","/reviews/insurance/the-general"],Wu=["Credit Cards"],Hu=["roundup","article"],Gu={"check-inbox":{desktopTextTitle:"Check your inbox",desktopText:"Instructions for connecting your credit score are coming your way."},success:{desktopText:"Success! Thanks for signing up.",mobileTextTitle:"Success!",mobileText:"Thanks for signing up.",ctaText:"Dismiss"}},qu={provider_id_conflict:{primaryCtaText:"Sign in"},user_must_set_password:{title:"Please sign in like you usually do.",content:`Looks like you have an account, but usually sign in a different way. Please sign in like you usually do.

Then you can go to your NerdWallet settings and create a password — which you'll need if you want to sign in differently later.`,primaryCtaText:"Try again"},other:{title:"Something went wrong. Please try registering another way or contact our support team for help.",primaryCtaText:"Try again",secondaryCtaText:"Contact us"}},zu="https://support.nerdwallet.com/hc/en-us/requests/new/",Ku=["/article/taxes/4-good-ways-put-tax-refund-work","/article/taxes/use-your-tax-return-to-map-out-a-better-financial-future","/article/taxes/its-time-to-fix-social-securitys-tax-burden","/article/taxes/moving-to-escape-taxes-make-sure-its-a-clean-break","/article/finance/tax-traps-that-side-hustlers-should-avoid","/article/taxes/tax-filing","/article/taxes/irs-data","/article/taxes/tax-deductions-tax-breaks","/article/taxes/10-tax-forms-to-know-before-file","/article/taxes/unemployment-taxable","/article/taxes/jackson-hewitt-tax-debt-resolution-services-review","/article/taxes/community-tax-review","/article/taxes/irs-scaled-back-functions-coronavirus-how-you-can-adjust","/article/taxes/optima-tax-relief-review","/article/taxes/estate-tax","/article/taxes/avoid-irs-scams","/article/taxes/fsa-hsa-taxes","/article/taxes/qualify-child-child-care-tax-credit","/article/taxes/tax-relief-back-taxes","/article/taxes/amended-tax-return","/article/taxes/11-big-tax-mistakes-avoid","/article/taxes/state-income-tax-rates","/article/taxes/irs-phone-number-list-customer-service","/article/taxes/can-you-take-earned-income-tax-credit","/article/taxes/selling-home-capital-gains-tax","/article/taxes/gift-tax-rate","/article/taxes/1099-misc-form","/article/taxes/tax-lien","/article/taxes/tax-levy","/article/taxes/get-irs-transcript-tax-transcript","/article/taxes/reasons-irs-audit","/article/taxes/how-to-set-up-irs-payment-plan","/article/loans/personal-loans/tax-refund-loans-give-cash-now-to-early-filers","/article/taxes/foreign-tax-credit-taxes-foreign-income","/article/taxes/tax-deadline-tax-day-taxes-due","/article/taxes/smart-ways-to-spend-your-tax-return","/article/taxes/innocent-spouse-relief","/article/taxes/investment-taxes-basics-investors","/article/loans/student-loans/education-tax-credits","/article/taxes/itemized-deductions-standard-deduction","/article/taxes/what-is-w-2-form","/article/taxes/tax-planning","/article/taxes/alternative-minimum-tax-amt","/article/taxes/claim-tax-dependent-rules-qualify","/article/taxes/sales-tax-holiday-back-to-school-shopping","/article/taxes/donor-advised-funds","/article/taxes/federal-income-tax-brackets","/article/taxes/capital-gains-tax-rates","/article/taxes/california-state-tax","/article/taxes/vat-value-added-tax","/article/taxes/property-tax","/article/taxes/irs-free-file-tax-preparation-help","/article/investing/how-much-to-contribute-to-401k","/article/taxes/taxes-on-stocks","/article/taxes/standard-deduction","/article/taxes/self-employment-tax","/article/taxes/inheritance-tax","/article/taxes/tax-deductible-donations-charity","/article/taxes/401k-taxes","/article/taxes/adjusted-gross-income-agi","/article/taxes/form-1040","/article/taxes/property-tax-deduction","/article/taxes/dividend-tax-rate","/article/taxes/schedule-c-definition","/article/taxes/havent-received-w2-take-steps","/article/taxes/tips-save-taxes","/article/taxes/medical-expense-tax-deduction","/article/taxes/sales-tax-deduction","/article/taxes/pay-taxes-game-show-winnings","/article/taxes/what-are-tax-exemptions-and-how-do-they-work","/article/taxes/tax-credit-vs-tax-deduction","/article/taxes/do-i-need-to-file-a-tax-return","/article/taxes/tax-changes","/article/taxes/how-to-find-best-tax-preparer-near","/article/taxes/irs-extends-tax-filing-deadline-to-july-15","/article/taxes/tax-prep-checklist","/article/taxes/schedule-a","/article/taxes/can-you-take-the-savers-credit","/article/taxes/how-to-get-tax-extension-online","/article/taxes/1099-int-form","/article/taxes/dont-miss-tax-extension-deadline","/article/taxes/what-tax-credits-can-i-qualify-for","/article/taxes/taxes-on-mutual-funds","/article/taxes/tax-deductions-credits-in-retirement","/article/taxes/tax-evasion-vs-tax-avoidance","/article/taxes/homeowner-tax-tips","/article/taxes/tax-loss-harvesting","/article/taxes/pay-irs-options","/article/taxes/penalty-for-failure-to-file-taxes","/article/taxes/tax-refund-late-irs-owe-interest","/article/taxes/tax-breaks-for-parents-of-functional-needs-kids","/article/taxes/havent-filed-tax-return-lately-you-can-still-get-refund","/article/taxes/are-tips-taxable","/article/taxes/fastest-tax-refund","/article/taxes/form-1099-div","/article/taxes/6-late-filing-tax-mistakes-need-avoid","/article/taxes/tax-free-income-nontaxable-income","/article/taxes/tax-breaks-caring-for-elderly-parents","/article/taxes/how-long-to-keep-tax-records","/article/taxes/best-time-file-tax-return","/article/taxes/wealth-tax","/article/taxes/tax-refund-stolen","/article/taxes/medical-expenses-marijuana","/article/taxes/cant-pay-income-taxes","/article/taxes/how-irs-knows-if-you-cheat-on-taxes","/article/taxes/irs-penalty-first-time-abatement","/article/taxes/missing-tax-documents","/article/taxes/file-taxes-jointly-separately-return","/article/taxes/withdrawing-from-529-plan-college","/article/taxes/what-happens-if-you-dont-pay-your-taxes-by-deadline","/article/taxes/tax-deadline-postponed-90-days-coronavirus","/article/taxes/filing-taxes-after-divorce","/article/taxes/big-refund-give-yourself-a-raise","/article/taxes/youre-filing-tax-return-late","/article/taxes/need-a-tax-extension-you-might-already-have-one","/article/taxes/harry-meghan-royal-family-welcome-bundle-tax-hassles","/article/taxes/tips-to-cut-cost-of-having-taxes-done","/article/taxes/take-the-headache-out-of-itemizing-your-tax-return","/article/taxes/can-you-get-a-passport-if-you-owe-taxes","/article/taxes/rental-owners-extra-tax-break","/article/taxes/millennials-fear-filing-taxes","/article/taxes/bad-day-tax-break","/article/taxes/tax-breaks-new-college-graduates","/article/taxes/split-tax-refund","/article/taxes/find-good-tax-preparer","/article/taxes/head-of-household-status","/article/taxes/tax-preparer-mistake-on-your-return","/article/taxes/dont-trust-spouse-at-tax-time","/article/taxes/what-to-do-if-irs-breaks-rules","/article/taxes/how-to-choose-tax-filing-status","/article/investing/roth-ira-taxes","/article/taxes/want-a-raise-in-2021-you-may-not-even-need-to-ask-for-it","/article/taxes/irs-offer-in-compromise-basics-and-who-qualifies","/article/taxes/turbotax-review","/article/taxes/hr-block-review","/article/taxes/taxact-review","/article/taxes/taxslayer-review","/article/taxes/track-my-refund","/article/taxes/taxact-vs-turbotax","/article/taxes/hr-block-vs-turbotax","/article/taxes/best-tax-software","/article/taxes/new-york-state-tax","/article/taxes/5-ways-to-trim-your-tax-prep-costs-this-year","/article/taxes/ip-pin","/article/taxes/3-ways-to-get-socially-distanced-tax-prep-this-year","/article/credit-cards/unwelcome-tax-surprises-may-await-those-with-debt","/article/taxes/5-sneaky-things-covid-19-might-do-to-your-tax-bill","/article/taxes/options-pay-tax-bill","/article/taxes/tax-attorney","/article/taxes/income-taxes/tax-refund-prepaid-debit-card","/article/taxes/americans-dont-know-much-about-taxes-or-that-they-might-get-them-done-for-free","/article/taxes/americans-missing-out-on-free-tax-software-dont-know-basic-irs-facts","/article/taxes/taxes-in-retirement","/article/taxes/virginia-state-tax","/article/taxes/arizona-state-income-tax-rates","/article/taxes/cant-pay-tax-bill","/article/taxes/withholding-tax","/article/taxes/rental-property-tax-deductions","/article/taxes/529-tax-deduction-k-12-school","/article/taxes/why-we-no-longer-fear-april-15","/article/taxes/states-with-no-income-tax","/article/taxes/irs-id-me-facial-recognition-scan","/article/taxes/2021-tax-surprises","/article/taxes/energy-tax-credits","/article/taxes/data-taxpayers-freefile","/article/taxes/bonus-tax-rate-how-are-bonuses-taxed","/article/taxes/gas-taxes","/article/taxes/ev-tax-credit-electric-vehicle-tax-credit","/article/investing/social-security/do-self-employed-workers-pay-social-security-taxes","/article/taxes/income-taxes/inflation-impact-taxes","/article/taxes/year-end-tax-strategies","/article/taxes/mortgage-interest-rate-deduction","/article/taxes/nerdwallet-2023-tax-report","/article/taxes/wheres-my-amended-tax-return","/article/taxes/data-taxpayers-freefile-2023","/article/taxes/w-9","/article/taxes/nerdwallet-tax-report-2022","/article/taxes/child-and-dependent-care-tax-credit","/article/taxes/section-179-deduction","/article/taxes/dont-miss-these-3-tax-credits-when-you-file-this-year","/article/taxes/sports-betting-taxes","/article/taxes/venmo-taxes","/article/taxes/are-gofundme-donations-taxable-tax-tips-for-crowdfunding","/article/taxes/solar-tax-credit","/article/taxes/zelle-taxes","/article/taxes/georgia-state-tax","/article/taxes/salt-tax-deduction","/article/taxes/ohio-state-tax","/article/taxes/florida-taxes","/article/taxes/illinois-tax","/article/taxes/colorado-state-income-tax-rates","/article/taxes/back-taxes-past-due-returns","/article/taxes/free-tax-filing-how-to-file-taxes-for-free","/article/taxes/form-4868-tax-extension-form","/article/taxes/massachusetts-state-tax-rates","/article/taxes/cpa-near-me","/article/taxes/certified-public-accountant-what-is-a-cpa","/article/taxes/lottery-tax-calculator","/article/taxes/1099-b-form","/taxes/tax-calculator","/api/compass/dev","/article/taxes/test-taxes-article"],$c="SET_GLOBAL_NAV_STATE",jc="SET_PRIVATE_GLOBAL_NAV_STATE",Xu="WINDOW_RESIZE",Z=e=>[$c,jc].indexOf(e.type)!==-1,Fc=()=>{const[e,t]=lr(0),[r,a]=lr(0),n=()=>{typeof window>"u"||(t(window.innerWidth),a(window.innerHeight))},i=Wa.debounce(n,100);return It(()=>{n()},[]),It(()=>{if(!(typeof window>"u"))return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),{width:e,height:r}},Uc=1280,Yu=()=>{const{width:e}=Fc();return typeof window>"u"?{isTinyMobile:!1,isMobileLegacyOrSmaller:!1,isMobileOrSmaller:!1,isTabletOrSmaller:!1,isNavNarrow:!1}:{isTinyMobile:e<Bc,isMobileLegacyOrSmaller:e<Mc,isMobileOrSmaller:e<Lc,isTabletOrSmaller:e<Pc,isNavNarrow:e<=Uc-1}},Y={CREDIT_SCORE:"credit_score",LESS_GOOGLING:"less_googling",MONEY_GAME:"money_game",FINANCIAL_CLARITY:"financial_clarity",PONDER_NEXT_MOVE:"ponder_next_move",MONEY_INSIGHTS:"money_insights",COPY_CHANGE:"copy_change",G1T:"google_one_tap",NEW_INSIGHTS:"new_insights",KNOW_YOUR_CASH_FLOW:"know_your_cash_flow",INTRO_TO_HOMEBUYING:"intro_to_homebuying",MAKE_RIGHT_MOVE:"make_right_move",RETIREMENT_PLANNING:"retirement_planning",SMART_HOME_BUYING:"smart_home_buying",PERSONALIZED_INSIGHTS:"personalized_insights",ALL_IN_ONE_PLACE_ACCOUNT:"all_in_one_place_account"},H={v1:"ignorable_modal_v1",v2:"ignorable_modal_v2",v3:"ignorable_modal_v3",v4:"ignorable_modal_v4",entity_names:{display:"ignorable_modal",x_button:"close_button",download_now_button:"download_now_button",auth_buttons:"auth_button",success:"success_modal",error:"error_modal",email_signin:"email_signin",email_register:"email_register"},additional_attributes:{target_flow:"no_security_question",cta_mode:"modal",cta_label:"continue_with",cta_format:"button",cta_format_link:"link",auth_type:"register",element_type:"modal"}},Ju={section_name:H.v1,cohort:Y.MONEY_GAME,entity_names:H.entity_names,additional_attributes:H.additional_attributes,segmentTrackingAttributes:{driverLocation:H.v1,driverSubLocation:Y.MONEY_GAME}},Qu={section_name:H.v2,cohort:Y.CREDIT_SCORE,entity_names:H.entity_names,additional_attributes:H.additional_attributes,segmentTrackingAttributes:{driverLocation:H.v2,driverSubLocation:Y.CREDIT_SCORE}},Vc={section_name:H.v3,cohort:Y.PONDER_NEXT_MOVE,entity_names:H.entity_names,additional_attributes:H.additional_attributes,segmentTrackingAttributes:{driverLocation:H.v3,driverSubLocation:Y.PONDER_NEXT_MOVE}},Zu={section_name:"google_one_tap_modal",cohort:Y.G1T,entity_names:{display:"google_one_tap",x_button:"close_button",login:"login_attempt",failed_render:"failed_render",success:"login_success",error:"login_error",eoru_tu_funnel:"eoru_tu_activation_modal"},segmentTrackingAttributes:{driverLocation:"google_one_tap_modal",driverSubLocation:Y.G1T,driverElement:"button"},additional_attributes:{element_type:"modal"}},Te={v1:"global_nav_reg_cta_v1",entity_names:{signin:"signin_button",signin_link:"signin_link",register:"register_button",display:"reg_cta_container",indicator:"notification_indicator",mynw_button:"mynw_button",x_button:"close_button",navigate_away:"navigate_away",auth_buttons:"auth_button",success:"success_modal",error:"error_modal"},additional_attributes:{cta_mode:"modal",cta_format:"button",cta_format_link:"link",auth_type:"register"}},el={section_name:Te.v1,cohort:Y.NEW_INSIGHTS,driver_location:Te.v1,entity_names:{registration_cta:"lets_do_this_button",...Te.entity_names},additional_attributes:{target_flow:"onboarding-generic",cta_label:"lets_do_this",...Te.additional_attributes},segmentTrackingAttributes:{driverLocation:Te.v1,driverSubLocation:Y.NEW_INSIGHTS}},Wc={brandedInvestingContextualIgnorableModal:{id:"reg-1846-branded-contextual-ign-val-prop-investing-urls",variants:{CONTROL:{id:"control",regFlow:Rc.BRANDED_INVESTING_CONTEXTUAL_IGNORABLE_MODAL,analyticsBase:Vc}},includeExcludeConfig:{verticalsToInclude:["Investing"]}}},tl=[Wc.brandedInvestingContextualIgnorableModal],kr=[],Jt=ze("fetch-compass-props"),Hc=Mr`
  ${Ya}
`,Gc=Mr`
  query BulkFetchExperimentDecisions(
    $testNames: [String!]!
    $userAttributes: JSON!
  ) {
    experimentDecisions(
      testNames: $testNames
      userAttributes: $userAttributes
    ) {
      ...ExperimentDecisionQueryFields
      __typename
    }
  }
  fragment ExperimentDecisionQueryFields on ExperimentDecision {
    experimentName
    assignedVariantName
    modelExecutionIds
    __typename
  }
`,qc=async()=>{const e=ze("fetchIdentity",Jt),t=await Br();try{e.info("fetchIdentity start");const{data:r,error:a}=await $r.instrumented("fetchIdentity",{},()=>t.query({query:Hc}));if(a)throw a;return e.info("fetchIdentity success"),r?.globalIdentityProfile}catch(r){return e.info("fetchIdentity failed",r),null}},zc=async e=>{const t=ze("fetchExperimentsLogger",Jt);if(kr.length<=0)return t.info(`
      Experiment names are empty.
      You can add them by adding to EXPERIMENT_IDS_TO_FETCH in the experiments.ts file.
    `),null;const r=await Br(),a={vertical:$e(e?.pageTaxonomy,"vertical"),topic:$e(e?.pageTaxonomy,"topic"),content_type:$e(e?.pageTaxonomy,"contentType")};try{t.info("fetchExperiments start");const{data:n,error:i}=await $r.instrumented("fetchExperiments",{},()=>r.query({query:Gc,variables:{testNames:kr,userAttributes:a}}));if(i)throw i;return t.info("fetchExperiments success"),n}catch(n){return t.error("fetchExperiments failed",n),null}},rl=async e=>{if(!Xa("id_token"))return{};const t=ze("fetchAsyncPropsClient",Jt);try{const a=(await Promise.allSettled([qc(),zc(e)])).map(o=>o.status==="fulfilled"?o.value:{}),[n,i]=a;return{identity:n,experiments:i}}catch(r){return t.error("failed fetching async props",r),{}}};function U(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Rr=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),St=function(){return Math.random().toString(36).substring(7).split("").join(".")},qe={INIT:"@@redux/INIT"+St(),REPLACE:"@@redux/REPLACE"+St(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+St()}};function Kc(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Jn(e,t,r){var a;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(U(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(U(1));return r(Jn)(e,t)}if(typeof e!="function")throw new Error(U(2));var n=e,i=t,o=[],s=o,c=!1;function h(){s===o&&(s=o.slice())}function b(){if(c)throw new Error(U(3));return i}function l(m){if(typeof m!="function")throw new Error(U(4));if(c)throw new Error(U(5));var R=!0;return h(),s.push(m),function(){if(R){if(c)throw new Error(U(6));R=!1,h();var F=s.indexOf(m);s.splice(F,1),o=null}}}function f(m){if(!Kc(m))throw new Error(U(7));if(typeof m.type>"u")throw new Error(U(8));if(c)throw new Error(U(9));try{c=!0,i=n(i,m)}finally{c=!1}for(var R=o=s,O=0;O<R.length;O++){var F=R[O];F()}return m}function u(m){if(typeof m!="function")throw new Error(U(10));n=m,f({type:qe.REPLACE})}function I(){var m,R=l;return m={subscribe:function(F){if(typeof F!="object"||F===null)throw new Error(U(11));function ae(){F.next&&F.next(b())}ae();var fe=R(ae);return{unsubscribe:fe}}},m[Rr]=function(){return this},m}return f({type:qe.INIT}),a={dispatch:f,subscribe:l,getState:b,replaceReducer:u},a[Rr]=I,a}var Xc=Jn;function Yc(e){Object.keys(e).forEach(function(t){var r=e[t],a=r(void 0,{type:qe.INIT});if(typeof a>"u")throw new Error(U(12));if(typeof r(void 0,{type:qe.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(U(13))})}function Jc(e){for(var t=Object.keys(e),r={},a=0;a<t.length;a++){var n=t[a];typeof e[n]=="function"&&(r[n]=e[n])}var i=Object.keys(r),o;try{Yc(r)}catch(s){o=s}return function(c,h){if(c===void 0&&(c={}),o)throw o;for(var b=!1,l={},f=0;f<i.length;f++){var u=i[f],I=r[u],m=c[u],R=I(m,h);if(typeof R>"u")throw h&&h.type,new Error(U(14));l[u]=R,b=b||R!==m}return b=b||i.length!==Object.keys(c).length,b?l:c}}function Qc(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(a){return a}:t.length===1?t[0]:t.reduce(function(a,n){return function(){return a(n.apply(void 0,arguments))}})}const Zc={firstName:"",isLoggedIn:!1,pageVertical:"",pageTaxonomy:[],clientID:"",originatingUrl:"",windowSize:{width:0,height:0},activeRegStatusNotification:{status:Fe},experiments:[],segmentTrackingAttributes:{driverPageName:"",deployableName:Ue?._meta?.deployable,deployableVersion:Ue?._meta?.version,driverPageViewId:"",driverContentId:"",driverContentSource:"",driverFlowName:""}},eu=(e="",t)=>Z(t)&&t.firstName!==void 0?t.firstName:e,tu=(e=!1,t)=>Z(t)&&t.isLoggedIn!==void 0?t.isLoggedIn:e,ru=(e="",t)=>Z(t)&&t.pageVertical!==void 0?t.pageVertical:e,nu=(e=[],t)=>Z(t)&&t.pageTaxonomy!==void 0?t.pageTaxonomy:e,au=(e="",t)=>Z(t)&&t.clientID!==void 0?t.clientID:e,iu=(e="",t)=>Z(t)&&t.originatingUrl!==void 0?t.originatingUrl:e,ou=(e={width:0,height:0},t)=>t.type==="WINDOW_RESIZE"?{width:t.width,height:t.height}:e,su=(e={status:Fe},t)=>{switch(t.type){case Cr:return{status:Cr};case Dr:return{status:Dr,reason:t.reason,analytics:t.analytics};case Fe:return{status:Fe};case Nr:return{status:Nr};default:return e}},cu=(e=[],t)=>Z(t)&&t.experiments!==void 0?t.experiments:e,uu=(e={driverPageName:"",deployableName:Ue?._meta?.deployable,deployableVersion:Ue?._meta?.version,driverPageViewId:"",driverContentId:"",driverContentSource:"",driverFlowName:""},t)=>Z(t)&&t.segmentTrackingAttributes!==void 0?{...e,...t.segmentTrackingAttributes}:e,lu=(e=null,t)=>Z(t)&&t.authParamsOverride!==void 0?{...e,...t.authParamsOverride}:e,du=Jc({firstName:eu,isLoggedIn:tu,pageVertical:ru,clientID:au,originatingUrl:iu,pageTaxonomy:nu,windowSize:ou,activeRegStatusNotification:su,experiments:cu,segmentTrackingAttributes:uu,authParamsOverride:lu}),fu=(e=Zc,t)=>du(e,t);var pu={BASE_URL:"/api/compass/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://www.nerdwallet.com",ASSETS_PREFIX:"https://www.nerdwallet.com/cdn/apps/prod/compass/prod/dist/client"};const hu=pu.TARGET_ENV==="dev"&&!0,vu=hu&&window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:Qc,gu=vu()(Xc),mu=e=>gu(fu,e),nl=(e,t,r,a,n)=>{const i={authParamsOverride:t,clientID:a,experiments:e?.experiments?.experimentDecisions||[],firstName:e?.identity?.firstName,isLoggedIn:!!e?.identity,originatingUrl:typeof window<"u"?window.location?.pathname:null,pageTaxonomy:r,pageVertical:$e(r,"vertical"),segmentTrackingAttributes:n};return mu(i)};export{zu as C,el as G,Fe as H,Qu as I,Mc as M,Du as P,Gu as R,Dr as S,Et as T,Uu as U,$u as V,Xu as W,Yu as a,Pu as b,Cr as c,Nr as d,qu as e,rl as f,nl as g,$c as h,Ru as i,Rc as j,Ku as k,tl as l,Ju as m,Wu as n,Hu as o,Vu as p,Zu as q,Fu as r,Mu as s,ju as t,Nu as u,Bu as v,ku as w,Lu as x,Ve as y,_i as z};
//# sourceMappingURL=getStore.700mJ7cl.js.map
