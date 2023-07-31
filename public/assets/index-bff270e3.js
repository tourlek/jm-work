(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function xh(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const De={},Os=[],Qt=()=>{},Mw=()=>!1,Lw=/^on[^a-z]/,Lc=t=>Lw.test(t),Vh=t=>t.startsWith("onUpdate:"),ze=Object.assign,kh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fw=Object.prototype.hasOwnProperty,me=(t,e)=>Fw.call(t,e),Z=Array.isArray,Ms=t=>Fc(t)==="[object Map]",Wg=t=>Fc(t)==="[object Set]",oe=t=>typeof t=="function",He=t=>typeof t=="string",Nh=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Hg=t=>Ne(t)&&oe(t.then)&&oe(t.catch),Qg=Object.prototype.toString,Fc=t=>Qg.call(t),Uw=t=>Fc(t).slice(8,-1),Yg=t=>Fc(t)==="[object Object]",Oh=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,La=xh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bw=/-(\w)/g,_n=Uc(t=>t.replace(Bw,(e,n)=>n?n.toUpperCase():"")),$w=/\B([A-Z])/g,ui=Uc(t=>t.replace($w,"-$1").toLowerCase()),Bc=Uc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ku=Uc(t=>t?`on${Bc(t)}`:""),oo=(t,e)=>!Object.is(t,e),Fa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Za=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},wl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},qw=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let Kf;const Tl=()=>Kf||(Kf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mh(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?Gw(r):Mh(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(He(t))return t;if(Ne(t))return t}}const jw=/;(?![^(]*\))/g,Kw=/:([^]+)/,zw=/\/\*[^]*?\*\//g;function Gw(t){const e={};return t.replace(zw,"").split(jw).forEach(n=>{if(n){const r=n.split(Kw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Lh(t){let e="";if(He(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=Lh(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ww="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hw=xh(Ww);function Jg(t){return!!t||t===""}const gN=t=>He(t)?t:t==null?"":Z(t)||Ne(t)&&(t.toString===Qg||!oe(t.toString))?JSON.stringify(t,Xg,2):String(t),Xg=(t,e)=>e&&e.__v_isRef?Xg(t,e.value):Ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Wg(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!Z(e)&&!Yg(e)?String(e):e;let Mt;class Zg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function e_(t){return new Zg(t)}function Qw(t,e=Mt){e&&e.active&&e.effects.push(t)}function t_(){return Mt}function Yw(t){Mt&&Mt.cleanups.push(t)}const Fh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},n_=t=>(t.w&lr)>0,r_=t=>(t.n&lr)>0,Jw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=lr},Xw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];n_(s)&&!r_(s)?s.delete(t):e[n++]=s,s.w&=~lr,s.n&=~lr}e.length=n}},ec=new WeakMap;let Mi=0,lr=1;const Al=30;let Gt;const Yr=Symbol(""),bl=Symbol("");class Uh{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qw(this,r)}run(){if(!this.active)return this.fn();let e=Gt,n=sr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Gt,Gt=this,sr=!0,lr=1<<++Mi,Mi<=Al?Jw(this):zf(this),this.fn()}finally{Mi<=Al&&Xw(this),lr=1<<--Mi,Gt=this.parent,sr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Gt===this?this.deferStop=!0:this.active&&(zf(this),this.onStop&&this.onStop(),this.active=!1)}}function zf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let sr=!0;const s_=[];function li(){s_.push(sr),sr=!1}function hi(){const t=s_.pop();sr=t===void 0?!0:t}function kt(t,e,n){if(sr&&Gt){let r=ec.get(t);r||ec.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Fh()),i_(s)}}function i_(t,e){let n=!1;Mi<=Al?r_(t)||(t.n|=lr,n=!n_(t)):n=!t.has(Gt),n&&(t.add(Gt),Gt.deps.push(t))}function Dn(t,e,n,r,s,i){const o=ec.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?Oh(n)&&a.push(o.get("length")):(a.push(o.get(Yr)),Ms(t)&&a.push(o.get(bl)));break;case"delete":Z(t)||(a.push(o.get(Yr)),Ms(t)&&a.push(o.get(bl)));break;case"set":Ms(t)&&a.push(o.get(Yr));break}if(a.length===1)a[0]&&Rl(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Rl(Fh(c))}}function Rl(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&Gf(r);for(const r of n)r.computed||Gf(r)}function Gf(t,e){(t!==Gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Zw(t,e){var n;return(n=ec.get(t))==null?void 0:n.get(e)}const eT=xh("__proto__,__v_isRef,__isVue"),o_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nh)),tT=Bh(),nT=Bh(!1,!0),rT=Bh(!0),Wf=sT();function sT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)kt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){li();const r=le(this)[e].apply(this,n);return hi(),r}}),t}function iT(t){const e=le(this);return kt(e,"has",t),e.hasOwnProperty(t)}function Bh(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ET:h_:e?l_:u_).get(r))return r;const o=Z(r);if(!t){if(o&&me(Wf,s))return Reflect.get(Wf,s,i);if(s==="hasOwnProperty")return iT}const a=Reflect.get(r,s,i);return(Nh(s)?o_.has(s):eT(s))||(t||kt(r,"get",s),e)?a:je(a)?o&&Oh(s)?a:a.value:Ne(a)?t?f_(a):$o(a):a}}const oT=a_(),aT=a_(!0);function a_(t=!1){return function(n,r,s,i){let o=n[r];if(Ks(o)&&je(o)&&!je(s))return!1;if(!t&&(!tc(s)&&!Ks(s)&&(o=le(o),s=le(s)),!Z(n)&&je(o)&&!je(s)))return o.value=s,!0;const a=Z(n)&&Oh(r)?Number(r)<n.length:me(n,r),c=Reflect.set(n,r,s,i);return n===le(i)&&(a?oo(s,o)&&Dn(n,"set",r,s):Dn(n,"add",r,s)),c}}function cT(t,e){const n=me(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Dn(t,"delete",e,void 0),r}function uT(t,e){const n=Reflect.has(t,e);return(!Nh(e)||!o_.has(e))&&kt(t,"has",e),n}function lT(t){return kt(t,"iterate",Z(t)?"length":Yr),Reflect.ownKeys(t)}const c_={get:tT,set:oT,deleteProperty:cT,has:uT,ownKeys:lT},hT={get:rT,set(t,e){return!0},deleteProperty(t,e){return!0}},dT=ze({},c_,{get:nT,set:aT}),$h=t=>t,$c=t=>Reflect.getPrototypeOf(t);function _a(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(e!==i&&kt(s,"get",e),kt(s,"get",i));const{has:o}=$c(s),a=r?$h:n?Kh:ao;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ya(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(t!==s&&kt(r,"has",t),kt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function va(t,e=!1){return t=t.__v_raw,!e&&kt(le(t),"iterate",Yr),Reflect.get(t,"size",t)}function Hf(t){t=le(t);const e=le(this);return $c(e).has.call(e,t)||(e.add(t),Dn(e,"add",t,t)),this}function Qf(t,e){e=le(e);const n=le(this),{has:r,get:s}=$c(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?oo(e,o)&&Dn(n,"set",t,e):Dn(n,"add",t,e),this}function Yf(t){const e=le(this),{has:n,get:r}=$c(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Dn(e,"delete",t,void 0),i}function Jf(){const t=le(this),e=t.size!==0,n=t.clear();return e&&Dn(t,"clear",void 0,void 0),n}function Ia(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?$h:t?Kh:ao;return!t&&kt(a,"iterate",Yr),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Ea(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=Ms(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?$h:e?Kh:ao;return!e&&kt(i,"iterate",c?bl:Yr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Bn(t){return function(...e){return t==="delete"?!1:this}}function fT(){const t={get(i){return _a(this,i)},get size(){return va(this)},has:ya,add:Hf,set:Qf,delete:Yf,clear:Jf,forEach:Ia(!1,!1)},e={get(i){return _a(this,i,!1,!0)},get size(){return va(this)},has:ya,add:Hf,set:Qf,delete:Yf,clear:Jf,forEach:Ia(!1,!0)},n={get(i){return _a(this,i,!0)},get size(){return va(this,!0)},has(i){return ya.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:Ia(!0,!1)},r={get(i){return _a(this,i,!0,!0)},get size(){return va(this,!0)},has(i){return ya.call(this,i,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:Ia(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ea(i,!1,!1),n[i]=Ea(i,!0,!1),e[i]=Ea(i,!1,!0),r[i]=Ea(i,!0,!0)}),[t,n,e,r]}const[pT,mT,gT,_T]=fT();function qh(t,e){const n=e?t?_T:gT:t?mT:pT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(me(n,s)&&s in r?n:r,s,i)}const yT={get:qh(!1,!1)},vT={get:qh(!1,!0)},IT={get:qh(!0,!1)},u_=new WeakMap,l_=new WeakMap,h_=new WeakMap,ET=new WeakMap;function wT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function TT(t){return t.__v_skip||!Object.isExtensible(t)?0:wT(Uw(t))}function $o(t){return Ks(t)?t:jh(t,!1,c_,yT,u_)}function d_(t){return jh(t,!1,dT,vT,l_)}function f_(t){return jh(t,!0,hT,IT,h_)}function jh(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=TT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function ir(t){return Ks(t)?ir(t.__v_raw):!!(t&&t.__v_isReactive)}function Ks(t){return!!(t&&t.__v_isReadonly)}function tc(t){return!!(t&&t.__v_isShallow)}function p_(t){return ir(t)||Ks(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function qc(t){return Za(t,"__v_skip",!0),t}const ao=t=>Ne(t)?$o(t):t,Kh=t=>Ne(t)?f_(t):t;function m_(t){sr&&Gt&&(t=le(t),i_(t.dep||(t.dep=Fh())))}function g_(t,e){t=le(t);const n=t.dep;n&&Rl(n)}function je(t){return!!(t&&t.__v_isRef===!0)}function cn(t){return __(t,!1)}function AT(t){return __(t,!0)}function __(t,e){return je(t)?t:new bT(t,e)}class bT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:ao(e)}get value(){return m_(this),this._value}set value(e){const n=this.__v_isShallow||tc(e)||Ks(e);e=n?e:le(e),oo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ao(e),g_(this))}}function Yt(t){return je(t)?t.value:t}const RT={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return je(s)&&!je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function y_(t){return ir(t)?t:new Proxy(t,RT)}function ST(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=CT(t,n);return e}class PT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Zw(le(this._object),this._key)}}function CT(t,e,n){const r=t[e];return je(r)?r:new PT(t,e,n)}class DT{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Uh(e,()=>{this._dirty||(this._dirty=!0,g_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return m_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function xT(t,e,n=!1){let r,s;const i=oe(t);return i?(r=t,s=Qt):(r=t.get,s=t.set),new DT(r,s,i||!s,n)}function or(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){jc(i,e,n)}return s}function qt(t,e,n,r){if(oe(t)){const i=or(t,e,n,r);return i&&Hg(i)&&i.catch(o=>{jc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(qt(t[i],e,n,r));return s}function jc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){or(c,null,10,[t,o,a]);return}}VT(t,n,s,r)}function VT(t,e,n,r=!0){console.error(t)}let co=!1,Sl=!1;const pt=[];let on=0;const Ls=[];let An=null,Lr=0;const v_=Promise.resolve();let zh=null;function Gh(t){const e=zh||v_;return t?e.then(this?t.bind(this):t):e}function kT(t){let e=on+1,n=pt.length;for(;e<n;){const r=e+n>>>1;uo(pt[r])<t?e=r+1:n=r}return e}function Wh(t){(!pt.length||!pt.includes(t,co&&t.allowRecurse?on+1:on))&&(t.id==null?pt.push(t):pt.splice(kT(t.id),0,t),I_())}function I_(){!co&&!Sl&&(Sl=!0,zh=v_.then(w_))}function NT(t){const e=pt.indexOf(t);e>on&&pt.splice(e,1)}function OT(t){Z(t)?Ls.push(...t):(!An||!An.includes(t,t.allowRecurse?Lr+1:Lr))&&Ls.push(t),I_()}function Xf(t,e=co?on+1:0){for(;e<pt.length;e++){const n=pt[e];n&&n.pre&&(pt.splice(e,1),e--,n())}}function E_(t){if(Ls.length){const e=[...new Set(Ls)];if(Ls.length=0,An){An.push(...e);return}for(An=e,An.sort((n,r)=>uo(n)-uo(r)),Lr=0;Lr<An.length;Lr++)An[Lr]();An=null,Lr=0}}const uo=t=>t.id==null?1/0:t.id,MT=(t,e)=>{const n=uo(t)-uo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function w_(t){Sl=!1,co=!0,pt.sort(MT);const e=Qt;try{for(on=0;on<pt.length;on++){const n=pt[on];n&&n.active!==!1&&or(n,null,14)}}finally{on=0,pt.length=0,E_(),co=!1,zh=null,(pt.length||Ls.length)&&w_()}}function LT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||De;d&&(s=n.map(f=>He(f)?f.trim():f)),h&&(s=n.map(wl))}let a,c=r[a=Ku(e)]||r[a=Ku(_n(e))];!c&&i&&(c=r[a=Ku(ui(e))]),c&&qt(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qt(u,t,6,s)}}function T_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=u=>{const l=T_(u,e,!0);l&&(a=!0,ze(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ne(t)&&r.set(t,null),null):(Z(i)?i.forEach(c=>o[c]=null):ze(o,i),Ne(t)&&r.set(t,o),o)}function Kc(t,e){return!t||!Lc(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,ui(e))||me(t,e))}let tt=null,A_=null;function nc(t){const e=tt;return tt=t,A_=t&&t.type.__scopeId||null,e}function Ua(t,e=tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&dp(-1);const i=nc(e);let o;try{o=t(...s)}finally{nc(i),r._d&&dp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:_,inheritAttrs:y}=t;let E,A;const C=nc(t);try{if(n.shapeFlag&4){const x=s||r;E=sn(l.call(x,x,h,i,f,d,_)),A=c}else{const x=e;E=sn(x.length>1?x(i,{attrs:c,slots:a,emit:u}):x(i,null)),A=e.props?c:FT(c)}}catch(x){Hi.length=0,jc(x,t,1),E=Ye(Kt)}let V=E;if(A&&y!==!1){const x=Object.keys(A),{shapeFlag:q}=V;x.length&&q&7&&(o&&x.some(Vh)&&(A=UT(A,o)),V=hr(V,A))}return n.dirs&&(V=hr(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),E=V,nc(C),E}const FT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Lc(n))&&((e||(e={}))[n]=t[n]);return e},UT=(t,e)=>{const n={};for(const r in t)(!Vh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function BT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zf(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!Kc(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Zf(r,o,u):!0:!!o;return!1}function Zf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Kc(n,i))return!0}return!1}function $T({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const qT=t=>t.__isSuspense;function jT(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):OT(t)}function _N(t,e){return Hh(t,null,e)}const wa={};function zi(t,e,n){return Hh(t,e,n)}function Hh(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=De){var a;const c=t_()===((a=Qe)==null?void 0:a.scope)?Qe:null;let u,l=!1,h=!1;if(je(t)?(u=()=>t.value,l=tc(t)):ir(t)?(u=()=>t,r=!0):Z(t)?(h=!0,l=t.some(x=>ir(x)||tc(x)),u=()=>t.map(x=>{if(je(x))return x.value;if(ir(x))return zr(x);if(oe(x))return or(x,c,2)})):oe(t)?e?u=()=>or(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),qt(t,c,3,[f])}:u=Qt,e&&r){const x=u;u=()=>zr(x())}let d,f=x=>{d=C.onStop=()=>{or(x,c,4)}},_;if(mo)if(f=Qt,e?n&&qt(e,c,3,[u(),h?[]:void 0,f]):u(),s==="sync"){const x=MA();_=x.__watcherHandles||(x.__watcherHandles=[])}else return Qt;let y=h?new Array(t.length).fill(wa):wa;const E=()=>{if(C.active)if(e){const x=C.run();(r||l||(h?x.some((q,Q)=>oo(q,y[Q])):oo(x,y)))&&(d&&d(),qt(e,c,3,[x,y===wa?void 0:h&&y[0]===wa?[]:y,f]),y=x)}else C.run()};E.allowRecurse=!!e;let A;s==="sync"?A=E:s==="post"?A=()=>Rt(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),A=()=>Wh(E));const C=new Uh(u,A);e?n?E():y=C.run():s==="post"?Rt(C.run.bind(C),c&&c.suspense):C.run();const V=()=>{C.stop(),c&&c.scope&&kh(c.scope.effects,C)};return _&&_.push(V),V}function KT(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?b_(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const o=Qe;zs(this);const a=Hh(s,i.bind(r),n);return o?zs(o):Jr(),a}function b_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function zr(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))zr(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)zr(t[n],e);else if(Wg(t)||Ms(t))t.forEach(n=>{zr(n,e)});else if(Yg(t))for(const n in t)zr(t[n],e);return t}function ep(t,e){const n=tt;if(n===null)return t;const r=Qc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=De]=e[i];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&zr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function xr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(li(),qt(c,n,8,[t.el,a,t,e]),hi())}}function R_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return x_(()=>{t.isMounted=!0}),k_(()=>{t.isUnmounting=!0}),t}const Ut=[Function,Array],S_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut},zT={name:"BaseTransition",props:S_,setup(t,{slots:e}){const n=W_(),r=R_();let s;return()=>{const i=e.default&&Qh(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Kt){o=y;break}}const a=le(t),{mode:c}=a;if(r.isLeaving)return Gu(o);const u=tp(o);if(!u)return Gu(o);const l=lo(u,a,r,n);ho(u,l);const h=n.subTree,d=h&&tp(h);let f=!1;const{getTransitionKey:_}=u.type;if(_){const y=_();s===void 0?s=y:y!==s&&(s=y,f=!0)}if(d&&d.type!==Kt&&(!Fr(u,d)||f)){const y=lo(d,a,r,n);if(ho(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Gu(o);c==="in-out"&&u.type!==Kt&&(y.delayLeave=(E,A,C)=>{const V=P_(r,d);V[String(d.key)]=d,E._leaveCb=()=>{A(),E._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=C})}return o}}},GT=zT;function P_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function lo(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:_,onBeforeAppear:y,onAppear:E,onAfterAppear:A,onAppearCancelled:C}=e,V=String(t.key),x=P_(n,t),q=(U,G)=>{U&&qt(U,r,9,G)},Q=(U,G)=>{const ne=G[1];q(U,G),Z(U)?U.every(be=>be.length<=1)&&ne():U.length<=1&&ne()},ae={mode:i,persisted:o,beforeEnter(U){let G=a;if(!n.isMounted)if(s)G=y||a;else return;U._leaveCb&&U._leaveCb(!0);const ne=x[V];ne&&Fr(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),q(G,[U])},enter(U){let G=c,ne=u,be=l;if(!n.isMounted)if(s)G=E||c,ne=A||u,be=C||l;else return;let K=!1;const _e=U._enterCb=at=>{K||(K=!0,at?q(be,[U]):q(ne,[U]),ae.delayedLeave&&ae.delayedLeave(),U._enterCb=void 0)};G?Q(G,[U,_e]):_e()},leave(U,G){const ne=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return G();q(h,[U]);let be=!1;const K=U._leaveCb=_e=>{be||(be=!0,G(),_e?q(_,[U]):q(f,[U]),U._leaveCb=void 0,x[ne]===t&&delete x[ne])};x[ne]=t,d?Q(d,[U,K]):K()},clone(U){return lo(U,e,n,r)}};return ae}function Gu(t){if(zc(t))return t=hr(t),t.children=null,t}function tp(t){return zc(t)?t.children?t.children[0]:void 0:t}function ho(t,e){t.shapeFlag&6&&t.component?ho(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Qh(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Pt?(o.patchFlag&128&&s++,r=r.concat(Qh(o.children,e,a))):(e||o.type!==Kt)&&r.push(a!=null?hr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function C_(t,e){return oe(t)?(()=>ze({name:t.name},e,{setup:t}))():t}const Gi=t=>!!t.type.__asyncLoader,zc=t=>t.type.__isKeepAlive;function WT(t,e){D_(t,"a",e)}function HT(t,e){D_(t,"da",e)}function D_(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Gc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zc(s.parent.vnode)&&QT(r,e,n,s),s=s.parent}}function QT(t,e,n,r){const s=Gc(e,t,r,!0);N_(()=>{kh(r[e],s)},n)}function Gc(t,e,n=Qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;li(),zs(n);const a=qt(e,n,t,o);return Jr(),hi(),a});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=Qe)=>(!mo||t==="sp")&&Gc(t,(...r)=>e(...r),n),YT=On("bm"),x_=On("m"),JT=On("bu"),V_=On("u"),k_=On("bum"),N_=On("um"),XT=On("sp"),ZT=On("rtg"),eA=On("rtc");function tA(t,e=Qe){Gc("ec",t,e)}const O_="components";function np(t,e){return rA(O_,t,!0,e)||t}const nA=Symbol.for("v-ndc");function rA(t,e,n=!0,r=!1){const s=tt||Qe;if(s){const i=s.type;if(t===O_){const a=kA(i,!1);if(a&&(a===e||a===_n(e)||a===Bc(_n(e))))return i}const o=rp(s[t]||i[t],e)||rp(s.appContext[t],e);return!o&&r?i:o}}function rp(t,e){return t&&(t[e]||t[_n(e)]||t[Bc(_n(e))])}function yN(t,e,n,r){let s;const i=n&&n[r];if(Z(t)||He(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function vN(t,e,n={},r,s){if(tt.isCE||tt.parent&&Gi(tt.parent)&&tt.parent.isCE)return e!=="default"&&(n.name=e),Ye("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),ar();const o=i&&M_(i(n)),a=ic(Pt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function M_(t){return t.some(e=>oc(e)?!(e.type===Kt||e.type===Pt&&!M_(e.children)):!0)?t:null}const Pl=t=>t?H_(t)?Qc(t)||t.proxy:Pl(t.parent):null,Wi=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pl(t.parent),$root:t=>Pl(t.root),$emit:t=>t.emit,$options:t=>Yh(t),$forceUpdate:t=>t.f||(t.f=()=>Wh(t.update)),$nextTick:t=>t.n||(t.n=Gh.bind(t.proxy)),$watch:t=>KT.bind(t)}),Wu=(t,e)=>t!==De&&!t.__isScriptSetup&&me(t,e),sA={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wu(r,e))return o[e]=1,r[e];if(s!==De&&me(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&me(u,e))return o[e]=3,i[e];if(n!==De&&me(n,e))return o[e]=4,n[e];Cl&&(o[e]=0)}}const l=Wi[e];let h,d;if(l)return e==="$attrs"&&kt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==De&&me(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,me(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wu(s,e)?(s[e]=n,!0):r!==De&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==De&&me(t,o)||Wu(e,o)||(a=i[0])&&me(a,o)||me(r,o)||me(Wi,o)||me(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sp(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cl=!0;function iA(t){const e=Yh(t),n=t.proxy,r=t.ctx;Cl=!1,e.beforeCreate&&ip(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:y,deactivated:E,beforeDestroy:A,beforeUnmount:C,destroyed:V,unmounted:x,render:q,renderTracked:Q,renderTriggered:ae,errorCaptured:U,serverPrefetch:G,expose:ne,inheritAttrs:be,components:K,directives:_e,filters:at}=e;if(u&&oA(u,r,null),o)for(const Re in o){const ye=o[Re];oe(ye)&&(r[Re]=ye.bind(n))}if(s){const Re=s.call(n,n);Ne(Re)&&(t.data=$o(Re))}if(Cl=!0,i)for(const Re in i){const ye=i[Re],En=oe(ye)?ye.bind(n,n):oe(ye.get)?ye.get.bind(n,n):Qt,Un=!oe(ye)&&oe(ye.set)?ye.set.bind(n):Qt,tn=Ct({get:En,set:Un});Object.defineProperty(r,Re,{enumerable:!0,configurable:!0,get:()=>tn.value,set:bt=>tn.value=bt})}if(a)for(const Re in a)L_(a[Re],r,n,Re);if(c){const Re=oe(c)?c.call(n):c;Reflect.ownKeys(Re).forEach(ye=>{Ba(ye,Re[ye])})}l&&ip(l,t,"c");function he(Re,ye){Z(ye)?ye.forEach(En=>Re(En.bind(n))):ye&&Re(ye.bind(n))}if(he(YT,h),he(x_,d),he(JT,f),he(V_,_),he(WT,y),he(HT,E),he(tA,U),he(eA,Q),he(ZT,ae),he(k_,C),he(N_,x),he(XT,G),Z(ne))if(ne.length){const Re=t.exposed||(t.exposed={});ne.forEach(ye=>{Object.defineProperty(Re,ye,{get:()=>n[ye],set:En=>n[ye]=En})})}else t.exposed||(t.exposed={});q&&t.render===Qt&&(t.render=q),be!=null&&(t.inheritAttrs=be),K&&(t.components=K),_e&&(t.directives=_e)}function oA(t,e,n=Qt){Z(t)&&(t=Dl(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=jt(s.from||r,s.default,!0):i=jt(s.from||r):i=jt(s),je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ip(t,e,n){qt(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function L_(t,e,n,r){const s=r.includes(".")?b_(n,r):()=>n[r];if(He(t)){const i=e[t];oe(i)&&zi(s,i)}else if(oe(t))zi(s,t.bind(n));else if(Ne(t))if(Z(t))t.forEach(i=>L_(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&zi(s,i,t)}}function Yh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>rc(c,u,o,!0)),rc(c,e,o)),Ne(e)&&i.set(e,c),c}function rc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&rc(t,i,n,!0),s&&s.forEach(o=>rc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=aA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const aA={data:op,props:ap,emits:ap,methods:Li,computed:Li,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Li,directives:Li,watch:uA,provide:op,inject:cA};function op(t,e){return e?t?function(){return ze(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function cA(t,e){return Li(Dl(t),Dl(e))}function Dl(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Li(t,e){return t?ze(Object.create(null),t,e):e}function ap(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:ze(Object.create(null),sp(t),sp(e??{})):e}function uA(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function F_(){return{app:null,config:{isNativeTag:Mw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lA=0;function hA(t,e){return function(r,s=null){oe(r)||(r=ze({},r)),s!=null&&!Ne(s)&&(s=null);const i=F_(),o=new Set;let a=!1;const c=i.app={_uid:lA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:LA,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&oe(u.install)?(o.add(u),u.install(c,...l)):oe(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Ye(r,s);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Qc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){fo=c;try{return u()}finally{fo=null}}};return c}}let fo=null;function Ba(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=Qe||tt;if(r||fo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:fo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}function dA(){return!!(Qe||tt||fo)}function fA(t,e,n,r=!1){const s={},i={};Za(i,Hc,1),t.propsDefaults=Object.create(null),U_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:d_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function pA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Kc(t.emitsOptions,d))continue;const f=e[d];if(c)if(me(i,d))f!==i[d]&&(i[d]=f,u=!0);else{const _=_n(d);s[_]=xl(c,a,_,f,t,!1)}else f!==i[d]&&(i[d]=f,u=!0)}}}else{U_(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!me(e,h)&&((l=ui(h))===h||!me(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=xl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!me(e,h))&&(delete i[h],u=!0)}u&&Dn(t,"set","$attrs")}function U_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(La(c))continue;const u=e[c];let l;s&&me(s,l=_n(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Kc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=le(n),u=a||De;for(let l=0;l<i.length;l++){const h=i[l];n[h]=xl(s,c,h,u[h],t,!me(u,h))}}return o}function xl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&oe(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(zs(s),r=u[n]=c.call(null,e),Jr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ui(n))&&(r=!0))}return r}function B_(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const l=h=>{c=!0;const[d,f]=B_(h,e,!0);ze(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ne(t)&&r.set(t,Os),Os;if(Z(i))for(let l=0;l<i.length;l++){const h=_n(i[l]);cp(h)&&(o[h]=De)}else if(i)for(const l in i){const h=_n(l);if(cp(h)){const d=i[l],f=o[h]=Z(d)||oe(d)?{type:d}:ze({},d);if(f){const _=hp(Boolean,f.type),y=hp(String,f.type);f[0]=_>-1,f[1]=y<0||_<y,(_>-1||me(f,"default"))&&a.push(h)}}}const u=[o,a];return Ne(t)&&r.set(t,u),u}function cp(t){return t[0]!=="$"}function up(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function lp(t,e){return up(t)===up(e)}function hp(t,e){return Z(e)?e.findIndex(n=>lp(n,t)):oe(e)&&lp(e,t)?0:-1}const $_=t=>t[0]==="_"||t==="$stable",Jh=t=>Z(t)?t.map(sn):[sn(t)],mA=(t,e,n)=>{if(e._n)return e;const r=Ua((...s)=>Jh(e(...s)),n);return r._c=!1,r},q_=(t,e,n)=>{const r=t._ctx;for(const s in t){if($_(s))continue;const i=t[s];if(oe(i))e[s]=mA(s,i,r);else if(i!=null){const o=Jh(i);e[s]=()=>o}}},j_=(t,e)=>{const n=Jh(e);t.slots.default=()=>n},gA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),Za(e,"_",n)):q_(e,t.slots={})}else t.slots={},e&&j_(t,e);Za(t.slots,Hc,1)},_A=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,q_(e,s)),o=e}else e&&(j_(t,e),o={default:1});if(i)for(const a in s)!$_(a)&&!(a in o)&&delete s[a]};function Vl(t,e,n,r,s=!1){if(Z(t)){t.forEach((d,f)=>Vl(d,e&&(Z(e)?e[f]:e),n,r,s));return}if(Gi(r)&&!s)return;const i=r.shapeFlag&4?Qc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===De?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(He(u)?(l[u]=null,me(h,u)&&(h[u]=null)):je(u)&&(u.value=null)),oe(c))or(c,a,12,[o,l]);else{const d=He(c),f=je(c);if(d||f){const _=()=>{if(t.f){const y=d?me(h,c)?h[c]:l[c]:c.value;s?Z(y)&&kh(y,i):Z(y)?y.includes(i)||y.push(i):d?(l[c]=[i],me(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,me(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(_.id=-1,Rt(_,n)):_()}}}const Rt=jT;function yA(t){return vA(t)}function vA(t,e){const n=Tl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=Qt,insertStaticContent:_}=t,y=(p,m,g,w=null,b=null,P=null,B=!1,k=null,O=!!m.dynamicChildren)=>{if(p===m)return;p&&!Fr(p,m)&&(w=T(p),bt(p,b,P,!0),p=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:D,ref:J,shapeFlag:z}=m;switch(D){case Wc:E(p,m,g,w);break;case Kt:A(p,m,g,w);break;case Hu:p==null&&C(m,g,w,B);break;case Pt:K(p,m,g,w,b,P,B,k,O);break;default:z&1?q(p,m,g,w,b,P,B,k,O):z&6?_e(p,m,g,w,b,P,B,k,O):(z&64||z&128)&&D.process(p,m,g,w,b,P,B,k,O,M)}J!=null&&b&&Vl(J,p&&p.ref,P,m||p,!m)},E=(p,m,g,w)=>{if(p==null)r(m.el=a(m.children),g,w);else{const b=m.el=p.el;m.children!==p.children&&u(b,m.children)}},A=(p,m,g,w)=>{p==null?r(m.el=c(m.children||""),g,w):m.el=p.el},C=(p,m,g,w)=>{[p.el,p.anchor]=_(p.children,m,g,w,p.el,p.anchor)},V=({el:p,anchor:m},g,w)=>{let b;for(;p&&p!==m;)b=d(p),r(p,g,w),p=b;r(m,g,w)},x=({el:p,anchor:m})=>{let g;for(;p&&p!==m;)g=d(p),s(p),p=g;s(m)},q=(p,m,g,w,b,P,B,k,O)=>{B=B||m.type==="svg",p==null?Q(m,g,w,b,P,B,k,O):G(p,m,b,P,B,k,O)},Q=(p,m,g,w,b,P,B,k)=>{let O,D;const{type:J,props:z,shapeFlag:X,transition:re,dirs:ce}=p;if(O=p.el=o(p.type,P,z&&z.is,z),X&8?l(O,p.children):X&16&&U(p.children,O,null,w,b,P&&J!=="foreignObject",B,k),ce&&xr(p,null,w,"created"),ae(O,p,p.scopeId,B,w),z){for(const Ae in z)Ae!=="value"&&!La(Ae)&&i(O,Ae,null,z[Ae],P,p.children,w,b,dt);"value"in z&&i(O,"value",null,z.value),(D=z.onVnodeBeforeMount)&&rn(D,w,p)}ce&&xr(p,null,w,"beforeMount");const Pe=(!b||b&&!b.pendingBranch)&&re&&!re.persisted;Pe&&re.beforeEnter(O),r(O,m,g),((D=z&&z.onVnodeMounted)||Pe||ce)&&Rt(()=>{D&&rn(D,w,p),Pe&&re.enter(O),ce&&xr(p,null,w,"mounted")},b)},ae=(p,m,g,w,b)=>{if(g&&f(p,g),w)for(let P=0;P<w.length;P++)f(p,w[P]);if(b){let P=b.subTree;if(m===P){const B=b.vnode;ae(p,B,B.scopeId,B.slotScopeIds,b.parent)}}},U=(p,m,g,w,b,P,B,k,O=0)=>{for(let D=O;D<p.length;D++){const J=p[D]=k?Qn(p[D]):sn(p[D]);y(null,J,m,g,w,b,P,B,k)}},G=(p,m,g,w,b,P,B)=>{const k=m.el=p.el;let{patchFlag:O,dynamicChildren:D,dirs:J}=m;O|=p.patchFlag&16;const z=p.props||De,X=m.props||De;let re;g&&Vr(g,!1),(re=X.onVnodeBeforeUpdate)&&rn(re,g,m,p),J&&xr(m,p,g,"beforeUpdate"),g&&Vr(g,!0);const ce=b&&m.type!=="foreignObject";if(D?ne(p.dynamicChildren,D,k,g,w,ce,P):B||ye(p,m,k,null,g,w,ce,P,!1),O>0){if(O&16)be(k,m,z,X,g,w,b);else if(O&2&&z.class!==X.class&&i(k,"class",null,X.class,b),O&4&&i(k,"style",z.style,X.style,b),O&8){const Pe=m.dynamicProps;for(let Ae=0;Ae<Pe.length;Ae++){const Ge=Pe[Ae],zt=z[Ge],ws=X[Ge];(ws!==zt||Ge==="value")&&i(k,Ge,zt,ws,b,p.children,g,w,dt)}}O&1&&p.children!==m.children&&l(k,m.children)}else!B&&D==null&&be(k,m,z,X,g,w,b);((re=X.onVnodeUpdated)||J)&&Rt(()=>{re&&rn(re,g,m,p),J&&xr(m,p,g,"updated")},w)},ne=(p,m,g,w,b,P,B)=>{for(let k=0;k<m.length;k++){const O=p[k],D=m[k],J=O.el&&(O.type===Pt||!Fr(O,D)||O.shapeFlag&70)?h(O.el):g;y(O,D,J,null,w,b,P,B,!0)}},be=(p,m,g,w,b,P,B)=>{if(g!==w){if(g!==De)for(const k in g)!La(k)&&!(k in w)&&i(p,k,g[k],null,B,m.children,b,P,dt);for(const k in w){if(La(k))continue;const O=w[k],D=g[k];O!==D&&k!=="value"&&i(p,k,D,O,B,m.children,b,P,dt)}"value"in w&&i(p,"value",g.value,w.value)}},K=(p,m,g,w,b,P,B,k,O)=>{const D=m.el=p?p.el:a(""),J=m.anchor=p?p.anchor:a("");let{patchFlag:z,dynamicChildren:X,slotScopeIds:re}=m;re&&(k=k?k.concat(re):re),p==null?(r(D,g,w),r(J,g,w),U(m.children,g,J,b,P,B,k,O)):z>0&&z&64&&X&&p.dynamicChildren?(ne(p.dynamicChildren,X,g,b,P,B,k),(m.key!=null||b&&m===b.subTree)&&K_(p,m,!0)):ye(p,m,g,J,b,P,B,k,O)},_e=(p,m,g,w,b,P,B,k,O)=>{m.slotScopeIds=k,p==null?m.shapeFlag&512?b.ctx.activate(m,g,w,B,O):at(m,g,w,b,P,B,O):_t(p,m,O)},at=(p,m,g,w,b,P,B)=>{const k=p.component=PA(p,w,b);if(zc(p)&&(k.ctx.renderer=M),CA(k),k.asyncDep){if(b&&b.registerDep(k,he),!p.el){const O=k.subTree=Ye(Kt);A(null,O,m,g)}return}he(k,p,m,g,b,P,B)},_t=(p,m,g)=>{const w=m.component=p.component;if(BT(p,m,g))if(w.asyncDep&&!w.asyncResolved){Re(w,m,g);return}else w.next=m,NT(w.update),w.update();else m.el=p.el,w.vnode=m},he=(p,m,g,w,b,P,B)=>{const k=()=>{if(p.isMounted){let{next:J,bu:z,u:X,parent:re,vnode:ce}=p,Pe=J,Ae;Vr(p,!1),J?(J.el=ce.el,Re(p,J,B)):J=ce,z&&Fa(z),(Ae=J.props&&J.props.onVnodeBeforeUpdate)&&rn(Ae,re,J,ce),Vr(p,!0);const Ge=zu(p),zt=p.subTree;p.subTree=Ge,y(zt,Ge,h(zt.el),T(zt),p,b,P),J.el=Ge.el,Pe===null&&$T(p,Ge.el),X&&Rt(X,b),(Ae=J.props&&J.props.onVnodeUpdated)&&Rt(()=>rn(Ae,re,J,ce),b)}else{let J;const{el:z,props:X}=m,{bm:re,m:ce,parent:Pe}=p,Ae=Gi(m);if(Vr(p,!1),re&&Fa(re),!Ae&&(J=X&&X.onVnodeBeforeMount)&&rn(J,Pe,m),Vr(p,!0),z&&ve){const Ge=()=>{p.subTree=zu(p),ve(z,p.subTree,p,b,null)};Ae?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ge()):Ge()}else{const Ge=p.subTree=zu(p);y(null,Ge,g,w,p,b,P),m.el=Ge.el}if(ce&&Rt(ce,b),!Ae&&(J=X&&X.onVnodeMounted)){const Ge=m;Rt(()=>rn(J,Pe,Ge),b)}(m.shapeFlag&256||Pe&&Gi(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&p.a&&Rt(p.a,b),p.isMounted=!0,m=g=w=null}},O=p.effect=new Uh(k,()=>Wh(D),p.scope),D=p.update=()=>O.run();D.id=p.uid,Vr(p,!0),D()},Re=(p,m,g)=>{m.component=p;const w=p.vnode.props;p.vnode=m,p.next=null,pA(p,m.props,w,g),_A(p,m.children,g),li(),Xf(),hi()},ye=(p,m,g,w,b,P,B,k,O=!1)=>{const D=p&&p.children,J=p?p.shapeFlag:0,z=m.children,{patchFlag:X,shapeFlag:re}=m;if(X>0){if(X&128){Un(D,z,g,w,b,P,B,k,O);return}else if(X&256){En(D,z,g,w,b,P,B,k,O);return}}re&8?(J&16&&dt(D,b,P),z!==D&&l(g,z)):J&16?re&16?Un(D,z,g,w,b,P,B,k,O):dt(D,b,P,!0):(J&8&&l(g,""),re&16&&U(z,g,w,b,P,B,k,O))},En=(p,m,g,w,b,P,B,k,O)=>{p=p||Os,m=m||Os;const D=p.length,J=m.length,z=Math.min(D,J);let X;for(X=0;X<z;X++){const re=m[X]=O?Qn(m[X]):sn(m[X]);y(p[X],re,g,null,b,P,B,k,O)}D>J?dt(p,b,P,!0,!1,z):U(m,g,w,b,P,B,k,O,z)},Un=(p,m,g,w,b,P,B,k,O)=>{let D=0;const J=m.length;let z=p.length-1,X=J-1;for(;D<=z&&D<=X;){const re=p[D],ce=m[D]=O?Qn(m[D]):sn(m[D]);if(Fr(re,ce))y(re,ce,g,null,b,P,B,k,O);else break;D++}for(;D<=z&&D<=X;){const re=p[z],ce=m[X]=O?Qn(m[X]):sn(m[X]);if(Fr(re,ce))y(re,ce,g,null,b,P,B,k,O);else break;z--,X--}if(D>z){if(D<=X){const re=X+1,ce=re<J?m[re].el:w;for(;D<=X;)y(null,m[D]=O?Qn(m[D]):sn(m[D]),g,ce,b,P,B,k,O),D++}}else if(D>X)for(;D<=z;)bt(p[D],b,P,!0),D++;else{const re=D,ce=D,Pe=new Map;for(D=ce;D<=X;D++){const Ot=m[D]=O?Qn(m[D]):sn(m[D]);Ot.key!=null&&Pe.set(Ot.key,D)}let Ae,Ge=0;const zt=X-ce+1;let ws=!1,$f=0;const Ti=new Array(zt);for(D=0;D<zt;D++)Ti[D]=0;for(D=re;D<=z;D++){const Ot=p[D];if(Ge>=zt){bt(Ot,b,P,!0);continue}let nn;if(Ot.key!=null)nn=Pe.get(Ot.key);else for(Ae=ce;Ae<=X;Ae++)if(Ti[Ae-ce]===0&&Fr(Ot,m[Ae])){nn=Ae;break}nn===void 0?bt(Ot,b,P,!0):(Ti[nn-ce]=D+1,nn>=$f?$f=nn:ws=!0,y(Ot,m[nn],g,null,b,P,B,k,O),Ge++)}const qf=ws?IA(Ti):Os;for(Ae=qf.length-1,D=zt-1;D>=0;D--){const Ot=ce+D,nn=m[Ot],jf=Ot+1<J?m[Ot+1].el:w;Ti[D]===0?y(null,nn,g,jf,b,P,B,k,O):ws&&(Ae<0||D!==qf[Ae]?tn(nn,g,jf,2):Ae--)}}},tn=(p,m,g,w,b=null)=>{const{el:P,type:B,transition:k,children:O,shapeFlag:D}=p;if(D&6){tn(p.component.subTree,m,g,w);return}if(D&128){p.suspense.move(m,g,w);return}if(D&64){B.move(p,m,g,M);return}if(B===Pt){r(P,m,g);for(let z=0;z<O.length;z++)tn(O[z],m,g,w);r(p.anchor,m,g);return}if(B===Hu){V(p,m,g);return}if(w!==2&&D&1&&k)if(w===0)k.beforeEnter(P),r(P,m,g),Rt(()=>k.enter(P),b);else{const{leave:z,delayLeave:X,afterLeave:re}=k,ce=()=>r(P,m,g),Pe=()=>{z(P,()=>{ce(),re&&re()})};X?X(P,ce,Pe):Pe()}else r(P,m,g)},bt=(p,m,g,w=!1,b=!1)=>{const{type:P,props:B,ref:k,children:O,dynamicChildren:D,shapeFlag:J,patchFlag:z,dirs:X}=p;if(k!=null&&Vl(k,null,g,p,!0),J&256){m.ctx.deactivate(p);return}const re=J&1&&X,ce=!Gi(p);let Pe;if(ce&&(Pe=B&&B.onVnodeBeforeUnmount)&&rn(Pe,m,p),J&6)ga(p.component,g,w);else{if(J&128){p.suspense.unmount(g,w);return}re&&xr(p,null,m,"beforeUnmount"),J&64?p.type.remove(p,m,g,b,M,w):D&&(P!==Pt||z>0&&z&64)?dt(D,m,g,!1,!0):(P===Pt&&z&384||!b&&J&16)&&dt(O,m,g),w&&Is(p)}(ce&&(Pe=B&&B.onVnodeUnmounted)||re)&&Rt(()=>{Pe&&rn(Pe,m,p),re&&xr(p,null,m,"unmounted")},g)},Is=p=>{const{type:m,el:g,anchor:w,transition:b}=p;if(m===Pt){Es(g,w);return}if(m===Hu){x(p);return}const P=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:B,delayLeave:k}=b,O=()=>B(g,P);k?k(p.el,P,O):O()}else P()},Es=(p,m)=>{let g;for(;p!==m;)g=d(p),s(p),p=g;s(m)},ga=(p,m,g)=>{const{bum:w,scope:b,update:P,subTree:B,um:k}=p;w&&Fa(w),b.stop(),P&&(P.active=!1,bt(B,p,m,g)),k&&Rt(k,m),Rt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},dt=(p,m,g,w=!1,b=!1,P=0)=>{for(let B=P;B<p.length;B++)bt(p[B],m,g,w,b)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),j=(p,m,g)=>{p==null?m._vnode&&bt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,g),Xf(),E_(),m._vnode=p},M={p:y,um:bt,m:tn,r:Is,mt:at,mc:U,pc:ye,pbc:ne,n:T,o:t};let Y,ve;return e&&([Y,ve]=e(M)),{render:j,hydrate:Y,createApp:hA(j,Y)}}function Vr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function K_(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Qn(s[i]),a.el=o.el),n||K_(o,a)),a.type===Wc&&(a.el=o.el)}}function IA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const EA=t=>t.__isTeleport,Pt=Symbol.for("v-fgt"),Wc=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Hu=Symbol.for("v-stc"),Hi=[];let Wt=null;function ar(t=!1){Hi.push(Wt=t?null:[])}function wA(){Hi.pop(),Wt=Hi[Hi.length-1]||null}let po=1;function dp(t){po+=t}function z_(t){return t.dynamicChildren=po>0?Wt||Os:null,wA(),po>0&&Wt&&Wt.push(t),t}function sc(t,e,n,r,s,i){return z_(Se(t,e,n,r,s,i,!0))}function ic(t,e,n,r,s){return z_(Ye(t,e,n,r,s,!0))}function oc(t){return t?t.__v_isVNode===!0:!1}function Fr(t,e){return t.type===e.type&&t.key===e.key}const Hc="__vInternal",G_=({key:t})=>t??null,$a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||je(t)||oe(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function Se(t,e=null,n=null,r=0,s=null,i=t===Pt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&G_(e),ref:e&&$a(e),scopeId:A_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return a?(Xh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),po>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const Ye=TA;function TA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===nA)&&(t=Kt),oc(t)){const a=hr(t,e,!0);return n&&Xh(a,n),po>0&&!i&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(t)]=a:Wt.push(a)),a.patchFlag|=-2,a}if(NA(t)&&(t=t.__vccOpts),e){e=AA(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=Lh(a)),Ne(c)&&(p_(c)&&!Z(c)&&(c=ze({},c)),e.style=Mh(c))}const o=He(t)?1:qT(t)?128:EA(t)?64:Ne(t)?4:oe(t)?2:0;return Se(t,e,n,r,s,o,i,!0)}function AA(t){return t?p_(t)||Hc in t?ze({},t):t:null}function hr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?bA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&G_(a),ref:e&&e.ref?n&&s?Z(s)?s.concat($a(e)):[s,$a(e)]:$a(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function kl(t=" ",e=0){return Ye(Wc,null,t,e)}function Nl(t="",e=!1){return e?(ar(),ic(Kt,null,t)):Ye(Kt,null,t)}function sn(t){return t==null||typeof t=="boolean"?Ye(Kt):Z(t)?Ye(Pt,null,t.slice()):typeof t=="object"?Qn(t):Ye(Wc,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function Xh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Hc in e)?e._ctx=tt:s===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),r&64?(n=16,e=[kl(e)]):n=8);t.children=e,t.shapeFlag|=n}function bA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Lh([e.class,r.class]));else if(s==="style")e.style=Mh([e.style,r.style]);else if(Lc(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){qt(t,e,7,[n,r])}const RA=F_();let SA=0;function PA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||RA,i={uid:SA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B_(r,s),emitsOptions:T_(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=LT.bind(null,i),t.ce&&t.ce(i),i}let Qe=null;const W_=()=>Qe||tt;let Zh,Ts,fp="__VUE_INSTANCE_SETTERS__";(Ts=Tl()[fp])||(Ts=Tl()[fp]=[]),Ts.push(t=>Qe=t),Zh=t=>{Ts.length>1?Ts.forEach(e=>e(t)):Ts[0](t)};const zs=t=>{Zh(t),t.scope.on()},Jr=()=>{Qe&&Qe.scope.off(),Zh(null)};function H_(t){return t.vnode.shapeFlag&4}let mo=!1;function CA(t,e=!1){mo=e;const{props:n,children:r}=t.vnode,s=H_(t);fA(t,n,s,e),gA(t,r);const i=s?DA(t,e):void 0;return mo=!1,i}function DA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=qc(new Proxy(t.ctx,sA));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?VA(t):null;zs(t),li();const i=or(r,t,0,[t.props,s]);if(hi(),Jr(),Hg(i)){if(i.then(Jr,Jr),e)return i.then(o=>{pp(t,o,e)}).catch(o=>{jc(o,t,0)});t.asyncDep=i}else pp(t,i,e)}else Q_(t,e)}function pp(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=y_(e)),Q_(t,n)}let mp;function Q_(t,e,n){const r=t.type;if(!t.render){if(!e&&mp&&!r.render){const s=r.template||Yh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=ze(ze({isCustomElement:i,delimiters:a},o),c);r.render=mp(s,u)}}t.render=r.render||Qt}zs(t),li(),iA(t),hi(),Jr()}function xA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return kt(t,"get","$attrs"),e[n]}}))}function VA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return xA(t)},slots:t.slots,emit:t.emit,expose:e}}function Qc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(y_(qc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wi)return Wi[n](t)},has(e,n){return n in e||n in Wi}}))}function kA(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function NA(t){return oe(t)&&"__vccOpts"in t}const Ct=(t,e)=>xT(t,e,mo);function ed(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!Z(e)?oc(e)?Ye(t,null,[e]):Ye(t,e):Ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oc(n)&&(n=[n]),Ye(t,e,n))}const OA=Symbol.for("v-scx"),MA=()=>jt(OA),LA="3.3.4",FA="http://www.w3.org/2000/svg",Ur=typeof document<"u"?document:null,gp=Ur&&Ur.createElement("template"),UA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ur.createElementNS(FA,t):Ur.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ur.createTextNode(t),createComment:t=>Ur.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ur.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gp.innerHTML=r?`<svg>${t}</svg>`:t;const a=gp.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function BA(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $A(t,e,n){const r=t.style,s=He(n);if(n&&!s){if(e&&!He(e))for(const i in e)n[i]==null&&Ol(r,i,"");for(const i in n)Ol(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const _p=/\s*!important$/;function Ol(t,e,n){if(Z(n))n.forEach(r=>Ol(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=qA(t,e);_p.test(n)?t.setProperty(ui(r),n.replace(_p,""),"important"):t[r]=n}}const yp=["Webkit","Moz","ms"],Qu={};function qA(t,e){const n=Qu[e];if(n)return n;let r=_n(e);if(r!=="filter"&&r in t)return Qu[e]=r;r=Bc(r);for(let s=0;s<yp.length;s++){const i=yp[s]+r;if(i in t)return Qu[e]=i}return e}const vp="http://www.w3.org/1999/xlink";function jA(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vp,e.slice(6,e.length)):t.setAttributeNS(vp,e,n);else{const i=Hw(e);n==null||i&&!Jg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function KA(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n??"";u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Jg(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ps(t,e,n,r){t.addEventListener(e,n,r)}function zA(t,e,n,r){t.removeEventListener(e,n,r)}function GA(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=WA(e);if(r){const u=i[e]=YA(r,s);Ps(t,a,u,c)}else o&&(zA(t,a,o,c),i[e]=void 0)}}const Ip=/(?:Once|Passive|Capture)$/;function WA(t){let e;if(Ip.test(t)){e={};let r;for(;r=t.match(Ip);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ui(t.slice(2)),e]}let Yu=0;const HA=Promise.resolve(),QA=()=>Yu||(HA.then(()=>Yu=0),Yu=Date.now());function YA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qt(JA(r,n.value),e,5,[r])};return n.value=t,n.attached=QA(),n}function JA(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ep=/^on[a-z]/,XA=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?BA(t,r,s):e==="style"?$A(t,n,r):Lc(e)?Vh(e)||GA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ZA(t,e,r,s))?KA(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jA(t,e,r,s))};function ZA(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ep.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ep.test(e)&&He(n)?!1:e in t}const $n="transition",Ai="animation",Y_=(t,{slots:e})=>ed(GT,X_(t),e);Y_.displayName="Transition";const J_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},eb=Y_.props=ze({},S_,J_),kr=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},wp=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function X_(t){const e={};for(const K in t)K in J_||(e[K]=t[K]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,_=tb(s),y=_&&_[0],E=_&&_[1],{onBeforeEnter:A,onEnter:C,onEnterCancelled:V,onLeave:x,onLeaveCancelled:q,onBeforeAppear:Q=A,onAppear:ae=C,onAppearCancelled:U=V}=e,G=(K,_e,at)=>{Wn(K,_e?l:a),Wn(K,_e?u:o),at&&at()},ne=(K,_e)=>{K._isLeaving=!1,Wn(K,h),Wn(K,f),Wn(K,d),_e&&_e()},be=K=>(_e,at)=>{const _t=K?ae:C,he=()=>G(_e,K,at);kr(_t,[_e,he]),Tp(()=>{Wn(_e,K?c:i),Tn(_e,K?l:a),wp(_t)||Ap(_e,r,y,he)})};return ze(e,{onBeforeEnter(K){kr(A,[K]),Tn(K,i),Tn(K,o)},onBeforeAppear(K){kr(Q,[K]),Tn(K,c),Tn(K,u)},onEnter:be(!1),onAppear:be(!0),onLeave(K,_e){K._isLeaving=!0;const at=()=>ne(K,_e);Tn(K,h),ey(),Tn(K,d),Tp(()=>{K._isLeaving&&(Wn(K,h),Tn(K,f),wp(x)||Ap(K,r,E,at))}),kr(x,[K,at])},onEnterCancelled(K){G(K,!1),kr(V,[K])},onAppearCancelled(K){G(K,!0),kr(U,[K])},onLeaveCancelled(K){ne(K),kr(q,[K])}})}function tb(t){if(t==null)return null;if(Ne(t))return[Ju(t.enter),Ju(t.leave)];{const e=Ju(t);return[e,e]}}function Ju(t){return qw(t)}function Tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Wn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Tp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let nb=0;function Ap(t,e,n,r){const s=t._endId=++nb,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Z_(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),i()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function Z_(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),s=r(`${$n}Delay`),i=r(`${$n}Duration`),o=bp(s,i),a=r(`${Ai}Delay`),c=r(`${Ai}Duration`),u=bp(a,c);let l=null,h=0,d=0;e===$n?o>0&&(l=$n,h=o,d=i.length):e===Ai?u>0&&(l=Ai,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?$n:Ai:null,d=l?l===$n?i.length:c.length:0);const f=l===$n&&/\b(transform|all)(,|$)/.test(r(`${$n}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function bp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Rp(n)+Rp(t[r])))}function Rp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ey(){return document.body.offsetHeight}const ty=new WeakMap,ny=new WeakMap,ry={name:"TransitionGroup",props:ze({},eb,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=W_(),r=R_();let s,i;return V_(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!ab(s[0].el,n.vnode.el,o))return;s.forEach(sb),s.forEach(ib);const a=s.filter(ob);ey(),a.forEach(c=>{const u=c.el,l=u.style;Tn(u,o),l.transform=l.webkitTransform=l.transitionDuration="";const h=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",h),u._moveCb=null,Wn(u,o))};u.addEventListener("transitionend",h)})}),()=>{const o=le(t),a=X_(o);let c=o.tag||Pt;s=i,i=e.default?Qh(e.default()):[];for(let u=0;u<i.length;u++){const l=i[u];l.key!=null&&ho(l,lo(l,a,r,n))}if(s)for(let u=0;u<s.length;u++){const l=s[u];ho(l,lo(l,a,r,n)),ty.set(l,l.el.getBoundingClientRect())}return Ye(c,null,i)}}},rb=t=>delete t.mode;ry.props;const IN=ry;function sb(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function ib(t){ny.set(t,t.el.getBoundingClientRect())}function ob(t){const e=ty.get(t),n=ny.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function ab(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=Z_(r);return s.removeChild(r),i}const Sp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Fa(e,n):e};function cb(t){t.target.composing=!0}function Pp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cp={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Sp(s);const i=r||s.props&&s.props.type==="number";Ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=wl(a)),t._assign(a)}),n&&Ps(t,"change",()=>{t.value=t.value.trim()}),e||(Ps(t,"compositionstart",cb),Ps(t,"compositionend",Pp),Ps(t,"change",Pp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Sp(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&wl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ub=["ctrl","shift","alt","meta"],lb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ub.some(n=>t[`${n}Key`]&&!e.includes(n))},hb=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=lb[e[s]];if(i&&i(n,e))return}return t(n,...r)},EN={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):bi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),bi(t,!0),r.enter(t)):r.leave(t,()=>{bi(t,!1)}):bi(t,e))},beforeUnmount(t,{value:e}){bi(t,e)}};function bi(t,e){t.style.display=e?t._vod:"none"}const db=ze({patchProp:XA},UA);let Dp;function fb(){return Dp||(Dp=yA(db))}const pb=(...t)=>{const e=fb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=mb(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mb(t){return He(t)?document.querySelector(t):t}var gb=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let sy;const Yc=t=>sy=t,iy=Symbol();function Ml(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qi||(Qi={}));function _b(){const t=e_(!0),e=t.run(()=>cn({}));let n=[],r=[];const s=qc({install(i){Yc(s),s._a=i,i.provide(iy,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!gb?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const oy=()=>{};function xp(t,e,n,r=oy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&t_()&&Yw(s),s}function As(t,...e){t.slice().forEach(n=>{n(...e)})}const yb=t=>t();function Ll(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ml(s)&&Ml(r)&&t.hasOwnProperty(n)&&!je(r)&&!ir(r)?t[n]=Ll(s,r):t[n]=r}return t}const vb=Symbol();function Ib(t){return!Ml(t)||!t.hasOwnProperty(vb)}const{assign:Hn}=Object;function Eb(t){return!!(je(t)&&t.effect)}function wb(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=ST(n.state.value[t]);return Hn(l,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=qc(Ct(()=>{Yc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=ay(t,u,e,n,r,!0),c}function ay(t,e,n={},r,s,i){let o;const a=Hn({actions:{}},n),c={deep:!0};let u,l,h=[],d=[],f;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),cn({});let y;function E(U){let G;u=l=!1,typeof U=="function"?(U(r.state.value[t]),G={type:Qi.patchFunction,storeId:t,events:f}):(Ll(r.state.value[t],U),G={type:Qi.patchObject,payload:U,storeId:t,events:f});const ne=y=Symbol();Gh().then(()=>{y===ne&&(u=!0)}),l=!0,As(h,G,r.state.value[t])}const A=i?function(){const{state:G}=n,ne=G?G():{};this.$patch(be=>{Hn(be,ne)})}:oy;function C(){o.stop(),h=[],d=[],r._s.delete(t)}function V(U,G){return function(){Yc(r);const ne=Array.from(arguments),be=[],K=[];function _e(he){be.push(he)}function at(he){K.push(he)}As(d,{args:ne,name:U,store:q,after:_e,onError:at});let _t;try{_t=G.apply(this&&this.$id===t?this:q,ne)}catch(he){throw As(K,he),he}return _t instanceof Promise?_t.then(he=>(As(be,he),he)).catch(he=>(As(K,he),Promise.reject(he))):(As(be,_t),_t)}}const x={_p:r,$id:t,$onAction:xp.bind(null,d),$patch:E,$reset:A,$subscribe(U,G={}){const ne=xp(h,U,G.detached,()=>be()),be=o.run(()=>zi(()=>r.state.value[t],K=>{(G.flush==="sync"?l:u)&&U({storeId:t,type:Qi.direct,events:f},K)},Hn({},c,G)));return ne},$dispose:C},q=$o(x);r._s.set(t,q);const Q=r._a&&r._a.runWithContext||yb,ae=r._e.run(()=>(o=e_(),Q(()=>o.run(e))));for(const U in ae){const G=ae[U];if(je(G)&&!Eb(G)||ir(G))i||(_&&Ib(G)&&(je(G)?G.value=_[U]:Ll(G,_[U])),r.state.value[t][U]=G);else if(typeof G=="function"){const ne=V(U,G);ae[U]=ne,a.actions[U]=G}}return Hn(q,ae),Hn(le(q),ae),Object.defineProperty(q,"$state",{get:()=>r.state.value[t],set:U=>{E(G=>{Hn(G,U)})}}),r._p.forEach(U=>{Hn(q,o.run(()=>U({store:q,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(q.$state,_),u=!0,l=!0,q}function Tb(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=dA();return a=a||(u?jt(iy,null):null),a&&Yc(a),a=sy,a._s.has(r)||(i?ay(r,e,s,a):wb(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Cs=typeof window<"u";function Ab(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function Xu(t,e){const n={};for(const r in e){const s=e[r];n[r]=Jt(s)?s.map(t):t(s)}return n}const Yi=()=>{},Jt=Array.isArray,bb=/\/$/,Rb=t=>t.replace(bb,"");function Zu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Db(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Sb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Pb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gs(e.matched[r],n.matched[s])&&cy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Cb(t[n],e[n]))return!1;return!0}function Cb(t,e){return Jt(t)?kp(t,e):Jt(e)?kp(e,t):t===e}function kp(t,e){return Jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Db(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var go;(function(t){t.pop="pop",t.push="push"})(go||(go={}));var Ji;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ji||(Ji={}));function xb(t){if(!t)if(Cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Rb(t)}const Vb=/^[^#]+#/;function kb(t,e){return t.replace(Vb,"#")+e}function Nb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Jc=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ob(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Nb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Np(t,e){return(history.state?history.state.position-e:-1)+t}const Fl=new Map;function Mb(t,e){Fl.set(t,e)}function Lb(t){const e=Fl.get(t);return Fl.delete(t),e}let Fb=()=>location.protocol+"//"+location.host;function uy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Vp(c,"")}return Vp(n,t)+r+s}function Ub(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=uy(t,location),_=n.value,y=e.value;let E=0;if(d){if(n.value=f,e.value=d,o&&o===_){o=null;return}E=y?d.position-y.position:0}else r(f);s.forEach(A=>{A(n.value,_,{delta:E,type:go.pop,direction:E?E>0?Ji.forward:Ji.back:Ji.unknown})})};function c(){o=n.value}function u(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(f),f}function l(){const{history:d}=window;d.state&&d.replaceState(Ie({},d.state,{scroll:Jc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function Op(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Jc():null}}function Bb(t){const{history:e,location:n}=window,r={value:uy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Fb()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=Ie({},e.state,Op(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=Ie({},s.value,e.state,{forward:c,scroll:Jc()});i(l.current,l,!0);const h=Ie({},Op(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function $b(t){t=xb(t);const e=Bb(t),n=Ub(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ie({location:"",base:t,go:r,createHref:kb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function qb(t){return typeof t=="string"||t&&typeof t=="object"}function ly(t){return typeof t=="string"||typeof t=="symbol"}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hy=Symbol("");var Mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mp||(Mp={}));function Ws(t,e){return Ie(new Error,{type:t,[hy]:!0},e)}function wn(t,e){return t instanceof Error&&hy in t&&(e==null||!!(t.type&e))}const Lp="[^/]+?",jb={sensitive:!1,strict:!1,start:!0,end:!0},Kb=/[.+*?^${}()[\]/\\]/g;function zb(t,e){const n=Ie({},jb,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Kb,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:y,optional:E,regexp:A}=d;i.push({name:_,repeatable:y,optional:E});const C=A||Lp;if(C!==Lp){f+=10;try{new RegExp(`(${C})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+x.message)}}let V=y?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(V=E&&u.length<2?`(?:/${V})`:"/"+V),E&&(V+="?"),s+=V,f+=20,E&&(f+=-8),y&&(f+=-20),C===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",_=i[d-1];h[_.name]=f&&_.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:_,repeatable:y,optional:E}=f,A=_ in u?u[_]:"";if(Jt(A)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=Jt(A)?A.join("/"):A;if(!C)if(E)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);l+=C}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Gb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Wb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Gb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Fp(r))return 1;if(Fp(s))return-1}return s.length-r.length}function Fp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Hb={type:0,value:""},Qb=/[a-zA-Z0-9_]/;function Yb(t){if(!t)return[[]];if(t==="/")return[[Hb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Qb.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function Jb(t,e,n){const r=zb(Yb(t.path),n),s=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Xb(t,e){const n=[],r=new Map;e=$p({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,d){const f=!d,_=Zb(l);_.aliasOf=d&&d.record;const y=$p(e,l),E=[_];if("alias"in l){const V=typeof l.alias=="string"?[l.alias]:l.alias;for(const x of V)E.push(Ie({},_,{components:d?d.record.components:_.components,path:x,aliasOf:d?d.record:_}))}let A,C;for(const V of E){const{path:x}=V;if(h&&x[0]!=="/"){const q=h.record.path,Q=q[q.length-1]==="/"?"":"/";V.path=h.record.path+(x&&Q+x)}if(A=Jb(V,h,y),d?d.alias.push(A):(C=C||A,C!==A&&C.alias.push(A),f&&l.name&&!Bp(A)&&o(l.name)),_.children){const q=_.children;for(let Q=0;Q<q.length;Q++)i(q[Q],A,d&&d.children[Q])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return C?()=>{o(C)}:Yi}function o(l){if(ly(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&Wb(l,n[h])>=0&&(l.record.path!==n[h].record.path||!dy(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Bp(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},_,y;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Ws(1,{location:l});y=d.record.name,f=Ie(Up(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),l.params&&Up(l.params,d.keys.map(C=>C.name))),_=d.stringify(f)}else if("path"in l)_=l.path,d=n.find(C=>C.re.test(_)),d&&(f=d.parse(_),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw Ws(1,{location:l,currentLocation:h});y=d.record.name,f=Ie({},h.params,l.params),_=d.stringify(f)}const E=[];let A=d;for(;A;)E.unshift(A.record),A=A.parent;return{name:y,path:_,params:f,matched:E,meta:t0(E)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Up(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:e0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function e0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Bp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function t0(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function $p(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dy(t,e){return e.children.some(n=>n===t||dy(t,n))}const fy=/#/g,n0=/&/g,r0=/\//g,s0=/=/g,i0=/\?/g,py=/\+/g,o0=/%5B/g,a0=/%5D/g,my=/%5E/g,c0=/%60/g,gy=/%7B/g,u0=/%7C/g,_y=/%7D/g,l0=/%20/g;function td(t){return encodeURI(""+t).replace(u0,"|").replace(o0,"[").replace(a0,"]")}function h0(t){return td(t).replace(gy,"{").replace(_y,"}").replace(my,"^")}function Ul(t){return td(t).replace(py,"%2B").replace(l0,"+").replace(fy,"%23").replace(n0,"%26").replace(c0,"`").replace(gy,"{").replace(_y,"}").replace(my,"^")}function d0(t){return Ul(t).replace(s0,"%3D")}function f0(t){return td(t).replace(fy,"%23").replace(i0,"%3F")}function p0(t){return t==null?"":f0(t).replace(r0,"%2F")}function ac(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function m0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(py," "),o=i.indexOf("="),a=ac(o<0?i:i.slice(0,o)),c=o<0?null:ac(i.slice(o+1));if(a in e){let u=e[a];Jt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function qp(t){let e="";for(let n in t){const r=t[n];if(n=d0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(r)?r.map(i=>i&&Ul(i)):[r&&Ul(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function g0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const _0=Symbol(""),jp=Symbol(""),Xc=Symbol(""),nd=Symbol(""),Bl=Symbol("");function Ri(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ws(4,{from:n,to:e})):h instanceof Error?a(h):qb(h)?a(Ws(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function el(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(y0(a)){const u=(a.__vccOpts||a)[e];u&&s.push(Yn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Ab(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Yn(d,n,r,i,o)()}))}}return s}function y0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kp(t){const e=jt(Xc),n=jt(nd),r=Ct(()=>e.resolve(Yt(t.to))),s=Ct(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Gs.bind(null,l));if(d>-1)return d;const f=zp(c[u-2]);return u>1&&zp(l)===f&&h[h.length-1].path!==f?h.findIndex(Gs.bind(null,c[u-2])):d}),i=Ct(()=>s.value>-1&&w0(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&cy(n.params,r.value.params));function a(c={}){return E0(c)?e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(Yi):Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const v0=C_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kp,setup(t,{slots:e}){const n=$o(Kp(t)),{options:r}=jt(Xc),s=Ct(()=>({[Gp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ed("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),I0=v0;function E0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function w0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Jt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function zp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gp=(t,e,n)=>t??e??n,T0=C_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(Bl),s=Ct(()=>t.route||r.value),i=jt(jp,0),o=Ct(()=>{let u=Yt(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Ct(()=>s.value.matched[o.value]);Ba(jp,Ct(()=>o.value+1)),Ba(_0,a),Ba(Bl,s);const c=cn();return zi(()=>[c.value,a.value,t.name],([u,l,h],[d,f,_])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Gs(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Wp(n.default,{Component:d,route:u});const f=h.props[l],_=f?f===!0?u.params:typeof f=="function"?f(u):f:null,E=ed(d,Ie({},_,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Wp(n.default,{Component:E,route:u})||E}}});function Wp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const A0=T0;function b0(t){const e=Xb(t.routes,t),n=t.parseQuery||m0,r=t.stringifyQuery||qp,s=t.history,i=Ri(),o=Ri(),a=Ri(),c=AT(qn);let u=qn;Cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Xu.bind(null,T=>""+T),h=Xu.bind(null,p0),d=Xu.bind(null,ac);function f(T,j){let M,Y;return ly(T)?(M=e.getRecordMatcher(T),Y=j):Y=T,e.addRoute(Y,M)}function _(T){const j=e.getRecordMatcher(T);j&&e.removeRoute(j)}function y(){return e.getRoutes().map(T=>T.record)}function E(T){return!!e.getRecordMatcher(T)}function A(T,j){if(j=Ie({},j||c.value),typeof T=="string"){const g=Zu(n,T,j.path),w=e.resolve({path:g.path},j),b=s.createHref(g.fullPath);return Ie(g,w,{params:d(w.params),hash:ac(g.hash),redirectedFrom:void 0,href:b})}let M;if("path"in T)M=Ie({},T,{path:Zu(n,T.path,j.path).path});else{const g=Ie({},T.params);for(const w in g)g[w]==null&&delete g[w];M=Ie({},T,{params:h(g)}),j.params=h(j.params)}const Y=e.resolve(M,j),ve=T.hash||"";Y.params=l(d(Y.params));const p=Sb(r,Ie({},T,{hash:h0(ve),path:Y.path})),m=s.createHref(p);return Ie({fullPath:p,hash:ve,query:r===qp?g0(T.query):T.query||{}},Y,{redirectedFrom:void 0,href:m})}function C(T){return typeof T=="string"?Zu(n,T,c.value.path):Ie({},T)}function V(T,j){if(u!==T)return Ws(8,{from:j,to:T})}function x(T){return ae(T)}function q(T){return x(Ie(C(T),{replace:!0}))}function Q(T){const j=T.matched[T.matched.length-1];if(j&&j.redirect){const{redirect:M}=j;let Y=typeof M=="function"?M(T):M;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=C(Y):{path:Y},Y.params={}),Ie({query:T.query,hash:T.hash,params:"path"in Y?{}:T.params},Y)}}function ae(T,j){const M=u=A(T),Y=c.value,ve=T.state,p=T.force,m=T.replace===!0,g=Q(M);if(g)return ae(Ie(C(g),{state:typeof g=="object"?Ie({},ve,g.state):ve,force:p,replace:m}),j||M);const w=M;w.redirectedFrom=j;let b;return!p&&Pb(r,Y,M)&&(b=Ws(16,{to:w,from:Y}),tn(Y,Y,!0,!1)),(b?Promise.resolve(b):ne(w,Y)).catch(P=>wn(P)?wn(P,2)?P:Un(P):ye(P,w,Y)).then(P=>{if(P){if(wn(P,2))return ae(Ie({replace:m},C(P.to),{state:typeof P.to=="object"?Ie({},ve,P.to.state):ve,force:p}),j||w)}else P=K(w,Y,!0,m,ve);return be(w,Y,P),P})}function U(T,j){const M=V(T,j);return M?Promise.reject(M):Promise.resolve()}function G(T){const j=Es.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(T):T()}function ne(T,j){let M;const[Y,ve,p]=R0(T,j);M=el(Y.reverse(),"beforeRouteLeave",T,j);for(const g of Y)g.leaveGuards.forEach(w=>{M.push(Yn(w,T,j))});const m=U.bind(null,T,j);return M.push(m),dt(M).then(()=>{M=[];for(const g of i.list())M.push(Yn(g,T,j));return M.push(m),dt(M)}).then(()=>{M=el(ve,"beforeRouteUpdate",T,j);for(const g of ve)g.updateGuards.forEach(w=>{M.push(Yn(w,T,j))});return M.push(m),dt(M)}).then(()=>{M=[];for(const g of p)if(g.beforeEnter)if(Jt(g.beforeEnter))for(const w of g.beforeEnter)M.push(Yn(w,T,j));else M.push(Yn(g.beforeEnter,T,j));return M.push(m),dt(M)}).then(()=>(T.matched.forEach(g=>g.enterCallbacks={}),M=el(p,"beforeRouteEnter",T,j),M.push(m),dt(M))).then(()=>{M=[];for(const g of o.list())M.push(Yn(g,T,j));return M.push(m),dt(M)}).catch(g=>wn(g,8)?g:Promise.reject(g))}function be(T,j,M){a.list().forEach(Y=>G(()=>Y(T,j,M)))}function K(T,j,M,Y,ve){const p=V(T,j);if(p)return p;const m=j===qn,g=Cs?history.state:{};M&&(Y||m?s.replace(T.fullPath,Ie({scroll:m&&g&&g.scroll},ve)):s.push(T.fullPath,ve)),c.value=T,tn(T,j,M,m),Un()}let _e;function at(){_e||(_e=s.listen((T,j,M)=>{if(!ga.listening)return;const Y=A(T),ve=Q(Y);if(ve){ae(Ie(ve,{replace:!0}),Y).catch(Yi);return}u=Y;const p=c.value;Cs&&Mb(Np(p.fullPath,M.delta),Jc()),ne(Y,p).catch(m=>wn(m,12)?m:wn(m,2)?(ae(m.to,Y).then(g=>{wn(g,20)&&!M.delta&&M.type===go.pop&&s.go(-1,!1)}).catch(Yi),Promise.reject()):(M.delta&&s.go(-M.delta,!1),ye(m,Y,p))).then(m=>{m=m||K(Y,p,!1),m&&(M.delta&&!wn(m,8)?s.go(-M.delta,!1):M.type===go.pop&&wn(m,20)&&s.go(-1,!1)),be(Y,p,m)}).catch(Yi)}))}let _t=Ri(),he=Ri(),Re;function ye(T,j,M){Un(T);const Y=he.list();return Y.length?Y.forEach(ve=>ve(T,j,M)):console.error(T),Promise.reject(T)}function En(){return Re&&c.value!==qn?Promise.resolve():new Promise((T,j)=>{_t.add([T,j])})}function Un(T){return Re||(Re=!T,at(),_t.list().forEach(([j,M])=>T?M(T):j()),_t.reset()),T}function tn(T,j,M,Y){const{scrollBehavior:ve}=t;if(!Cs||!ve)return Promise.resolve();const p=!M&&Lb(Np(T.fullPath,0))||(Y||!M)&&history.state&&history.state.scroll||null;return Gh().then(()=>ve(T,j,p)).then(m=>m&&Ob(m)).catch(m=>ye(m,T,j))}const bt=T=>s.go(T);let Is;const Es=new Set,ga={currentRoute:c,listening:!0,addRoute:f,removeRoute:_,hasRoute:E,getRoutes:y,resolve:A,options:t,push:x,replace:q,go:bt,back:()=>bt(-1),forward:()=>bt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:En,install(T){const j=this;T.component("RouterLink",I0),T.component("RouterView",A0),T.config.globalProperties.$router=j,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),Cs&&!Is&&c.value===qn&&(Is=!0,x(s.location).catch(ve=>{}));const M={};for(const ve in qn)Object.defineProperty(M,ve,{get:()=>c.value[ve],enumerable:!0});T.provide(Xc,j),T.provide(nd,d_(M)),T.provide(Bl,c);const Y=T.unmount;Es.add(T),T.unmount=function(){Es.delete(T),Es.size<1&&(u=qn,_e&&_e(),_e=null,c.value=qn,Is=!1,Re=!1),Y()}}};function dt(T){return T.reduce((j,M)=>j.then(()=>G(M)),Promise.resolve())}return ga}function R0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Gs(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Gs(u,c))||s.push(c))}return[n,r,s]}function rd(){return jt(Xc)}function S0(){return jt(nd)}/**
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
 */const yy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},P0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):P0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new C0;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class C0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D0=function(t){const e=yy(t);return vy.encodeByteArray(e,!0)},cc=function(t){return D0(t).replace(/\./g,"")},Iy=function(t){try{return vy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function uc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!x0(n)||(t[n]=uc(t[n],e[n]));return t}function x0(t){return t!=="__proto__"}/**
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
 */function V0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k0=()=>V0().__FIREBASE_DEFAULTS__,N0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},O0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Iy(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return k0()||N0()||O0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M0=t=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ey=()=>{var t;return(t=Zc())===null||t===void 0?void 0:t.config},wy=t=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class L0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function F0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[cc(JSON.stringify(n)),cc(JSON.stringify(o)),a].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function B0(){var t;const e=(t=Zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $0(){return typeof self=="object"&&self.self===self}function q0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K0(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function z0(){return!B0()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ty(){try{return typeof indexedDB=="object"}catch{return!1}}function G0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const W0="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W0,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?H0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new In(s,a,r)}}function H0(t,e){return t.replace(Q0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Q0=/\{\$([^}]+)}/g;/**
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
 */function Hp(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qp(i)&&Qp(o)){if(!lc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qp(t){return t!==null&&typeof t=="object"}/**
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
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ay(t,e){const n=new J0(t,e);return n.subscribe.bind(n)}class J0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");X0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tl),s.error===void 0&&(s.error=tl),s.complete===void 0&&(s.complete=tl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tl(){}/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class Z0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new L0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tR(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eR(t){return t===Or?void 0:t}function tR(t){return t.instantiationMode==="EAGER"}/**
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
 */class nR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Z0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const sd=[];var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const by={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},rR=fe.INFO,sR={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},iR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=rR,this._logHandler=iR,this._userLogHandler=null,sd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?by[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}function oR(t){sd.forEach(e=>{e.setLogLevel(t)})}function aR(t,e){for(const n of sd){let r=null;e&&e.level&&(r=by[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&t({level:fe[i].toLowerCase(),message:a,args:o,type:s.name})}}}const cR=(t,e)=>e.some(n=>t instanceof n);let Yp,Jp;function uR(){return Yp||(Yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lR(){return Jp||(Jp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ry=new WeakMap,$l=new WeakMap,Sy=new WeakMap,nl=new WeakMap,id=new WeakMap;function hR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ry.set(n,t)}).catch(()=>{}),id.set(e,t),e}function dR(t){if($l.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$l.set(t,e)}let ql={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $l.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fR(t){ql=t(ql)}function pR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rl(this),e,...n);return Sy.set(r,e.sort?e.sort():[e]),cr(r)}:lR().includes(t)?function(...e){return t.apply(rl(this),e),cr(Ry.get(this))}:function(...e){return cr(t.apply(rl(this),e))}}function mR(t){return typeof t=="function"?pR(t):(t instanceof IDBTransaction&&dR(t),cR(t,uR())?new Proxy(t,ql):t)}function cr(t){if(t instanceof IDBRequest)return hR(t);if(nl.has(t))return nl.get(t);const e=mR(t);return e!==t&&(nl.set(t,e),id.set(e,t)),e}const rl=t=>id.get(t);function gR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(cr(o.result),c.oldVersion,c.newVersion,cr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _R=["get","getKey","getAll","getAllKeys","count"],yR=["put","add","delete","clear"],sl=new Map;function Xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sl.get(e))return sl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=yR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_R.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return sl.set(e,i),i}fR(t=>({...t,get:(e,n,r)=>Xp(e,n)||t.get(e,n,r),has:(e,n)=>!!Xp(e,n)||t.has(e,n)}));/**
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
 */class vR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jl="@firebase/app",Zp="0.9.14";/**
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
 */const ts=new eu("@firebase/app"),ER="@firebase/app-compat",wR="@firebase/analytics-compat",TR="@firebase/analytics",AR="@firebase/app-check-compat",bR="@firebase/app-check",RR="@firebase/auth",SR="@firebase/auth-compat",PR="@firebase/database",CR="@firebase/database-compat",DR="@firebase/functions",xR="@firebase/functions-compat",VR="@firebase/installations",kR="@firebase/installations-compat",NR="@firebase/messaging",OR="@firebase/messaging-compat",MR="@firebase/performance",LR="@firebase/performance-compat",FR="@firebase/remote-config",UR="@firebase/remote-config-compat",BR="@firebase/storage",$R="@firebase/storage-compat",qR="@firebase/firestore",jR="@firebase/firestore-compat",KR="firebase",zR="10.0.0";/**
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
 */const dr="[DEFAULT]",GR={[jl]:"fire-core",[ER]:"fire-core-compat",[TR]:"fire-analytics",[wR]:"fire-analytics-compat",[bR]:"fire-app-check",[AR]:"fire-app-check-compat",[RR]:"fire-auth",[SR]:"fire-auth-compat",[PR]:"fire-rtdb",[CR]:"fire-rtdb-compat",[DR]:"fire-fn",[xR]:"fire-fn-compat",[VR]:"fire-iid",[kR]:"fire-iid-compat",[NR]:"fire-fcm",[OR]:"fire-fcm-compat",[MR]:"fire-perf",[LR]:"fire-perf-compat",[FR]:"fire-rc",[UR]:"fire-rc-compat",[BR]:"fire-gcs",[$R]:"fire-gcs-compat",[qR]:"fire-fst",[jR]:"fire-fst-compat","fire-js":"fire-js",[KR]:"fire-js-all"};/**
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
 */const fr=new Map,_o=new Map;function hc(t,e){try{t.container.addComponent(e)}catch(n){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Py(t,e){t.container.addOrOverwriteComponent(e)}function pr(t){const e=t.name;if(_o.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;_o.set(e,t);for(const n of fr.values())hc(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function WR(t,e,n=dr){tu(t,e).clearInstance(n)}function HR(){_o.clear()}/**
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
 */const QR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new ds("app","Firebase",QR);/**
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
 */let YR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}};/**
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
 */const Ar=zR;function od(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Cn.create("bad-app-name",{appName:String(s)});if(n||(n=Ey()),!n)throw Cn.create("no-options");const i=fr.get(s);if(i){if(lc(n,i.options)&&lc(r,i.config))return i;throw Cn.create("duplicate-app",{appName:s})}const o=new nR(s);for(const c of _o.values())o.addComponent(c);const a=new YR(n,r,o);return fr.set(s,a),a}function Cy(t=dr){const e=fr.get(t);if(!e&&t===dr&&Ey())return od();if(!e)throw Cn.create("no-app",{appName:t});return e}function JR(){return Array.from(fr.values())}async function Dy(t){const e=t.name;fr.has(e)&&(fr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function fn(t,e,n){var r;let s=(r=GR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(a.join(" "));return}pr(new xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function xy(t,e){if(t!==null&&typeof t!="function")throw Cn.create("invalid-log-argument");aR(t,e)}function Vy(t){oR(t)}/**
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
 */const XR="firebase-heartbeat-database",ZR=1,yo="firebase-heartbeat-store";let il=null;function ky(){return il||(il=gR(XR,ZR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yo)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),il}async function eS(t){try{return await(await ky()).transaction(yo).objectStore(yo).get(Ny(t))}catch(e){if(e instanceof In)ts.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ts.warn(n.message)}}}async function em(t,e){try{const r=(await ky()).transaction(yo,"readwrite");await r.objectStore(yo).put(e,Ny(t)),await r.done}catch(n){if(n instanceof In)ts.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ts.warn(r.message)}}}function Ny(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tS=1024,nS=30*24*60*60*1e3;class rS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=nS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tm(),{heartbeatsToSend:n,unsentEntries:r}=sS(this._heartbeatsCache.heartbeats),s=cc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tm(){return new Date().toISOString().substring(0,10)}function sS(t,e=tS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ty()?G0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return em(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return em(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nm(t){return cc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oS(t){pr(new xn("platform-logger",e=>new vR(e),"PRIVATE")),pr(new xn("heartbeat",e=>new rS(e),"PRIVATE")),fn(jl,Zp,t),fn(jl,Zp,"esm2017"),fn("fire-js","")}oS("");const aS=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:In,SDK_VERSION:Ar,_DEFAULT_ENTRY_NAME:dr,_addComponent:hc,_addOrOverwriteComponent:Py,_apps:fr,_clearComponents:HR,_components:_o,_getProvider:tu,_registerComponent:pr,_removeServiceInstance:WR,deleteApp:Dy,getApp:Cy,getApps:JR,initializeApp:od,onLog:xy,registerVersion:fn,setLogLevel:Vy},Symbol.toStringTag,{value:"Module"}));function ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cS=Oy,My=new ds("auth","Firebase",Oy());/**
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
 */const dc=new eu("@firebase/auth");function uS(t,...e){dc.logLevel<=fe.WARN&&dc.warn(`Auth (${Ar}): ${t}`,...e)}function qa(t,...e){dc.logLevel<=fe.ERROR&&dc.error(`Auth (${Ar}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw cd(t,...e)}function pn(t,...e){return cd(t,...e)}function lS(t,e,n){const r=Object.assign(Object.assign({},cS()),{[e]:n});return new ds("auth","Firebase",r).create(e,{appName:t.name})}function cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return My.create(t,...e)}function ee(t,e,...n){if(!t)throw cd(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function Vn(t,e){t||bn(e)}/**
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
 */function Kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hS(){return rm()==="http:"||rm()==="https:"}function rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hS()||q0()||"connection"in navigator)?navigator.onLine:!0}function fS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=U0()||j0()}get(){return dS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ud(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ly{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mS=new jo(3e4,6e4);function Ko(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fs(t,e,n,r,s={}){return Fy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ly.fetch()(Uy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Fy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pS),e);try{const s=new gS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ta(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lS(t,l,u);Xt(t,l)}}catch(s){if(s instanceof In)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function nu(t,e,n,r,s={}){const i=await fs(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Uy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ud(t.config,s):`${t.config.apiScheme}://${s}`}class gS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),mS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function _S(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function yS(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vS(t,e=!1){const n=we(t),r=await n.getIdToken(e),s=ld(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xi(ol(s.auth_time)),issuedAtTime:Xi(ol(s.iat)),expirationTime:Xi(ol(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ol(t){return Number(t)*1e3}function ld(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Iy(n);return s?JSON.parse(s):(qa("Failed to decode base64 JWT payload"),null)}catch(s){return qa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function IS(t){const e=ld(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&ES(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ES({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class By{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Hs(t,yS(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bS(i.providerUserInfo):[],a=AS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new By(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function TS(t){const e=we(t);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bS(t){return t.map(e=>{var{providerId:n}=e,r=ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RS(t,e){const n=await Fy(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Uy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ly.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await RS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vo;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function jn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new By(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vS(this,e)}reload(){return TS(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hs(this,_S(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:V,emailVerified:x,isAnonymous:q,providerData:Q,stsTokenManager:ae}=n;ee(V&&ae,e,"internal-error");const U=vo.fromJSON(this.name,ae);ee(typeof V=="string",e,"internal-error"),jn(h,e.name),jn(d,e.name),ee(typeof x=="boolean",e,"internal-error"),ee(typeof q=="boolean",e,"internal-error"),jn(f,e.name),jn(_,e.name),jn(y,e.name),jn(E,e.name),jn(A,e.name),jn(C,e.name);const G=new Xr({uid:V,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:q,photoURL:_,phoneNumber:f,tenantId:y,stsTokenManager:U,createdAt:A,lastLoginAt:C});return Q&&Array.isArray(Q)&&(G.providerData=Q.map(ne=>Object.assign({},ne))),E&&(G._redirectEventId=E),G}static async _fromIdTokenResponse(e,n,r=!1){const s=new vo;s.updateFromServerResponse(n);const i=new Xr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fc(i),i}}/**
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
 */const sm=new Map;function Rn(t){Vn(t instanceof Function,"Expected a class definition");let e=sm.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sm.set(t,e),e)}/**
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
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$y.type="NONE";const im=$y;/**
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
 */function ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ja(this.userKey,s.apiKey,i),this.fullPersistenceKey=ja("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(Rn(im),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Rn(im);const o=ja(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Xr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Fs(i,e,r))}}/**
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
 */function om(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ky(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gy(e))return"Blackberry";if(Wy(e))return"Webos";if(hd(e))return"Safari";if((e.includes("chrome/")||jy(e))&&!e.includes("edge/"))return"Chrome";if(zy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qy(t=Je()){return/firefox\//i.test(t)}function hd(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jy(t=Je()){return/crios\//i.test(t)}function Ky(t=Je()){return/iemobile/i.test(t)}function zy(t=Je()){return/android/i.test(t)}function Gy(t=Je()){return/blackberry/i.test(t)}function Wy(t=Je()){return/webos/i.test(t)}function ru(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SS(t=Je()){var e;return ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PS(){return K0()&&document.documentMode===10}function Hy(t=Je()){return ru(t)||zy(t)||Wy(t)||Gy(t)||/windows phone/i.test(t)||Ky(t)}function CS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Qy(t,e=[]){let n;switch(t){case"Browser":n=om(Je());break;case"Worker":n=`${om(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ar}/${r}`}async function Yy(t,e){return fs(t,"GET","/v2/recaptchaConfig",Ko(t,e))}function am(t){return t!==void 0&&t.enterprise!==void 0}class Jy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function DS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",DS().appendChild(r)})}function xS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VS="https://www.google.com/recaptcha/enterprise.js?render=",kS="recaptcha-enterprise",NS="NO_RECAPTCHA";class Zy{constructor(e){this.type=kS,this.auth=zo(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Yy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Jy(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;am(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(NS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&am(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Xy(VS+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function cm(t,e,n,r=!1){const s=new Zy(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class OS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class MS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new um(this),this.idTokenSubscription=new um(this),this.beforeStateQueue=new OS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=My,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?we(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}async initializeRecaptchaConfig(){const e=await Yy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Jy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Zy(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zo(t){return we(t)}class um{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ay(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function LS(t,e){const n=tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(lc(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function FS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function US(t,e,n){const r=zo(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ev(e),{host:o,port:a}=BS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||$S()}function ev(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BS(t){const e=ev(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lm(o)}}}function lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $S(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function qS(t,e){return fs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function al(t,e){return nu(t,"POST","/v1/accounts:signInWithPassword",Ko(t,e))}/**
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
 */async function jS(t,e){return nu(t,"POST","/v1/accounts:signInWithEmailLink",Ko(t,e))}async function KS(t,e){return nu(t,"POST","/v1/accounts:signInWithEmailLink",Ko(t,e))}/**
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
 */class Io extends dd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Io(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Io(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await cm(e,r,"signInWithPassword");return al(e,s)}else return al(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await cm(e,r,"signInWithPassword");return al(e,i)}else return Promise.reject(s)});case"emailLink":return jS(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return qS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KS(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Us(t,e){return nu(t,"POST","/v1/accounts:signInWithIdp",Ko(t,e))}/**
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
 */const zS="http://localhost";class ns extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ad(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:zS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
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
 */function GS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WS(t){const e=Fi(Ui(t)).link,n=e?Fi(Ui(e)).deep_link_id:null,r=Fi(Ui(t)).deep_link_id;return(r?Fi(Ui(r)).link:null)||r||n||e||t}class fd{constructor(e){var n,r,s,i,o,a;const c=Fi(Ui(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=GS((s=c.mode)!==null&&s!==void 0?s:null);ee(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=WS(e);try{return new fd(n)}catch{return null}}}/**
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
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,n){return Io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fd.parseLink(n);return ee(r,"argument-error"),Io._fromEmailAndCode(e,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Go extends tv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends Go{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Zn extends Go{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class er extends Go{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xr._fromIdTokenResponse(e,r,s),o=hm(r);return new Qs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=hm(r);return new Qs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pc extends In{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pc(e,n,r,s)}}function nv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(t,i,e,r):i})}async function HS(t,e,n=!1){const r=await Hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",r)}/**
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
 */async function QS(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Hs(t,nv(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=ld(i.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Qs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
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
 */async function rv(t,e,n=!1){const r="signIn",s=await nv(t,r,e),i=await Qs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function YS(t,e){return rv(zo(t),e)}function JS(t,e,n){return YS(we(t),di.credential(e,n))}/**
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
 */async function XS(t,e){return fs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ZS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=we(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hs(r,XS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function eP(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function tP(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function nP(t){return we(t).signOut()}const mc="__sak";/**
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
 */class sv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rP(){const t=Je();return hd(t)||ru(t)}const sP=1e3,iP=10;class iv extends sv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rP()&&CS(),this.fallbackToPolling=Hy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);PS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iv.type="LOCAL";const oP=iv;/**
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
 */class ov extends sv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ov.type="SESSION";const av=ov;/**
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
 */function aP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await aP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}su.receivers=[];/**
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
 */function pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=pd("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function uP(t){mn().location.href=t}/**
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
 */function cv(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function lP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dP(){return cv()?self:null}/**
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
 */const uv="firebaseLocalStorageDb",fP=1,gc="firebaseLocalStorage",lv="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function iu(t,e){return t.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function pP(){const t=indexedDB.deleteDatabase(uv);return new Wo(t).toPromise()}function zl(){const t=indexedDB.open(uv,fP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gc,{keyPath:lv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gc)?e(r):(r.close(),await pP(),e(await zl()))})})}async function dm(t,e,n){const r=iu(t,!0).put({[lv]:e,value:n});return new Wo(r).toPromise()}async function mP(t,e){const n=iu(t,!1).get(e),r=await new Wo(n).toPromise();return r===void 0?null:r.value}function fm(t,e){const n=iu(t,!0).delete(e);return new Wo(n).toPromise()}const gP=800,_P=3;class hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_P)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=su._getInstance(dP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lP(),!this.activeServiceWorker)return;this.sender=new cP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zl();return await dm(e,mc,"1"),await fm(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=iu(s,!1).getAll();return new Wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hv.type="LOCAL";const yP=hv;new jo(3e4,6e4);/**
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
 */function vP(t,e){return e?Rn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class md extends dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IP(t){return rv(t.auth,new md(t),t.bypassAuthState)}function EP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),QS(n,new md(t),t.bypassAuthState)}async function wP(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),HS(n,new md(t),t.bypassAuthState)}/**
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
 */class dv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IP;case"linkViaPopup":case"linkViaRedirect":return wP;case"reauthViaPopup":case"reauthViaRedirect":return EP;default:Xt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TP=new jo(2e3,1e4);class ks extends dv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TP.get())};e()}}ks.currentPopupAction=null;/**
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
 */const AP="pendingRedirect",Ka=new Map;class bP extends dv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ka.get(this.auth._key());if(!e){try{const r=await RP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ka.set(this.auth._key(),e)}return this.bypassAuthState||Ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RP(t,e){const n=CP(e),r=PP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function SP(t,e){Ka.set(t._key(),e)}function PP(t){return Rn(t._redirectPersistence)}function CP(t){return ja(AP,t.config.apiKey,t.name)}async function DP(t,e,n=!1){const r=zo(t),s=vP(r,e),o=await new bP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xP=10*60*1e3;class VP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xP&&this.cachedEventUids.clear(),this.cachedEventUids.has(pm(e))}saveEventToCache(e){this.cachedEventUids.add(pm(e)),this.lastProcessedEventTime=Date.now()}}function pm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(t);default:return!1}}/**
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
 */async function NP(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
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
 */const OP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MP=/^https?/;async function LP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NP(t);for(const n of e)try{if(FP(n))return}catch{}Xt(t,"unauthorized-domain")}function FP(t){const e=Kl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MP.test(n))return!1;if(OP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const UP=new jo(3e4,6e4);function mm(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BP(t){return new Promise((e,n)=>{var r,s,i;function o(){mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mm(),n(pn(t,"network-request-failed"))},timeout:UP.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const a=xS("iframefcb");return mn()[a]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},Xy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw za=null,e})}let za=null;function $P(t){return za=za||BP(t),za}/**
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
 */const qP=new jo(5e3,15e3),jP="__/auth/iframe",KP="emulator/auth/iframe",zP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WP(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,KP):`https://${t.config.authDomain}/${jP}`,r={apiKey:e.apiKey,appName:t.name,v:Ar},s=GP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qo(r).slice(1)}`}async function HP(t){const e=await $P(t),n=mn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:WP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),a=mn().setTimeout(()=>{i(o)},qP.get());function c(){mn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const QP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YP=500,JP=600,XP="_blank",ZP="http://localhost";class gm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eC(t,e,n,r=YP,s=JP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},QP),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Je().toLowerCase();n&&(a=jy(u)?XP:n),qy(u)&&(e=e||ZP,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(SS(u)&&a!=="_self")return tC(e||"",a),new gm(null);const h=window.open(e||"",a,l);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new gm(h)}function tC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nC="__/auth/handler",rC="emulator/auth/handler",sC=encodeURIComponent("fac");async function _m(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ar,eventId:s};if(e instanceof tv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Y0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof Go){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${sC}=${encodeURIComponent(c)}`:"";return`${iC(t)}?${qo(a).slice(1)}${u}`}function iC({config:t}){return t.emulator?ud(t,rC):`https://${t.authDomain}/${nC}`}/**
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
 */const cl="webStorageSupport";class oC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=av,this._completeRedirectFn=DP,this._overrideRedirectResult=SP}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _m(e,n,r,Kl(),s);return eC(e,o,pd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _m(e,n,r,Kl(),s);return uP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HP(e),r=new VP(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cl,{type:cl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cl];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hy()||hd()||ru()}}const aC=oC;var ym="@firebase/auth",vm="1.0.0";/**
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
 */class cC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lC(t){pr(new xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qy(t)},u=new MS(r,s,i,c);return FS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pr(new xn("auth-internal",e=>{const n=zo(e.getProvider("auth").getImmediate());return(r=>new cC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(ym,vm,uC(t)),fn(ym,vm,"esm2017")}/**
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
 */const hC=5*60,dC=wy("authIdTokenMaxAge")||hC;let Im=null;const fC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dC)return;const s=n==null?void 0:n.token;Im!==s&&(Im=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pC(t=Cy()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LS(t,{popupRedirectResolver:aC,persistence:[yP,oP,av]}),r=wy("authTokenSyncURL");if(r){const i=fC(r);tP(n,i,()=>i(n.currentUser)),eP(n,o=>i(o))}const s=M0("auth");return s&&US(n,`http://${s}`),n}lC("Browser");/*! js-cookie v3.0.5 | MIT */function Aa(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var mC={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Gl(t,e){function n(s,i,o){if(!(typeof document>"u")){o=Aa({},e,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),s=encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in o)o[c]&&(a+="; "+c,o[c]!==!0&&(a+="="+o[c].split(";")[0]));return document.cookie=s+"="+t.write(i,s)+a}}function r(s){if(!(typeof document>"u"||arguments.length&&!s)){for(var i=document.cookie?document.cookie.split("; "):[],o={},a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");try{var l=decodeURIComponent(c[0]);if(o[l]=t.read(u,l),s===l)break}catch{}}return s?o[s]:o}}return Object.create({set:n,get:r,remove:function(s,i){n(s,"",Aa({},i,{expires:-1}))},withAttributes:function(s){return Gl(this.converter,Aa({},this.attributes,s))},withConverter:function(s){return Gl(Aa({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var vt=Gl(mC,{path:"/"});const ou=Tb("auth",()=>{const t=pC(),e=rd();let n=cn([]),r=cn(""),s=cn(),i=cn("");return{setAccessToken:(l,h,d,f,_)=>{r.value=l,s.value=h,i.value={name:d,email:f,image:_}},authUser:(l,h)=>{JS(t,l,h).then(d=>{n.value=d.user,vt.set("access_token",n.value.accessToken,{expires:7}),vt.set("uid",n.value.uid,{expires:7}),vt.set("displayName",n.value.displayName,{expires:7}),vt.set("email",n.value.email,{expires:7}),vt.set("photoURL",n.value.photoURL,{expires:7}),e.push({path:"/home"})}).catch(d=>{console.log(d)})},update:async(l,h)=>{console.log(l);try{await ZS(t.currentUser,{displayName:l,photoURL:h}),vt.set("displayName",t.currentUser.displayName,{expires:7}),vt.set("email",t.currentUser.email,{expires:7}),vt.set("photoURL",t.currentUser.photoURL,{expires:7}),console.log("Profile updated successfully!",t.currentUser)}catch(d){console.error("Error updating profile:",d)}},logout:()=>{nP(t).then(()=>{vt.remove("access_token"),vt.remove("profile"),r.value="",i.value=""}).catch(l=>{console.log(l)})},user:n,profile:i,accessToken:r}}),gC={class:"relative flex flex-col justify-center h-screen overflow-hidden"},_C={class:"w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg"},yC=["onSubmit"],vC=Se("label",{class:"label"},[Se("span",{class:"text-base label-text"},"Email")],-1),IC=Se("label",{class:"label"},[Se("span",{class:"text-base label-text"},"Password")],-1),EC=Se("a",{href:"#",class:"text-xs text-gray-600 hover:underline hover:text-blue-600"},"Forget Password?",-1),wC=Se("div",null,[Se("button",{type:"submit",class:"btn btn-primary"},"Login")],-1),TC={__name:"auth",setup(t){rd();const e=ou(),n=cn(""),r=cn("");cn(!1);const s=async()=>{await e.authUser(n.value,r.value)};return(i,o)=>(ar(),sc("div",gC,[Se("div",_C,[Se("form",{onSubmit:hb(s,["prevent"]),class:"space-y-4"},[Se("div",null,[vC,ep(Se("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),type:"text",placeholder:"Email Address",class:"w-full input input-bordered input-primary"},null,512),[[Cp,n.value]])]),Se("div",null,[IC,ep(Se("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a),type:"password",placeholder:"Enter Password",class:"w-full input input-bordered input-primary"},null,512),[[Cp,r.value]])]),EC,wC],40,yC)])]))}};const AC={class:"flex"},bC={class:"w-48 h-screen"},RC={class:"p-5 h-screen flex flex-col"},SC={class:"menu rounded-box p-0"},PC={class:"mt-auto"},CC={class:"flex items-center"},DC={key:0,class:"avatar hover:opacity-80"},xC={class:"w-10 rounded"},VC=["src"],kC={class:"p-8 w-full overflow-scroll h-screen max-h-screen main-content bg-gray-200"},NC={__name:"sidebar",setup(t){const e=ou(),n=rd();S0();let r=Ct(()=>e.profile);const s=async()=>{await e.logout(),n.push({path:"/"})};return(i,o)=>{const a=np("router-link"),c=np("router-view");return ar(),sc("div",AC,[Se("aside",bC,[Se("nav",RC,[Se("ul",SC,[Se("li",null,[Ye(a,{to:"/home"},{default:Ua(()=>[kl("Home")]),_:1})]),Se("li",null,[Ye(a,{to:"/list-employee"},{default:Ua(()=>[kl("List")]),_:1})])]),Se("ul",PC,[Se("div",CC,[Yt(r).image!==null&&Yt(r).image!==void 0?(ar(),sc("div",DC,[Se("div",xC,[Ye(a,{to:"/profile"},{default:Ua(()=>[Se("img",{src:Yt(r).image},null,8,VC)]),_:1})])])):Nl("",!0),Se("li",{class:"ml-3 p-4 hover:bg-gray-200 rounded-box"},[Se("a",{onClick:s},"Logout")])])])])]),Se("div",kC,[Ye(c)])])}}};const OC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},MC={__name:"App",setup(t){const e=ou();let n=Ct(()=>e.accessToken);return(r,s)=>(ar(),sc(Pt,null,[Yt(n)?(ar(),ic(NC,{key:0})):Nl("",!0),Yt(n)?Nl("",!0):(ar(),ic(TC,{key:1}))],64))}},LC=OC(MC,[["__scopeId","data-v-b1e148a2"]]),FC="modulepreload",UC=function(t){return"/"+t},Em={},Si=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=UC(i),i in Em)return;Em[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=s.length-1;l>=0;l--){const h=s[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":FC,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},BC=b0({history:$b("/"),routes:[{path:"/home",name:"home",component:()=>Si(()=>import("./home-732a56a7.js"),["assets/home-732a56a7.js","assets/form-input-4a381841.js","assets/input-7ed29373.js","assets/button-849dbc41.js","assets/employee-42f87060.js","assets/loading-87ce81d9.js","assets/loading-57c5a6a9.css"]),meta:{requiresAuth:!0}},{path:"/list-employee",name:"list-employee",component:()=>Si(()=>import("./index-29d72b46.js"),["assets/index-29d72b46.js","assets/table-8740c9c3.js","assets/button-849dbc41.js","assets/employee-42f87060.js","assets/loading-87ce81d9.js","assets/loading-57c5a6a9.css"]),meta:{requiresAuth:!0}},{path:"/edit-employee/:id",name:"edit-list-employee",component:()=>Si(()=>import("./index-2d04d9ac.js"),["assets/index-2d04d9ac.js","assets/form-input-4a381841.js","assets/input-7ed29373.js","assets/button-849dbc41.js","assets/table-8740c9c3.js","assets/loading-87ce81d9.js","assets/loading-57c5a6a9.css","assets/employee-42f87060.js","assets/employer-837ad1ac.js"]),meta:{requiresAuth:!0}},{path:"/edit-employer/:id",name:"edit-employer",component:()=>Si(()=>import("./index-31055adc.js"),["assets/index-31055adc.js","assets/form-input-4a381841.js","assets/input-7ed29373.js","assets/button-849dbc41.js","assets/loading-87ce81d9.js","assets/loading-57c5a6a9.css","assets/employer-837ad1ac.js"]),meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:()=>Si(()=>import("./index-08e1f8ab.js"),["assets/index-08e1f8ab.js","assets/input-7ed29373.js","assets/button-849dbc41.js"]),meta:{requiresAuth:!0}}]});/**
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
 */class $C{constructor(e,n){this._delegate=e,this.firebase=n,hc(e,new xn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Dy(this._delegate)))}_getService(e,n=dr){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=dr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){hc(this._delegate,e)}_addOrOverwriteComponent(e){Py(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const qC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},wm=new ds("app-compat","Firebase",qC);/**
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
 */function jC(t){const e={},n={__esModule:!0,initializeApp:i,app:s,registerVersion:fn,setLogLevel:Vy,onLog:xy,apps:null,SDK_VERSION:Ar,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:aS}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||dr,!Hp(e,u))throw wm.create("no-app",{appName:u});return e[u]}s.App=t;function i(u,l={}){const h=od(u,l);if(Hp(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(pr(u)&&u.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw wm.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&uc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
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
 */function pv(){const t=jC($C);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:pv,extendNamespace:e,createSubscribe:Ay,ErrorFactory:ds,deepExtend:uc});function e(n){uc(t,n)}return t}const KC=pv();/**
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
 */const Tm=new eu("@firebase/app-compat"),zC="@firebase/app-compat",GC="0.2.14";/**
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
 */function WC(t){fn(zC,GC,t)}/**
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
 */if($0()&&self.firebase!==void 0){Tm.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Tm.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const gd=KC;WC();var HC="firebase",QC="10.0.0";/**
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
 */gd.registerVersion(HC,QC,"app-compat");var YC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,_d=_d||{},te=YC||self;function au(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ho(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function JC(t){return Object.prototype.hasOwnProperty.call(t,ul)&&t[ul]||(t[ul]=++XC)}var ul="closure_uid_"+(1e9*Math.random()>>>0),XC=0;function ZC(t,e,n){return t.call.apply(t.bind,arguments)}function eD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=ZC:mt=eD,mt.apply(null,arguments)}function ba(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function st(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function br(){this.s=this.s,this.o=this.o}var tD=0;br.prototype.s=!1;br.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tD!=0)&&JC(this)};br.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Am(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(au(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var nD=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function Eo(t){return/^[\s\xa0]*$/.test(t)}function cu(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return cu().indexOf(t)!=-1}function vd(t){return vd[" "](t),t}vd[" "]=function(){};function rD(t,e){var n=QD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var sD=an("Opera"),Ys=an("Trident")||an("MSIE"),gv=an("Edge"),Wl=gv||Ys,_v=an("Gecko")&&!(cu().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),iD=cu().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function yv(){var t=te.document;return t?t.documentMode:void 0}var Hl;e:{var ll="",hl=function(){var t=cu();if(_v)return/rv:([^\);]+)(\)|;)/.exec(t);if(gv)return/Edge\/([\d\.]+)/.exec(t);if(Ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(iD)return/WebKit\/(\S+)/.exec(t);if(sD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hl&&(ll=hl?hl[1]:""),Ys){var dl=yv();if(dl!=null&&dl>parseFloat(ll)){Hl=String(dl);break e}}Hl=ll}var Ql;if(te.document&&Ys){var bm=yv();Ql=bm||parseInt(Hl,10)||void 0}else Ql=void 0;var oD=Ql;function wo(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_v){e:{try{vd(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:aD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wo.$.h.call(this)}}st(wo,gt);var aD={2:"touch",3:"pen",4:"mouse"};wo.prototype.h=function(){wo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qo="closure_listenable_"+(1e6*Math.random()|0),cD=0;function uD(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++cD,this.fa=this.ia=!1}function uu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Id(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function lD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function vv(t){const e={};for(const n in t)e[n]=t[n];return e}const Rm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Iv(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Rm.length;i++)n=Rm[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function lu(t){this.src=t,this.g={},this.h=0}lu.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Jl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new uD(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Yl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=mv(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(uu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ed="closure_lm_"+(1e6*Math.random()|0),fl={};function Ev(t,e,n,r,s){if(r&&r.once)return Tv(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ev(t,e[i],n,r,s);return null}return n=Ad(n),t&&t[Qo]?t.O(e,n,Ho(r)?!!r.capture:!!r,s):wv(t,e,n,!1,r,s)}function wv(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ho(s)?!!s.capture:!!s,a=Td(t);if(a||(t[Ed]=a=new lu(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=hD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nD||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(bv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hD(){function t(n){return e.call(t.src,t.listener,n)}const e=dD;return t}function Tv(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tv(t,e[i],n,r,s);return null}return n=Ad(n),t&&t[Qo]?t.P(e,n,Ho(r)?!!r.capture:!!r,s):wv(t,e,n,!0,r,s)}function Av(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Av(t,e[i],n,r,s);else r=Ho(r)?!!r.capture:!!r,n=Ad(n),t&&t[Qo]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Jl(i,n,r,s),-1<n&&(uu(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Td(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jl(e,n,r,s)),(n=-1<t?e[t]:null)&&wd(n))}function wd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Qo])Yl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(bv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Td(e))?(Yl(n,t),n.h==0&&(n.src=null,e[Ed]=null)):uu(t)}}}function bv(t){return t in fl?fl[t]:fl[t]="on"+t}function dD(t,e){if(t.fa)t=!0;else{e=new wo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&wd(t),t=n.call(r,e)}return t}function Td(t){return t=t[Ed],t instanceof lu?t:null}var pl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ad(t){return typeof t=="function"?t:(t[pl]||(t[pl]=function(e){return t.handleEvent(e)}),t[pl])}function rt(){br.call(this),this.i=new lu(this),this.S=this,this.J=null}st(rt,br);rt.prototype[Qo]=!0;rt.prototype.removeEventListener=function(t,e,n,r){Av(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var s=e;e=new gt(r,t),Iv(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ra(o,r,!0,e)&&s}if(o=e.g=t,s=Ra(o,r,!0,e)&&s,s=Ra(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ra(o,r,!1,e)&&s}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)uu(n[r]);delete t.g[e],t.h--}}this.J=null};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ra(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Yl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var bd=te.JSON.stringify;class fD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function pD(){var t=Rd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mD{constructor(){this.h=this.g=null}add(e,n){const r=Rv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Rv=new fD(()=>new gD,t=>t.reset());class gD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _D(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function yD(t){te.setTimeout(()=>{throw t},0)}let To,Ao=!1,Rd=new mD,Sv=()=>{const t=te.Promise.resolve(void 0);To=()=>{t.then(vD)}};var vD=()=>{for(var t;t=pD();){try{t.h.call(t.g)}catch(n){yD(n)}var e=Rv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ao=!1};function hu(t,e){rt.call(this),this.h=t||1,this.g=e||te,this.j=mt(this.qb,this),this.l=Date.now()}st(hu,rt);F=hu.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(Sd(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){hu.$.N.call(this),Sd(this),delete this.g};function Pd(t,e,n){if(typeof t=="function")n&&(t=mt(t,n));else if(t&&typeof t.handleEvent=="function")t=mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Pv(t){t.g=Pd(()=>{t.g=null,t.i&&(t.i=!1,Pv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ID extends br{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pv(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bo(t){br.call(this),this.h=t,this.g={}}st(bo,br);var Sm=[];function Cv(t,e,n,r){Array.isArray(n)||(n&&(Sm[0]=n.toString()),n=Sm);for(var s=0;s<n.length;s++){var i=Ev(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Dv(t){Id(t.g,function(e,n){this.g.hasOwnProperty(n)&&wd(e)},t),t.g={}}bo.prototype.N=function(){bo.$.N.call(this),Dv(this)};bo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function du(){this.g=!0}du.prototype.Ea=function(){this.g=!1};function ED(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function wD(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ns(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+AD(t,n)+(r?" "+r:"")})}function TD(t,e){t.info(function(){return"TIMEOUT: "+e})}du.prototype.info=function(){};function AD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return bd(n)}catch{return e}}var ps={},Pm=null;function fu(){return Pm=Pm||new rt}ps.Ta="serverreachability";function xv(t){gt.call(this,ps.Ta,t)}st(xv,gt);function Ro(t){const e=fu();ht(e,new xv(e))}ps.STAT_EVENT="statevent";function Vv(t,e){gt.call(this,ps.STAT_EVENT,t),this.stat=e}st(Vv,gt);function wt(t){const e=fu();ht(e,new Vv(e,t))}ps.Ua="timingevent";function kv(t,e){gt.call(this,ps.Ua,t),this.size=e}st(kv,gt);function Yo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var pu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Nv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cd(){}Cd.prototype.h=null;function Cm(t){return t.h||(t.h=t.i())}function Ov(){}var Jo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Dd(){gt.call(this,"d")}st(Dd,gt);function xd(){gt.call(this,"c")}st(xd,gt);var Xl;function mu(){}st(mu,Cd);mu.prototype.g=function(){return new XMLHttpRequest};mu.prototype.i=function(){return{}};Xl=new mu;function Xo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new bo(this),this.P=bD,t=Wl?125:void 0,this.V=new hu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Mv}function Mv(){this.i=null,this.g="",this.h=!1}var bD=45e3,Zl={},_c={};F=Xo.prototype;F.setTimeout=function(t){this.P=t};function eh(t,e,n){t.L=1,t.v=_u(kn(e)),t.s=n,t.S=!0,Lv(t,null)}function Lv(t,e){t.G=Date.now(),Zo(t),t.A=kn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),zv(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Mv,t.g=dI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ID(mt(t.Pa,t,t.g),t.O)),Cv(t.U,t.g,"readystatechange",t.nb),e=t.I?vv(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ro(),ED(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&un(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const l=un(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Wl||this.g&&(this.h.h||this.g.ja()||km(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Ro(3):Ro(2)),gu(this);var n=this.g.da();this.ca=n;t:if(Fv(this)){var r=km(this.g);t="";var s=r.length,i=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gr(this),Zi(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,wD(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Eo(a)){var u=a;break t}}u=null}if(n=u)Ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,th(this,n);else{this.i=!1,this.o=3,wt(12),Gr(this),Zi(this);break e}}this.S?(Uv(this,l,o),Wl&&this.i&&l==3&&(Cv(this.U,this.V,"tick",this.mb),this.V.start())):(Ns(this.j,this.m,o,null),th(this,o)),l==4&&Gr(this),this.i&&!this.J&&(l==4?cI(this.l,this):(this.i=!1,Zo(this)))}else GD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,wt(12)):(this.o=0,wt(13)),Gr(this),Zi(this)}}}catch{}finally{}};function Fv(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Uv(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=RD(t,n),s==_c){e==4&&(t.o=4,wt(14),r=!1),Ns(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Zl){t.o=4,wt(15),Ns(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ns(t.j,t.m,s,null),th(t,s);Fv(t)&&s!=_c&&s!=Zl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ld(e),e.M=!0,wt(11))):(Ns(t.j,t.m,n,"[Invalid Chunked Response]"),Gr(t),Zi(t))}F.mb=function(){if(this.g){var t=un(this.g),e=this.g.ja();this.C<e.length&&(gu(this),Uv(this,t,e),this.i&&t!=4&&Zo(this))}};function RD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?_c:(n=Number(e.substring(n,r)),isNaN(n)?Zl:(r+=1,r+n>e.length?_c:(e=e.slice(r,r+n),t.C=r+n,e)))}F.cancel=function(){this.J=!0,Gr(this)};function Zo(t){t.Y=Date.now()+t.P,Bv(t,t.P)}function Bv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Yo(mt(t.lb,t),e)}function gu(t){t.B&&(te.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(TD(this.j,this.A),this.L!=2&&(Ro(),wt(17)),Gr(this),this.o=2,Zi(this)):Bv(this,this.Y-t)};function Zi(t){t.l.H==0||t.J||cI(t.l,t)}function Gr(t){gu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Sd(t.V),Dv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function th(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||nh(n.i,t))){if(!t.K&&nh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ic(n),Iu(n);else break e;Md(n),wt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Yo(mt(n.ib,n),6e3));if(1>=Hv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Wr(n,11)}else if((t.K||n.g==t)&&Ic(n),!Eo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Vd(i,i.h),i.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,xe(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=hI(r,r.J?r.pa:null,r.Y),o.K){Qv(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(gu(a),Zo(a)),r.g=o}else oI(r);0<n.j.length&&Eu(n)}else u[0]!="stop"&&u[0]!="close"||Wr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Wr(n,7):Od(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ro(4)}catch{}}function SD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(au(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function PD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(au(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $v(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(au(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PD(t),r=SD(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var qv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Zr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Zr){this.h=t.h,yc(this,t.j),this.s=t.s,this.g=t.g,vc(this,t.m),this.l=t.l;var e=t.i,n=new So;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Dm(this,n),this.o=t.o}else t&&(e=String(t).match(qv))?(this.h=!1,yc(this,e[1]||"",!0),this.s=Bi(e[2]||""),this.g=Bi(e[3]||"",!0),vc(this,e[4]),this.l=Bi(e[5]||"",!0),Dm(this,e[6]||"",!0),this.o=Bi(e[7]||"")):(this.h=!1,this.i=new So(null,this.h))}Zr.prototype.toString=function(){var t=[],e=this.j;e&&t.push($i(e,xm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($i(e,xm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($i(n,n.charAt(0)=="/"?VD:xD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$i(n,ND)),t.join("")};function kn(t){return new Zr(t)}function yc(t,e,n){t.j=n?Bi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Dm(t,e,n){e instanceof So?(t.i=e,OD(t.i,t.h)):(n||(e=$i(e,kD)),t.i=new So(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function _u(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $i(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xm=/[#\/\?@]/g,xD=/[#\?:]/g,VD=/[#\?]/g,kD=/[#\?@]/g,ND=/#/g;function So(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rr(t){t.g||(t.g=new Map,t.h=0,t.i&&CD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=So.prototype;F.add=function(t,e){Rr(this),this.i=null,t=fi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jv(t,e){Rr(t),e=fi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Kv(t,e){return Rr(t),e=fi(t,e),t.g.has(e)}F.forEach=function(t,e){Rr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};F.ta=function(){Rr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};F.Z=function(t){Rr(this);let e=[];if(typeof t=="string")Kv(this,t)&&(e=e.concat(this.g.get(fi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Rr(this),this.i=null,t=fi(this,t),Kv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function zv(t,e,n){jv(t,e),0<n.length&&(t.i=null,t.g.set(fi(t,e),yd(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function fi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function OD(t,e){e&&!t.j&&(Rr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(jv(this,r),zv(this,s,n))},t)),t.j=e}var MD=class{constructor(t,e){this.g=t,this.map=e}};function Gv(t){this.l=t||LD,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LD=10;function Wv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hv(t){return t.h?1:t.g?t.g.size:0}function nh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vd(t,e){t.g?t.g.add(e):t.h=e}function Qv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gv.prototype.cancel=function(){if(this.i=Yv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yv(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return yd(t.i)}var FD=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function UD(){this.g=new FD}function BD(t,e,n){const r=n||"";try{$v(t,function(s,i){let o=s;Ho(s)&&(o=bd(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function $D(t,e){const n=new du;if(te.Image){const r=new Image;r.onload=ba(Sa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ba(Sa,n,r,"TestLoadImage: error",!1,e),r.onabort=ba(Sa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ba(Sa,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Sa(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ea(t){this.l=t.fc||null,this.j=t.ob||!1}st(ea,Cd);ea.prototype.g=function(){return new yu(this.l,this.j)};ea.prototype.i=function(t){return function(){return t}}({});function yu(t,e){rt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=kd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(yu,rt);var kd=0;F=yu.prototype;F.open=function(t,e){if(this.readyState!=kd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Po(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ta(this)),this.readyState=kd};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Po(this)),this.g&&(this.readyState=3,Po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jv(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Jv(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ta(this):Po(this),this.readyState==3&&Jv(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,ta(this))};F.Ya=function(t){this.g&&(this.response=t,ta(this))};F.ka=function(){this.g&&ta(this)};function ta(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Po(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(yu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qD=te.JSON.parse;function Ue(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xv,this.L=this.M=!1}st(Ue,rt);var Xv="",jD=/^https?$/i,KD=["POST","PUT"];F=Ue.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xl.g(),this.C=this.u?Cm(this.u):Cm(Xl),this.g.onreadystatechange=mt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Vm(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=te.FormData&&t instanceof te.FormData,!(0<=mv(KD,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{tI(this),0<this.B&&((this.L=zD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.ua,this)):this.A=Pd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Vm(this,i)}};function zD(t){return Ys&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof _d<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function Vm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zv(t),vu(t)}function Zv(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),vu(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vu(this,!0)),Ue.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?eI(this):this.kb())};F.kb=function(){eI(this)};function eI(t){if(t.h&&typeof _d<"u"&&(!t.C[1]||un(t)!=4||t.da()!=2)){if(t.v&&un(t)==4)Pd(t.La,0,t);else if(ht(t,"readystatechange"),un(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(qv)[1]||null;!s&&te.self&&te.self.location&&(s=te.self.location.protocol.slice(0,-1)),r=!jD.test(s?s.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var i=2<un(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Zv(t)}}finally{vu(t)}}}}function vu(t,e){if(t.g){tI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function tI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function un(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qD(e)}};function km(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Xv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function GD(t){const e={};t=(t.g&&2<=un(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Eo(t[r]))continue;var n=_D(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}lD(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nI(t){let e="";return Id(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Nd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=nI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Pi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rI(t){this.Ga=0,this.j=[],this.l=new du,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Pi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Pi("baseRetryDelayMs",5e3,t),this.hb=Pi("retryDelaySeedMs",1e4,t),this.eb=Pi("forwardChannelMaxRetries",2,t),this.xa=Pi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Gv(t&&t.concurrentRequestLimit),this.Ja=new UD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=rI.prototype;F.ra=8;F.H=1;function Od(t){if(sI(t),t.H==3){var e=t.W++,n=kn(t.I);if(xe(n,"SID",t.K),xe(n,"RID",e),xe(n,"TYPE","terminate"),na(t,n),e=new Xo(t,t.l,e),e.L=2,e.v=_u(kn(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=dI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Zo(e)}lI(t)}function Iu(t){t.g&&(Ld(t),t.g.cancel(),t.g=null)}function sI(t){Iu(t),t.u&&(te.clearTimeout(t.u),t.u=null),Ic(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Eu(t){if(!Wv(t.i)&&!t.m){t.m=!0;var e=t.Na;To||Sv(),Ao||(To(),Ao=!0),Rd.add(e,t),t.C=0}}function WD(t,e){return Hv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Yo(mt(t.Na,t,e),uI(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Xo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=vv(i),Iv(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=iI(this,s,e),n=kn(this.I),xe(n,"RID",t),xe(n,"CVER",22),this.F&&xe(n,"X-HTTP-Session-Id",this.F),na(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(nI(i)))+"&"+e:this.o&&Nd(n,this.o,i)),Vd(this.i,s),this.bb&&xe(n,"TYPE","init"),this.P?(xe(n,"$req",e),xe(n,"SID","null"),s.aa=!0,eh(s,n,null)):eh(s,n,e),this.H=2}}else this.H==3&&(t?Nm(this,t):this.j.length==0||Wv(this.i)||Nm(this))};function Nm(t,e){var n;e?n=e.m:n=t.W++;const r=kn(t.I);xe(r,"SID",t.K),xe(r,"RID",n),xe(r,"AID",t.V),na(t,r),t.o&&t.s&&Nd(r,t.o,t.s),n=new Xo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=iI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Vd(t.i,n),eh(n,r,e)}function na(t,e){t.na&&Id(t.na,function(n,r){xe(e,r,n)}),t.h&&$v({},function(n,r){xe(e,r,n)})}function iI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?mt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{BD(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function oI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;To||Sv(),Ao||(To(),Ao=!0),Rd.add(e,t),t.A=0}}function Md(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Yo(mt(t.Ma,t),uI(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,aI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Yo(mt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Iu(this),aI(this))};function Ld(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function aI(t){t.g=new Xo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=kn(t.wa);xe(e,"RID","rpc"),xe(e,"SID",t.K),xe(e,"AID",t.V),xe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&xe(e,"TO",t.qa),xe(e,"TYPE","xmlhttp"),na(t,e),t.o&&t.s&&Nd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=_u(kn(e)),n.s=null,n.S=!0,Lv(n,t)}F.ib=function(){this.v!=null&&(this.v=null,Iu(this),Md(this),wt(19))};function Ic(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function cI(t,e){var n=null;if(t.g==e){Ic(t),Ld(t),t.g=null;var r=2}else if(nh(t.i,e))n=e.F,Qv(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=fu(),ht(r,new kv(r,n)),Eu(t)}else oI(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&WD(t,e)||r==2&&Md(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Wr(t,5);break;case 4:Wr(t,10);break;case 3:Wr(t,6);break;default:Wr(t,2)}}}function uI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=mt(t.pb,t);n||(n=new Zr("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||yc(n,"https"),_u(n)),$D(n.toString(),r)}else wt(2);t.H=0,t.h&&t.h.za(e),lI(t),sI(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function lI(t){if(t.H=0,t.ma=[],t.h){const e=Yv(t.i);(e.length!=0||t.j.length!=0)&&(Am(t.ma,e),Am(t.ma,t.j),t.i.i.length=0,yd(t.j),t.j.length=0),t.h.ya()}}function hI(t,e,n){var r=n instanceof Zr?kn(n):new Zr(n);if(r.g!="")e&&(r.g=e+"."+r.g),vc(r,r.m);else{var s=te.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Zr(null);r&&yc(i,r),e&&(i.g=e),s&&vc(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&xe(r,n,e),xe(r,"VER",t.ra),na(t,r),r}function dI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new ea({ob:!0})):new Ue(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function fI(){}F=fI.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function Ec(){if(Ys&&!(10<=Number(oD)))throw Error("Environmental error: no available transport.")}Ec.prototype.g=function(t,e){return new Lt(t,e)};function Lt(t,e){rt.call(this),this.g=new rI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Eo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pi(this)}st(Lt,rt);Lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=hI(t,null,t.Y),Eu(t)};Lt.prototype.close=function(){Od(this.g)};Lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bd(t),t=n);e.j.push(new MD(e.fb++,t)),e.H==3&&Eu(e)};Lt.prototype.N=function(){this.g.h=null,delete this.j,Od(this.g),delete this.g,Lt.$.N.call(this)};function pI(t){Dd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}st(pI,Dd);function mI(){xd.call(this),this.status=1}st(mI,xd);function pi(t){this.g=t}st(pi,fI);pi.prototype.Ba=function(){ht(this.g,"a")};pi.prototype.Aa=function(t){ht(this.g,new pI(t))};pi.prototype.za=function(t){ht(this.g,new mI)};pi.prototype.ya=function(){ht(this.g,"b")};function HD(){this.blockSize=-1}function Zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}st(Zt,HD);Zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ml(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ml(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ml(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ml(this,r),s=0;break}}this.h=s,this.i+=e};Zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var QD={};function Fd(t){return-128<=t&&128>t?rD(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function ln(t){if(isNaN(t)||!isFinite(t))return Bs;if(0>t)return ut(ln(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=rh;return new Te(e,0)}function gI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(gI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ln(Math.pow(e,8)),r=Bs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=ln(Math.pow(e,i)),r=r.R(i).add(ln(o))):(r=r.R(n),r=r.add(ln(o)))}return r}var rh=4294967296,Bs=Fd(0),sh=Fd(1),Om=Fd(16777216);F=Te.prototype;F.ea=function(){if(Bt(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:rh+r)*e,e*=rh}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sn(this))return"0";if(Bt(this))return"-"+ut(this).toString(t);for(var e=ln(Math.pow(t,6)),n=this,r="";;){var s=Tc(n,e).g;n=wc(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Sn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Bt(t){return t.h==-1}F.X=function(t){return t=wc(this,t),Bt(t)?-1:Sn(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(sh)}F.abs=function(){return Bt(this)?ut(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function wc(t,e){return t.add(ut(e))}F.R=function(t){if(Sn(this)||Sn(t))return Bs;if(Bt(this))return Bt(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(Bt(t))return ut(this.R(ut(t)));if(0>this.X(Om)&&0>t.X(Om))return ln(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Pa(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Pa(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Pa(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Pa(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function Pa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ci(t,e){this.g=t,this.h=e}function Tc(t,e){if(Sn(e))throw Error("division by zero");if(Sn(t))return new Ci(Bs,Bs);if(Bt(t))return e=Tc(ut(t),e),new Ci(ut(e.g),ut(e.h));if(Bt(e))return e=Tc(t,ut(e)),new Ci(ut(e.g),e.h);if(30<t.g.length){if(Bt(t)||Bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=sh,r=e;0>=r.X(t);)n=Mm(n),r=Mm(r);var s=bs(n,1),i=bs(r,1);for(r=bs(r,2),n=bs(n,2);!Sn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=bs(r,1),n=bs(n,1)}return e=wc(t,s.R(e)),new Ci(s,e)}for(s=Bs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ln(n),o=i.R(e);Bt(o)||0<o.X(t);)n-=r,i=ln(n),o=i.R(e);Sn(i)&&(i=sh),s=s.add(i),t=wc(t,o)}return new Ci(s,t)}F.gb=function(t){return Tc(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function Mm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function bs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(s,t.h)}Ec.prototype.createWebChannel=Ec.prototype.g;Lt.prototype.send=Lt.prototype.u;Lt.prototype.open=Lt.prototype.m;Lt.prototype.close=Lt.prototype.close;pu.NO_ERROR=0;pu.TIMEOUT=8;pu.HTTP_ERROR=6;Nv.COMPLETE="complete";Ov.EventType=Jo;Jo.OPEN="a";Jo.CLOSE="b";Jo.ERROR="c";Jo.MESSAGE="d";rt.prototype.listen=rt.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;Zt.prototype.digest=Zt.prototype.l;Zt.prototype.reset=Zt.prototype.reset;Zt.prototype.update=Zt.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=ln;Te.fromString=gI;var YD=function(){return new Ec},JD=function(){return fu()},gl=pu,XD=Nv,ZD=ps,Lm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ex=ea,Ca=Ov,tx=Ue,nx=Zt,$s=Te;const Fm="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let mi="10.0.0";/**
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
 */const mr=new eu("@firebase/firestore");function ih(){return mr.logLevel}function rx(t){mr.setLogLevel(t)}function S(t,...e){if(mr.logLevel<=fe.DEBUG){const n=e.map(Ud);mr.debug(`Firestore (${mi}): ${t}`,...n)}}function $e(t,...e){if(mr.logLevel<=fe.ERROR){const n=e.map(Ud);mr.error(`Firestore (${mi}): ${t}`,...n)}}function en(t,...e){if(mr.logLevel<=fe.WARN){const n=e.map(Ud);mr.warn(`Firestore (${mi}): ${t}`,...n)}}function Ud(t){if(typeof t=="string")return t;try{/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${mi}) INTERNAL ASSERTION FAILED: `+t;throw $e(e),new Error(e)}function H(t,e){t||$()}function sx(t,e){t||$()}function L(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _I{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ix{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class ox{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ax{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new _I(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new et(e)}}class cx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ux{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(H(typeof n.token=="string"),this.R=n.token,new lx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Js(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function vI(t){return t+"\0"}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Me(0,0))}static max(){return new W(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Co{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends Co{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const fx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Co{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return fx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new R(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new R(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(pe.fromString(e))}static fromName(e){return new N(pe.fromString(e).popFirst(5))}static empty(){return new N(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new pe(e.slice()))}}/**
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
 */class II{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function oh(t){return t.fields.find(e=>e.kind===2)}function Mr(t){return t.fields.filter(e=>e.kind!==2)}II.UNKNOWN_ID=-1;class px{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ac{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ac(0,Ft.min())}}function EI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Ft(s,N.empty(),e)}function wI(t){return new Ft(t.readTime,t.key,-1)}class Ft{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ft(W.min(),N.empty(),-1)}static max(){return new Ft(W.max(),N.empty(),-1)}}function Bd(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const TI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==TI)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,r)=>{n(e)})}static reject(e){return new v((n,r)=>{r(e)})}static waitFor(e){return new v((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=v.resolve(!1);for(const r of e)n=n.next(s=>s?v.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new v((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new v((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class wu{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new nt,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new eo(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const s=$d(r.target.error);this.m.reject(new eo(e,s))}}static open(e,n,r,s){try{return new wu(n,e.transaction(s,r))}catch(i){throw new eo(n,i)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(S("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new gx(n)}}class Ht{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Ht.D(Je())===12.2&&$e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return S("SimpleDb","Removing database:",e),Br(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Ty())return!1;if(Ht.C())return!0;const e=Je(),n=Ht.D(e),r=0<n&&n<10,s=Ht.F(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new eo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new R(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new eo(e,o))},s.onupgradeneeded=i=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.B(o,s.transaction,i.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=wu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),v.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class mx{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Br(this.q.delete())}}class eo extends R{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Pr(t){return t.name==="IndexedDbTransactionError"}class gx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(S("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Br(r)}add(e){return S("SimpleDb","ADD",this.store.name,e,e),Br(this.store.add(e))}get(e){return Br(this.store.get(e)).next(n=>(n===void 0&&(n=null),S("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return S("SimpleDb","DELETE",this.store.name,e),Br(this.store.delete(e))}count(){return S("SimpleDb","COUNT",this.store.name),Br(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.j(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new v((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new v((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,n){S("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const s=this.cursor(r);return this.j(s,(i,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.j(s,n)}X(e){const n=this.cursor({});return new v((r,s)=>{n.onerror=i=>{const o=$d(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new v((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new mx(a),u=n(a.primaryKey,a.value,c);if(u instanceof v){const l=u.catch(h=>(c.done(),v.reject(h)));r.push(l)}c.isDone?s():c.U===null?a.continue():a.continue(c.U)}}).next(()=>v.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Br(t){return new v((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=$d(r.target.error);n(s)}})}let Um=!1;function $d(t){const e=Ht.D(Je());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Um||(Um=!0,setTimeout(()=>{throw r},0)),r}}return t}class _x{constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){S("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{S("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){Pr(n)?S("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Sr(n)}await this.te(6e4)})}}class yx{constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let s=n,i=!0;return v.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return S("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(s,i)).next(a=>(S("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=wI(i);Bd(o,r)>0&&(r=o)}),new Ft(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Dt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Dt.ae=-1;function ra(t){return t==null}function Do(t){return t===0&&1/t==-1/0}function bI(t){return typeof t=="number"&&Number.isInteger(t)&&!Do(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Bm(e)),e=vx(t.get(n),e);return Bm(e)}function vx(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Bm(t){return t+""}function hn(t){const e=t.length;if(H(e>=2),e===2)return H(t.charAt(0)===""&&t.charAt(1)===""),pe.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:$()}i=o+2}return new pe(r)}/**
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
 */const $m=["userId","batchId"];/**
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
 */function Ga(t,e){return[t,Tt(e)]}function RI(t,e,n){return[t,Tt(e),n]}const Ix={},Ex=["prefixPath","collectionGroup","readTime","documentId"],wx=["prefixPath","collectionGroup","documentId"],Tx=["collectionGroup","readTime","prefixPath","documentId"],Ax=["canonicalId","targetId"],bx=["targetId","path"],Rx=["path","targetId"],Sx=["collectionId","parent"],Px=["indexId","uid"],Cx=["uid","sequenceNumber"],Dx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xx=["indexId","uid","orderedDocumentKey"],Vx=["userId","collectionPath","documentId"],kx=["userId","collectionPath","largestBatchId"],Nx=["userId","collectionGroup","largestBatchId"],SI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ox=[...SI,"documentOverlays"],PI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],CI=PI,Mx=[...CI,"indexConfiguration","indexState","indexEntries"];/**
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
 */class ah extends AI{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function it(t,e){const n=L(t);return Ht.O(n.ue,e)}/**
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
 */function qm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function DI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Da(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Da(this.root,e,this.comparator,!1)}getReverseIterator(){return new Da(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Da(this.root,e,this.comparator,!0)}}class Da{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ct(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ke{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jm(this.data.getIterator())}getIteratorFrom(e){return new jm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class jm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Rs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class xt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new xt([])}unionWith(e){let n=new ke(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Js(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function Lx(){return typeof atob<"u"}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xI("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const Fx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(H(!!t),typeof t=="string"){let e=0;const n=Fx.exec(t);if(H(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function Tu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qd(t){const e=t.mapValue.fields.__previous_value__;return Tu(e)?qd(e):e}function xo(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class Ux{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class yr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Wa={nullValue:"NULL_VALUE"};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tu(t)?4:VI(t)?9007199254740991:10:$()}function yn(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xo(t).isEqual(xo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gr(s.timestampValue),a=gr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),a=Fe(i.doubleValue);return o===a?Do(o)===Do(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Js(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(qm(o)!==qm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!yn(o[c],a[c])))return!1;return!0}(t,e);default:return $()}}function Vo(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function vr(t,e){if(t===e)return 0;const n=rs(t),r=rs(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Fe(i.integerValue||i.doubleValue),c=Fe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Km(t.timestampValue,e.timestampValue);case 4:return Km(xo(t),xo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(i,o){const a=_r(i),c=_r(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=se(a[u],c[u]);if(l!==0)return l}return se(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=se(Fe(i.latitude),Fe(o.latitude));return a!==0?a:se(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=vr(a[u],c[u]);if(l)return l}return se(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===rr.mapValue&&o===rr.mapValue)return 0;if(i===rr.mapValue)return 1;if(o===rr.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=se(c[h],l[h]);if(d!==0)return d;const f=vr(a[c[h]],u[l[h]]);if(f!==0)return f}return se(c.length,l.length)}(t.mapValue,e.mapValue);default:throw $()}}function Km(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=gr(t),r=gr(e),s=se(n.seconds,r.seconds);return s!==0?s:se(n.nanos,r.nanos)}function Xs(t){return ch(t)}function ch(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return N.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ch(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ch(n.fields[o])}`;return s+"}"}(t.mapValue):$()}function ss(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function uh(t){return!!t&&"integerValue"in t}function ko(t){return!!t&&"arrayValue"in t}function zm(t){return!!t&&"nullValue"in t}function Gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ha(t){return!!t&&"mapValue"in t}function to(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=to(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=to(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Bx(t){return"nullValue"in t?Wa:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ss(yr.empty(),N.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function $x(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ss(yr.empty(),N.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?rr:$()}function Wm(t,e){const n=vr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Hm(t,e){const n=vr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ha(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=to(n)}setAll(e){let n=qe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=to(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ha(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ha(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new lt(to(this.value))}}function kI(t){const e=[];return ms(t.fields,(n,r)=>{const s=new qe([n]);if(Ha(r)){const i=kI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
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
 */class Ve{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ve(e,0,W.min(),W.min(),W.min(),lt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ve(e,1,n,W.min(),r,s,0)}static newNoDocument(e,n){return new Ve(e,2,n,W.min(),W.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,W.min(),W.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ir{constructor(e,n){this.position=e,this.inclusive=n}}function Qm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=vr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function qx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class NI{}class ue extends NI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jx(e,n,r):n==="array-contains"?new Gx(e,r):n==="in"?new BI(e,r):n==="not-in"?new Wx(e,r):n==="array-contains-any"?new Hx(e,r):new ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Kx(e,r):new zx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vr(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(vr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ee extends NI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ee(e,n)}matches(e){return Zs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Zs(t){return t.op==="and"}function lh(t){return t.op==="or"}function jd(t){return OI(t)&&Zs(t)}function OI(t){for(const e of t.filters)if(e instanceof Ee)return!1;return!0}function hh(t){if(t instanceof ue)return t.field.canonicalString()+t.op.toString()+Xs(t.value);if(jd(t))return t.filters.map(e=>hh(e)).join(",");{const e=t.filters.map(n=>hh(n)).join(",");return`${t.op}(${e})`}}function MI(t,e){return t instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof Ee?function(r,s){return s instanceof Ee&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&MI(o,s.filters[a]),!0):!1}(t,e):void $()}function LI(t,e){const n=t.filters.concat(e);return Ee.create(n,t.op)}function FI(t){return t instanceof ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Xs(n.value)}`}(t):t instanceof Ee?function(n){return n.op.toString()+" {"+n.getFilters().map(FI).join(" ,")+"}"}(t):"Filter"}class jx extends ue{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kx extends ue{constructor(e,n){super(e,"in",n),this.keys=UI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zx extends ue{constructor(e,n){super(e,"not-in",n),this.keys=UI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function UI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class Gx extends ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ko(n)&&Vo(n.arrayValue,this.value)}}class BI extends ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vo(this.value.arrayValue,n)}}class Wx extends ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vo(this.value.arrayValue,n)}}class Hx extends ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ko(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vo(this.value.arrayValue,r))}}/**
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
 */class Qx{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function dh(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Qx(t,e,n,r,s,i,o)}function is(t){const e=L(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xs(r)).join(",")),e.he=n}return e.he}function sa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!MI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ym(t.startAt,e.startAt)&&Ym(t.endAt,e.endAt)}function bc(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Rc(t,e){return t.filters.filter(n=>n instanceof ue&&n.field.isEqual(e))}function Jm(t,e,n){let r=Wa,s=!0;for(const i of Rc(t,e)){let o=Wa,a=!0;switch(i.op){case"<":case"<=":o=Bx(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Wa}Wm({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Wm({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function Xm(t,e,n){let r=rr,s=!0;for(const i of Rc(t,e)){let o=rr,a=!0;switch(i.op){case">=":case">":o=$x(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=rr}Hm({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Hm({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Mn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function $I(t,e,n,r,s,i,o,a){return new Mn(t,e,n,r,s,i,o,a)}function gi(t){return new Mn(t)}function Zm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Au(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function zd(t){return t.collectionGroup!==null}function es(t){const e=L(t);if(e.Pe===null){e.Pe=[];const n=Au(e),r=Kd(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new qs(n)),e.Pe.push(new qs(qe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new qs(qe.keyField(),i))}}}return e.Pe}function Nt(t){const e=L(t);if(!e.Ie)if(e.limitType==="F")e.Ie=dh(e.path,e.collectionGroup,es(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of es(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new qs(i.field,o))}const r=e.endAt?new Ir(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ir(e.startAt.position,e.startAt.inclusive):null;e.Ie=dh(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function fh(t,e){e.getFirstInequalityField(),Au(t);const n=t.filters.concat([e]);return new Mn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sc(t,e,n){return new Mn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ia(t,e){return sa(Nt(t),Nt(e))&&t.limitType===e.limitType}function qI(t){return`${is(Nt(t))}|lt:${t.limitType}`}function ph(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>FI(s)).join(", ")}]`),ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Xs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Xs(s)).join(",")),`Target(${r})`}(Nt(t))}; limitType=${t.limitType})`}function oa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):N.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of es(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Qm(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,es(r),s)||r.endAt&&!function(o,a,c){const u=Qm(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,es(r),s))}(t,e)}function jI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function KI(t){return(e,n)=>{let r=!1;for(const s of es(t)){const i=Yx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Yx(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?vr(c,u):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class Cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return DI(this.inner)}size(){return this.innerSize}}/**
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
 */const Jx=new Ce(N.comparator);function Vt(){return Jx}const zI=new Ce(N.comparator);function qi(...t){let e=zI;for(const n of t)e=e.insert(n.key,n);return e}function GI(t){let e=zI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dn(){return no()}function WI(){return no()}function no(){return new Cr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Xx=new Ce(N.comparator),Zx=new ke(N.comparator);function ie(...t){let e=Zx;for(const n of t)e=e.add(n);return e}const eV=new ke(se);function Gd(){return eV}/**
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
 */function HI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function QI(t){return{integerValue:""+t}}function YI(t,e){return bI(e)?QI(e):HI(t,e)}/**
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
 */class bu{constructor(){this._=void 0}}function tV(t,e,n){return t instanceof ei?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Tu(i)&&(i=qd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof os?XI(t,e):t instanceof as?ZI(t,e):function(s,i){const o=JI(s,i),a=eg(o)+eg(s.Te);return uh(o)&&uh(s.Te)?QI(a):HI(s.serializer,a)}(t,e)}function nV(t,e,n){return t instanceof os?XI(t,e):t instanceof as?ZI(t,e):n}function JI(t,e){return t instanceof ti?function(r){return uh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ei extends bu{}class os extends bu{constructor(e){super(),this.elements=e}}function XI(t,e){const n=eE(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class as extends bu{constructor(e){super(),this.elements=e}}function ZI(t,e){let n=eE(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class ti extends bu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function eg(t){return Fe(t.integerValue||t.doubleValue)}function eE(t){return ko(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class aa{constructor(e,n){this.field=e,this.transform=n}}function rV(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof os&&s instanceof os||r instanceof as&&s instanceof as?Js(r.elements,s.elements,yn):r instanceof ti&&s instanceof ti?yn(r.Te,s.Te):r instanceof ei&&s instanceof ei}(t.transform,e.transform)}class sV{constructor(e,n){this.version=e,this.transformResults=n}}class Oe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function tE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yi(t.key,Oe.none()):new _i(t.key,t.data,Oe.none());{const n=t.data,r=lt.empty();let s=new ke(qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ln(t.key,r,new xt(s.toArray()),Oe.none())}}function iV(t,e,n){t instanceof _i?function(s,i,o){const a=s.value.clone(),c=ng(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ln?function(s,i,o){if(!Qa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=ng(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(nE(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof _i?function(i,o,a,c){if(!Qa(i.precondition,o))return a;const u=i.value.clone(),l=rg(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ln?function(i,o,a,c){if(!Qa(i.precondition,o))return a;const u=rg(i.fieldTransforms,c,o),l=o.data;return l.setAll(nE(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Qa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oV(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=JI(r.transform,s||null);i!=null&&(n===null&&(n=lt.empty()),n.set(r.field,i))}return n||null}function tg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Js(r,s,(i,o)=>rV(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _i extends Ru{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ln extends Ru{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ng(t,e,n){const r=new Map;H(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,nV(o,a,n[s]))}return r}function rg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tV(i,o,e))}return r}class yi extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wd extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Hd{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iV(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=WI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=tE(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Js(this.mutations,e.mutations,(n,r)=>tg(n,r))&&Js(this.baseMutations,e.baseMutations,(n,r)=>tg(n,r))}}class Qd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){H(e.mutations.length===r.length);let s=function(){return Xx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Qd(e,n,r,s)}}/**
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
 */class Yd{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var We,de;function rE(t){switch(t){default:return $();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function sE(t){if(t===void 0)return $e("GRPC error has no .code"),I.UNKNOWN;switch(t){case We.OK:return I.OK;case We.CANCELLED:return I.CANCELLED;case We.UNKNOWN:return I.UNKNOWN;case We.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case We.INTERNAL:return I.INTERNAL;case We.UNAVAILABLE:return I.UNAVAILABLE;case We.UNAUTHENTICATED:return I.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case We.NOT_FOUND:return I.NOT_FOUND;case We.ALREADY_EXISTS:return I.ALREADY_EXISTS;case We.PERMISSION_DENIED:return I.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case We.ABORTED:return I.ABORTED;case We.OUT_OF_RANGE:return I.OUT_OF_RANGE;case We.UNIMPLEMENTED:return I.UNIMPLEMENTED;case We.DATA_LOSS:return I.DATA_LOSS;default:return $()}}(de=We||(We={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Jd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return xa}static getOrCreateInstance(){return xa===null&&(xa=new Jd),xa}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let xa=null;/**
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
 */function iE(){return new TextEncoder}/**
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
 */const cV=new $s([4294967295,4294967295],0);function sg(t){const e=iE().encode(t),n=new nx;return n.update(e),new Uint8Array(n.digest())}function ig(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $s([n,r],0),new $s([s,i],0)]}class Xd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ji(`Invalid padding: ${n}`);if(r<0)throw new ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ji(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=$s.fromNumber(this.de)}Re(e,n,r){let s=e.add(n.multiply($s.fromNumber(r)));return s.compare(cV)===1&&(s=new $s([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=sg(e),[r,s]=ig(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=sg(e),[r,s]=ig(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ca{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ca(W.min(),s,new Ce(se),Vt(),ie())}}class ua{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,ie(),ie(),ie())}}/**
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
 */class Ya{constructor(e,n,r,s){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=s}}class oE{constructor(e,n){this.targetId=e,this.pe=n}}class aE{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class og{constructor(){this.ye=0,this.we=cg(),this.Se=Xe.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ie(),n=ie(),r=ie();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:$()}}),new ua(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=cg()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class uV{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Vt(),this.$e=ag(),this.Ue=new Ce(se)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(bc(a))if(i===0){const c=new N(a.path);this.ze(s,c,Ve.newNoDocument(c,W.min()))}else H(i===1);else{const c=this.et(s);if(c!==i){const u=this.tt(e,c);if(u.status!==0){this.Ye(s);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,l)}(n=Jd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,_){var y,E,A,C,V,x;const q={localCacheCount:f,existenceFilterCount:_.count},Q=_.unchangedNames;return Q&&(q.bloomFilter={applied:h===0,hashCount:(y=Q==null?void 0:Q.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(C=(A=(E=Q==null?void 0:Q.bits)===null||E===void 0?void 0:E.bitmap)===null||A===void 0?void 0:A.length)!==null&&C!==void 0?C:0,padding:(x=(V=Q==null?void 0:Q.bits)===null||V===void 0?void 0:V.padding)!==null&&x!==void 0?x:0},d&&(q.bloomFilter.mightContain=d)),q}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=_r(i).toUint8Array()}catch(h){if(h instanceof xI)return en("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Xd(c,o,a)}catch(h){return en(h instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:s===n-this.it(e.targetId,l)?0:2,nt:l}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&bc(a.target)){const c=new N(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,Ve.newNoDocument(c,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=ie();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new ca(e,n,this.Ue,this.Ke,r);return this.Ke=Vt(),this.$e=ag(),this.Ue=new Ce(se),s}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new og,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new ke(se),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new og),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function ag(){return new Ce(N.comparator)}function cg(){return new Ce(N.comparator)}const lV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dV=(()=>({and:"AND",or:"OR"}))();class fV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mh(t,e){return t.useProto3Json||ra(e)?e:{value:e}}function ni(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pV(t,e){return ni(t,e.toTimestamp())}function Ke(t){return H(!!t),W.fromTimestamp(function(n){const r=gr(n);return new Me(r.seconds,r.nanos)}(t))}function Zd(t,e){return function(r){return new pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function uE(t){const e=pe.fromString(t);return H(yE(e)),e}function No(t,e){return Zd(t.databaseId,e.path)}function gn(t,e){const n=uE(e);if(n.get(1)!==t.databaseId.projectId)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(hE(n))}function gh(t,e){return Zd(t.databaseId,e)}function lE(t){const e=uE(t);return e.length===4?pe.emptyPath():hE(e)}function Oo(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hE(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ug(t,e,n){return{name:No(t,e),fields:n.value.mapValue.fields}}function dE(t,e,n){const r=gn(t,e.name),s=Ke(e.updateTime),i=e.createTime?Ke(e.createTime):W.min(),o=new lt({mapValue:{fields:e.fields}}),a=Ve.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function mV(t,e){return"found"in e?function(r,s){H(!!s.found),s.found.name,s.found.updateTime;const i=gn(r,s.found.name),o=Ke(s.found.updateTime),a=s.found.createTime?Ke(s.found.createTime):W.min(),c=new lt({mapValue:{fields:s.found.fields}});return Ve.newFoundDocument(i,o,a,c)}(t,e):"missing"in e?function(r,s){H(!!s.missing),H(!!s.readTime);const i=gn(r,s.missing),o=Ke(s.readTime);return Ve.newNoDocument(i,o)}(t,e):$()}function gV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(H(l===void 0||typeof l=="string"),Xe.fromBase64String(l||"")):(H(l===void 0||l instanceof Uint8Array),Xe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?I.UNKNOWN:sE(u.code);return new R(l,u.message||"")}(o);n=new aE(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gn(t,r.document.name),i=Ke(r.document.updateTime),o=r.document.createTime?Ke(r.document.createTime):W.min(),a=new lt({mapValue:{fields:r.document.fields}}),c=Ve.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ya(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gn(t,r.document),i=r.readTime?Ke(r.readTime):W.min(),o=Ve.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ya([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gn(t,r.document),i=r.removedTargetIds||[];n=new Ya([],i,s,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new aV(s,i),a=r.targetId;n=new oE(a,o)}}return n}function Mo(t,e){let n;if(e instanceof _i)n={update:ug(t,e.key,e.value)};else if(e instanceof yi)n={delete:No(t,e.key)};else if(e instanceof Ln)n={update:ug(t,e.key,e.data),updateMask:wV(e.fieldMask)};else{if(!(e instanceof Wd))return $();n={verify:No(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ei)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof os)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof as)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ti)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pV(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function _h(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Oe.updateTime(Ke(i.updateTime)):i.exists!==void 0?Oe.exists(i.exists):Oe.none()}(e.currentDocument):Oe.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let c=null;if("setToServerValue"in a)H(a.setToServerValue==="REQUEST_TIME"),c=new ei;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new os(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new as(l)}else"increment"in a?c=new ti(o,a.increment):$();const u=qe.fromServerFormat(a.fieldPath);return new aa(u,c)}(t,s)):[];if(e.update){e.update.name;const s=gn(t,e.update.name),i=new lt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new xt(u.map(l=>qe.fromServerFormat(l)))}(e.updateMask);return new Ln(s,i,o,n,r)}return new _i(s,i,n,r)}if(e.delete){const s=gn(t,e.delete);return new yi(s,n)}if(e.verify){const s=gn(t,e.verify);return new Wd(s,n)}return $()}function _V(t,e){return t&&t.length>0?(H(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ke(s.updateTime):Ke(i);return o.isEqual(W.min())&&(o=Ke(i)),new sV(o,s.transformResults||[])}(n,e))):[]}function fE(t,e){return{documents:[gh(t,e.path)]}}function pE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=gh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return _E(Ee.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Ds(h.field),direction:vV(h.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=mh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function mE(t){let e=lE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){H(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(h){const d=gE(h);return d instanceof Ee&&jd(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new qs(xs(_.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ra(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Ir(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Ir(f,d)}(n.endAt)),$I(e,s,o,i,a,"F",c,u)}function yV(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xs(n.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xs(n.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(n.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xs(n.unaryFilter.field);return ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(n){return ue.create(xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ee.create(n.compositeFilter.filters.map(r=>gE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(n.compositeFilter.op))}(t):$()}function vV(t){return lV[t]}function IV(t){return hV[t]}function EV(t){return dV[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function xs(t){return qe.fromServerFormat(t.fieldPath)}function _E(t){return t instanceof ue?function(n){if(n.op==="=="){if(Gm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NAN"}};if(zm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NAN"}};if(zm(n.value))return{unaryFilter:{field:Ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(n.field),op:IV(n.op),value:n.value}}}(t):t instanceof Ee?function(n){const r=n.getFilters().map(s=>_E(s));return r.length===1?r[0]:{compositeFilter:{op:EV(n.op),filters:r}}}(t):$()}function wV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Pn{constructor(e,n,r,s,i=W.min(),o=W.min(),a=Xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vE{constructor(e){this.ct=e}}function TV(t,e){let n;if(e.document)n=dE(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),s=us(e.noDocument.readTime);n=Ve.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=N.fromSegments(e.unknownDocument.path),s=us(e.unknownDocument.version);n=Ve.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(s){const i=new Me(s[0],s[1]);return W.fromTimestamp(i)}(e.readTime)),n}function lg(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Pc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:No(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ni(i,o.version.toTimestamp()),createTime:ni(i,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:cs(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:cs(e.version)}}return r}function Pc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function cs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function us(t){const e=new Me(t.seconds,t.nanoseconds);return W.fromTimestamp(e)}function $r(t,e){const n=(e.baseMutations||[]).map(i=>_h(t.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>_h(t.ct,i)),s=Me.fromMillis(e.localWriteTimeMs);return new Hd(e.batchId,s,n,r)}function Ki(t){const e=us(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?us(t.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(i){return i.documents!==void 0}(t.query)?function(i){return H(i.documents.length===1),Nt(gi(lE(i.documents[0])))}(t.query):function(i){return Nt(mE(i))}(t.query),new Pn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Xe.fromBase64String(t.resumeToken))}function IE(t,e){const n=cs(e.snapshotVersion),r=cs(e.lastLimboFreeSnapshotVersion);let s;s=bc(e.target)?fE(t.ct,e.target):pE(t.ct,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:is(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function ef(t){const e=mE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sc(e,e.limit,"L"):e}function _l(t,e){return new Yd(e.largestBatchId,_h(t.ct,e.overlayMutation))}function hg(t,e){const n=e.path.lastSegment();return[t,Tt(e.path.popLast()),n]}function dg(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:cs(r.readTime),documentKey:Tt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class AV{getBundleMetadata(e,n){return fg(e).get(n).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:us(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,n){return fg(e).put(function(s){return{bundleId:s.id,createTime:cs(Ke(s.createTime)),version:s.version}}(n))}getNamedQuery(e,n){return pg(e).get(n).next(r=>{if(r)return function(i){return{name:i.name,query:ef(i.bundledQuery),readTime:us(i.readTime)}}(r)})}saveNamedQuery(e,n){return pg(e).put(function(s){return{name:s.name,readTime:cs(Ke(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function fg(t){return it(t,"bundles")}function pg(t){return it(t,"namedQueries")}/**
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
 */class Su{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Su(e,r)}getOverlay(e,n){return Di(e).get(hg(this.userId,n)).next(r=>r?_l(this.serializer,r):null)}getOverlays(e,n){const r=dn();return v.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new Yd(n,o);s.push(this.ht(e,a))}),v.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(Tt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Di(e).J("collectionPathOverlayIndex",a))}),v.waitFor(i)}getOverlaysForCollection(e,n,r){const s=dn(),i=Tt(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Di(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=_l(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=dn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Di(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=_l(this.serializer,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}ht(e,n){return Di(e).put(function(s,i,o){const[a,c,u]=hg(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Mo(s.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Di(t){return it(t,"documentOverlays")}/**
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
 */class qr{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Fe(e.integerValue));else if("doubleValue"in e){const r=Fe(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Do(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(_r(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?VI(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):$()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const s of Object.keys(r))this.Rt(s,n),this.It(r[s],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const s of r)this.It(s,n)}gt(e,n){this.Et(n,37),N.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}qr.bt=new qr;function bV(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function mg(t){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=bV(255&r[i]);if(s+=o,o!==8)break}return s}(t);return Math.ceil(e/8)}class RV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.vt(r.value),r=n.next();this.Ct()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const s=n.codePointAt(0);this.vt(240|s>>>18),this.vt(128|63&s>>>12),this.vt(128|63&s>>>6),this.vt(128|63&s)}}this.Ct()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const s=n.codePointAt(0);this.Mt(240|s>>>18),this.Mt(128|63&s>>>12),this.Mt(128|63&s>>>6),this.Mt(128|63&s)}}this.xt()}Bt(e){const n=this.Lt(e),r=mg(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}qt(e){const n=this.Lt(e),r=mg(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}vt(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class SV{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class PV{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class xi{constructor(){this.Gt=new RV,this.zt=new SV(this.Gt),this.jt=new PV(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class jr{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new jr(this.indexId,this.documentKey,this.arrayValue,r)}}function Kn(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=gg(t.arrayValue,e.arrayValue),n!==0?n:(n=gg(t.directionalValue,e.directionalValue),n!==0?n:N.comparator(t.documentKey,e.documentKey)))}function gg(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class CV{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){H(e.collectionGroup===this.collectionId);const n=oh(e);if(n!==void 0&&!this.tn(n))return!1;const r=Mr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.tn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt!==void 0){if(!s.has(this.Xt.field.canonicalString())){const a=r[i];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function EE(t){var e,n;if(H(t instanceof ue||t instanceof Ee),t instanceof ue){if(t instanceof BI){const s=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ue.create(t.field,"==",i)))||[];return Ee.create(s,"or")}return t}const r=t.filters.map(s=>EE(s));return Ee.create(r,t.op)}function DV(t){if(t.getFilters().length===0)return[];const e=Ih(EE(t));return H(wE(e)),yh(e)||vh(e)?[e]:e.getFilters()}function yh(t){return t instanceof ue}function vh(t){return t instanceof Ee&&jd(t)}function wE(t){return yh(t)||vh(t)||function(n){if(n instanceof Ee&&lh(n)){for(const r of n.getFilters())if(!yh(r)&&!vh(r))return!1;return!0}return!1}(t)}function Ih(t){if(H(t instanceof ue||t instanceof Ee),t instanceof ue)return t;if(t.filters.length===1)return Ih(t.filters[0]);const e=t.filters.map(r=>Ih(r));let n=Ee.create(e,t.op);return n=Cc(n),wE(n)?n:(H(n instanceof Ee),H(Zs(n)),H(n.filters.length>1),n.filters.reduce((r,s)=>tf(r,s)))}function tf(t,e){let n;return H(t instanceof ue||t instanceof Ee),H(e instanceof ue||e instanceof Ee),n=t instanceof ue?e instanceof ue?function(s,i){return Ee.create([s,i],"and")}(t,e):_g(t,e):e instanceof ue?_g(e,t):function(s,i){if(H(s.filters.length>0&&i.filters.length>0),Zs(s)&&Zs(i))return LI(s,i.getFilters());const o=lh(s)?s:i,a=lh(s)?i:s,c=o.filters.map(u=>tf(u,a));return Ee.create(c,"or")}(t,e),Cc(n)}function _g(t,e){if(Zs(e))return LI(e,t.getFilters());{const n=e.filters.map(r=>tf(t,r));return Ee.create(n,"or")}}function Cc(t){if(H(t instanceof ue||t instanceof Ee),t instanceof ue)return t;const e=t.getFilters();if(e.length===1)return Cc(e[0]);if(OI(t))return t;const n=e.map(s=>Cc(s)),r=[];return n.forEach(s=>{s instanceof ue?r.push(s):s instanceof Ee&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ee.create(r,t.op)}/**
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
 */class xV{constructor(){this.sn=new nf}addToCollectionParentIndex(e,n){return this.sn.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(Ft.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class nf{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ke(pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ke(pe.comparator)).toArray()}}/**
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
 */const Va=new Uint8Array(0);class VV{constructor(e,n){this.user=e,this.databaseId=n,this.on=new nf,this._n=new Cr(r=>is(r),(r,s)=>sa(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const i={collectionId:r,parent:Tt(s)};return yg(e).put(i)}return v.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[vI(n),""],!1,!0);return yg(e).G(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(hn(o.parent))}return r})}addFieldIndex(e,n){const r=ka(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=ki(e);return i.next(a=>{o.put(dg(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=ka(e),s=ki(e),i=Vi(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Vi(e);let s=!0;const i=new Map;return v.forEach(this.an(n),o=>this.un(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=ie();const a=[];return v.forEach(i,(c,u)=>{S("IndexedDbIndexManager",`Using index ${function(V){return`id=${V.indexId}|cg=${V.collectionGroup}|f=${V.fields.map(x=>`${x.fieldPath}:${x.kind}`).join(",")}`}(c)} to execute ${is(n)}`);const l=function(V,x){const q=oh(x);if(q===void 0)return null;for(const Q of Rc(V,q.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(u,c),h=function(V,x){const q=new Map;for(const Q of Mr(x))for(const ae of Rc(V,Q.fieldPath))switch(ae.op){case"==":case"in":q.set(Q.fieldPath.canonicalString(),ae.value);break;case"not-in":case"!=":return q.set(Q.fieldPath.canonicalString(),ae.value),Array.from(q.values())}return null}(u,c),d=function(V,x){const q=[];let Q=!0;for(const ae of Mr(x)){const U=ae.kind===0?Jm(V,ae.fieldPath,V.startAt):Xm(V,ae.fieldPath,V.startAt);q.push(U.value),Q&&(Q=U.inclusive)}return new Ir(q,Q)}(u,c),f=function(V,x){const q=[];let Q=!0;for(const ae of Mr(x)){const U=ae.kind===0?Xm(V,ae.fieldPath,V.endAt):Jm(V,ae.fieldPath,V.endAt);q.push(U.value),Q&&(Q=U.inclusive)}return new Ir(q,Q)}(u,c),_=this.cn(c,u,d),y=this.cn(c,u,f),E=this.ln(c,u,h),A=this.hn(c.indexId,l,_,d.inclusive,y,f.inclusive,E);return v.forEach(A,C=>r.H(C,n.limit).next(V=>{V.forEach(x=>{const q=N.fromSegments(x.documentKey);o.has(q)||(o=o.add(q),a.push(q))})}))}).next(()=>a)}return v.resolve(null)})}an(e){let n=this._n.get(e);return n||(e.filters.length===0?n=[e]:n=DV(Ee.create(e.filters,"and")).map(r=>dh(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,n),n)}hn(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.Pn(n[h/u]):Va,f=this.In(e,d,r[h%u],s),_=this.Tn(e,d,i[h%u],o),y=a.map(E=>this.In(e,d,E,!0));l.push(...this.createRange(f,_,y))}return l}In(e,n,r,s){const i=new jr(e,N.empty(),n,r);return s?i:i.Jt()}Tn(e,n,r,s){const i=new jr(e,N.empty(),n,r);return s?i.Jt():i}un(e,n){const r=new CV(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.an(n);return v.forEach(s,i=>this.un(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new ke(qe.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&s.length>1&&r===2?1:r)}En(e,n){const r=new xi;for(const s of Mr(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.Ht(s.kind);qr.bt.Pt(i,o)}return r.Wt()}Pn(e){const n=new xi;return qr.bt.Pt(e,n.Ht(0)),n.Wt()}dn(e,n){const r=new xi;return qr.bt.Pt(ss(this.databaseId,n),r.Ht(function(i){const o=Mr(i);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,n,r){if(r===null)return[];let s=[];s.push(new xi);let i=0;for(const o of Mr(e)){const a=r[i++];for(const c of s)if(this.An(n,o.fieldPath)&&ko(a))s=this.Rn(s,o,a);else{const u=c.Ht(o.kind);qr.bt.Pt(a,u)}}return this.Vn(s)}cn(e,n,r){return this.ln(e,n,r.position)}Vn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}Rn(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new xi;c.seed(a.Wt()),qr.bt.Pt(o,c.Ht(n.kind)),i.push(c)}return i}An(e,n){return!!e.filters.find(r=>r instanceof ue&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ka(e),s=ki(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(i=>{const o=[];return v.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Ac(h.sequenceNumber,new Ft(us(h.readTime),new N(hn(h.documentKey)),h.largestBatchId)):Ac.empty(),f=l.fields.map(([_,y])=>new px(qe.fromServerFormat(_),y));return new II(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:se(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=ka(e),i=ki(e);return this.mn(e).next(o=>s.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>v.forEach(a,c=>i.put(dg(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return v.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),v.forEach(a,c=>this.fn(e,s,c).next(u=>{const l=this.gn(i,c);return u.isEqual(l)?v.resolve():this.pn(e,i,c,u,l)}))))})}yn(e,n,r,s){return Vi(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.dn(r,n.key),documentKey:n.key.path.toArray()})}wn(e,n,r,s){return Vi(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.dn(r,n.key),n.key.path.toArray()])}fn(e,n,r){const s=Vi(e);let i=new ke(Kn);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,n)])},(o,a)=>{i=i.add(new jr(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}gn(e,n){let r=new ke(Kn);const s=this.En(n,e);if(s==null)return r;const i=oh(n);if(i!=null){const o=e.data.field(i.fieldPath);if(ko(o))for(const a of o.arrayValue.values||[])r=r.add(new jr(n.indexId,e.key,this.Pn(a),s))}else r=r.add(new jr(n.indexId,e.key,Va,s));return r}pn(e,n,r,s,i){S("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),_=u.getIterator();let y=Rs(f),E=Rs(_);for(;y||E;){let A=!1,C=!1;if(y&&E){const V=l(y,E);V<0?C=!0:V>0&&(A=!0)}else y!=null?C=!0:A=!0;A?(h(E),E=Rs(_)):C?(d(y),y=Rs(f)):(y=Rs(f),E=Rs(_))}}(s,i,Kn,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.wn(e,n,r,a))}),v.waitFor(o)}mn(e){let n=1;return ki(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Kn(o,a)).filter((o,a,c)=>!a||Kn(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Kn(o,e),c=Kn(o,n);if(a===0)s[0]=e.Jt();else if(a>0&&c<0)s.push(o),s.push(o.Jt());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.Sn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Va,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Va,[]];i.push(IDBKeyRange.bound(a,c))}return i}Sn(e,n){return Kn(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(vg)}getMinOffset(e,n){return v.mapArray(this.an(n),r=>this.un(e,r).next(s=>s||$())).next(vg)}}function yg(t){return it(t,"collectionParents")}function Vi(t){return it(t,"indexEntries")}function ka(t){return it(t,"indexConfiguration")}function ki(t){return it(t,"indexState")}function vg(t){H(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Bd(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new Ft(e.readTime,e.documentKey,n)}/**
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
 */const Ig={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class St{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function TE(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{H(a===1)}));const u=[];for(const l of n.mutations){const h=RI(e,l.key.path,n.batchId);i.push(s.delete(h)),u.push(l.key)}return v.waitFor(i).next(()=>u)}function Dc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(41943040,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);class Pu{constructor(e,n,r,s){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=s,this.bn={}}static lt(e,n,r,s){H(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Pu(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return zn(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=Vs(e),o=zn(e);return o.add({}).next(a=>{H(typeof a=="number");const c=new Hd(a,n,r,s),u=function(f,_,y){const E=y.baseMutations.map(C=>Mo(f.ct,C)),A=y.mutations.map(C=>Mo(f.ct,C));return{userId:_,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:E,mutations:A}}(this.serializer,this.userId,c),l=[];let h=new ke((d,f)=>se(d.canonicalString(),f.canonicalString()));for(const d of s){const f=RI(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(f,Ix))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),v.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return zn(e).get(n).next(r=>r?(H(r.userId===this.userId),$r(this.serializer,r)):null)}Dn(e,n){return this.bn[n]?v.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.bn[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return zn(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(H(a.batchId>=r),i=$r(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return zn(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return zn(e).G("userMutationsIndex",n).next(r=>r.map(s=>$r(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Ga(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return Vs(e).Z({range:s},(o,a,c)=>{const[u,l,h]=o,d=hn(l);if(u===this.userId&&n.path.isEqual(d))return zn(e).get(h).next(f=>{if(!f)throw $();H(f.userId===this.userId),i.push($r(this.serializer,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ke(se);const s=[];return n.forEach(i=>{const o=Ga(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Vs(e).Z({range:a},(u,l,h)=>{const[d,f,_]=u,y=hn(f);d===this.userId&&i.path.isEqual(y)?r=r.add(_):h.done()});s.push(c)}),v.waitFor(s).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=Ga(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new ke(se);return Vs(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,_=hn(d);h===this.userId&&r.isPrefixOf(_)?_.length===s&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],s=[];return n.forEach(i=>{s.push(zn(e).get(i).next(o=>{if(o===null)throw $();H(o.userId===this.userId),r.push($r(this.serializer,o))}))}),v.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return TE(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),v.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return v.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Vs(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=hn(i[1]);s.push(c)}else a.done()}).next(()=>{H(s.length===0)})})}containsKey(e,n){return AE(e,this.userId,n)}Fn(e){return bE(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function AE(t,e,n){const r=Ga(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Vs(t).Z({range:i,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function zn(t){return it(t,"mutations")}function Vs(t){return it(t,"documentMutations")}function bE(t){return it(t,"mutationQueues")}/**
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
 */class ls{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new ls(0)}static On(){return new ls(-1)}}/**
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
 */class kV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Nn(e).next(n=>{const r=new ls(n.highestTargetId);return n.highestTargetId=r.next(),this.Bn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(n=>W.fromTimestamp(new Me(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Nn(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Bn(e,s)))}addTargetData(e,n){return this.Ln(e,n).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(n,r),this.Bn(e,r))))}updateTargetData(e,n){return this.Ln(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ss(e).delete(n.targetId)).next(()=>this.Nn(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return Ss(e).Z((o,a)=>{const c=Ki(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>v.waitFor(i)).next(()=>s)}forEachTarget(e,n){return Ss(e).Z((r,s)=>{const i=Ki(s);n(i)})}Nn(e){return Eg(e).get("targetGlobalKey").next(n=>(H(n!==null),n))}Bn(e,n){return Eg(e).put("targetGlobalKey",n)}Ln(e,n){return Ss(e).put(IE(this.serializer,n))}kn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=is(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Ss(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=Ki(a);sa(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=tr(e);return n.forEach(o=>{const a=Tt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),v.waitFor(s)}removeMatchingKeys(e,n,r){const s=tr(e);return v.forEach(n,i=>{const o=Tt(i.path);return v.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=tr(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=tr(e);let i=ie();return s.Z({range:r,Y:!0},(o,a,c)=>{const u=hn(o[1]),l=new N(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const r=Tt(n.path),s=IDBKeyRange.bound([r],[vI(r)],!1,!0);let i=0;return tr(e).Z({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ut(e,n){return Ss(e).get(n).next(r=>r?Ki(r):null)}}function Ss(t){return it(t,"targets")}function Eg(t){return it(t,"targetGlobal")}function tr(t){return it(t,"targetDocuments")}/**
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
 */function wg([t,e],[n,r]){const s=se(t,n);return s===0?se(e,r):s}class NV{constructor(e){this.qn=e,this.buffer=new ke(wg),this.Qn=0}Kn(){return++this.Qn}$n(e){const n=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();wg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class OV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){S("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Pr(n)?S("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Sr(n)}await this.Wn(3e5)})}}class MV{constructor(e,n){this.Gn=e,this.params=n}calculateTargetCount(e,n){return this.Gn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return v.resolve(Dt.ae);const r=new NV(n);return this.Gn.forEachTarget(e,s=>r.$n(s.sequenceNumber)).next(()=>this.Gn.jn(e,s=>r.$n(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Gn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Gn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(S("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(Ig)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(S("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ig):this.Hn(e,n))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,n){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(S("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ih()<=fe.DEBUG&&S("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function LV(t,e){return new MV(t,e)}/**
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
 */class FV{constructor(e,n){this.db=e,this.garbageCollector=LV(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Jn(e){let n=0;return this.jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}jn(e,n){return this.Yn(e,(r,s)=>n(s))}addReference(e,n,r){return Na(e,r)}removeReference(e,n,r){return Na(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Na(e,n)}Zn(e,n){return function(s,i){let o=!1;return bE(s).X(a=>AE(s,a,i).next(c=>(c&&(o=!0),v.resolve(!c)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Yn(e,(o,a)=>{if(a<=n){const c=this.Zn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),tr(e).delete(function(h){return[0,Tt(h.path)]}(o))))});s.push(c)}}).next(()=>v.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Na(e,n)}Yn(e,n){const r=tr(e);let s,i=Dt.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Dt.ae&&n(new N(hn(s)),i),i=u,s=c):i=Dt.ae}).next(()=>{i!==Dt.ae&&n(new N(hn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Na(t,e){return tr(t).put(function(r,s){return{targetId:0,path:Tt(r.path),sequenceNumber:s}}(e,t.currentSequenceNumber))}/**
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
 */class RE{constructor(){this.changes=new Cr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class UV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Nr(e).put(r)}removeEntry(e,n,r){return Nr(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Pc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=Ve.newInvalidDocument(n);return Nr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ni(n))},(s,i)=>{r=this.er(n,i)}).next(()=>r)}tr(e,n){let r={size:0,document:Ve.newInvalidDocument(n)};return Nr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ni(n))},(s,i)=>{r={document:this.er(n,i),size:Dc(i)}}).next(()=>r)}getEntries(e,n){let r=Vt();return this.nr(e,n,(s,i)=>{const o=this.er(s,i);r=r.insert(s,o)}).next(()=>r)}rr(e,n){let r=Vt(),s=new Ce(N.comparator);return this.nr(e,n,(i,o)=>{const a=this.er(i,o);r=r.insert(i,a),s=s.insert(i,Dc(o))}).next(()=>({documents:r,ir:s}))}nr(e,n,r){if(n.isEmpty())return v.resolve();let s=new ke(bg);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Ni(s.first()),Ni(s.last())),o=s.getIterator();let a=o.getNext();return Nr(e).Z({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=N.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&bg(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(Ni(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,s){const i=n.path,o=[i.popLast().toArray(),i.lastSegment(),Pc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Nr(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Vt();for(const l of c){const h=this.er(N.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(oa(n,h)||s.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,s){let i=Vt();const o=Ag(n,r),a=Ag(n,Ft.max());return Nr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.er(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new BV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Tg(e).get("remoteDocumentGlobalKey").next(n=>(H(!!n),n))}Xn(e,n){return Tg(e).put("remoteDocumentGlobalKey",n)}er(e,n){if(n){const r=TV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return Ve.newInvalidDocument(e)}}function SE(t){return new UV(t)}class BV extends RE{constructor(e,n){super(),this.sr=e,this.trackRemovals=n,this._r=new Cr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new ke((i,o)=>se(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this._r.get(i);if(n.push(this.sr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=lg(this.sr.serializer,o);s=s.add(i.path.popLast());const u=Dc(c);r+=u-a.size,n.push(this.sr.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=lg(this.sr.serializer,o.convertToNoDocument(W.min()));n.push(this.sr.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.sr.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.sr.updateMetadata(e,r)),v.waitFor(n)}getFromCache(e,n){return this.sr.tr(e,n).next(r=>(this._r.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.sr.rr(e,n).next(({documents:r,ir:s})=>(s.forEach((i,o)=>{this._r.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Tg(t){return it(t,"remoteDocumentGlobal")}function Nr(t){return it(t,"remoteDocumentsV14")}function Ni(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ag(t,e){const n=e.documentKey.path.toArray();return[t,Pc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function bg(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=se(n[i],r[i]),s)return s;return s=se(n.length,r.length),s||(s=se(n[n.length-2],r[r.length-2]),s||se(n[n.length-1],r[r.length-1]))}/**
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
 */class $V{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PE{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ro(r.mutation,s,xt.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=dn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=dn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Vt();const o=no(),a=function(){return no()}();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Ln)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),ro(l.mutation,u,l.mutation.getFieldMask(),Me.now())):o.set(u.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new $V(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=no();let s=new Ce((o,a)=>o-a),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||xt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||ie()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=WI();l.forEach(d=>{if(!i.has(d)){const f=tE(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return N.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zd(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):v.resolve(dn());let a=-1,c=i;return o.next(u=>v.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?v.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ie())).next(l=>({batchId:a,changes:GI(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let s=qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=qi();return this.indexManager.getCollectionParents(e,s).next(o=>v.forEach(o,a=>{const c=function(l,h){return new Mn(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ve.newInvalidDocument(u)))});let o=qi();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&ro(u.mutation,c,xt.empty(),Me.now()),oa(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class qV{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return v.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ke(s.createTime)}}(n)),v.resolve()}getNamedQuery(e,n){return v.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:ef(s.bundledQuery),readTime:Ke(s.readTime)}}(n)),v.resolve()}}/**
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
 */class jV{constructor(){this.overlays=new Ce(N.comparator),this.cr=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dn();return v.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const s=dn(),i=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return v.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=dn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=dn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return v.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Yd(n,r));let i=this.cr.get(n);i===void 0&&(i=ie(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class rf{constructor(){this.lr=new ke(Ze.hr),this.Pr=new ke(Ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ze(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new N(new pe([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new N(new pe([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ie();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return N.comparator(e.key,n.key)||se(e.mr,n.mr)}static Ir(e,n){return se(e.mr,n.mr)||N.comparator(e.key,n.key)}}/**
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
 */class KV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new ke(Ze.hr)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hd(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new Ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ke(se);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),v.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;N.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new N(i),0);let a=new ke(se);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.mr)),!0)},o),v.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){H(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return v.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ze(n,0),s=this.pr.firstAfterOrEqual(r);return v.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zV{constructor(e){this.Dr=e,this.docs=function(){return new Ce(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=Vt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ve.newInvalidDocument(s))}),v.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vt();const o=n.path,a=new N(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Bd(wI(l),r)<=0||(s.has(l.key)||oa(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(e,n,r,s){$()}vr(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GV(this)}getSize(e){return v.resolve(this.size)}}class GV extends RE{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class WV{constructor(e){this.persistence=e,this.Cr=new Cr(n=>is(n),sa),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new rf,this.targetCount=0,this.Or=ls.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),v.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Ln(n),v.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),v.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.Mr.containsKey(n))}}/**
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
 */class CE{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Dt(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new WV(this),this.indexManager=new xV,this.remoteDocumentCache=function(s){return new zV(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new vE(n),this.Qr=new qV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new KV(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){S("MemoryPersistence","Starting transaction:",e);const s=new HV(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return v.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class HV extends AI{constructor(e){super(),this.currentSequenceNumber=e}}class Cu{constructor(e){this.persistence=e,this.Wr=new rf,this.Gr=null}static zr(e){return new Cu(e)}get jr(){if(this.Gr)return this.Gr;throw $()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),v.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.jr,r=>{const s=N.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,W.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return v.or([()=>v.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class QV{constructor(e){this.serializer=e}B(e,n,r,s){const i=new wu("createOrUpgrade",n);r<1&&s>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$m,{unique:!0}),c.createObjectStore("documentMutations")}(e),Rg(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=v.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Rg(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$m,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return v.waitFor(d)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Yr(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(i)))),r<7&&s>=7&&(o=o.next(()=>this.Xr(i))),r<8&&s>=8&&(o=o.next(()=>this.ei(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.ti(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:Vx});u.createIndex("collectionPathOverlayIndex",kx,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",Nx,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:Ex});u.createIndex("documentKeyIndex",wx),u.createIndex("collectionGroupIndex",Tx)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ri(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:Px}).createIndex("sequenceNumberIndex",Cx,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:Dx}).createIndex("documentKeyIndex",xx,{unique:!1})}(e))),o}Zr(e){let n=0;return e.store("remoteDocuments").Z((r,s)=>{n+=Dc(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(s=>v.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>v.forEach(a,c=>{H(c.userId===i.userId);const u=$r(this.serializer,c);return TE(e,i.userId,u).next(()=>{})}))}))}Xr(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new pe(o),u=function(h){return[0,Tt(h)]}(c);i.push(n.get(u).next(l=>l?v.resolve():(h=>n.put({targetId:0,path:Tt(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>v.waitFor(i))})}ei(e,n){e.createObjectStore("collectionParents",{keyPath:Sx});const r=n.store("collectionParents"),s=new nf,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Tt(c)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new pe(o);return i(c.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=hn(a);return i(l.popLast())}))}ti(e){const n=e.store("targets");return n.Z((r,s)=>{const i=Ki(s),o=IE(this.serializer,i);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=n.store("remoteDocumentsV14"),c=function(h){return h.document?new N(pe.fromString(h.document.name).popFirst(5)):h.noDocument?N.fromSegments(h.noDocument.path):h.unknownDocument?N.fromSegments(h.unknownDocument.path):$()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>v.waitFor(s))}ri(e,n){const r=n.store("mutations"),s=SE(this.serializer),i=new CE(Cu.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ie();$r(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),v.forEach(a,(c,u)=>{const l=new et(u),h=Su.lt(this.serializer,l),d=i.getIndexManager(l),f=Pu.lt(l,this.serializer,d,i.referenceDelegate);return new PE(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ah(n,Dt.ae),c).next()})})}}function Rg(t){t.createObjectStore("targetDocuments",{keyPath:bx}).createIndex("documentTargetsIndex",Rx,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Ax,{unique:!0}),t.createObjectStore("targetGlobal")}const yl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sf{constructor(e,n,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=i,this.window=o,this.document=a,this.si=u,this.oi=l,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!sf.v())throw new R(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new FV(this,s),this.Pi=n+"main",this.serializer=new vE(c),this.Ii=new Ht(this.Pi,this._i,new QV(this.serializer)),this.kr=new kV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=SE(this.serializer),this.Qr=new AV,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,l===!1&&$e("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,yl);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new Dt(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Oa(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(n=>this.isPrimary&&!n?this.gi(e).next(()=>!1):!!n&&this.pi(e).next(()=>!0))).catch(e=>{if(Pr(e))return S("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return S("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return Oi(e).get("owner").next(n=>v.resolve(this.yi(n)))}wi(e){return Oa(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=it(n,"clientMetadata");return r.G().next(s=>{const i=this.Di(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return v.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const n of e)this.Ti.removeItem(this.vi(n.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?v.resolve(!0):Oi(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.yi(n)&&this.networkEnabled)return!0;if(!this.yi(n)){if(!n.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,yl);return!1}}return!(!this.networkEnabled||!this.inForeground)||Oa(e).G().next(r=>this.Di(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&S("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new ah(e,Dt.ae);return this.gi(n).next(()=>this.wi(n))}),this.Ii.close(),this.Oi()}Di(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>Oa(e).G().next(n=>this.Di(n,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,n){return Pu.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new VV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Su.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,n,r){S("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=function(c){return c===15?Mx:c===14?CI:c===13?PI:c===12?Ox:c===11?SI:void $()}(this._i);let o;return this.Ii.runTransaction(e,s,i,a=>(o=new ah(a,this.Br?this.Br.next():Dt.ae),n==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw $e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new R(I.FAILED_PRECONDITION,TI);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return Oi(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.yi(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(I.FAILED_PRECONDITION,yl)})}pi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Oi(e).put("owner",n)}static v(){return Ht.v()}gi(e){const n=Oi(e);return n.get("owner").next(r=>this.yi(r)?(S("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):v.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||($e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const n=/(?:Version|Mobile)\/1[456]/;z0()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var n;try{const r=((n=this.Ti)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return S("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $e("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){$e("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Oi(t){return it(t,"owner")}function Oa(t){return it(t,"clientMetadata")}function of(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class af{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new af(e,n.fromCache,r,s)}}/**
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
 */class DE{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(Zm(n))return v.resolve(null);let r=Nt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Sc(n,null,"F"),r=Nt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Gi(n,a);return this.zi(n,u,o,c.readTime)?this.$i(e,Sc(n,null,"F")):this.ji(e,u,n,c)}))})))}Ui(e,n,r,s){return Zm(n)||s.isEqual(W.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(ih()<=fe.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ph(n)),this.ji(e,o,n,EI(s,-1)))})}Gi(e,n){let r=new ke(KI(e));return n.forEach((s,i)=>{oa(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return ih()<=fe.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",ph(n)),this.Ki.getDocumentsMatchingQuery(e,n,Ft.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class YV{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new Ce(se),this.Yi=new Cr(i=>is(i),sa),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PE(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function xE(t,e,n,r){return new YV(t,e,n,r)}async function VE(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ie();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function JV(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=v.resolve();return d.forEach(_=>{f=f.next(()=>l.getEntry(c,_)).next(y=>{const E=u.docVersions.get(_);H(E!==null),y.version.compareTo(E)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function kE(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function XV(t,e){const n=L(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Xe.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(y,E,A){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,f,l)&&a.push(n.kr.updateTargetData(i,f))});let c=Vt(),u=ie();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(NE(i,o,e.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(W.min())){const l=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return v.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ji=s,i))}function NE(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Vt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:s}})}function ZV(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ri(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,e).next(i=>i?(s=i,v.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new Pn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function si(t,e,n){const r=L(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pr(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function xc(t,e,n){const r=L(t);let s=W.min(),i=ie();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=L(c),d=h.Yi.get(l);return d!==void 0?v.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,Nt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:W.min(),n?i:ie())).next(a=>(LE(r,jI(e),a),{documents:a,ss:i})))}function OE(t,e){const n=L(t),r=L(n.kr),s=n.Ji.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",i=>r.ut(i,e).next(o=>o?o.target:null))}function ME(t,e){const n=L(t),r=n.Zi.get(e)||W.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.Xi.getAllFromCollectionGroup(s,e,EI(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(LE(n,e,s),s))}function LE(t,e,n){let r=t.Zi.get(e)||W.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Zi.set(e,r)}async function ek(t,e,n,r){const s=L(t);let i=ie(),o=Vt();for(const u of n){const l=e.os(u.metadata.name);u.document&&(i=i.add(l));const h=e._s(u);h.setReadTime(e.us(u.metadata.readTime)),o=o.insert(l,h)}const a=s.Xi.newChangeBuffer({trackRemovals:!0}),c=await ri(s,function(l){return Nt(gi(pe.fromString(`__bundle__/docs/${l}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>NE(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.kr.addMatchingKeys(u,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,l.ns,l.rs)).next(()=>l.ns)))}async function tk(t,e,n=ie()){const r=await ri(t,Nt(ef(e.bundledQuery))),s=L(t);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=Ke(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Qr.saveNamedQuery(i,e);const a=r.withResumeToken(Xe.EMPTY_BYTE_STRING,o);return s.Ji=s.Ji.insert(a.targetId,a),s.kr.updateTargetData(i,a).next(()=>s.kr.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.kr.addMatchingKeys(i,n,r.targetId)).next(()=>s.Qr.saveNamedQuery(i,e))})}function Sg(t,e){return`firestore_clients_${t}_${e}`}function Pg(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function vl(t,e){return`firestore_targets_${t}_${e}`}class Vc{constructor(e,n,r,s){this.user=e,this.batchId=n,this.state=r,this.error=s}static cs(e,n,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new R(s.error.code,s.error.message))),o?new Vc(e,n,s.state,i):($e("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class so{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cs(e,n){const r=JSON.parse(n);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new R(r.error.code,r.error.message))),i?new so(e,r.state,s):($e("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cs(e,n){const r=JSON.parse(n);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Gd();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=bI(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new kc(e,i):($e("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class cf{constructor(e,n){this.clientId=e,this.onlineState=n}static cs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new cf(n.clientId,n.onlineState):($e("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Eh{constructor(){this.activeTargetIds=Gd()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Il{constructor(e,n,r,s,i){this.window=e,this.ii=n,this.persistenceKey=r,this.Is=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new Ce(se),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Rs=Sg(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new Eh),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const s=this.getItem(Sg(this.persistenceKey,r));if(s){const i=kc.cs(r,s);i&&(this.ds=this.ds.insert(i.clientId,i))}}this.Ss();const n=this.storage.getItem(this.ys);if(n){const r=this.bs(n);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let n=!1;return this.ds.forEach((r,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,n,r){this.Cs(e,n,r),this.Fs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(vl(this.persistenceKey,e));if(r){const s=so.cs(e,r);s&&(n=s.state)}}return this.Ms.hs(e),this.Ss(),n}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(vl(this.persistenceKey,e))}updateQueryState(e,n,r){this.xs(e,n,r)}handleUserChange(e,n,r){n.forEach(s=>{this.Fs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return S("SharedClientState","READ",e,n),n}setItem(e,n){S("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){S("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const n=e;if(n.storageArea===this.storage){if(S("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Rs)return void $e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.fs.test(n.key)){if(n.newValue==null){const r=this.Bs(n.key);return this.Ls(r,null)}{const r=this.ks(n.key,n.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(n.key)){if(n.newValue!==null){const r=this.qs(n.key,n.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(n.key)){if(n.newValue!==null){const r=this.Ks(n.key,n.newValue);if(r)return this.$s(r)}}else if(n.key===this.ys){if(n.newValue!==null){const r=this.bs(n.newValue);if(r)return this.Ds(r)}}else if(n.key===this.Vs){const r=function(i){let o=Dt.ae;if(i!=null)try{const a=JSON.parse(i);H(typeof a=="number"),o=a}catch(a){$e("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Dt.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.ws){const r=this.Us(n.newValue);await Promise.all(r.map(s=>this.syncEngine.Ws(s)))}}}else this.As.push(n)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,n,r){const s=new Vc(this.currentUser,e,n,r),i=Pg(this.persistenceKey,this.currentUser,e);this.setItem(i,s.ls())}Fs(e){const n=Pg(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Os(e){const n={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(n))}xs(e,n,r){const s=vl(this.persistenceKey,e),i=new so(e,n,r);this.setItem(s,i.ls())}Ns(e){const n=JSON.stringify(Array.from(e));this.setItem(this.ws,n)}Bs(e){const n=this.fs.exec(e);return n?n[1]:null}ks(e,n){const r=this.Bs(e);return kc.cs(r,n)}qs(e,n){const r=this.gs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Vc.cs(new et(i),s,n)}Ks(e,n){const r=this.ps.exec(e),s=Number(r[1]);return so.cs(s,n)}bs(e){return cf.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);S("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,n){const r=n?this.ds.insert(e,n):this.ds.remove(e),s=this.vs(this.ds),i=this.vs(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let n=Gd();return e.forEach((r,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class FE{constructor(){this.Hs=new Eh,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Eh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nk{Ys(e){}shutdown(){}}/**
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
 */class Cg{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ma=null;function El(){return Ma===null?Ma=function(){return 268435456+Math.round(2147483648*Math.random())}():Ma++,"0x"+Ma.toString(16)}/**
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
 */const rk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sk{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const ft="WebChannelConnection";class ik extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http";this.To=r+"://"+n.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(n,r,s,i,o){const a=El(),c=this.Vo(n,r);S("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={};return this.mo(u,i,o),this.fo(n,c,u,s).then(l=>(S("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw en("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}po(n,r,s,i,o,a){return this.Ro(n,r,s,i,o)}mo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Vo(n,r){const s=rk[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,n,r,s){const i=El();return new Promise((o,a)=>{const c=new tx;c.setWithCredentials(!0),c.listenOnce(XD.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case gl.NO_ERROR:const l=c.getResponseJson();S(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case gl.TIMEOUT:S(ft,`RPC '${e}' ${i} timed out`),a(new R(I.DEADLINE_EXCEEDED,"Request time out"));break;case gl.HTTP_ERROR:const h=c.getStatus();if(S(ft,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(E){const A=E.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(A)>=0?A:I.UNKNOWN}(f.status);a(new R(_,f.message))}else a(new R(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new R(I.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{S(ft,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);S(ft,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}yo(e,n,r){const s=El(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=YD(),a=JD(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new ex({})),this.mo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");S(ft,`Creating RPC '${e}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const _=new sk({so:E=>{f?S(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(S(ft,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),S(ft,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},oo:()=>h.close()}),y=(E,A,C)=>{E.listen(A,V=>{try{C(V)}catch(x){setTimeout(()=>{throw x},0)}})};return y(h,Ca.EventType.OPEN,()=>{f||S(ft,`RPC '${e}' stream ${s} transport opened.`)}),y(h,Ca.EventType.CLOSE,()=>{f||(f=!0,S(ft,`RPC '${e}' stream ${s} transport closed`),_.Po())}),y(h,Ca.EventType.ERROR,E=>{f||(f=!0,en(ft,`RPC '${e}' stream ${s} transport errored:`,E),_.Po(new R(I.UNAVAILABLE,"The operation could not be completed")))}),y(h,Ca.EventType.MESSAGE,E=>{var A;if(!f){const C=E.data[0];H(!!C);const V=C,x=V.error||((A=V[0])===null||A===void 0?void 0:A.error);if(x){S(ft,`RPC '${e}' stream ${s} received error:`,x);const q=x.status;let Q=function(G){const ne=We[G];if(ne!==void 0)return sE(ne)}(q),ae=x.message;Q===void 0&&(Q=I.INTERNAL,ae="Unknown error status: "+q+" with message "+x.message),f=!0,_.Po(new R(Q,ae)),h.close()}else S(ft,`RPC '${e}' stream ${s} received:`,C),_.Io(C)}}),y(a,ZD.STAT_EVENT,E=>{E.stat===Lm.PROXY?S(ft,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===Lm.NOPROXY&&S(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.ho()},0),_}}/**
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
 */function UE(){return typeof window<"u"?window:null}function Ja(){return typeof document<"u"?document:null}/**
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
 */function la(t){return new fV(t,!0)}/**
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
 */class uf{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.wo=r,this.So=s,this.bo=i,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&S("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
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
 */class BE{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.No=r,this.Bo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new uf(e,n)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,n){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?($e(n.toString()),$e("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),n=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Lo===n&&this.Xo(r,s)},r=>{e(()=>{const s=new R(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(s)})})}Xo(e,n){const r=this.Zo(this.Lo);this.stream=this.t_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.e_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return n=>{this.ii.enqueueAndForget(()=>this.Lo===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ok extends BE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}t_(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.Qo.reset();const n=gV(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Ke(o.readTime):W.min()}(e);return this.listener.n_(n,r)}r_(e){const n={};n.database=Oo(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=bc(c)?{documents:fE(i,c)}:{query:pE(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cE(i,o.resumeToken);const u=mh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=ni(i,o.snapshotVersion.toTimestamp());const u=mh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=yV(this.serializer,e);r&&(n.labels=r),this.jo(n)}i_(e){const n={};n.database=Oo(this.serializer),n.removeTarget=e,this.jo(n)}}class ak extends BE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const n=_V(e.writeResults,e.commitTime),r=Ke(e.commitTime);return this.listener.a_(r,n)}return H(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=Oo(this.serializer),this.jo(e)}__(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Mo(this.serializer,r))};this.jo(n)}}/**
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
 */class ck extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.l_=!1}h_(){if(this.l_)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,n,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(I.UNKNOWN,s.toString())})}po(e,n,r,s){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.po(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(I.UNKNOWN,i.toString())})}terminate(){this.l_=!0}}class uk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?($e(n),this.E_=!1):S("OnlineStateTracker",n)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
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
 */class lk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=i,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{Dr(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=L(c);u.p_.add(4),await vi(u),u.S_.set("Unknown"),u.p_.delete(4),await ha(u)}(this))})}),this.S_=new uk(r,s)}}async function ha(t){if(Dr(t))for(const e of t.y_)await e(!0)}async function vi(t){for(const e of t.y_)await e(!1)}function Du(t,e){const n=L(t);n.g_.has(e.targetId)||(n.g_.set(e.targetId,e),df(n)?hf(n):Ei(n).$o()&&lf(n,e))}function Lo(t,e){const n=L(t),r=Ei(n);n.g_.delete(e),r.$o()&&$E(n,e),n.g_.size===0&&(r.$o()?r.Go():Dr(n)&&n.S_.set("Unknown"))}function lf(t,e){if(t.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ei(t).r_(e)}function $E(t,e){t.b_.Be(e),Ei(t).i_(e)}function hf(t){t.b_=new uV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.g_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Ei(t).start(),t.S_.d_()}function df(t){return Dr(t)&&!Ei(t).Ko()&&t.g_.size>0}function Dr(t){return L(t).p_.size===0}function qE(t){t.b_=void 0}async function hk(t){t.g_.forEach((e,n)=>{lf(t,e)})}async function dk(t,e){qE(t),df(t)?(t.S_.V_(e),hf(t)):t.S_.set("Unknown")}async function fk(t,e,n){if(t.S_.set("Online"),e instanceof aE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.g_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.g_.delete(a),s.b_.removeTarget(a))}(t,e)}catch(r){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nc(t,r)}else if(e instanceof Ya?t.b_.We(e):e instanceof oE?t.b_.Ze(e):t.b_.je(e),!n.isEqual(W.min()))try{const r=await kE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.b_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.g_.get(u);l&&i.g_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.g_.get(c);if(!l)return;i.g_.set(c,l.withResumeToken(Xe.EMPTY_BYTE_STRING,l.snapshotVersion)),$E(i,c);const h=new Pn(l.target,c,u,l.sequenceNumber);lf(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){S("RemoteStore","Failed to raise snapshot:",r),await Nc(t,r)}}async function Nc(t,e,n){if(!Pr(e))throw e;t.p_.add(1),await vi(t),t.S_.set("Offline"),n||(n=()=>kE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t.p_.delete(1),await ha(t)})}function jE(t,e){return e().catch(n=>Nc(t,n,e))}async function Ii(t){const e=L(t),n=Er(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;pk(e);)try{const s=await ZV(e.localStore,r);if(s===null){e.f_.length===0&&n.Go();break}r=s.batchId,mk(e,s)}catch(s){await Nc(e,s)}KE(e)&&zE(e)}function pk(t){return Dr(t)&&t.f_.length<10}function mk(t,e){t.f_.push(e);const n=Er(t);n.$o()&&n.o_&&n.__(e.mutations)}function KE(t){return Dr(t)&&!Er(t).Ko()&&t.f_.length>0}function zE(t){Er(t).start()}async function gk(t){Er(t).c_()}async function _k(t){const e=Er(t);for(const n of t.f_)e.__(n.mutations)}async function yk(t,e,n){const r=t.f_.shift(),s=Qd.from(r,e,n);await jE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ii(t)}async function vk(t,e){e&&Er(t).o_&&await async function(r,s){if(function(o){return rE(o)&&o!==I.ABORTED}(s.code)){const i=r.f_.shift();Er(r).Wo(),await jE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ii(r)}}(t,e),KE(t)&&zE(t)}async function Dg(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const r=Dr(n);n.p_.add(3),await vi(n),r&&n.S_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.p_.delete(3),await ha(n)}async function wh(t,e){const n=L(t);e?(n.p_.delete(2),await ha(n)):e||(n.p_.add(2),await vi(n),n.S_.set("Unknown"))}function Ei(t){return t.D_||(t.D_=function(n,r,s){const i=L(n);return i.h_(),new ok(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:hk.bind(null,t),uo:dk.bind(null,t),n_:fk.bind(null,t)}),t.y_.push(async e=>{e?(t.D_.Wo(),df(t)?hf(t):t.S_.set("Unknown")):(await t.D_.stop(),qE(t))})),t.D_}function Er(t){return t.v_||(t.v_=function(n,r,s){const i=L(n);return i.h_(),new ak(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:gk.bind(null,t),uo:vk.bind(null,t),u_:_k.bind(null,t),a_:yk.bind(null,t)}),t.y_.push(async e=>{e?(t.v_.Wo(),await Ii(t)):(await t.v_.stop(),t.f_.length>0&&(S("RemoteStore",`Stopping write stream with ${t.f_.length} pending writes`),t.f_=[]))})),t.v_}/**
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
 */class ff{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ff(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wi(t,e){if($e("AsyncQueue",`${e}: ${t}`),Pr(t))return new R(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=qi(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class xg{constructor(){this.C_=new Ce(N.comparator)}track(e){const n=e.doc.key,r=this.C_.get(n);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(n,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(n):e.type===1&&r.type===2?this.C_=this.C_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(n,{type:2,doc:e.doc}):$():this.C_=this.C_.insert(n,e)}F_(){const e=[];return this.C_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ii{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ii(e,n,js.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Ik{constructor(){this.M_=void 0,this.listeners=[]}}class Ek{constructor(){this.queries=new Cr(e=>qI(e),ia),this.onlineState="Unknown",this.x_=new Set}}async function pf(t,e){const n=L(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Ik),s)try{i.M_=await n.onListen(r)}catch(o){const a=wi(o,`Initialization of query '${ph(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.O_(n.onlineState),i.M_&&e.N_(i.M_)&&gf(n)}async function mf(t,e){const n=L(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function wk(t,e){const n=L(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.N_(s)&&(r=!0);o.M_=s}}r&&gf(n)}function Tk(t,e,n){const r=L(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function gf(t){t.x_.forEach(e=>{e.next()})}class _f{constructor(e,n,r){this.query=e,this.B_=n,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.L_?this.q_(e)&&(this.B_.next(e),n=!0):this.Q_(e,this.onlineState)&&(this.K_(e),n=!0),this.k_=e,n}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let n=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),n=!0),n}Q_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const n=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}K_(e){e=ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
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
 */class Ak{constructor(e,n){this.W_=e,this.byteLength=n}G_(){return"metadata"in this.W_}}/**
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
 */class Vg{constructor(e){this.serializer=e}os(e){return gn(this.serializer,e)}_s(e){return e.metadata.exists?dE(this.serializer,e.document,!1):Ve.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return Ke(e)}}class bk{constructor(e,n,r){this.z_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=GE(e)}j_(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.W_.namedQuery)this.queries.push(e.W_.namedQuery);else if(e.W_.documentMetadata){this.documents.push({metadata:e.W_.documentMetadata}),e.W_.documentMetadata.exists||++n;const r=pe.fromString(e.W_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.W_.document&&(this.documents[this.documents.length-1].document=e.W_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}H_(e){const n=new Map,r=new Vg(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.os(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||ie()).add(i);n.set(o,a)}}return n}async complete(){const e=await ek(this.localStore,new Vg(this.serializer),this.documents,this.z_.id),n=this.H_(this.documents);for(const r of this.queries)await tk(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,J_:this.collectionGroups,Y_:e}}}function GE(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class WE{constructor(e){this.key=e}}class HE{constructor(e){this.key=e}}class QE{constructor(e,n){this.query=e,this.Z_=n,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=ie(),this.mutatedKeys=ie(),this.ta=KI(e),this.na=new js(this.ta)}get ra(){return this.Z_}ia(e,n){const r=n?n.sa:new xg,s=n?n.na:this.na;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=oa(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?_!==y&&(r.track({type:3,doc:f}),E=!0):this.oa(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.ta(f,c)>0||u&&this.ta(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(f?(o=o.add(f),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{na:o,sa:r,zi:a,mutatedKeys:i}}oa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const i=e.sa.F_();i.sort((u,l)=>function(d,f){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return _(d)-_(f)}(u.type,l.type)||this.ta(u.doc,l.doc)),this._a(r);const o=n?this.aa():[],a=this.ea.size===0&&this.current?1:0,c=a!==this.X_;return this.X_=a,i.length!==0||c?{snapshot:new ii(this.query,e.na,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new xg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(n=>this.Z_=this.Z_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Z_=this.Z_.delete(n)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=ie(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const n=[];return e.forEach(r=>{this.ea.has(r)||n.push(new HE(r))}),this.ea.forEach(r=>{e.has(r)||n.push(new WE(r))}),n}la(e){this.Z_=e.ss,this.ea=ie();const n=this.ia(e.documents);return this.applyChanges(n,!0)}ha(){return ii.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class Rk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Sk{constructor(e){this.key=e,this.Pa=!1}}class Pk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new Cr(a=>qI(a),ia),this.Ea=new Map,this.da=new Set,this.Aa=new Ce(N.comparator),this.Ra=new Map,this.Va=new rf,this.ma={},this.fa=new Map,this.ga=ls.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function Ck(t,e){const n=wf(t);let r,s;const i=n.Ta.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ha();else{const o=await ri(n.localStore,Nt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await yf(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Du(n.remoteStore,o)}return s}async function yf(t,e,n,r,s){t.ya=(h,d,f)=>async function(y,E,A,C){let V=E.view.ia(A);V.zi&&(V=await xc(y.localStore,E.query,!1).then(({documents:Q})=>E.view.ia(Q,V)));const x=C&&C.targetChanges.get(E.targetId),q=E.view.applyChanges(V,y.isPrimaryClient,x);return Th(y,E.targetId,q.ua),q.snapshot}(t,h,d,f);const i=await xc(t.localStore,e,!0),o=new QE(e,i.ss),a=o.ia(i.documents),c=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);Th(t,n,u.ua);const l=new Rk(e,n,o);return t.Ta.set(e,l),t.Ea.has(n)?t.Ea.get(n).push(e):t.Ea.set(n,[e]),u.snapshot}async function Dk(t,e){const n=L(t),r=n.Ta.get(e),s=n.Ea.get(r.targetId);if(s.length>1)return n.Ea.set(r.targetId,s.filter(i=>!ia(i,e))),void n.Ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await si(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Lo(n.remoteStore,r.targetId),oi(n,r.targetId)}).catch(Sr)):(oi(n,r.targetId),await si(n.localStore,r.targetId,!0))}async function xk(t,e,n){const r=Tf(t);try{const s=await function(o,a){const c=L(o),u=Me.now(),l=a.reduce((f,_)=>f.add(_.key),ie());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=Vt(),y=ie();return c.Xi.getEntries(f,l).next(E=>{_=E,_.forEach((A,C)=>{C.isValidDocument()||(y=y.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,_)).next(E=>{h=E;const A=[];for(const C of a){const V=oV(C,h.get(C.key).overlayedDocument);V!=null&&A.push(new Ln(C.key,V,kI(V.value.mapValue),Oe.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,A,a)}).next(E=>{d=E;const A=E.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,E.batchId,A)})}).then(()=>({batchId:d.batchId,changes:GI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.ma[o.currentUser.toKey()];u||(u=new Ce(se)),u=u.insert(a,c),o.ma[o.currentUser.toKey()]=u}(r,s.batchId,n),await Fn(r,s.changes),await Ii(r.remoteStore)}catch(s){const i=wi(s,"Failed to persist write");n.reject(i)}}async function YE(t,e){const n=L(t);try{const r=await XV(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ra.get(i);o&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Pa=!0:s.modifiedDocuments.size>0?H(o.Pa):s.removedDocuments.size>0&&(H(o.Pa),o.Pa=!1))}),await Fn(n,r,e)}catch(r){await Sr(r)}}function kg(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ta.forEach((i,o)=>{const a=o.view.O_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=L(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.O_(a)&&(u=!0)}),u&&gf(c)}(r.eventManager,e),s.length&&r.Ia.n_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vk(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ra.get(e),i=s&&s.key;if(i){let o=new Ce(N.comparator);o=o.insert(i,Ve.newNoDocument(i,W.min()));const a=ie().add(i),c=new ca(W.min(),new Map,new Ce(se),o,a);await YE(r,c),r.Aa=r.Aa.remove(i),r.Ra.delete(e),Ef(r)}else await si(r.localStore,e,!1).then(()=>oi(r,e,n)).catch(Sr)}async function kk(t,e){const n=L(t),r=e.batch.batchId;try{const s=await JV(n.localStore,e);If(n,r,null),vf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fn(n,s)}catch(s){await Sr(s)}}async function Nk(t,e,n){const r=L(t);try{const s=await function(o,a){const c=L(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(H(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);If(r,e,n),vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fn(r,s)}catch(s){await Sr(s)}}async function Ok(t,e){const n=L(t);Dr(n.remoteStore)||S("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=L(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(n.localStore);if(r===-1)return void e.resolve();const s=n.fa.get(r)||[];s.push(e),n.fa.set(r,s)}catch(r){const s=wi(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function vf(t,e){(t.fa.get(e)||[]).forEach(n=>{n.resolve()}),t.fa.delete(e)}function If(t,e,n){const r=L(t);let s=r.ma[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ma[r.currentUser.toKey()]=s}}function oi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ea.get(e))t.Ta.delete(r),n&&t.Ia.wa(r,n);t.Ea.delete(e),t.isPrimaryClient&&t.Va.Ar(e).forEach(r=>{t.Va.containsKey(r)||JE(t,r)})}function JE(t,e){t.da.delete(e.path.canonicalString());const n=t.Aa.get(e);n!==null&&(Lo(t.remoteStore,n),t.Aa=t.Aa.remove(e),t.Ra.delete(n),Ef(t))}function Th(t,e,n){for(const r of n)r instanceof WE?(t.Va.addReference(r.key,e),Mk(t,r)):r instanceof HE?(S("SyncEngine","Document no longer in limbo: "+r.key),t.Va.removeReference(r.key,e),t.Va.containsKey(r.key)||JE(t,r.key)):$()}function Mk(t,e){const n=e.key,r=n.path.canonicalString();t.Aa.get(n)||t.da.has(r)||(S("SyncEngine","New document in limbo: "+n),t.da.add(r),Ef(t))}function Ef(t){for(;t.da.size>0&&t.Aa.size<t.maxConcurrentLimboResolutions;){const e=t.da.values().next().value;t.da.delete(e);const n=new N(pe.fromString(e)),r=t.ga.next();t.Ra.set(r,new Sk(n)),t.Aa=t.Aa.insert(n,r),Du(t.remoteStore,new Pn(Nt(gi(n.path)),r,"TargetPurposeLimboResolution",Dt.ae))}}async function Fn(t,e,n){const r=L(t),s=[],i=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,c)=>{o.push(r.ya(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=af.qi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Ia.n_(s),await async function(c,u){const l=L(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(u,d=>v.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>v.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Pr(h))throw h;S("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),_=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(_);l.Ji=l.Ji.insert(d,y)}}}(r.localStore,i))}async function Lk(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const r=await VE(n.localStore,e);n.currentUser=e,function(i,o){i.fa.forEach(a=>{a.forEach(c=>{c.reject(new R(I.CANCELLED,o))})}),i.fa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fn(n,r.ts)}}function Fk(t,e){const n=L(t),r=n.Ra.get(e);if(r&&r.Pa)return ie().add(r.key);{let s=ie();const i=n.Ea.get(e);if(!i)return s;for(const o of i){const a=n.Ta.get(o);s=s.unionWith(a.view.ra)}return s}}async function Uk(t,e){const n=L(t),r=await xc(n.localStore,e.query,!0),s=e.view.la(r);return n.isPrimaryClient&&Th(n,e.targetId,s.ua),s}async function Bk(t,e){const n=L(t);return ME(n.localStore,e).then(r=>Fn(n,r))}async function $k(t,e,n,r){const s=L(t),i=await function(a,c){const u=L(a),l=L(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Dn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):v.resolve(null)))}(s.localStore,e);i!==null?(n==="pending"?await Ii(s.remoteStore):n==="acknowledged"||n==="rejected"?(If(s,e,r||null),vf(s,e),function(a,c){L(L(a).mutationQueue).Cn(c)}(s.localStore,e)):$(),await Fn(s,i)):S("SyncEngine","Cannot apply mutation batch with id: "+e)}async function qk(t,e){const n=L(t);if(wf(n),Tf(n),e===!0&&n.pa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),s=await Ng(n,r.toArray());n.pa=!0,await wh(n.remoteStore,!0);for(const i of s)Du(n.remoteStore,i)}else if(e===!1&&n.pa!==!1){const r=[];let s=Promise.resolve();n.Ea.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(oi(n,o),si(n.localStore,o,!0))),Lo(n.remoteStore,o)}),await s,await Ng(n,r),function(o){const a=L(o);a.Ra.forEach((c,u)=>{Lo(a.remoteStore,u)}),a.Va.Rr(),a.Ra=new Map,a.Aa=new Ce(N.comparator)}(n),n.pa=!1,await wh(n.remoteStore,!1)}}async function Ng(t,e,n){const r=L(t),s=[],i=[];for(const o of e){let a;const c=r.Ea.get(o);if(c&&c.length!==0){a=await ri(r.localStore,Nt(c[0]));for(const u of c){const l=r.Ta.get(u),h=await Uk(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await OE(r.localStore,o);a=await ri(r.localStore,u),await yf(r,XE(u),o,!1,a.resumeToken)}s.push(a)}return r.Ia.n_(i),s}function XE(t){return $I(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function jk(t){return function(n){return L(L(n).persistence).Ni()}(L(t).localStore)}async function Kk(t,e,n,r){const s=L(t);if(s.pa)return void S("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ea.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await ME(s.localStore,jI(i[0])),a=ca.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Xe.EMPTY_BYTE_STRING);await Fn(s,o,a);break}case"rejected":await si(s.localStore,e,!0),oi(s,e,r);break;default:$()}}async function zk(t,e,n){const r=wf(t);if(r.pa){for(const s of e){if(r.Ea.has(s)){S("SyncEngine","Adding an already active target "+s);continue}const i=await OE(r.localStore,s),o=await ri(r.localStore,i);await yf(r,XE(i),o.targetId,!1,o.resumeToken),Du(r.remoteStore,o)}for(const s of n)r.Ea.has(s)&&await si(r.localStore,s,!1).then(()=>{Lo(r.remoteStore,s),oi(r,s)}).catch(Sr)}}function wf(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=YE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vk.bind(null,e),e.Ia.n_=wk.bind(null,e.eventManager),e.Ia.wa=Tk.bind(null,e.eventManager),e}function Tf(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nk.bind(null,e),e}function Gk(t,e,n){const r=L(t);(async function(i,o,a){try{const c=await o.getMetadata();if(await function(f,_){const y=L(f),E=Ke(_.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",A=>y.Qr.getBundleMetadata(A,_.id)).then(A=>!!A&&A.createTime.compareTo(E)>=0)}(i.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(GE(c));const u=new bk(c,i.localStore,o.serializer);let l=await o.Sa();for(;l;){const d=await u.j_(l);d&&a._updateProgress(d),l=await o.Sa()}const h=await u.complete();return await Fn(i,h.Y_,void 0),await function(f,_){const y=L(f);return y.persistence.runTransaction("Save bundle","readwrite",E=>y.Qr.saveBundleMetadata(E,_))}(i.localStore,c),a._completeWith(h.progress),Promise.resolve(h.J_)}catch(c){return en("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,n).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class Ah{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=la(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return xE(this.persistence,new DE,e.initialUser,this.serializer)}createPersistence(e){return new CE(Cu.zr,this.serializer)}createSharedClientState(e){return new FE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZE extends Ah{constructor(e,n,r){super(),this.ba=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ba.initialize(this,e),await Tf(this.ba.syncEngine),await Ii(this.ba.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return xE(this.persistence,new DE,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new OV(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new yx(n,this.persistence);return new _x(e.asyncQueue,r)}createPersistence(e){const n=of(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new sf(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,UE(),Ja(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new FE}}class Wk extends ZE{constructor(e,n){super(e,n,!1),this.ba=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.ba.syncEngine;this.sharedClientState instanceof Il&&(this.sharedClientState.syncEngine={Gs:$k.bind(null,n),zs:Kk.bind(null,n),js:zk.bind(null,n),Ni:jk.bind(null,n),Ws:Bk.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await qk(this.ba.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=UE();if(!Il.v(n))throw new R(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=of(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Il(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Af{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lk.bind(null,this.syncEngine),await wh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ek}()}createDatastore(e){const n=la(e.databaseInfo.databaseId),r=function(i){return new ik(i)}(e.databaseInfo);return function(i,o,a,c){return new ck(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new lk(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>kg(this.syncEngine,n,0),function(){return Cg.v()?new Cg:new nk}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,l){const h=new Pk(s,i,o,a,c,u);return l&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=L(n);S("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await vi(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
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
 */function Og(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class xu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):$e("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Hk{constructor(e,n){this.Ca=e,this.serializer=n,this.metadata=new nt,this.buffer=new Uint8Array,this.Fa=function(){return new TextDecoder("utf-8")}(),this.Ma().then(r=>{r&&r.G_()?this.metadata.resolve(r.W_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.W_)}`))},r=>this.metadata.reject(r))}close(){return this.Ca.cancel()}async getMetadata(){return this.metadata.promise}async Sa(){return await this.getMetadata(),this.Ma()}async Ma(){const e=await this.xa();if(e===null)return null;const n=this.Fa.decode(e),r=Number(n);isNaN(r)&&this.Oa(`length string (${n}) is not valid number`);const s=await this.Na(r);return new Ak(JSON.parse(s),e.length+r)}Ba(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async xa(){for(;this.Ba()<0&&!await this.La(););if(this.buffer.length===0)return null;const e=this.Ba();e<0&&this.Oa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Na(e){for(;this.buffer.length<e;)await this.La()&&this.Oa("Reached the end of bundle when more is expected.");const n=this.Fa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Oa(e){throw this.Ca.cancel(),new Error(`Invalid bundle format: ${e}`)}async La(){const e=await this.Ca.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class Qk{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(s,i){const o=L(s),a=Oo(o.serializer)+"/documents",c={documents:i.map(d=>No(o.serializer,d))},u=await o.po("BatchGetDocuments",a,c,i.length),l=new Map;u.forEach(d=>{const f=mV(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return i.forEach(d=>{const f=l.get(d.toString());H(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new yi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=N.fromPath(r);this.mutations.push(new Wd(s,this.precondition(s)))}),await async function(r,s){const i=L(r),o=Oo(i.serializer)+"/documents",a={writes:s.map(c=>Mo(i.serializer,c))};await i.Ro("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=W.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new R(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(W.min())?Oe.exists(!1):Oe.updateTime(n):Oe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(W.min()))throw new R(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Oe.updateTime(n)}return Oe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Yk{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.ka=r.maxAttempts,this.Qo=new uf(this.asyncQueue,"transaction_retry")}run(){this.ka-=1,this.qa()}qa(){this.Qo.Mo(async()=>{const e=new Qk(this.datastore),n=this.Qa(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Ka(s)}))}).catch(r=>{this.Ka(r)})})}Qa(e){try{const n=this.updateFunction(e);return!ra(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ka(e){this.ka>0&&this.$a(e)?(this.ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.qa(),Promise.resolve()))):this.deferred.reject(e)}$a(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!rE(n)}return!1}}/**
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
 */class Jk{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=yI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{S("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(S("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wi(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xa(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await VE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bf(t);S("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Dg(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Dg(e.remoteStore,i)),t._onlineComponents=e}function ew(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function bf(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ew(n))throw n;en("Error using user provided cache. Falling back to memory cache: "+n),await Xa(t,new Ah)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await Xa(t,new Ah);return t._offlineComponents}async function Vu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await bh(t,t._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await bh(t,new Af))),t._onlineComponents}function tw(t){return bf(t).then(e=>e.persistence)}function Rf(t){return bf(t).then(e=>e.localStore)}function nw(t){return Vu(t).then(e=>e.remoteStore)}function Sf(t){return Vu(t).then(e=>e.syncEngine)}function Xk(t){return Vu(t).then(e=>e.datastore)}async function ai(t){const e=await Vu(t),n=e.eventManager;return n.onListen=Ck.bind(null,e.syncEngine),n.onUnlisten=Dk.bind(null,e.syncEngine),n}function Zk(t){return t.asyncQueue.enqueue(async()=>{const e=await tw(t),n=await nw(t);return e.setNetworkEnabled(!0),function(s){const i=L(s);return i.p_.delete(0),ha(i)}(n)})}function e1(t){return t.asyncQueue.enqueue(async()=>{const e=await tw(t),n=await nw(t);return e.setNetworkEnabled(!1),async function(s){const i=L(s);i.p_.add(0),await vi(i),i.S_.set("Offline")}(n)})}function t1(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await function(u,l){const h=L(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new R(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=wi(a,`Failed to get document '${i} from cache`);o.reject(c)}}(await Rf(t),e,n)),n.promise}function rw(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new xu({next:d=>{o.enqueueAndForget(()=>mf(i,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new R(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new R(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new _f(gi(a.path),l,{includeMetadataChanges:!0,U_:!0});return pf(i,h)}(await ai(t),t.asyncQueue,e,n,r)),r.promise}function n1(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await xc(s,i,!0),c=new QE(i,a.ss),u=c.ia(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=wi(a,`Failed to execute query '${i} against cache`);o.reject(c)}}(await Rf(t),e,n)),n.promise}function sw(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new xu({next:d=>{o.enqueueAndForget(()=>mf(i,h)),d.fromCache&&c.source==="server"?u.reject(new R(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new _f(a,l,{includeMetadataChanges:!0,U_:!0});return pf(i,h)}(await ai(t),t.asyncQueue,e,n,r)),r.promise}function r1(t,e){const n=new xu(e);return t.asyncQueue.enqueueAndForget(async()=>function(s,i){L(s).x_.add(i),i.next()}(await ai(t),n)),()=>{n.va(),t.asyncQueue.enqueueAndForget(async()=>function(s,i){L(s).x_.delete(i)}(await ai(t),n))}}function s1(t,e,n,r){const s=function(o,a){let c;return c=typeof o=="string"?iE().encode(o):o,function(l,h){return new Hk(l,h)}(function(l,h){if(l instanceof Uint8Array)return Og(l,h);if(l instanceof ArrayBuffer)return Og(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(n,la(e));t.asyncQueue.enqueueAndForget(async()=>{Gk(await Sf(t),s,r)})}function i1(t,e){return t.asyncQueue.enqueue(async()=>function(r,s){const i=L(r);return i.persistence.runTransaction("Get named query","readonly",o=>i.Qr.getNamedQuery(o,s))}(await Rf(t),e))}/**
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
 */function iw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Mg=new Map;/**
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
 */function Pf(t,e,n){if(!n)throw new R(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ow(t,e,n,r){if(e===!0&&r===!0)throw new R(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lg(t){if(!N.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fg(t){if(N.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ku(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ge(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ku(t);throw new R(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function aw(t,e){if(e<=0)throw new R(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Ug{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ow("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new R(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class da{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ug({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ug(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ix;switch(r.type){case"firstParty":return new ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new R(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mg.get(n);r&&(S("ComponentProvider","Removing Datastore"),Mg.delete(n),r.terminate())}(this),Promise.resolve()}}function o1(t,e,n,r={}){var s;const i=(t=ge(t,da))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&en("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=et.MOCK_USER;else{a=F0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new R(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new et(u)}t._authCredentials=new ox(new _I(a,c))}}/**
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
 */let At=class cw{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cw(this.firestore,e,this._query)}},Le=class uw{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new uw(this.firestore,e,this._key)}},ur=class lw extends At{constructor(e,n,r){super(e,n,gi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new N(e))}withConverter(e){return new lw(this.firestore,e,this._path)}};function hw(t,e,...n){if(t=we(t),Pf("collection","path",e),t instanceof da){const r=pe.fromString(e,...n);return Fg(r),new ur(t,null,r)}{if(!(t instanceof Le||t instanceof ur))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Fg(r),new ur(t.firestore,null,r)}}function a1(t,e){if(t=ge(t,da),Pf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new At(t,null,function(r){return new Mn(pe.emptyPath(),r)}(e))}function Oc(t,e,...n){if(t=we(t),arguments.length===1&&(e=yI.V()),Pf("doc","path",e),t instanceof da){const r=pe.fromString(e,...n);return Lg(r),new Le(t,null,new N(r))}{if(!(t instanceof Le||t instanceof ur))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Lg(r),new Le(t.firestore,t instanceof ur?t.converter:null,new N(r))}}function dw(t,e){return t=we(t),e=we(e),(t instanceof Le||t instanceof ur)&&(e instanceof Le||e instanceof ur)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function fw(t,e){return t=we(t),e=we(e),t instanceof At&&e instanceof At&&t.firestore===e.firestore&&ia(t._query,e._query)&&t.converter===e.converter}/**
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
 */class c1{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new uf(this,"async_queue_retry"),this.Za=()=>{const n=Ja();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const e=Ja();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const n=Ja();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new nt;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!Pr(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const n=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $e("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(e,n,r){this.Xa(),this.Ya.indexOf(e)>-1&&(n=0);const s=ff.createAndSchedule(this,e,n,r,i=>this.nu(i));return this.za.push(s),s}Xa(){this.ja&&$()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const n of this.za)if(n.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const n=this.za.indexOf(e);this.za.splice(n,1)}}function Rh(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class u1{constructor(){this._progressObserver={},this._taskCompletionResolver=new nt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const l1=-1;let Be=class extends da{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new c1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pw(this),this._firestoreClient.terminate()}};function ot(t){return t._firestoreClient||pw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pw(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,u,l){return new Ux(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,iw(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Jk(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function h1(t,e){gw(t=ge(t,Be));const n=ot(t);if(n._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");en("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),s=new Af;return mw(n,s,new ZE(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function d1(t){gw(t=ge(t,Be));const e=ot(t);if(e._uninitializedComponentsProvider)throw new R(I.FAILED_PRECONDITION,"SDK cache is already specified.");en("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Af;return mw(e,r,new Wk(r,n.cacheSizeBytes))}function mw(t,e,n){const r=new nt;return t.asyncQueue.enqueue(async()=>{try{await Xa(t,n),await bh(t,e),r.resolve()}catch(s){const i=s;if(!ew(i))throw i;en("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function f1(t){if(t._initialized&&!t._terminated)throw new R(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new nt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Ht.v())return Promise.resolve();const s=r+"main";await Ht.delete(s)}(of(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function p1(t){return function(n){const r=new nt;return n.asyncQueue.enqueueAndForget(async()=>Ok(await Sf(n),r)),r.promise}(ot(t=ge(t,Be)))}function m1(t){return Zk(ot(t=ge(t,Be)))}function g1(t){return e1(ot(t=ge(t,Be)))}function _1(t,e){const n=ot(t=ge(t,Be)),r=new u1;return s1(n,t._databaseId,e,r),r}function y1(t,e){return i1(ot(t=ge(t,Be)),e).then(n=>n?new At(t,null,n.query):null)}function gw(t){if(t._initialized||t._terminated)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Xe.fromBase64String(e))}catch(n){throw new R(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vn(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let wr=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let gs=class{constructor(e){this._methodName=e}};/**
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
 */class Nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */const v1=/^__.*__$/;class I1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ln(e,this.data,this.fieldMask,n,this.fieldTransforms):new _i(e,this.data,n,this.fieldTransforms)}}class _w{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ln(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Ou{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._u(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new Ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.uu({path:r,lu:!1});return s.hu(e),s}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.uu({path:r,lu:!1});return s._u(),s}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return Mc(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(yw(this.au)&&v1.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class E1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||la(e)}Au(e,n,r,s=!1){return new Ou({au:e,methodName:n,du:r,path:qe.emptyPath(),lu:!1,Eu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _s(t){const e=t._freezeSettings(),n=la(t._databaseId);return new E1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mu(t,e,n,r,s,i={}){const o=t.Au(i.merge||i.mergeFields?2:0,e,n,s);Vf("Data must be an object, but it was:",o,r);const a=Ew(r,o);let c,u;if(i.merge)c=new xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Sh(e,h,n);if(!o.contains(d))throw new R(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Tw(l,d)||l.push(d)}c=new xt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new I1(new lt(a),c,u)}class fa extends gs{_toFieldTransform(e){if(e.au!==2)throw e.au===1?e.Tu(`${this._methodName}() can only appear at the top level of your update data`):e.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fa}}function vw(t,e,n){return new Ou({au:3,du:e.settings.du,methodName:t._methodName,lu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Cf extends gs{_toFieldTransform(e){return new aa(e.path,new ei)}isEqual(e){return e instanceof Cf}}class w1 extends gs{constructor(e,n){super(e),this.Ru=n}_toFieldTransform(e){const n=vw(this,e,!0),r=this.Ru.map(i=>ys(i,n)),s=new os(r);return new aa(e.path,s)}isEqual(e){return this===e}}class T1 extends gs{constructor(e,n){super(e),this.Ru=n}_toFieldTransform(e){const n=vw(this,e,!0),r=this.Ru.map(i=>ys(i,n)),s=new as(r);return new aa(e.path,s)}isEqual(e){return this===e}}class A1 extends gs{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=new ti(e.serializer,YI(e.serializer,this.Vu));return new aa(e.path,n)}isEqual(e){return this===e}}function Df(t,e,n,r){const s=t.Au(1,e,n);Vf("Data must be an object, but it was:",s,r);const i=[],o=lt.empty();ms(r,(c,u)=>{const l=kf(e,c,n);u=we(u);const h=s.Pu(l);if(u instanceof fa)i.push(l);else{const d=ys(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new xt(i);return new _w(o,a,s.fieldTransforms)}function xf(t,e,n,r,s,i){const o=t.Au(1,e,n),a=[Sh(e,r,n)],c=[s];if(i.length%2!=0)throw new R(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Sh(e,i[d])),c.push(i[d+1]);const u=[],l=lt.empty();for(let d=a.length-1;d>=0;--d)if(!Tw(u,a[d])){const f=a[d];let _=c[d];_=we(_);const y=o.Pu(f);if(_ instanceof fa)u.push(f);else{const E=ys(_,y);E!=null&&(u.push(f),l.set(f,E))}}const h=new xt(u);return new _w(l,h,o.fieldTransforms)}function Iw(t,e,n,r=!1){return ys(n,t.Au(r?4:3,e))}function ys(t,e){if(ww(t=we(t)))return Vf("Unsupported field value:",e,t),Ew(t,e);if(t instanceof gs)return function(r,s){if(!yw(s.au))throw s.Tu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ys(a,s.Iu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:ni(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ni(s.serializer,i)}}if(r instanceof Nu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vn)return{bytesValue:cE(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zd(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Tu(`Unsupported field value: ${ku(r)}`)}(t,e)}function Ew(t,e){const n={};return DI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,s)=>{const i=ys(s,e.cu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ww(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Nu||t instanceof vn||t instanceof Le||t instanceof gs)}function Vf(t,e,n){if(!ww(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ku(n);throw r==="an object"?e.Tu(t+" a custom object"):e.Tu(t+" "+r)}}function Sh(t,e,n){if((e=we(e))instanceof wr)return e._internalPath;if(typeof e=="string")return kf(t,e);throw Mc("Field path arguments must be of type string or ",t,!1,void 0,n)}const b1=new RegExp("[~\\*/\\[\\]]");function kf(t,e,n){if(e.search(b1)>=0)throw Mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wr(...e.split("."))._internalPath}catch{throw Mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new R(I.INVALID_ARGUMENT,a+t+c)}function Tw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Fo{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new R1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R1 extends Fo{data(){return super.data()}}function Lu(t,e){return typeof e=="string"?kf(t,e):e instanceof wr?e._internalPath:e._delegate._internalPath}/**
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
 */function Aw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nf{}class pa extends Nf{}function Gn(t,e,...n){let r=[];e instanceof Nf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Of).length,a=i.filter(c=>c instanceof Fu).length;if(o>1||o>0&&a>0)throw new R(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Fu extends pa{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fu(e,n,r)}_apply(e){const n=this._parse(e);return Rw(e._query,n),new At(e.firestore,e.converter,fh(e._query,n))}_parse(e){const n=_s(e.firestore);return function(i,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){$g(h,l);const f=[];for(const _ of h)f.push(Bg(c,i,_));d={arrayValue:{values:f}}}else d=Bg(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||$g(h,l),d=Iw(a,o,h,l==="in"||l==="not-in");return ue.create(u,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function S1(t,e,n){const r=e,s=Lu("where",t);return Fu._create(s,r,n)}class Of extends Nf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Of(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ee.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Rw(o,c),o=fh(o,c)}(e._query,n),new At(e.firestore,e.converter,fh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mf extends pa{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Mf(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new qs(i,o);return function(u,l){if(Kd(u)===null){const h=Au(u);h!==null&&Sw(u,h,l.field)}}(s,a),a}(e._query,this._field,this._direction);return new At(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Mn(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function P1(t,e="asc"){const n=e,r=Lu("orderBy",t);return Mf._create(r,n)}class Uu extends pa{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Uu(e,n,r)}_apply(e){return new At(e.firestore,e.converter,Sc(e._query,this._limit,this._limitType))}}function C1(t){return aw("limit",t),Uu._create("limit",t,"F")}function D1(t){return aw("limitToLast",t),Uu._create("limitToLast",t,"L")}class Bu extends pa{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Bu(e,n,r)}_apply(e){const n=bw(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(s,i){return new Mn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function x1(...t){return Bu._create("startAt",t,!0)}function V1(...t){return Bu._create("startAfter",t,!1)}class $u extends pa{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new $u(e,n,r)}_apply(e){const n=bw(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(s,i){return new Mn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,n))}}function k1(...t){return $u._create("endBefore",t,!1)}function N1(...t){return $u._create("endAt",t,!0)}function bw(t,e,n,r){if(n[0]=we(n[0]),n[0]instanceof Fo)return function(i,o,a,c,u){if(!c)throw new R(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of es(i))if(h.field.isKeyField())l.push(ss(o,c.key));else{const d=c.data.field(h.field);if(Tu(d))throw new R(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new R(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new Ir(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=_s(t.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new R(I.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let _=0;_<l.length;_++){const y=l[_];if(d[_].field.isKeyField()){if(typeof y!="string")throw new R(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!zd(o)&&y.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const E=o.path.child(pe.fromString(y));if(!N.isDocumentKey(E))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const A=new N(E);f.push(ss(a,A))}else{const E=Iw(c,u,y);f.push(E)}}return new Ir(f,h)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Bg(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new R(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zd(e)&&n.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!N.isDocumentKey(r))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ss(t,new N(r))}if(n instanceof Le)return ss(t,n._key);throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ku(n)}.`)}function $g(t,e){if(!Array.isArray(t)||t.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rw(t,e){if(e.isInequality()){const r=Au(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new R(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Kd(t);i!==null&&Sw(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Sw(t,e,n){if(!n.isEqual(e))throw new R(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Lf{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Nu(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xo(e));default:return null}}convertTimestamp(e){const n=gr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);H(yE(r));const s=new yr(r.get(1),r.get(3)),i=new N(r.popFirst(5));return s.isEqual(n)||$e(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function qu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class O1 extends Lf{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}/**
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
 */class Hr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Nn=class extends Fo{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},io=class extends Nn{data(e={}){return super.data(e)}},Tr=class{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new io(this._firestore,this._userDataWriter,r.key,r,new Hr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new io(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Hr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new io(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Hr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:M1(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function M1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function Pw(t,e){return t instanceof Nn&&e instanceof Nn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Tr&&e instanceof Tr&&t._firestore===e._firestore&&fw(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function L1(t){t=ge(t,Le);const e=ge(t.firestore,Be);return rw(ot(e),t._key).then(n=>Ff(e,t,n))}class vs extends Lf{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function F1(t){t=ge(t,Le);const e=ge(t.firestore,Be),n=ot(e),r=new vs(e);return t1(n,t._key).then(s=>new Nn(e,r,t._key,s,new Hr(s!==null&&s.hasLocalMutations,!0),t.converter))}function U1(t){t=ge(t,Le);const e=ge(t.firestore,Be);return rw(ot(e),t._key,{source:"server"}).then(n=>Ff(e,t,n))}function B1(t){t=ge(t,At);const e=ge(t.firestore,Be),n=ot(e),r=new vs(e);return Aw(t._query),sw(n,t._query).then(s=>new Tr(e,r,t,s))}function $1(t){t=ge(t,At);const e=ge(t.firestore,Be),n=ot(e),r=new vs(e);return n1(n,t._query).then(s=>new Tr(e,r,t,s))}function q1(t){t=ge(t,At);const e=ge(t.firestore,Be),n=ot(e),r=new vs(e);return sw(n,t._query,{source:"server"}).then(s=>new Tr(e,r,t,s))}function qg(t,e,n){t=ge(t,Le);const r=ge(t.firestore,Be),s=qu(t.converter,e,n);return ma(r,[Mu(_s(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Oe.none())])}function jg(t,e,n,...r){t=ge(t,Le);const s=ge(t.firestore,Be),i=_s(s);let o;return o=typeof(e=we(e))=="string"||e instanceof wr?xf(i,"updateDoc",t._key,e,n,r):Df(i,"updateDoc",t._key,e),ma(s,[o.toMutation(t._key,Oe.exists(!0))])}function j1(t){return ma(ge(t.firestore,Be),[new yi(t._key,Oe.none())])}function K1(t,e){const n=ge(t.firestore,Be),r=Oc(t),s=qu(t.converter,e);return ma(n,[Mu(_s(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Oe.exists(!1))]).then(()=>r)}function Cw(t,...e){var n,r,s;t=we(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Rh(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof Le)u=ge(t.firestore,Be),l=gi(t._key.path),c={next:h=>{e[o]&&e[o](Ff(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ge(t,At);u=ge(h.firestore,Be),l=h._query;const d=new vs(u);c={next:f=>{e[o]&&e[o](new Tr(u,d,h,f))},error:e[o+1],complete:e[o+2]},Aw(t._query)}return function(d,f,_,y){const E=new xu(y),A=new _f(f,E,_);return d.asyncQueue.enqueueAndForget(async()=>pf(await ai(d),A)),()=>{E.va(),d.asyncQueue.enqueueAndForget(async()=>mf(await ai(d),A))}}(ot(u),l,a,c)}function z1(t,e){return r1(ot(t=ge(t,Be)),Rh(e)?e:{next:e})}function ma(t,e){return function(r,s){const i=new nt;return r.asyncQueue.enqueueAndForget(async()=>xk(await Sf(r),s,i)),i.promise}(ot(t),e)}function Ff(t,e,n){const r=n.docs.get(e._key),s=new vs(t);return new Nn(t,s,e._key,r,new Hr(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const G1={maxAttempts:5};/**
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
 */let W1=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=_s(e)}set(e,n,r){this._verifyNotCommitted();const s=nr(e,this._firestore),i=qu(s.converter,n,r),o=Mu(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Oe.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=nr(e,this._firestore);let o;return o=typeof(n=we(n))=="string"||n instanceof wr?xf(this._dataReader,"WriteBatch.update",i._key,n,r,s):Df(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Oe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=nr(e,this._firestore);return this._mutations=this._mutations.concat(new yi(n._key,Oe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function nr(t,e){if((t=we(t)).firestore!==e)throw new R(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let H1=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=_s(n)}get(n){const r=nr(n,this._firestore),s=new O1(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return $();const o=i[0];if(o.isFoundDocument())return new Fo(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new Fo(this._firestore,s,r._key,null,r.converter);throw $()})}set(n,r,s){const i=nr(n,this._firestore),o=qu(i.converter,r,s),a=Mu(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(n,r,s,...i){const o=nr(n,this._firestore);let a;return a=typeof(r=we(r))=="string"||r instanceof wr?xf(this._dataReader,"Transaction.update",o._key,r,s,i):Df(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=nr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=nr(e,this._firestore),r=new vs(this._firestore);return super.get(e).then(s=>new Nn(this._firestore,r,n._key,s._document,new Hr(!1,!1),n.converter))}};function Q1(t,e,n){t=ge(t,Be);const r=Object.assign(Object.assign({},G1),n);return function(i){if(i.maxAttempts<1)throw new R(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const c=new nt;return i.asyncQueue.enqueueAndForget(async()=>{const u=await Xk(i);new Yk(i.asyncQueue,u,a,o,c).run()}),c.promise}(ot(t),s=>e(new H1(t,s)),r)}/**
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
 */function Y1(){return new fa("deleteField")}function J1(){return new Cf("serverTimestamp")}function X1(...t){return new w1("arrayUnion",t)}function Z1(...t){return new T1("arrayRemove",t)}function eN(t){return new A1("increment",t)}(function(e,n=!0){(function(s){mi=s})(Ar),pr(new xn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Be(new ax(r.getProvider("auth-internal")),new hx(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new R(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),fn(Fm,"4.0.0",e),fn(Fm,"4.0.0","esm2017")})();const tN="@firebase/firestore-compat",nN="0.3.13";/**
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
 */function Uf(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Kg(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function zg(){if(!Lx())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}let Dw=class Ph{constructor(e){this._delegate=e}static fromBase64String(e){return zg(),new Ph(vn.fromBase64String(e))}static fromUint8Array(e){return Kg(),new Ph(vn.fromUint8Array(e))}toBase64(){return zg(),this._delegate.toBase64()}toUint8Array(){return Kg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function Ch(t){return rN(t,["next","error","complete"])}function rN(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class sN{enableIndexedDbPersistence(e,n){return h1(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return d1(e._delegate)}clearIndexedDbPersistence(e){return f1(e._delegate)}}class xw{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof yr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&en("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){o1(this._delegate,e,n,r)}enableNetwork(){return m1(this._delegate)}disableNetwork(){return g1(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,ow("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return p1(this._delegate)}onSnapshotsInSync(e){return z1(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ci(this,hw(this._delegate,e))}catch(n){throw Et(n,"collection()","Firestore.collection()")}}doc(e){try{return new $t(this,Oc(this._delegate,e))}catch(n){throw Et(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new It(this,a1(this._delegate,e))}catch(n){throw Et(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Q1(this._delegate,n=>e(new Vw(this,n)))}batch(){return ot(this._delegate),new kw(new W1(this._delegate,e=>ma(this._delegate,e)))}loadBundle(e){return _1(this._delegate,e)}namedQuery(e){return y1(this._delegate,e).then(n=>n?new It(this,n):null)}}class ju extends Lf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dw(new vn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return $t.forKey(n,this.firestore,null)}}function iN(t){rx(t)}class Vw{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new ju(e)}get(e){const n=Qr(e);return this._delegate.get(n).then(r=>new Uo(this._firestore,new Nn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const s=Qr(e);return r?(Uf("Transaction.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=Qr(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=Qr(e);return this._delegate.delete(n),this}}class kw{constructor(e){this._delegate=e}set(e,n,r){const s=Qr(e);return r?(Uf("WriteBatch.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=Qr(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=Qr(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class hs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new io(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Bo(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=hs.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(n);return i||(i=new hs(e,new ju(e),n),s.set(n,i)),i}}hs.INSTANCES=new WeakMap;class $t{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ju(e)}static forPath(e,n,r){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new $t(n,new Le(n._delegate,r,new N(e)))}static forKey(e,n,r){return new $t(n,new Le(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ci(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ci(this.firestore,hw(this._delegate,e))}catch(n){throw Et(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=we(e),e instanceof Le?dw(this._delegate,e):!1}set(e,n){n=Uf("DocumentReference.set",n);try{return n?qg(this._delegate,e,n):qg(this._delegate,e)}catch(r){throw Et(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?jg(this._delegate,e):jg(this._delegate,e,n,...r)}catch(s){throw Et(s,"updateDoc()","DocumentReference.update()")}}delete(){return j1(this._delegate)}onSnapshot(...e){const n=Nw(e),r=Ow(e,s=>new Uo(this.firestore,new Nn(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return Cw(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=F1(this._delegate):(e==null?void 0:e.source)==="server"?n=U1(this._delegate):n=L1(this._delegate),n.then(r=>new Uo(this.firestore,new Nn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new $t(this.firestore,e?this._delegate.withConverter(hs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Et(t,e,n){return t.message=t.message.replace(e,n),t}function Nw(t){for(const e of t)if(typeof e=="object"&&!Ch(e))return e;return{}}function Ow(t,e){var n,r;let s;return Ch(t[0])?s=t[0]:Ch(t[1])?s=t[1]:typeof t[0]=="function"?s={next:t[0],error:t[1],complete:t[2]}:s={next:t[1],error:t[2],complete:t[3]},{next:i=>{s.next&&s.next(e(i))},error:(n=s.error)===null||n===void 0?void 0:n.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class Uo{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new $t(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Pw(this._delegate,e._delegate)}}class Bo extends Uo{data(e){const n=this._delegate.data(e);return sx(n!==void 0),n}}class It{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ju(e)}where(e,n,r){try{return new It(this.firestore,Gn(this._delegate,S1(e,n,r)))}catch(s){throw Et(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new It(this.firestore,Gn(this._delegate,P1(e,n)))}catch(r){throw Et(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new It(this.firestore,Gn(this._delegate,C1(e)))}catch(n){throw Et(n,"limit()","Query.limit()")}}limitToLast(e){try{return new It(this.firestore,Gn(this._delegate,D1(e)))}catch(n){throw Et(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new It(this.firestore,Gn(this._delegate,x1(...e)))}catch(n){throw Et(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new It(this.firestore,Gn(this._delegate,V1(...e)))}catch(n){throw Et(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new It(this.firestore,Gn(this._delegate,k1(...e)))}catch(n){throw Et(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new It(this.firestore,Gn(this._delegate,N1(...e)))}catch(n){throw Et(n,"endAt()","Query.endAt()")}}isEqual(e){return fw(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=$1(this._delegate):(e==null?void 0:e.source)==="server"?n=q1(this._delegate):n=B1(this._delegate),n.then(r=>new Dh(this.firestore,new Tr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Nw(e),r=Ow(e,s=>new Dh(this.firestore,new Tr(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return Cw(this._delegate,n,r)}withConverter(e){return new It(this.firestore,e?this._delegate.withConverter(hs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class oN{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Bo(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Dh{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new It(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Bo(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new oN(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Bo(this._firestore,r))})}isEqual(e){return Pw(this._delegate,e._delegate)}}class ci extends It{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new $t(this.firestore,e):null}doc(e){try{return e===void 0?new $t(this.firestore,Oc(this._delegate)):new $t(this.firestore,Oc(this._delegate,e))}catch(n){throw Et(n,"doc()","CollectionReference.doc()")}}add(e){return K1(this._delegate,e).then(n=>new $t(this.firestore,n))}isEqual(e){return dw(this._delegate,e._delegate)}withConverter(e){return new ci(this.firestore,e?this._delegate.withConverter(hs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Qr(t){return ge(t,Le)}/**
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
 */class Bf{constructor(...e){this._delegate=new wr(...e)}static documentId(){return new Bf(qe.keyField().canonicalString())}isEqual(e){return e=we(e),e instanceof wr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Kr{constructor(e){this._delegate=e}static serverTimestamp(){const e=J1();return e._methodName="FieldValue.serverTimestamp",new Kr(e)}static delete(){const e=Y1();return e._methodName="FieldValue.delete",new Kr(e)}static arrayUnion(...e){const n=X1(...e);return n._methodName="FieldValue.arrayUnion",new Kr(n)}static arrayRemove(...e){const n=Z1(...e);return n._methodName="FieldValue.arrayRemove",new Kr(n)}static increment(e){const n=eN(e);return n._methodName="FieldValue.increment",new Kr(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const aN={Firestore:xw,GeoPoint:Nu,Timestamp:Me,Blob:Dw,Transaction:Vw,WriteBatch:kw,DocumentReference:$t,DocumentSnapshot:Uo,Query:It,QueryDocumentSnapshot:Bo,QuerySnapshot:Dh,CollectionReference:ci,FieldPath:Bf,FieldValue:Kr,setLogLevel:iN,CACHE_SIZE_UNLIMITED:l1};function cN(t,e){t.INTERNAL.registerComponent(new xn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),s=n.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},aN)))}/**
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
 */function uN(t){cN(t,(e,n)=>new xw(e,n,new sN)),t.registerVersion(tN,nN)}uN(gd);const lN=_b(),hN={apiKey:"AIzaSyD4sXePUbSsXLByKw0FGv8Jvcm_zyOjVao",authDomain:"jandm-workpermit.firebaseapp.com",projectId:"jandm-workpermit",storageBucket:"jandm-workpermit.appspot.com",messagingSenderId:"346506180953",appId:"1:346506180953:web:289ca7d3eb63f0e9bbf448",measurementId:"G-4SL9MQKPQ4"};gd.initializeApp(hN);pb(LC).use(BC).use(lN).mount("#app");const Gg=vt.get("access_token"),dN=vt.get("uid"),fN=vt.get("displayName"),pN=vt.get("email"),mN=vt.get("photoURL");Gg&&ou().setAccessToken(Gg,dN,fN,pN,mN);export{ep as A,EN as B,vN as C,jt as D,IN as E,Pt as F,hb as G,C_ as H,p_ as I,bA as J,Cp as K,ed as L,hr as M,OC as N,ou as O,Y_ as T,Si as _,Ye as a,Nl as b,sc as c,Ct as d,x_ as e,S0 as f,Se as g,np as h,je as i,yN as j,kl as k,gd as l,Tb as m,Lh as n,ar as o,rd as p,$o as q,cn as r,Gh as s,gN as t,Yt as u,zi as v,Ua as w,_N as x,Ba as y,ic as z};
