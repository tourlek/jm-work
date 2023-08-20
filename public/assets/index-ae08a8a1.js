(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ud(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ne={},Hs=[],tn=()=>{},wT=()=>!1,TT=/^on[^a-z]/,il=t=>TT.test(t),hd=t=>t.startsWith("onUpdate:"),Qe=Object.assign,dd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},AT=Object.prototype.hasOwnProperty,ge=(t,e)=>AT.call(t,e),Z=Array.isArray,Ws=t=>ol(t)==="[object Map]",A_=t=>ol(t)==="[object Set]",ae=t=>typeof t=="function",Xe=t=>typeof t=="string",fd=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",b_=t=>Fe(t)&&ae(t.then)&&ae(t.catch),R_=Object.prototype.toString,ol=t=>R_.call(t),bT=t=>ol(t).slice(8,-1),S_=t=>ol(t)==="[object Object]",pd=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rc=ud(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),al=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},RT=/-(\w)/g,An=al(t=>t.replace(RT,(e,n)=>n?n.toUpperCase():"")),ST=/\B([A-Z])/g,Ai=al(t=>t.replace(ST,"-$1").toLowerCase()),cl=al(t=>t.charAt(0).toUpperCase()+t.slice(1)),yu=al(t=>t?`on${cl(t)}`:""),Ao=(t,e)=>!Object.is(t,e),sc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Tc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ju=t=>{const e=parseFloat(t);return isNaN(e)?t:e},PT=t=>{const e=Xe(t)?Number(t):NaN;return isNaN(e)?t:e};let wp;const Xu=()=>wp||(wp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function md(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Xe(r)?kT(r):md(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Xe(t))return t;if(Fe(t))return t}}const CT=/;(?![^(]*\))/g,DT=/:([^]+)/,xT=/\/\*[^]*?\*\//g;function kT(t){const e={};return t.replace(xT,"").split(CT).forEach(n=>{if(n){const r=n.split(DT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ll(t){let e="";if(Xe(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=ll(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const VT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",NT=ud(VT);function P_(t){return!!t||t===""}const ZO=t=>Xe(t)?t:t==null?"":Z(t)||Fe(t)&&(t.toString===R_||!ae(t.toString))?JSON.stringify(t,C_,2):String(t),C_=(t,e)=>e&&e.__v_isRef?C_(t,e.value):Ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:A_(e)?{[`Set(${e.size})`]:[...e.values()]}:Fe(e)&&!Z(e)&&!S_(e)?String(e):e;let qt;class D_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function x_(t){return new D_(t)}function OT(t,e=qt){e&&e.active&&e.effects.push(t)}function k_(){return qt}function MT(t){qt&&qt.cleanups.push(t)}const gd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},V_=t=>(t.w&vr)>0,N_=t=>(t.n&vr)>0,LT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vr},FT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];V_(s)&&!N_(s)?s.delete(t):e[n++]=s,s.w&=~vr,s.n&=~vr}e.length=n}},Ac=new WeakMap;let Xi=0,vr=1;const Zu=30;let Xt;const os=Symbol(""),eh=Symbol("");class _d{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,OT(this,r)}run(){if(!this.active)return this.fn();let e=Xt,n=pr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,pr=!0,vr=1<<++Xi,Xi<=Zu?LT(this):Tp(this),this.fn()}finally{Xi<=Zu&&FT(this),vr=1<<--Xi,Xt=this.parent,pr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(Tp(this),this.onStop&&this.onStop(),this.active=!1)}}function Tp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pr=!0;const O_=[];function bi(){O_.push(pr),pr=!1}function Ri(){const t=O_.pop();pr=t===void 0?!0:t}function Ft(t,e,n){if(pr&&Xt){let r=Ac.get(t);r||Ac.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=gd()),M_(s)}}function M_(t,e){let n=!1;Xi<=Zu?N_(t)||(t.n|=vr,n=!V_(t)):n=!t.has(Xt),n&&(t.add(Xt),Xt.deps.push(t))}function Fn(t,e,n,r,s,i){const o=Ac.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?pd(n)&&a.push(o.get("length")):(a.push(o.get(os)),Ws(t)&&a.push(o.get(eh)));break;case"delete":Z(t)||(a.push(o.get(os)),Ws(t)&&a.push(o.get(eh)));break;case"set":Ws(t)&&a.push(o.get(os));break}if(a.length===1)a[0]&&th(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);th(gd(c))}}function th(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&Ap(r);for(const r of n)r.computed||Ap(r)}function Ap(t,e){(t!==Xt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function BT(t,e){var n;return(n=Ac.get(t))==null?void 0:n.get(e)}const UT=ud("__proto__,__v_isRef,__isVue"),L_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fd)),$T=yd(),qT=yd(!1,!0),jT=yd(!0),bp=zT();function zT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)Ft(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bi();const r=te(this)[e].apply(this,n);return Ri(),r}}),t}function KT(t){const e=te(this);return Ft(e,"has",t),e.hasOwnProperty(t)}function yd(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?a0:q_:e?$_:U_).get(r))return r;const o=Z(r);if(!t){if(o&&ge(bp,s))return Reflect.get(bp,s,i);if(s==="hasOwnProperty")return KT}const a=Reflect.get(r,s,i);return(fd(s)?L_.has(s):UT(s))||(t||Ft(r,"get",s),e)?a:He(a)?o&&pd(s)?a:a.value:Fe(a)?t?z_(a):an(a):a}}const GT=F_(),HT=F_(!0);function F_(t=!1){return function(n,r,s,i){let o=n[r];if(ri(o)&&He(o)&&!He(s))return!1;if(!t&&(!bc(s)&&!ri(s)&&(o=te(o),s=te(s)),!Z(n)&&He(o)&&!He(s)))return o.value=s,!0;const a=Z(n)&&pd(r)?Number(r)<n.length:ge(n,r),c=Reflect.set(n,r,s,i);return n===te(i)&&(a?Ao(s,o)&&Fn(n,"set",r,s):Fn(n,"add",r,s)),c}}function WT(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Fn(t,"delete",e,void 0),r}function QT(t,e){const n=Reflect.has(t,e);return(!fd(e)||!L_.has(e))&&Ft(t,"has",e),n}function YT(t){return Ft(t,"iterate",Z(t)?"length":os),Reflect.ownKeys(t)}const B_={get:$T,set:GT,deleteProperty:WT,has:QT,ownKeys:YT},JT={get:jT,set(t,e){return!0},deleteProperty(t,e){return!0}},XT=Qe({},B_,{get:qT,set:HT}),vd=t=>t,ul=t=>Reflect.getPrototypeOf(t);function La(t,e,n=!1,r=!1){t=t.__v_raw;const s=te(t),i=te(e);n||(e!==i&&Ft(s,"get",e),Ft(s,"get",i));const{has:o}=ul(s),a=r?vd:n?wd:bo;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Fa(t,e=!1){const n=this.__v_raw,r=te(n),s=te(t);return e||(t!==s&&Ft(r,"has",t),Ft(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ba(t,e=!1){return t=t.__v_raw,!e&&Ft(te(t),"iterate",os),Reflect.get(t,"size",t)}function Rp(t){t=te(t);const e=te(this);return ul(e).has.call(e,t)||(e.add(t),Fn(e,"add",t,t)),this}function Sp(t,e){e=te(e);const n=te(this),{has:r,get:s}=ul(n);let i=r.call(n,t);i||(t=te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ao(e,o)&&Fn(n,"set",t,e):Fn(n,"add",t,e),this}function Pp(t){const e=te(this),{has:n,get:r}=ul(e);let s=n.call(e,t);s||(t=te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Fn(e,"delete",t,void 0),i}function Cp(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Fn(t,"clear",void 0,void 0),n}function Ua(t,e){return function(r,s){const i=this,o=i.__v_raw,a=te(o),c=e?vd:t?wd:bo;return!t&&Ft(a,"iterate",os),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function $a(t,e,n){return function(...r){const s=this.__v_raw,i=te(s),o=Ws(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?vd:e?wd:bo;return!e&&Ft(i,"iterate",c?eh:os),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Yn(t){return function(...e){return t==="delete"?!1:this}}function ZT(){const t={get(i){return La(this,i)},get size(){return Ba(this)},has:Fa,add:Rp,set:Sp,delete:Pp,clear:Cp,forEach:Ua(!1,!1)},e={get(i){return La(this,i,!1,!0)},get size(){return Ba(this)},has:Fa,add:Rp,set:Sp,delete:Pp,clear:Cp,forEach:Ua(!1,!0)},n={get(i){return La(this,i,!0)},get size(){return Ba(this,!0)},has(i){return Fa.call(this,i,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:Ua(!0,!1)},r={get(i){return La(this,i,!0,!0)},get size(){return Ba(this,!0)},has(i){return Fa.call(this,i,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:Ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=$a(i,!1,!1),n[i]=$a(i,!0,!1),e[i]=$a(i,!1,!0),r[i]=$a(i,!0,!0)}),[t,n,e,r]}const[e0,t0,n0,r0]=ZT();function Id(t,e){const n=e?t?r0:n0:t?t0:e0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const s0={get:Id(!1,!1)},i0={get:Id(!1,!0)},o0={get:Id(!0,!1)},U_=new WeakMap,$_=new WeakMap,q_=new WeakMap,a0=new WeakMap;function c0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function l0(t){return t.__v_skip||!Object.isExtensible(t)?0:c0(bT(t))}function an(t){return ri(t)?t:Ed(t,!1,B_,s0,U_)}function j_(t){return Ed(t,!1,XT,i0,$_)}function z_(t){return Ed(t,!0,JT,o0,q_)}function Ed(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=l0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function mr(t){return ri(t)?mr(t.__v_raw):!!(t&&t.__v_isReactive)}function ri(t){return!!(t&&t.__v_isReadonly)}function bc(t){return!!(t&&t.__v_isShallow)}function K_(t){return mr(t)||ri(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function hl(t){return Tc(t,"__v_skip",!0),t}const bo=t=>Fe(t)?an(t):t,wd=t=>Fe(t)?z_(t):t;function G_(t){pr&&Xt&&(t=te(t),M_(t.dep||(t.dep=gd())))}function H_(t,e){t=te(t);const n=t.dep;n&&th(n)}function He(t){return!!(t&&t.__v_isRef===!0)}function Nt(t){return W_(t,!1)}function u0(t){return W_(t,!0)}function W_(t,e){return He(t)?t:new h0(t,e)}class h0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:bo(e)}get value(){return G_(this),this._value}set value(e){const n=this.__v_isShallow||bc(e)||ri(e);e=n?e:te(e),Ao(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:bo(e),H_(this))}}function as(t){return He(t)?t.value:t}const d0={get:(t,e,n)=>as(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Q_(t){return mr(t)?t:new Proxy(t,d0)}function f0(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=m0(t,n);return e}class p0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return BT(te(this._object),this._key)}}function m0(t,e,n){const r=t[e];return He(r)?r:new p0(t,e,n)}class g0{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _d(e,()=>{this._dirty||(this._dirty=!0,H_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=te(this);return G_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _0(t,e,n=!1){let r,s;const i=ae(t);return i?(r=t,s=tn):(r=t.get,s=t.set),new g0(r,s,i||!s,n)}function gr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){dl(i,e,n)}return s}function Wt(t,e,n,r){if(ae(t)){const i=gr(t,e,n,r);return i&&b_(i)&&i.catch(o=>{dl(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Wt(t[i],e,n,r));return s}function dl(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){gr(c,null,10,[t,o,a]);return}}y0(t,n,s,r)}function y0(t,e,n,r=!0){console.error(t)}let Ro=!1,nh=!1;const yt=[];let fn=0;const Qs=[];let kn=null,Gr=0;const Y_=Promise.resolve();let Td=null;function ia(t){const e=Td||Y_;return t?e.then(this?t.bind(this):t):e}function v0(t){let e=fn+1,n=yt.length;for(;e<n;){const r=e+n>>>1;So(yt[r])<t?e=r+1:n=r}return e}function Ad(t){(!yt.length||!yt.includes(t,Ro&&t.allowRecurse?fn+1:fn))&&(t.id==null?yt.push(t):yt.splice(v0(t.id),0,t),J_())}function J_(){!Ro&&!nh&&(nh=!0,Td=Y_.then(Z_))}function I0(t){const e=yt.indexOf(t);e>fn&&yt.splice(e,1)}function E0(t){Z(t)?Qs.push(...t):(!kn||!kn.includes(t,t.allowRecurse?Gr+1:Gr))&&Qs.push(t),J_()}function Dp(t,e=Ro?fn+1:0){for(;e<yt.length;e++){const n=yt[e];n&&n.pre&&(yt.splice(e,1),e--,n())}}function X_(t){if(Qs.length){const e=[...new Set(Qs)];if(Qs.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((n,r)=>So(n)-So(r)),Gr=0;Gr<kn.length;Gr++)kn[Gr]();kn=null,Gr=0}}const So=t=>t.id==null?1/0:t.id,w0=(t,e)=>{const n=So(t)-So(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Z_(t){nh=!1,Ro=!0,yt.sort(w0);const e=tn;try{for(fn=0;fn<yt.length;fn++){const n=yt[fn];n&&n.active!==!1&&gr(n,null,14)}}finally{fn=0,yt.length=0,X_(),Ro=!1,Td=null,(yt.length||Qs.length)&&Z_()}}function T0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ne;d&&(s=n.map(f=>Xe(f)?f.trim():f)),h&&(s=n.map(Ju))}let a,c=r[a=yu(e)]||r[a=yu(An(e))];!c&&i&&(c=r[a=yu(Ai(e))]),c&&Wt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wt(l,t,6,s)}}function ey(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ae(t)){const c=l=>{const u=ey(l,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Fe(t)&&r.set(t,null),null):(Z(i)?i.forEach(c=>o[c]=null):Qe(o,i),Fe(t)&&r.set(t,o),o)}function fl(t,e){return!t||!il(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,Ai(e))||ge(t,e))}let st=null,ty=null;function Rc(t){const e=st;return st=t,ty=t&&t.type.__scopeId||null,e}function ic(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&jp(-1);const i=Rc(e);let o;try{o=t(...s)}finally{Rc(i),r._d&&jp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let E,A;const b=Rc(t);try{if(n.shapeFlag&4){const C=s||r;E=dn(u.call(C,C,h,i,f,d,g)),A=c}else{const C=e;E=dn(C.length>1?C(i,{attrs:c,slots:a,emit:l}):C(i,null)),A=e.props?c:A0(c)}}catch(C){uo.length=0,dl(C,t,1),E=le(Yt)}let x=E;if(A&&y!==!1){const C=Object.keys(A),{shapeFlag:B}=x;C.length&&B&7&&(o&&C.some(hd)&&(A=b0(A,o)),x=Bn(x,A))}return n.dirs&&(x=Bn(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),E=x,Rc(b),E}const A0=t=>{let e;for(const n in t)(n==="class"||n==="style"||il(n))&&((e||(e={}))[n]=t[n]);return e},b0=(t,e)=>{const n={};for(const r in t)(!hd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function R0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xp(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!fl(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?xp(r,o,l):!0:!!o;return!1}function xp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!fl(n,i))return!0}return!1}function S0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const P0=t=>t.__isSuspense;function C0(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):E0(t)}function oc(t,e){return bd(t,null,e)}const qa={};function ao(t,e,n){return bd(t,e,n)}function bd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ne){var a;const c=k_()===((a=Ze)==null?void 0:a.scope)?Ze:null;let l,u=!1,h=!1;if(He(t)?(l=()=>t.value,u=bc(t)):mr(t)?(l=()=>t,r=!0):Z(t)?(h=!0,u=t.some(C=>mr(C)||bc(C)),l=()=>t.map(C=>{if(He(C))return C.value;if(mr(C))return es(C);if(ae(C))return gr(C,c,2)})):ae(t)?e?l=()=>gr(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Wt(t,c,3,[f])}:l=tn,e&&r){const C=l;l=()=>es(C())}let d,f=C=>{d=b.onStop=()=>{gr(C,c,4)}},g;if(ko)if(f=tn,e?n&&Wt(e,c,3,[l(),h?[]:void 0,f]):l(),s==="sync"){const C=wA();g=C.__watcherHandles||(C.__watcherHandles=[])}else return tn;let y=h?new Array(t.length).fill(qa):qa;const E=()=>{if(b.active)if(e){const C=b.run();(r||u||(h?C.some((B,K)=>Ao(B,y[K])):Ao(C,y)))&&(d&&d(),Wt(e,c,3,[C,y===qa?void 0:h&&y[0]===qa?[]:y,f]),y=C)}else b.run()};E.allowRecurse=!!e;let A;s==="sync"?A=E:s==="post"?A=()=>xt(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),A=()=>Ad(E));const b=new _d(l,A);e?n?E():y=b.run():s==="post"?xt(b.run.bind(b),c&&c.suspense):b.run();const x=()=>{b.stop(),c&&c.scope&&dd(c.scope.effects,b)};return g&&g.push(x),x}function D0(t,e,n){const r=this.proxy,s=Xe(t)?t.includes(".")?ny(r,t):()=>r[t]:t.bind(r,r);let i;ae(e)?i=e:(i=e.handler,n=e);const o=Ze;ii(this);const a=bd(s,i.bind(r),n);return o?ii(o):cs(),a}function ny(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function es(t,e){if(!Fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))es(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)es(t[n],e);else if(A_(t)||Ws(t))t.forEach(n=>{es(n,e)});else if(S_(t))for(const n in t)es(t[n],e);return t}function eM(t,e){const n=st;if(n===null)return t;const r=Il(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ne]=e[i];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&es(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ur(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(bi(),Wt(c,n,8,[t.el,a,t,e]),Ri())}}function ry(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gl(()=>{t.isMounted=!0}),cy(()=>{t.isUnmounting=!0}),t}const Kt=[Function,Array],sy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},x0={name:"BaseTransition",props:sy,setup(t,{slots:e}){const n=Ey(),r=ry();let s;return()=>{const i=e.default&&Rd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Yt){o=y;break}}const a=te(t),{mode:c}=a;if(r.isLeaving)return Iu(o);const l=kp(o);if(!l)return Iu(o);const u=Po(l,a,r,n);Co(l,u);const h=n.subTree,d=h&&kp(h);let f=!1;const{getTransitionKey:g}=l.type;if(g){const y=g();s===void 0?s=y:y!==s&&(s=y,f=!0)}if(d&&d.type!==Yt&&(!Hr(l,d)||f)){const y=Po(d,a,r,n);if(Co(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Iu(o);c==="in-out"&&l.type!==Yt&&(y.delayLeave=(E,A,b)=>{const x=iy(r,d);x[String(d.key)]=d,E._leaveCb=()=>{A(),E._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},k0=x0;function iy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Po(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:y,onAppear:E,onAfterAppear:A,onAppearCancelled:b}=e,x=String(t.key),C=iy(n,t),B=(U,H)=>{U&&Wt(U,r,9,H)},K=(U,H)=>{const re=H[1];B(U,H),Z(U)?U.every(De=>De.length<=1)&&re():U.length<=1&&re()},ce={mode:i,persisted:o,beforeEnter(U){let H=a;if(!n.isMounted)if(s)H=y||a;else return;U._leaveCb&&U._leaveCb(!0);const re=C[x];re&&Hr(t,re)&&re.el._leaveCb&&re.el._leaveCb(),B(H,[U])},enter(U){let H=c,re=l,De=u;if(!n.isMounted)if(s)H=E||c,re=A||l,De=b||u;else return;let z=!1;const ye=U._enterCb=ut=>{z||(z=!0,ut?B(De,[U]):B(re,[U]),ce.delayedLeave&&ce.delayedLeave(),U._enterCb=void 0)};H?K(H,[U,ye]):ye()},leave(U,H){const re=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return H();B(h,[U]);let De=!1;const z=U._leaveCb=ye=>{De||(De=!0,H(),ye?B(g,[U]):B(f,[U]),U._leaveCb=void 0,C[re]===t&&delete C[re])};C[re]=t,d?K(d,[U,z]):z()},clone(U){return Po(U,e,n,r)}};return ce}function Iu(t){if(pl(t))return t=Bn(t),t.children=null,t}function kp(t){return pl(t)?t.children?t.children[0]:void 0:t}function Co(t,e){t.shapeFlag&6&&t.component?Co(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Vt?(o.patchFlag&128&&s++,r=r.concat(Rd(o.children,e,a))):(e||o.type!==Yt)&&r.push(a!=null?Bn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Si(t,e){return ae(t)?(()=>Qe({name:t.name},e,{setup:t}))():t}const co=t=>!!t.type.__asyncLoader,pl=t=>t.type.__isKeepAlive;function V0(t,e){oy(t,"a",e)}function N0(t,e){oy(t,"da",e)}function oy(t,e,n=Ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ml(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pl(s.parent.vnode)&&O0(r,e,n,s),s=s.parent}}function O0(t,e,n,r){const s=ml(e,t,r,!0);_l(()=>{dd(r[e],s)},n)}function ml(t,e,n=Ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bi(),ii(n);const a=Wt(e,n,t,o);return cs(),Ri(),a});return r?s.unshift(i):s.push(i),i}}const zn=t=>(e,n=Ze)=>(!ko||t==="sp")&&ml(t,(...r)=>e(...r),n),M0=zn("bm"),gl=zn("m"),L0=zn("bu"),ay=zn("u"),cy=zn("bum"),_l=zn("um"),F0=zn("sp"),B0=zn("rtg"),U0=zn("rtc");function $0(t,e=Ze){ml("ec",t,e)}const ly="components";function Vp(t,e){return j0(ly,t,!0,e)||t}const q0=Symbol.for("v-ndc");function j0(t,e,n=!0,r=!1){const s=st||Ze;if(s){const i=s.type;if(t===ly){const a=vA(i,!1);if(a&&(a===e||a===An(e)||a===cl(An(e))))return i}const o=Np(s[t]||i[t],e)||Np(s.appContext[t],e);return!o&&r?i:o}}function Np(t,e){return t&&(t[e]||t[An(e)]||t[cl(An(e))])}function tM(t,e,n,r){let s;const i=n&&n[r];if(Z(t)||Xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function nM(t,e,n={},r,s){if(st.isCE||st.parent&&co(st.parent)&&st.parent.isCE)return e!=="default"&&(n.name=e),le("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),$t();const o=i&&uy(i(n)),a=Cd(Vt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function uy(t){return t.some(e=>si(e)?!(e.type===Yt||e.type===Vt&&!uy(e.children)):!0)?t:null}const rh=t=>t?wy(t)?Il(t)||t.proxy:rh(t.parent):null,lo=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rh(t.parent),$root:t=>rh(t.root),$emit:t=>t.emit,$options:t=>Sd(t),$forceUpdate:t=>t.f||(t.f=()=>Ad(t.update)),$nextTick:t=>t.n||(t.n=ia.bind(t.proxy)),$watch:t=>D0.bind(t)}),Eu=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ge(t,e),z0={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Eu(r,e))return o[e]=1,r[e];if(s!==Ne&&ge(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ge(l,e))return o[e]=3,i[e];if(n!==Ne&&ge(n,e))return o[e]=4,n[e];sh&&(o[e]=0)}}const u=lo[e];let h,d;if(u)return e==="$attrs"&&Ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&ge(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Eu(s,e)?(s[e]=n,!0):r!==Ne&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ne&&ge(t,o)||Eu(e,o)||(a=i[0])&&ge(a,o)||ge(r,o)||ge(lo,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Op(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let sh=!0;function K0(t){const e=Sd(t),n=t.proxy,r=t.ctx;sh=!1,e.beforeCreate&&Mp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:E,beforeDestroy:A,beforeUnmount:b,destroyed:x,unmounted:C,render:B,renderTracked:K,renderTriggered:ce,errorCaptured:U,serverPrefetch:H,expose:re,inheritAttrs:De,components:z,directives:ye,filters:ut}=e;if(l&&G0(l,r,null),o)for(const xe in o){const Ee=o[xe];ae(Ee)&&(r[xe]=Ee.bind(n))}if(s){const xe=s.call(n,n);Fe(xe)&&(t.data=an(xe))}if(sh=!0,i)for(const xe in i){const Ee=i[xe],Cn=ae(Ee)?Ee.bind(n,n):ae(Ee.get)?Ee.get.bind(n,n):tn,Qn=!ae(Ee)&&ae(Ee.set)?Ee.set.bind(n):tn,cn=Ie({get:Cn,set:Qn});Object.defineProperty(r,xe,{enumerable:!0,configurable:!0,get:()=>cn.value,set:Dt=>cn.value=Dt})}if(a)for(const xe in a)hy(a[xe],r,n,xe);if(c){const xe=ae(c)?c.call(n):c;Reflect.ownKeys(xe).forEach(Ee=>{ac(Ee,xe[Ee])})}u&&Mp(u,t,"c");function de(xe,Ee){Z(Ee)?Ee.forEach(Cn=>xe(Cn.bind(n))):Ee&&xe(Ee.bind(n))}if(de(M0,h),de(gl,d),de(L0,f),de(ay,g),de(V0,y),de(N0,E),de($0,U),de(U0,K),de(B0,ce),de(cy,b),de(_l,C),de(F0,H),Z(re))if(re.length){const xe=t.exposed||(t.exposed={});re.forEach(Ee=>{Object.defineProperty(xe,Ee,{get:()=>n[Ee],set:Cn=>n[Ee]=Cn})})}else t.exposed||(t.exposed={});B&&t.render===tn&&(t.render=B),De!=null&&(t.inheritAttrs=De),z&&(t.components=z),ye&&(t.directives=ye)}function G0(t,e,n=tn){Z(t)&&(t=ih(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=Qt(s.from||r,s.default,!0):i=Qt(s.from||r):i=Qt(s),He(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Mp(t,e,n){Wt(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hy(t,e,n,r){const s=r.includes(".")?ny(n,r):()=>n[r];if(Xe(t)){const i=e[t];ae(i)&&ao(s,i)}else if(ae(t))ao(s,t.bind(n));else if(Fe(t))if(Z(t))t.forEach(i=>hy(i,e,n,r));else{const i=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(i)&&ao(s,i,t)}}function Sd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Sc(c,l,o,!0)),Sc(c,e,o)),Fe(e)&&i.set(e,c),c}function Sc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Sc(t,i,n,!0),s&&s.forEach(o=>Sc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=H0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const H0={data:Lp,props:Fp,emits:Fp,methods:Zi,computed:Zi,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Zi,directives:Zi,watch:Q0,provide:Lp,inject:W0};function Lp(t,e){return e?t?function(){return Qe(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function W0(t,e){return Zi(ih(t),ih(e))}function ih(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zi(t,e){return t?Qe(Object.create(null),t,e):e}function Fp(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:Qe(Object.create(null),Op(t),Op(e??{})):e}function Q0(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function dy(){return{app:null,config:{isNativeTag:wT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Y0=0;function J0(t,e){return function(r,s=null){ae(r)||(r=Qe({},r)),s!=null&&!Fe(s)&&(s=null);const i=dy(),o=new Set;let a=!1;const c=i.app={_uid:Y0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:TA,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ae(l.install)?(o.add(l),l.install(c,...u)):ae(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=le(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Il(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Do=c;try{return l()}finally{Do=null}}};return c}}let Do=null;function ac(t,e){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[t]=e}}function Qt(t,e,n=!1){const r=Ze||st;if(r||Do){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Do._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}function X0(){return!!(Ze||st||Do)}function Z0(t,e,n,r=!1){const s={},i={};Tc(i,vl,1),t.propsDefaults=Object.create(null),fy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:j_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function eA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=te(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(fl(t.emitsOptions,d))continue;const f=e[d];if(c)if(ge(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const g=An(d);s[g]=oh(c,a,g,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{fy(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=Ai(h))===h||!ge(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=oh(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ge(e,h))&&(delete i[h],l=!0)}l&&Fn(t,"set","$attrs")}function fy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(rc(c))continue;const l=e[c];let u;s&&ge(s,u=An(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:fl(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=te(n),l=a||Ne;for(let u=0;u<i.length;u++){const h=i[u];n[h]=oh(s,c,h,l[h],t,!ge(l,h))}}return o}function oh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ae(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(ii(s),r=l[n]=c.call(null,e),cs())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ai(n))&&(r=!0))}return r}function py(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ae(t)){const u=h=>{c=!0;const[d,f]=py(h,e,!0);Qe(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Fe(t)&&r.set(t,Hs),Hs;if(Z(i))for(let u=0;u<i.length;u++){const h=An(i[u]);Bp(h)&&(o[h]=Ne)}else if(i)for(const u in i){const h=An(u);if(Bp(h)){const d=i[u],f=o[h]=Z(d)||ae(d)?{type:d}:Qe({},d);if(f){const g=qp(Boolean,f.type),y=qp(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||ge(f,"default"))&&a.push(h)}}}const l=[o,a];return Fe(t)&&r.set(t,l),l}function Bp(t){return t[0]!=="$"}function Up(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $p(t,e){return Up(t)===Up(e)}function qp(t,e){return Z(e)?e.findIndex(n=>$p(n,t)):ae(e)&&$p(e,t)?0:-1}const my=t=>t[0]==="_"||t==="$stable",Pd=t=>Z(t)?t.map(dn):[dn(t)],tA=(t,e,n)=>{if(e._n)return e;const r=ic((...s)=>Pd(e(...s)),n);return r._c=!1,r},gy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(my(s))continue;const i=t[s];if(ae(i))e[s]=tA(s,i,r);else if(i!=null){const o=Pd(i);e[s]=()=>o}}},_y=(t,e)=>{const n=Pd(e);t.slots.default=()=>n},nA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),Tc(e,"_",n)):gy(e,t.slots={})}else t.slots={},e&&_y(t,e);Tc(t.slots,vl,1)},rA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,gy(e,s)),o=e}else e&&(_y(t,e),o={default:1});if(i)for(const a in s)!my(a)&&!(a in o)&&delete s[a]};function ah(t,e,n,r,s=!1){if(Z(t)){t.forEach((d,f)=>ah(d,e&&(Z(e)?e[f]:e),n,r,s));return}if(co(r)&&!s)return;const i=r.shapeFlag&4?Il(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Xe(l)?(u[l]=null,ge(h,l)&&(h[l]=null)):He(l)&&(l.value=null)),ae(c))gr(c,a,12,[o,u]);else{const d=Xe(c),f=He(c);if(d||f){const g=()=>{if(t.f){const y=d?ge(h,c)?h[c]:u[c]:c.value;s?Z(y)&&dd(y,i):Z(y)?y.includes(i)||y.push(i):d?(u[c]=[i],ge(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ge(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,xt(g,n)):g()}}}const xt=C0;function sA(t){return iA(t)}function iA(t,e){const n=Xu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=tn,insertStaticContent:g}=t,y=(p,m,_,w=null,R=null,D=null,$=!1,V=null,O=!!m.dynamicChildren)=>{if(p===m)return;p&&!Hr(p,m)&&(w=T(p),Dt(p,R,D,!0),p=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:k,ref:J,shapeFlag:G}=m;switch(k){case yl:E(p,m,_,w);break;case Yt:A(p,m,_,w);break;case wu:p==null&&b(m,_,w,$);break;case Vt:z(p,m,_,w,R,D,$,V,O);break;default:G&1?B(p,m,_,w,R,D,$,V,O):G&6?ye(p,m,_,w,R,D,$,V,O):(G&64||G&128)&&k.process(p,m,_,w,R,D,$,V,O,M)}J!=null&&R&&ah(J,p&&p.ref,D,m||p,!m)},E=(p,m,_,w)=>{if(p==null)r(m.el=a(m.children),_,w);else{const R=m.el=p.el;m.children!==p.children&&l(R,m.children)}},A=(p,m,_,w)=>{p==null?r(m.el=c(m.children||""),_,w):m.el=p.el},b=(p,m,_,w)=>{[p.el,p.anchor]=g(p.children,m,_,w,p.el,p.anchor)},x=({el:p,anchor:m},_,w)=>{let R;for(;p&&p!==m;)R=d(p),r(p,_,w),p=R;r(m,_,w)},C=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),s(p),p=_;s(m)},B=(p,m,_,w,R,D,$,V,O)=>{$=$||m.type==="svg",p==null?K(m,_,w,R,D,$,V,O):H(p,m,R,D,$,V,O)},K=(p,m,_,w,R,D,$,V)=>{let O,k;const{type:J,props:G,shapeFlag:X,transition:se,dirs:ue}=p;if(O=p.el=o(p.type,D,G&&G.is,G),X&8?u(O,p.children):X&16&&U(p.children,O,null,w,R,D&&J!=="foreignObject",$,V),ue&&Ur(p,null,w,"created"),ce(O,p,p.scopeId,$,w),G){for(const Ce in G)Ce!=="value"&&!rc(Ce)&&i(O,Ce,null,G[Ce],D,p.children,w,R,gt);"value"in G&&i(O,"value",null,G.value),(k=G.onVnodeBeforeMount)&&hn(k,w,p)}ue&&Ur(p,null,w,"beforeMount");const ke=(!R||R&&!R.pendingBranch)&&se&&!se.persisted;ke&&se.beforeEnter(O),r(O,m,_),((k=G&&G.onVnodeMounted)||ke||ue)&&xt(()=>{k&&hn(k,w,p),ke&&se.enter(O),ue&&Ur(p,null,w,"mounted")},R)},ce=(p,m,_,w,R)=>{if(_&&f(p,_),w)for(let D=0;D<w.length;D++)f(p,w[D]);if(R){let D=R.subTree;if(m===D){const $=R.vnode;ce(p,$,$.scopeId,$.slotScopeIds,R.parent)}}},U=(p,m,_,w,R,D,$,V,O=0)=>{for(let k=O;k<p.length;k++){const J=p[k]=V?ir(p[k]):dn(p[k]);y(null,J,m,_,w,R,D,$,V)}},H=(p,m,_,w,R,D,$)=>{const V=m.el=p.el;let{patchFlag:O,dynamicChildren:k,dirs:J}=m;O|=p.patchFlag&16;const G=p.props||Ne,X=m.props||Ne;let se;_&&$r(_,!1),(se=X.onVnodeBeforeUpdate)&&hn(se,_,m,p),J&&Ur(m,p,_,"beforeUpdate"),_&&$r(_,!0);const ue=R&&m.type!=="foreignObject";if(k?re(p.dynamicChildren,k,V,_,w,ue,D):$||Ee(p,m,V,null,_,w,ue,D,!1),O>0){if(O&16)De(V,m,G,X,_,w,R);else if(O&2&&G.class!==X.class&&i(V,"class",null,X.class,R),O&4&&i(V,"style",G.style,X.style,R),O&8){const ke=m.dynamicProps;for(let Ce=0;Ce<ke.length;Ce++){const Ye=ke[Ce],Jt=G[Ye],Vs=X[Ye];(Vs!==Jt||Ye==="value")&&i(V,Ye,Jt,Vs,R,p.children,_,w,gt)}}O&1&&p.children!==m.children&&u(V,m.children)}else!$&&k==null&&De(V,m,G,X,_,w,R);((se=X.onVnodeUpdated)||J)&&xt(()=>{se&&hn(se,_,m,p),J&&Ur(m,p,_,"updated")},w)},re=(p,m,_,w,R,D,$)=>{for(let V=0;V<m.length;V++){const O=p[V],k=m[V],J=O.el&&(O.type===Vt||!Hr(O,k)||O.shapeFlag&70)?h(O.el):_;y(O,k,J,null,w,R,D,$,!0)}},De=(p,m,_,w,R,D,$)=>{if(_!==w){if(_!==Ne)for(const V in _)!rc(V)&&!(V in w)&&i(p,V,_[V],null,$,m.children,R,D,gt);for(const V in w){if(rc(V))continue;const O=w[V],k=_[V];O!==k&&V!=="value"&&i(p,V,k,O,$,m.children,R,D,gt)}"value"in w&&i(p,"value",_.value,w.value)}},z=(p,m,_,w,R,D,$,V,O)=>{const k=m.el=p?p.el:a(""),J=m.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:X,slotScopeIds:se}=m;se&&(V=V?V.concat(se):se),p==null?(r(k,_,w),r(J,_,w),U(m.children,_,J,R,D,$,V,O)):G>0&&G&64&&X&&p.dynamicChildren?(re(p.dynamicChildren,X,_,R,D,$,V),(m.key!=null||R&&m===R.subTree)&&yy(p,m,!0)):Ee(p,m,_,J,R,D,$,V,O)},ye=(p,m,_,w,R,D,$,V,O)=>{m.slotScopeIds=V,p==null?m.shapeFlag&512?R.ctx.activate(m,_,w,$,O):ut(m,_,w,R,D,$,O):Et(p,m,O)},ut=(p,m,_,w,R,D,$)=>{const V=p.component=pA(p,w,R);if(pl(p)&&(V.ctx.renderer=M),mA(V),V.asyncDep){if(R&&R.registerDep(V,de),!p.el){const O=V.subTree=le(Yt);A(null,O,m,_)}return}de(V,p,m,_,R,D,$)},Et=(p,m,_)=>{const w=m.component=p.component;if(R0(p,m,_))if(w.asyncDep&&!w.asyncResolved){xe(w,m,_);return}else w.next=m,I0(w.update),w.update();else m.el=p.el,w.vnode=m},de=(p,m,_,w,R,D,$)=>{const V=()=>{if(p.isMounted){let{next:J,bu:G,u:X,parent:se,vnode:ue}=p,ke=J,Ce;$r(p,!1),J?(J.el=ue.el,xe(p,J,$)):J=ue,G&&sc(G),(Ce=J.props&&J.props.onVnodeBeforeUpdate)&&hn(Ce,se,J,ue),$r(p,!0);const Ye=vu(p),Jt=p.subTree;p.subTree=Ye,y(Jt,Ye,h(Jt.el),T(Jt),p,R,D),J.el=Ye.el,ke===null&&S0(p,Ye.el),X&&xt(X,R),(Ce=J.props&&J.props.onVnodeUpdated)&&xt(()=>hn(Ce,se,J,ue),R)}else{let J;const{el:G,props:X}=m,{bm:se,m:ue,parent:ke}=p,Ce=co(m);if($r(p,!1),se&&sc(se),!Ce&&(J=X&&X.onVnodeBeforeMount)&&hn(J,ke,m),$r(p,!0),G&&we){const Ye=()=>{p.subTree=vu(p),we(G,p.subTree,p,R,null)};Ce?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ye()):Ye()}else{const Ye=p.subTree=vu(p);y(null,Ye,_,w,p,R,D),m.el=Ye.el}if(ue&&xt(ue,R),!Ce&&(J=X&&X.onVnodeMounted)){const Ye=m;xt(()=>hn(J,ke,Ye),R)}(m.shapeFlag&256||ke&&co(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&xt(p.a,R),p.isMounted=!0,m=_=w=null}},O=p.effect=new _d(V,()=>Ad(k),p.scope),k=p.update=()=>O.run();k.id=p.uid,$r(p,!0),k()},xe=(p,m,_)=>{m.component=p;const w=p.vnode.props;p.vnode=m,p.next=null,eA(p,m.props,w,_),rA(p,m.children,_),bi(),Dp(),Ri()},Ee=(p,m,_,w,R,D,$,V,O=!1)=>{const k=p&&p.children,J=p?p.shapeFlag:0,G=m.children,{patchFlag:X,shapeFlag:se}=m;if(X>0){if(X&128){Qn(k,G,_,w,R,D,$,V,O);return}else if(X&256){Cn(k,G,_,w,R,D,$,V,O);return}}se&8?(J&16&&gt(k,R,D),G!==k&&u(_,G)):J&16?se&16?Qn(k,G,_,w,R,D,$,V,O):gt(k,R,D,!0):(J&8&&u(_,""),se&16&&U(G,_,w,R,D,$,V,O))},Cn=(p,m,_,w,R,D,$,V,O)=>{p=p||Hs,m=m||Hs;const k=p.length,J=m.length,G=Math.min(k,J);let X;for(X=0;X<G;X++){const se=m[X]=O?ir(m[X]):dn(m[X]);y(p[X],se,_,null,R,D,$,V,O)}k>J?gt(p,R,D,!0,!1,G):U(m,_,w,R,D,$,V,O,G)},Qn=(p,m,_,w,R,D,$,V,O)=>{let k=0;const J=m.length;let G=p.length-1,X=J-1;for(;k<=G&&k<=X;){const se=p[k],ue=m[k]=O?ir(m[k]):dn(m[k]);if(Hr(se,ue))y(se,ue,_,null,R,D,$,V,O);else break;k++}for(;k<=G&&k<=X;){const se=p[G],ue=m[X]=O?ir(m[X]):dn(m[X]);if(Hr(se,ue))y(se,ue,_,null,R,D,$,V,O);else break;G--,X--}if(k>G){if(k<=X){const se=X+1,ue=se<J?m[se].el:w;for(;k<=X;)y(null,m[k]=O?ir(m[k]):dn(m[k]),_,ue,R,D,$,V,O),k++}}else if(k>X)for(;k<=G;)Dt(p[k],R,D,!0),k++;else{const se=k,ue=k,ke=new Map;for(k=ue;k<=X;k++){const Ut=m[k]=O?ir(m[k]):dn(m[k]);Ut.key!=null&&ke.set(Ut.key,k)}let Ce,Ye=0;const Jt=X-ue+1;let Vs=!1,vp=0;const Bi=new Array(Jt);for(k=0;k<Jt;k++)Bi[k]=0;for(k=se;k<=G;k++){const Ut=p[k];if(Ye>=Jt){Dt(Ut,R,D,!0);continue}let ln;if(Ut.key!=null)ln=ke.get(Ut.key);else for(Ce=ue;Ce<=X;Ce++)if(Bi[Ce-ue]===0&&Hr(Ut,m[Ce])){ln=Ce;break}ln===void 0?Dt(Ut,R,D,!0):(Bi[ln-ue]=k+1,ln>=vp?vp=ln:Vs=!0,y(Ut,m[ln],_,null,R,D,$,V,O),Ye++)}const Ip=Vs?oA(Bi):Hs;for(Ce=Ip.length-1,k=Jt-1;k>=0;k--){const Ut=ue+k,ln=m[Ut],Ep=Ut+1<J?m[Ut+1].el:w;Bi[k]===0?y(null,ln,_,Ep,R,D,$,V,O):Vs&&(Ce<0||k!==Ip[Ce]?cn(ln,_,Ep,2):Ce--)}}},cn=(p,m,_,w,R=null)=>{const{el:D,type:$,transition:V,children:O,shapeFlag:k}=p;if(k&6){cn(p.component.subTree,m,_,w);return}if(k&128){p.suspense.move(m,_,w);return}if(k&64){$.move(p,m,_,M);return}if($===Vt){r(D,m,_);for(let G=0;G<O.length;G++)cn(O[G],m,_,w);r(p.anchor,m,_);return}if($===wu){x(p,m,_);return}if(w!==2&&k&1&&V)if(w===0)V.beforeEnter(D),r(D,m,_),xt(()=>V.enter(D),R);else{const{leave:G,delayLeave:X,afterLeave:se}=V,ue=()=>r(D,m,_),ke=()=>{G(D,()=>{ue(),se&&se()})};X?X(D,ue,ke):ke()}else r(D,m,_)},Dt=(p,m,_,w=!1,R=!1)=>{const{type:D,props:$,ref:V,children:O,dynamicChildren:k,shapeFlag:J,patchFlag:G,dirs:X}=p;if(V!=null&&ah(V,null,_,p,!0),J&256){m.ctx.deactivate(p);return}const se=J&1&&X,ue=!co(p);let ke;if(ue&&(ke=$&&$.onVnodeBeforeUnmount)&&hn(ke,m,p),J&6)Ma(p.component,_,w);else{if(J&128){p.suspense.unmount(_,w);return}se&&Ur(p,null,m,"beforeUnmount"),J&64?p.type.remove(p,m,_,R,M,w):k&&(D!==Vt||G>0&&G&64)?gt(k,m,_,!1,!0):(D===Vt&&G&384||!R&&J&16)&&gt(O,m,_),w&&xs(p)}(ue&&(ke=$&&$.onVnodeUnmounted)||se)&&xt(()=>{ke&&hn(ke,m,p),se&&Ur(p,null,m,"unmounted")},_)},xs=p=>{const{type:m,el:_,anchor:w,transition:R}=p;if(m===Vt){ks(_,w);return}if(m===wu){C(p);return}const D=()=>{s(_),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:$,delayLeave:V}=R,O=()=>$(_,D);V?V(p.el,D,O):O()}else D()},ks=(p,m)=>{let _;for(;p!==m;)_=d(p),s(p),p=_;s(m)},Ma=(p,m,_)=>{const{bum:w,scope:R,update:D,subTree:$,um:V}=p;w&&sc(w),R.stop(),D&&(D.active=!1,Dt($,p,m,_)),V&&xt(V,m),xt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},gt=(p,m,_,w=!1,R=!1,D=0)=>{for(let $=D;$<p.length;$++)Dt(p[$],m,_,w,R)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),j=(p,m,_)=>{p==null?m._vnode&&Dt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,_),Dp(),X_(),m._vnode=p},M={p:y,um:Dt,m:cn,r:xs,mt:ut,mc:U,pc:Ee,pbc:re,n:T,o:t};let Y,we;return e&&([Y,we]=e(M)),{render:j,hydrate:Y,createApp:J0(j,Y)}}function $r({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yy(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ir(s[i]),a.el=o.el),n||yy(o,a)),a.type===yl&&(a.el=o.el)}}function oA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const aA=t=>t.__isTeleport,Vt=Symbol.for("v-fgt"),yl=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),wu=Symbol.for("v-stc"),uo=[];let Zt=null;function $t(t=!1){uo.push(Zt=t?null:[])}function cA(){uo.pop(),Zt=uo[uo.length-1]||null}let xo=1;function jp(t){xo+=t}function vy(t){return t.dynamicChildren=xo>0?Zt||Hs:null,cA(),xo>0&&Zt&&Zt.push(t),t}function un(t,e,n,r,s,i){return vy(ve(t,e,n,r,s,i,!0))}function Cd(t,e,n,r,s){return vy(le(t,e,n,r,s,!0))}function si(t){return t?t.__v_isVNode===!0:!1}function Hr(t,e){return t.type===e.type&&t.key===e.key}const vl="__vInternal",Iy=({key:t})=>t??null,cc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||He(t)||ae(t)?{i:st,r:t,k:e,f:!!n}:t:null);function ve(t,e=null,n=null,r=0,s=null,i=t===Vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Iy(e),ref:e&&cc(e),scopeId:ty,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return a?(Dd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),xo>0&&!o&&Zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Zt.push(c),c}const le=lA;function lA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===q0)&&(t=Yt),si(t)){const a=Bn(t,e,!0);return n&&Dd(a,n),xo>0&&!i&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(t)]=a:Zt.push(a)),a.patchFlag|=-2,a}if(IA(t)&&(t=t.__vccOpts),e){e=uA(e);let{class:a,style:c}=e;a&&!Xe(a)&&(e.class=ll(a)),Fe(c)&&(K_(c)&&!Z(c)&&(c=Qe({},c)),e.style=md(c))}const o=Xe(t)?1:P0(t)?128:aA(t)?64:Fe(t)?4:ae(t)?2:0;return ve(t,e,n,r,s,o,i,!0)}function uA(t){return t?K_(t)||vl in t?Qe({},t):t:null}function Bn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Kn(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Iy(a),ref:e&&e.ref?n&&s?Z(s)?s.concat(cc(e)):[s,cc(e)]:cc(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bn(t.ssContent),ssFallback:t.ssFallback&&Bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function hA(t=" ",e=0){return le(yl,null,t,e)}function Ui(t="",e=!1){return e?($t(),Cd(Yt,null,t)):le(Yt,null,t)}function dn(t){return t==null||typeof t=="boolean"?le(Yt):Z(t)?le(Vt,null,t.slice()):typeof t=="object"?ir(t):le(yl,null,String(t))}function ir(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bn(t)}function Dd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Dd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(vl in e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[hA(e)]):n=8);t.children=e,t.shapeFlag|=n}function Kn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ll([e.class,r.class]));else if(s==="style")e.style=md([e.style,r.style]);else if(il(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function hn(t,e,n,r=null){Wt(t,e,7,[n,r])}const dA=dy();let fA=0;function pA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dA,i={uid:fA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new D_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:py(r,s),emitsOptions:ey(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=T0.bind(null,i),t.ce&&t.ce(i),i}let Ze=null;const Ey=()=>Ze||st;let xd,Ns,zp="__VUE_INSTANCE_SETTERS__";(Ns=Xu()[zp])||(Ns=Xu()[zp]=[]),Ns.push(t=>Ze=t),xd=t=>{Ns.length>1?Ns.forEach(e=>e(t)):Ns[0](t)};const ii=t=>{xd(t),t.scope.on()},cs=()=>{Ze&&Ze.scope.off(),xd(null)};function wy(t){return t.vnode.shapeFlag&4}let ko=!1;function mA(t,e=!1){ko=e;const{props:n,children:r}=t.vnode,s=wy(t);Z0(t,n,s,e),nA(t,r);const i=s?gA(t,e):void 0;return ko=!1,i}function gA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hl(new Proxy(t.ctx,z0));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?yA(t):null;ii(t),bi();const i=gr(r,t,0,[t.props,s]);if(Ri(),cs(),b_(i)){if(i.then(cs,cs),e)return i.then(o=>{Kp(t,o,e)}).catch(o=>{dl(o,t,0)});t.asyncDep=i}else Kp(t,i,e)}else Ty(t,e)}function Kp(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=Q_(e)),Ty(t,n)}let Gp;function Ty(t,e,n){const r=t.type;if(!t.render){if(!e&&Gp&&!r.render){const s=r.template||Sd(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Qe(Qe({isCustomElement:i,delimiters:a},o),c);r.render=Gp(s,l)}}t.render=r.render||tn}ii(t),bi(),K0(t),Ri(),cs()}function _A(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ft(t,"get","$attrs"),e[n]}}))}function yA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return _A(t)},slots:t.slots,emit:t.emit,expose:e}}function Il(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Q_(hl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lo)return lo[n](t)},has(e,n){return n in e||n in lo}}))}function vA(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function IA(t){return ae(t)&&"__vccOpts"in t}const Ie=(t,e)=>_0(t,e,ko);function ts(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!Z(e)?si(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&si(n)&&(n=[n]),le(t,e,n))}const EA=Symbol.for("v-scx"),wA=()=>Qt(EA),TA="3.3.4",AA="http://www.w3.org/2000/svg",Wr=typeof document<"u"?document:null,Hp=Wr&&Wr.createElement("template"),bA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Wr.createElementNS(AA,t):Wr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wr.createTextNode(t),createComment:t=>Wr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hp.innerHTML=r?`<svg>${t}</svg>`:t;const a=Hp.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function RA(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function SA(t,e,n){const r=t.style,s=Xe(n);if(n&&!s){if(e&&!Xe(e))for(const i in e)n[i]==null&&ch(r,i,"");for(const i in n)ch(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Wp=/\s*!important$/;function ch(t,e,n){if(Z(n))n.forEach(r=>ch(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=PA(t,e);Wp.test(n)?t.setProperty(Ai(r),n.replace(Wp,""),"important"):t[r]=n}}const Qp=["Webkit","Moz","ms"],Tu={};function PA(t,e){const n=Tu[e];if(n)return n;let r=An(e);if(r!=="filter"&&r in t)return Tu[e]=r;r=cl(r);for(let s=0;s<Qp.length;s++){const i=Qp[s]+r;if(i in t)return Tu[e]=i}return e}const Yp="http://www.w3.org/1999/xlink";function CA(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yp,e.slice(6,e.length)):t.setAttributeNS(Yp,e,n);else{const i=NT(e);n==null||i&&!P_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function DA(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=P_(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Us(t,e,n,r){t.addEventListener(e,n,r)}function xA(t,e,n,r){t.removeEventListener(e,n,r)}function kA(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=VA(e);if(r){const l=i[e]=MA(r,s);Us(t,a,l,c)}else o&&(xA(t,a,o,c),i[e]=void 0)}}const Jp=/(?:Once|Passive|Capture)$/;function VA(t){let e;if(Jp.test(t)){e={};let r;for(;r=t.match(Jp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ai(t.slice(2)),e]}let Au=0;const NA=Promise.resolve(),OA=()=>Au||(NA.then(()=>Au=0),Au=Date.now());function MA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Wt(LA(r,n.value),e,5,[r])};return n.value=t,n.attached=OA(),n}function LA(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xp=/^on[a-z]/,FA=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?RA(t,r,s):e==="style"?SA(t,n,r):il(e)?hd(e)||kA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BA(t,e,r,s))?DA(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),CA(t,e,r,s))};function BA(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Xp.test(e)&&ae(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xp.test(e)&&Xe(n)?!1:e in t}const Jn="transition",$i="animation",Ay=(t,{slots:e})=>ts(k0,Ry(t),e);Ay.displayName="Transition";const by={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},UA=Ay.props=Qe({},sy,by),qr=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Zp=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function Ry(t){const e={};for(const z in t)z in by||(e[z]=t[z]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=$A(s),y=g&&g[0],E=g&&g[1],{onBeforeEnter:A,onEnter:b,onEnterCancelled:x,onLeave:C,onLeaveCancelled:B,onBeforeAppear:K=A,onAppear:ce=b,onAppearCancelled:U=x}=e,H=(z,ye,ut)=>{rr(z,ye?u:a),rr(z,ye?l:o),ut&&ut()},re=(z,ye)=>{z._isLeaving=!1,rr(z,h),rr(z,f),rr(z,d),ye&&ye()},De=z=>(ye,ut)=>{const Et=z?ce:b,de=()=>H(ye,z,ut);qr(Et,[ye,de]),em(()=>{rr(ye,z?c:i),xn(ye,z?u:a),Zp(Et)||tm(ye,r,y,de)})};return Qe(e,{onBeforeEnter(z){qr(A,[z]),xn(z,i),xn(z,o)},onBeforeAppear(z){qr(K,[z]),xn(z,c),xn(z,l)},onEnter:De(!1),onAppear:De(!0),onLeave(z,ye){z._isLeaving=!0;const ut=()=>re(z,ye);xn(z,h),Py(),xn(z,d),em(()=>{z._isLeaving&&(rr(z,h),xn(z,f),Zp(C)||tm(z,r,E,ut))}),qr(C,[z,ut])},onEnterCancelled(z){H(z,!1),qr(x,[z])},onAppearCancelled(z){H(z,!0),qr(U,[z])},onLeaveCancelled(z){re(z),qr(B,[z])}})}function $A(t){if(t==null)return null;if(Fe(t))return[bu(t.enter),bu(t.leave)];{const e=bu(t);return[e,e]}}function bu(t){return PT(t)}function xn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function rr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function em(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qA=0;function tm(t,e,n,r){const s=t._endId=++qA,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Sy(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=f=>{f.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function Sy(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(`${Jn}Delay`),i=r(`${Jn}Duration`),o=nm(s,i),a=r(`${$i}Delay`),c=r(`${$i}Duration`),l=nm(a,c);let u=null,h=0,d=0;e===Jn?o>0&&(u=Jn,h=o,d=i.length):e===$i?l>0&&(u=$i,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Jn:$i:null,d=u?u===Jn?i.length:c.length:0);const f=u===Jn&&/\b(transform|all)(,|$)/.test(r(`${Jn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function nm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>rm(n)+rm(t[r])))}function rm(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Py(){return document.body.offsetHeight}const Cy=new WeakMap,Dy=new WeakMap,xy={name:"TransitionGroup",props:Qe({},UA,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ey(),r=ry();let s,i;return ay(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!HA(s[0].el,n.vnode.el,o))return;s.forEach(zA),s.forEach(KA);const a=s.filter(GA);Py(),a.forEach(c=>{const l=c.el,u=l.style;xn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,rr(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=te(t),a=Ry(o);let c=o.tag||Vt;s=i,i=e.default?Rd(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Co(u,Po(u,a,r,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];Co(u,Po(u,a,r,n)),Cy.set(u,u.el.getBoundingClientRect())}return le(c,null,i)}}},jA=t=>delete t.mode;xy.props;const rM=xy;function zA(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function KA(t){Dy.set(t,t.el.getBoundingClientRect())}function GA(t){const e=Cy.get(t),n=Dy.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function HA(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=Sy(r);return s.removeChild(r),i}const sm=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>sc(e,n):e};function WA(t){t.target.composing=!0}function im(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sM={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=sm(s);const i=r||s.props&&s.props.type==="number";Us(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ju(a)),t._assign(a)}),n&&Us(t,"change",()=>{t.value=t.value.trim()}),e||(Us(t,"compositionstart",WA),Us(t,"compositionend",im),Us(t,"change",im))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=sm(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ju(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},QA=["ctrl","shift","alt","meta"],YA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>QA.some(n=>t[`${n}Key`]&&!e.includes(n))},iM=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=YA[e[s]];if(i&&i(n,e))return}return t(n,...r)},oM={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):qi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),qi(t,!0),r.enter(t)):r.leave(t,()=>{qi(t,!1)}):qi(t,e))},beforeUnmount(t,{value:e}){qi(t,e)}};function qi(t,e){t.style.display=e?t._vod:"none"}const JA=Qe({patchProp:FA},bA);let om;function XA(){return om||(om=sA(JA))}const ky=(...t)=>{const e=XA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ZA(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ZA(t){return Xe(t)?document.querySelector(t):t}var eb=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Vy;const El=t=>Vy=t,Ny=Symbol();function lh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ho;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ho||(ho={}));function tb(){const t=x_(!0),e=t.run(()=>Nt({}));let n=[],r=[];const s=hl({install(i){El(s),s._a=i,i.provide(Ny,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!eb?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Oy=()=>{};function am(t,e,n,r=Oy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&k_()&&MT(s),s}function Os(t,...e){t.slice().forEach(n=>{n(...e)})}const nb=t=>t();function uh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];lh(s)&&lh(r)&&t.hasOwnProperty(n)&&!He(r)&&!mr(r)?t[n]=uh(s,r):t[n]=r}return t}const rb=Symbol();function sb(t){return!lh(t)||!t.hasOwnProperty(rb)}const{assign:sr}=Object;function ib(t){return!!(He(t)&&t.effect)}function ob(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=f0(n.state.value[t]);return sr(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=hl(Ie(()=>{El(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=My(t,l,e,n,r,!0),c}function My(t,e,n={},r,s,i){let o;const a=sr({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const g=r.state.value[t];!i&&!g&&(r.state.value[t]={}),Nt({});let y;function E(U){let H;l=u=!1,typeof U=="function"?(U(r.state.value[t]),H={type:ho.patchFunction,storeId:t,events:f}):(uh(r.state.value[t],U),H={type:ho.patchObject,payload:U,storeId:t,events:f});const re=y=Symbol();ia().then(()=>{y===re&&(l=!0)}),u=!0,Os(h,H,r.state.value[t])}const A=i?function(){const{state:H}=n,re=H?H():{};this.$patch(De=>{sr(De,re)})}:Oy;function b(){o.stop(),h=[],d=[],r._s.delete(t)}function x(U,H){return function(){El(r);const re=Array.from(arguments),De=[],z=[];function ye(de){De.push(de)}function ut(de){z.push(de)}Os(d,{args:re,name:U,store:B,after:ye,onError:ut});let Et;try{Et=H.apply(this&&this.$id===t?this:B,re)}catch(de){throw Os(z,de),de}return Et instanceof Promise?Et.then(de=>(Os(De,de),de)).catch(de=>(Os(z,de),Promise.reject(de))):(Os(De,Et),Et)}}const C={_p:r,$id:t,$onAction:am.bind(null,d),$patch:E,$reset:A,$subscribe(U,H={}){const re=am(h,U,H.detached,()=>De()),De=o.run(()=>ao(()=>r.state.value[t],z=>{(H.flush==="sync"?u:l)&&U({storeId:t,type:ho.direct,events:f},z)},sr({},c,H)));return re},$dispose:b},B=an(C);r._s.set(t,B);const K=r._a&&r._a.runWithContext||nb,ce=r._e.run(()=>(o=x_(),K(()=>o.run(e))));for(const U in ce){const H=ce[U];if(He(H)&&!ib(H)||mr(H))i||(g&&sb(H)&&(He(H)?H.value=g[U]:uh(H,g[U])),r.state.value[t][U]=H);else if(typeof H=="function"){const re=x(U,H);ce[U]=re,a.actions[U]=H}}return sr(B,ce),sr(te(B),ce),Object.defineProperty(B,"$state",{get:()=>r.state.value[t],set:U=>{E(H=>{sr(H,U)})}}),r._p.forEach(U=>{sr(B,o.run(()=>U({store:B,app:r._a,pinia:r,options:a})))}),g&&i&&n.hydrate&&n.hydrate(B.$state,g),l=!0,u=!0,B}function ab(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=X0();return a=a||(l?Qt(Ny,null):null),a&&El(a),a=Vy,a._s.has(r)||(i?My(r,e,s,a):ob(r,s,a)),a._s.get(r)}return o.$id=r,o}const cb="/assets/logo-3c503ec5.png";/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $s=typeof window<"u";function lb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function Ru(t,e){const n={};for(const r in e){const s=e[r];n[r]=nn(s)?s.map(t):t(s)}return n}const fo=()=>{},nn=Array.isArray,ub=/\/$/,hb=t=>t.replace(ub,"");function Su(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=mb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function db(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&oi(e.matched[r],n.matched[s])&&Ly(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function oi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ly(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pb(t[n],e[n]))return!1;return!0}function pb(t,e){return nn(t)?lm(t,e):nn(e)?lm(e,t):t===e}function lm(t,e){return nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Vo;(function(t){t.pop="pop",t.push="push"})(Vo||(Vo={}));var po;(function(t){t.back="back",t.forward="forward",t.unknown=""})(po||(po={}));function gb(t){if(!t)if($s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hb(t)}const _b=/^[^#]+#/;function yb(t,e){return t.replace(_b,"#")+e}function vb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ib(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function um(t,e){return(history.state?history.state.position-e:-1)+t}const hh=new Map;function Eb(t,e){hh.set(t,e)}function wb(t){const e=hh.get(t);return hh.delete(t),e}let Tb=()=>location.protocol+"//"+location.host;function Fy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),cm(c,"")}return cm(n,t)+r+s}function Ab(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=Fy(t,location),g=n.value,y=e.value;let E=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}E=y?d.position-y.position:0}else r(f);s.forEach(A=>{A(n.value,g,{delta:E,type:Vo.pop,direction:E?E>0?po.forward:po.back:po.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ae({},d.state,{scroll:wl()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function hm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wl():null}}function bb(t){const{history:e,location:n}=window,r={value:Fy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Tb()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ae({},e.state,hm(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Ae({},s.value,e.state,{forward:c,scroll:wl()});i(u.current,u,!0);const h=Ae({},hm(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Rb(t){t=gb(t);const e=bb(t),n=Ab(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:yb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Sb(t){return typeof t=="string"||t&&typeof t=="object"}function By(t){return typeof t=="string"||typeof t=="symbol"}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Uy=Symbol("");var dm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dm||(dm={}));function ai(t,e){return Ae(new Error,{type:t,[Uy]:!0},e)}function Dn(t,e){return t instanceof Error&&Uy in t&&(e==null||!!(t.type&e))}const fm="[^/]+?",Pb={sensitive:!1,strict:!1,start:!0,end:!0},Cb=/[.+*?^${}()[\]/\\]/g;function Db(t,e){const n=Ae({},Pb,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Cb,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:E,regexp:A}=d;i.push({name:g,repeatable:y,optional:E});const b=A||fm;if(b!==fm){f+=10;try{new RegExp(`(${b})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+C.message)}}let x=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(x=E&&l.length<2?`(?:/${x})`:"/"+x),E&&(x+="?"),s+=x,f+=20,E&&(f+=-8),y&&(f+=-20),b===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:E}=f,A=g in l?l[g]:"";if(nn(A)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=nn(A)?A.join("/"):A;if(!b)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function xb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function kb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pm(r))return 1;if(pm(s))return-1}return s.length-r.length}function pm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vb={type:0,value:""},Nb=/[a-zA-Z0-9_]/;function Ob(t){if(!t)return[[]];if(t==="/")return[[Vb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Nb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Mb(t,e,n){const r=Db(Ob(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Lb(t,e){const n=[],r=new Map;e=_m({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,g=Fb(u);g.aliasOf=d&&d.record;const y=_m(e,u),E=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of x)E.push(Ae({},g,{components:d?d.record.components:g.components,path:C,aliasOf:d?d.record:g}))}let A,b;for(const x of E){const{path:C}=x;if(h&&C[0]!=="/"){const B=h.record.path,K=B[B.length-1]==="/"?"":"/";x.path=h.record.path+(C&&K+C)}if(A=Mb(x,h,y),d?d.alias.push(A):(b=b||A,b!==A&&b.alias.push(A),f&&u.name&&!gm(A)&&o(u.name)),g.children){const B=g.children;for(let K=0;K<B.length;K++)i(B[K],A,d&&d.children[K])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return b?()=>{o(b)}:fo}function o(u){if(By(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&kb(u,n[h])>=0&&(u.record.path!==n[h].record.path||!$y(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gm(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ai(1,{location:u});y=d.record.name,f=Ae(mm(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&mm(u.params,d.keys.map(b=>b.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(b=>b.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw ai(1,{location:u,currentLocation:h});y=d.record.name,f=Ae({},h.params,u.params),g=d.stringify(f)}const E=[];let A=d;for(;A;)E.unshift(A.record),A=A.parent;return{name:y,path:g,params:f,matched:E,meta:Ub(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function mm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Fb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Bb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Bb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function gm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ub(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function _m(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $y(t,e){return e.children.some(n=>n===t||$y(t,n))}const qy=/#/g,$b=/&/g,qb=/\//g,jb=/=/g,zb=/\?/g,jy=/\+/g,Kb=/%5B/g,Gb=/%5D/g,zy=/%5E/g,Hb=/%60/g,Ky=/%7B/g,Wb=/%7C/g,Gy=/%7D/g,Qb=/%20/g;function kd(t){return encodeURI(""+t).replace(Wb,"|").replace(Kb,"[").replace(Gb,"]")}function Yb(t){return kd(t).replace(Ky,"{").replace(Gy,"}").replace(zy,"^")}function dh(t){return kd(t).replace(jy,"%2B").replace(Qb,"+").replace(qy,"%23").replace($b,"%26").replace(Hb,"`").replace(Ky,"{").replace(Gy,"}").replace(zy,"^")}function Jb(t){return dh(t).replace(jb,"%3D")}function Xb(t){return kd(t).replace(qy,"%23").replace(zb,"%3F")}function Zb(t){return t==null?"":Xb(t).replace(qb,"%2F")}function Pc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function eR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(jy," "),o=i.indexOf("="),a=Pc(o<0?i:i.slice(0,o)),c=o<0?null:Pc(i.slice(o+1));if(a in e){let l=e[a];nn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ym(t){let e="";for(let n in t){const r=t[n];if(n=Jb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(r)?r.map(i=>i&&dh(i)):[r&&dh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function tR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const nR=Symbol(""),vm=Symbol(""),Tl=Symbol(""),Vd=Symbol(""),fh=Symbol("");function ji(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function or(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ai(4,{from:n,to:e})):h instanceof Error?a(h):Sb(h)?a(ai(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Pu(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(rR(a)){const l=(a.__vccOpts||a)[e];l&&s.push(or(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=lb(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&or(d,n,r,i,o)()}))}}return s}function rR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Im(t){const e=Qt(Tl),n=Qt(Vd),r=Ie(()=>e.resolve(as(t.to))),s=Ie(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(oi.bind(null,u));if(d>-1)return d;const f=Em(c[l-2]);return l>1&&Em(u)===f&&h[h.length-1].path!==f?h.findIndex(oi.bind(null,c[l-2])):d}),i=Ie(()=>s.value>-1&&aR(n.params,r.value.params)),o=Ie(()=>s.value>-1&&s.value===n.matched.length-1&&Ly(n.params,r.value.params));function a(c={}){return oR(c)?e[as(t.replace)?"replace":"push"](as(t.to)).catch(fo):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const sR=Si({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Im,setup(t,{slots:e}){const n=an(Im(t)),{options:r}=Qt(Tl),s=Ie(()=>({[wm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ts("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),iR=sR;function oR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function aR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!nn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Em(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wm=(t,e,n)=>t??e??n,cR=Si({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Qt(fh),s=Ie(()=>t.route||r.value),i=Qt(vm,0),o=Ie(()=>{let l=as(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ie(()=>s.value.matched[o.value]);ac(vm,Ie(()=>o.value+1)),ac(nR,a),ac(fh,s);const c=Nt();return ao(()=>[c.value,a.value,t.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!oi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Tm(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,E=ts(d,Ae({},g,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Tm(n.default,{Component:E,route:l})||E}}});function Tm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lR=cR;function uR(t){const e=Lb(t.routes,t),n=t.parseQuery||eR,r=t.stringifyQuery||ym,s=t.history,i=ji(),o=ji(),a=ji(),c=u0(Xn);let l=Xn;$s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ru.bind(null,T=>""+T),h=Ru.bind(null,Zb),d=Ru.bind(null,Pc);function f(T,j){let M,Y;return By(T)?(M=e.getRecordMatcher(T),Y=j):Y=T,e.addRoute(Y,M)}function g(T){const j=e.getRecordMatcher(T);j&&e.removeRoute(j)}function y(){return e.getRoutes().map(T=>T.record)}function E(T){return!!e.getRecordMatcher(T)}function A(T,j){if(j=Ae({},j||c.value),typeof T=="string"){const _=Su(n,T,j.path),w=e.resolve({path:_.path},j),R=s.createHref(_.fullPath);return Ae(_,w,{params:d(w.params),hash:Pc(_.hash),redirectedFrom:void 0,href:R})}let M;if("path"in T)M=Ae({},T,{path:Su(n,T.path,j.path).path});else{const _=Ae({},T.params);for(const w in _)_[w]==null&&delete _[w];M=Ae({},T,{params:h(_)}),j.params=h(j.params)}const Y=e.resolve(M,j),we=T.hash||"";Y.params=u(d(Y.params));const p=db(r,Ae({},T,{hash:Yb(we),path:Y.path})),m=s.createHref(p);return Ae({fullPath:p,hash:we,query:r===ym?tR(T.query):T.query||{}},Y,{redirectedFrom:void 0,href:m})}function b(T){return typeof T=="string"?Su(n,T,c.value.path):Ae({},T)}function x(T,j){if(l!==T)return ai(8,{from:j,to:T})}function C(T){return ce(T)}function B(T){return C(Ae(b(T),{replace:!0}))}function K(T){const j=T.matched[T.matched.length-1];if(j&&j.redirect){const{redirect:M}=j;let Y=typeof M=="function"?M(T):M;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=b(Y):{path:Y},Y.params={}),Ae({query:T.query,hash:T.hash,params:"path"in Y?{}:T.params},Y)}}function ce(T,j){const M=l=A(T),Y=c.value,we=T.state,p=T.force,m=T.replace===!0,_=K(M);if(_)return ce(Ae(b(_),{state:typeof _=="object"?Ae({},we,_.state):we,force:p,replace:m}),j||M);const w=M;w.redirectedFrom=j;let R;return!p&&fb(r,Y,M)&&(R=ai(16,{to:w,from:Y}),cn(Y,Y,!0,!1)),(R?Promise.resolve(R):re(w,Y)).catch(D=>Dn(D)?Dn(D,2)?D:Qn(D):Ee(D,w,Y)).then(D=>{if(D){if(Dn(D,2))return ce(Ae({replace:m},b(D.to),{state:typeof D.to=="object"?Ae({},we,D.to.state):we,force:p}),j||w)}else D=z(w,Y,!0,m,we);return De(w,Y,D),D})}function U(T,j){const M=x(T,j);return M?Promise.reject(M):Promise.resolve()}function H(T){const j=ks.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(T):T()}function re(T,j){let M;const[Y,we,p]=hR(T,j);M=Pu(Y.reverse(),"beforeRouteLeave",T,j);for(const _ of Y)_.leaveGuards.forEach(w=>{M.push(or(w,T,j))});const m=U.bind(null,T,j);return M.push(m),gt(M).then(()=>{M=[];for(const _ of i.list())M.push(or(_,T,j));return M.push(m),gt(M)}).then(()=>{M=Pu(we,"beforeRouteUpdate",T,j);for(const _ of we)_.updateGuards.forEach(w=>{M.push(or(w,T,j))});return M.push(m),gt(M)}).then(()=>{M=[];for(const _ of p)if(_.beforeEnter)if(nn(_.beforeEnter))for(const w of _.beforeEnter)M.push(or(w,T,j));else M.push(or(_.beforeEnter,T,j));return M.push(m),gt(M)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),M=Pu(p,"beforeRouteEnter",T,j),M.push(m),gt(M))).then(()=>{M=[];for(const _ of o.list())M.push(or(_,T,j));return M.push(m),gt(M)}).catch(_=>Dn(_,8)?_:Promise.reject(_))}function De(T,j,M){a.list().forEach(Y=>H(()=>Y(T,j,M)))}function z(T,j,M,Y,we){const p=x(T,j);if(p)return p;const m=j===Xn,_=$s?history.state:{};M&&(Y||m?s.replace(T.fullPath,Ae({scroll:m&&_&&_.scroll},we)):s.push(T.fullPath,we)),c.value=T,cn(T,j,M,m),Qn()}let ye;function ut(){ye||(ye=s.listen((T,j,M)=>{if(!Ma.listening)return;const Y=A(T),we=K(Y);if(we){ce(Ae(we,{replace:!0}),Y).catch(fo);return}l=Y;const p=c.value;$s&&Eb(um(p.fullPath,M.delta),wl()),re(Y,p).catch(m=>Dn(m,12)?m:Dn(m,2)?(ce(m.to,Y).then(_=>{Dn(_,20)&&!M.delta&&M.type===Vo.pop&&s.go(-1,!1)}).catch(fo),Promise.reject()):(M.delta&&s.go(-M.delta,!1),Ee(m,Y,p))).then(m=>{m=m||z(Y,p,!1),m&&(M.delta&&!Dn(m,8)?s.go(-M.delta,!1):M.type===Vo.pop&&Dn(m,20)&&s.go(-1,!1)),De(Y,p,m)}).catch(fo)}))}let Et=ji(),de=ji(),xe;function Ee(T,j,M){Qn(T);const Y=de.list();return Y.length?Y.forEach(we=>we(T,j,M)):console.error(T),Promise.reject(T)}function Cn(){return xe&&c.value!==Xn?Promise.resolve():new Promise((T,j)=>{Et.add([T,j])})}function Qn(T){return xe||(xe=!T,ut(),Et.list().forEach(([j,M])=>T?M(T):j()),Et.reset()),T}function cn(T,j,M,Y){const{scrollBehavior:we}=t;if(!$s||!we)return Promise.resolve();const p=!M&&wb(um(T.fullPath,0))||(Y||!M)&&history.state&&history.state.scroll||null;return ia().then(()=>we(T,j,p)).then(m=>m&&Ib(m)).catch(m=>Ee(m,T,j))}const Dt=T=>s.go(T);let xs;const ks=new Set,Ma={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:E,getRoutes:y,resolve:A,options:t,push:C,replace:B,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:Cn,install(T){const j=this;T.component("RouterLink",iR),T.component("RouterView",lR),T.config.globalProperties.$router=j,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>as(c)}),$s&&!xs&&c.value===Xn&&(xs=!0,C(s.location).catch(we=>{}));const M={};for(const we in Xn)Object.defineProperty(M,we,{get:()=>c.value[we],enumerable:!0});T.provide(Tl,j),T.provide(Vd,j_(M)),T.provide(fh,c);const Y=T.unmount;ks.add(T),T.unmount=function(){ks.delete(T),ks.size<1&&(l=Xn,ye&&ye(),ye=null,c.value=Xn,xs=!1,xe=!1),Y()}}};function gt(T){return T.reduce((j,M)=>j.then(()=>H(M)),Promise.resolve())}return Ma}function hR(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>oi(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>oi(l,c))||s.push(c))}return[n,r,s]}function Hy(){return Qt(Tl)}function dR(){return Qt(Vd)}/**
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
 *//**
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
 */const Wy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new pR;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mR=function(t){const e=Wy(t);return Qy.encodeByteArray(e,!0)},Cc=function(t){return mR(t).replace(/\./g,"")},Yy=function(t){try{return Qy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Dc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gR(n)||(t[n]=Dc(t[n],e[n]));return t}function gR(t){return t!=="__proto__"}/**
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
 */function _R(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yR=()=>_R().__FIREBASE_DEFAULTS__,vR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yy(t[1]);return e&&JSON.parse(e)},Al=()=>{try{return yR()||vR()||IR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ER=t=>{var e,n;return(n=(e=Al())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jy=()=>{var t;return(t=Al())===null||t===void 0?void 0:t.config},Xy=t=>{var e;return(e=Al())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class wR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function TR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cc(JSON.stringify(n)),Cc(JSON.stringify(o)),a].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function bR(){var t;const e=(t=Al())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RR(){return typeof self=="object"&&self.self===self}function SR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CR(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DR(){return!bR()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zy(){try{return typeof indexedDB=="object"}catch{return!1}}function xR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const kR="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kR,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?VR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Pn(s,a,r)}}function VR(t,e){return t.replace(NR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const NR=/\{\$([^}]+)}/g;/**
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
 */function Am(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function OR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(bm(i)&&bm(o)){if(!xc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function bm(t){return t!==null&&typeof t=="object"}/**
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
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function to(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ev(t,e){const n=new MR(t,e);return n.subscribe.bind(n)}class MR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Cu),s.error===void 0&&(s.error=Cu),s.complete===void 0&&(s.complete=Cu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cu(){}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class FR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UR(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BR(t){return t===zr?void 0:t}function UR(t){return t.instantiationMode==="EAGER"}/**
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
 */class $R{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Nd=[];var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const tv={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},qR=pe.INFO,jR={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},zR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=qR,this._logHandler=zR,this._userLogHandler=null,Nd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}function KR(t){Nd.forEach(e=>{e.setLogLevel(t)})}function GR(t,e){for(const n of Nd){let r=null;e&&e.level&&(r=tv[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&t({level:pe[i].toLowerCase(),message:a,args:o,type:s.name})}}}const HR=(t,e)=>e.some(n=>t instanceof n);let Rm,Sm;function WR(){return Rm||(Rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QR(){return Sm||(Sm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nv=new WeakMap,ph=new WeakMap,rv=new WeakMap,Du=new WeakMap,Od=new WeakMap;function YR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nv.set(n,t)}).catch(()=>{}),Od.set(e,t),e}function JR(t){if(ph.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ph.set(t,e)}let mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XR(t){mh=t(mh)}function ZR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xu(this),e,...n);return rv.set(r,e.sort?e.sort():[e]),_r(r)}:QR().includes(t)?function(...e){return t.apply(xu(this),e),_r(nv.get(this))}:function(...e){return _r(t.apply(xu(this),e))}}function eS(t){return typeof t=="function"?ZR(t):(t instanceof IDBTransaction&&JR(t),HR(t,WR())?new Proxy(t,mh):t)}function _r(t){if(t instanceof IDBRequest)return YR(t);if(Du.has(t))return Du.get(t);const e=eS(t);return e!==t&&(Du.set(t,e),Od.set(e,t)),e}const xu=t=>Od.get(t);function tS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_r(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_r(o.result),c.oldVersion,c.newVersion,_r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const nS=["get","getKey","getAll","getAllKeys","count"],rS=["put","add","delete","clear"],ku=new Map;function Pm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ku.get(e))return ku.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ku.set(e,i),i}XR(t=>({...t,get:(e,n,r)=>Pm(e,n)||t.get(e,n,r),has:(e,n)=>!!Pm(e,n)||t.has(e,n)}));/**
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
 */class sS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gh="@firebase/app",Cm="0.9.14";/**
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
 */const ds=new bl("@firebase/app"),oS="@firebase/app-compat",aS="@firebase/analytics-compat",cS="@firebase/analytics",lS="@firebase/app-check-compat",uS="@firebase/app-check",hS="@firebase/auth",dS="@firebase/auth-compat",fS="@firebase/database",pS="@firebase/database-compat",mS="@firebase/functions",gS="@firebase/functions-compat",_S="@firebase/installations",yS="@firebase/installations-compat",vS="@firebase/messaging",IS="@firebase/messaging-compat",ES="@firebase/performance",wS="@firebase/performance-compat",TS="@firebase/remote-config",AS="@firebase/remote-config-compat",bS="@firebase/storage",RS="@firebase/storage-compat",SS="@firebase/firestore",PS="@firebase/firestore-compat",CS="firebase",DS="10.0.0";/**
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
 */const Ir="[DEFAULT]",xS={[gh]:"fire-core",[oS]:"fire-core-compat",[cS]:"fire-analytics",[aS]:"fire-analytics-compat",[uS]:"fire-app-check",[lS]:"fire-app-check-compat",[hS]:"fire-auth",[dS]:"fire-auth-compat",[fS]:"fire-rtdb",[pS]:"fire-rtdb-compat",[mS]:"fire-fn",[gS]:"fire-fn-compat",[_S]:"fire-iid",[yS]:"fire-iid-compat",[vS]:"fire-fcm",[IS]:"fire-fcm-compat",[ES]:"fire-perf",[wS]:"fire-perf-compat",[TS]:"fire-rc",[AS]:"fire-rc-compat",[bS]:"fire-gcs",[RS]:"fire-gcs-compat",[SS]:"fire-fst",[PS]:"fire-fst-compat","fire-js":"fire-js",[CS]:"fire-js-all"};/**
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
 */const Er=new Map,No=new Map;function kc(t,e){try{t.container.addComponent(e)}catch(n){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sv(t,e){t.container.addOrOverwriteComponent(e)}function wr(t){const e=t.name;if(No.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;No.set(e,t);for(const n of Er.values())kc(n,t);return!0}function Rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kS(t,e,n=Ir){Rl(t,e).clearInstance(n)}function VS(){No.clear()}/**
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
 */const NS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new Ts("app","Firebase",NS);/**
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
 */let OS=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}};/**
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
 */const kr=DS;function Md(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ir,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ln.create("bad-app-name",{appName:String(s)});if(n||(n=Jy()),!n)throw Ln.create("no-options");const i=Er.get(s);if(i){if(xc(n,i.options)&&xc(r,i.config))return i;throw Ln.create("duplicate-app",{appName:s})}const o=new $R(s);for(const c of No.values())o.addComponent(c);const a=new OS(n,r,o);return Er.set(s,a),a}function iv(t=Ir){const e=Er.get(t);if(!e&&t===Ir&&Jy())return Md();if(!e)throw Ln.create("no-app",{appName:t});return e}function MS(){return Array.from(Er.values())}async function ov(t){const e=t.name;Er.has(e)&&(Er.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function vn(t,e,n){var r;let s=(r=xS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(a.join(" "));return}wr(new Un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function av(t,e){if(t!==null&&typeof t!="function")throw Ln.create("invalid-log-argument");GR(t,e)}function cv(t){KR(t)}/**
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
 */const LS="firebase-heartbeat-database",FS=1,Oo="firebase-heartbeat-store";let Vu=null;function lv(){return Vu||(Vu=tS(LS,FS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oo)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),Vu}async function BS(t){try{return await(await lv()).transaction(Oo).objectStore(Oo).get(uv(t))}catch(e){if(e instanceof Pn)ds.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ds.warn(n.message)}}}async function Dm(t,e){try{const r=(await lv()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,uv(t)),await r.done}catch(n){if(n instanceof Pn)ds.warn(n.message);else{const r=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ds.warn(r.message)}}}function uv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const US=1024,$S=30*24*60*60*1e3;class qS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=$S}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xm(),{heartbeatsToSend:n,unsentEntries:r}=jS(this._heartbeatsCache.heartbeats),s=Cc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xm(){return new Date().toISOString().substring(0,10)}function jS(t,e=US){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),km(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),km(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zy()?xR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function km(t){return Cc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function KS(t){wr(new Un("platform-logger",e=>new sS(e),"PRIVATE")),wr(new Un("heartbeat",e=>new qS(e),"PRIVATE")),vn(gh,Cm,t),vn(gh,Cm,"esm2017"),vn("fire-js","")}KS("");const GS=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pn,SDK_VERSION:kr,_DEFAULT_ENTRY_NAME:Ir,_addComponent:kc,_addOrOverwriteComponent:sv,_apps:Er,_clearComponents:VS,_components:No,_getProvider:Rl,_registerComponent:wr,_removeServiceInstance:kS,deleteApp:ov,getApp:iv,getApps:MS,initializeApp:Md,onLog:av,registerVersion:vn,setLogLevel:cv},Symbol.toStringTag,{value:"Module"}));function Ld(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function hv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HS=hv,dv=new Ts("auth","Firebase",hv());/**
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
 */const Vc=new bl("@firebase/auth");function WS(t,...e){Vc.logLevel<=pe.WARN&&Vc.warn(`Auth (${kr}): ${t}`,...e)}function lc(t,...e){Vc.logLevel<=pe.ERROR&&Vc.error(`Auth (${kr}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw Fd(t,...e)}function In(t,...e){return Fd(t,...e)}function QS(t,e,n){const r=Object.assign(Object.assign({},HS()),{[e]:n});return new Ts("auth","Firebase",r).create(e,{appName:t.name})}function Fd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dv.create(t,...e)}function ee(t,e,...n){if(!t)throw Fd(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lc(e),new Error(e)}function $n(t,e){t||Vn(e)}/**
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
 */function _h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YS(){return Vm()==="http:"||Vm()==="https:"}function Vm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function JS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YS()||SR()||"connection"in navigator)?navigator.onLine:!0}function XS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=AR()||PR()}get(){return JS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bd(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eP=new aa(3e4,6e4);function ca(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function As(t,e,n,r,s={}){return pv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=oa(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),fv.fetch()(mv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function pv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZS),e);try{const s=new tP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ja(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ja(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw QS(t,u,l);rn(t,u)}}catch(s){if(s instanceof Pn)throw s;rn(t,"network-request-failed",{message:String(s)})}}async function Sl(t,e,n,r,s={}){const i=await As(t,e,n,r,s);return"mfaPendingCredential"in i&&rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function mv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Bd(t.config,s):`${t.config.apiScheme}://${s}`}class tP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),eP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=In(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function nP(t,e){return As(t,"POST","/v1/accounts:delete",e)}async function rP(t,e){return As(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sP(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=Ud(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mo(Nu(s.auth_time)),issuedAtTime:mo(Nu(s.iat)),expirationTime:mo(Nu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nu(t){return Number(t)*1e3}function Ud(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yy(n);return s?JSON.parse(s):(lc("Failed to decode base64 JWT payload"),null)}catch(s){return lc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iP(t){const e=Ud(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&oP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ci(t,rP(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?uP(i.providerUserInfo):[],a=lP(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new gv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cP(t){const e=Se(t);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uP(t){return t.map(e=>{var{providerId:n}=e,r=Ld(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hP(t,e){const n=await pv(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=mv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mo;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function Zn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ls{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ci(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sP(this,e)}reload(){return cP(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ci(this,nP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:C,isAnonymous:B,providerData:K,stsTokenManager:ce}=n;ee(x&&ce,e,"internal-error");const U=Mo.fromJSON(this.name,ce);ee(typeof x=="string",e,"internal-error"),Zn(h,e.name),Zn(d,e.name),ee(typeof C=="boolean",e,"internal-error"),ee(typeof B=="boolean",e,"internal-error"),Zn(f,e.name),Zn(g,e.name),Zn(y,e.name),Zn(E,e.name),Zn(A,e.name),Zn(b,e.name);const H=new ls({uid:x,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:B,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:U,createdAt:A,lastLoginAt:b});return K&&Array.isArray(K)&&(H.providerData=K.map(re=>Object.assign({},re))),E&&(H._redirectEventId=E),H}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mo;s.updateFromServerResponse(n);const i=new ls({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nc(i),i}}/**
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
 */const Nm=new Map;function Nn(t){$n(t instanceof Function,"Expected a class definition");let e=Nm.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nm.set(t,e),e)}/**
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
 */class _v{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_v.type="NONE";const Om=_v;/**
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
 */function uc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=uc(this.userKey,s.apiKey,i),this.fullPersistenceKey=uc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ls._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ys(Nn(Om),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Nn(Om);const o=uc(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ls._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ys(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ys(i,e,r))}}/**
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
 */function Mm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wv(e))return"Blackberry";if(Tv(e))return"Webos";if($d(e))return"Safari";if((e.includes("chrome/")||vv(e))&&!e.includes("edge/"))return"Chrome";if(Ev(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yv(t=et()){return/firefox\//i.test(t)}function $d(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vv(t=et()){return/crios\//i.test(t)}function Iv(t=et()){return/iemobile/i.test(t)}function Ev(t=et()){return/android/i.test(t)}function wv(t=et()){return/blackberry/i.test(t)}function Tv(t=et()){return/webos/i.test(t)}function Pl(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dP(t=et()){var e;return Pl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fP(){return CR()&&document.documentMode===10}function Av(t=et()){return Pl(t)||Ev(t)||Tv(t)||wv(t)||/windows phone/i.test(t)||Iv(t)}function pP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function bv(t,e=[]){let n;switch(t){case"Browser":n=Mm(et());break;case"Worker":n=`${Mm(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}async function Rv(t,e){return As(t,"GET","/v2/recaptchaConfig",ca(t,e))}function Lm(t){return t!==void 0&&t.enterprise!==void 0}class Sv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function mP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Pv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=In("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mP().appendChild(r)})}function gP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _P="https://www.google.com/recaptcha/enterprise.js?render=",yP="recaptcha-enterprise",vP="NO_RECAPTCHA";class Cv{constructor(e){this.type=yP,this.auth=la(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Rv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Sv(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Lm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(vP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Lm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Pv(_P+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Fm(t,e,n,r=!1){const s=new Cv(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class IP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class EP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bm(this),this.idTokenSubscription=new Bm(this),this.beforeStateQueue=new IP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}async initializeRecaptchaConfig(){const e=await Rv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Sv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Cv(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function la(t){return Se(t)}class Bm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ev(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function wP(t,e){const n=Rl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xc(i,e??{}))return s;rn(s,"already-initialized")}return n.initialize({options:e})}function TP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AP(t,e,n){const r=la(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Dv(e),{host:o,port:a}=bP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||RP()}function Dv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bP(t){const e=Dv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Um(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Um(o)}}}function Um(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function SP(t,e){return As(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ou(t,e){return Sl(t,"POST","/v1/accounts:signInWithPassword",ca(t,e))}/**
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
 */async function PP(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",ca(t,e))}async function CP(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",ca(t,e))}/**
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
 */class Lo extends qd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Fm(e,r,"signInWithPassword");return Ou(e,s)}else return Ou(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Fm(e,r,"signInWithPassword");return Ou(e,i)}else return Promise.reject(s)});case"emailLink":return PP(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return SP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CP(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Js(t,e){return Sl(t,"POST","/v1/accounts:signInWithIdp",ca(t,e))}/**
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
 */const DP="http://localhost";class fs extends qd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ld(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new fs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:DP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
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
 */function xP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kP(t){const e=eo(to(t)).link,n=e?eo(to(e)).deep_link_id:null,r=eo(to(t)).deep_link_id;return(r?eo(to(r)).link:null)||r||n||e||t}class jd{constructor(e){var n,r,s,i,o,a;const c=eo(to(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=xP((s=c.mode)!==null&&s!==void 0?s:null);ee(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kP(e);try{return new jd(n)}catch{return null}}}/**
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
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,n){return Lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jd.parseLink(n);return ee(r,"argument-error"),Lo._fromEmailAndCode(e,r.code,r.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ua extends xv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ar extends ua{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
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
 */class cr extends ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class lr extends ua{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
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
 */class ur extends ua{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ls._fromIdTokenResponse(e,r,s),o=$m(r);return new li({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$m(r);return new li({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $m(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oc extends Pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Oc(e,n,r,s)}}function kv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oc._fromErrorAndOperation(t,i,e,r):i})}async function VP(t,e,n=!1){const r=await ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
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
 */async function NP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ci(t,kv(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=Ud(i.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),li._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),i}}/**
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
 */async function Vv(t,e,n=!1){const r="signIn",s=await kv(t,r,e),i=await li._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function OP(t,e){return Vv(la(t),e)}function MP(t,e,n){return OP(Se(t),Pi.credential(e,n))}/**
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
 */async function LP(t,e){return As(t,"POST","/v1/accounts:update",e)}/**
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
 */async function FP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ci(r,LP(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function BP(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function UP(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function $P(t){return Se(t).signOut()}const Mc="__sak";/**
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
 */class Nv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mc,"1"),this.storage.removeItem(Mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function qP(){const t=et();return $d(t)||Pl(t)}const jP=1e3,zP=10;class Ov extends Nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qP()&&pP(),this.fallbackToPolling=Av(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ov.type="LOCAL";const KP=Ov;/**
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
 */class Mv extends Nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mv.type="SESSION";const Lv=Mv;/**
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
 */function GP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await GP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
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
 */function zd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=zd("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function WP(t){En().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Fv(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function QP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JP(){return Fv()?self:null}/**
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
 */const Bv="firebaseLocalStorageDb",XP=1,Lc="firebaseLocalStorage",Uv="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dl(t,e){return t.transaction([Lc],e?"readwrite":"readonly").objectStore(Lc)}function ZP(){const t=indexedDB.deleteDatabase(Bv);return new ha(t).toPromise()}function yh(){const t=indexedDB.open(Bv,XP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lc,{keyPath:Uv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lc)?e(r):(r.close(),await ZP(),e(await yh()))})})}async function qm(t,e,n){const r=Dl(t,!0).put({[Uv]:e,value:n});return new ha(r).toPromise()}async function eC(t,e){const n=Dl(t,!1).get(e),r=await new ha(n).toPromise();return r===void 0?null:r.value}function jm(t,e){const n=Dl(t,!0).delete(e);return new ha(n).toPromise()}const tC=800,nC=3;class $v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(JP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QP(),!this.activeServiceWorker)return;this.sender=new HP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yh();return await qm(e,Mc,"1"),await jm(e,Mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Dl(s,!1).getAll();return new ha(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$v.type="LOCAL";const rC=$v;new aa(3e4,6e4);/**
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
 */function sC(t,e){return e?Nn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kd extends qd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iC(t){return Vv(t.auth,new Kd(t),t.bypassAuthState)}function oC(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),NP(n,new Kd(t),t.bypassAuthState)}async function aC(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),VP(n,new Kd(t),t.bypassAuthState)}/**
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
 */class qv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iC;case"linkViaPopup":case"linkViaRedirect":return aC;case"reauthViaPopup":case"reauthViaRedirect":return oC;default:rn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cC=new aa(2e3,1e4);class Ks extends qv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ks.currentPopupAction&&Ks.currentPopupAction.cancel(),Ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cC.get())};e()}}Ks.currentPopupAction=null;/**
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
 */const lC="pendingRedirect",hc=new Map;class uC extends qv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const r=await hC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hC(t,e){const n=pC(e),r=fC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dC(t,e){hc.set(t._key(),e)}function fC(t){return Nn(t._redirectPersistence)}function pC(t){return uc(lC,t.config.apiKey,t.name)}async function mC(t,e,n=!1){const r=la(t),s=sC(r,e),o=await new uC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const gC=10*60*1e3;class _C{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gC&&this.cachedEventUids.clear(),this.cachedEventUids.has(zm(e))}saveEventToCache(e){this.cachedEventUids.add(zm(e)),this.lastProcessedEventTime=Date.now()}}function zm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jv(t);default:return!1}}/**
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
 */async function vC(t,e={}){return As(t,"GET","/v1/projects",e)}/**
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
 */const IC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EC=/^https?/;async function wC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vC(t);for(const n of e)try{if(TC(n))return}catch{}rn(t,"unauthorized-domain")}function TC(t){const e=_h(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!EC.test(n))return!1;if(IC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const AC=new aa(3e4,6e4);function Km(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bC(t){return new Promise((e,n)=>{var r,s,i;function o(){Km(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Km(),n(In(t,"network-request-failed"))},timeout:AC.get()})}if(!((s=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=En().gapi)===null||i===void 0)&&i.load)o();else{const a=gP("iframefcb");return En()[a]=()=>{gapi.load?o():n(In(t,"network-request-failed"))},Pv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw dc=null,e})}let dc=null;function RC(t){return dc=dc||bC(t),dc}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const SC=new aa(5e3,15e3),PC="__/auth/iframe",CC="emulator/auth/iframe",DC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kC(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bd(e,CC):`https://${t.config.authDomain}/${PC}`,r={apiKey:e.apiKey,appName:t.name,v:kr},s=xC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oa(r).slice(1)}`}async function VC(t){const e=await RC(t),n=En().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:kC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),a=En().setTimeout(()=>{i(o)},SC.get());function c(){En().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const NC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OC=500,MC=600,LC="_blank",FC="http://localhost";class Gm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BC(t,e,n,r=OC,s=MC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},NC),{width:r.toString(),height:s.toString(),top:i,left:o}),l=et().toLowerCase();n&&(a=vv(l)?LC:n),yv(l)&&(e=e||FC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(dP(l)&&a!=="_self")return UC(e||"",a),new Gm(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new Gm(h)}function UC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $C="__/auth/handler",qC="emulator/auth/handler",jC=encodeURIComponent("fac");async function Hm(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:s};if(e instanceof xv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ua){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${jC}=${encodeURIComponent(c)}`:"";return`${zC(t)}?${oa(a).slice(1)}${l}`}function zC({config:t}){return t.emulator?Bd(t,qC):`https://${t.authDomain}/${$C}`}/**
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
 */const Mu="webStorageSupport";class KC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lv,this._completeRedirectFn=mC,this._overrideRedirectResult=dC}async _openPopup(e,n,r,s){var i;$n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Hm(e,n,r,_h(),s);return BC(e,o,zd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hm(e,n,r,_h(),s);return WP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VC(e),r=new _C(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mu,{type:Mu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Mu];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Av()||$d()||Pl()}}const GC=KC;var Wm="@firebase/auth",Qm="1.0.0";/**
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
 */class HC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QC(t){wr(new Un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bv(t)},l=new EP(r,s,i,c);return TP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wr(new Un("auth-internal",e=>{const n=la(e.getProvider("auth").getImmediate());return(r=>new HC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Wm,Qm,WC(t)),vn(Wm,Qm,"esm2017")}/**
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
 */const YC=5*60,JC=Xy("authIdTokenMaxAge")||YC;let Ym=null;const XC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>JC)return;const s=n==null?void 0:n.token;Ym!==s&&(Ym=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ZC(t=iv()){const e=Rl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wP(t,{popupRedirectResolver:GC,persistence:[rC,KP,Lv]}),r=Xy("authTokenSyncURL");if(r){const i=XC(r);UP(n,i,()=>i(n.currentUser)),BP(n,o=>i(o))}const s=ER("auth");return s&&AP(n,`http://${s}`),n}QC("Browser");const da={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ui={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},Pt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},e1={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},zv={dangerouslyHTMLString:!1,multiple:!0,position:da.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},t1={rtl:!1,newestOnTop:!1,toastClassName:""},Kv={...zv,...t1};({...zv,type:Pt.DEFAULT});var Te=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Te||{}),vh=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(vh||{});const n1={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},r1={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},s1={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},i1={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function Gv(t){let e=n1;if(!t||typeof t=="string")switch(t){case"flip":e=i1;break;case"zoom":e=s1;break;case"slide":e=r1;break}else e=t;return e}function o1(t){return t.containerId||String(t.position)}const xl="will-unmount";function a1(t=da.TOP_RIGHT){return!!document.querySelector(`.${Te.CSS_NAMESPACE}__toast-container--${t}`)}function c1(t=da.TOP_RIGHT){return`${Te.CSS_NAMESPACE}__toast-container--${t}`}function l1(t,e,n=!1){const r=[`${Te.CSS_NAMESPACE}__toast-container`,`${Te.CSS_NAMESPACE}__toast-container--${t}`,n?`${Te.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return Xs(e)?e({position:t,rtl:n,defaultClassName:r}):`${r} ${e||""}`}function u1(t){var e;const{position:n,containerClassName:r,rtl:s=!1,style:i={}}=t,o=Te.CSS_NAMESPACE,a=c1(n),c=document.querySelector(`.${o}`),l=document.querySelector(`.${a}`),u=!!l&&!((e=l.className)!=null&&e.includes(xl)),h=c||document.createElement("div"),d=document.createElement("div");d.className=l1(n,r,s),d.dataset.testid=`${Te.CSS_NAMESPACE}__toast-container--${n}`,d.id=o1(t);for(const f in i)if(Object.prototype.hasOwnProperty.call(i,f)){const g=i[f];d.style[f]=g}return c||(h.className=Te.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(d),d}function Ih(t){var e,n,r;const s=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(s);i&&i.removeEventListener("animationend",Ih,!1);try{Fo[s].unmount(),(r=document.getElementById(s))==null||r.remove(),delete Fo[s],delete ht[s]}catch{}}const Fo=an({});function h1(t,e){const n=document.getElementById(String(e));n&&(Fo[n.id]=t)}function Eh(t,e=!0){const n=String(t);if(!Fo[n])return;const r=document.getElementById(n);r&&r.classList.add(xl),e?(f1(t),r&&r.addEventListener("animationend",Ih,!1)):Ih(n),bn.items=bn.items.filter(s=>s.containerId!==t)}function d1(t){for(const e in Fo)Eh(e,t);bn.items=[]}function Hv(t,e){const n=document.getElementById(t.toastId);if(n){let r=t;r={...r,...Gv(r.transition)};const s=r.appendPosition?`${r.exit}--${r.position}`:r.exit;n.className+=` ${s}`,e&&e(n)}}function f1(t){for(const e in ht)if(e===t)for(const n of ht[e]||[])Hv(n)}function p1(t){const e=fa().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function Gd(t){return document.getElementById(t)}function m1(t){const e=Gd(t.containerId);return e&&e.classList.contains(xl)}function Jm(t){var e;const n=si(t.content)?te(t.content.props):null;return n??te((e=t.data)!=null?e:{})}function g1(t){return t?bn.items.filter(e=>e.containerId===t).length>0:bn.items.length>0}function _1(){if(bn.items.length>0){const t=bn.items.shift();fc(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const ht=an({}),bn=an({items:[]});function fa(){const t=te(ht);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function y1(t){return fa().find(e=>e.toastId===t)}function fc(t,e={}){if(m1(e)){const n=Gd(e.containerId);n&&n.addEventListener("animationend",wh.bind(null,t,e),!1)}else wh(t,e)}function wh(t,e={}){const n=Gd(e.containerId);n&&n.removeEventListener("animationend",wh.bind(null,t,e),!1);const r=ht[e.containerId]||[],s=r.length>0;if(!s&&!a1(e.position)){const i=u1(e),o=ky(L1,e);o.mount(i),h1(o,i.id)}s&&(e.position=r[0].position),ia(()=>{e.updateId?wn.update(e):wn.add(t,e)})}const wn={add(t,e){const{containerId:n=""}=e;n&&(ht[n]=ht[n]||[],ht[n].find(r=>r.toastId===e.toastId)||setTimeout(()=>{var r,s;e.newestOnTop?(r=ht[n])==null||r.unshift(e):(s=ht[n])==null||s.push(e),e.onOpen&&e.onOpen(Jm(e))},e.delay||0))},remove(t){if(t){const e=p1(t);if(e){const n=ht[e];let r=n.find(s=>s.toastId===t);ht[e]=n.filter(s=>s.toastId!==t),!ht[e].length&&!g1(e)&&Eh(e,!1),_1(),ia(()=>{r!=null&&r.onClose&&(r.onClose(Jm(r)),r=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){ht[e]=ht[e]||[];const n=ht[e].find(r=>r.toastId===t.toastId);n&&setTimeout(()=>{for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const s=t[r];n[r]=s}},t.delay||0)}},clear(t,e=!0){t?Eh(t,e):d1(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,r=document.getElementById(n);r&&(r.removeEventListener("animationend",wn.dismissCallback,!1),setTimeout(()=>{wn.remove(n)}))},dismiss(t){if(t){const e=fa();for(const n of e)if(n.toastId===t){Hv(n,r=>{r.addEventListener("animationend",wn.dismissCallback,!1)});break}}}},Wv=an({}),Fc=an({});function Qv(){return Math.random().toString(36).substring(2,9)}function v1(t){return typeof t=="number"&&!isNaN(t)}function Th(t){return typeof t=="string"}function Xs(t){return typeof t=="function"}function kl(...t){return Kn(...t)}function pc(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function I1(t={}){Wv[`${Te.CSS_NAMESPACE}-default-options`]=t}function E1(){return Wv[`${Te.CSS_NAMESPACE}-default-options`]||Kv}function w1(){return document.documentElement.classList.contains("dark")?"dark":"light"}var mc=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(mc||{});const Yv={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:da.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:ui.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:Pt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},T1={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:Pt.DEFAULT},theme:{type:String,required:!1,default:ui.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},A1=Si({name:"ProgressBar",props:T1,setup(t,{attrs:e}){const n=Nt(),r=Ie(()=>t.hide?"true":"false"),s=Ie(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),i=Ie(()=>[`${Te.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${Te.CSS_NAMESPACE}__progress-bar--controlled`:`${Te.CSS_NAMESPACE}__progress-bar--animated`,`${Te.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${Te.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${Te.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),o=Ie(()=>`${i.value} ${(e==null?void 0:e.class)||""}`),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},l=Ie(()=>t.controlledProgress?null:c),u=Ie(()=>t.controlledProgress?c:null);return oc(()=>{n.value&&(a(),n.value.onanimationend=l.value,n.value.ontransitionend=u.value)}),()=>le("div",{ref:n,role:"progressbar","aria-hidden":r.value,"aria-label":"notification timer",class:o.value,style:s.value},null)}}),b1=Si({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:ui.AUTO},type:{type:String,required:!1,default:ui.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>le("button",{class:`${Te.CSS_NAMESPACE}__close-button ${Te.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[le("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[le("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Vl=({theme:t,type:e,path:n,...r})=>le("svg",Kn({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},r),[le("path",{d:n},null)]);function R1(t){return le(Vl,Kn(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function S1(t){return le(Vl,Kn(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function P1(t){return le(Vl,Kn(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function C1(t){return le(Vl,Kn(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function D1(){return le("div",{class:`${Te.CSS_NAMESPACE}__spinner`},null)}const Ah={info:S1,warning:R1,success:P1,error:C1,spinner:D1},x1=t=>t in Ah;function k1({theme:t,type:e,isLoading:n,icon:r}){let s;const i={theme:t,type:e};return n?s=Ah.spinner():r===!1?s=void 0:pc(r)?s=te(r):Xs(r)?s=r(i):si(r)?s=Bn(r,i):Th(r)||v1(r)?s=r:x1(e)&&(s=Ah[e](i)),s}const V1=()=>{};function N1(t,e,n=Te.COLLAPSE_DURATION){const{scrollHeight:r,style:s}=t,i=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${i}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,i)})})}function O1(t){const e=Nt(!1),n=Nt(!1),r=Nt(!1),s=Nt(mc.Enter),i=an({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Te.COLLAPSE_DURATION}),o=i.done||V1,a=Ie(()=>i.appendPosition?`${i.enter}--${i.position}`:i.enter),c=Ie(()=>i.appendPosition?`${i.exit}--${i.position}`:i.exit),l=Ie(()=>t.pauseOnHover?{onMouseenter:E,onMouseleave:y}:{});function u(){const b=a.value.split(" ");d().addEventListener(vh.ENTRANCE_ANIMATION_END,y,{once:!0});const x=B=>{const K=d();B.target===K&&(K.dispatchEvent(new Event(vh.ENTRANCE_ANIMATION_END)),K.removeEventListener("animationend",x),K.removeEventListener("animationcancel",x),s.value===mc.Enter&&B.type!=="animationcancel"&&K.classList.remove(...b))},C=()=>{const B=d();B.classList.add(...b),B.addEventListener("animationend",x),B.addEventListener("animationcancel",x)};t.pauseOnFocusLoss&&f(),C()}function h(){if(!d())return;const b=()=>{const C=d();C.removeEventListener("animationend",b),i.collapse?N1(C,o,i.collapseDuration):o()},x=()=>{const C=d();s.value=mc.Exit,C&&(C.className+=` ${c.value}`,C.addEventListener("animationend",b))};n.value||(r.value?b():setTimeout(x))}function d(){return t.toastRef.value}function f(){document.hasFocus()||E(),window.addEventListener("focus",y),window.addEventListener("blur",E)}function g(){window.removeEventListener("focus",y),window.removeEventListener("blur",E)}function y(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function E(){e.value=!1}function A(b){b&&(b.stopPropagation(),b.preventDefault()),n.value=!1}return oc(h),oc(()=>{const b=fa();n.value=b.findIndex(x=>x.toastId===i.toastId)>-1}),oc(()=>{t.isLoading!==void 0&&(t.loading.value?E():y())}),gl(u),_l(()=>{t.pauseOnFocusLoss&&g()}),{isIn:n,isRunning:e,hideToast:A,eventHandlers:l}}const M1=Si({name:"ToastItem",inheritAttrs:!1,props:Yv,setup(t){const e=Nt(),n=Ie(()=>!!t.isLoading),r=Ie(()=>t.progress!==void 0&&t.progress!==null),s=Ie(()=>k1(t)),i=Ie(()=>[`${Te.CSS_NAMESPACE}__toast`,`${Te.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${Te.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${Te.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:l}=O1({toastRef:e,loading:n,done:()=>{wn.remove(t.toastId)},...Gv(t.transition),...t});return()=>le("div",Kn({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:u=>{t.closeOnClick&&c(),t.onClick&&t.onClick(u)}},l.value),[le("div",{role:t.role,"data-testid":"toast-body",class:`${Te.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[s.value!=null&&le("div",{"data-testid":`toast-icon-${t.type}`,class:[`${Te.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${Te.CSS_NAMESPACE}--animate-icon ${Te.CSS_NAMESPACE}__zoom-enter`].join(" ")},[pc(s.value)?ts(te(s.value),{theme:t.theme,type:t.type}):Xs(s.value)?s.value({theme:t.theme,type:t.type}):s.value]),le("div",{"data-testid":"toast-content"},[pc(t.content)?ts(te(t.content),{toastProps:te(t),closeToast:c,data:t.data}):Xs(t.content)?t.content({toastProps:te(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?ts("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&le(b1,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),c()}},null),pc(t.closeButton)?ts(te(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):Xs(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,le(A1,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:r.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let go=0;function Jv(){typeof window>"u"||(go&&window.cancelAnimationFrame(go),go=window.requestAnimationFrame(Jv),Fc.lastUrl!==window.location.href&&(Fc.lastUrl=window.location.href,wn.clear()))}const L1=Si({name:"ToastifyContainer",inheritAttrs:!1,props:Yv,setup(t){const e=Ie(()=>t.containerId),n=Ie(()=>ht[e.value]||[]),r=Ie(()=>n.value.filter(s=>s.position===t.position));return gl(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(Jv)}),_l(()=>{typeof window<"u"&&go&&(window.cancelAnimationFrame(go),Fc.lastUrl="")}),()=>le(Vt,null,[r.value.map(s=>{const{toastId:i=""}=s;return le(M1,Kn({key:i},s),null)})])}});let Lu=!1;function Xv(){const t=[];return fa().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(xl)&&t.push(e)}),t}function F1(t){const e=Xv().length,n=t??0;return n>0&&e+bn.items.length>=n}function B1(t){F1(t.limit)&&!t.updateId&&bn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function Vr(t,e,n={}){if(Lu)return;n=kl(E1(),{type:e},te(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Qv()),n={...n,content:t,containerId:n.containerId||String(n.position)};const r=Number(n==null?void 0:n.progress);return r<0&&(n.progress=0),r>1&&(n.progress=1),n.theme==="auto"&&(n.theme=w1()),B1(n),Fc.lastUrl=window.location.href,n.multiple?bn.items.length?n.updateId&&fc(t,n):fc(t,n):(Lu=!0,be.clearAll(void 0,!1),setTimeout(()=>{fc(t,n)},0),setTimeout(()=>{Lu=!1},390)),n.toastId}const be=(t,e)=>Vr(t,Pt.DEFAULT,e);be.info=(t,e)=>Vr(t,Pt.DEFAULT,{...e,type:Pt.INFO});be.error=(t,e)=>Vr(t,Pt.DEFAULT,{...e,type:Pt.ERROR});be.warning=(t,e)=>Vr(t,Pt.DEFAULT,{...e,type:Pt.WARNING});be.warn=be.warning;be.success=(t,e)=>Vr(t,Pt.DEFAULT,{...e,type:Pt.SUCCESS});be.loading=(t,e)=>Vr(t,Pt.DEFAULT,kl(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));be.dark=(t,e)=>Vr(t,Pt.DEFAULT,kl(e,{theme:ui.DARK}));be.remove=t=>{t?wn.dismiss(t):wn.clear()};be.clearAll=(t,e)=>{wn.clear(t,e)};be.isActive=t=>{let e=!1;return e=Xv().findIndex(n=>n.toastId===t)>-1,e};be.update=(t,e={})=>{setTimeout(()=>{const n=y1(t);if(n){const r=te(n),{content:s}=r,i={...r,...e,toastId:e.toastId||t,updateId:Qv()},o=i.render||s;delete i.render,Vr(o,i.type,i)}},0)};be.done=t=>{be.update(t,{isLoading:!1,progress:1})};be.promise=U1;function U1(t,{pending:e,error:n,success:r},s){let i;e&&(i=Th(e)?be.loading(e,s):be.loading(e.render,{...s,...e}));const o={isLoading:void 0,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},a=(l,u,h)=>{if(u==null){be.remove(i);return}const d={type:l,...o,...s,data:h},f=Th(u)?{render:u}:u;return i?be.update(i,{...d,...f,isLoading:!1,autoClose:!0}):be(f.render,{...d,...f,isLoading:!1,autoClose:!0}),h},c=Xs(t)?t():t;return c.then(l=>{a("success",r,l)}).catch(l=>{a("error",n,l)}),c}be.POSITION=da;be.THEME=ui;be.TYPE=Pt;be.TRANSITIONS=e1;const $1={install(t,e={}){q1(e)}};typeof window<"u"&&(window.Vue3Toastify=$1);function q1(t={}){const e=kl(Kv,t);I1(e)}/*! js-cookie v3.0.5 | MIT */function za(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var j1={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function bh(t,e){function n(s,i,o){if(!(typeof document>"u")){o=za({},e,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),s=encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in o)o[c]&&(a+="; "+c,o[c]!==!0&&(a+="="+o[c].split(";")[0]));return document.cookie=s+"="+t.write(i,s)+a}}function r(s){if(!(typeof document>"u"||arguments.length&&!s)){for(var i=document.cookie?document.cookie.split("; "):[],o={},a=0;a<i.length;a++){var c=i[a].split("="),l=c.slice(1).join("=");try{var u=decodeURIComponent(c[0]);if(o[u]=t.read(l,u),s===u)break}catch{}}return s?o[s]:o}}return Object.create({set:n,get:r,remove:function(s,i){n(s,"",za({},i,{expires:-1}))},withAttributes:function(s){return bh(this.converter,za({},this.attributes,s))},withConverter:function(s){return bh(za({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var Tt=bh(j1,{path:"/"});const Nl=ab("auth",()=>{const t=ZC();Hy();let e=Nt([]),n=Nt(""),r=Nt(),s=Nt("");return{setAccessToken:(l,u,h,d,f)=>{n.value=l,r.value=u,s.value={name:h,email:d,image:f}},authUser:async(l,u)=>{await MP(t,l,u).then(async h=>{e.value=h.user,e.value.displayName||(e.value.displayName=l),Tt.set("access_token",e.value.accessToken,{expires:7}),Tt.set("uid",e.value.uid,{expires:7}),Tt.set("displayName",e.value.displayName,{expires:7}),Tt.set("email",e.value.email,{expires:7}),Tt.set("photoURL",e.value.photoURL,{expires:7})}).catch(h=>{be(h.message,{autoClose:5e3,type:"error"})})},update:async(l,u)=>{try{await FP(t.currentUser,{displayName:l,photoURL:u}),Tt.set("displayName",t.currentUser.displayName,{expires:7}),Tt.set("email",t.currentUser.email,{expires:7}),Tt.set("photoURL",t.currentUser.photoURL,{expires:7}),console.log("Profile updated successfully!",t.currentUser)}catch(h){be(h.message,{autoClose:5e3,type:"error"})}},logout:()=>{$P(t).then(()=>{Tt.remove("access_token"),Tt.remove("profile"),n.value="",s.value=""}).catch(l=>{be(l.message,{autoClose:5e3,type:"error"})})},user:e,profile:s,accessToken:n}});const z1={class:"flex h-screen"},K1={key:0,class:"max-w-[148px] w-full h-full max-h-screen"},G1=ve("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ve("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})],-1),H1=[G1],W1=ve("img",{src:cb,alt:""},null,-1),Q1=ve("br",null,null,-1),Y1={class:"flex-grow menu rounded-box p-0 w-full"},J1=ve("div",null,[ve("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ve("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})])],-1),X1={key:0,class:"hidden sm:inline"},Z1={key:0},eD=ve("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ve("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"})],-1),tD=[eD],nD={key:1},rD=ve("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[ve("path",{"fill-rule":"evenodd",d:"M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z","clip-rule":"evenodd"}),ve("path",{"fill-rule":"evenodd",d:"M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})],-1),sD=[rD],iD={key:2,class:"hidden sm:inline"},oD={class:"menu rounded-box p-0 w-full"},aD=ve("div",null,[ve("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ve("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})])],-1),cD={key:0,class:"hidden sm:inline"},lD={key:0},uD=ve("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ve("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"})],-1),hD=[uD],dD={key:1},fD=ve("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[ve("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"})],-1),pD=[fD],mD={key:2,class:"hidden sm:inline"},gD={class:"p-8 w-full overflow-scroll h-screen max-h-screen main-content bg-gray-200"},_D={__name:"sidebar",setup(t){const e=Nl();Hy(),dR();let n=Ie(()=>e.accessToken);Ie(()=>e.profile);const r=Nt(!1),s=()=>{r.value=!r.value;const o=document.querySelector("aside");o&&(o.style.width=r.value?"65px":"148px")},i=async()=>{try{await e.logout(),window.location.search="login"}catch(o){be(o.message,{autoClose:5e3,type:"error"})}};return(o,a)=>{const c=Vp("router-link"),l=Vp("router-view");return $t(),un("div",z1,[as(n)?($t(),un("aside",K1,[ve("nav",{class:ll(["p-1 flex flex-col h-full max-h-screen",{"p-5":!r.value}])},[ve("div",{class:"cursor-pointer m-auto",onClick:s},H1),W1,Q1,ve("div",Y1,[ve("li",null,[le(c,{to:"/home"},{default:ic(()=>[J1,r.value?Ui("",!0):($t(),un("div",X1,"Home"))]),_:1})]),ve("li",null,[le(c,{to:"/list-employee"},{default:ic(()=>[r.value?($t(),un("div",nD,sD)):($t(),un("div",Z1,tD)),r.value?Ui("",!0):($t(),un("div",iD,"List"))]),_:1})])]),ve("div",oD,[ve("li",null,[le(c,{to:"/profile"},{default:ic(()=>[aD,r.value?Ui("",!0):($t(),un("div",cD,"Profile"))]),_:1})]),ve("li",null,[ve("a",{onClick:i},[r.value?($t(),un("div",dD,pD)):($t(),un("div",lD,hD)),r.value?Ui("",!0):($t(),un("div",mD,"Logout"))])])])],2)])):Ui("",!0),ve("div",gD,[le(l)])])}}};const yD=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},vD={__name:"App",setup(t){const e=Nl();return Ie(()=>e.accessToken),(n,r)=>($t(),Cd(_D))}},ID=yD(vD,[["__scopeId","data-v-c85376cb"]]),ED="modulepreload",wD=function(t){return"/"+t},Xm={},Ms=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=wD(i),i in Xm)return;Xm[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":ED,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},TD=[{path:"/login",name:"login",component:()=>Ms(()=>import("./index-1e52410c.js"),["assets/index-1e52410c.js","assets/input-57f3c635.js"])},{path:"/home",name:"home",component:()=>Ms(()=>import("./home-aaf9de5d.js"),["assets/home-aaf9de5d.js","assets/form-input-3d77d476.js","assets/input-57f3c635.js","assets/button-27af24b8.js","assets/employee-cd2d0331.js","assets/loading-06b58b27.js","assets/loading-57c5a6a9.css"]),meta:{requiresAuth:!0}},{path:"/list-employee",name:"list-employee",component:()=>Ms(()=>import("./index-015fe60d.js"),["assets/index-015fe60d.js","assets/table-7740b1a4.js","assets/button-27af24b8.js","assets/employee-cd2d0331.js","assets/loading-06b58b27.js","assets/loading-57c5a6a9.css"]),meta:{requiresAuth:!0}},{path:"/edit-employee/:id",name:"edit-list-employee",component:()=>Ms(()=>import("./index-beecf94b.js"),["assets/index-beecf94b.js","assets/form-input-3d77d476.js","assets/input-57f3c635.js","assets/button-27af24b8.js","assets/table-7740b1a4.js","assets/loading-06b58b27.js","assets/loading-57c5a6a9.css","assets/employee-cd2d0331.js","assets/employer-327c1d65.js"]),meta:{requiresAuth:!0}},{path:"/edit-employer/:id",name:"edit-employer",component:()=>Ms(()=>import("./index-a7b1ce73.js"),["assets/index-a7b1ce73.js","assets/form-input-3d77d476.js","assets/input-57f3c635.js","assets/button-27af24b8.js","assets/loading-06b58b27.js","assets/loading-57c5a6a9.css","assets/employer-327c1d65.js"]),meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:()=>Ms(()=>import("./index-5236bcc8.js"),["assets/index-5236bcc8.js","assets/input-57f3c635.js","assets/button-27af24b8.js"]),meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",redirect:"/home"}],Zv=uR({history:Rb("/"),routes:TD});Zv.beforeEach((t,e,n)=>{const r=t.meta.requiresAuth,s=Nl();r&&!s.accessToken?n("/login"):t.path==="/login"&&s.accessToken?n("/home"):n()});/**
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
 */class AD{constructor(e,n){this._delegate=e,this.firebase=n,kc(e,new Un("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ov(this._delegate)))}_getService(e,n=Ir){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ir){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){kc(this._delegate,e)}_addOrOverwriteComponent(e){sv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const bD={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Zm=new Ts("app-compat","Firebase",bD);/**
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
 */function RD(t){const e={},n={__esModule:!0,initializeApp:i,app:s,registerVersion:vn,setLogLevel:cv,onLog:av,apps:null,SDK_VERSION:kr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:GS}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function s(l){if(l=l||Ir,!Am(e,l))throw Zm.create("no-app",{appName:l});return e[l]}s.App=t;function i(l,u={}){const h=Md(l,u);if(Am(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(wr(l)&&l.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw Zm.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Dc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function c(l,u){return u==="serverAuth"?null:u}return n}/**
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
 */function eI(){const t=RD(AD);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:eI,extendNamespace:e,createSubscribe:ev,ErrorFactory:Ts,deepExtend:Dc});function e(n){Dc(t,n)}return t}const SD=eI();/**
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
 */const eg=new bl("@firebase/app-compat"),PD="@firebase/app-compat",CD="0.2.14";/**
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
 */function DD(t){vn(PD,CD,t)}/**
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
 */if(RR()&&self.firebase!==void 0){eg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&eg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Hd=SD;DD();var xD="firebase",kD="10.0.0";/**
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
 */Hd.registerVersion(xD,kD,"app-compat");var VD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Wd=Wd||{},ne=VD||self;function Ol(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function pa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ND(t){return Object.prototype.hasOwnProperty.call(t,Fu)&&t[Fu]||(t[Fu]=++OD)}var Fu="closure_uid_"+(1e9*Math.random()>>>0),OD=0;function MD(t,e,n){return t.call.apply(t.bind,arguments)}function LD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=MD:vt=LD,vt.apply(null,arguments)}function Ka(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Nr(){this.s=this.s,this.o=this.o}var FD=0;Nr.prototype.s=!1;Nr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),FD!=0)&&ND(this)};Nr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Qd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function tg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ol(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var BD=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",()=>{},e),ne.removeEventListener("test",()=>{},e)}catch{}return t}();function Bo(t){return/^[\s\xa0]*$/.test(t)}function Ml(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function pn(t){return Ml().indexOf(t)!=-1}function Yd(t){return Yd[" "](t),t}Yd[" "]=function(){};function UD(t,e){var n=kx;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var $D=pn("Opera"),hi=pn("Trident")||pn("MSIE"),nI=pn("Edge"),Rh=nI||hi,rI=pn("Gecko")&&!(Ml().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge"))&&!(pn("Trident")||pn("MSIE"))&&!pn("Edge"),qD=Ml().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge");function sI(){var t=ne.document;return t?t.documentMode:void 0}var Sh;e:{var Bu="",Uu=function(){var t=Ml();if(rI)return/rv:([^\);]+)(\)|;)/.exec(t);if(nI)return/Edge\/([\d\.]+)/.exec(t);if(hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qD)return/WebKit\/(\S+)/.exec(t);if($D)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uu&&(Bu=Uu?Uu[1]:""),hi){var $u=sI();if($u!=null&&$u>parseFloat(Bu)){Sh=String($u);break e}}Sh=Bu}var Ph;if(ne.document&&hi){var ng=sI();Ph=ng||parseInt(Sh,10)||void 0}else Ph=void 0;var jD=Ph;function Uo(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rI){e:{try{Yd(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Uo.$.h.call(this)}}at(Uo,It);var zD={2:"touch",3:"pen",4:"mouse"};Uo.prototype.h=function(){Uo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ma="closure_listenable_"+(1e6*Math.random()|0),KD=0;function GD(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++KD,this.fa=this.ia=!1}function Ll(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Jd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function HD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function iI(t){const e={};for(const n in t)e[n]=t[n];return e}const rg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oI(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<rg.length;i++)n=rg[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fl(t){this.src=t,this.g={},this.h=0}Fl.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Dh(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new GD(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Ch(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=tI(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ll(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Dh(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Xd="closure_lm_"+(1e6*Math.random()|0),qu={};function aI(t,e,n,r,s){if(r&&r.once)return lI(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)aI(t,e[i],n,r,s);return null}return n=tf(n),t&&t[ma]?t.O(e,n,pa(r)?!!r.capture:!!r,s):cI(t,e,n,!1,r,s)}function cI(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=pa(s)?!!s.capture:!!s,a=ef(t);if(a||(t[Xd]=a=new Fl(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=WD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)BD||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(hI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function WD(){function t(n){return e.call(t.src,t.listener,n)}const e=QD;return t}function lI(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)lI(t,e[i],n,r,s);return null}return n=tf(n),t&&t[ma]?t.P(e,n,pa(r)?!!r.capture:!!r,s):cI(t,e,n,!0,r,s)}function uI(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)uI(t,e[i],n,r,s);else r=pa(r)?!!r.capture:!!r,n=tf(n),t&&t[ma]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Dh(i,n,r,s),-1<n&&(Ll(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ef(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dh(e,n,r,s)),(n=-1<t?e[t]:null)&&Zd(n))}function Zd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ma])Ch(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ef(e))?(Ch(n,t),n.h==0&&(n.src=null,e[Xd]=null)):Ll(t)}}}function hI(t){return t in qu?qu[t]:qu[t]="on"+t}function QD(t,e){if(t.fa)t=!0;else{e=new Uo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Zd(t),t=n.call(r,e)}return t}function ef(t){return t=t[Xd],t instanceof Fl?t:null}var ju="__closure_events_fn_"+(1e9*Math.random()>>>0);function tf(t){return typeof t=="function"?t:(t[ju]||(t[ju]=function(e){return t.handleEvent(e)}),t[ju])}function ot(){Nr.call(this),this.i=new Fl(this),this.S=this,this.J=null}at(ot,Nr);ot.prototype[ma]=!0;ot.prototype.removeEventListener=function(t,e,n,r){uI(this,t,e,n,r)};function mt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var s=e;e=new It(r,t),oI(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ga(o,r,!0,e)&&s}if(o=e.g=t,s=Ga(o,r,!0,e)&&s,s=Ga(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ga(o,r,!1,e)&&s}ot.prototype.N=function(){if(ot.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ll(n[r]);delete t.g[e],t.h--}}this.J=null};ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ot.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ga(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ch(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var nf=ne.JSON.stringify;class YD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function JD(){var t=rf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class XD{constructor(){this.h=this.g=null}add(e,n){const r=dI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dI=new YD(()=>new ZD,t=>t.reset());class ZD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ex(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function tx(t){ne.setTimeout(()=>{throw t},0)}let $o,qo=!1,rf=new XD,fI=()=>{const t=ne.Promise.resolve(void 0);$o=()=>{t.then(nx)}};var nx=()=>{for(var t;t=JD();){try{t.h.call(t.g)}catch(n){tx(n)}var e=dI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qo=!1};function Bl(t,e){ot.call(this),this.h=t||1,this.g=e||ne,this.j=vt(this.qb,this),this.l=Date.now()}at(Bl,ot);F=Bl.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),mt(this,"tick"),this.ga&&(sf(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){Bl.$.N.call(this),sf(this),delete this.g};function of(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function pI(t){t.g=of(()=>{t.g=null,t.i&&(t.i=!1,pI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rx extends Nr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pI(this)}N(){super.N(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jo(t){Nr.call(this),this.h=t,this.g={}}at(jo,Nr);var sg=[];function mI(t,e,n,r){Array.isArray(n)||(n&&(sg[0]=n.toString()),n=sg);for(var s=0;s<n.length;s++){var i=aI(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function gI(t){Jd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zd(e)},t),t.g={}}jo.prototype.N=function(){jo.$.N.call(this),gI(this)};jo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ul(){this.g=!0}Ul.prototype.Ea=function(){this.g=!1};function sx(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function ix(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Gs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ax(t,n)+(r?" "+r:"")})}function ox(t,e){t.info(function(){return"TIMEOUT: "+e})}Ul.prototype.info=function(){};function ax(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return nf(n)}catch{return e}}var bs={},ig=null;function $l(){return ig=ig||new ot}bs.Ta="serverreachability";function _I(t){It.call(this,bs.Ta,t)}at(_I,It);function zo(t){const e=$l();mt(e,new _I(e))}bs.STAT_EVENT="statevent";function yI(t,e){It.call(this,bs.STAT_EVENT,t),this.stat=e}at(yI,It);function Rt(t){const e=$l();mt(e,new yI(e,t))}bs.Ua="timingevent";function vI(t,e){It.call(this,bs.Ua,t),this.size=e}at(vI,It);function ga(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var ql={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},II={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function af(){}af.prototype.h=null;function og(t){return t.h||(t.h=t.i())}function EI(){}var _a={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function cf(){It.call(this,"d")}at(cf,It);function lf(){It.call(this,"c")}at(lf,It);var xh;function jl(){}at(jl,af);jl.prototype.g=function(){return new XMLHttpRequest};jl.prototype.i=function(){return{}};xh=new jl;function ya(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new jo(this),this.P=cx,t=Rh?125:void 0,this.V=new Bl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wI}function wI(){this.i=null,this.g="",this.h=!1}var cx=45e3,kh={},Bc={};F=ya.prototype;F.setTimeout=function(t){this.P=t};function Vh(t,e,n){t.L=1,t.v=Kl(qn(e)),t.s=n,t.S=!0,TI(t,null)}function TI(t,e){t.G=Date.now(),va(t),t.A=qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),xI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new wI,t.g=XI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rx(vt(t.Pa,t,t.g),t.O)),mI(t.U,t.g,"readystatechange",t.nb),e=t.I?iI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),zo(),sx(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&mn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const u=mn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Rh||this.g&&(this.h.h||this.g.ja()||ug(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?zo(3):zo(2)),zl(this);var n=this.g.da();this.ca=n;t:if(AI(this)){var r=ug(this.g);t="";var s=r.length,i=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ns(this),_o(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ix(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bo(a)){var l=a;break t}}l=null}if(n=l)Gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nh(this,n);else{this.i=!1,this.o=3,Rt(12),ns(this),_o(this);break e}}this.S?(bI(this,u,o),Rh&&this.i&&u==3&&(mI(this.U,this.V,"tick",this.mb),this.V.start())):(Gs(this.j,this.m,o,null),Nh(this,o)),u==4&&ns(this),this.i&&!this.J&&(u==4?WI(this.l,this):(this.i=!1,va(this)))}else Cx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),ns(this),_o(this)}}}catch{}finally{}};function AI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function bI(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=lx(t,n),s==Bc){e==4&&(t.o=4,Rt(14),r=!1),Gs(t.j,t.m,null,"[Incomplete Response]");break}else if(s==kh){t.o=4,Rt(15),Gs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gs(t.j,t.m,s,null),Nh(t,s);AI(t)&&s!=Bc&&s!=kh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),mf(e),e.M=!0,Rt(11))):(Gs(t.j,t.m,n,"[Invalid Chunked Response]"),ns(t),_o(t))}F.mb=function(){if(this.g){var t=mn(this.g),e=this.g.ja();this.C<e.length&&(zl(this),bI(this,t,e),this.i&&t!=4&&va(this))}};function lx(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Bc:(n=Number(e.substring(n,r)),isNaN(n)?kh:(r+=1,r+n>e.length?Bc:(e=e.slice(r,r+n),t.C=r+n,e)))}F.cancel=function(){this.J=!0,ns(this)};function va(t){t.Y=Date.now()+t.P,RI(t,t.P)}function RI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ga(vt(t.lb,t),e)}function zl(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ox(this.j,this.A),this.L!=2&&(zo(),Rt(17)),ns(this),this.o=2,_o(this)):RI(this,this.Y-t)};function _o(t){t.l.H==0||t.J||WI(t.l,t)}function ns(t){zl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,sf(t.V),gI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Nh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Oh(n.i,t))){if(!t.K&&Oh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)qc(n),Wl(n);else break e;pf(n),Rt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ga(vt(n.ib,n),6e3));if(1>=NI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else rs(n,11)}else if((t.K||n.g==t)&&qc(n),!Bo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(uf(i,i.h),i.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Oe(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=JI(r,r.J?r.pa:null,r.Y),o.K){OI(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(zl(a),va(a)),r.g=o}else GI(r);0<n.j.length&&Ql(n)}else l[0]!="stop"&&l[0]!="close"||rs(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?rs(n,7):ff(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}zo(4)}catch{}}function ux(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ol(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hx(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ol(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function SI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ol(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hx(t),r=ux(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var PI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function us(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof us){this.h=t.h,Uc(this,t.j),this.s=t.s,this.g=t.g,$c(this,t.m),this.l=t.l;var e=t.i,n=new Ko;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ag(this,n),this.o=t.o}else t&&(e=String(t).match(PI))?(this.h=!1,Uc(this,e[1]||"",!0),this.s=no(e[2]||""),this.g=no(e[3]||"",!0),$c(this,e[4]),this.l=no(e[5]||"",!0),ag(this,e[6]||"",!0),this.o=no(e[7]||"")):(this.h=!1,this.i=new Ko(null,this.h))}us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ro(e,cg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ro(e,cg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ro(n,n.charAt(0)=="/"?mx:px,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ro(n,_x)),t.join("")};function qn(t){return new us(t)}function Uc(t,e,n){t.j=n?no(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $c(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ag(t,e,n){e instanceof Ko?(t.i=e,yx(t.i,t.h)):(n||(e=ro(e,gx)),t.i=new Ko(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function Kl(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function no(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ro(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var cg=/[#\/\?@]/g,px=/[#\?:]/g,mx=/[#\?]/g,gx=/[#\?@]/g,_x=/#/g;function Ko(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Or(t){t.g||(t.g=new Map,t.h=0,t.i&&dx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Ko.prototype;F.add=function(t,e){Or(this),this.i=null,t=Ci(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function CI(t,e){Or(t),e=Ci(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function DI(t,e){return Or(t),e=Ci(t,e),t.g.has(e)}F.forEach=function(t,e){Or(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};F.ta=function(){Or(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};F.Z=function(t){Or(this);let e=[];if(typeof t=="string")DI(this,t)&&(e=e.concat(this.g.get(Ci(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Or(this),this.i=null,t=Ci(this,t),DI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function xI(t,e,n){CI(t,e),0<n.length&&(t.i=null,t.g.set(Ci(t,e),Qd(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ci(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yx(t,e){e&&!t.j&&(Or(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(CI(this,r),xI(this,s,n))},t)),t.j=e}var vx=class{constructor(t,e){this.g=t,this.map=e}};function kI(t){this.l=t||Ix,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ka&&ne.g.Ka()&&ne.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ix=10;function VI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function NI(t){return t.h?1:t.g?t.g.size:0}function Oh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function uf(t,e){t.g?t.g.add(e):t.h=e}function OI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kI.prototype.cancel=function(){if(this.i=MI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function MI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Qd(t.i)}var Ex=class{stringify(t){return ne.JSON.stringify(t,void 0)}parse(t){return ne.JSON.parse(t,void 0)}};function wx(){this.g=new Ex}function Tx(t,e,n){const r=n||"";try{SI(t,function(s,i){let o=s;pa(s)&&(o=nf(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Ax(t,e){const n=new Ul;if(ne.Image){const r=new Image;r.onload=Ka(Ha,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ka(Ha,n,r,"TestLoadImage: error",!1,e),r.onabort=Ka(Ha,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ka(Ha,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ha(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ia(t){this.l=t.fc||null,this.j=t.ob||!1}at(Ia,af);Ia.prototype.g=function(){return new Gl(this.l,this.j)};Ia.prototype.i=function(t){return function(){return t}}({});function Gl(t,e){ot.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Gl,ot);var hf=0;F=Gl.prototype;F.open=function(t,e){if(this.readyState!=hf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Go(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ne).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ea(this)),this.readyState=hf};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Go(this)),this.g&&(this.readyState=3,Go(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;LI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function LI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ea(this):Go(this),this.readyState==3&&LI(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,Ea(this))};F.Ya=function(t){this.g&&(this.response=t,Ea(this))};F.ka=function(){this.g&&Ea(this)};function Ea(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Go(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Go(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bx=ne.JSON.parse;function je(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=FI,this.L=this.M=!1}at(je,ot);var FI="",Rx=/^https?$/i,Sx=["POST","PUT"];F=je.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():xh.g(),this.C=this.u?og(this.u):og(xh),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){lg(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ne.FormData&&t instanceof ne.FormData,!(0<=tI(Sx,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$I(this),0<this.B&&((this.L=Px(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=of(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){lg(this,i)}};function Px(t){return hi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof Wd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function lg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,BI(t),Hl(t)}function BI(t){t.F||(t.F=!0,mt(t,"complete"),mt(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),Hl(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hl(this,!0)),je.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?UI(this):this.kb())};F.kb=function(){UI(this)};function UI(t){if(t.h&&typeof Wd<"u"&&(!t.C[1]||mn(t)!=4||t.da()!=2)){if(t.v&&mn(t)==4)of(t.La,0,t);else if(mt(t,"readystatechange"),mn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(PI)[1]||null;!s&&ne.self&&ne.self.location&&(s=ne.self.location.protocol.slice(0,-1)),r=!Rx.test(s?s.toLowerCase():"")}n=r}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var i=2<mn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",BI(t)}}finally{Hl(t)}}}}function Hl(t,e){if(t.g){$I(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=r}catch{}}}function $I(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function mn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bx(e)}};function ug(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case FI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Cx(t){const e={};t=(t.g&&2<=mn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Bo(t[r]))continue;var n=ex(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}HD(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qI(t){let e="";return Jd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function df(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function zi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jI(t){this.Ga=0,this.j=[],this.l=new Ul,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zi("baseRetryDelayMs",5e3,t),this.hb=zi("retryDelaySeedMs",1e4,t),this.eb=zi("forwardChannelMaxRetries",2,t),this.xa=zi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new kI(t&&t.concurrentRequestLimit),this.Ja=new wx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=jI.prototype;F.ra=8;F.H=1;function ff(t){if(zI(t),t.H==3){var e=t.W++,n=qn(t.I);if(Oe(n,"SID",t.K),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),wa(t,n),e=new ya(t,t.l,e),e.L=2,e.v=Kl(qn(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon)try{n=ne.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=XI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),va(e)}YI(t)}function Wl(t){t.g&&(mf(t),t.g.cancel(),t.g=null)}function zI(t){Wl(t),t.u&&(ne.clearTimeout(t.u),t.u=null),qc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Ql(t){if(!VI(t.i)&&!t.m){t.m=!0;var e=t.Na;$o||fI(),qo||($o(),qo=!0),rf.add(e,t),t.C=0}}function Dx(t,e){return NI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ga(vt(t.Na,t,e),QI(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ya(this,this.l,t);let i=this.s;if(this.U&&(i?(i=iI(i),oI(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=KI(this,s,e),n=qn(this.I),Oe(n,"RID",t),Oe(n,"CVER",22),this.F&&Oe(n,"X-HTTP-Session-Id",this.F),wa(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(qI(i)))+"&"+e:this.o&&df(n,this.o,i)),uf(this.i,s),this.bb&&Oe(n,"TYPE","init"),this.P?(Oe(n,"$req",e),Oe(n,"SID","null"),s.aa=!0,Vh(s,n,null)):Vh(s,n,e),this.H=2}}else this.H==3&&(t?hg(this,t):this.j.length==0||VI(this.i)||hg(this))};function hg(t,e){var n;e?n=e.m:n=t.W++;const r=qn(t.I);Oe(r,"SID",t.K),Oe(r,"RID",n),Oe(r,"AID",t.V),wa(t,r),t.o&&t.s&&df(r,t.o,t.s),n=new ya(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=KI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),uf(t.i,n),Vh(n,r,e)}function wa(t,e){t.na&&Jd(t.na,function(n,r){Oe(e,r,n)}),t.h&&SI({},function(n,r){Oe(e,r,n)})}function KI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?vt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Tx(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function GI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;$o||fI(),qo||($o(),qo=!0),rf.add(e,t),t.A=0}}function pf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ga(vt(t.Ma,t),QI(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,HI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ga(vt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Rt(10),Wl(this),HI(this))};function mf(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function HI(t){t.g=new ya(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=qn(t.wa);Oe(e,"RID","rpc"),Oe(e,"SID",t.K),Oe(e,"AID",t.V),Oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Oe(e,"TO",t.qa),Oe(e,"TYPE","xmlhttp"),wa(t,e),t.o&&t.s&&df(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Kl(qn(e)),n.s=null,n.S=!0,TI(n,t)}F.ib=function(){this.v!=null&&(this.v=null,Wl(this),pf(this),Rt(19))};function qc(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function WI(t,e){var n=null;if(t.g==e){qc(t),mf(t),t.g=null;var r=2}else if(Oh(t.i,e))n=e.F,OI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=$l(),mt(r,new vI(r,n)),Ql(t)}else GI(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Dx(t,e)||r==2&&pf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:rs(t,5);break;case 4:rs(t,10);break;case 3:rs(t,6);break;default:rs(t,2)}}}function QI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function rs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=vt(t.pb,t);n||(n=new us("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Uc(n,"https"),Kl(n)),Ax(n.toString(),r)}else Rt(2);t.H=0,t.h&&t.h.za(e),YI(t),zI(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Rt(2)):(this.l.info("Failed to ping google.com"),Rt(1))};function YI(t){if(t.H=0,t.ma=[],t.h){const e=MI(t.i);(e.length!=0||t.j.length!=0)&&(tg(t.ma,e),tg(t.ma,t.j),t.i.i.length=0,Qd(t.j),t.j.length=0),t.h.ya()}}function JI(t,e,n){var r=n instanceof us?qn(n):new us(n);if(r.g!="")e&&(r.g=e+"."+r.g),$c(r,r.m);else{var s=ne.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new us(null);r&&Uc(i,r),e&&(i.g=e),s&&$c(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Oe(r,n,e),Oe(r,"VER",t.ra),wa(t,r),r}function XI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new je(new Ia({ob:!0})):new je(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function ZI(){}F=ZI.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function jc(){if(hi&&!(10<=Number(jD)))throw Error("Environmental error: no available transport.")}jc.prototype.g=function(t,e){return new jt(t,e)};function jt(t,e){ot.call(this),this.g=new jI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Bo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Di(this)}at(jt,ot);jt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=JI(t,null,t.Y),Ql(t)};jt.prototype.close=function(){ff(this.g)};jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=nf(t),t=n);e.j.push(new vx(e.fb++,t)),e.H==3&&Ql(e)};jt.prototype.N=function(){this.g.h=null,delete this.j,ff(this.g),delete this.g,jt.$.N.call(this)};function eE(t){cf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(eE,cf);function tE(){lf.call(this),this.status=1}at(tE,lf);function Di(t){this.g=t}at(Di,ZI);Di.prototype.Ba=function(){mt(this.g,"a")};Di.prototype.Aa=function(t){mt(this.g,new eE(t))};Di.prototype.za=function(t){mt(this.g,new tE)};Di.prototype.ya=function(){mt(this.g,"b")};function xx(){this.blockSize=-1}function sn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}at(sn,xx);sn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}sn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)zu(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){zu(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){zu(this,r),s=0;break}}this.h=s,this.i+=e};sn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Pe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var kx={};function gf(t){return-128<=t&&128>t?UD(t,function(e){return new Pe([e|0],0>e?-1:0)}):new Pe([t|0],0>t?-1:0)}function gn(t){if(isNaN(t)||!isFinite(t))return Zs;if(0>t)return ft(gn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Mh;return new Pe(e,0)}function nE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ft(nE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gn(Math.pow(e,8)),r=Zs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=gn(Math.pow(e,i)),r=r.R(i).add(gn(o))):(r=r.R(n),r=r.add(gn(o)))}return r}var Mh=4294967296,Zs=gf(0),Lh=gf(1),dg=gf(16777216);F=Pe.prototype;F.ea=function(){if(Gt(this))return-ft(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Mh+r)*e,e*=Mh}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(On(this))return"0";if(Gt(this))return"-"+ft(this).toString(t);for(var e=gn(Math.pow(t,6)),n=this,r="";;){var s=Kc(n,e).g;n=zc(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,On(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function On(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Gt(t){return t.h==-1}F.X=function(t){return t=zc(this,t),Gt(t)?-1:On(t)?0:1};function ft(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Pe(n,~t.h).add(Lh)}F.abs=function(){return Gt(this)?ft(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Pe(n,n[n.length-1]&-2147483648?-1:0)};function zc(t,e){return t.add(ft(e))}F.R=function(t){if(On(this)||On(t))return Zs;if(Gt(this))return Gt(t)?ft(this).R(ft(t)):ft(ft(this).R(t));if(Gt(t))return ft(this.R(ft(t)));if(0>this.X(dg)&&0>t.X(dg))return gn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Wa(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Wa(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Wa(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Wa(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Pe(n,0)};function Wa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ki(t,e){this.g=t,this.h=e}function Kc(t,e){if(On(e))throw Error("division by zero");if(On(t))return new Ki(Zs,Zs);if(Gt(t))return e=Kc(ft(t),e),new Ki(ft(e.g),ft(e.h));if(Gt(e))return e=Kc(t,ft(e)),new Ki(ft(e.g),e.h);if(30<t.g.length){if(Gt(t)||Gt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lh,r=e;0>=r.X(t);)n=fg(n),r=fg(r);var s=Ls(n,1),i=Ls(r,1);for(r=Ls(r,2),n=Ls(n,2);!On(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ls(r,1),n=Ls(n,1)}return e=zc(t,s.R(e)),new Ki(s,e)}for(s=Zs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=gn(n),o=i.R(e);Gt(o)||0<o.X(t);)n-=r,i=gn(n),o=i.R(e);On(i)&&(i=Lh),s=s.add(i),t=zc(t,o)}return new Ki(s,t)}F.gb=function(t){return Kc(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Pe(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Pe(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Pe(n,this.h^t.h)};function fg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Pe(n,t.h)}function Ls(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Pe(s,t.h)}jc.prototype.createWebChannel=jc.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;ql.NO_ERROR=0;ql.TIMEOUT=8;ql.HTTP_ERROR=6;II.COMPLETE="complete";EI.EventType=_a;_a.OPEN="a";_a.CLOSE="b";_a.ERROR="c";_a.MESSAGE="d";ot.prototype.listen=ot.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;sn.prototype.digest=sn.prototype.l;sn.prototype.reset=sn.prototype.reset;sn.prototype.update=sn.prototype.j;Pe.prototype.add=Pe.prototype.add;Pe.prototype.multiply=Pe.prototype.R;Pe.prototype.modulo=Pe.prototype.gb;Pe.prototype.compare=Pe.prototype.X;Pe.prototype.toNumber=Pe.prototype.ea;Pe.prototype.toString=Pe.prototype.toString;Pe.prototype.getBits=Pe.prototype.D;Pe.fromNumber=gn;Pe.fromString=nE;var Vx=function(){return new jc},Nx=function(){return $l()},Ku=ql,Ox=II,Mx=bs,pg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Lx=Ia,Qa=EI,Fx=je,Bx=sn,ei=Pe;const mg="@firebase/firestore";/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */let xi="10.0.0";/**
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
 */const Tr=new bl("@firebase/firestore");function Fh(){return Tr.logLevel}function Ux(t){Tr.setLogLevel(t)}function P(t,...e){if(Tr.logLevel<=pe.DEBUG){const n=e.map(_f);Tr.debug(`Firestore (${xi}): ${t}`,...n)}}function Ke(t,...e){if(Tr.logLevel<=pe.ERROR){const n=e.map(_f);Tr.error(`Firestore (${xi}): ${t}`,...n)}}function on(t,...e){if(Tr.logLevel<=pe.WARN){const n=e.map(_f);Tr.warn(`Firestore (${xi}): ${t}`,...n)}}function _f(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw Ke(e),new Error(e)}function Q(t,e){t||q()}function $x(t,e){t||q()}function L(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class it{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class jx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zx{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new it;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new it,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new it)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new rE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new rt(e)}}class Kx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Kx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.R=n.token,new Hx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Qx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class sE{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Qx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function iE(t){return t+"\0"}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ue(0,0))}static max(){return new W(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ho{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ho?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Ho{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new S(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new me(n)}static emptyPath(){return new me([])}}const Yx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Ho{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return Yx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new S(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new S(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new S(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(me.fromString(e))}static fromName(e){return new N(me.fromString(e).popFirst(5))}static empty(){return new N(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new me(e.slice()))}}/**
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
 */class oE{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function Bh(t){return t.fields.find(e=>e.kind===2)}function Kr(t){return t.fields.filter(e=>e.kind!==2)}oE.UNKNOWN_ID=-1;class Jx{constructor(e,n){this.fieldPath=e,this.kind=n}}class Gc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Gc(0,zt.min())}}function aE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new zt(s,N.empty(),e)}function cE(t){return new zt(t.readTime,t.key,-1)}class zt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zt(W.min(),N.empty(),-1)}static max(){return new zt(W.max(),N.empty(),-1)}}function yf(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const lE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==lE)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,r)=>{n(e)})}static reject(e){return new v((n,r)=>{r(e)})}static waitFor(e){return new v((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=v.resolve(!1);for(const r of e)n=n.next(s=>s?v.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new v((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new v((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Yl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new it,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new yo(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const s=vf(r.target.error);this.m.reject(new yo(e,s))}}static open(e,n,r,s){try{return new Yl(n,e.transaction(s,r))}catch(i){throw new yo(n,i)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new Zx(n)}}class en{constructor(e,n,r){this.name=e,this.version=n,this.S=r,en.D(et())===12.2&&Ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Qr(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Zy())return!1;if(en.C())return!0;const e=et(),n=en.D(e),r=0<n&&n<10,s=en.F(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new yo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new S(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new S(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new yo(e,o))},s.onupgradeneeded=i=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.B(o,s.transaction,i.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=Yl.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.p(),l)).catch(l=>(a.abort(l),v.reject(l))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Xx{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Qr(this.q.delete())}}class yo extends S{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Lr(t){return t.name==="IndexedDbTransactionError"}class Zx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Qr(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Qr(this.store.add(e))}get(e){return Qr(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Qr(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Qr(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.j(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new v((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new v((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const s=this.cursor(r);return this.j(s,(i,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.j(s,n)}X(e){const n=this.cursor({});return new v((r,s)=>{n.onerror=i=>{const o=vf(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new v((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Xx(a),l=n(a.primaryKey,a.value,c);if(l instanceof v){const u=l.catch(h=>(c.done(),v.reject(h)));r.push(u)}c.isDone?s():c.U===null?a.continue():a.continue(c.U)}}).next(()=>v.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Qr(t){return new v((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=vf(r.target.error);n(s)}})}let gg=!1;function vf(t){const e=en.D(et());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gg||(gg=!0,setTimeout(()=>{throw r},0)),r}}return t}class ek{constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){P("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){Lr(n)?P("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Mr(n)}await this.te(6e4)})}}class tk{constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let s=n,i=!0;return v.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(s,i)).next(a=>(P("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=cE(i);yf(o,r)>0&&(r=o)}),new zt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ot{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ot.ae=-1;function Ta(t){return t==null}function Wo(t){return t===0&&1/t==-1/0}function hE(t){return typeof t=="number"&&Number.isInteger(t)&&!Wo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function St(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_g(e)),e=nk(t.get(n),e);return _g(e)}function nk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function _g(t){return t+""}function _n(t){const e=t.length;if(Q(e>=2),e===2)return Q(t.charAt(0)===""&&t.charAt(1)===""),me.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&q(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:q()}i=o+2}return new me(r)}/**
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
 */const yg=["userId","batchId"];/**
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
 */function gc(t,e){return[t,St(e)]}function dE(t,e,n){return[t,St(e),n]}const rk={},sk=["prefixPath","collectionGroup","readTime","documentId"],ik=["prefixPath","collectionGroup","documentId"],ok=["collectionGroup","readTime","prefixPath","documentId"],ak=["canonicalId","targetId"],ck=["targetId","path"],lk=["path","targetId"],uk=["collectionId","parent"],hk=["indexId","uid"],dk=["uid","sequenceNumber"],fk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],pk=["indexId","uid","orderedDocumentKey"],mk=["userId","collectionPath","documentId"],gk=["userId","collectionPath","largestBatchId"],_k=["userId","collectionGroup","largestBatchId"],fE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],yk=[...fE,"documentOverlays"],pE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],mE=pE,vk=[...mE,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Uh extends uE{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function ct(t,e){const n=L(t);return en.O(n.ue,e)}/**
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
 */function vg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}}class Ya{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ig(this.data.getIterator())}getIteratorFrom(e){return new Ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Fs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Le(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _E extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function Ik(){return typeof atob<"u"}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _E("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Ek=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(Q(!!t),typeof t=="string"){let e=0;const n=Ek.exec(t);if(Q(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function Jl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function If(t){const e=t.mapValue.fields.__previous_value__;return Jl(e)?If(e):e}function Qo(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class wk{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Rr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},_c={nullValue:"NULL_VALUE"};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jl(t)?4:yE(t)?9007199254740991:10:q()}function Rn(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qo(t).isEqual(Qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ar(s.timestampValue),a=Ar(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),a=qe(i.doubleValue);return o===a?Wo(o)===Wo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(vg(o)!==vg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Rn(o[c],a[c])))return!1;return!0}(t,e);default:return q()}}function Yo(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Sr(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=qe(i.integerValue||i.doubleValue),c=qe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Eg(t.timestampValue,e.timestampValue);case 4:return Eg(Qo(t),Qo(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(i,o){const a=br(i),c=br(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ie(a[l],c[l]);if(u!==0)return u}return ie(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ie(qe(i.latitude),qe(o.latitude));return a!==0?a:ie(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Sr(a[l],c[l]);if(u)return u}return ie(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===fr.mapValue&&o===fr.mapValue)return 0;if(i===fr.mapValue)return 1;if(o===fr.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ie(c[h],u[h]);if(d!==0)return d;const f=Sr(a[c[h]],l[u[h]]);if(f!==0)return f}return ie(c.length,u.length)}(t.mapValue,e.mapValue);default:throw q()}}function Eg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Ar(t),r=Ar(e),s=ie(n.seconds,r.seconds);return s!==0?s:ie(n.nanos,r.nanos)}function fi(t){return $h(t)}function $h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return N.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$h(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$h(n.fields[o])}`;return s+"}"}(t.mapValue):q()}function ms(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qh(t){return!!t&&"integerValue"in t}function Jo(t){return!!t&&"arrayValue"in t}function wg(t){return!!t&&"nullValue"in t}function Tg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yc(t){return!!t&&"mapValue"in t}function vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Tk(t){return"nullValue"in t?_c:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ms(Rr.empty(),N.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:q()}function Ak(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ms(Rr.empty(),N.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?fr:q()}function Ag(t,e){const n=Sr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function bg(t,e){const n=Sr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=vo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(vo(this.value))}}function vE(t){const e=[];return Rs(t.fields,(n,r)=>{const s=new Ge([n]);if(yc(r)){const i=vE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
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
 */class Me{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,W.min(),W.min(),W.min(),pt.empty(),0)}static newFoundDocument(e,n,r,s){return new Me(e,1,n,W.min(),r,s,0)}static newNoDocument(e,n){return new Me(e,2,n,W.min(),W.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,W.min(),W.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pr{constructor(e,n){this.position=e,this.inclusive=n}}function Rg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=Sr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ti{constructor(e,n="asc"){this.field=e,this.dir=n}}function bk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class IE{}class he extends IE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Rk(e,n,r):n==="array-contains"?new Ck(e,r):n==="in"?new RE(e,r):n==="not-in"?new Dk(e,r):n==="array-contains-any"?new xk(e,r):new he(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Sk(e,r):new Pk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Sr(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(Sr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Re extends IE{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Re(e,n)}matches(e){return pi(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function pi(t){return t.op==="and"}function jh(t){return t.op==="or"}function Ef(t){return EE(t)&&pi(t)}function EE(t){for(const e of t.filters)if(e instanceof Re)return!1;return!0}function zh(t){if(t instanceof he)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(Ef(t))return t.filters.map(e=>zh(e)).join(",");{const e=t.filters.map(n=>zh(n)).join(",");return`${t.op}(${e})`}}function wE(t,e){return t instanceof he?function(r,s){return s instanceof he&&r.op===s.op&&r.field.isEqual(s.field)&&Rn(r.value,s.value)}(t,e):t instanceof Re?function(r,s){return s instanceof Re&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&wE(o,s.filters[a]),!0):!1}(t,e):void q()}function TE(t,e){const n=t.filters.concat(e);return Re.create(n,t.op)}function AE(t){return t instanceof he?function(n){return`${n.field.canonicalString()} ${n.op} ${fi(n.value)}`}(t):t instanceof Re?function(n){return n.op.toString()+" {"+n.getFilters().map(AE).join(" ,")+"}"}(t):"Filter"}class Rk extends he{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class Sk extends he{constructor(e,n){super(e,"in",n),this.keys=bE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Pk extends he{constructor(e,n){super(e,"not-in",n),this.keys=bE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class Ck extends he{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jo(n)&&Yo(n.arrayValue,this.value)}}class RE extends he{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yo(this.value.arrayValue,n)}}class Dk extends he{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yo(this.value.arrayValue,n)}}class xk extends he{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yo(this.value.arrayValue,r))}}/**
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
 */class kk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Kh(t,e=null,n=[],r=[],s=null,i=null,o=null){return new kk(t,e,n,r,s,i,o)}function gs(t){const e=L(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ta(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fi(r)).join(",")),e.he=n}return e.he}function Aa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}function Hc(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Wc(t,e){return t.filters.filter(n=>n instanceof he&&n.field.isEqual(e))}function Pg(t,e,n){let r=_c,s=!0;for(const i of Wc(t,e)){let o=_c,a=!0;switch(i.op){case"<":case"<=":o=Tk(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=_c}Ag({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Ag({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function Cg(t,e,n){let r=fr,s=!0;for(const i of Wc(t,e)){let o=fr,a=!0;switch(i.op){case">=":case">":o=Ak(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=fr}bg({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];bg({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Gn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function SE(t,e,n,r,s,i,o,a){return new Gn(t,e,n,r,s,i,o,a)}function ki(t){return new Gn(t)}function Dg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Xl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Tf(t){return t.collectionGroup!==null}function hs(t){const e=L(t);if(e.Pe===null){e.Pe=[];const n=Xl(e),r=wf(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new ti(n)),e.Pe.push(new ti(Ge.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ti(Ge.keyField(),i))}}}return e.Pe}function Bt(t){const e=L(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Kh(e.path,e.collectionGroup,hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of hs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ti(i.field,o))}const r=e.endAt?new Pr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Pr(e.startAt.position,e.startAt.inclusive):null;e.Ie=Kh(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function Gh(t,e){e.getFirstInequalityField(),Xl(t);const n=t.filters.concat([e]);return new Gn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qc(t,e,n){return new Gn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ba(t,e){return Aa(Bt(t),Bt(e))&&t.limitType===e.limitType}function PE(t){return`${gs(Bt(t))}|lt:${t.limitType}`}function Hh(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>AE(s)).join(", ")}]`),Ta(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fi(s)).join(",")),`Target(${r})`}(Bt(t))}; limitType=${t.limitType})`}function Ra(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):N.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Rg(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,hs(r),s)||r.endAt&&!function(o,a,c){const l=Rg(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,hs(r),s))}(t,e)}function CE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DE(t){return(e,n)=>{let r=!1;for(const s of hs(t)){const i=Vk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Vk(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Sr(c,l):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
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
 */class Fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gE(this.inner)}size(){return this.innerSize}}/**
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
 */const Nk=new Ve(N.comparator);function Lt(){return Nk}const xE=new Ve(N.comparator);function so(...t){let e=xE;for(const n of t)e=e.insert(n.key,n);return e}function kE(t){let e=xE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yn(){return Io()}function VE(){return Io()}function Io(){return new Fr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ok=new Ve(N.comparator),Mk=new Le(N.comparator);function oe(...t){let e=Mk;for(const n of t)e=e.add(n);return e}const Lk=new Le(ie);function Af(){return Lk}/**
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
 */function NE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wo(e)?"-0":e}}function OE(t){return{integerValue:""+t}}function ME(t,e){return hE(e)?OE(e):NE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Zl{constructor(){this._=void 0}}function Fk(t,e,n){return t instanceof mi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Jl(i)&&(i=If(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof _s?FE(t,e):t instanceof ys?BE(t,e):function(s,i){const o=LE(s,i),a=xg(o)+xg(s.Te);return qh(o)&&qh(s.Te)?OE(a):NE(s.serializer,a)}(t,e)}function Bk(t,e,n){return t instanceof _s?FE(t,e):t instanceof ys?BE(t,e):n}function LE(t,e){return t instanceof gi?function(r){return qh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mi extends Zl{}class _s extends Zl{constructor(e){super(),this.elements=e}}function FE(t,e){const n=UE(e);for(const r of t.elements)n.some(s=>Rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ys extends Zl{constructor(e){super(),this.elements=e}}function BE(t,e){let n=UE(e);for(const r of t.elements)n=n.filter(s=>!Rn(s,r));return{arrayValue:{values:n}}}class gi extends Zl{constructor(e,n){super(),this.serializer=e,this.Te=n}}function xg(t){return qe(t.integerValue||t.doubleValue)}function UE(t){return Jo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Sa{constructor(e,n){this.field=e,this.transform=n}}function Uk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof _s&&s instanceof _s||r instanceof ys&&s instanceof ys?di(r.elements,s.elements,Rn):r instanceof gi&&s instanceof gi?Rn(r.Te,s.Te):r instanceof mi&&s instanceof mi}(t.transform,e.transform)}class $k{constructor(e,n){this.version=e,this.transformResults=n}}class Be{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Be}static exists(e){return new Be(void 0,e)}static updateTime(e){return new Be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class eu{}function $E(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ni(t.key,Be.none()):new Vi(t.key,t.data,Be.none());{const n=t.data,r=pt.empty();let s=new Le(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Hn(t.key,r,new Mt(s.toArray()),Be.none())}}function qk(t,e,n){t instanceof Vi?function(s,i,o){const a=s.value.clone(),c=Vg(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Hn?function(s,i,o){if(!vc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Vg(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(qE(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof Vi?function(i,o,a,c){if(!vc(i.precondition,o))return a;const l=i.value.clone(),u=Ng(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hn?function(i,o,a,c){if(!vc(i.precondition,o))return a;const l=Ng(i.fieldTransforms,c,o),u=o.data;return u.setAll(qE(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return vc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function jk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=LE(r.transform,s||null);i!=null&&(n===null&&(n=pt.empty()),n.set(r.field,i))}return n||null}function kg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&di(r,s,(i,o)=>Uk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vi extends eu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hn extends eu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vg(t,e,n){const r=new Map;Q(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Bk(o,a,n[s]))}return r}function Ng(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Fk(i,o,e))}return r}class Ni extends eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bf extends eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rf{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=VE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=$E(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>kg(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>kg(n,r))}}class Sf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Q(e.mutations.length===r.length);let s=function(){return Ok}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Sf(e,n,r,s)}}/**
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
 */class Pf{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class zk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Je,fe;function jE(t){switch(t){default:return q();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function zE(t){if(t===void 0)return Ke("GRPC error has no .code"),I.UNKNOWN;switch(t){case Je.OK:return I.OK;case Je.CANCELLED:return I.CANCELLED;case Je.UNKNOWN:return I.UNKNOWN;case Je.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Je.INTERNAL:return I.INTERNAL;case Je.UNAVAILABLE:return I.UNAVAILABLE;case Je.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Je.NOT_FOUND:return I.NOT_FOUND;case Je.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Je.ABORTED:return I.ABORTED;case Je.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Je.DATA_LOSS:return I.DATA_LOSS;default:return q()}}(fe=Je||(Je={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Cf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ja}static getOrCreateInstance(){return Ja===null&&(Ja=new Cf),Ja}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ja=null;/**
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
 */function KE(){return new TextEncoder}/**
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
 */const Kk=new ei([4294967295,4294967295],0);function Og(t){const e=KE().encode(t),n=new Bx;return n.update(e),new Uint8Array(n.digest())}function Mg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ei([n,r],0),new ei([s,i],0)]}class Df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(r<0)throw new io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=ei.fromNumber(this.de)}Re(e,n,r){let s=e.add(n.multiply(ei.fromNumber(r)));return s.compare(Kk)===1&&(s=new ei([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Og(e),[r,s]=Mg(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Df(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Og(e),[r,s]=Mg(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ca.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pa(W.min(),s,new Ve(ie),Lt(),oe())}}class Ca{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ca(r,n,oe(),oe(),oe())}}/**
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
 */class Ic{constructor(e,n,r,s){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=s}}class GE{constructor(e,n){this.targetId=e,this.pe=n}}class HE{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Lg{constructor(){this.ye=0,this.we=Bg(),this.Se=tt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=oe(),n=oe(),r=oe();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:q()}}),new Ca(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=Bg()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Gk{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Lt(),this.$e=Fg(),this.Ue=new Ve(ie)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(Hc(a))if(i===0){const c=new N(a.path);this.ze(s,c,Me.newNoDocument(c,W.min()))}else Q(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(e,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=Cf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,g){var y,E,A,b,x,C;const B={localCacheCount:f,existenceFilterCount:g.count},K=g.unchangedNames;return K&&(B.bloomFilter={applied:h===0,hashCount:(y=K==null?void 0:K.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(b=(A=(E=K==null?void 0:K.bits)===null||E===void 0?void 0:E.bitmap)===null||A===void 0?void 0:A.length)!==null&&b!==void 0?b:0,padding:(C=(x=K==null?void 0:K.bits)===null||x===void 0?void 0:x.padding)!==null&&C!==void 0?C:0},d&&(B.bloomFilter.mightContain=d)),B}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=br(i).toUint8Array()}catch(h){if(h instanceof _E)return on("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new Df(c,o,a)}catch(h){return on(h instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return l.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&Hc(a.target)){const c=new N(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,Me.newNoDocument(c,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=oe();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new Pa(e,n,this.Ue,this.Ke,r);return this.Ke=Lt(),this.$e=Fg(),this.Ue=new Ve(ie),s}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Lg,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Le(ie),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Lg),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Fg(){return new Ve(N.comparator)}function Bg(){return new Ve(N.comparator)}const Hk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Wk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Qk=(()=>({and:"AND",or:"OR"}))();class Yk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wh(t,e){return t.useProto3Json||Ta(e)?e:{value:e}}function _i(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Jk(t,e){return _i(t,e.toTimestamp())}function We(t){return Q(!!t),W.fromTimestamp(function(n){const r=Ar(n);return new Ue(r.seconds,r.nanos)}(t))}function xf(t,e){return function(r){return new me(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function QE(t){const e=me.fromString(t);return Q(sw(e)),e}function Xo(t,e){return xf(t.databaseId,e.path)}function Tn(t,e){const n=QE(e);if(n.get(1)!==t.databaseId.projectId)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(JE(n))}function Qh(t,e){return xf(t.databaseId,e)}function YE(t){const e=QE(t);return e.length===4?me.emptyPath():JE(e)}function Zo(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JE(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ug(t,e,n){return{name:Xo(t,e),fields:n.value.mapValue.fields}}function XE(t,e,n){const r=Tn(t,e.name),s=We(e.updateTime),i=e.createTime?We(e.createTime):W.min(),o=new pt({mapValue:{fields:e.fields}}),a=Me.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Xk(t,e){return"found"in e?function(r,s){Q(!!s.found),s.found.name,s.found.updateTime;const i=Tn(r,s.found.name),o=We(s.found.updateTime),a=s.found.createTime?We(s.found.createTime):W.min(),c=new pt({mapValue:{fields:s.found.fields}});return Me.newFoundDocument(i,o,a,c)}(t,e):"missing"in e?function(r,s){Q(!!s.missing),Q(!!s.readTime);const i=Tn(r,s.missing),o=We(s.readTime);return Me.newNoDocument(i,o)}(t,e):q()}function Zk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Q(u===void 0||typeof u=="string"),tt.fromBase64String(u||"")):(Q(u===void 0||u instanceof Uint8Array),tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:zE(l.code);return new S(u,l.message||"")}(o);n=new HE(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Tn(t,r.document.name),i=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):W.min(),a=new pt({mapValue:{fields:r.document.fields}}),c=Me.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ic(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Tn(t,r.document),i=r.readTime?We(r.readTime):W.min(),o=Me.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Tn(t,r.document),i=r.removedTargetIds||[];n=new Ic([],i,s,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new zk(s,i),a=r.targetId;n=new GE(a,o)}}return n}function ea(t,e){let n;if(e instanceof Vi)n={update:Ug(t,e.key,e.value)};else if(e instanceof Ni)n={delete:Xo(t,e.key)};else if(e instanceof Hn)n={update:Ug(t,e.key,e.data),updateMask:iV(e.fieldMask)};else{if(!(e instanceof bf))return q();n={verify:Xo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof mi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _s)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ys)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gi)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Jk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(t,e.precondition)),n}function Yh(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Be.updateTime(We(i.updateTime)):i.exists!==void 0?Be.exists(i.exists):Be.none()}(e.currentDocument):Be.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let c=null;if("setToServerValue"in a)Q(a.setToServerValue==="REQUEST_TIME"),c=new mi;else if("appendMissingElements"in a){const u=a.appendMissingElements.values||[];c=new _s(u)}else if("removeAllFromArray"in a){const u=a.removeAllFromArray.values||[];c=new ys(u)}else"increment"in a?c=new gi(o,a.increment):q();const l=Ge.fromServerFormat(a.fieldPath);return new Sa(l,c)}(t,s)):[];if(e.update){e.update.name;const s=Tn(t,e.update.name),i=new pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const l=c.fieldPaths||[];return new Mt(l.map(u=>Ge.fromServerFormat(u)))}(e.updateMask);return new Hn(s,i,o,n,r)}return new Vi(s,i,n,r)}if(e.delete){const s=Tn(t,e.delete);return new Ni(s,n)}if(e.verify){const s=Tn(t,e.verify);return new bf(s,n)}return q()}function eV(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?We(s.updateTime):We(i);return o.isEqual(W.min())&&(o=We(i)),new $k(o,s.transformResults||[])}(n,e))):[]}function ZE(t,e){return{documents:[Qh(t,e.path)]}}function ew(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return rw(Re.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:qs(h.field),direction:nV(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Wh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function tw(t){let e=YE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Q(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=nw(h);return d instanceof Re&&Ef(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new ti(js(g.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ta(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Pr(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Pr(f,d)}(n.endAt)),SE(e,s,o,i,a,"F",c,l)}function tV(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=js(n.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=js(n.unaryFilter.field);return he.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=js(n.unaryFilter.field);return he.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=js(n.unaryFilter.field);return he.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return he.create(js(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Re.create(n.compositeFilter.filters.map(r=>nw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function nV(t){return Hk[t]}function rV(t){return Wk[t]}function sV(t){return Qk[t]}function qs(t){return{fieldPath:t.canonicalString()}}function js(t){return Ge.fromServerFormat(t.fieldPath)}function rw(t){return t instanceof he?function(n){if(n.op==="=="){if(Tg(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NAN"}};if(wg(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tg(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NAN"}};if(wg(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(n.field),op:rV(n.op),value:n.value}}}(t):t instanceof Re?function(n){const r=n.getFilters().map(s=>rw(s));return r.length===1?r[0]:{compositeFilter:{op:sV(n.op),filters:r}}}(t):q()}function iV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mn{constructor(e,n,r,s,i=W.min(),o=W.min(),a=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iw{constructor(e){this.ct=e}}function oV(t,e){let n;if(e.document)n=XE(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),s=Is(e.noDocument.readTime);n=Me.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const r=N.fromSegments(e.unknownDocument.path),s=Is(e.unknownDocument.version);n=Me.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(s){const i=new Ue(s[0],s[1]);return W.fromTimestamp(i)}(e.readTime)),n}function $g(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Yc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Xo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:_i(i,o.version.toTimestamp()),createTime:_i(i,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:vs(e.version)};else{if(!e.isUnknownDocument())return q();r.unknownDocument={path:n.path.toArray(),version:vs(e.version)}}return r}function Yc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function vs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Is(t){const e=new Ue(t.seconds,t.nanoseconds);return W.fromTimestamp(e)}function Yr(t,e){const n=(e.baseMutations||[]).map(i=>Yh(t.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Yh(t.ct,i)),s=Ue.fromMillis(e.localWriteTimeMs);return new Rf(e.batchId,s,n,r)}function oo(t){const e=Is(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Is(t.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(i){return i.documents!==void 0}(t.query)?function(i){return Q(i.documents.length===1),Bt(ki(YE(i.documents[0])))}(t.query):function(i){return Bt(tw(i))}(t.query),new Mn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,tt.fromBase64String(t.resumeToken))}function ow(t,e){const n=vs(e.snapshotVersion),r=vs(e.lastLimboFreeSnapshotVersion);let s;s=Hc(e.target)?ZE(t.ct,e.target):ew(t.ct,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:gs(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function kf(t){const e=tw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qc(e,e.limit,"L"):e}function Gu(t,e){return new Pf(e.largestBatchId,Yh(t.ct,e.overlayMutation))}function qg(t,e){const n=e.path.lastSegment();return[t,St(e.path.popLast()),n]}function jg(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:vs(r.readTime),documentKey:St(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class aV{getBundleMetadata(e,n){return zg(e).get(n).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Is(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,n){return zg(e).put(function(s){return{bundleId:s.id,createTime:vs(We(s.createTime)),version:s.version}}(n))}getNamedQuery(e,n){return Kg(e).get(n).next(r=>{if(r)return function(i){return{name:i.name,query:kf(i.bundledQuery),readTime:Is(i.readTime)}}(r)})}saveNamedQuery(e,n){return Kg(e).put(function(s){return{name:s.name,readTime:vs(We(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function zg(t){return ct(t,"bundles")}function Kg(t){return ct(t,"namedQueries")}/**
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
 */class tu{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new tu(e,r)}getOverlay(e,n){return Gi(e).get(qg(this.userId,n)).next(r=>r?Gu(this.serializer,r):null)}getOverlays(e,n){const r=yn();return v.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new Pf(n,o);s.push(this.ht(e,a))}),v.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(St(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Gi(e).J("collectionPathOverlayIndex",a))}),v.waitFor(i)}getOverlaysForCollection(e,n,r){const s=yn(),i=St(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Gi(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Gu(this.serializer,c);s.set(l.getKey(),l)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=yn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Gi(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Gu(this.serializer,l);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>i)}ht(e,n){return Gi(e).put(function(s,i,o){const[a,c,l]=qg(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ea(s.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Gi(t){return ct(t,"documentOverlays")}/**
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
 */class Jr{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(qe(e.integerValue));else if("doubleValue"in e){const r=qe(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Wo(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(br(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?yE(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):q()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const s of Object.keys(r))this.Rt(s,n),this.It(r[s],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const s of r)this.It(s,n)}gt(e,n){this.Et(n,37),N.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Jr.bt=new Jr;function cV(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Gg(t){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=cV(255&r[i]);if(s+=o,o!==8)break}return s}(t);return Math.ceil(e/8)}class lV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.vt(r.value),r=n.next();this.Ct()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const s=n.codePointAt(0);this.vt(240|s>>>18),this.vt(128|63&s>>>12),this.vt(128|63&s>>>6),this.vt(128|63&s)}}this.Ct()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const s=n.codePointAt(0);this.Mt(240|s>>>18),this.Mt(128|63&s>>>12),this.Mt(128|63&s>>>6),this.Mt(128|63&s)}}this.xt()}Bt(e){const n=this.Lt(e),r=Gg(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}qt(e){const n=this.Lt(e),r=Gg(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}vt(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class uV{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class hV{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Hi{constructor(){this.Gt=new lV,this.zt=new uV(this.Gt),this.jt=new hV(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class Xr{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Xr(this.indexId,this.documentKey,this.arrayValue,r)}}function er(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Hg(t.arrayValue,e.arrayValue),n!==0?n:(n=Hg(t.directionalValue,e.directionalValue),n!==0?n:N.comparator(t.documentKey,e.documentKey)))}function Hg(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class dV{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){Q(e.collectionGroup===this.collectionId);const n=Bh(e);if(n!==void 0&&!this.tn(n))return!1;const r=Kr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.tn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt!==void 0){if(!s.has(this.Xt.field.canonicalString())){const a=r[i];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function aw(t){var e,n;if(Q(t instanceof he||t instanceof Re),t instanceof he){if(t instanceof RE){const s=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>he.create(t.field,"==",i)))||[];return Re.create(s,"or")}return t}const r=t.filters.map(s=>aw(s));return Re.create(r,t.op)}function fV(t){if(t.getFilters().length===0)return[];const e=Zh(aw(t));return Q(cw(e)),Jh(e)||Xh(e)?[e]:e.getFilters()}function Jh(t){return t instanceof he}function Xh(t){return t instanceof Re&&Ef(t)}function cw(t){return Jh(t)||Xh(t)||function(n){if(n instanceof Re&&jh(n)){for(const r of n.getFilters())if(!Jh(r)&&!Xh(r))return!1;return!0}return!1}(t)}function Zh(t){if(Q(t instanceof he||t instanceof Re),t instanceof he)return t;if(t.filters.length===1)return Zh(t.filters[0]);const e=t.filters.map(r=>Zh(r));let n=Re.create(e,t.op);return n=Jc(n),cw(n)?n:(Q(n instanceof Re),Q(pi(n)),Q(n.filters.length>1),n.filters.reduce((r,s)=>Vf(r,s)))}function Vf(t,e){let n;return Q(t instanceof he||t instanceof Re),Q(e instanceof he||e instanceof Re),n=t instanceof he?e instanceof he?function(s,i){return Re.create([s,i],"and")}(t,e):Wg(t,e):e instanceof he?Wg(e,t):function(s,i){if(Q(s.filters.length>0&&i.filters.length>0),pi(s)&&pi(i))return TE(s,i.getFilters());const o=jh(s)?s:i,a=jh(s)?i:s,c=o.filters.map(l=>Vf(l,a));return Re.create(c,"or")}(t,e),Jc(n)}function Wg(t,e){if(pi(e))return TE(e,t.getFilters());{const n=e.filters.map(r=>Vf(t,r));return Re.create(n,"or")}}function Jc(t){if(Q(t instanceof he||t instanceof Re),t instanceof he)return t;const e=t.getFilters();if(e.length===1)return Jc(e[0]);if(EE(t))return t;const n=e.map(s=>Jc(s)),r=[];return n.forEach(s=>{s instanceof he?r.push(s):s instanceof Re&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Re.create(r,t.op)}/**
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
 */class pV{constructor(){this.sn=new Nf}addToCollectionParentIndex(e,n){return this.sn.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(zt.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class Nf{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Le(me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(me.comparator)).toArray()}}/**
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
 */const Xa=new Uint8Array(0);class mV{constructor(e,n){this.user=e,this.databaseId=n,this.on=new Nf,this._n=new Fr(r=>gs(r),(r,s)=>Aa(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const i={collectionId:r,parent:St(s)};return Qg(e).put(i)}return v.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[iE(n),""],!1,!0);return Qg(e).G(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(_n(o.parent))}return r})}addFieldIndex(e,n){const r=Za(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=Qi(e);return i.next(a=>{o.put(jg(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=Za(e),s=Qi(e),i=Wi(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Wi(e);let s=!0;const i=new Map;return v.forEach(this.an(n),o=>this.un(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=oe();const a=[];return v.forEach(i,(c,l)=>{P("IndexedDbIndexManager",`Using index ${function(x){return`id=${x.indexId}|cg=${x.collectionGroup}|f=${x.fields.map(C=>`${C.fieldPath}:${C.kind}`).join(",")}`}(c)} to execute ${gs(n)}`);const u=function(x,C){const B=Bh(C);if(B===void 0)return null;for(const K of Wc(x,B.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(l,c),h=function(x,C){const B=new Map;for(const K of Kr(C))for(const ce of Wc(x,K.fieldPath))switch(ce.op){case"==":case"in":B.set(K.fieldPath.canonicalString(),ce.value);break;case"not-in":case"!=":return B.set(K.fieldPath.canonicalString(),ce.value),Array.from(B.values())}return null}(l,c),d=function(x,C){const B=[];let K=!0;for(const ce of Kr(C)){const U=ce.kind===0?Pg(x,ce.fieldPath,x.startAt):Cg(x,ce.fieldPath,x.startAt);B.push(U.value),K&&(K=U.inclusive)}return new Pr(B,K)}(l,c),f=function(x,C){const B=[];let K=!0;for(const ce of Kr(C)){const U=ce.kind===0?Cg(x,ce.fieldPath,x.endAt):Pg(x,ce.fieldPath,x.endAt);B.push(U.value),K&&(K=U.inclusive)}return new Pr(B,K)}(l,c),g=this.cn(c,l,d),y=this.cn(c,l,f),E=this.ln(c,l,h),A=this.hn(c.indexId,u,g,d.inclusive,y,f.inclusive,E);return v.forEach(A,b=>r.H(b,n.limit).next(x=>{x.forEach(C=>{const B=N.fromSegments(C.documentKey);o.has(B)||(o=o.add(B),a.push(B))})}))}).next(()=>a)}return v.resolve(null)})}an(e){let n=this._n.get(e);return n||(e.filters.length===0?n=[e]:n=fV(Re.create(e.filters,"and")).map(r=>Kh(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,n),n)}hn(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),l=c/(n!=null?n.length:1),u=[];for(let h=0;h<c;++h){const d=n?this.Pn(n[h/l]):Xa,f=this.In(e,d,r[h%l],s),g=this.Tn(e,d,i[h%l],o),y=a.map(E=>this.In(e,d,E,!0));u.push(...this.createRange(f,g,y))}return u}In(e,n,r,s){const i=new Xr(e,N.empty(),n,r);return s?i:i.Jt()}Tn(e,n,r,s){const i=new Xr(e,N.empty(),n,r);return s?i.Jt():i}un(e,n){const r=new dV(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.an(n);return v.forEach(s,i=>this.un(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let l=new Le(Ge.comparator),u=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?u=!0:l=l.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(l=l.add(h.field));return l.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&s.length>1&&r===2?1:r)}En(e,n){const r=new Hi;for(const s of Kr(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.Ht(s.kind);Jr.bt.Pt(i,o)}return r.Wt()}Pn(e){const n=new Hi;return Jr.bt.Pt(e,n.Ht(0)),n.Wt()}dn(e,n){const r=new Hi;return Jr.bt.Pt(ms(this.databaseId,n),r.Ht(function(i){const o=Kr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,n,r){if(r===null)return[];let s=[];s.push(new Hi);let i=0;for(const o of Kr(e)){const a=r[i++];for(const c of s)if(this.An(n,o.fieldPath)&&Jo(a))s=this.Rn(s,o,a);else{const l=c.Ht(o.kind);Jr.bt.Pt(a,l)}}return this.Vn(s)}cn(e,n,r){return this.ln(e,n,r.position)}Vn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}Rn(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new Hi;c.seed(a.Wt()),Jr.bt.Pt(o,c.Ht(n.kind)),i.push(c)}return i}An(e,n){return!!e.filters.find(r=>r instanceof he&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Za(e),s=Qi(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(i=>{const o=[];return v.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,h){const d=h?new Gc(h.sequenceNumber,new zt(Is(h.readTime),new N(_n(h.documentKey)),h.largestBatchId)):Gc.empty(),f=u.fields.map(([g,y])=>new Jx(Ge.fromServerFormat(g),y));return new oE(u.indexId,u.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ie(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=Za(e),i=Qi(e);return this.mn(e).next(o=>s.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>v.forEach(a,c=>i.put(jg(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return v.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),v.forEach(a,c=>this.fn(e,s,c).next(l=>{const u=this.gn(i,c);return l.isEqual(u)?v.resolve():this.pn(e,i,c,l,u)}))))})}yn(e,n,r,s){return Wi(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.dn(r,n.key),documentKey:n.key.path.toArray()})}wn(e,n,r,s){return Wi(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.dn(r,n.key),n.key.path.toArray()])}fn(e,n,r){const s=Wi(e);let i=new Le(er);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,n)])},(o,a)=>{i=i.add(new Xr(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}gn(e,n){let r=new Le(er);const s=this.En(n,e);if(s==null)return r;const i=Bh(n);if(i!=null){const o=e.data.field(i.fieldPath);if(Jo(o))for(const a of o.arrayValue.values||[])r=r.add(new Xr(n.indexId,e.key,this.Pn(a),s))}else r=r.add(new Xr(n.indexId,e.key,Xa,s));return r}pn(e,n,r,s,i){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(c,l,u,h,d){const f=c.getIterator(),g=l.getIterator();let y=Fs(f),E=Fs(g);for(;y||E;){let A=!1,b=!1;if(y&&E){const x=u(y,E);x<0?b=!0:x>0&&(A=!0)}else y!=null?b=!0:A=!0;A?(h(E),E=Fs(g)):b?(d(y),y=Fs(f)):(y=Fs(f),E=Fs(g))}}(s,i,er,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.wn(e,n,r,a))}),v.waitFor(o)}mn(e){let n=1;return Qi(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>er(o,a)).filter((o,a,c)=>!a||er(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=er(o,e),c=er(o,n);if(a===0)s[0]=e.Jt();else if(a>0&&c<0)s.push(o),s.push(o.Jt());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.Sn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Xa,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Xa,[]];i.push(IDBKeyRange.bound(a,c))}return i}Sn(e,n){return er(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Yg)}getMinOffset(e,n){return v.mapArray(this.an(n),r=>this.un(e,r).next(s=>s||q())).next(Yg)}}function Qg(t){return ct(t,"collectionParents")}function Wi(t){return ct(t,"indexEntries")}function Za(t){return ct(t,"indexConfiguration")}function Qi(t){return ct(t,"indexState")}function Yg(t){Q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;yf(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new zt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Jg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class kt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function lw(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(u,h,d)=>(a++,d.delete()));i.push(c.next(()=>{Q(a===1)}));const l=[];for(const u of n.mutations){const h=dE(e,u.key.path,n.batchId);i.push(s.delete(h)),l.push(u.key)}return v.waitFor(i).next(()=>l)}function Xc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw q();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(41943040,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);class nu{constructor(e,n,r,s){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=s,this.bn={}}static lt(e,n,r,s){Q(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new nu(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return tr(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=zs(e),o=tr(e);return o.add({}).next(a=>{Q(typeof a=="number");const c=new Rf(a,n,r,s),l=function(f,g,y){const E=y.baseMutations.map(b=>ea(f.ct,b)),A=y.mutations.map(b=>ea(f.ct,b));return{userId:g,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:E,mutations:A}}(this.serializer,this.userId,c),u=[];let h=new Le((d,f)=>ie(d.canonicalString(),f.canonicalString()));for(const d of s){const f=dE(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(i.put(f,rk))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),v.waitFor(u).next(()=>c)})}lookupMutationBatch(e,n){return tr(e).get(n).next(r=>r?(Q(r.userId===this.userId),Yr(this.serializer,r)):null)}Dn(e,n){return this.bn[n]?v.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.bn[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return tr(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(Q(a.batchId>=r),i=Yr(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return tr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return tr(e).G("userMutationsIndex",n).next(r=>r.map(s=>Yr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=gc(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return zs(e).Z({range:s},(o,a,c)=>{const[l,u,h]=o,d=_n(u);if(l===this.userId&&n.path.isEqual(d))return tr(e).get(h).next(f=>{if(!f)throw q();Q(f.userId===this.userId),i.push(Yr(this.serializer,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ie);const s=[];return n.forEach(i=>{const o=gc(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=zs(e).Z({range:a},(l,u,h)=>{const[d,f,g]=l,y=_n(f);d===this.userId&&i.path.isEqual(y)?r=r.add(g):h.done()});s.push(c)}),v.waitFor(s).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=gc(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Le(ie);return zs(e).Z({range:o},(c,l,u)=>{const[h,d,f]=c,g=_n(d);h===this.userId&&r.isPrefixOf(g)?g.length===s&&(a=a.add(f)):u.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],s=[];return n.forEach(i=>{s.push(tr(e).get(i).next(o=>{if(o===null)throw q();Q(o.userId===this.userId),r.push(Yr(this.serializer,o))}))}),v.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return lw(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),v.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return v.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return zs(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=_n(i[1]);s.push(c)}else a.done()}).next(()=>{Q(s.length===0)})})}containsKey(e,n){return uw(e,this.userId,n)}Fn(e){return hw(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function uw(t,e,n){const r=gc(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return zs(t).Z({range:i,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===s&&(o=!0),l.done()}).next(()=>o)}function tr(t){return ct(t,"mutations")}function zs(t){return ct(t,"documentMutations")}function hw(t){return ct(t,"mutationQueues")}/**
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
 */class Es{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Es(0)}static On(){return new Es(-1)}}/**
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
 */class gV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Nn(e).next(n=>{const r=new Es(n.highestTargetId);return n.highestTargetId=r.next(),this.Bn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(n=>W.fromTimestamp(new Ue(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Nn(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Bn(e,s)))}addTargetData(e,n){return this.Ln(e,n).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(n,r),this.Bn(e,r))))}updateTargetData(e,n){return this.Ln(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Bs(e).delete(n.targetId)).next(()=>this.Nn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return Bs(e).Z((o,a)=>{const c=oo(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>v.waitFor(i)).next(()=>s)}forEachTarget(e,n){return Bs(e).Z((r,s)=>{const i=oo(s);n(i)})}Nn(e){return Xg(e).get("targetGlobalKey").next(n=>(Q(n!==null),n))}Bn(e,n){return Xg(e).put("targetGlobalKey",n)}Ln(e,n){return Bs(e).put(ow(this.serializer,n))}kn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=gs(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Bs(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const l=oo(a);Aa(n,l.target)&&(i=l,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=hr(e);return n.forEach(o=>{const a=St(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),v.waitFor(s)}removeMatchingKeys(e,n,r){const s=hr(e);return v.forEach(n,i=>{const o=St(i.path);return v.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=hr(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=hr(e);let i=oe();return s.Z({range:r,Y:!0},(o,a,c)=>{const l=_n(o[1]),u=new N(l);i=i.add(u)}).next(()=>i)}containsKey(e,n){const r=St(n.path),s=IDBKeyRange.bound([r],[iE(r)],!1,!0);let i=0;return hr(e).Z({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,l)=>{o!==0&&(i++,l.done())}).next(()=>i>0)}ut(e,n){return Bs(e).get(n).next(r=>r?oo(r):null)}}function Bs(t){return ct(t,"targets")}function Xg(t){return ct(t,"targetGlobal")}function hr(t){return ct(t,"targetDocuments")}/**
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
 */function Zg([t,e],[n,r]){const s=ie(t,n);return s===0?ie(e,r):s}class _V{constructor(e){this.qn=e,this.buffer=new Le(Zg),this.Qn=0}Kn(){return++this.Qn}$n(e){const n=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Zg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Lr(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Mr(n)}await this.Wn(3e5)})}}class vV{constructor(e,n){this.Gn=e,this.params=n}calculateTargetCount(e,n){return this.Gn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return v.resolve(Ot.ae);const r=new _V(n);return this.Gn.forEachTarget(e,s=>r.$n(s.sequenceNumber)).next(()=>this.Gn.jn(e,s=>r.$n(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Gn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Gn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(Jg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jg):this.Hn(e,n))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,n){let r,s,i,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Fh()<=pe.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function IV(t,e){return new vV(t,e)}/**
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
 */class EV{constructor(e,n){this.db=e,this.garbageCollector=IV(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Jn(e){let n=0;return this.jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}jn(e,n){return this.Yn(e,(r,s)=>n(s))}addReference(e,n,r){return ec(e,r)}removeReference(e,n,r){return ec(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ec(e,n)}Zn(e,n){return function(s,i){let o=!1;return hw(s).X(a=>uw(s,a,i).next(c=>(c&&(o=!0),v.resolve(!c)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Zn(e,o).next(l=>{if(!l)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),hr(e).delete(function(h){return[0,St(h.path)]}(o))))});s.push(c)}}).next(()=>v.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ec(e,n)}Yn(e,n){const r=hr(e);let s,i=Ot.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(i!==Ot.ae&&n(new N(_n(s)),i),i=l,s=c):i=Ot.ae}).next(()=>{i!==Ot.ae&&n(new N(_n(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ec(t,e){return hr(t).put(function(r,s){return{targetId:0,path:St(r.path),sequenceNumber:s}}(e,t.currentSequenceNumber))}/**
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
 */class dw{constructor(){this.changes=new Fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return jr(e).put(r)}removeEntry(e,n,r){return jr(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Yc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=Me.newInvalidDocument(n);return jr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Yi(n))},(s,i)=>{r=this.er(n,i)}).next(()=>r)}tr(e,n){let r={size:0,document:Me.newInvalidDocument(n)};return jr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Yi(n))},(s,i)=>{r={document:this.er(n,i),size:Xc(i)}}).next(()=>r)}getEntries(e,n){let r=Lt();return this.nr(e,n,(s,i)=>{const o=this.er(s,i);r=r.insert(s,o)}).next(()=>r)}rr(e,n){let r=Lt(),s=new Ve(N.comparator);return this.nr(e,n,(i,o)=>{const a=this.er(i,o);r=r.insert(i,a),s=s.insert(i,Xc(o))}).next(()=>({documents:r,ir:s}))}nr(e,n,r){if(n.isEmpty())return v.resolve();let s=new Le(n_);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Yi(s.first()),Yi(s.last())),o=s.getIterator();let a=o.getNext();return jr(e).Z({index:"documentKeyIndex",range:i},(c,l,u)=>{const h=N.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&n_(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?u.W(Yi(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,s){const i=n.path,o=[i.popLast().toArray(),i.lastSegment(),Yc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return jr(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=Lt();for(const u of c){const h=this.er(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Ra(n,h)||s.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,n,r,s){let i=Lt();const o=t_(n,r),a=t_(n,zt.max());return jr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.er(N.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(h.key,h),i.size===s&&u.done()}).next(()=>i)}newChangeBuffer(e){return new TV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return e_(e).get("remoteDocumentGlobalKey").next(n=>(Q(!!n),n))}Xn(e,n){return e_(e).put("remoteDocumentGlobalKey",n)}er(e,n){if(n){const r=oV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return Me.newInvalidDocument(e)}}function fw(t){return new wV(t)}class TV extends dw{constructor(e,n){super(),this.sr=e,this.trackRemovals=n,this._r=new Fr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new Le((i,o)=>ie(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this._r.get(i);if(n.push(this.sr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=$g(this.sr.serializer,o);s=s.add(i.path.popLast());const l=Xc(c);r+=l-a.size,n.push(this.sr.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=$g(this.sr.serializer,o.convertToNoDocument(W.min()));n.push(this.sr.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.sr.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.sr.updateMetadata(e,r)),v.waitFor(n)}getFromCache(e,n){return this.sr.tr(e,n).next(r=>(this._r.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.sr.rr(e,n).next(({documents:r,ir:s})=>(s.forEach((i,o)=>{this._r.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function e_(t){return ct(t,"remoteDocumentGlobal")}function jr(t){return ct(t,"remoteDocumentsV14")}function Yi(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function t_(t,e){const n=e.documentKey.path.toArray();return[t,Yc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function n_(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=ie(n[i],r[i]),s)return s;return s=ie(n.length,r.length),s||(s=ie(n[n.length-2],r[r.length-2]),s||ie(n[n.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class AV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pw{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Eo(r.mutation,s,Mt.empty(),Ue.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=yn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=so();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Lt();const o=Io(),a=function(){return Io()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Hn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Eo(u.mutation,l,u.mutation.getFieldMask(),Ue.now())):o.set(l.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new AV(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Io();let s=new Ve((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Mt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||oe()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=VE();u.forEach(d=>{if(!i.has(d)){const f=$E(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return N.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):v.resolve(yn());let a=-1,c=i;return o.next(l=>v.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?v.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:kE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let s=so();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=so();return this.indexManager.getCollectionParents(e,s).next(o=>v.forEach(o,a=>{const c=function(u,h){return new Gn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Me.newInvalidDocument(l)))});let o=so();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Eo(l.mutation,c,Mt.empty(),Ue.now()),Ra(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class bV{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return v.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:We(s.createTime)}}(n)),v.resolve()}getNamedQuery(e,n){return v.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:kf(s.bundledQuery),readTime:We(s.readTime)}}(n)),v.resolve()}}/**
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
 */class RV{constructor(){this.overlays=new Ve(N.comparator),this.cr=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yn();return v.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const s=yn(),i=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return v.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=yn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return v.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Pf(n,r));let i=this.cr.get(n);i===void 0&&(i=oe(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class Of{constructor(){this.lr=new Le(nt.hr),this.Pr=new Le(nt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new nt(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new N(new me([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new N(new me([])),r=new nt(n,e),s=new nt(n,e+1);let i=oe();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return N.comparator(e.key,n.key)||ie(e.mr,n.mr)}static Ir(e,n){return ie(e.mr,n.mr)||N.comparator(e.key,n.key)}}/**
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
 */class SV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Le(nt.hr)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rf(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new nt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ie);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),v.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;N.isDocumentKey(i)||(i=i.child(""));const o=new nt(new N(i),0);let a=new Le(ie);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),v.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Q(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return v.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new nt(n,0),s=this.pr.firstAfterOrEqual(r);return v.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class PV{constructor(e){this.Dr=e,this.docs=function(){return new Ve(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let r=Lt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Me.newInvalidDocument(s))}),v.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Lt();const o=n.path,a=new N(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||yf(cE(u),r)<=0||(s.has(u.key)||Ra(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(e,n,r,s){q()}vr(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CV(this)}getSize(e){return v.resolve(this.size)}}class CV extends dw{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class DV{constructor(e){this.persistence=e,this.Cr=new Fr(n=>gs(n),Aa),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Of,this.targetCount=0,this.Or=Es.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),v.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Ln(n),v.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),v.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.Mr.containsKey(n))}}/**
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
 */class mw{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Ot(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new DV(this),this.indexManager=new pV,this.remoteDocumentCache=function(s){return new PV(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new iw(n),this.Qr=new bV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new SV(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const s=new xV(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return v.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class xV extends uE{constructor(e){super(),this.currentSequenceNumber=e}}class ru{constructor(e){this.persistence=e,this.Wr=new Of,this.Gr=null}static zr(e){return new ru(e)}get jr(){if(this.Gr)return this.Gr;throw q()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),v.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.jr,r=>{const s=N.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,W.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return v.or([()=>v.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class kV{constructor(e){this.serializer=e}B(e,n,r,s){const i=new Yl("createOrUpgrade",n);r<1&&s>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yg,{unique:!0}),c.createObjectStore("documentMutations")}(e),r_(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=v.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),r_(e)),o=o.next(()=>function(c){const l=c.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,l){return l.store("mutations").G().next(u=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yg,{unique:!0});const h=l.store("mutations"),d=u.map(f=>h.put(f));return v.waitFor(d)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Yr(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(i)))),r<7&&s>=7&&(o=o.next(()=>this.Xr(i))),r<8&&s>=8&&(o=o.next(()=>this.ei(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.ti(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const l=c.createObjectStore("documentOverlays",{keyPath:mk});l.createIndex("collectionPathOverlayIndex",gk,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",_k,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const l=c.createObjectStore("remoteDocumentsV14",{keyPath:sk});l.createIndex("documentKeyIndex",ik),l.createIndex("collectionGroupIndex",ok)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ri(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:hk}).createIndex("sequenceNumberIndex",dk,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:fk}).createIndex("documentKeyIndex",pk,{unique:!1})}(e))),o}Zr(e){let n=0;return e.store("remoteDocuments").Z((r,s)=>{n+=Xc(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(s=>v.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>v.forEach(a,c=>{Q(c.userId===i.userId);const l=Yr(this.serializer,c);return lw(e,i.userId,l).next(()=>{})}))}))}Xr(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new me(o),l=function(h){return[0,St(h)]}(c);i.push(n.get(l).next(u=>u?v.resolve():(h=>n.put({targetId:0,path:St(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>v.waitFor(i))})}ei(e,n){e.createObjectStore("collectionParents",{keyPath:uk});const r=n.store("collectionParents"),s=new Nf,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:St(c)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new me(o);return i(c.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,c],l)=>{const u=_n(a);return i(u.popLast())}))}ti(e){const n=e.store("targets");return n.Z((r,s)=>{const i=oo(s),o=ow(this.serializer,i);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=n.store("remoteDocumentsV14"),c=function(h){return h.document?new N(me.fromString(h.document.name).popFirst(5)):h.noDocument?N.fromSegments(h.noDocument.path):h.unknownDocument?N.fromSegments(h.unknownDocument.path):q()}(o).path.toArray(),l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>v.waitFor(s))}ri(e,n){const r=n.store("mutations"),s=fw(this.serializer),i=new mw(ru.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:oe();Yr(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),v.forEach(a,(c,l)=>{const u=new rt(l),h=tu.lt(this.serializer,u),d=i.getIndexManager(u),f=nu.lt(u,this.serializer,d,i.referenceDelegate);return new pw(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Uh(n,Ot.ae),c).next()})})}}function r_(t){t.createObjectStore("targetDocuments",{keyPath:ck}).createIndex("documentTargetsIndex",lk,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ak,{unique:!0}),t.createObjectStore("targetGlobal")}const Hu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Mf{constructor(e,n,r,s,i,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=i,this.window=o,this.document=a,this.si=l,this.oi=u,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!Mf.v())throw new S(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new EV(this,s),this.Pi=n+"main",this.serializer=new iw(c),this.Ii=new en(this.Pi,this._i,new kV(this.serializer)),this.kr=new gV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=fw(this.serializer),this.Qr=new aV,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,u===!1&&Ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(I.FAILED_PRECONDITION,Hu);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new Ot(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>tc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(n=>this.isPrimary&&!n?this.gi(e).next(()=>!1):!!n&&this.pi(e).next(()=>!0))).catch(e=>{if(Lr(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return Ji(e).get("owner").next(n=>v.resolve(this.yi(n)))}wi(e){return tc(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ct(n,"clientMetadata");return r.G().next(s=>{const i=this.Di(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return v.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const n of e)this.Ti.removeItem(this.vi(n.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?v.resolve(!0):Ji(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.yi(n)&&this.networkEnabled)return!0;if(!this.yi(n)){if(!n.allowTabSynchronization)throw new S(I.FAILED_PRECONDITION,Hu);return!1}}return!(!this.networkEnabled||!this.inForeground)||tc(e).G().next(r=>this.Di(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Uh(e,Ot.ae);return this.gi(n).next(()=>this.wi(n))}),this.Ii.close(),this.Oi()}Di(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>tc(e).G().next(n=>this.Di(n,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,n){return nu.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new mV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return tu.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=function(c){return c===15?vk:c===14?mE:c===13?pE:c===12?yk:c===11?fE:void q()}(this._i);let o;return this.Ii.runTransaction(e,s,i,a=>(o=new Uh(a,this.Br?this.Br.next():Ot.ae),n==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw Ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new S(I.FAILED_PRECONDITION,lE);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return Ji(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.yi(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new S(I.FAILED_PRECONDITION,Hu)})}pi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ji(e).put("owner",n)}static v(){return en.v()}gi(e){const n=Ji(e);return n.get("owner").next(r=>this.yi(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):v.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const n=/(?:Version|Mobile)\/1[456]/;DR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var n;try{const r=((n=this.Ti)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){Ke("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ji(t){return ct(t,"owner")}function tc(t){return ct(t,"clientMetadata")}function Lf(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Ff{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ff(e,n.fromCache,r,s)}}/**
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
 */class gw{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(Dg(n))return v.resolve(null);let r=Bt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qc(n,null,"F"),r=Bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(e,Qc(n,null,"F")):this.ji(e,l,n,c)}))})))}Ui(e,n,r,s){return Dg(n)||s.isEqual(W.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(Fh()<=pe.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hh(n)),this.ji(e,o,n,aE(s,-1)))})}Gi(e,n){let r=new Le(DE(e));return n.forEach((s,i)=>{Ra(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return Fh()<=pe.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Hh(n)),this.Ki.getDocumentsMatchingQuery(e,n,zt.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class VV{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Ve(ie),this.Yi=new Fr(i=>gs(i),Aa),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pw(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function _w(t,e,n,r){return new VV(t,e,n,r)}async function yw(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=oe();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function NV(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=v.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(c,g)).next(y=>{const E=l.docVersions.get(g);Q(E!==null),y.version.compareTo(E)<0&&(h.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=oe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function vw(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function OV(t,e){const n=L(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(tt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(y,E,A){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(i,f))});let c=Lt(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Iw(i,o,e.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(W.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return v.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function Iw(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Lt();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function MV(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yi(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,e).next(i=>i?(s=i,v.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new Mn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function vi(t,e,n){const r=L(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Lr(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Zc(t,e,n){const r=L(t);let s=W.min(),i=oe();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=L(c),d=h.Yi.get(u);return d!==void 0?v.resolve(h.Ji.get(d)):h.kr.getTargetData(l,u)}(r,o,Bt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:W.min(),n?i:oe())).next(a=>(Tw(r,CE(e),a),{documents:a,ss:i})))}function Ew(t,e){const n=L(t),r=L(n.kr),s=n.Ji.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",i=>r.ut(i,e).next(o=>o?o.target:null))}function ww(t,e){const n=L(t),r=n.Zi.get(e)||W.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.Xi.getAllFromCollectionGroup(s,e,aE(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Tw(n,e,s),s))}function Tw(t,e,n){let r=t.Zi.get(e)||W.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Zi.set(e,r)}async function LV(t,e,n,r){const s=L(t);let i=oe(),o=Lt();for(const l of n){const u=e.os(l.metadata.name);l.document&&(i=i.add(u));const h=e._s(l);h.setReadTime(e.us(l.metadata.readTime)),o=o.insert(u,h)}const a=s.Xi.newChangeBuffer({trackRemovals:!0}),c=await yi(s,function(u){return Bt(ki(me.fromString(`__bundle__/docs/${u}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",l=>Iw(l,a,o).next(u=>(a.apply(l),u)).next(u=>s.kr.removeMatchingKeysForTargetId(l,c.targetId).next(()=>s.kr.addMatchingKeys(l,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(l,u.ns,u.rs)).next(()=>u.ns)))}async function FV(t,e,n=oe()){const r=await yi(t,Bt(kf(e.bundledQuery))),s=L(t);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Qr.saveNamedQuery(i,e);const a=r.withResumeToken(tt.EMPTY_BYTE_STRING,o);return s.Ji=s.Ji.insert(a.targetId,a),s.kr.updateTargetData(i,a).next(()=>s.kr.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.kr.addMatchingKeys(i,n,r.targetId)).next(()=>s.Qr.saveNamedQuery(i,e))})}function s_(t,e){return`firestore_clients_${t}_${e}`}function i_(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Wu(t,e){return`firestore_targets_${t}_${e}`}class el{constructor(e,n,r,s){this.user=e,this.batchId=n,this.state=r,this.error=s}static cs(e,n,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new S(s.error.code,s.error.message))),o?new el(e,n,s.state,i):(Ke("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wo{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cs(e,n){const r=JSON.parse(n);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new S(r.error.code,r.error.message))),i?new wo(e,r.state,s):(Ke("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class tl{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cs(e,n){const r=JSON.parse(n);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Af();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=hE(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new tl(e,i):(Ke("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Bf{constructor(e,n){this.clientId=e,this.onlineState=n}static cs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Bf(n.clientId,n.onlineState):(Ke("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ed{constructor(){this.activeTargetIds=Af()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qu{constructor(e,n,r,s,i){this.window=e,this.ii=n,this.persistenceKey=r,this.Is=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new Ve(ie),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Rs=s_(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new ed),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const s=this.getItem(s_(this.persistenceKey,r));if(s){const i=tl.cs(r,s);i&&(this.ds=this.ds.insert(i.clientId,i))}}this.Ss();const n=this.storage.getItem(this.ys);if(n){const r=this.bs(n);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let n=!1;return this.ds.forEach((r,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,n,r){this.Cs(e,n,r),this.Fs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Wu(this.persistenceKey,e));if(r){const s=wo.cs(e,r);s&&(n=s.state)}}return this.Ms.hs(e),this.Ss(),n}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Wu(this.persistenceKey,e))}updateQueryState(e,n,r){this.xs(e,n,r)}handleUserChange(e,n,r){n.forEach(s=>{this.Fs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Rs)return void Ke("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.fs.test(n.key)){if(n.newValue==null){const r=this.Bs(n.key);return this.Ls(r,null)}{const r=this.ks(n.key,n.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(n.key)){if(n.newValue!==null){const r=this.qs(n.key,n.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(n.key)){if(n.newValue!==null){const r=this.Ks(n.key,n.newValue);if(r)return this.$s(r)}}else if(n.key===this.ys){if(n.newValue!==null){const r=this.bs(n.newValue);if(r)return this.Ds(r)}}else if(n.key===this.Vs){const r=function(i){let o=Ot.ae;if(i!=null)try{const a=JSON.parse(i);Q(typeof a=="number"),o=a}catch(a){Ke("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ot.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.ws){const r=this.Us(n.newValue);await Promise.all(r.map(s=>this.syncEngine.Ws(s)))}}}else this.As.push(n)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,n,r){const s=new el(this.currentUser,e,n,r),i=i_(this.persistenceKey,this.currentUser,e);this.setItem(i,s.ls())}Fs(e){const n=i_(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Os(e){const n={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(n))}xs(e,n,r){const s=Wu(this.persistenceKey,e),i=new wo(e,n,r);this.setItem(s,i.ls())}Ns(e){const n=JSON.stringify(Array.from(e));this.setItem(this.ws,n)}Bs(e){const n=this.fs.exec(e);return n?n[1]:null}ks(e,n){const r=this.Bs(e);return tl.cs(r,n)}qs(e,n){const r=this.gs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return el.cs(new rt(i),s,n)}Ks(e,n){const r=this.ps.exec(e),s=Number(r[1]);return wo.cs(s,n)}bs(e){return Bf.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,n){const r=n?this.ds.insert(e,n):this.ds.remove(e),s=this.vs(this.ds),i=this.vs(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let n=Af();return e.forEach((r,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class Aw{constructor(){this.Hs=new ed,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new ed,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BV{Ys(e){}shutdown(){}}/**
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
 */class o_{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nc=null;function Yu(){return nc===null?nc=function(){return 268435456+Math.round(2147483648*Math.random())}():nc++,"0x"+nc.toString(16)}/**
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
 */const UV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $V{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const _t="WebChannelConnection";class qV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,s,i,o){const a=Yu(),c=this.Vo(n,r);P("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={};return this.mo(l,i,o),this.fo(n,c,l,s).then(u=>(P("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw on("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}po(n,r,s,i,o,a){return this.Ro(n,r,s,i,o)}mo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Vo(n,r){const s=UV[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,n,r,s){const i=Yu();return new Promise((o,a)=>{const c=new Fx;c.setWithCredentials(!0),c.listenOnce(Ox.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ku.NO_ERROR:const u=c.getResponseJson();P(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ku.TIMEOUT:P(_t,`RPC '${e}' ${i} timed out`),a(new S(I.DEADLINE_EXCEEDED,"Request time out"));break;case Ku.HTTP_ERROR:const h=c.getStatus();if(P(_t,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(E){const A=E.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(A)>=0?A:I.UNKNOWN}(f.status);a(new S(g,f.message))}else a(new S(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new S(I.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{P(_t,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);P(_t,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}yo(e,n,r){const s=Yu(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vx(),a=Nx(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Lx({})),this.mo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");P(_t,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new $V({so:E=>{f?P(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(P(_t,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),P(_t,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},oo:()=>h.close()}),y=(E,A,b)=>{E.listen(A,x=>{try{b(x)}catch(C){setTimeout(()=>{throw C},0)}})};return y(h,Qa.EventType.OPEN,()=>{f||P(_t,`RPC '${e}' stream ${s} transport opened.`)}),y(h,Qa.EventType.CLOSE,()=>{f||(f=!0,P(_t,`RPC '${e}' stream ${s} transport closed`),g.Po())}),y(h,Qa.EventType.ERROR,E=>{f||(f=!0,on(_t,`RPC '${e}' stream ${s} transport errored:`,E),g.Po(new S(I.UNAVAILABLE,"The operation could not be completed")))}),y(h,Qa.EventType.MESSAGE,E=>{var A;if(!f){const b=E.data[0];Q(!!b);const x=b,C=x.error||((A=x[0])===null||A===void 0?void 0:A.error);if(C){P(_t,`RPC '${e}' stream ${s} received error:`,C);const B=C.status;let K=function(H){const re=Je[H];if(re!==void 0)return zE(re)}(B),ce=C.message;K===void 0&&(K=I.INTERNAL,ce="Unknown error status: "+B+" with message "+C.message),f=!0,g.Po(new S(K,ce)),h.close()}else P(_t,`RPC '${e}' stream ${s} received:`,b),g.Io(b)}}),y(a,Mx.STAT_EVENT,E=>{E.stat===pg.PROXY?P(_t,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===pg.NOPROXY&&P(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}/**
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
 *//**
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
 */function bw(){return typeof window<"u"?window:null}function Ec(){return typeof document<"u"?document:null}/**
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
 */function Da(t){return new Yk(t,!0)}/**
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
 */class Uf{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.wo=r,this.So=s,this.bo=i,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&P("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
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
 */class Rw{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.No=r,this.Bo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new Uf(e,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Lo===n&&this.Xo(r,s)},r=>{e(()=>{const s=new S(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(s)})})}Xo(e,n){const r=this.Zo(this.Lo);this.stream=this.t_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.e_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return n=>{this.ii.enqueueAndForget(()=>this.Lo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jV extends Rw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}t_(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.Qo.reset();const n=Zk(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?We(o.readTime):W.min()}(e);return this.listener.n_(n,r)}r_(e){const n={};n.database=Zo(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Hc(c)?{documents:ZE(i,c)}:{query:ew(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=WE(i,o.resumeToken);const l=Wh(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=_i(i,o.snapshotVersion.toTimestamp());const l=Wh(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=tV(this.serializer,e);r&&(n.labels=r),this.jo(n)}i_(e){const n={};n.database=Zo(this.serializer),n.removeTarget=e,this.jo(n)}}class zV extends Rw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const n=eV(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.a_(r,n)}return Q(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=Zo(this.serializer),this.jo(e)}__(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ea(this.serializer,r))};this.jo(n)}}/**
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
 */class KV extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.l_=!1}h_(){if(this.l_)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(I.UNKNOWN,s.toString())})}po(e,n,r,s){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.po(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(I.UNKNOWN,i.toString())})}terminate(){this.l_=!0}}class GV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(Ke(n),this.E_=!1):P("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
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
 */class HV{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=i,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{Br(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=L(c);l.p_.add(4),await Oi(l),l.S_.set("Unknown"),l.p_.delete(4),await xa(l)}(this))})}),this.S_=new GV(r,s)}}async function xa(t){if(Br(t))for(const e of t.y_)await e(!0)}async function Oi(t){for(const e of t.y_)await e(!1)}function su(t,e){const n=L(t);n.g_.has(e.targetId)||(n.g_.set(e.targetId,e),jf(n)?qf(n):Li(n).$o()&&$f(n,e))}function ta(t,e){const n=L(t),r=Li(n);n.g_.delete(e),r.$o()&&Sw(n,e),n.g_.size===0&&(r.$o()?r.Go():Br(n)&&n.S_.set("Unknown"))}function $f(t,e){if(t.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Li(t).r_(e)}function Sw(t,e){t.b_.Be(e),Li(t).i_(e)}function qf(t){t.b_=new Gk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.g_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Li(t).start(),t.S_.d_()}function jf(t){return Br(t)&&!Li(t).Ko()&&t.g_.size>0}function Br(t){return L(t).p_.size===0}function Pw(t){t.b_=void 0}async function WV(t){t.g_.forEach((e,n)=>{$f(t,e)})}async function QV(t,e){Pw(t),jf(t)?(t.S_.V_(e),qf(t)):t.S_.set("Unknown")}async function YV(t,e,n){if(t.S_.set("Online"),e instanceof HE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.g_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.g_.delete(a),s.b_.removeTarget(a))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nl(t,r)}else if(e instanceof Ic?t.b_.We(e):e instanceof GE?t.b_.Ze(e):t.b_.je(e),!n.isEqual(W.min()))try{const r=await vw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.b_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.g_.get(l);u&&i.g_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.g_.get(c);if(!u)return;i.g_.set(c,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),Sw(i,c);const h=new Mn(u.target,c,l,u.sequenceNumber);$f(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await nl(t,r)}}async function nl(t,e,n){if(!Lr(e))throw e;t.p_.add(1),await Oi(t),t.S_.set("Offline"),n||(n=()=>vw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.p_.delete(1),await xa(t)})}function Cw(t,e){return e().catch(n=>nl(t,n,e))}async function Mi(t){const e=L(t),n=Cr(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;JV(e);)try{const s=await MV(e.localStore,r);if(s===null){e.f_.length===0&&n.Go();break}r=s.batchId,XV(e,s)}catch(s){await nl(e,s)}Dw(e)&&xw(e)}function JV(t){return Br(t)&&t.f_.length<10}function XV(t,e){t.f_.push(e);const n=Cr(t);n.$o()&&n.o_&&n.__(e.mutations)}function Dw(t){return Br(t)&&!Cr(t).Ko()&&t.f_.length>0}function xw(t){Cr(t).start()}async function ZV(t){Cr(t).c_()}async function eN(t){const e=Cr(t);for(const n of t.f_)e.__(n.mutations)}async function tN(t,e,n){const r=t.f_.shift(),s=Sf.from(r,e,n);await Cw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Mi(t)}async function nN(t,e){e&&Cr(t).o_&&await async function(r,s){if(function(o){return jE(o)&&o!==I.ABORTED}(s.code)){const i=r.f_.shift();Cr(r).Wo(),await Cw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Mi(r)}}(t,e),Dw(t)&&xw(t)}async function a_(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Br(n);n.p_.add(3),await Oi(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.p_.delete(3),await xa(n)}async function td(t,e){const n=L(t);e?(n.p_.delete(2),await xa(n)):e||(n.p_.add(2),await Oi(n),n.S_.set("Unknown"))}function Li(t){return t.D_||(t.D_=function(n,r,s){const i=L(n);return i.h_(),new jV(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:WV.bind(null,t),uo:QV.bind(null,t),n_:YV.bind(null,t)}),t.y_.push(async e=>{e?(t.D_.Wo(),jf(t)?qf(t):t.S_.set("Unknown")):(await t.D_.stop(),Pw(t))})),t.D_}function Cr(t){return t.v_||(t.v_=function(n,r,s){const i=L(n);return i.h_(),new zV(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:ZV.bind(null,t),uo:nN.bind(null,t),u_:eN.bind(null,t),a_:tN.bind(null,t)}),t.y_.push(async e=>{e?(t.v_.Wo(),await Mi(t)):(await t.v_.stop(),t.f_.length>0&&(P("RemoteStore",`Stopping write stream with ${t.f_.length} pending writes`),t.f_=[]))})),t.v_}/**
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
 */class zf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new zf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fi(t,e){if(Ke("AsyncQueue",`${e}: ${t}`),Lr(t))return new S(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ni{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=so(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new ni(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ni)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ni;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class c_{constructor(){this.C_=new Ve(N.comparator)}track(e){const n=e.doc.key,r=this.C_.get(n);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(n,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(n):e.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):q():this.C_=this.C_.insert(n,e)}F_(){const e=[];return this.C_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ii{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ii(e,n,ni.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class rN{constructor(){this.M_=void 0,this.listeners=[]}}class sN{constructor(){this.queries=new Fr(e=>PE(e),ba),this.onlineState="Unknown",this.x_=new Set}}async function Kf(t,e){const n=L(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new rN),s)try{i.M_=await n.onListen(r)}catch(o){const a=Fi(o,`Initialization of query '${Hh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.O_(n.onlineState),i.M_&&e.N_(i.M_)&&Hf(n)}async function Gf(t,e){const n=L(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function iN(t,e){const n=L(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.N_(s)&&(r=!0);o.M_=s}}r&&Hf(n)}function oN(t,e,n){const r=L(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Hf(t){t.x_.forEach(e=>{e.next()})}class Wf{constructor(e,n,r){this.query=e,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.L_?this.q_(e)&&(this.B_.next(e),n=!0):this.Q_(e,this.onlineState)&&(this.K_(e),n=!0),this.k_=e,n}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),n=!0),n}Q_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(e){e=Ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
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
 */class aN{constructor(e,n){this.W_=e,this.byteLength=n}G_(){return"metadata"in this.W_}}/**
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
 */class l_{constructor(e){this.serializer=e}os(e){return Tn(this.serializer,e)}_s(e){return e.metadata.exists?XE(this.serializer,e.document,!1):Me.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return We(e)}}class cN{constructor(e,n,r){this.z_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=kw(e)}j_(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.W_.namedQuery)this.queries.push(e.W_.namedQuery);else if(e.W_.documentMetadata){this.documents.push({metadata:e.W_.documentMetadata}),e.W_.documentMetadata.exists||++n;const r=me.fromString(e.W_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.W_.document&&(this.documents[this.documents.length-1].document=e.W_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}H_(e){const n=new Map,r=new l_(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.os(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||oe()).add(i);n.set(o,a)}}return n}async complete(){const e=await LV(this.localStore,new l_(this.serializer),this.documents,this.z_.id),n=this.H_(this.documents);for(const r of this.queries)await FV(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,J_:this.collectionGroups,Y_:e}}}function kw(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class Vw{constructor(e){this.key=e}}class Nw{constructor(e){this.key=e}}class Ow{constructor(e,n){this.query=e,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=oe(),this.mutatedKeys=oe(),this.ta=DE(e),this.na=new ni(this.ta)}get ra(){return this.Z_}ia(e,n){const r=n?n.sa:new c_,s=n?n.na:this.na;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Ra(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(r.track({type:3,doc:f}),E=!0):this.oa(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.ta(f,c)>0||l&&this.ta(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{na:o,sa:r,zi:a,mutatedKeys:i}}oa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const i=e.sa.F_();i.sort((l,u)=>function(d,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return g(d)-g(f)}(l.type,u.type)||this.ta(l.doc,u.doc)),this._a(r);const o=n?this.aa():[],a=this.ea.size===0&&this.current?1:0,c=a!==this.X_;return this.X_=a,i.length!==0||c?{snapshot:new Ii(this.query,e.na,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new c_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=oe(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return e.forEach(r=>{this.ea.has(r)||n.push(new Nw(r))}),this.ea.forEach(r=>{e.has(r)||n.push(new Vw(r))}),n}la(e){this.Z_=e.ss,this.ea=oe();const n=this.ia(e.documents);return this.applyChanges(n,!0)}ha(){return Ii.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class lN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uN{constructor(e){this.key=e,this.Pa=!1}}class hN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new Fr(a=>PE(a),ba),this.Ea=new Map,this.da=new Set,this.Aa=new Ve(N.comparator),this.Ra=new Map,this.Va=new Of,this.ma={},this.fa=new Map,this.ga=Es.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function dN(t,e){const n=Zf(t);let r,s;const i=n.Ta.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ha();else{const o=await yi(n.localStore,Bt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Qf(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&su(n.remoteStore,o)}return s}async function Qf(t,e,n,r,s){t.ya=(h,d,f)=>async function(y,E,A,b){let x=E.view.ia(A);x.zi&&(x=await Zc(y.localStore,E.query,!1).then(({documents:K})=>E.view.ia(K,x)));const C=b&&b.targetChanges.get(E.targetId),B=E.view.applyChanges(x,y.isPrimaryClient,C);return nd(y,E.targetId,B.ua),B.snapshot}(t,h,d,f);const i=await Zc(t.localStore,e,!0),o=new Ow(e,i.ss),a=o.ia(i.documents),c=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);nd(t,n,l.ua);const u=new lN(e,n,o);return t.Ta.set(e,u),t.Ea.has(n)?t.Ea.get(n).push(e):t.Ea.set(n,[e]),l.snapshot}async function fN(t,e){const n=L(t),r=n.Ta.get(e),s=n.Ea.get(r.targetId);if(s.length>1)return n.Ea.set(r.targetId,s.filter(i=>!ba(i,e))),void n.Ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ta(n.remoteStore,r.targetId),Ei(n,r.targetId)}).catch(Mr)):(Ei(n,r.targetId),await vi(n.localStore,r.targetId,!0))}async function pN(t,e,n){const r=ep(t);try{const s=await function(o,a){const c=L(o),l=Ue.now(),u=a.reduce((f,g)=>f.add(g.key),oe());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Lt(),y=oe();return c.Xi.getEntries(f,u).next(E=>{g=E,g.forEach((A,b)=>{b.isValidDocument()||(y=y.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(E=>{h=E;const A=[];for(const b of a){const x=jk(b,h.get(b.key).overlayedDocument);x!=null&&A.push(new Hn(b.key,x,vE(x.value.mapValue),Be.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,A,a)}).next(E=>{d=E;const A=E.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,E.batchId,A)})}).then(()=>({batchId:d.batchId,changes:kE(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.ma[o.currentUser.toKey()];l||(l=new Ve(ie)),l=l.insert(a,c),o.ma[o.currentUser.toKey()]=l}(r,s.batchId,n),await Wn(r,s.changes),await Mi(r.remoteStore)}catch(s){const i=Fi(s,"Failed to persist write");n.reject(i)}}async function Mw(t,e){const n=L(t);try{const r=await OV(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ra.get(i);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Pa=!0:s.modifiedDocuments.size>0?Q(o.Pa):s.removedDocuments.size>0&&(Q(o.Pa),o.Pa=!1))}),await Wn(n,r,e)}catch(r){await Mr(r)}}function u_(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ta.forEach((i,o)=>{const a=o.view.O_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=L(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.O_(a)&&(l=!0)}),l&&Hf(c)}(r.eventManager,e),s.length&&r.Ia.n_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mN(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ra.get(e),i=s&&s.key;if(i){let o=new Ve(N.comparator);o=o.insert(i,Me.newNoDocument(i,W.min()));const a=oe().add(i),c=new Pa(W.min(),new Map,new Ve(ie),o,a);await Mw(r,c),r.Aa=r.Aa.remove(i),r.Ra.delete(e),Xf(r)}else await vi(r.localStore,e,!1).then(()=>Ei(r,e,n)).catch(Mr)}async function gN(t,e){const n=L(t),r=e.batch.batchId;try{const s=await NV(n.localStore,e);Jf(n,r,null),Yf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wn(n,s)}catch(s){await Mr(s)}}async function _N(t,e,n){const r=L(t);try{const s=await function(o,a){const c=L(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Q(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Jf(r,e,n),Yf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wn(r,s)}catch(s){await Mr(s)}}async function yN(t,e){const n=L(t);Br(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=L(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(n.localStore);if(r===-1)return void e.resolve();const s=n.fa.get(r)||[];s.push(e),n.fa.set(r,s)}catch(r){const s=Fi(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Yf(t,e){(t.fa.get(e)||[]).forEach(n=>{n.resolve()}),t.fa.delete(e)}function Jf(t,e,n){const r=L(t);let s=r.ma[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ma[r.currentUser.toKey()]=s}}function Ei(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ea.get(e))t.Ta.delete(r),n&&t.Ia.wa(r,n);t.Ea.delete(e),t.isPrimaryClient&&t.Va.Ar(e).forEach(r=>{t.Va.containsKey(r)||Lw(t,r)})}function Lw(t,e){t.da.delete(e.path.canonicalString());const n=t.Aa.get(e);n!==null&&(ta(t.remoteStore,n),t.Aa=t.Aa.remove(e),t.Ra.delete(n),Xf(t))}function nd(t,e,n){for(const r of n)r instanceof Vw?(t.Va.addReference(r.key,e),vN(t,r)):r instanceof Nw?(P("SyncEngine","Document no longer in limbo: "+r.key),t.Va.removeReference(r.key,e),t.Va.containsKey(r.key)||Lw(t,r.key)):q()}function vN(t,e){const n=e.key,r=n.path.canonicalString();t.Aa.get(n)||t.da.has(r)||(P("SyncEngine","New document in limbo: "+n),t.da.add(r),Xf(t))}function Xf(t){for(;t.da.size>0&&t.Aa.size<t.maxConcurrentLimboResolutions;){const e=t.da.values().next().value;t.da.delete(e);const n=new N(me.fromString(e)),r=t.ga.next();t.Ra.set(r,new uN(n)),t.Aa=t.Aa.insert(n,r),su(t.remoteStore,new Mn(Bt(ki(n.path)),r,"TargetPurposeLimboResolution",Ot.ae))}}async function Wn(t,e,n){const r=L(t),s=[],i=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,c)=>{o.push(r.ya(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Ff.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ia.n_(s),await async function(c,l){const u=L(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(l,d=>v.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>v.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Lr(h))throw h;P("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(d,y)}}}(r.localStore,i))}async function IN(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await yw(n.localStore,e);n.currentUser=e,function(i,o){i.fa.forEach(a=>{a.forEach(c=>{c.reject(new S(I.CANCELLED,o))})}),i.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wn(n,r.ts)}}function EN(t,e){const n=L(t),r=n.Ra.get(e);if(r&&r.Pa)return oe().add(r.key);{let s=oe();const i=n.Ea.get(e);if(!i)return s;for(const o of i){const a=n.Ta.get(o);s=s.unionWith(a.view.ra)}return s}}async function wN(t,e){const n=L(t),r=await Zc(n.localStore,e.query,!0),s=e.view.la(r);return n.isPrimaryClient&&nd(n,e.targetId,s.ua),s}async function TN(t,e){const n=L(t);return ww(n.localStore,e).then(r=>Wn(n,r))}async function AN(t,e,n,r){const s=L(t),i=await function(a,c){const l=L(a),u=L(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",h=>u.Dn(h,c).next(d=>d?l.localDocuments.getDocuments(h,d):v.resolve(null)))}(s.localStore,e);i!==null?(n==="pending"?await Mi(s.remoteStore):n==="acknowledged"||n==="rejected"?(Jf(s,e,r||null),Yf(s,e),function(a,c){L(L(a).mutationQueue).Cn(c)}(s.localStore,e)):q(),await Wn(s,i)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function bN(t,e){const n=L(t);if(Zf(n),ep(n),e===!0&&n.pa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),s=await h_(n,r.toArray());n.pa=!0,await td(n.remoteStore,!0);for(const i of s)su(n.remoteStore,i)}else if(e===!1&&n.pa!==!1){const r=[];let s=Promise.resolve();n.Ea.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Ei(n,o),vi(n.localStore,o,!0))),ta(n.remoteStore,o)}),await s,await h_(n,r),function(o){const a=L(o);a.Ra.forEach((c,l)=>{ta(a.remoteStore,l)}),a.Va.Rr(),a.Ra=new Map,a.Aa=new Ve(N.comparator)}(n),n.pa=!1,await td(n.remoteStore,!1)}}async function h_(t,e,n){const r=L(t),s=[],i=[];for(const o of e){let a;const c=r.Ea.get(o);if(c&&c.length!==0){a=await yi(r.localStore,Bt(c[0]));for(const l of c){const u=r.Ta.get(l),h=await wN(r,u);h.snapshot&&i.push(h.snapshot)}}else{const l=await Ew(r.localStore,o);a=await yi(r.localStore,l),await Qf(r,Fw(l),o,!1,a.resumeToken)}s.push(a)}return r.Ia.n_(i),s}function Fw(t){return SE(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function RN(t){return function(n){return L(L(n).persistence).Ni()}(L(t).localStore)}async function SN(t,e,n,r){const s=L(t);if(s.pa)return void P("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ea.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await ww(s.localStore,CE(i[0])),a=Pa.createSynthesizedRemoteEventForCurrentChange(e,n==="current",tt.EMPTY_BYTE_STRING);await Wn(s,o,a);break}case"rejected":await vi(s.localStore,e,!0),Ei(s,e,r);break;default:q()}}async function PN(t,e,n){const r=Zf(t);if(r.pa){for(const s of e){if(r.Ea.has(s)){P("SyncEngine","Adding an already active target "+s);continue}const i=await Ew(r.localStore,s),o=await yi(r.localStore,i);await Qf(r,Fw(i),o.targetId,!1,o.resumeToken),su(r.remoteStore,o)}for(const s of n)r.Ea.has(s)&&await vi(r.localStore,s,!1).then(()=>{ta(r.remoteStore,s),Ei(r,s)}).catch(Mr)}}function Zf(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mN.bind(null,e),e.Ia.n_=iN.bind(null,e.eventManager),e.Ia.wa=oN.bind(null,e.eventManager),e}function ep(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_N.bind(null,e),e}function CN(t,e,n){const r=L(t);(async function(i,o,a){try{const c=await o.getMetadata();if(await function(f,g){const y=L(f),E=We(g.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",A=>y.Qr.getBundleMetadata(A,g.id)).then(A=>!!A&&A.createTime.compareTo(E)>=0)}(i.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(kw(c));const l=new cN(c,i.localStore,o.serializer);let u=await o.Sa();for(;u;){const d=await l.j_(u);d&&a._updateProgress(d),u=await o.Sa()}const h=await l.complete();return await Wn(i,h.Y_,void 0),await function(f,g){const y=L(f);return y.persistence.runTransaction("Save bundle","readwrite",E=>y.Qr.saveBundleMetadata(E,g))}(i.localStore,c),a._completeWith(h.progress),Promise.resolve(h.J_)}catch(c){return on("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,n).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class rd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Da(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return _w(this.persistence,new gw,e.initialUser,this.serializer)}createPersistence(e){return new mw(ru.zr,this.serializer)}createSharedClientState(e){return new Aw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bw extends rd{constructor(e,n,r){super(),this.ba=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ba.initialize(this,e),await ep(this.ba.syncEngine),await Mi(this.ba.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return _w(this.persistence,new gw,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new yV(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new tk(n,this.persistence);return new ek(e.asyncQueue,r)}createPersistence(e){const n=Lf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new Mf(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,bw(),Ec(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Aw}}class DN extends Bw{constructor(e,n){super(e,n,!1),this.ba=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.ba.syncEngine;this.sharedClientState instanceof Qu&&(this.sharedClientState.syncEngine={Gs:AN.bind(null,n),zs:SN.bind(null,n),js:PN.bind(null,n),Ni:RN.bind(null,n),Ws:TN.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await bN(this.ba.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=bw();if(!Qu.v(n))throw new S(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Lf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Qu(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class tp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>u_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IN.bind(null,this.syncEngine),await td(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sN}()}createDatastore(e){const n=Da(e.databaseInfo.databaseId),r=function(i){return new qV(i)}(e.databaseInfo);return function(i,o,a,c){return new KV(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new HV(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>u_(this.syncEngine,n,0),function(){return o_.v()?new o_:new BV}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new hN(s,i,o,a,c,l);return u&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=L(n);P("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await Oi(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
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
 */function d_(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class iu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):Ke("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class xN{constructor(e,n){this.Ca=e,this.serializer=n,this.metadata=new it,this.buffer=new Uint8Array,this.Fa=function(){return new TextDecoder("utf-8")}(),this.Ma().then(r=>{r&&r.G_()?this.metadata.resolve(r.W_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.W_)}`))},r=>this.metadata.reject(r))}close(){return this.Ca.cancel()}async getMetadata(){return this.metadata.promise}async Sa(){return await this.getMetadata(),this.Ma()}async Ma(){const e=await this.xa();if(e===null)return null;const n=this.Fa.decode(e),r=Number(n);isNaN(r)&&this.Oa(`length string (${n}) is not valid number`);const s=await this.Na(r);return new aN(JSON.parse(s),e.length+r)}Ba(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async xa(){for(;this.Ba()<0&&!await this.La(););if(this.buffer.length===0)return null;const e=this.Ba();e<0&&this.Oa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Na(e){for(;this.buffer.length<e;)await this.La()&&this.Oa("Reached the end of bundle when more is expected.");const n=this.Fa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Oa(e){throw this.Ca.cancel(),new Error(`Invalid bundle format: ${e}`)}async La(){const e=await this.Ca.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class kN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,i){const o=L(s),a=Zo(o.serializer)+"/documents",c={documents:i.map(d=>Xo(o.serializer,d))},l=await o.po("BatchGetDocuments",a,c,i.length),u=new Map;l.forEach(d=>{const f=Xk(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return i.forEach(d=>{const f=u.get(d.toString());Q(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ni(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=N.fromPath(r);this.mutations.push(new bf(s,this.precondition(s)))}),await async function(r,s){const i=L(r),o=Zo(i.serializer)+"/documents",a={writes:s.map(c=>ea(i.serializer,c))};await i.Ro("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw q();n=W.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new S(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(W.min())?Be.exists(!1):Be.updateTime(n):Be.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(W.min()))throw new S(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Be.updateTime(n)}return Be.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class VN{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.ka=r.maxAttempts,this.Qo=new Uf(this.asyncQueue,"transaction_retry")}run(){this.ka-=1,this.qa()}qa(){this.Qo.Mo(async()=>{const e=new kN(this.datastore),n=this.Qa(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Ka(s)}))}).catch(r=>{this.Ka(r)})})}Qa(e){try{const n=this.updateFunction(e);return!Ta(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ka(e){this.ka>0&&this.$a(e)?(this.ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.qa(),Promise.resolve()))):this.deferred.reject(e)}$a(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!jE(n)}return!1}}/**
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
 */class NN{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=sE.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{P("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(P("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fi(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wc(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await np(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>a_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>a_(e.remoteStore,i)),t._onlineComponents=e}function Uw(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function np(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Uw(n))throw n;on("Error using user provided cache. Falling back to memory cache: "+n),await wc(t,new rd)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await wc(t,new rd);return t._offlineComponents}async function ou(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await sd(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await sd(t,new tp))),t._onlineComponents}function $w(t){return np(t).then(e=>e.persistence)}function rp(t){return np(t).then(e=>e.localStore)}function qw(t){return ou(t).then(e=>e.remoteStore)}function sp(t){return ou(t).then(e=>e.syncEngine)}function ON(t){return ou(t).then(e=>e.datastore)}async function wi(t){const e=await ou(t),n=e.eventManager;return n.onListen=dN.bind(null,e.syncEngine),n.onUnlisten=fN.bind(null,e.syncEngine),n}function MN(t){return t.asyncQueue.enqueue(async()=>{const e=await $w(t),n=await qw(t);return e.setNetworkEnabled(!0),function(s){const i=L(s);return i.p_.delete(0),xa(i)}(n)})}function LN(t){return t.asyncQueue.enqueue(async()=>{const e=await $w(t),n=await qw(t);return e.setNetworkEnabled(!1),async function(s){const i=L(s);i.p_.add(0),await Oi(i),i.S_.set("Offline")}(n)})}function FN(t,e){const n=new it;return t.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await function(l,u){const h=L(l);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,u))}(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new S(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Fi(a,`Failed to get document '${i} from cache`);o.reject(c)}}(await rp(t),e,n)),n.promise}function jw(t,e,n={}){const r=new it;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new iu({next:d=>{o.enqueueAndForget(()=>Gf(i,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new S(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new S(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Wf(ki(a.path),u,{includeMetadataChanges:!0,U_:!0});return Kf(i,h)}(await wi(t),t.asyncQueue,e,n,r)),r.promise}function BN(t,e){const n=new it;return t.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await Zc(s,i,!0),c=new Ow(i,a.ss),l=c.ia(a.documents),u=c.applyChanges(l,!1);o.resolve(u.snapshot)}catch(a){const c=Fi(a,`Failed to execute query '${i} against cache`);o.reject(c)}}(await rp(t),e,n)),n.promise}function zw(t,e,n={}){const r=new it;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new iu({next:d=>{o.enqueueAndForget(()=>Gf(i,h)),d.fromCache&&c.source==="server"?l.reject(new S(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Wf(a,u,{includeMetadataChanges:!0,U_:!0});return Kf(i,h)}(await wi(t),t.asyncQueue,e,n,r)),r.promise}function UN(t,e){const n=new iu(e);return t.asyncQueue.enqueueAndForget(async()=>function(s,i){L(s).x_.add(i),i.next()}(await wi(t),n)),()=>{n.va(),t.asyncQueue.enqueueAndForget(async()=>function(s,i){L(s).x_.delete(i)}(await wi(t),n))}}function $N(t,e,n,r){const s=function(o,a){let c;return c=typeof o=="string"?KE().encode(o):o,function(u,h){return new xN(u,h)}(function(u,h){if(u instanceof Uint8Array)return d_(u,h);if(u instanceof ArrayBuffer)return d_(new Uint8Array(u),h);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(n,Da(e));t.asyncQueue.enqueueAndForget(async()=>{CN(await sp(t),s,r)})}function qN(t,e){return t.asyncQueue.enqueue(async()=>function(r,s){const i=L(r);return i.persistence.runTransaction("Get named query","readonly",o=>i.Qr.getNamedQuery(o,s))}(await rp(t),e))}/**
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
 */function Kw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const f_=new Map;/**
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
 */function ip(t,e,n){if(!n)throw new S(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gw(t,e,n,r){if(e===!0&&r===!0)throw new S(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function p_(t){if(!N.isDocumentKey(t))throw new S(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function m_(t){if(N.isDocumentKey(t))throw new S(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function _e(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=au(t);throw new S(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Hw(t,e){if(e<=0)throw new S(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class g_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new S(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qx;switch(r.type){case"firstParty":return new Gx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=f_.get(n);r&&(P("ComponentProvider","Removing Datastore"),f_.delete(n),r.terminate())}(this),Promise.resolve()}}function jN(t,e,n,r={}){var s;const i=(t=_e(t,ka))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&on("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=rt.MOCK_USER;else{a=TR(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new S(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new rt(l)}t._authCredentials=new jx(new rE(a,c))}}/**
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
 */let Ct=class Ww{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ww(this.firestore,e,this._query)}},$e=class Qw{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qw(this.firestore,e,this._key)}},yr=class Yw extends Ct{constructor(e,n,r){super(e,n,ki(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new N(e))}withConverter(e){return new Yw(this.firestore,e,this._path)}};function Jw(t,e,...n){if(t=Se(t),ip("collection","path",e),t instanceof ka){const r=me.fromString(e,...n);return m_(r),new yr(t,null,r)}{if(!(t instanceof $e||t instanceof yr))throw new S(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return m_(r),new yr(t.firestore,null,r)}}function zN(t,e){if(t=_e(t,ka),ip("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new S(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ct(t,null,function(r){return new Gn(me.emptyPath(),r)}(e))}function rl(t,e,...n){if(t=Se(t),arguments.length===1&&(e=sE.V()),ip("doc","path",e),t instanceof ka){const r=me.fromString(e,...n);return p_(r),new $e(t,null,new N(r))}{if(!(t instanceof $e||t instanceof yr))throw new S(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return p_(r),new $e(t.firestore,t instanceof yr?t.converter:null,new N(r))}}function Xw(t,e){return t=Se(t),e=Se(e),(t instanceof $e||t instanceof yr)&&(e instanceof $e||e instanceof yr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Zw(t,e){return t=Se(t),e=Se(e),t instanceof Ct&&e instanceof Ct&&t.firestore===e.firestore&&ba(t._query,e._query)&&t.converter===e.converter}/**
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
 */class KN{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Uf(this,"async_queue_retry"),this.Za=()=>{const n=Ec();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const e=Ec();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const n=Ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new it;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!Lr(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const n=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(e,n,r){this.Xa(),this.Ya.indexOf(e)>-1&&(n=0);const s=zf.createAndSchedule(this,e,n,r,i=>this.nu(i));return this.za.push(s),s}Xa(){this.ja&&q()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const n of this.za)if(n.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const n=this.za.indexOf(e);this.za.splice(n,1)}}function id(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class GN{constructor(){this._progressObserver={},this._taskCompletionResolver=new it,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const HN=-1;let ze=class extends ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new KN}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||eT(this),this._firestoreClient.terminate()}};function lt(t){return t._firestoreClient||eT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function eT(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new wk(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Kw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new NN(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function WN(t,e){nT(t=_e(t,ze));const n=lt(t);if(n._uninitializedComponentsProvider)throw new S(I.FAILED_PRECONDITION,"SDK cache is already specified.");on("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),s=new tp;return tT(n,s,new Bw(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function QN(t){nT(t=_e(t,ze));const e=lt(t);if(e._uninitializedComponentsProvider)throw new S(I.FAILED_PRECONDITION,"SDK cache is already specified.");on("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new tp;return tT(e,r,new DN(r,n.cacheSizeBytes))}function tT(t,e,n){const r=new it;return t.asyncQueue.enqueue(async()=>{try{await wc(t,n),await sd(t,e),r.resolve()}catch(s){const i=s;if(!Uw(i))throw i;on("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function YN(t){if(t._initialized&&!t._terminated)throw new S(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new it;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!en.v())return Promise.resolve();const s=r+"main";await en.delete(s)}(Lf(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function JN(t){return function(n){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>yN(await sp(n),r)),r.promise}(lt(t=_e(t,ze)))}function XN(t){return MN(lt(t=_e(t,ze)))}function ZN(t){return LN(lt(t=_e(t,ze)))}function eO(t,e){const n=lt(t=_e(t,ze)),r=new GN;return $N(n,t._databaseId,e,r),r}function tO(t,e){return qN(lt(t=_e(t,ze)),e).then(n=>n?new Ct(t,null,n.query):null)}function nT(t){if(t._initialized||t._terminated)throw new S(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(tt.fromBase64String(e))}catch(n){throw new S(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sn(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Dr=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Ss=class{constructor(e){this._methodName=e}};/**
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
 */class cu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */const nO=/^__.*__$/;class rO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vi(e,this.data,n,this.fieldTransforms)}}class rT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class lu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._u(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.uu({path:r,lu:!1});return s.hu(e),s}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.uu({path:r,lu:!1});return s._u(),s}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return sl(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(sT(this.au)&&nO.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class sO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Da(e)}Au(e,n,r,s=!1){return new lu({au:e,methodName:n,du:r,path:Ge.emptyPath(),lu:!1,Eu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ps(t){const e=t._freezeSettings(),n=Da(t._databaseId);return new sO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uu(t,e,n,r,s,i={}){const o=t.Au(i.merge||i.mergeFields?2:0,e,n,s);lp("Data must be an object, but it was:",o,r);const a=aT(r,o);let c,l;if(i.merge)c=new Mt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=od(e,h,n);if(!o.contains(d))throw new S(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);lT(u,d)||u.push(d)}c=new Mt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new rO(new pt(a),c,l)}class Va extends Ss{_toFieldTransform(e){if(e.au!==2)throw e.au===1?e.Tu(`${this._methodName}() can only appear at the top level of your update data`):e.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Va}}function iT(t,e,n){return new lu({au:3,du:e.settings.du,methodName:t._methodName,lu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class op extends Ss{_toFieldTransform(e){return new Sa(e.path,new mi)}isEqual(e){return e instanceof op}}class iO extends Ss{constructor(e,n){super(e),this.Ru=n}_toFieldTransform(e){const n=iT(this,e,!0),r=this.Ru.map(i=>Cs(i,n)),s=new _s(r);return new Sa(e.path,s)}isEqual(e){return this===e}}class oO extends Ss{constructor(e,n){super(e),this.Ru=n}_toFieldTransform(e){const n=iT(this,e,!0),r=this.Ru.map(i=>Cs(i,n)),s=new ys(r);return new Sa(e.path,s)}isEqual(e){return this===e}}class aO extends Ss{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=new gi(e.serializer,ME(e.serializer,this.Vu));return new Sa(e.path,n)}isEqual(e){return this===e}}function ap(t,e,n,r){const s=t.Au(1,e,n);lp("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();Rs(r,(c,l)=>{const u=up(e,c,n);l=Se(l);const h=s.Pu(u);if(l instanceof Va)i.push(u);else{const d=Cs(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Mt(i);return new rT(o,a,s.fieldTransforms)}function cp(t,e,n,r,s,i){const o=t.Au(1,e,n),a=[od(e,r,n)],c=[s];if(i.length%2!=0)throw new S(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(od(e,i[d])),c.push(i[d+1]);const l=[],u=pt.empty();for(let d=a.length-1;d>=0;--d)if(!lT(l,a[d])){const f=a[d];let g=c[d];g=Se(g);const y=o.Pu(f);if(g instanceof Va)l.push(f);else{const E=Cs(g,y);E!=null&&(l.push(f),u.set(f,E))}}const h=new Mt(l);return new rT(u,h,o.fieldTransforms)}function oT(t,e,n,r=!1){return Cs(n,t.Au(r?4:3,e))}function Cs(t,e){if(cT(t=Se(t)))return lp("Unsupported field value:",e,t),aT(t,e);if(t instanceof Ss)return function(r,s){if(!sT(s.au))throw s.Tu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Cs(a,s.Iu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ME(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:_i(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_i(s.serializer,i)}}if(r instanceof cu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sn)return{bytesValue:WE(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xf(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Tu(`Unsupported field value: ${au(r)}`)}(t,e)}function aT(t,e){const n={};return gE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,s)=>{const i=Cs(s,e.cu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function cT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof cu||t instanceof Sn||t instanceof $e||t instanceof Ss)}function lp(t,e,n){if(!cT(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=au(n);throw r==="an object"?e.Tu(t+" a custom object"):e.Tu(t+" "+r)}}function od(t,e,n){if((e=Se(e))instanceof Dr)return e._internalPath;if(typeof e=="string")return up(t,e);throw sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const cO=new RegExp("[~\\*/\\[\\]]");function up(t,e,n){if(e.search(cO)>=0)throw sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dr(...e.split("."))._internalPath}catch{throw sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new S(I.INVALID_ARGUMENT,a+t+c)}function lT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class na{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lO extends na{data(){return super.data()}}function hu(t,e){return typeof e=="string"?up(t,e):e instanceof Dr?e._internalPath:e._delegate._internalPath}/**
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
 */function uT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new S(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hp{}class Na extends hp{}function nr(t,e,...n){let r=[];e instanceof hp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof dp).length,a=i.filter(c=>c instanceof du).length;if(o>1||o>0&&a>0)throw new S(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class du extends Na{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new du(e,n,r)}_apply(e){const n=this._parse(e);return dT(e._query,n),new Ct(e.firestore,e.converter,Gh(e._query,n))}_parse(e){const n=Ps(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new S(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){y_(h,u);const f=[];for(const g of h)f.push(__(c,i,g));d={arrayValue:{values:f}}}else d=__(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||y_(h,u),d=oT(a,o,h,u==="in"||u==="not-in");return he.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function uO(t,e,n){const r=e,s=hu("where",t);return du._create(s,r,n)}class dp extends hp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Re.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)dT(o,c),o=Gh(o,c)}(e._query,n),new Ct(e.firestore,e.converter,Gh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fp extends Na{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new fp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new S(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new S(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new ti(i,o);return function(l,u){if(wf(l)===null){const h=Xl(l);h!==null&&fT(l,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new Ct(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Gn(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function hO(t,e="asc"){const n=e,r=hu("orderBy",t);return fp._create(r,n)}class fu extends Na{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new fu(e,n,r)}_apply(e){return new Ct(e.firestore,e.converter,Qc(e._query,this._limit,this._limitType))}}function dO(t){return Hw("limit",t),fu._create("limit",t,"F")}function fO(t){return Hw("limitToLast",t),fu._create("limitToLast",t,"L")}class pu extends Na{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new pu(e,n,r)}_apply(e){const n=hT(e,this.type,this._docOrFields,this._inclusive);return new Ct(e.firestore,e.converter,function(s,i){return new Gn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function pO(...t){return pu._create("startAt",t,!0)}function mO(...t){return pu._create("startAfter",t,!1)}class mu extends Na{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new mu(e,n,r)}_apply(e){const n=hT(e,this.type,this._docOrFields,this._inclusive);return new Ct(e.firestore,e.converter,function(s,i){return new Gn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,n))}}function gO(...t){return mu._create("endBefore",t,!1)}function _O(...t){return mu._create("endAt",t,!0)}function hT(t,e,n,r){if(n[0]=Se(n[0]),n[0]instanceof na)return function(i,o,a,c,l){if(!c)throw new S(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of hs(i))if(h.field.isKeyField())u.push(ms(o,c.key));else{const d=c.data.field(h.field);if(Jl(d))throw new S(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new S(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(d)}return new Pr(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Ps(t.firestore);return function(o,a,c,l,u,h){const d=o.explicitOrderBy;if(u.length>d.length)throw new S(I.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<u.length;g++){const y=u[g];if(d[g].field.isKeyField()){if(typeof y!="string")throw new S(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!Tf(o)&&y.indexOf("/")!==-1)throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const E=o.path.child(me.fromString(y));if(!N.isDocumentKey(E))throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const A=new N(E);f.push(ms(a,A))}else{const E=oT(c,l,y);f.push(E)}}return new Pr(f,h)}(t._query,t.firestore._databaseId,s,e,n,r)}}function __(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new S(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tf(e)&&n.indexOf("/")!==-1)throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!N.isDocumentKey(r))throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ms(t,new N(r))}if(n instanceof $e)return ms(t,n._key);throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${au(n)}.`)}function y_(t,e){if(!Array.isArray(t)||t.length===0)throw new S(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dT(t,e){if(e.isInequality()){const r=Xl(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new S(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=wf(t);i!==null&&fT(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new S(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new S(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function fT(t,e,n){if(!n.isEqual(e))throw new S(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class pp{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new cu(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=If(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qo(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);Q(sw(r));const s=new Rr(r.get(1),r.get(3)),i=new N(r.popFirst(5));return s.isEqual(n)||Ke(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function gu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class yO extends pp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}/**
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
 */class ss{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let jn=class extends na{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},To=class extends jn{data(e={}){return super.data(e)}},xr=class{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ss(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new To(this._firestore,this._userDataWriter,r.key,r,new ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new To(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ss(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new To(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ss(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:vO(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function vO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function pT(t,e){return t instanceof jn&&e instanceof jn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof xr&&e instanceof xr&&t._firestore===e._firestore&&Zw(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function IO(t){t=_e(t,$e);const e=_e(t.firestore,ze);return jw(lt(e),t._key).then(n=>mp(e,t,n))}class Ds extends pp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function EO(t){t=_e(t,$e);const e=_e(t.firestore,ze),n=lt(e),r=new Ds(e);return FN(n,t._key).then(s=>new jn(e,r,t._key,s,new ss(s!==null&&s.hasLocalMutations,!0),t.converter))}function wO(t){t=_e(t,$e);const e=_e(t.firestore,ze);return jw(lt(e),t._key,{source:"server"}).then(n=>mp(e,t,n))}function TO(t){t=_e(t,Ct);const e=_e(t.firestore,ze),n=lt(e),r=new Ds(e);return uT(t._query),zw(n,t._query).then(s=>new xr(e,r,t,s))}function AO(t){t=_e(t,Ct);const e=_e(t.firestore,ze),n=lt(e),r=new Ds(e);return BN(n,t._query).then(s=>new xr(e,r,t,s))}function bO(t){t=_e(t,Ct);const e=_e(t.firestore,ze),n=lt(e),r=new Ds(e);return zw(n,t._query,{source:"server"}).then(s=>new xr(e,r,t,s))}function v_(t,e,n){t=_e(t,$e);const r=_e(t.firestore,ze),s=gu(t.converter,e,n);return Oa(r,[uu(Ps(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Be.none())])}function I_(t,e,n,...r){t=_e(t,$e);const s=_e(t.firestore,ze),i=Ps(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof Dr?cp(i,"updateDoc",t._key,e,n,r):ap(i,"updateDoc",t._key,e),Oa(s,[o.toMutation(t._key,Be.exists(!0))])}function RO(t){return Oa(_e(t.firestore,ze),[new Ni(t._key,Be.none())])}function SO(t,e){const n=_e(t.firestore,ze),r=rl(t),s=gu(t.converter,e);return Oa(n,[uu(Ps(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Be.exists(!1))]).then(()=>r)}function mT(t,...e){var n,r,s;t=Se(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||id(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(id(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof $e)l=_e(t.firestore,ze),u=ki(t._key.path),c={next:h=>{e[o]&&e[o](mp(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_e(t,Ct);l=_e(h.firestore,ze),u=h._query;const d=new Ds(l);c={next:f=>{e[o]&&e[o](new xr(l,d,h,f))},error:e[o+1],complete:e[o+2]},uT(t._query)}return function(d,f,g,y){const E=new iu(y),A=new Wf(f,E,g);return d.asyncQueue.enqueueAndForget(async()=>Kf(await wi(d),A)),()=>{E.va(),d.asyncQueue.enqueueAndForget(async()=>Gf(await wi(d),A))}}(lt(l),u,a,c)}function PO(t,e){return UN(lt(t=_e(t,ze)),id(e)?e:{next:e})}function Oa(t,e){return function(r,s){const i=new it;return r.asyncQueue.enqueueAndForget(async()=>pN(await sp(r),s,i)),i.promise}(lt(t),e)}function mp(t,e,n){const r=n.docs.get(e._key),s=new Ds(t);return new jn(t,s,e._key,r,new ss(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const CO={maxAttempts:5};/**
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
 */let DO=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ps(e)}set(e,n,r){this._verifyNotCommitted();const s=dr(e,this._firestore),i=gu(s.converter,n,r),o=uu(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Be.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=dr(e,this._firestore);let o;return o=typeof(n=Se(n))=="string"||n instanceof Dr?cp(this._dataReader,"WriteBatch.update",i._key,n,r,s):ap(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Be.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=dr(e,this._firestore);return this._mutations=this._mutations.concat(new Ni(n._key,Be.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function dr(t,e){if((t=Se(t)).firestore!==e)throw new S(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 *//**
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
 */let xO=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ps(n)}get(n){const r=dr(n,this._firestore),s=new yO(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return q();const o=i[0];if(o.isFoundDocument())return new na(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new na(this._firestore,s,r._key,null,r.converter);throw q()})}set(n,r,s){const i=dr(n,this._firestore),o=gu(i.converter,r,s),a=uu(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(n,r,s,...i){const o=dr(n,this._firestore);let a;return a=typeof(r=Se(r))=="string"||r instanceof Dr?cp(this._dataReader,"Transaction.update",o._key,r,s,i):ap(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=dr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=dr(e,this._firestore),r=new Ds(this._firestore);return super.get(e).then(s=>new jn(this._firestore,r,n._key,s._document,new ss(!1,!1),n.converter))}};function kO(t,e,n){t=_e(t,ze);const r=Object.assign(Object.assign({},CO),n);return function(i){if(i.maxAttempts<1)throw new S(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const c=new it;return i.asyncQueue.enqueueAndForget(async()=>{const l=await ON(i);new VN(i.asyncQueue,l,a,o,c).run()}),c.promise}(lt(t),s=>e(new xO(t,s)),r)}/**
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
 */function VO(){return new Va("deleteField")}function NO(){return new op("serverTimestamp")}function OO(...t){return new iO("arrayUnion",t)}function MO(...t){return new oO("arrayRemove",t)}function LO(t){return new aO("increment",t)}(function(e,n=!0){(function(s){xi=s})(kr),wr(new Un("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ze(new zx(r.getProvider("auth-internal")),new Wx(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new S(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),vn(mg,"4.0.0",e),vn(mg,"4.0.0","esm2017")})();const FO="@firebase/firestore-compat",BO="0.3.13";/**
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
 */function gp(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new S("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function E_(){if(typeof Uint8Array>"u")throw new S("unimplemented","Uint8Arrays are not available in this environment.")}function w_(){if(!Ik())throw new S("unimplemented","Blobs are unavailable in Firestore in this environment.")}let gT=class ad{constructor(e){this._delegate=e}static fromBase64String(e){return w_(),new ad(Sn.fromBase64String(e))}static fromUint8Array(e){return E_(),new ad(Sn.fromUint8Array(e))}toBase64(){return w_(),this._delegate.toBase64()}toUint8Array(){return E_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function cd(t){return UO(t,["next","error","complete"])}function UO(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class $O{enableIndexedDbPersistence(e,n){return WN(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return QN(e._delegate)}clearIndexedDbPersistence(e){return YN(e._delegate)}}class _T{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Rr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&on("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){jN(this._delegate,e,n,r)}enableNetwork(){return XN(this._delegate)}disableNetwork(){return ZN(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Gw("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return JN(this._delegate)}onSnapshotsInSync(e){return PO(this._delegate,e)}get app(){if(!this._appCompat)throw new S("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ti(this,Jw(this._delegate,e))}catch(n){throw bt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Ht(this,rl(this._delegate,e))}catch(n){throw bt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new At(this,zN(this._delegate,e))}catch(n){throw bt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return kO(this._delegate,n=>e(new yT(this,n)))}batch(){return lt(this._delegate),new vT(new DO(this._delegate,e=>Oa(this._delegate,e)))}loadBundle(e){return eO(this._delegate,e)}namedQuery(e){return tO(this._delegate,e).then(n=>n?new At(this,n):null)}}class _u extends pp{constructor(e){super(),this.firestore=e}convertBytes(e){return new gT(new Sn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Ht.forKey(n,this.firestore,null)}}function qO(t){Ux(t)}class yT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new _u(e)}get(e){const n=is(e);return this._delegate.get(n).then(r=>new ra(this._firestore,new jn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const s=is(e);return r?(gp("Transaction.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=is(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=is(e);return this._delegate.delete(n),this}}class vT{constructor(e){this._delegate=e}set(e,n,r){const s=is(e);return r?(gp("WriteBatch.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=is(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=is(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ws{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new To(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new sa(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ws.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(n);return i||(i=new ws(e,new _u(e),n),s.set(n,i)),i}}ws.INSTANCES=new WeakMap;class Ht{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new _u(e)}static forPath(e,n,r){if(e.length%2!==0)throw new S("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ht(n,new $e(n._delegate,r,new N(e)))}static forKey(e,n,r){return new Ht(n,new $e(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ti(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ti(this.firestore,Jw(this._delegate,e))}catch(n){throw bt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Se(e),e instanceof $e?Xw(this._delegate,e):!1}set(e,n){n=gp("DocumentReference.set",n);try{return n?v_(this._delegate,e,n):v_(this._delegate,e)}catch(r){throw bt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?I_(this._delegate,e):I_(this._delegate,e,n,...r)}catch(s){throw bt(s,"updateDoc()","DocumentReference.update()")}}delete(){return RO(this._delegate)}onSnapshot(...e){const n=IT(e),r=ET(e,s=>new ra(this.firestore,new jn(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return mT(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=EO(this._delegate):(e==null?void 0:e.source)==="server"?n=wO(this._delegate):n=IO(this._delegate),n.then(r=>new ra(this.firestore,new jn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ht(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function bt(t,e,n){return t.message=t.message.replace(e,n),t}function IT(t){for(const e of t)if(typeof e=="object"&&!cd(e))return e;return{}}function ET(t,e){var n,r;let s;return cd(t[0])?s=t[0]:cd(t[1])?s=t[1]:typeof t[0]=="function"?s={next:t[0],error:t[1],complete:t[2]}:s={next:t[1],error:t[2],complete:t[3]},{next:i=>{s.next&&s.next(e(i))},error:(n=s.error)===null||n===void 0?void 0:n.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class ra{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Ht(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return pT(this._delegate,e._delegate)}}class sa extends ra{data(e){const n=this._delegate.data(e);return $x(n!==void 0),n}}class At{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new _u(e)}where(e,n,r){try{return new At(this.firestore,nr(this._delegate,uO(e,n,r)))}catch(s){throw bt(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new At(this.firestore,nr(this._delegate,hO(e,n)))}catch(r){throw bt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new At(this.firestore,nr(this._delegate,dO(e)))}catch(n){throw bt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new At(this.firestore,nr(this._delegate,fO(e)))}catch(n){throw bt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new At(this.firestore,nr(this._delegate,pO(...e)))}catch(n){throw bt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new At(this.firestore,nr(this._delegate,mO(...e)))}catch(n){throw bt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new At(this.firestore,nr(this._delegate,gO(...e)))}catch(n){throw bt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new At(this.firestore,nr(this._delegate,_O(...e)))}catch(n){throw bt(n,"endAt()","Query.endAt()")}}isEqual(e){return Zw(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=AO(this._delegate):(e==null?void 0:e.source)==="server"?n=bO(this._delegate):n=TO(this._delegate),n.then(r=>new ld(this.firestore,new xr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=IT(e),r=ET(e,s=>new ld(this.firestore,new xr(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return mT(this._delegate,n,r)}withConverter(e){return new At(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class jO{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new sa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ld{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new At(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new sa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new jO(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new sa(this._firestore,r))})}isEqual(e){return pT(this._delegate,e._delegate)}}class Ti extends At{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ht(this.firestore,e):null}doc(e){try{return e===void 0?new Ht(this.firestore,rl(this._delegate)):new Ht(this.firestore,rl(this._delegate,e))}catch(n){throw bt(n,"doc()","CollectionReference.doc()")}}add(e){return SO(this._delegate,e).then(n=>new Ht(this.firestore,n))}isEqual(e){return Xw(this._delegate,e._delegate)}withConverter(e){return new Ti(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function is(t){return _e(t,$e)}/**
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
 */class _p{constructor(...e){this._delegate=new Dr(...e)}static documentId(){return new _p(Ge.keyField().canonicalString())}isEqual(e){return e=Se(e),e instanceof Dr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Zr{constructor(e){this._delegate=e}static serverTimestamp(){const e=NO();return e._methodName="FieldValue.serverTimestamp",new Zr(e)}static delete(){const e=VO();return e._methodName="FieldValue.delete",new Zr(e)}static arrayUnion(...e){const n=OO(...e);return n._methodName="FieldValue.arrayUnion",new Zr(n)}static arrayRemove(...e){const n=MO(...e);return n._methodName="FieldValue.arrayRemove",new Zr(n)}static increment(e){const n=LO(e);return n._methodName="FieldValue.increment",new Zr(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const zO={Firestore:_T,GeoPoint:cu,Timestamp:Ue,Blob:gT,Transaction:yT,WriteBatch:vT,DocumentReference:Ht,DocumentSnapshot:ra,Query:At,QueryDocumentSnapshot:sa,QuerySnapshot:ld,CollectionReference:Ti,FieldPath:_p,FieldValue:Zr,setLogLevel:qO,CACHE_SIZE_UNLIMITED:HN};function KO(t,e){t.INTERNAL.registerComponent(new Un("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),s=n.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},zO)))}/**
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
 */function GO(t){KO(t,(e,n)=>new _T(e,n,new $O)),t.registerVersion(FO,BO)}GO(Hd);const HO=tb(),WO={apiKey:"AIzaSyD4sXePUbSsXLByKw0FGv8Jvcm_zyOjVao",authDomain:"jandm-workpermit.firebaseapp.com",projectId:"jandm-workpermit",storageBucket:"jandm-workpermit.appspot.com",messagingSenderId:"346506180953",appId:"1:346506180953:web:289ca7d3eb63f0e9bbf448",measurementId:"G-4SL9MQKPQ4"};Hd.initializeApp(WO);const yp=ky(ID);yp.use(HO);const T_=Tt.get("access_token"),QO=Tt.get("uid"),YO=Tt.get("displayName"),JO=Tt.get("email"),XO=Tt.get("photoURL");T_&&Nl().setAccessToken(T_,QO,YO,JO,XO);yp.use(Zv);yp.mount("#app");export{K_ as A,ac as B,Cd as C,eM as D,oM as E,Vt as F,nM as G,Qt as H,rM as I,iM as J,Si as K,ts as L,Ms as M,Kn as N,sM as O,Bn as P,yD as Q,Ay as T,cb as _,Nl as a,ve as b,un as c,le as d,as as e,Ui as f,Ie as g,gl as h,be as i,dR as j,He as k,Vp as l,tM as m,ll as n,$t as o,hA as p,Hd as q,Nt as r,ab as s,ZO as t,Hy as u,an as v,ic as w,ia as x,ao as y,oc as z};
