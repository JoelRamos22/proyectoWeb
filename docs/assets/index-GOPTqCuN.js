var lt=Object.defineProperty;var dt=(r,t,e)=>t in r?lt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var k=(r,t,e)=>(dt(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,I=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),F=new WeakMap;let ot=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&F.set(e,t))}return t}toString(){return this.cssText}};const ht=r=>new ot(typeof r=="string"?r:r+"",void 0,j),pt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((o,i,s)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new ot(e,r,j)},ut=(r,t)=>{if(I)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),i=H.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,r.appendChild(o)}},X=I?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return ht(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mt,defineProperty:gt,getOwnPropertyDescriptor:ft,getOwnPropertyNames:bt,getOwnPropertySymbols:_t,getPrototypeOf:vt}=Object,f=globalThis,Q=f.trustedTypes,yt=Q?Q.emptyScript:"",q=f.reactiveElementPolyfillSupport,C=(r,t)=>r,L={toAttribute(r,t){switch(t){case Boolean:r=r?yt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},it=(r,t)=>!mt(r,t),W={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);i!==void 0&&gt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:s}=ft(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const c=i==null?void 0:i.call(this);s.call(this,a),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??W}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=vt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,o=[...bt(e),..._t(e)];for(const i of o)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,i]of e)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const i=this._$Eu(e,o);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var s;const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const a=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:L).toAttribute(e,o.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){var s;const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=o.getPropertyOptions(i),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:L;this._$Em=i,this[i]=c.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??it)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[C("elementProperties")]=new Map,y[C("finalized")]=new Map,q==null||q({ReactiveElement:y}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis,O=S.trustedTypes,J=O?O.createPolicy("lit-html",{createHTML:r=>r}):void 0,rt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+g,$t=`<${st}>`,v=document,E=()=>v.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,wt=r=>at(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",D=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,G=/>/g,b=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,Y=/"/g,nt=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),T=At(1),$=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),tt=new WeakMap,_=v.createTreeWalker(v,129);function ct(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(t):t}const Ct=(r,t)=>{const e=r.length-1,o=[];let i,s=t===2?"<svg>":"",a=A;for(let c=0;c<e;c++){const n=r[c];let d,p,l=-1,u=0;for(;u<n.length&&(a.lastIndex=u,p=a.exec(n),p!==null);)u=a.lastIndex,a===A?p[1]==="!--"?a=K:p[1]!==void 0?a=G:p[2]!==void 0?(nt.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=b):p[3]!==void 0&&(a=b):a===b?p[0]===">"?(a=i??A,l=-1):p[1]===void 0?l=-2:(l=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?b:p[3]==='"'?Y:Z):a===Y||a===Z?a=b:a===K||a===G?a=A:(a=b,i=void 0);const m=a===b&&r[c+1].startsWith("/>")?" ":"";s+=a===A?n+$t:l>=0?(o.push(d),n.slice(0,l)+rt+n.slice(l)+g+m):n+g+(l===-2?c:m)}return[ct(r,s+(r[e]||"<?>")+(t===2?"</svg>":"")),o]};class M{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,a=0;const c=t.length-1,n=this.parts,[d,p]=Ct(t,e);if(this.el=M.createElement(d,o),_.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=_.nextNode())!==null&&n.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(rt)){const u=p[a++],m=i.getAttribute(l).split(g),R=/([.?@])?(.*)/.exec(u);n.push({type:1,index:s,name:R[2],strings:m,ctor:R[1]==="."?xt:R[1]==="?"?Et:R[1]==="@"?Pt:U}),i.removeAttribute(l)}else l.startsWith(g)&&(n.push({type:6,index:s}),i.removeAttribute(l));if(nt.test(i.tagName)){const l=i.textContent.split(g),u=l.length-1;if(u>0){i.textContent=O?O.emptyScript:"";for(let m=0;m<u;m++)i.append(l[m],E()),_.nextNode(),n.push({type:2,index:++s});i.append(l[u],E())}}}else if(i.nodeType===8)if(i.data===st)n.push({type:2,index:s});else{let l=-1;for(;(l=i.data.indexOf(g,l+1))!==-1;)n.push({type:7,index:s}),l+=g.length-1}s++}}static createElement(t,e){const o=v.createElement("template");return o.innerHTML=t,o}}function w(r,t,e=r,o){var a,c;if(t===$)return t;let i=o!==void 0?(a=e._$Co)==null?void 0:a[o]:e._$Cl;const s=P(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=i:e._$Cl=i),i!==void 0&&(t=w(r,i._$AS(r,t.values),i,o)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);_.currentNode=i;let s=_.nextNode(),a=0,c=0,n=o[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new N(s,s.nextSibling,this,t):n.type===1?d=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(d=new Mt(s,this,t)),this._$AV.push(d),n=o[++c]}a!==(n==null?void 0:n.index)&&(s=_.nextNode(),a++)}return _.currentNode=v,i}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),P(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==$&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=M.createElement(ct(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(e);else{const a=new St(i,this),c=a.u(this.options);a.p(e),this.T(c),this._$AH=a}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new M(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new N(this.S(E()),this.S(E()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class U{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(t,e=this,o,i){const s=this.strings;let a=!1;if(s===void 0)t=w(this,t,e,0),a=!P(t)||t!==this._$AH&&t!==$,a&&(this._$AH=t);else{const c=t;let n,d;for(t=s[0],n=0;n<s.length-1;n++)d=w(this,c[o+n],e,n),d===$&&(d=this._$AH[n]),a||(a=!P(d)||d!==this._$AH[n]),d===h?t=h:t!==h&&(t+=(d??"")+s[n+1]),this._$AH[n]=d}a&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Et extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Pt extends U{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??h)===$)return;const o=this._$AH,i=t===h&&o!==h||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==h&&(o===h||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const V=S.litHtmlPolyfillSupport;V==null||V(M,N),(S.litHtmlVersions??(S.litHtmlVersions=[])).push("3.1.3");const Nt=(r,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let i=o._$litPart$;if(i===void 0){const s=(e==null?void 0:e.renderBefore)??null;o._$litPart$=i=new N(t.insertBefore(E(),s),s,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class x extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return $}}var et;x._$litElement$=!0,x.finalized=!0,(et=globalThis.litElementHydrateSupport)==null||et.call(globalThis,{LitElement:x});const z=globalThis.litElementPolyfillSupport;z==null||z({LitElement:x});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const Rt=[{nombre:"Chaqueta Impermeable En Gabán Para Dama 'Azul'",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_787280-MCO51843885132_102022-F.webp",precio:93900,id:1},{nombre:"Chaqueta Impermeable En Gabán Para Dama 'Negro'",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_904140-MCO51843801912_102022-F.webp",precio:93900,id:2},{nombre:"Chaqueta Impermeable En Gabán Para Dama 'Blanco'",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_930447-MCO71410142210_092023-F.webp",precio:93900,id:3},{nombre:"Chaqueta Hombre Cuero Sintético",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_712593-MCO41606376126_052020-F.webp",precio:102e3,id:4},{nombre:"Calidad Chaqueta Hombre Algodon Colombiano Buso Ropa Buzos",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_829630-MCO31080337339_062019-F.webp",precio:77900,id:5}],Ht=[{nombre:"Camiseta De Compresión En Licra Uv Slim.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_906094-MCO53976036500_022023-F.webp",precio:38e3,id:1},{nombre:"Camiseta Tipo Polo Color Dama Mujer.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_649847-MCO43854241255_102020-F.webp",precio:26255,id:2},{nombre:"Camiseta Deportiva, Crossfit, Gym, Ejercicios Al Aire Libre.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_995623-MCO70722158553_072023-F.webp",precio:29900,id:3},{nombre:"Camisetas Bandas De Rock Metal Heavy Riffs.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_776916-MCO72088562654_102023-F.webp",precio:32850,id:4},{nombre:"Camiseta Anime Nezuko Kamado Kimetsu No Yaiba Demon Slayer",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_968038-MCO53410409233_012023-F.webp",precio:29900,id:5}],Ot=[{nombre:"Pantalon En Dril Licrado Para Hombre.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_731406-MCO42646277112_072020-F.webp",precio:58900,id:1},{nombre:"Pantalón Camuflado Hermoso.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_795748-MCO70527773883_072023-F.webp",precio:104405,id:2},{nombre:"Pantalón Jogger Cargo, Táctico, Militar.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_758206-MCO70501309390_072023-F.webp",precio:104500,id:3},{nombre:"Pantalón Jeans De Colores Entubado Para Hombre.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_947436-MCO69626235546_052023-F.webp",precio:61750,id:4},{nombre:"Pantalon Camuflado, De Bolsillos 100% Dreal",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_618657-MCO69523195685_052023-F.webp",precio:89990,id:5}],Ut=[{abrigoId:3,cantidad:2,id:1},{pantalonId:1,cantidad:2,id:2},{camisetaId:4,cantidad:1,id:3}],kt={abrigo:Rt,camiseta:Ht,pantalon:Ot,carrito:Ut},qt=()=>kt;class B extends x{constructor(){super(),this.contador=0,this.categoriaSeleccionada="",this.botonActivo="",this.products=[],this.total=0,this.data=qt(),this.data["todos los productos"]=[...this.data.abrigo,...this.data.camiseta,...this.data.pantalon]}handleClickCategoria(t){const e=this.shadowRoot.querySelector(".carrito_vacio"),o=this.shadowRoot.querySelector("#carrito-comprado"),i=this.shadowRoot.querySelector(".contenedor-carrito"),s=this.shadowRoot.querySelector(".titulo"),a=this.shadowRoot.querySelector(".container_product"),c=this.shadowRoot.querySelector(".titulo-carrito"),n=this.shadowRoot.querySelector(".numerito"),d=this.shadowRoot.querySelector("#carrito-productos");e.style.display="flex",d.style.display="flex",o.style.display="none",n.style.background="var(--color-white)",n.style.color="var(--color-main)",c.style.display="none",s.style.display="",a.style.display="grid",i.style.display="none",t!=="todos los productos"?(this.categoriaSeleccionada=t,this.botonActivo=t):(this.categoriaSeleccionada="todos los productos",this.botonActivo=t),this.requestUpdate()}guardarProducto(t){const e=t.target.closest(".product").querySelector(".product-description").textContent,o=parseFloat(t.target.closest(".product").querySelector(".product-price").textContent.replace("$","")),i=t.target.closest(".product").querySelector(".img").src,s=this.products.find(a=>a.nombre===e);if(s)s.cantidad++,s.precio*=s.cantidad;else{const a={nombre:e,precio:o,cantidad:1,img:i};this.products.push(a)}console.log(this.products),s||(this.contador++,this.shadowRoot.querySelector(".numerito").textContent=this.contador),this.totalCompras(),this.requestUpdate()}eliminarProducto(t){const e=t.target.closest(".carrito-producto").querySelector(".product-title").textContent,o=this.products.findIndex(a=>a.nombre===e),i=this.shadowRoot.querySelector(".carrito_vacio"),s=this.shadowRoot.querySelector("#carrito-acciones");o>-1?(this.products.splice(o,1),console.log("Producto eliminado:",e)):console.log("Producto no encontrado:",e),this.products.length===0&&(i.style.display="flex",s.style.display="none"),this.contador--,this.shadowRoot.querySelector(".numerito").textContent=this.contador,this.totalCompras(),this.requestUpdate()}eliminarProductosDeLaVista(){const t=this.shadowRoot.querySelector(".contenedor-carrito"),e=this.shadowRoot.querySelector(".container_product"),o=this.shadowRoot.querySelector(".titulo"),i=this.shadowRoot.querySelector(".titulo-carrito"),s=this.shadowRoot.querySelector(".numerito"),a=this.shadowRoot.querySelector("#carrito-acciones"),c=this.shadowRoot.querySelector(".carrito_vacio");s.style.background="var(--color-main)",s.style.color="var(--color-white)",i.style.display="flex",o.style.display="none",e.style.display="none",t.style.display="flex",this.botonActivo="carrito",this.products.length===0?a.style.display="none":(a.style.display="flex",c.style.display="none"),this.requestUpdate()}vaciarCarrito(){const t=this.shadowRoot.querySelector("#carrito-comprado"),e=this.shadowRoot.querySelector(".carrito_vacio"),o=this.shadowRoot.querySelector("#carrito-productos"),i=this.shadowRoot.querySelector("#carrito-acciones");t.style.display="none",i.style.display="none",this.shadowRoot.querySelector(".numerito").textContent="0",this.products=[],o.style.display="none",this.contador=0,e.style.display="flex",this.requestUpdate()}totalCompras(){this.total=this.products.reduce((t,e)=>t+e.precio,0),this.shadowRoot.querySelector("#total-compras").textContent=`$ ${this.total}`,this.requestUpdate()}graciasPorTuCompra(){const t=this.shadowRoot.querySelector(".carrito_vacio"),e=this.shadowRoot.querySelector("#carrito-acciones"),o=this.shadowRoot.querySelector("#carrito-comprado");t.style.display="none",e.style.display="none",o.style.display="flex",this.contador=0,this.shadowRoot.querySelector(".numerito").textContent=0,this.products=[],this.requestUpdate()}render(){return T`
            <div class="container">
                <aside class="aside">
                    <header>
                        <h1 class="logo">CampusShop 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
                            </svg>
                        </h1>
                    </header>
                    <nav>
                        <ul class="list">
                            <li>
                                <button class="boton_categoria ${this.botonActivo==="todos los productos"?"boton-activo":""}" @click=${()=>this.handleClickCategoria("todos los productos")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
                                    </svg>
                                    Todos los productos
                                </button>
                            </li>
                            <li>
                                <button class="boton_categoria ${this.botonActivo==="abrigo"?"boton-activo":""}" @click=${()=>this.handleClickCategoria("abrigo")}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
                                    </svg>
                                    Abrigos
                                </button>
                            </li>
                            <li><button class="boton_categoria ${this.botonActivo==="camiseta"?"boton-activo":""}" @click=${()=>this.handleClickCategoria("camiseta")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
                                    </svg> 
                                    Camisetas
                                </button>
                            </li>
                            <li><button class="boton_categoria ${this.botonActivo==="pantalon"?"boton-activo":""}" @click=${()=>this.handleClickCategoria("pantalon")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
                                    </svg>
                                    Pantalones
                                </button>
                            </li>
                            <li>
                                <button class="boton_categoria_cart-fill ${this.botonActivo==="carrito"?"boton-activo":""}" @click=${()=>this.eliminarProductosDeLaVista()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>
                                    Carrito
                                    <span class="numerito">0</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                <footer class="footer_text">© 2024 Joel Ramos</footer>
                </aside>    
                <main class="main">
                    <h2 class="titulo">${this.categoriaSeleccionada}</h2>
                    <div class="container_product">
                    ${Object.values(this.data[this.categoriaSeleccionada]||{}).map(t=>T`
                            <div class="product">
                                <img src="${t.imagen}" class="img">
                                <div class="details">
                                    <h3 class="product-description">${t.nombre}</h3>
                                    <p class="product-price">$${t.precio}</p>
                                    <button class="product-button" @click=${this.guardarProducto}>Agregar</button>
                                </div>
                            </div>
                        `)}
                    </div>
                    <h2 class="titulo-carrito">Carrito de Compras</h2>
                    <div class="contenedor-carrito">
                        <p class="carrito_vacio">Tu carrito esta vacio            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                            </svg>
                        </p>
                        <div id="carrito-productos" class="carrito-productos disabled">
                            ${this.products.map(t=>T`
                                <div class="carrito-producto">
                                    <img src="${t.img}" class="carrito-producto-imagen">
                                    <div class="carrito-producto-titulo">
                                        <small>Titulo</small>
                                        <h3 class="product-title">${t.nombre}</h3>
                                    </div>
                                    <div class="carrito-producto-cantidad">
                                        <small>Cantidad</small>
                                        <h3>${t.cantidad}</h3>
                                    </div>
                                    <div class="carrito-producto-precio">   
                                        <small>Precio</small>
                                        <h3>$${t.precio}</h3>
                                    </div>
                                    <div class="carrito-producto-subtotal">
                                        <small>Subtotal</small>
                                        <h3>$${t.precio}</h3>
                                    </div>
                                    <button class="carrito-producto-eliminar" @click=${this.eliminarProducto}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                        </svg>
                                    </button>
                                </div>
                            `)}
                        </div>
                        <div id="carrito-acciones" class="carrito-acciones disabled">
                            <div class="carrito-acciones-izquierda">
                                <button id="carrito-acciones-vaciar" class="carrito-acciones-vaciar" @click=${()=>this.vaciarCarrito()}>Vaciar carrito</button>
                            </div>
                            <div class="carrito-acciones-derecha">
                                <div class="carrito-acciones-total">
                                    <p>Total:</p>
                                    <p id="total-compras">$</p>
                                </div>
                                <button id="carrito-acciones-comprar" class="carrito-acciones-comprar" @click=${()=>this.graciasPorTuCompra()}>Comprar ahora</button>
                            </div>
                        </div>
                        <p id="carrito-comprado" class="carrito-comprado disabled"> Muchas gracias por tu compra. 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5"/>
                            </svg>
                        </p>
                    </div>
                </main>
            </div>
        `}}k(B,"properties",{data:{typeof:Object},categoriaSeleccionada:{typeof:String},botonActivo:{typeof:String},products:{typeof:Array},total:{typeof:Number}}),k(B,"styles",pt`
        :root {
            --color-main: #4b33a8;
            --color-main-light: #785be9;
            --color-white: #ececec;
            --color-gray: #e2e2e2;
            --color-red: #961818;
        }
        h1, h2, h3, h4, h5, h6, p, a, input, textarea, ul {
            margin: 0;
            padding: 0;
        }
        * {
            margin: 0;
            padding: 0; 
            box-sizing: border-box; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .container {
            display:grid;
            background: var(--color-main);
            grid-template-columns: 1.2fr 4fr;
            grid-template-rows: 1fr;
        }
        .aside {
            grid-area: 1 / 1 / 2 / 2;
            padding: 2rem;
            padding-right: 0; 
            color: var(--color-white);
            height: 100vh;
            position: sticky;
            top: 0;
            display: flex; 
            flex-direction: column; 
            justify-content: space-between;
        }
        .logo {
            font-weight: 500;
            font-size: 1.4em;

        }
        .list {
            list-style: none; 
            display:flex; 
            flex-direction: column; 
            gap: 1rem;
        }
        .footer_text {
            color: #785be9;
            font-size: 0.85rem;
        }
        .boton_categoria, .boton_categoria_cart-fill {
            display: flex; 
            align-items: center; 
            background: transparent; 
            color: var(--color-white); 
            border: none; 
            font-size: 1.2rem;
            font-weight: 600; 
            gap: 1rem;
            padding: .75em;  
            cursor: pointer; 
        }
        .boton_categoria_cart-fill {
            margin-top: 4rem; 
        }
        .boton-activo {
            background-color: var(--color-white);
            color: var(--color-main); 
            width: 100%;
            border-top-left-radius: 1rem; 
            border-bottom-left-radius: 1rem;
        }
        .bi-hand-index-thumb {
            transform: rotateZ(90deg)
        }
        .main {
            grid-area: 1 / 2 / 2 / 3; 
            background-color: var(--color-white);
            margin: 1rem;
            margin-left: 0;
            border-radius: 2rem;
            padding: 3rem;
        }
        .titulo, .titulo-carrito{
            text-transform: capitalize; 
            color: var(--color-main);
            margin-bottom: 2rem;
        }
        .container_product{
            display: grid; 
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            border-radius: 1rem;
        }
        .img {
            height: 200px; 
            width: 100%; 
            border-radius: 1rem; 
        }
        .numerito {
            background-color: var(--color-white);
            color: var(--color-main);
            padding: .15rem .25rem;
            border-radius: .25rem;
        }
        .details {
            font-size: 0.8em;  
            background: var(--color-main);
            color: var(--color-white);
            padding: .5rem; 
            border-radius: 1rem;
            margin-top: -2rem; 
            position: relative; 
            display: flex;
            flex-direction: column; 
            gap: .25rem; 
            text-transform: capitalize
        }
        .product-description {
            font-size: 1em;
            overflow-y: hidden;  
        }
        .product-button {
            border: none;
            background-color: var(--color-white); 
            color: var(--color-main); 
            padding: .25rem; 
            text-transform: uppercase;
            cursor: pointer; 
            border-radius: 2rem;    
            font-weight: 600; 
            transition: 0.5s
        }
        .product-button:hover {
            background-color: #00FF00; 
            color: var(--color-white)
        }
        .boton_carrito {
            text-decoration: none;
            color: var(--color-white)
        }
        /** CARRITO **/

        .contenedor-carrito {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .carrito_vacio,
        .carrito-comprado {
            color: var(--color-main);
            font-weight: 500; 
        }
        .carrito-comprado {
            display: none; 
        }
        .carrito-productos {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .carrito-producto {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: var(--color-gray);
            color: var(--color-main);
            padding: .5rem;
            padding-right: 1.5rem;
            border-radius: 1rem;
        }

        .carrito-producto-imagen {
            width: 4rem;
            border-radius: 1rem;
        }

        .carrito-producto small {
            font-size: .75rem;
        }

        .carrito-producto-eliminar {
            border: 0;
            background-color: transparent;
            color: var(--color-red);
            cursor: pointer;
        }

        .carrito-acciones {
            display: none;
            justify-content: space-between;
        }

        .carrito-acciones-vaciar {
            border: 0;
            background-color: var(--color-gray);
            padding: 1rem;
            border-radius: 1rem;
            color: var(--clr-main);
            text-transform: uppercase;
            cursor: pointer;
            font-weight: 500; 
        }

        .carrito-acciones-derecha {
            display: flex;
        }

        .carrito-acciones-total {
            display: flex;
            background-color: var(--color-gray);
            padding: 1rem;
            color: var(--color-main);
            text-transform: uppercase;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            gap: 1rem;
            font-weight: 500; 
        }

        .carrito-acciones-comprar {
            border: 0;
            background-color: var(--color-main);
            padding: 1rem;
            color: var(--color-white);
            text-transform: uppercase;
            cursor: pointer;
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            font-weight: 500;
        }

        /*** MEDIA QUERIES ***/

        @media screen and (max-width: 850px) {
            .container_product {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        @media screen and (max-width: 675px) {
            .container_product {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media screen and (max-width: 600px) {

            .container {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }

            .aside {
                position: fixed;
                z-index: 9;
                background-color: var(--color-main);
                left: 0;
                box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .75);
                transform: translateX(-100%);
                opacity: 0;
                visibility: hidden;
                transition: .2s;
            }

            .aside-visible {
                transform: translateX(0);
                opacity: 1;
                visibility: visible;
            }

            .boton-menu.active::before,
            .boton-menu.active::after {
                display: none;
            }

            .main {
                margin: 1rem;
                margin-top: 0;
                padding: 2rem;
            }

            .container_product {
                grid-template-columns: 1fr 1fr;
            }

            .header-mobile {
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-mobile .logo {
                color: var(--color-gray);
            }

            .open-menu, .close-menu {
                background-color: transparent;
                color: var(--color-gray);
                border: 0;
                font-size: 2rem;
                cursor: pointer;
            }

            .close-menu {
                display: block;
                position: absolute;
                top: 1rem;
                right: 1rem;
            }

            .carrito-producto {
                gap: 1rem;
                flex-wrap: wrap;
                justify-content: flex-start;
                padding: .5rem;
            }

            .carrito-producto-subtotal {
                display: none;
            }

            .carrito-acciones {
                flex-wrap: wrap;
                row-gap: 1rem;
            }
            
        }

        @media screen and (max-width: 400px) {
            .container_product {
                grid-template-columns: 1fr;
            }
        }

    `);customElements.define("all-page",B);
