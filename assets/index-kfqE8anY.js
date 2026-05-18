(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="184",$s={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eg=0,bu=1,ng=2,zr=1,ig=2,Ir=3,Zi=0,ln=1,cn=2,Ai=0,js=1,ul=2,wu=3,Su=4,sg=5,hs=100,rg=101,og=102,ag=103,cg=104,lg=200,hg=201,ug=202,dg=203,dl=204,fl=205,fg=206,pg=207,mg=208,gg=209,vg=210,yg=211,_g=212,xg=213,bg=214,pl=0,ml=1,gl=2,Zs=3,vl=4,yl=5,_l=6,xl=7,Wp=0,wg=1,Sg=2,ri=0,qp=1,Xp=2,$p=3,jp=4,Yp=5,Kp=6,Zp=7,Mu="attached",Mg="detached",Jp=300,ms=301,Js=302,sc=303,rc=304,Va=306,bl=1e3,Si=1001,wl=1002,je=1003,Eg=1004,uo=1005,nn=1006,oc=1007,fs=1008,Sn=1009,Qp=1010,tm=1011,$r=1012,Th=1013,ai=1014,Pn=1015,Pi=1016,Ah=1017,Ch=1018,jr=1020,em=35902,nm=35899,im=1021,sm=1022,Rn=1023,Ri=1026,ps=1027,Ph=1028,Rh=1029,gs=1030,Ih=1031,Dh=1033,la=33776,ha=33777,ua=33778,da=33779,Sl=35840,Ml=35841,El=35842,Tl=35843,Al=36196,Cl=37492,Pl=37496,Rl=37488,Il=37489,xa=37490,Dl=37491,Ll=37808,Nl=37809,Fl=37810,Ul=37811,Ol=37812,Bl=37813,zl=37814,kl=37815,Vl=37816,Hl=37817,Gl=37818,Wl=37819,ql=37820,Xl=37821,$l=36492,jl=36494,Yl=36495,Kl=36283,Zl=36284,ba=36285,Jl=36286,wa=2300,Ql=2301,ac=2302,Eu=2303,Tu=2400,Au=2401,Cu=2402,Tg=2500,lI=0,hI=1,uI=2,Ag=3200,th=0,Cg=1,$i="",wn="srgb",Sa="srgb-linear",Ma="linear",fe="srgb",Ts=7680,Pu=519,Pg=512,Rg=513,Ig=514,Lh=515,Dg=516,Lg=517,Nh=518,Ng=519,eh=35044,Fg=35048,Ru="300 es",ii=2e3,Yr=2001;function Ug(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Og(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bg(){const n=Kr("canvas");return n.style.display="block",n}const Iu={};function Ea(...n){const t="THREE."+n.shift();console.log(t,...n)}function rm(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Rt(...n){n=rm(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Vt(...n){n=rm(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function nh(...n){const t=n.join(" ");t in Iu||(Iu[t]=!0,Rt(...n))}function zg(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const kg={[pl]:ml,[gl]:_l,[vl]:xl,[Zs]:yl,[ml]:pl,[_l]:gl,[xl]:vl,[yl]:Zs};class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Du=1234567;const kr=Math.PI/180,Qs=180/Math.PI;function Dn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function Fh(n,t){return(n%t+t)%t}function Vg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Hg(n,t,e){return n!==t?(e-n)/(t-n):0}function Vr(n,t,e){return(1-e)*n+e*t}function Gg(n,t,e,i){return Vr(n,t,1-Math.exp(-e*i))}function Wg(n,t=1){return t-Math.abs(Fh(n,t*2)-t)}function qg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Xg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function $g(n,t){return n+Math.floor(Math.random()*(t-n+1))}function jg(n,t){return n+Math.random()*(t-n)}function Yg(n){return n*(.5-Math.random())}function Kg(n){n!==void 0&&(Du=n);let t=Du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zg(n){return n*kr}function Jg(n){return n*Qs}function Qg(n){return(n&n-1)===0&&n!==0}function tv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ev(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nv(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),u=o((t-i)/2),d=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*p,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*p,a*l);break;case"ZYZ":n.set(c*p,c*d,a*h,a*l);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pn={DEG2RAD:kr,RAD2DEG:Qs,generateUUID:Dn,clamp:te,euclideanModulo:Fh,mapLinear:Vg,inverseLerp:Hg,lerp:Vr,damp:Gg,pingpong:Wg,smoothstep:qg,smootherstep:Xg,randInt:$g,randFloat:jg,randFloatSpread:Yg,seededRandom:Kg,degToRad:Zg,radToDeg:Jg,isPowerOfTwo:Qg,ceilPowerOfTwo:tv,floorPowerOfTwo:ev,setQuaternionFromProperEuler:nv,normalize:pe,denormalize:zn},cu=class cu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cu.prototype.isVector2=!0;let ot=cu,Ye=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(f!==v||c!==u||l!==d||h!==p){let m=c*u+l*d+h*p+f*v;m<0&&(u=-u,d=-d,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){const y=Math.acos(m),x=Math.sin(y);g=Math.sin(g*y)/x,a=Math.sin(a*y)/x,c=c*g+u*a,l=l*g+d*a,h=h*g+p*a,f=f*g+v*a}else{c=c*g+u*a,l=l*g+d*a,h=h*g+p*a,f=f*g+v*a;const y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*f+c*d-l*u,t[e+1]=c*p+h*u+l*f-a*d,t[e+2]=l*p+h*d+a*u-c*f,t[e+3]=h*p-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),u=c(i/2),d=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*p,this._y=l*d*f-u*h*p,this._z=l*h*p+u*d*f,this._w=l*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+l*d*p,this._y=l*d*f-u*h*p,this._z=l*h*p-u*d*f,this._w=l*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-l*d*p,this._y=l*d*f+u*h*p,this._z=l*h*p+u*d*f,this._w=l*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-l*d*p,this._y=l*d*f+u*h*p,this._z=l*h*p-u*d*f,this._w=l*h*f+u*d*p;break;case"YZX":this._x=u*h*f+l*d*p,this._y=l*d*f+u*h*p,this._z=l*h*p-u*d*f,this._w=l*h*f-u*d*p;break;case"XZY":this._x=u*h*f-l*d*p,this._y=l*d*f-u*h*p,this._z=l*h*p+u*d*f,this._w=l*h*f+u*d*p;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};const lu=class lu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lu.prototype.isVector3=!0;let E=lu;const cc=new E,Lu=new Ye,hu=class hu{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],p=i[8],v=s[0],m=s[3],g=s[6],y=s[1],x=s[4],b=s[7],S=s[2],M=s[5],D=s[8];return r[0]=o*v+a*y+c*S,r[3]=o*m+a*x+c*M,r[6]=o*g+a*b+c*D,r[1]=l*v+h*y+f*S,r[4]=l*m+h*x+f*M,r[7]=l*g+h*b+f*D,r[2]=u*v+d*y+p*S,r[5]=u*m+d*x+p*M,r[8]=u*g+d*b+p*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,p=e*f+i*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=f*v,t[1]=(s*l-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lc.makeScale(t,e)),this}rotate(t){return this.premultiply(lc.makeRotation(-t)),this}translate(t,e){return this.premultiply(lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hu.prototype.isMatrix3=!0;let jt=hu;const lc=new jt,Nu=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iv(){const n={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?Ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sa]:{primaries:t,whitePoint:i,transfer:Ma,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}const oe=iv();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let As;class sv{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{As===void 0&&(As=Kr("canvas")),As.width=t.width,As.height=t.height;const s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=As}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rv=0;class Uh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hc(s[o].image)):r.push(hc(s[o]))}else r=hc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function hc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}let ov=0;const uc=new E;class sn extends Ji{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,i=Si,s=Si,r=nn,o=fs,a=Rn,c=Sn,l=sn.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Dn(),this.name="",this.source=new Uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uc).x}get height(){return this.source.getSize(uc).y}get depth(){return this.source.getSize(uc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bl:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bl:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Jp;sn.DEFAULT_ANISOTROPY=1;const uu=class uu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],p=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,b=(d+1)/2,S=(g+1)/2,M=(h+u)/4,D=(f+v)/4,_=(p+m)/4;return x>b&&x>S?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=M/i,r=D/i):b>S?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=_/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=D/r,s=_/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-v)/y,this.z=(u-h)/y,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uu.prototype.isVector4=!0;let Se=uu;class av extends Ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Uh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends av{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class om extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cv extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ka=class ka{constructor(t,e,i,s,r,o,a,c,l,h,f,u,d,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,f,u,d,p,v,m)}set(t,e,i,s,r,o,a,c,l,h,f,u,d,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ka().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,p=a*h,v=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+p*l,e[5]=u-v*l,e[9]=-a*c,e[2]=v-u*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,p=l*h,v=l*f;e[0]=u+v*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=v+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,p=l*h,v=l*f;e[0]=u-v*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,d=o*f,p=a*h,v=a*f;e[0]=c*h,e[4]=p*l-d,e[8]=u*l+v,e[1]=c*f,e[5]=v*l+u,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,d=o*l,p=a*c,v=a*l;e[0]=c*h,e[4]=v-u*f,e[8]=p*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+p,e[10]=u-v*f}else if(t.order==="XZY"){const u=o*c,d=o*l,p=a*c,v=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+v,e[5]=o*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lv,t,hv)}lookAt(t,e,i){const s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(i,yn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(i,yn)),Oi.normalize(),fo.crossVectors(yn,Oi),s[0]=Oi.x,s[4]=fo.x,s[8]=yn.x,s[1]=Oi.y,s[5]=fo.y,s[9]=yn.y,s[2]=Oi.z,s[6]=fo.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],p=i[2],v=i[6],m=i[10],g=i[14],y=i[3],x=i[7],b=i[11],S=i[15],M=s[0],D=s[4],_=s[8],T=s[12],P=s[1],R=s[5],U=s[9],O=s[13],N=s[2],L=s[6],F=s[10],k=s[14],X=s[3],$=s[7],st=s[11],at=s[15];return r[0]=o*M+a*P+c*N+l*X,r[4]=o*D+a*R+c*L+l*$,r[8]=o*_+a*U+c*F+l*st,r[12]=o*T+a*O+c*k+l*at,r[1]=h*M+f*P+u*N+d*X,r[5]=h*D+f*R+u*L+d*$,r[9]=h*_+f*U+u*F+d*st,r[13]=h*T+f*O+u*k+d*at,r[2]=p*M+v*P+m*N+g*X,r[6]=p*D+v*R+m*L+g*$,r[10]=p*_+v*U+m*F+g*st,r[14]=p*T+v*O+m*k+g*at,r[3]=y*M+x*P+b*N+S*X,r[7]=y*D+x*R+b*L+S*$,r[11]=y*_+x*U+b*F+S*st,r[15]=y*T+x*O+b*k+S*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],v=t[7],m=t[11],g=t[15],y=c*d-l*u,x=a*d-l*f,b=a*u-c*f,S=o*d-l*h,M=o*u-c*h,D=o*f-a*h;return e*(v*y-m*x+g*b)-i*(p*y-m*S+g*M)+s*(p*x-v*S+g*D)-r*(p*b-v*M+m*D)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],y=e*a-i*o,x=e*c-s*o,b=e*l-r*o,S=i*c-s*a,M=i*l-r*a,D=s*l-r*c,_=h*v-f*p,T=h*m-u*p,P=h*g-d*p,R=f*m-u*v,U=f*g-d*v,O=u*g-d*m,N=y*O-x*U+b*R+S*P-M*T+D*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return t[0]=(a*O-c*U+l*R)*L,t[1]=(s*U-i*O-r*R)*L,t[2]=(v*D-m*M+g*S)*L,t[3]=(u*M-f*D-d*S)*L,t[4]=(c*P-o*O-l*T)*L,t[5]=(e*O-s*P+r*T)*L,t[6]=(m*b-p*D-g*x)*L,t[7]=(h*D-u*b+d*x)*L,t[8]=(o*U-a*P+l*_)*L,t[9]=(i*P-e*U-r*_)*L,t[10]=(p*M-v*b+g*y)*L,t[11]=(f*b-h*M-d*y)*L,t[12]=(a*T-o*R-c*_)*L,t[13]=(e*R-i*T+s*_)*L,t[14]=(v*x-p*S-m*y)*L,t[15]=(h*S-f*x+u*y)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,p=r*f,v=o*h,m=o*f,g=a*f,y=c*l,x=c*h,b=c*f,S=i.x,M=i.y,D=i.z;return s[0]=(1-(v+g))*S,s[1]=(d+b)*S,s[2]=(p-x)*S,s[3]=0,s[4]=(d-b)*M,s[5]=(1-(u+g))*M,s[6]=(m+y)*M,s[7]=0,s[8]=(p+x)*D,s[9]=(m-y)*D,s[10]=(1-(u+v))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Cs.set(s[0],s[1],s[2]).length();const a=Cs.set(s[4],s[5],s[6]).length(),c=Cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ln.copy(this);const l=1/o,h=1/a,f=1/c;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,e.setFromRotationMatrix(Ln),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=ii,c=!1){const l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let p,v;if(c)p=r/(o-r),v=o*r/(o-r);else if(a===ii)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Yr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ii,c=!1){const l=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s);let p,v;if(c)p=1/(o-r),v=o/(o-r);else if(a===ii)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===Yr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ka.prototype.isMatrix4=!0;let ne=ka;const Cs=new E,Ln=new ne,lv=new E(0,0,0),hv=new E(1,1,1),Oi=new E,fo=new E,yn=new E,Uu=new ne,Ou=new Ye;class Ii{constructor(t=0,e=0,i=0,s=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uv=0;const Bu=new E,Ps=new Ye,ui=new ne,po=new E,hr=new E,dv=new E,fv=new Ye,zu=new E(1,0,0),ku=new E(0,1,0),Vu=new E(0,0,1),Hu={type:"added"},pv={type:"removed"},Rs={type:"childadded",child:null},dc={type:"childremoved",child:null};class Ce extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new E,e=new Ii,i=new Ye,s=new E(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new jt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?po.copy(t):po.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(hr,po,this.up):ui.lookAt(po,hr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(ui),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pv),dc.child=t,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,dv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,fv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new E(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Me extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mv={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function pc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=Fh(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=pc(o,r,t+1/3),this.g=pc(o,r,t),this.b=pc(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=wn){function i(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){const i=am[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return oe.workingToColorSpace(Je.copy(this),t),Math.round(te(Je.r*255,0,255))*65536+Math.round(te(Je.g*255,0,255))*256+Math.round(te(Je.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Je.copy(this),e);const i=Je.r,s=Je.g,r=Je.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=wn){oe.workingToColorSpace(Je.copy(this),t);const e=Je.r,i=Je.g,s=Je.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(mo);const i=Vr(Bi.h,mo.h,e),s=Vr(Bi.s,mo.s,e),r=Vr(Bi.l,mo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new $t;$t.NAMES=am;class Ha{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new Ha(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cm extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Nn=new E,di=new E,mc=new E,fi=new E,Is=new E,Ds=new E,Gu=new E,gc=new E,vc=new E,yc=new E,_c=new Se,xc=new Se,bc=new Se;class kn{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Nn.subVectors(s,e),di.subVectors(i,e),mc.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(di),c=Nn.dot(mc),l=di.dot(di),h=di.dot(mc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(l*c-a*h)*u,p=(o*h-a*c)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return _c.setScalar(0),xc.setScalar(0),bc.setScalar(0),_c.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,i),bc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_c,r.x),o.addScaledVector(xc,r.y),o.addScaledVector(bc,r.z),o}static isFrontFacing(t,e,i,s){return Nn.subVectors(i,e),di.subVectors(t,e),Nn.cross(di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Nn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return kn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,i),Ds.subVectors(r,i),gc.subVectors(t,i);const c=Is.dot(gc),l=Ds.dot(gc);if(c<=0&&l<=0)return e.copy(i);vc.subVectors(t,s);const h=Is.dot(vc),f=Ds.dot(vc);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Is,o);yc.subVectors(t,r);const d=Is.dot(yc),p=Ds.dot(yc);if(p>=0&&d<=p)return e.copy(r);const v=d*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(Ds,a);const m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return Gu.subVectors(r,s),a=(f-h)/(f-h+(d-p)),e.copy(s).addScaledVector(Gu,a);const g=1/(m+v+u);return o=v*g,a=u*g,e.copy(i).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Di{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),go.copy(i.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),vo.subVectors(this.max,ur),Ls.subVectors(t.a,ur),Ns.subVectors(t.b,ur),Fs.subVectors(t.c,ur),zi.subVectors(Ns,Ls),ki.subVectors(Fs,Ns),ns.subVectors(Ls,Fs);let e=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-ns.z,ns.y,zi.z,0,-zi.x,ki.z,0,-ki.x,ns.z,0,-ns.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-ns.y,ns.x,0];return!wc(e,Ls,Ns,Fs,vo)||(e=[1,0,0,0,1,0,0,0,1],!wc(e,Ls,Ns,Fs,vo))?!1:(yo.crossVectors(zi,ki),e=[yo.x,yo.y,yo.z],wc(e,Ls,Ns,Fs,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pi=[new E,new E,new E,new E,new E,new E,new E,new E],Fn=new E,go=new Di,Ls=new E,Ns=new E,Fs=new E,zi=new E,ki=new E,ns=new E,ur=new E,vo=new E,yo=new E,is=new E;function wc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){is.fromArray(n,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=t.dot(is),l=e.dot(is),h=i.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Oe=new E,_o=new ot;let gv=0;class gn extends Ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=eh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class lm extends gn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hm extends gn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class re extends gn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const vv=new Di,dr=new E,Sc=new E;let Li=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):vv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(dr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Sc)),this.expandByPoint(dr.copy(t.center).sub(Sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yv=0;const Cn=new ne,Mc=new Ce,Us=new E,_n=new Di,fr=new Di,We=new E;class ue extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ug(t)?hm:lm)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(_n.min,fr.min),_n.expandByPoint(We),We.addVectors(_n.max,fr.max),_n.expandByPoint(We)):(_n.expandByPoint(fr.min),_n.expandByPoint(fr.max))}_n.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)We.fromBufferAttribute(a,l),c&&(Us.fromBufferAttribute(t,l),We.add(Us)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new E,c[_]=new E;const l=new E,h=new E,f=new E,u=new ot,d=new ot,p=new ot,v=new E,m=new E;function g(_,T,P){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,P),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,P),h.sub(l),f.sub(l),d.sub(u),p.sub(u);const R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(R),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(R),a[_].add(v),a[T].add(v),a[P].add(v),c[_].add(m),c[T].add(m),c[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,T=y.length;_<T;++_){const P=y[_],R=P.start,U=P.count;for(let O=R,N=R+U;O<N;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new E,b=new E,S=new E,M=new E;function D(_){S.fromBufferAttribute(s,_),M.copy(S);const T=a[_];x.copy(T),x.sub(S.multiplyScalar(S.dot(T))).normalize(),b.crossVectors(M,T);const R=b.dot(c[_])<0?-1:1;o.setXYZW(_,x.x,x.y,x.z,R)}for(let _=0,T=y.length;_<T;++_){const P=y[_],R=P.start,U=P.count;for(let O=R,N=R+U;O<N;O+=3)D(t.getX(O+0)),D(t.getX(O+1)),D(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new E,r=new E,o=new E,a=new E,c=new E,l=new E,h=new E,f=new E;if(t)for(let u=0,d=t.count;u<d;u+=3){const p=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,p=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let g=0;g<h;g++)u[p++]=l[d++]}return new gn(u,h,f)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pI{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new E;class um{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new um(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let _v=0,ws=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=js,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==fl&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const mi=new E,Ec=new E,xo=new E,Vi=new E,Tc=new E,bo=new E,Ac=new E;let sr=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ec.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(Ec);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xo),a=Vi.dot(this.direction),c=-Vi.dot(xo),l=Vi.lengthSq(),h=Math.abs(1-o*o);let f,u,d,p;if(h>0)if(f=o*c-a,u=o*a-c,p=r*h,f>=0)if(u>=-p)if(u<=p){const v=1/h;f*=v,u*=v,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=p?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ec).addScaledVector(xo,u),d}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,i,s,r){Tc.subVectors(e,t),bo.subVectors(i,t),Ac.crossVectors(Tc,bo);let o=this.direction.dot(Ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,t);const c=a*this.direction.dot(bo.crossVectors(Vi,bo));if(c<0)return null;const l=a*this.direction.dot(Tc.cross(Vi));if(l<0||c+l>o)return null;const h=-a*Vi.dot(Ac);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class rn extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Wu=new ne,ss=new sr,wo=new Li,qu=new E,So=new E,Mo=new E,Eo=new E,Cc=new E,To=new E,Xu=new E,Ao=new E;class It extends Ce{constructor(t=new ue,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(Cc.fromBufferAttribute(f,t),o?To.addScaledVector(Cc,h):To.addScaledVector(Cc.sub(e),h))}e.add(To)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(wo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(wo,qu)===null||ss.origin.distanceToSquared(qu)>(t.far-t.near)**2))&&(Wu.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){const m=u[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,S=x;b<S;b+=3){const M=a.getX(b),D=a.getX(b+1),_=a.getX(b+2);s=Co(this,g,t,i,l,h,f,M,D,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const y=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);s=Co(this,o,t,i,l,h,f,y,x,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){const m=u[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,S=x;b<S;b+=3){const M=b,D=b+1,_=b+2;s=Co(this,g,t,i,l,h,f,M,D,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const y=m,x=m+1,b=m+2;s=Co(this,o,t,i,l,h,f,y,x,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function xv(n,t,e,i,s,r,o,a){let c;if(t.side===ln?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Zi,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ao);return l<e.near||l>e.far?null:{distance:l,point:Ao.clone(),object:n}}function Co(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,So),n.getVertexPosition(c,Mo),n.getVertexPosition(l,Eo);const h=xv(n,t,e,i,So,Mo,Eo,Xu);if(h){const f=new E;kn.getBarycoord(Xu,So,Mo,Eo,f),s&&(h.uv=kn.getInterpolatedAttribute(s,a,c,l,f,new ot)),r&&(h.uv1=kn.getInterpolatedAttribute(r,a,c,l,f,new ot)),o&&(h.normal=kn.getInterpolatedAttribute(o,a,c,l,f,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new E,materialIndex:0};kn.getNormal(So,Mo,Eo,u.normal),h.face=u,h.barycoord=f}return h}const pr=new Se,$u=new Se,ju=new Se,bv=new Se,Yu=new ne,Po=new E,Pc=new Li,Ku=new ne,Rc=new sr;class vI extends It{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mu,this.bindMatrix=new ne,this.bindMatrixInverse=new ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Di),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Po),this.boundingBox.expandByPoint(Po)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Po),this.boundingSphere.expandByPoint(Po)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(s),t.ray.intersectsSphere(Pc)!==!1&&(Ku.copy(s).invert(),Rc.copy(t.ray).applyMatrix4(Ku),!(this.boundingBox!==null&&Rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Rc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,s=this.geometry;$u.fromBufferAttribute(s.attributes.skinIndex,t),ju.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(pr.copy(e),e.set(0,0,0,0)):(pr.set(...e,1),e.set(0,0,0)),pr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=ju.getComponent(r);if(o!==0){const a=$u.getComponent(r);Yu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(bv.copy(pr).applyMatrix4(Yu),o)}}return e.isVector4&&(e.w=pr.w),e.applyMatrix4(this.bindMatrixInverse)}}class wv extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bh extends sn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=je,h=je,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zu=new ne,Sv=new ne;class dm{constructor(t=[],e=[]){this.uuid=Dn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new ne;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Sv;Zu.multiplyMatrices(a,e[r]),Zu.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new dm(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Bh(e,t,t,Rn,Pn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const r=t.bones[i];let o=e[r];o===void 0&&(Rt("Skeleton: No bone found with UUID:",r),o=new wv),this.bones.push(o),this.boneInverses.push(new ne().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=i[s];t.boneInverses.push(a.toArray())}return t}}class Ju extends gn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Os=new ne,Qu=new ne,Ro=[],td=new Di,Mv=new ne,mr=new It,gr=new Li;class yI extends It{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ju(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Mv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),td.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(td)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),gr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Qu.multiplyMatrices(i,Os),mr.matrixWorld=Qu,mr.raycast(t,Ro);for(let o=0,a=Ro.length;o<a;o++){const c=Ro[o];c.instanceId=r,c.object=this,e.push(c)}Ro.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ju(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bh(new Float32Array(s*this.count),s,this.count,Ph,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ic=new E,Ev=new E,Tv=new jt;class Xi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ic.subVectors(i,e).cross(Ev.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Tv.getNormalMatrix(t),s=this.coplanarPoint(Ic).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Li,Av=new ot(.5,.5),Io=new E;class Ga{constructor(t=new Xi,e=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],v=r[9],m=r[10],g=r[11],y=r[12],x=r[13],b=r[14],S=r[15];if(s[0].setComponents(l-o,d-h,g-p,S-y).normalize(),s[1].setComponents(l+o,d+h,g+p,S+y).normalize(),s[2].setComponents(l+a,d+f,g+v,S+x).normalize(),s[3].setComponents(l-a,d-f,g-v,S-x).normalize(),i)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,d-u,g-m,S-b).normalize();else if(s[4].setComponents(l-c,d-u,g-m,S-b).normalize(),e===ii)s[5].setComponents(l+c,d+u,g+m,S+b).normalize();else if(e===Yr)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);const e=Av.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qi extends ws{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ta=new E,Aa=new E,ed=new ne,vr=new sr,Do=new Li,Dc=new E,nd=new E;class si extends Ce{constructor(t=new ue,e=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ta.fromBufferAttribute(e,s-1),Aa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ta.distanceTo(Aa);t.setAttribute("lineDistance",new re(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,t.ray.intersectsSphere(Do)===!1)return;ed.copy(s).invert(),vr.copy(t.ray).applyMatrix4(ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,m=p-1;v<m;v+=l){const g=h.getX(v),y=h.getX(v+1),x=Lo(this,t,vr,c,g,y,v);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(p-1),m=h.getX(d),g=Lo(this,t,vr,c,v,m,p-1);g&&e.push(g)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=d,m=p-1;v<m;v+=l){const g=Lo(this,t,vr,c,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){const v=Lo(this,t,vr,c,p-1,d,p-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lo(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Ta.fromBufferAttribute(a,s),Aa.fromBufferAttribute(a,r),e.distanceSqToSegment(Ta,Aa,Dc,nd)>i)return;Dc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Dc);if(!(l<t.near||l>t.far))return{distance:l,point:nd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const id=new E,sd=new E;class fm extends si{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)id.fromBufferAttribute(e,s),sd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+id.distanceTo(sd);t.setAttribute("lineDistance",new re(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _I extends si{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class zh extends ws{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rd=new ne,ih=new sr,No=new Li,Fo=new E;class pm extends Ce{constructor(t=new ue,e=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;rd.copy(s).invert(),ih.copy(t.ray).applyMatrix4(rd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=u,v=d;p<v;p++){const m=l.getX(p);Fo.fromBufferAttribute(f,m),od(Fo,m,c,s,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,v=d;p<v;p++)Fo.fromBufferAttribute(f,p),od(Fo,p,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function od(n,t,e,i,s,r,o){const a=ih.distanceSqToPoint(n);if(a<e){const c=new E;ih.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class mm extends sn{constructor(t=[],e=ms,i,s,r,o,a,c,l,h){super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tr extends sn{constructor(t,e,i=ai,s,r,o,a=je,c=je,l,h=Ri,f=1){if(h!==Ri&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Cv extends tr{constructor(t,e=ai,i=ms,s,r,o=je,a=je,c,l=Ri){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gm extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _e extends ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,d=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function p(v,m,g,y,x,b,S,M,D,_,T){const P=b/D,R=S/_,U=b/2,O=S/2,N=M/2,L=D+1,F=_+1;let k=0,X=0;const $=new E;for(let st=0;st<F;st++){const at=st*R-O;for(let Q=0;Q<L;Q++){const zt=Q*P-U;$[v]=zt*y,$[m]=at*x,$[g]=N,l.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[g]=M>0?1:-1,h.push($.x,$.y,$.z),f.push(Q/D),f.push(1-st/_),k+=1}}for(let st=0;st<_;st++)for(let at=0;at<D;at++){const Q=u+at+L*st,zt=u+at+L*(st+1),Jt=u+(at+1)+L*(st+1),kt=u+(at+1)+L*st;c.push(Q,zt,kt),c.push(zt,Jt,kt),X+=6}a.addGroup(d,X,T),d+=X,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class kh extends ue{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,p=i*2+r,v=s+1,m=new E,g=new E;for(let y=0;y<=p;y++){let x=0,b=0,S=0,M=0;if(y<=i){const T=y/i,P=T*Math.PI/2;b=-h-t*Math.cos(P),S=t*Math.sin(P),M=-t*Math.cos(P),x=T*f}else if(y<=i+r){const T=(y-i)/r;b=-h+T*e,S=t,M=0,x=f+T*u}else{const T=(y-i-r)/i,P=T*Math.PI/2;b=h+t*Math.sin(P),S=t*Math.cos(P),M=t*Math.sin(P),x=f+u+T*f}const D=Math.max(0,Math.min(1,x/d));let _=0;y===0?_=.5/s:y===p&&(_=-.5/s);for(let T=0;T<=s;T++){const P=T/s,R=P*Math.PI*2,U=Math.sin(R),O=Math.cos(R);g.x=-S*O,g.y=b,g.z=S*U,a.push(g.x,g.y,g.z),m.set(-S*O,M,S*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(P+_,D)}if(y>0){const T=(y-1)*v;for(let P=0;P<s;P++){const R=T+P,U=T+P+1,O=y*v+P,N=y*v+P+1;o.push(R,U,O),o.push(U,N,O)}}}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kh(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Wa extends ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new E,h=new ot;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ci extends ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let p=0;const v=[],m=i/2;let g=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function y(){const b=new E,S=new E;let M=0;const D=(e-t)/i;for(let _=0;_<=r;_++){const T=[],P=_/r,R=P*(e-t)+t;for(let U=0;U<=s;U++){const O=U/s,N=O*c+a,L=Math.sin(N),F=Math.cos(N);S.x=R*L,S.y=-P*i+m,S.z=R*F,f.push(S.x,S.y,S.z),b.set(L,D,F).normalize(),u.push(b.x,b.y,b.z),d.push(O,1-P),T.push(p++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const P=v[T][_],R=v[T+1][_],U=v[T+1][_+1],O=v[T][_+1];(t>0||T!==0)&&(h.push(P,R,O),M+=3),(e>0||T!==r-1)&&(h.push(R,U,O),M+=3)}l.addGroup(g,M,0),g+=M}function x(b){const S=p,M=new ot,D=new E;let _=0;const T=b===!0?t:e,P=b===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*P,0),u.push(0,P,0),d.push(.5,.5),p++;const R=p;for(let U=0;U<=s;U++){const N=U/s*c+a,L=Math.cos(N),F=Math.sin(N);D.x=T*F,D.y=m*P,D.z=T*L,f.push(D.x,D.y,D.z),u.push(0,P,0),M.x=L*.5+.5,M.y=F*.5*P+.5,d.push(M.x,M.y),p++}for(let U=0;U<s;U++){const O=S+U,N=R+U;b===!0?h.push(N,N+1,O):h.push(N+1,N,O),_+=3}l.addGroup(g,_,b===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vh extends ci{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Vh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Rt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ot:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new E,s=[],r=[],o=[],a=new E,c=new ne;for(let d=0;d<=t;d++){const p=d/t;s[d]=this.getTangentAt(p,new E)}r[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(te(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(te(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hh extends li{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pv extends Hh{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const ad=new E,cd=new E,Lc=new Gh,Nc=new Gh,Fc=new Gh;class vm extends li{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new E){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(cd.subVectors(s[0],s[1]).add(s[0]),l=cd);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ad.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ad),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Lc.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,p,v,m),Nc.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,p,v,m),Fc.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Nc.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Fc.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(Lc.calc(c),Nc.calc(c),Fc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ld(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function Rv(n,t){const e=1-n;return e*e*t}function Iv(n,t){return 2*(1-n)*n*t}function Dv(n,t){return n*n*t}function Hr(n,t,e,i){return Rv(n,t)+Iv(n,e)+Dv(n,i)}function Lv(n,t){const e=1-n;return e*e*e*t}function Nv(n,t){const e=1-n;return 3*e*e*n*t}function Fv(n,t){return 3*(1-n)*n*n*t}function Uv(n,t){return n*n*n*t}function Gr(n,t,e,i,s){return Lv(n,t)+Nv(n,e)+Fv(n,i)+Uv(n,s)}class ym extends li{constructor(t=new ot,e=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ov extends li{constructor(t=new E,e=new E,i=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new E){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gr(t,s.x,r.x,o.x,a.x),Gr(t,s.y,r.y,o.y,a.y),Gr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _m extends li{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bv extends li{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xm extends li{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Hr(t,s.x,r.x,o.x),Hr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zv extends li{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Hr(t,s.x,r.x,o.x),Hr(t,s.y,r.y,o.y),Hr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bm extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(ld(a,c.x,l.x,h.x,f.x),ld(a,c.y,l.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var sh=Object.freeze({__proto__:null,ArcCurve:Pv,CatmullRomCurve3:vm,CubicBezierCurve:ym,CubicBezierCurve3:Ov,EllipseCurve:Hh,LineCurve:_m,LineCurve3:Bv,QuadraticBezierCurve:xm,QuadraticBezierCurve3:zv,SplineCurve:bm});class kv extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new sh[s.type]().fromJSON(s))}return this}}class hd extends kv{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new _m(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new xm(this.currentPoint.clone(),new ot(t,e),new ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new ym(this.currentPoint.clone(),new ot(t,e),new ot(i,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new bm(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new Hh(t,e,i,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let so=class extends hd{constructor(t){super(t),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new hd().fromJSON(s))}return this}};function Vv(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=wm(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Xv(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let h=a,f=c;for(let u=e;u<s;u+=e){const d=n[u],p=n[u+1];d<a&&(a=d),p<c&&(c=p),d>h&&(h=d),p>f&&(f=p)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return Zr(r,o,e,a,c,l,0),o}function wm(n,t,e,i,s){let r;if(s===iy(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=ud(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=ud(o/i|0,n[o],n[o+1],r);return r&&er(r,r.next)&&(Qr(r),r=r.next),r}function vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(er(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Qr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Zr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Zv(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Gv(n,i,s,r):Hv(n)){t.push(c.i,n.i,l.i),Qr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Wv(vs(n),t),Zr(n,t,e,i,s,r,2)):o===2&&qv(n,t,e,i,s,r):Zr(vs(n),t,e,i,s,r,1);break}}}function Hv(n){const t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(s,r,o),f=Math.min(a,c,l),u=Math.max(s,r,o),d=Math.max(a,c,l);let p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Dr(s,a,r,c,o,l,p.x,p.y)&&Pe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gv(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,c,l),p=Math.min(h,f,u),v=Math.max(a,c,l),m=Math.max(h,f,u),g=rh(d,p,t,e,i),y=rh(v,m,t,e,i);let x=n.prevZ,b=n.nextZ;for(;x&&x.z>=g&&b&&b.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Dr(a,h,c,f,l,u,x.x,x.y)&&Pe(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=d&&b.x<=v&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Dr(a,h,c,f,l,u,b.x,b.y)&&Pe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Dr(a,h,c,f,l,u,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=v&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Dr(a,h,c,f,l,u,b.x,b.y)&&Pe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Wv(n,t){let e=n;do{const i=e.prev,s=e.next.next;!er(i,s)&&Mm(i,e,e.next,s)&&Jr(i,s)&&Jr(s,i)&&(t.push(i.i,e.i,s.i),Qr(e),Qr(e.next),e=n=s),e=e.next}while(e!==n);return vs(e)}function qv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ty(o,a)){let c=Em(o,a);o=vs(o,o.next),c=vs(c,c.next),Zr(o,t,e,i,s,r,0),Zr(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Xv(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=wm(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Qv(l))}s.sort($v);for(let r=0;r<s.length;r++)e=jv(s[r],e);return e}function $v(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function jv(n,t){const e=Yv(n,t);if(!e)return t;const i=Em(e,n);return vs(i,i.next),vs(e,e.next)}function Yv(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(er(n,e))return e;do{if(er(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Sm(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const f=Math.abs(s-e.y)/(i-e.x);Jr(e,n)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Kv(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Kv(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function Zv(n,t,e,i){let s=n;do s.z===0&&(s.z=rh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Jv(s)}function Jv(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function rh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Qv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Sm(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Dr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Sm(n,t,e,i,s,r,o,a)}function ty(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ey(n,t)&&(Jr(n,t)&&Jr(t,n)&&ny(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||er(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function er(n,t){return n.x===t.x&&n.y===t.y}function Mm(n,t,e,i){const s=Oo(Pe(n,t,e)),r=Oo(Pe(n,t,i)),o=Oo(Pe(e,i,n)),a=Oo(Pe(e,i,t));return!!(s!==r&&o!==a||s===0&&Uo(n,e,t)||r===0&&Uo(n,i,t)||o===0&&Uo(e,n,i)||a===0&&Uo(e,t,i))}function Uo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Oo(n){return n>0?1:n<0?-1:0}function ey(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Mm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Jr(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function ny(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Em(n,t){const e=oh(n.i,n.x,n.y),i=oh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ud(n,t,e,i){const s=oh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Qr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function oh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function iy(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class sy{static triangulate(t,e,i=2){return Vv(t,e,i)}}class Mi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Mi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];dd(t),fd(i,t);let o=t.length;e.forEach(dd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,fd(i,e[c]);const a=sy.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function dd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function fd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class qa extends ue{constructor(t=new so([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:ry;let x,b=!1,S,M,D,_;if(g){x=g.getSpacedPoints(h),b=!0,u=!1;const tt=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,tt),M=new E,D=new E,_=new E}u||(m=0,d=0,p=0,v=0);const T=a.extractPoints(l);let P=T.shape;const R=T.holes;if(!Mi.isClockWise(P)){P=P.reverse();for(let tt=0,rt=R.length;tt<rt;tt++){const et=R[tt];Mi.isClockWise(et)&&(R[tt]=et.reverse())}}function O(tt){const et=10000000000000001e-36;let xt=tt[0];for(let vt=1;vt<=tt.length;vt++){const Gt=vt%tt.length,B=tt[Gt],qt=B.x-xt.x,Dt=B.y-xt.y,Wt=qt*qt+Dt*Dt,ct=Math.max(Math.abs(B.x),Math.abs(B.y),Math.abs(xt.x),Math.abs(xt.y)),de=et*ct*ct;if(Wt<=de){tt.splice(Gt,1),vt--;continue}xt=B}}O(P),R.forEach(O);const N=R.length,L=P;for(let tt=0;tt<N;tt++){const rt=R[tt];P=P.concat(rt)}function F(tt,rt,et){return rt||Vt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(rt,et)}const k=P.length;function X(tt,rt,et){let xt,vt,Gt;const B=tt.x-rt.x,qt=tt.y-rt.y,Dt=et.x-tt.x,Wt=et.y-tt.y,ct=B*B+qt*qt,de=B*Wt-qt*Dt;if(Math.abs(de)>Number.EPSILON){const I=Math.sqrt(ct),w=Math.sqrt(Dt*Dt+Wt*Wt),H=rt.x-qt/I,Z=rt.y+B/I,nt=et.x-Wt/w,ht=et.y+Dt/w,ft=((nt-H)*Wt-(ht-Z)*Dt)/(B*Wt-qt*Dt);xt=H+B*ft-tt.x,vt=Z+qt*ft-tt.y;const j=xt*xt+vt*vt;if(j<=2)return new ot(xt,vt);Gt=Math.sqrt(j/2)}else{let I=!1;B>Number.EPSILON?Dt>Number.EPSILON&&(I=!0):B<-Number.EPSILON?Dt<-Number.EPSILON&&(I=!0):Math.sign(qt)===Math.sign(Wt)&&(I=!0),I?(xt=-qt,vt=B,Gt=Math.sqrt(ct)):(xt=B,vt=qt,Gt=Math.sqrt(ct/2))}return new ot(xt/Gt,vt/Gt)}const $=[];for(let tt=0,rt=L.length,et=rt-1,xt=tt+1;tt<rt;tt++,et++,xt++)et===rt&&(et=0),xt===rt&&(xt=0),$[tt]=X(L[tt],L[et],L[xt]);const st=[];let at,Q=$.concat();for(let tt=0,rt=N;tt<rt;tt++){const et=R[tt];at=[];for(let xt=0,vt=et.length,Gt=vt-1,B=xt+1;xt<vt;xt++,Gt++,B++)Gt===vt&&(Gt=0),B===vt&&(B=0),at[xt]=X(et[xt],et[Gt],et[B]);st.push(at),Q=Q.concat(at)}let zt;if(m===0)zt=Mi.triangulateShape(L,R);else{const tt=[],rt=[];for(let et=0;et<m;et++){const xt=et/m,vt=d*Math.cos(xt*Math.PI/2),Gt=p*Math.sin(xt*Math.PI/2)+v;for(let B=0,qt=L.length;B<qt;B++){const Dt=F(L[B],$[B],Gt);Pt(Dt.x,Dt.y,-vt),xt===0&&tt.push(Dt)}for(let B=0,qt=N;B<qt;B++){const Dt=R[B];at=st[B];const Wt=[];for(let ct=0,de=Dt.length;ct<de;ct++){const I=F(Dt[ct],at[ct],Gt);Pt(I.x,I.y,-vt),xt===0&&Wt.push(I)}xt===0&&rt.push(Wt)}}zt=Mi.triangulateShape(tt,rt)}const Jt=zt.length,kt=p+v;for(let tt=0;tt<k;tt++){const rt=u?F(P[tt],Q[tt],kt):P[tt];b?(D.copy(S.normals[0]).multiplyScalar(rt.x),M.copy(S.binormals[0]).multiplyScalar(rt.y),_.copy(x[0]).add(D).add(M),Pt(_.x,_.y,_.z)):Pt(rt.x,rt.y,0)}for(let tt=1;tt<=h;tt++)for(let rt=0;rt<k;rt++){const et=u?F(P[rt],Q[rt],kt):P[rt];b?(D.copy(S.normals[tt]).multiplyScalar(et.x),M.copy(S.binormals[tt]).multiplyScalar(et.y),_.copy(x[tt]).add(D).add(M),Pt(_.x,_.y,_.z)):Pt(et.x,et.y,f/h*tt)}for(let tt=m-1;tt>=0;tt--){const rt=tt/m,et=d*Math.cos(rt*Math.PI/2),xt=p*Math.sin(rt*Math.PI/2)+v;for(let vt=0,Gt=L.length;vt<Gt;vt++){const B=F(L[vt],$[vt],xt);Pt(B.x,B.y,f+et)}for(let vt=0,Gt=R.length;vt<Gt;vt++){const B=R[vt];at=st[vt];for(let qt=0,Dt=B.length;qt<Dt;qt++){const Wt=F(B[qt],at[qt],xt);b?Pt(Wt.x,Wt.y+x[h-1].y,x[h-1].x+et):Pt(Wt.x,Wt.y,f+et)}}}K(),gt();function K(){const tt=s.length/3;if(u){let rt=0,et=k*rt;for(let xt=0;xt<Jt;xt++){const vt=zt[xt];Ot(vt[2]+et,vt[1]+et,vt[0]+et)}rt=h+m*2,et=k*rt;for(let xt=0;xt<Jt;xt++){const vt=zt[xt];Ot(vt[0]+et,vt[1]+et,vt[2]+et)}}else{for(let rt=0;rt<Jt;rt++){const et=zt[rt];Ot(et[2],et[1],et[0])}for(let rt=0;rt<Jt;rt++){const et=zt[rt];Ot(et[0]+k*h,et[1]+k*h,et[2]+k*h)}}i.addGroup(tt,s.length/3-tt,0)}function gt(){const tt=s.length/3;let rt=0;lt(L,rt),rt+=L.length;for(let et=0,xt=R.length;et<xt;et++){const vt=R[et];lt(vt,rt),rt+=vt.length}i.addGroup(tt,s.length/3-tt,1)}function lt(tt,rt){let et=tt.length;for(;--et>=0;){const xt=et;let vt=et-1;vt<0&&(vt=tt.length-1);for(let Gt=0,B=h+m*2;Gt<B;Gt++){const qt=k*Gt,Dt=k*(Gt+1),Wt=rt+xt+qt,ct=rt+vt+qt,de=rt+vt+Dt,I=rt+xt+Dt;Bt(Wt,ct,de,I)}}}function Pt(tt,rt,et){c.push(tt),c.push(rt),c.push(et)}function Ot(tt,rt,et){ae(tt),ae(rt),ae(et);const xt=s.length/3,vt=y.generateTopUV(i,s,xt-3,xt-2,xt-1);Ht(vt[0]),Ht(vt[1]),Ht(vt[2])}function Bt(tt,rt,et,xt){ae(tt),ae(rt),ae(xt),ae(rt),ae(et),ae(xt);const vt=s.length/3,Gt=y.generateSideWallUV(i,s,vt-6,vt-3,vt-2,vt-1);Ht(Gt[0]),Ht(Gt[1]),Ht(Gt[3]),Ht(Gt[1]),Ht(Gt[2]),Ht(Gt[3])}function ae(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function Ht(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return oy(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sh[s.type]().fromJSON(s)),new qa(i,t.options)}}const ry={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new ot(r,o),new ot(a,c),new ot(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],p=t[s*3+2],v=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ot(o,1-c),new ot(l,1-f),new ot(u,1-p),new ot(v,1-g)]:[new ot(a,1-c),new ot(h,1-f),new ot(d,1-p),new ot(m,1-g)]}};function oy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ss extends ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const y=g*u-o;for(let x=0;x<l;x++){const b=x*f-r;p.push(b,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){const x=y+l*g,b=y+l*(g+1),S=y+1+l*(g+1),M=y+1+l*g;d.push(x,b,M),d.push(b,S,M)}this.setIndex(d),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xa extends ue{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let f=t;const u=(e-t)/s,d=new E,p=new ot;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const g=r+m/i*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}f+=u}for(let v=0;v<s;v++){const m=v*(i+1);for(let g=0;g<i;g++){const y=g+m,x=y,b=y+i+1,S=y+i+2,M=y+1;a.push(x,b,M),a.push(b,S,M)}}this.setIndex(a),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Wh extends ue{constructor(t=new so([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(o,2));function l(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const p=u.holes;Mi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const y=p[m];Mi.isClockWise(y)===!0&&(p[m]=y.reverse())}const v=Mi.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=v.length;m<g;m++){const y=v[m],x=y[0]+f,b=y[1]+f,S=y[2]+f;i.push(x,b,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ay(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Wh(i,t.curveSegments)}}function ay(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class ts extends ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new E,u=new E,d=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){const y=[],x=g/i;let b=0;g===0&&o===0?b=.5/e:g===i&&c===Math.PI&&(b=-.5/e);for(let S=0;S<=e;S++){const M=S/e;f.x=-t*Math.cos(s+M*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(s+M*r)*Math.sin(o+x*a),p.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(M+b,1-x),y.push(l++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<e;y++){const x=h[g][y+1],b=h[g][y],S=h[g+1][y],M=h[g+1][y+1];(g!==0||o>0)&&d.push(x,b,M),(g!==i-1||c<Math.PI)&&d.push(b,S,M)}this.setIndex(d),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ys extends ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],h=[],f=[],u=new E,d=new E,p=new E;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let g=0;g<=s;g++){const y=g/s*r;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(g/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const g=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,x=(s+1)*(v-1)+m,b=(s+1)*v+m;c.push(g,y,b),c.push(y,x,b)}this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function nr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(pd(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(pd(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function an(n){const t={};for(let e=0;e<n.length;e++){const i=nr(n[e]);for(const s in i)t[s]=i[s]}return t}function pd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function cy(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Tm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const ly={clone:nr,merge:an};var hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hy,this.fragmentShader=uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=cy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class dy extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yt extends ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bI extends Yt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class fy extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class py extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Bo(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function my(n){function t(s,r){return n[s]-n[r]}const e=n.length,i=new Array(e);for(let s=0;s!==e;++s)i[s]=s;return i.sort(t),i}function md(n,t,e){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=n[a+c]}return s}function Am(n,t,e,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(t.push(r.time),e.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(t.push(r.time),e.push(o)),r=n[s++];while(r!==void 0)}class ro{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){const a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gy extends ro{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(t,e,i){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Au:r=t,a=2*e-i;break;case Cu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Au:o=t,c=2*i-e;break;case Cu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}const l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,y=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,x=(-1-d)*m+(1.5+d)*v+.5*p,b=d*m-d*v;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+y*o[l+S]+x*o[c+S]+b*o[f+S];return r}}class vy extends ro{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}}class yy extends ro{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class _y extends ro{interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.settings||this.DefaultSettings_,f=h.inTangents,u=h.outTangents;if(!f||!u){const v=(i-e)/(s-e),m=1-v;for(let g=0;g!==a;++g)r[g]=o[l+g]*m+o[c+g]*v;return r}const d=a*2,p=t-1;for(let v=0;v!==a;++v){const m=o[l+v],g=o[c+v],y=p*d+v*2,x=u[y],b=u[y+1],S=t*d+v*2,M=f[S],D=f[S+1];let _=(i-e)/(s-e),T,P,R,U,O;for(let N=0;N<8;N++){T=_*_,P=T*_,R=1-_,U=R*R,O=U*R;const F=O*e+3*U*_*x+3*R*T*M+P*s-i;if(Math.abs(F)<1e-10)break;const k=3*U*(x-e)+6*R*_*(M-x)+3*T*(s-M);if(Math.abs(k)<1e-10)break;_=_-F/k,_=Math.max(0,Math.min(1,_))}r[v]=O*m+3*U*_*b+3*R*T*D+P*g}return r}}class qn{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bo(e,this.TimeBufferType),this.values=Bo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Bo(t.times,Array),values:Bo(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new yy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new _y(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case wa:e=this.InterpolantFactoryMethodDiscrete;break;case Ql:e=this.InterpolantFactoryMethodLinear;break;case ac:e=this.InterpolantFactoryMethodSmooth;break;case Eu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return ac;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){Vt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Vt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Og(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){Vt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ac,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{const f=a*i,u=f-i,d=f+i;for(let p=0;p!==i;++p){const v=e[f+p];if(v!==e[u+p]||v!==e[d+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const f=a*i,u=o*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ql;class rr extends qn{constructor(t,e,i){super(t,e,i)}}rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=wa;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cm extends qn{constructor(t,e,i,s){super(t,e,i,s)}}Cm.prototype.ValueTypeName="color";class Ca extends qn{constructor(t,e,i,s){super(t,e,i,s)}}Ca.prototype.ValueTypeName="number";class xy extends ro{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Ye.slerpFlat(r,0,o,l-a,o,l,c);return r}}class $a extends qn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new xy(this.times,this.values,this.getValueSize(),t)}}$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends qn{constructor(t,e,i){super(t,e,i)}}or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=wa;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class Pa extends qn{constructor(t,e,i,s){super(t,e,i,s)}}Pa.prototype.ValueTypeName="vector";class wI{constructor(t="",e=-1,i=[],s=Tg){this.name=t,this.tracks=i,this.duration=e,this.blendMode=s,this.uuid=Dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,s=1/(t.fps||1);for(let o=0,a=i.length;o!==a;++o)e.push(wy(i[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=i.length;r!==o;++r)e.push(qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,e,i,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=my(c);c=md(c,1,h),l=md(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ca(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/i))}return new this(t,-1,o)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===e)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const f=h[1];let u=s[f];u||(s[f]=u=[]),u.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,i));return o}static parseAnimation(t,e){if(Rt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Vt("AnimationClip: No animation in JSONLoader data."),null;const i=function(f,u,d,p,v){if(d.length!==0){const m=[],g=[];Am(d,m,g,p),m.length!==0&&v.push(new f(u,m,g))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let f=0;f<l.length;f++){const u=l[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let v=0;v<u[p].morphTargets.length;v++)d[u[p].morphTargets[v]]=-1;for(const v in d){const m=[],g=[];for(let y=0;y!==u[p].morphTargets.length;++y){const x=u[p];m.push(x.time),g.push(x.morphTarget===v?1:0)}s.push(new Ca(".morphTargetInfluence["+v+"]",m,g))}c=d.length*o}else{const d=".bones["+e[f].name+"]";i(Pa,d+".position",u,"pos",s),i($a,d+".quaternion",u,"rot",s),i(Pa,d+".scale",u,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,s=t.length;i!==s;++i){const r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function by(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ca;case"vector":case"vector2":case"vector3":case"vector4":return Pa;case"color":return Cm;case"quaternion":return $a;case"bool":case"boolean":return rr;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function wy(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=by(n.type);if(n.times===void 0){const e=[],i=[];Am(n.keys,e,i,"value"),n.times=e,n.values=i}return t.parse!==void 0?t.parse(n):new t(n.name,n.times,n.values,n.interpolation)}const Ei={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(gd(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!gd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function gd(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Sy{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){const d=l[f],p=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const My=new Sy;class oo{constructor(t){this.manager=t!==void 0?t:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const gi={};class Ey extends Error{constructor(t,e){super(t),this.response=e}}class SI extends oo{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ei.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(gi[t]!==void 0){gi[t].push({onLoad:e,onProgress:i,onError:s});return}gi[t]=[],gi[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Rt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=gi[t],f=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0;let v=0;const m=new ReadableStream({start(g){y();function y(){f.read().then(({done:x,value:b})=>{if(x)g.close();else{v+=b.byteLength;const S=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let M=0,D=h.length;M<D;M++){const _=h[M];_.onProgress&&_.onProgress(S)}g.enqueue(b),y()}},x=>{g.error(x)})}}});return new Response(m)}else throw new Ey(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Ei.add(`file:${t}`,l);const h=gi[t];delete gi[t];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=gi[t];if(h===void 0)throw this.manager.itemError(t),l;delete gi[t];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Bs=new WeakMap;class Ty extends oo{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ei.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let f=Bs.get(o);f===void 0&&(f=[],Bs.set(o,f)),f.push({onLoad:e,onError:s})}return o}const a=Kr("img");function c(){h(),e&&e(this);const f=Bs.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Bs.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),Ei.remove(`image:${t}`);const u=Bs.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onError&&p.onError(f)}Bs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ei.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class MI extends oo{constructor(t){super(t)}load(t,e,i,s){const r=new sn,o=new Ty(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class ao extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ay extends ao{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Uc=new ne,vd=new E,yd=new E;class qh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vd.setFromMatrixPosition(t.matrixWorld),e.position.copy(vd),yd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yd),e.updateMatrixWorld(),Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Yr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zo=new E,ko=new Ye,jn=new E;class Pm extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zo,ko,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,jn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(zo,ko,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new E,_d=new ot,xd=new ot;class en extends Pm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,_d,xd),e.subVectors(xd,_d)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Cy extends qh{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Qs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Py extends ao{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Ry extends qh{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}}class ar extends ao{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ry}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Xh extends Pm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Iy extends qh{constructor(){super(new Xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ah extends ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Iy}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Rm extends ao{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class EI{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Oc=new WeakMap;class TI extends oo{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Rt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Rt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ei.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{Oc.has(o)===!0?(s&&s(Oc.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(l),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ei.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t)}).catch(function(l){s&&s(l),Oc.set(c,l),Ei.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Ei.add(`image-bitmap:${t}`,c),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const zs=-90,ks=1;class Dy extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(zs,ks,t,e);s.layers=this.layers,this.add(s);const r=new en(zs,ks,t,e);r.layers=this.layers,this.add(r);const o=new en(zs,ks,t,e);o.layers=this.layers,this.add(o);const a=new en(zs,ks,t,e);a.layers=this.layers,this.add(a);const c=new en(zs,ks,t,e);c.layers=this.layers,this.add(c);const l=new en(zs,ks,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Ly extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const $h="\\[\\]\\.:\\/",Ny=new RegExp("["+$h+"]","g"),jh="[^"+$h+"]",Fy="[^"+$h.replace("\\.","")+"]",Uy=/((?:WC+[\/:])*)/.source.replace("WC",jh),Oy=/(WCOD+)?/.source.replace("WCOD",Fy),By=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),ky=new RegExp("^"+Uy+Oy+By+zy+"$"),Vy=["material","materials","bones","map"];class Hy{constructor(t,e,i){const s=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class ve{constructor(t,e,i){this.path=e,this.parsedPath=i||ve.parseTrackName(e),this.node=ve.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ve.Composite(t,e,i):new ve(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ny,"")}static parseTrackName(t){const e=ky.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Vy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ve.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ve.Composite=Hy;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const bd=new ne;class ch{constructor(t,e,i=0,s=1/0){this.ray=new sr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bd),this}intersectObject(t,e=!0,i=[]){return lh(t,this,i,e),i.sort(wd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)lh(t[s],this,i,e);return i.sort(wd),i}}function wd(n,t){return n.distance-t.distance}function lh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)lh(r[o],t,e,!0)}}class Gy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Sd{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const du=class du{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};du.prototype.isMatrix2=!0;let Md=du;class Im extends fm{constructor(t=10,e=10,i=4473924,s=8947848){i=new $t(i),s=new $t(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let u=0,d=0,p=-a;u<=e;u++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const v=u===r?i:s;v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3}const h=new ue;h.setAttribute("position",new re(c,3)),h.setAttribute("color",new re(l,3));const f=new Qi({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wy extends Ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Rt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ed(n,t,e,i){const s=qy(i);switch(e){case im:return n*t;case Ph:return n*t/s.components*s.byteLength;case Rh:return n*t/s.components*s.byteLength;case gs:return n*t*2/s.components*s.byteLength;case Ih:return n*t*2/s.components*s.byteLength;case sm:return n*t*3/s.components*s.byteLength;case Rn:return n*t*4/s.components*s.byteLength;case Dh:return n*t*4/s.components*s.byteLength;case la:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:case Tl:return Math.max(n,16)*Math.max(t,8)/4;case Sl:case El:return Math.max(n,8)*Math.max(t,8)/2;case Al:case Cl:case Rl:case Il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pl:case xa:case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case $l:case jl:case Yl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kl:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ba:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qy(n){switch(n){case Sn:case Qp:return{byteLength:1,components:1};case $r:case tm:case Pi:return{byteLength:2,components:1};case Ah:case Ch:return{byteLength:2,components:4};case ai:case Th:case Pn:return{byteLength:4,components:1};case em:case nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Xy(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){const p=f[u],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){const v=f[d];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var $y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,n_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,a_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,g_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,z_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,k_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,K_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ix=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,db=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:$y,alphahash_pars_fragment:jy,alphamap_fragment:Yy,alphamap_pars_fragment:Ky,alphatest_fragment:Zy,alphatest_pars_fragment:Jy,aomap_fragment:Qy,aomap_pars_fragment:t_,batching_pars_vertex:e_,batching_vertex:n_,begin_vertex:i_,beginnormal_vertex:s_,bsdfs:r_,iridescence_fragment:o_,bumpmap_pars_fragment:a_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:l_,clipping_planes_pars_vertex:h_,clipping_planes_vertex:u_,color_fragment:d_,color_pars_fragment:f_,color_pars_vertex:p_,color_vertex:m_,common:g_,cube_uv_reflection_fragment:v_,defaultnormal_vertex:y_,displacementmap_pars_vertex:__,displacementmap_vertex:x_,emissivemap_fragment:b_,emissivemap_pars_fragment:w_,colorspace_fragment:S_,colorspace_pars_fragment:M_,envmap_fragment:E_,envmap_common_pars_fragment:T_,envmap_pars_fragment:A_,envmap_pars_vertex:C_,envmap_physical_pars_fragment:z_,envmap_vertex:P_,fog_vertex:R_,fog_pars_vertex:I_,fog_fragment:D_,fog_pars_fragment:L_,gradientmap_pars_fragment:N_,lightmap_pars_fragment:F_,lights_lambert_fragment:U_,lights_lambert_pars_fragment:O_,lights_pars_begin:B_,lights_toon_fragment:k_,lights_toon_pars_fragment:V_,lights_phong_fragment:H_,lights_phong_pars_fragment:G_,lights_physical_fragment:W_,lights_physical_pars_fragment:q_,lights_fragment_begin:X_,lights_fragment_maps:$_,lights_fragment_end:j_,lightprobes_pars_fragment:Y_,logdepthbuf_fragment:K_,logdepthbuf_pars_fragment:Z_,logdepthbuf_pars_vertex:J_,logdepthbuf_vertex:Q_,map_fragment:tx,map_pars_fragment:ex,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:sx,metalnessmap_pars_fragment:rx,morphinstance_vertex:ox,morphcolor_vertex:ax,morphnormal_vertex:cx,morphtarget_pars_vertex:lx,morphtarget_vertex:hx,normal_fragment_begin:ux,normal_fragment_maps:dx,normal_pars_fragment:fx,normal_pars_vertex:px,normal_vertex:mx,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:xx,opaque_fragment:bx,packing:wx,premultiplied_alpha_fragment:Sx,project_vertex:Mx,dithering_fragment:Ex,dithering_pars_fragment:Tx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Rx,shadowmap_vertex:Ix,shadowmask_pars_fragment:Dx,skinbase_vertex:Lx,skinning_pars_vertex:Nx,skinning_vertex:Fx,skinnormal_vertex:Ux,specularmap_fragment:Ox,specularmap_pars_fragment:Bx,tonemapping_fragment:zx,tonemapping_pars_fragment:kx,transmission_fragment:Vx,transmission_pars_fragment:Hx,uv_pars_fragment:Gx,uv_pars_vertex:Wx,uv_vertex:qx,worldpos_vertex:Xx,background_vert:$x,background_frag:jx,backgroundCube_vert:Yx,backgroundCube_frag:Kx,cube_vert:Zx,cube_frag:Jx,depth_vert:Qx,depth_frag:tb,distance_vert:eb,distance_frag:nb,equirect_vert:ib,equirect_frag:sb,linedashed_vert:rb,linedashed_frag:ob,meshbasic_vert:ab,meshbasic_frag:cb,meshlambert_vert:lb,meshlambert_frag:hb,meshmatcap_vert:ub,meshmatcap_frag:db,meshnormal_vert:fb,meshnormal_frag:pb,meshphong_vert:mb,meshphong_frag:gb,meshphysical_vert:vb,meshphysical_frag:yb,meshtoon_vert:_b,meshtoon_frag:xb,points_vert:bb,points_frag:wb,shadow_vert:Sb,shadow_frag:Mb,sprite_vert:Eb,sprite_frag:Tb},yt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new E},probesMax:{value:new E},probesResolution:{value:new E}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ti={basic:{uniforms:an([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:an([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:an([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:an([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:an([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new $t(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:an([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:an([yt.points,yt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:an([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:an([yt.common,yt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:an([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:an([yt.sprite,yt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:an([yt.common,yt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:an([yt.lights,yt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ti.physical={uniforms:an([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Vo={r:0,b:0,g:0},Ab=new ne,Lm=new jt;Lm.set(-1,0,0,0,1,0,0,0,1);function Cb(n,t,e,i,s,r){const o=new $t(0);let a=s===!0?0:1,c,l,h=null,f=0,u=null;function d(y){let x=y.isScene===!0?y.background:null;if(x&&x.isTexture){const b=y.backgroundBlurriness>0;x=t.get(x,b)}return x}function p(y){let x=!1;const b=d(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),x=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,x){const b=d(x);b&&(b.isCubeTexture||b.mapping===Va)?(l===void 0&&(l=new It(new _e(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:nr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,M,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(x.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lm),l.material.toneMapped=oe.getTransfer(b.colorSpace)!==fe,(h!==b||f!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new It(new Ss(2,2),new Wn({name:"BackgroundMaterial",uniforms:nr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=oe.getTransfer(b.colorSpace)!==fe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Vo,Tm(n)),e.buffers.color.setClear(Vo.r,Vo.g,Vo.b,x,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),a=x,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:v,dispose:g}}function Pb(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(R,U,O,N,L){let F=!1;const k=f(R,N,O,U);r!==k&&(r=k,l(r.object)),F=d(R,N,O,L),F&&p(R,N,O,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,b(R,U,O,N),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function h(R){return n.deleteVertexArray(R)}function f(R,U,O,N){const L=N.wireframe===!0;let F=i[U.id];F===void 0&&(F={},i[U.id]=F);const k=R.isInstancedMesh===!0?R.id:0;let X=F[k];X===void 0&&(X={},F[k]=X);let $=X[O.id];$===void 0&&($={},X[O.id]=$);let st=$[L];return st===void 0&&(st=u(c()),$[L]=st),st}function u(R){const U=[],O=[],N=[];for(let L=0;L<e;L++)U[L]=0,O[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:N,object:R,attributes:{},index:null}}function d(R,U,O,N){const L=r.attributes,F=U.attributes;let k=0;const X=O.getAttributes();for(const $ in X)if(X[$].location>=0){const at=L[$];let Q=F[$];if(Q===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),at===void 0||at.attribute!==Q||Q&&at.data!==Q.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function p(R,U,O,N){const L={},F=U.attributes;let k=0;const X=O.getAttributes();for(const $ in X)if(X[$].location>=0){let at=F[$];at===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(at=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(at=R.instanceColor));const Q={};Q.attribute=at,at&&at.data&&(Q.data=at.data),L[$]=Q,k++}r.attributes=L,r.attributesNum=k,r.index=N}function v(){const R=r.newAttributes;for(let U=0,O=R.length;U<O;U++)R[U]=0}function m(R){g(R,0)}function g(R,U){const O=r.newAttributes,N=r.enabledAttributes,L=r.attributeDivisors;O[R]=1,N[R]===0&&(n.enableVertexAttribArray(R),N[R]=1),L[R]!==U&&(n.vertexAttribDivisor(R,U),L[R]=U)}function y(){const R=r.newAttributes,U=r.enabledAttributes;for(let O=0,N=U.length;O<N;O++)U[O]!==R[O]&&(n.disableVertexAttribArray(O),U[O]=0)}function x(R,U,O,N,L,F,k){k===!0?n.vertexAttribIPointer(R,U,O,L,F):n.vertexAttribPointer(R,U,O,N,L,F)}function b(R,U,O,N){v();const L=N.attributes,F=O.getAttributes(),k=U.defaultAttributeValues;for(const X in F){const $=F[X];if($.location>=0){let st=L[X];if(st===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(st=R.instanceColor)),st!==void 0){const at=st.normalized,Q=st.itemSize,zt=t.get(st);if(zt===void 0)continue;const Jt=zt.buffer,kt=zt.type,K=zt.bytesPerElement,gt=kt===n.INT||kt===n.UNSIGNED_INT||st.gpuType===Th;if(st.isInterleavedBufferAttribute){const lt=st.data,Pt=lt.stride,Ot=st.offset;if(lt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<$.locationSize;Bt++)g($.location+Bt,lt.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Bt=0;Bt<$.locationSize;Bt++)m($.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let Bt=0;Bt<$.locationSize;Bt++)x($.location+Bt,Q/$.locationSize,kt,at,Pt*K,(Ot+Q/$.locationSize*Bt)*K,gt)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<$.locationSize;lt++)g($.location+lt,st.meshPerAttribute);R.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<$.locationSize;lt++)m($.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let lt=0;lt<$.locationSize;lt++)x($.location+lt,Q/$.locationSize,kt,at,Q*K,Q/$.locationSize*lt*K,gt)}}else if(k!==void 0){const at=k[X];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv($.location,at);break;case 3:n.vertexAttrib3fv($.location,at);break;case 4:n.vertexAttrib4fv($.location,at);break;default:n.vertexAttrib1fv($.location,at)}}}}y()}function S(){T();for(const R in i){const U=i[R];for(const O in U){const N=U[O];for(const L in N){const F=N[L];for(const k in F)h(F[k].object),delete F[k];delete N[L]}}delete i[R]}}function M(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const O in U){const N=U[O];for(const L in N){const F=N[L];for(const k in F)h(F[k].object),delete F[k];delete N[L]}}delete i[R.id]}function D(R){for(const U in i){const O=i[U];for(const N in O){const L=O[N];if(L[R.id]===void 0)continue;const F=L[R.id];for(const k in F)h(F[k].object),delete F[k];delete L[R.id]}}}function _(R){for(const U in i){const O=i[U],N=R.isInstancedMesh===!0?R.id:0,L=O[N];if(L!==void 0){for(const F in L){const k=L[F];for(const X in k)h(k[X].object),delete k[X];delete L[F]}delete O[N],Object.keys(O).length===0&&delete i[U]}}}function T(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Rb(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ib(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Rn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const _=D===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Sn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Pn&&!_)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Rt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,maxSamples:S,samples:M}}function Db(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Xi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const p=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{const y=r?0:i,x=y*4;let b=g.clippingState||null;c.value=b,b=h(p,u,x,d);for(let S=0;S!==x;++S)b[S]=e[S];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,p){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,p!==!0||m===null){const g=d+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,b=d;x!==v;++x,b+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const Ki=4,Td=[.125,.215,.35,.446,.526,.582],us=20,Lb=256,yr=new Xh,Ad=new $t;let Bc=null,zc=0,kc=0,Vc=!1;const Nb=new E;class Cd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=Nb}=r;Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bc,zc,kc),this._renderer.xr.enabled=Vc,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Pi,format:Rn,colorSpace:Sa,depthBuffer:!1},s=Pd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fb(r)),this._blurMaterial=Ob(r,t,e),this._ggxMaterial=Ub(r,t,e)}return s}_compileMaterial(t){const e=new It(new ue,t);this._renderer.compile(e,yr)}_sceneToCubeUV(t,e,i,s,r){const c=new en(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Ad),f.toneMapping=ri,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new _e,new rn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let g=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,g=!0):(m.color.copy(Ad),g=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):b===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const S=this._cubeSize;Vs(s,b*S,x>2?S:0,S,S),f.setRenderTarget(s),g&&f.render(v,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ms||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Vs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,yr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,d=f*u,{_lodMax:p}=this,v=this._sizeLods[i],m=3*v*(i>p-Ki?i-p+Ki:0),g=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,Vs(r,m,g,3*v,2*v),s.setRenderTarget(r),s.render(a,yr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,Vs(t,m,g,3*v,2*v),s.setRenderTarget(t),s.render(a,yr)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Vt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[s];f.material=l;const u=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*us-1),v=r/p,m=isFinite(r)?1+Math.floor(h*v):us;m>us&&Rt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const g=[];let y=0;for(let D=0;D<us;++D){const _=D/v,T=Math.exp(-_*_/2);g.push(T),D===0?y+=T:D<m&&(y+=2*T)}for(let D=0;D<g.length;D++)g[D]=g[D]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-i;const b=this._sizeLods[s],S=3*b*(s>x-Ki?s-x+Ki:0),M=4*(this._cubeSize-b);Vs(e,S,M,3*b,2*b),c.setRenderTarget(e),c.render(f,yr)}}function Fb(n){const t=[],e=[],i=[];let s=n;const r=n-Ki+1+Td.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ki?c=Td[o-n+Ki-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,p=6,v=3,m=2,g=1,y=new Float32Array(v*p*d),x=new Float32Array(m*p*d),b=new Float32Array(g*p*d);for(let M=0;M<d;M++){const D=M%3*2/3-1,_=M>2?0:-1,T=[D,_,0,D+2/3,_,0,D+2/3,_+1,0,D,_,0,D+2/3,_+1,0,D,_+1,0];y.set(T,v*p*M),x.set(u,m*p*M);const P=[M,M,M,M,M,M];b.set(P,g*p*M)}const S=new ue;S.setAttribute("position",new gn(y,v)),S.setAttribute("uv",new gn(x,m)),S.setAttribute("faceIndex",new gn(b,g)),i.push(new It(S,null)),s>Ki&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Pd(n,t,e){const i=new oi(n,t,e);return i.texture.mapping=Va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ub(n,t,e){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ob(n,t,e){const i=new Float32Array(us),s=new E(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Rd(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Id(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nm extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new mm(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _e(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ai});r.uniforms.tEquirect.value=e;const o=new It(s,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=nn),new Dy(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function Bb(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===sc||d===rc)if(t.has(u)){const p=t.get(u).texture;return a(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const v=new Nm(p.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const d=u.mapping,p=d===sc||d===rc,v=d===ms||d===Js;if(p||v){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Cd(n)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return p&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new Cd(n)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===sc?u.mapping=ms:d===rc&&(u.mapping=Js),u}function c(u){let d=0;const p=6;for(let v=0;v<p;v++)u[v]!==void 0&&d++;return d===p}function l(u){const d=u.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function zb(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&nh("WebGLRenderer: "+i+" extension not supported."),s}}}function kb(n,t,e,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const d in u)t.update(u[d],n.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,p=f.attributes.position;let v=0;if(p===void 0)return;if(d!==null){const y=d.array;v=d.version;for(let x=0,b=y.length;x<b;x+=3){const S=y[x+0],M=y[x+1],D=y[x+2];u.push(S,M,M,D,D,S)}}else{const y=p.array;v=p.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const S=x+0,M=x+1,D=x+2;u.push(S,M,M,D,D,S)}}const m=new(p.count>=65535?hm:lm)(u,1);m.version=v;const g=r.get(f);g&&t.remove(g),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Vb(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*o),e.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Hb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gb(n,t,e){const i=new WeakMap,s=new Se;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let b=a.attributes.position.count*x,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const M=new Float32Array(b*S*4*f),D=new om(M,b,S,f);D.type=Pn,D.needsUpdate=!0;const _=x*4;for(let P=0;P<f;P++){const R=m[P],U=g[P],O=y[P],N=b*S*4*P;for(let L=0;L<R.count;L++){const F=L*_;d===!0&&(s.fromBufferAttribute(R,L),M[N+F+0]=s.x,M[N+F+1]=s.y,M[N+F+2]=s.z,M[N+F+3]=0),p===!0&&(s.fromBufferAttribute(U,L),M[N+F+4]=s.x,M[N+F+5]=s.y,M[N+F+6]=s.z,M[N+F+7]=0),v===!0&&(s.fromBufferAttribute(O,L),M[N+F+8]=s.x,M[N+F+9]=s.y,M[N+F+10]=s.z,M[N+F+11]=O.itemSize===4?s.w:1)}}u={count:f,texture:D,size:new ot(b,S)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];const p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Wb(n,t,e,i,s){let r=new WeakMap;function o(l){const h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const qb={[qp]:"LINEAR_TONE_MAPPING",[Xp]:"REINHARD_TONE_MAPPING",[$p]:"CINEON_TONE_MAPPING",[jp]:"ACES_FILMIC_TONE_MAPPING",[Kp]:"AGX_TONE_MAPPING",[Zp]:"NEUTRAL_TONE_MAPPING",[Yp]:"CUSTOM_TONE_MAPPING"};function Xb(n,t,e,i,s){const r=new oi(t,e,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new tr(t,e):void 0}),o=new oi(t,e,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),a=new ue;a.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new re([0,2,0,0,2,0],2));const c=new dy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new It(a,c),h=new Xh(-1,1,1,-1,0,1);let f=null,u=null,d=!1,p,v=null,m=[],g=!1;this.setSize=function(y,x){r.setSize(y,x),o.setSize(y,x);for(let b=0;b<m.length;b++){const S=m[b];S.setSize&&S.setSize(y,x)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;const x=r.width,b=r.height;for(let S=0;S<m.length;S++){const M=m[S];M.setSize&&M.setSize(x,b)}},this.begin=function(y,x){if(d||y.toneMapping===ri&&m.length===0)return!1;if(v=x,x!==null){const b=x.width,S=x.height;(r.width!==b||r.height!==S)&&this.setSize(b,S)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=ri,!0},this.hasRenderPass=function(){return g},this.end=function(y,x){y.toneMapping=p,d=!0;let b=r,S=o;for(let M=0;M<m.length;M++){const D=m[M];if(D.enabled!==!1&&(D.render(y,S,b,x),D.needsSwap!==!1)){const _=b;b=S,S=_}}if(f!==y.outputColorSpace||u!==y.toneMapping){f=y.outputColorSpace,u=y.toneMapping,c.defines={},oe.getTransfer(f)===fe&&(c.defines.SRGB_TRANSFER="");const M=qb[u];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(v),y.render(l,h),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Fm=new sn,hh=new tr(1,1),Um=new om,Om=new cv,Bm=new mm,Dd=[],Ld=[],Nd=new Float32Array(16),Fd=new Float32Array(9),Ud=new Float32Array(4);function cr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Dd[s];if(r===void 0&&(r=new Float32Array(s),Dd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ya(n,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $b(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function Yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function Kb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function Zb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),Ge(e,i)}}function Jb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Fd.set(i),n.uniformMatrix3fv(this.addr,!1,Fd),Ge(e,i)}}function Qb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;Nd.set(i),n.uniformMatrix4fv(this.addr,!1,Nd),Ge(e,i)}}function tw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ew(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function nw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function iw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function sw(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function rw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function ow(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function aw(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function cw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hh.compareFunction=e.isReversedDepthBuffer()?Nh:Lh,r=hh):r=Fm,e.setTexture2D(t||r,s)}function lw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Om,s)}function hw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Bm,s)}function uw(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Um,s)}function dw(n){switch(n){case 5126:return $b;case 35664:return jb;case 35665:return Yb;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return Qb;case 5124:case 35670:return tw;case 35667:case 35671:return ew;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return sw;case 36294:return rw;case 36295:return ow;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return uw}}function fw(n,t){n.uniform1fv(this.addr,t)}function pw(n,t){const e=cr(t,this.size,2);n.uniform2fv(this.addr,e)}function mw(n,t){const e=cr(t,this.size,3);n.uniform3fv(this.addr,e)}function gw(n,t){const e=cr(t,this.size,4);n.uniform4fv(this.addr,e)}function vw(n,t){const e=cr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function yw(n,t){const e=cr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _w(n,t){const e=cr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function xw(n,t){n.uniform1iv(this.addr,t)}function bw(n,t){n.uniform2iv(this.addr,t)}function ww(n,t){n.uniform3iv(this.addr,t)}function Sw(n,t){n.uniform4iv(this.addr,t)}function Mw(n,t){n.uniform1uiv(this.addr,t)}function Ew(n,t){n.uniform2uiv(this.addr,t)}function Tw(n,t){n.uniform3uiv(this.addr,t)}function Aw(n,t){n.uniform4uiv(this.addr,t)}function Cw(n,t,e){const i=this.cache,s=t.length,r=Ya(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=hh:o=Fm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Pw(n,t,e){const i=this.cache,s=t.length,r=Ya(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Om,r[o])}function Rw(n,t,e){const i=this.cache,s=t.length,r=Ya(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bm,r[o])}function Iw(n,t,e){const i=this.cache,s=t.length,r=Ya(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Um,r[o])}function Dw(n){switch(n){case 5126:return fw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return vw;case 35675:return yw;case 35676:return _w;case 5124:case 35670:return xw;case 35667:case 35671:return bw;case 35668:case 35672:return ww;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return Tw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Iw}}class Lw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=dw(e.type)}}class Nw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dw(e.type)}}class Fw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function Od(n,t){n.seq.push(t),n.map[t.id]=t}function Uw(n,t,e){const i=n.name,s=i.length;for(Hc.lastIndex=0;;){const r=Hc.exec(i),o=Hc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Od(e,l===void 0?new Lw(a,n,t):new Nw(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Fw(a),Od(e,f)),e=f}}}class fa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Uw(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Bd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ow=37297;let Bw=0;function zw(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const zd=new jt;function kw(n){oe._getMatrix(zd,oe.workingColorSpace,n);const t=`mat3( ${zd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Ma:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+zw(n.getShaderSource(t),a)}else return r}function Vw(n,t){const e=kw(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Hw={[qp]:"Linear",[Xp]:"Reinhard",[$p]:"Cineon",[jp]:"ACESFilmic",[Kp]:"AgX",[Zp]:"Neutral",[Yp]:"Custom"};function Gw(n,t){const e=Hw[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ho=new E;function Ww(){oe.getLuminanceCoefficients(Ho);const n=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function Xw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $w(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lr(n){return n!==""}function Vd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(n){return n.replace(jw,Kw)}const Yw=new Map;function Kw(n,t){let e=ee[t];if(e===void 0){const i=Yw.get(t);if(i!==void 0)e=ee[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return uh(e)}const Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(n){return n.replace(Zw,Jw)}function Jw(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Qw={[zr]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function tS(n){return Qw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eS={[ms]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function nS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":eS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const iS={[Js]:"ENVMAP_MODE_REFRACTION"};function sS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":iS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rS={[Wp]:"ENVMAP_BLENDING_MULTIPLY",[wg]:"ENVMAP_BLENDING_MIX",[Sg]:"ENVMAP_BLENDING_ADD"};function oS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":rS[n.combine]||"ENVMAP_BLENDING_NONE"}function aS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function cS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=tS(e),l=nS(e),h=sS(e),f=oS(e),u=aS(e),d=qw(e),p=Xw(r),v=s.createProgram();let m,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Lr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Lr).join(`
`),g.length>0&&(g+=`
`)):(m=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),g=[Wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?ee.tonemapping_pars_fragment:"",e.toneMapping!==ri?Gw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Vw("linearToOutputTexel",e.outputColorSpace),Ww(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=uh(o),o=Vd(o,e),o=Hd(o,e),a=uh(a),a=Vd(a,e),a=Hd(a,e),o=Gd(o),a=Gd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=y+m+o,b=y+g+a,S=Bd(s,s.VERTEX_SHADER,x),M=Bd(s,s.FRAGMENT_SHADER,b);s.attachShader(v,S),s.attachShader(v,M),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(R){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(M)||"",L=U.trim(),F=O.trim(),k=N.trim();let X=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,M);else{const st=kd(s,S,"vertex"),at=kd(s,M,"fragment");Vt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+st+`
`+at)}else L!==""?Rt("WebGLProgram: Program Info Log:",L):(F===""||k==="")&&($=!1);$&&(R.diagnostics={runnable:X,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:g}})}s.deleteShader(S),s.deleteShader(M),_=new fa(s,v),T=$w(s,v)}let _;this.getUniforms=function(){return _===void 0&&D(this),_};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,Ow)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bw++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=M,this}let lS=0;class hS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new uS(t),e.set(t,i)),i}}class uS{constructor(t){this.id=lS++,this.code=t,this.usedTimes=0}}function dS(n){return n===gs||n===xa||n===ba}function fS(n,t,e,i,s,r){const o=new Oh,a=new hS,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,P,R,U,O){const N=R.fog,L=U.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=t.get(_.envMap||F,k),$=X&&X.mapping===Va?X.image.height:null,st=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Rt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const at=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=at!==void 0?at.length:0;let zt=0;L.morphAttributes.position!==void 0&&(zt=1),L.morphAttributes.normal!==void 0&&(zt=2),L.morphAttributes.color!==void 0&&(zt=3);let Jt,kt,K,gt;if(st){const Kt=ti[st];Jt=Kt.vertexShader,kt=Kt.fragmentShader}else Jt=_.vertexShader,kt=_.fragmentShader,a.update(_),K=a.getVertexShaderID(_),gt=a.getFragmentShaderID(_);const lt=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Ot=U.isInstancedMesh===!0,Bt=U.isBatchedMesh===!0,ae=!!_.map,Ht=!!_.matcap,tt=!!X,rt=!!_.aoMap,et=!!_.lightMap,xt=!!_.bumpMap,vt=!!_.normalMap,Gt=!!_.displacementMap,B=!!_.emissiveMap,qt=!!_.metalnessMap,Dt=!!_.roughnessMap,Wt=_.anisotropy>0,ct=_.clearcoat>0,de=_.dispersion>0,I=_.iridescence>0,w=_.sheen>0,H=_.transmission>0,Z=Wt&&!!_.anisotropyMap,nt=ct&&!!_.clearcoatMap,ht=ct&&!!_.clearcoatNormalMap,ft=ct&&!!_.clearcoatRoughnessMap,j=I&&!!_.iridescenceMap,J=I&&!!_.iridescenceThicknessMap,wt=w&&!!_.sheenColorMap,Et=w&&!!_.sheenRoughnessMap,pt=!!_.specularMap,ut=!!_.specularColorMap,Xt=!!_.specularIntensityMap,Qt=H&&!!_.transmissionMap,le=H&&!!_.thicknessMap,z=!!_.gradientMap,dt=!!_.alphaMap,Y=_.alphaTest>0,St=!!_.alphaHash,mt=!!_.extensions;let it=ri;_.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(it=n.toneMapping);const Nt={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:Jt,fragmentShader:kt,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:gt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Bt,batchingColor:Bt&&U._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&U.instanceColor!==null,instancingMorph:Ot&&U.morphTexture!==null,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ae,matcap:Ht,envMap:tt,envMapMode:tt&&X.mapping,envMapCubeUVHeight:$,aoMap:rt,lightMap:et,bumpMap:xt,normalMap:vt,displacementMap:Gt,emissiveMap:B,normalMapObjectSpace:vt&&_.normalMapType===Cg,normalMapTangentSpace:vt&&_.normalMapType===th,packedNormalMap:vt&&_.normalMapType===th&&dS(_.normalMap.format),metalnessMap:qt,roughnessMap:Dt,anisotropy:Wt,anisotropyMap:Z,clearcoat:ct,clearcoatMap:nt,clearcoatNormalMap:ht,clearcoatRoughnessMap:ft,dispersion:de,iridescence:I,iridescenceMap:j,iridescenceThicknessMap:J,sheen:w,sheenColorMap:wt,sheenRoughnessMap:Et,specularMap:pt,specularColorMap:ut,specularIntensityMap:Xt,transmission:H,transmissionMap:Qt,thicknessMap:le,gradientMap:z,opaque:_.transparent===!1&&_.blending===js&&_.alphaToCoverage===!1,alphaMap:dt,alphaTest:Y,alphaHash:St,combine:_.combine,mapUv:ae&&p(_.map.channel),aoMapUv:rt&&p(_.aoMap.channel),lightMapUv:et&&p(_.lightMap.channel),bumpMapUv:xt&&p(_.bumpMap.channel),normalMapUv:vt&&p(_.normalMap.channel),displacementMapUv:Gt&&p(_.displacementMap.channel),emissiveMapUv:B&&p(_.emissiveMap.channel),metalnessMapUv:qt&&p(_.metalnessMap.channel),roughnessMapUv:Dt&&p(_.roughnessMap.channel),anisotropyMapUv:Z&&p(_.anisotropyMap.channel),clearcoatMapUv:nt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Et&&p(_.sheenRoughnessMap.channel),specularMapUv:pt&&p(_.specularMap.channel),specularColorMapUv:ut&&p(_.specularColorMap.channel),specularIntensityMapUv:Xt&&p(_.specularIntensityMap.channel),transmissionMapUv:Qt&&p(_.transmissionMap.channel),thicknessMapUv:le&&p(_.thicknessMap.channel),alphaMapUv:dt&&p(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(vt||Wt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(ae||dt),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pt,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:zt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,decodeVideoTexture:ae&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:B&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===cn,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||Bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(T,_),y(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function x(_){const T=d[_.type];let P;if(T){const R=ti[T];P=ly.clone(R.uniforms)}else P=_.uniforms;return P}function b(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new cS(n,T,_,s),l.push(P),h.set(T,P)),P}function S(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function D(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:x,acquireProgram:b,releaseProgram:S,releaseShaderCache:M,programs:l,dispose:D}}function pS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function mS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function qd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,v,m,g){let y=n[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},n[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=p,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=m,y.group=g),t++,y}function c(u,d,p,v,m,g){const y=a(u,d,p,v,m,g);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):e.push(y)}function l(u,d,p,v,m,g){const y=a(u,d,p,v,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||mS),i.length>1&&i.sort(d||qd),s.length>1&&s.sort(d||qd)}function f(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function gS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Xd,n.set(i,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function vS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new $t};break;case"SpotLight":e={position:new E,direction:new E,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new E,halfWidth:new E,halfHeight:new E};break}return n[t.id]=e,e}}}function yS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _S=0;function xS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function bS(n){const t=new vS,e=yS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new E);const s=new E,r=new ne,o=new ne;function a(l){let h=0,f=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,y=0,x=0,b=0,S=0,M=0,D=0;l.sort(xS);for(let T=0,P=l.length;T<P;T++){const R=l[T],U=R.color,O=R.intensity,N=R.distance;let L=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===gs?L=R.shadow.map.texture:L=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*O,f+=U.g*O,u+=U.b*O;else if(R.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(R.sh.coefficients[F],O);D++}else if(R.isDirectionalLight){const F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,X=e.get(R);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=L,i.directionalShadowMatrix[d]=R.shadow.matrix,y++}i.directional[d]=F,d++}else if(R.isSpotLight){const F=t.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(U).multiplyScalar(O),F.distance=N,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,i.spot[v]=F;const k=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,k.updateMatrices(R),R.castShadow&&M++),i.spotLightMatrix[v]=k.matrix,R.castShadow){const X=e.get(R);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=L,b++}v++}else if(R.isRectAreaLight){const F=t.get(R);F.color.copy(U).multiplyScalar(O),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=F,m++}else if(R.isPointLight){const F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){const k=R.shadow,X=e.get(R);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,X.shadowCameraNear=k.camera.near,X.shadowCameraFar=k.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=L,i.pointShadowMatrix[p]=R.shadow.matrix,x++}i.point[p]=F,p++}else if(R.isHemisphereLight){const F=t.get(R);F.skyColor.copy(R.color).multiplyScalar(O),F.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[g]=F,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==d||_.pointLength!==p||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==y||_.numPointShadows!==x||_.numSpotShadows!==b||_.numSpotMaps!==S||_.numLightProbes!==D)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=b+S-M,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=D,_.directionalLength=d,_.pointLength=p,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=y,_.numPointShadows=x,_.numSpotShadows=b,_.numSpotMaps=S,_.numLightProbes=D,i.version=_S++)}function c(l,h){let f=0,u=0,d=0,p=0,v=0;const m=h.matrixWorldInverse;for(let g=0,y=l.length;g<y;g++){const x=l[g];if(x.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(x.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function $d(n){const t=new bS(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function wS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new $d(n),t.set(s,[a])):r>=o.length?(a=new $d(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const SS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ES=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],TS=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],jd=new ne,_r=new E,Gc=new E;function AS(n,t,e){let i=new Ga;const s=new ot,r=new ot,o=new Se,a=new fy,c=new py,l={},h=e.maxTextureSize,f={[Zi]:ln,[ln]:Zi,[cn]:cn},u=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:SS,fragmentShader:MS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const p=new ue;p.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let g=this.type;this.render=function(M,D,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===ig&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zr);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=g!==this.type;O&&D.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(L=>L.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,L=M.length;N<L;N++){const F=M[N],k=F.shadow;if(k===void 0){Rt("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const X=k.getFrameExtents();s.multiply(X),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,k.mapSize.y=r.y));const $=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=$,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ir){if(F.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new oi(s.x,s.y,{format:gs,type:Pi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new tr(s.x,s.y,Pn),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=Ri,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=je,k.map.depthTexture.magFilter=je}else F.isPointLight?(k.map=new Nm(s.x),k.map.depthTexture=new Cv(s.x,ai)):(k.map=new oi(s.x,s.y),k.map.depthTexture=new tr(s.x,s.y,ai)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=Ri,this.type===zr?(k.map.depthTexture.compareFunction=$?Nh:Lh,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=je,k.map.depthTexture.magFilter=je);k.camera.updateProjectionMatrix()}const st=k.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<st;at++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,at),n.clear();else{at===0&&(n.setRenderTarget(k.map),n.clear());const Q=k.getViewport(at);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),U.viewport(o)}if(F.isPointLight){const Q=k.camera,zt=k.matrix,Jt=F.distance||Q.far;Jt!==Q.far&&(Q.far=Jt,Q.updateProjectionMatrix()),_r.setFromMatrixPosition(F.matrixWorld),Q.position.copy(_r),Gc.copy(Q.position),Gc.add(ES[at]),Q.up.copy(TS[at]),Q.lookAt(Gc),Q.updateMatrixWorld(),zt.makeTranslation(-_r.x,-_r.y,-_r.z),jd.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(jd,Q.coordinateSystem,Q.reversedDepth)}else k.updateMatrices(F);i=k.getFrustum(),b(D,_,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Ir&&y(k,_),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,R)};function y(M,D){const _=t.update(v);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new oi(s.x,s.y,{format:gs,type:Pi})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(D,null,_,u,v,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(D,null,_,d,v,null)}function x(M,D,_,T){let P=null;const R=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)P=R;else if(P=_.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const U=P.uuid,O=D.uuid;let N=l[U];N===void 0&&(N={},l[U]=N);let L=N[O];L===void 0&&(L=P.clone(),N[O]=L,D.addEventListener("dispose",S)),P=L}if(P.visible=D.visible,P.wireframe=D.wireframe,T===Ir?P.side=D.shadowSide!==null?D.shadowSide:D.side:P.side=D.shadowSide!==null?D.shadowSide:f[D.side],P.alphaMap=D.alphaMap,P.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,P.map=D.map,P.clipShadows=D.clipShadows,P.clippingPlanes=D.clippingPlanes,P.clipIntersection=D.clipIntersection,P.displacementMap=D.displacementMap,P.displacementScale=D.displacementScale,P.displacementBias=D.displacementBias,P.wireframeLinewidth=D.wireframeLinewidth,P.linewidth=D.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=n.properties.get(P);U.light=_}return P}function b(M,D,_,T,P){if(M.visible===!1)return;if(M.layers.test(D.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Ir)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);const O=t.update(M),N=M.material;if(Array.isArray(N)){const L=O.groups;for(let F=0,k=L.length;F<k;F++){const X=L[F],$=N[X.materialIndex];if($&&$.visible){const st=x(M,$,T,P);M.onBeforeShadow(n,M,D,_,O,st,X),n.renderBufferDirect(_,null,O,st,M,X),M.onAfterShadow(n,M,D,_,O,st,X)}}}else if(N.visible){const L=x(M,N,T,P);M.onBeforeShadow(n,M,D,_,O,L,null),n.renderBufferDirect(_,null,O,L,M,null),M.onAfterShadow(n,M,D,_,O,L,null)}}const U=M.children;for(let O=0,N=U.length;O<N;O++)b(U[O],D,_,T,P)}function S(M){M.target.removeEventListener("dispose",S);for(const _ in l){const T=l[_],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function CS(n,t){function e(){let z=!1;const dt=new Se;let Y=null;const St=new Se(0,0,0,0);return{setMask:function(mt){Y!==mt&&!z&&(n.colorMask(mt,mt,mt,mt),Y=mt)},setLocked:function(mt){z=mt},setClear:function(mt,it,Nt,Kt,Ne){Ne===!0&&(mt*=Kt,it*=Kt,Nt*=Kt),dt.set(mt,it,Nt,Kt),St.equals(dt)===!1&&(n.clearColor(mt,it,Nt,Kt),St.copy(dt))},reset:function(){z=!1,Y=null,St.set(-1,0,0,0)}}}function i(){let z=!1,dt=!1,Y=null,St=null,mt=null;return{setReversed:function(it){if(dt!==it){const Nt=t.get("EXT_clip_control");it?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),dt=it;const Kt=mt;mt=null,this.setClear(Kt)}},getReversed:function(){return dt},setTest:function(it){it?lt(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(it){Y!==it&&!z&&(n.depthMask(it),Y=it)},setFunc:function(it){if(dt&&(it=kg[it]),St!==it){switch(it){case pl:n.depthFunc(n.NEVER);break;case ml:n.depthFunc(n.ALWAYS);break;case gl:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case vl:n.depthFunc(n.EQUAL);break;case yl:n.depthFunc(n.GEQUAL);break;case _l:n.depthFunc(n.GREATER);break;case xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=it}},setLocked:function(it){z=it},setClear:function(it){mt!==it&&(mt=it,dt&&(it=1-it),n.clearDepth(it))},reset:function(){z=!1,Y=null,St=null,mt=null,dt=!1}}}function s(){let z=!1,dt=null,Y=null,St=null,mt=null,it=null,Nt=null,Kt=null,Ne=null;return{setTest:function(me){z||(me?lt(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(me){dt!==me&&!z&&(n.stencilMask(me),dt=me)},setFunc:function(me,hi,Xn){(Y!==me||St!==hi||mt!==Xn)&&(n.stencilFunc(me,hi,Xn),Y=me,St=hi,mt=Xn)},setOp:function(me,hi,Xn){(it!==me||Nt!==hi||Kt!==Xn)&&(n.stencilOp(me,hi,Xn),it=me,Nt=hi,Kt=Xn)},setLocked:function(me){z=me},setClear:function(me){Ne!==me&&(n.clearStencil(me),Ne=me)},reset:function(){z=!1,dt=null,Y=null,St=null,mt=null,it=null,Nt=null,Kt=null,Ne=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u={},d=new WeakMap,p=[],v=null,m=!1,g=null,y=null,x=null,b=null,S=null,M=null,D=null,_=new $t(0,0,0),T=0,P=!1,R=null,U=null,O=null,N=null,L=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),k=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=X>=2);let st=null,at={};const Q=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),Jt=new Se().fromArray(Q),kt=new Se().fromArray(zt);function K(z,dt,Y,St){const mt=new Uint8Array(4),it=n.createTexture();n.bindTexture(z,it),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<Y;Nt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(dt+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return it}const gt={};gt[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(Zs),xt(!1),vt(bu),lt(n.CULL_FACE),rt(Ai);function lt(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function Pt(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function Ot(z,dt){return u[z]!==dt?(n.bindFramebuffer(z,dt),u[z]=dt,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Bt(z,dt){let Y=p,St=!1;if(z){Y=d.get(dt),Y===void 0&&(Y=[],d.set(dt,Y));const mt=z.textures;if(Y.length!==mt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let it=0,Nt=mt.length;it<Nt;it++)Y[it]=n.COLOR_ATTACHMENT0+it;Y.length=mt.length,St=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,St=!0);St&&n.drawBuffers(Y)}function ae(z){return v!==z?(n.useProgram(z),v=z,!0):!1}const Ht={[hs]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[og]:n.FUNC_REVERSE_SUBTRACT};Ht[ag]=n.MIN,Ht[cg]=n.MAX;const tt={[lg]:n.ZERO,[hg]:n.ONE,[ug]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[vg]:n.SRC_ALPHA_SATURATE,[mg]:n.DST_COLOR,[fg]:n.DST_ALPHA,[dg]:n.ONE_MINUS_SRC_COLOR,[fl]:n.ONE_MINUS_SRC_ALPHA,[gg]:n.ONE_MINUS_DST_COLOR,[pg]:n.ONE_MINUS_DST_ALPHA,[yg]:n.CONSTANT_COLOR,[_g]:n.ONE_MINUS_CONSTANT_COLOR,[xg]:n.CONSTANT_ALPHA,[bg]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(z,dt,Y,St,mt,it,Nt,Kt,Ne,me){if(z===Ai){m===!0&&(Pt(n.BLEND),m=!1);return}if(m===!1&&(lt(n.BLEND),m=!0),z!==sg){if(z!==g||me!==P){if((y!==hs||S!==hs)&&(n.blendEquation(n.FUNC_ADD),y=hs,S=hs),me)switch(z){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFunc(n.ONE,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Vt("WebGLState: Invalid blending: ",z);break}else switch(z){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ul:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wu:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",z);break}x=null,b=null,M=null,D=null,_.set(0,0,0),T=0,g=z,P=me}return}mt=mt||dt,it=it||Y,Nt=Nt||St,(dt!==y||mt!==S)&&(n.blendEquationSeparate(Ht[dt],Ht[mt]),y=dt,S=mt),(Y!==x||St!==b||it!==M||Nt!==D)&&(n.blendFuncSeparate(tt[Y],tt[St],tt[it],tt[Nt]),x=Y,b=St,M=it,D=Nt),(Kt.equals(_)===!1||Ne!==T)&&(n.blendColor(Kt.r,Kt.g,Kt.b,Ne),_.copy(Kt),T=Ne),g=z,P=!1}function et(z,dt){z.side===cn?Pt(n.CULL_FACE):lt(n.CULL_FACE);let Y=z.side===ln;dt&&(Y=!Y),xt(Y),z.blending===js&&z.transparent===!1?rt(Ai):rt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const St=z.stencilWrite;a.setTest(St),St&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),B(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(z){R!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),R=z)}function vt(z){z!==eg?(lt(n.CULL_FACE),z!==U&&(z===bu?n.cullFace(n.BACK):z===ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),U=z}function Gt(z){z!==O&&(k&&n.lineWidth(z),O=z)}function B(z,dt,Y){z?(lt(n.POLYGON_OFFSET_FILL),(N!==dt||L!==Y)&&(N=dt,L=Y,o.getReversed()&&(dt=-dt),n.polygonOffset(dt,Y))):Pt(n.POLYGON_OFFSET_FILL)}function qt(z){z?lt(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function Dt(z){z===void 0&&(z=n.TEXTURE0+F-1),st!==z&&(n.activeTexture(z),st=z)}function Wt(z,dt,Y){Y===void 0&&(st===null?Y=n.TEXTURE0+F-1:Y=st);let St=at[Y];St===void 0&&(St={type:void 0,texture:void 0},at[Y]=St),(St.type!==z||St.texture!==dt)&&(st!==Y&&(n.activeTexture(Y),st=Y),n.bindTexture(z,dt||gt[z]),St.type=z,St.texture=dt)}function ct(){const z=at[st];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function de(){try{n.compressedTexImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function w(){try{n.texSubImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function H(){try{n.texSubImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function nt(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function ht(){try{n.texStorage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function ft(){try{n.texStorage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function j(){try{n.texImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function J(){try{n.texImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function wt(z){return f[z]!==void 0?f[z]:n.getParameter(z)}function Et(z,dt){f[z]!==dt&&(n.pixelStorei(z,dt),f[z]=dt)}function pt(z){Jt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Jt.copy(z))}function ut(z){kt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),kt.copy(z))}function Xt(z,dt){let Y=l.get(dt);Y===void 0&&(Y=new WeakMap,l.set(dt,Y));let St=Y.get(z);St===void 0&&(St=n.getUniformBlockIndex(dt,z.name),Y.set(z,St))}function Qt(z,dt){const St=l.get(dt).get(z);c.get(dt)!==St&&(n.uniformBlockBinding(dt,St,z.__bindingPointIndex),c.set(dt,St))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},st=null,at={},u={},d=new WeakMap,p=[],v=null,m=!1,g=null,y=null,x=null,b=null,S=null,M=null,D=null,_=new $t(0,0,0),T=0,P=!1,R=null,U=null,O=null,N=null,L=null,Jt.set(0,0,n.canvas.width,n.canvas.height),kt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Pt,bindFramebuffer:Ot,drawBuffers:Bt,useProgram:ae,setBlending:rt,setMaterial:et,setFlipSided:xt,setCullFace:vt,setLineWidth:Gt,setPolygonOffset:B,setScissorTest:qt,activeTexture:Dt,bindTexture:Wt,unbindTexture:ct,compressedTexImage2D:de,compressedTexImage3D:I,texImage2D:j,texImage3D:J,pixelStorei:Et,getParameter:wt,updateUBOMapping:Xt,uniformBlockBinding:Qt,texStorage2D:ht,texStorage3D:ft,texSubImage2D:w,texSubImage3D:H,compressedTexSubImage2D:Z,compressedTexSubImage3D:nt,scissor:pt,viewport:ut,reset:le}}function PS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,w){return p?new OffscreenCanvas(I,w):Kr("canvas")}function m(I,w,H){let Z=1;const nt=de(I);if((nt.width>H||nt.height>H)&&(Z=H/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ht=Math.floor(Z*nt.width),ft=Math.floor(Z*nt.height);u===void 0&&(u=v(ht,ft));const j=w?v(ht,ft):u;return j.width=ht,j.height=ft,j.getContext("2d").drawImage(I,0,0,ht,ft),Rt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ht+"x"+ft+")."),j}else return"data"in I&&Rt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function g(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(I,w,H,Z,nt,ht=!1){if(I!==null){if(n[I]!==void 0)return n[I];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ft;Z&&(ft=t.get("EXT_texture_norm16"),ft||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=w;if(w===n.RED&&(H===n.FLOAT&&(j=n.R32F),H===n.HALF_FLOAT&&(j=n.R16F),H===n.UNSIGNED_BYTE&&(j=n.R8),H===n.UNSIGNED_SHORT&&ft&&(j=ft.R16_EXT),H===n.SHORT&&ft&&(j=ft.R16_SNORM_EXT)),w===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.R8UI),H===n.UNSIGNED_SHORT&&(j=n.R16UI),H===n.UNSIGNED_INT&&(j=n.R32UI),H===n.BYTE&&(j=n.R8I),H===n.SHORT&&(j=n.R16I),H===n.INT&&(j=n.R32I)),w===n.RG&&(H===n.FLOAT&&(j=n.RG32F),H===n.HALF_FLOAT&&(j=n.RG16F),H===n.UNSIGNED_BYTE&&(j=n.RG8),H===n.UNSIGNED_SHORT&&ft&&(j=ft.RG16_EXT),H===n.SHORT&&ft&&(j=ft.RG16_SNORM_EXT)),w===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RG8UI),H===n.UNSIGNED_SHORT&&(j=n.RG16UI),H===n.UNSIGNED_INT&&(j=n.RG32UI),H===n.BYTE&&(j=n.RG8I),H===n.SHORT&&(j=n.RG16I),H===n.INT&&(j=n.RG32I)),w===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGB8UI),H===n.UNSIGNED_SHORT&&(j=n.RGB16UI),H===n.UNSIGNED_INT&&(j=n.RGB32UI),H===n.BYTE&&(j=n.RGB8I),H===n.SHORT&&(j=n.RGB16I),H===n.INT&&(j=n.RGB32I)),w===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),H===n.UNSIGNED_INT&&(j=n.RGBA32UI),H===n.BYTE&&(j=n.RGBA8I),H===n.SHORT&&(j=n.RGBA16I),H===n.INT&&(j=n.RGBA32I)),w===n.RGB&&(H===n.UNSIGNED_SHORT&&ft&&(j=ft.RGB16_EXT),H===n.SHORT&&ft&&(j=ft.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),w===n.RGBA){const J=ht?Ma:oe.getTransfer(nt);H===n.FLOAT&&(j=n.RGBA32F),H===n.HALF_FLOAT&&(j=n.RGBA16F),H===n.UNSIGNED_BYTE&&(j=J===fe?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&ft&&(j=ft.RGBA16_EXT),H===n.SHORT&&ft&&(j=ft.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(I,w){let H;return I?w===null||w===ai||w===jr?H=n.DEPTH24_STENCIL8:w===Pn?H=n.DEPTH32F_STENCIL8:w===$r&&(H=n.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ai||w===jr?H=n.DEPTH_COMPONENT24:w===Pn?H=n.DEPTH_COMPONENT32F:w===$r&&(H=n.DEPTH_COMPONENT16),H}function M(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==je&&I.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function D(I){const w=I.target;w.removeEventListener("dispose",D),T(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function _(I){const w=I.target;w.removeEventListener("dispose",_),R(w)}function T(I){const w=i.get(I);if(w.__webglInit===void 0)return;const H=I.source,Z=d.get(H);if(Z){const nt=Z[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(I),Object.keys(Z).length===0&&d.delete(H)}i.remove(I)}function P(I){const w=i.get(I);n.deleteTexture(w.__webglTexture);const H=I.source,Z=d.get(H);delete Z[w.__cacheKey],o.memory.textures--}function R(I){const w=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let nt=0;nt<w.__webglFramebuffer[Z].length;nt++)n.deleteFramebuffer(w.__webglFramebuffer[Z][nt]);else n.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)n.deleteFramebuffer(w.__webglFramebuffer[Z]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=I.textures;for(let Z=0,nt=H.length;Z<nt;Z++){const ht=i.get(H[Z]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(H[Z])}i.remove(I)}let U=0;function O(){U=0}function N(){return U}function L(I){U=I}function F(){const I=U;return I>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function k(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function X(I,w){const H=i.get(I);if(I.isVideoTexture&&Wt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){const Z=I.image;if(Z===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(H,I,w);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+w)}function $(I,w){const H=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Pt(H,I,w);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+w)}function st(I,w){const H=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Pt(H,I,w);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+w)}function at(I,w){const H=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){Ot(H,I,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+w)}const Q={[bl]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[wl]:n.MIRRORED_REPEAT},zt={[je]:n.NEAREST,[Eg]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[oc]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},Jt={[Pg]:n.NEVER,[Ng]:n.ALWAYS,[Rg]:n.LESS,[Lh]:n.LEQUAL,[Ig]:n.EQUAL,[Nh]:n.GEQUAL,[Dg]:n.GREATER,[Lg]:n.NOTEQUAL};function kt(I,w){if(w.type===Pn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===nn||w.magFilter===oc||w.magFilter===uo||w.magFilter===fs||w.minFilter===nn||w.minFilter===oc||w.minFilter===uo||w.minFilter===fs)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Q[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Q[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Q[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,zt[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,zt[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Jt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===je||w.minFilter!==uo&&w.minFilter!==fs||w.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function K(I,w){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",D));const Z=w.source;let nt=d.get(Z);nt===void 0&&(nt={},d.set(Z,nt));const ht=k(w);if(ht!==I.__cacheKey){nt[ht]===void 0&&(nt[ht]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),nt[ht].usedTimes++;const ft=nt[I.__cacheKey];ft!==void 0&&(nt[I.__cacheKey].usedTimes--,ft.usedTimes===0&&P(w)),I.__cacheKey=ht,I.__webglTexture=nt[ht].texture}return H}function gt(I,w,H){return Math.floor(Math.floor(I/H)/w)}function lt(I,w,H,Z){const ht=I.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,H,Z,w.data);else{ht.sort((Et,pt)=>Et.start-pt.start);let ft=0;for(let Et=1;Et<ht.length;Et++){const pt=ht[ft],ut=ht[Et],Xt=pt.start+pt.count,Qt=gt(ut.start,w.width,4),le=gt(pt.start,w.width,4);ut.start<=Xt+1&&Qt===le&&gt(ut.start+ut.count-1,w.width,4)===Qt?pt.count=Math.max(pt.count,ut.start+ut.count-pt.start):(++ft,ht[ft]=ut)}ht.length=ft+1;const j=e.getParameter(n.UNPACK_ROW_LENGTH),J=e.getParameter(n.UNPACK_SKIP_PIXELS),wt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Et=0,pt=ht.length;Et<pt;Et++){const ut=ht[Et],Xt=Math.floor(ut.start/4),Qt=Math.ceil(ut.count/4),le=Xt%w.width,z=Math.floor(Xt/w.width),dt=Qt,Y=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,le),e.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,le,z,dt,Y,H,Z,w.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,J),e.pixelStorei(n.UNPACK_SKIP_ROWS,wt)}}function Pt(I,w,H){let Z=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=n.TEXTURE_3D);const nt=K(I,w),ht=w.source;e.bindTexture(Z,I.__webglTexture,n.TEXTURE0+H);const ft=i.get(ht);if(ht.version!==ft.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Y=oe.getPrimaries(oe.workingColorSpace),St=w.colorSpace===$i?null:oe.getPrimaries(w.colorSpace),mt=w.colorSpace===$i||Y===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment);let J=m(w.image,!1,s.maxTextureSize);J=ct(w,J);const wt=r.convert(w.format,w.colorSpace),Et=r.convert(w.type);let pt=b(w.internalFormat,wt,Et,w.normalized,w.colorSpace,w.isVideoTexture);kt(Z,w);let ut;const Xt=w.mipmaps,Qt=w.isVideoTexture!==!0,le=ft.__version===void 0||nt===!0,z=ht.dataReady,dt=M(w,J);if(w.isDepthTexture)pt=S(w.format===ps,w.type),le&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,pt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,pt,J.width,J.height,0,wt,Et,null));else if(w.isDataTexture)if(Xt.length>0){Qt&&le&&e.texStorage2D(n.TEXTURE_2D,dt,pt,Xt[0].width,Xt[0].height);for(let Y=0,St=Xt.length;Y<St;Y++)ut=Xt[Y],Qt?z&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,ut.width,ut.height,wt,Et,ut.data):e.texImage2D(n.TEXTURE_2D,Y,pt,ut.width,ut.height,0,wt,Et,ut.data);w.generateMipmaps=!1}else Qt?(le&&e.texStorage2D(n.TEXTURE_2D,dt,pt,J.width,J.height),z&&lt(w,J,wt,Et)):e.texImage2D(n.TEXTURE_2D,0,pt,J.width,J.height,0,wt,Et,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Qt&&le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,pt,Xt[0].width,Xt[0].height,J.depth);for(let Y=0,St=Xt.length;Y<St;Y++)if(ut=Xt[Y],w.format!==Rn)if(wt!==null)if(Qt){if(z)if(w.layerUpdates.size>0){const mt=Ed(ut.width,ut.height,w.format,w.type);for(const it of w.layerUpdates){const Nt=ut.data.subarray(it*mt/ut.data.BYTES_PER_ELEMENT,(it+1)*mt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,it,ut.width,ut.height,1,wt,Nt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,J.depth,wt,ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,pt,ut.width,ut.height,J.depth,0,ut.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,J.depth,wt,Et,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,pt,ut.width,ut.height,J.depth,0,wt,Et,ut.data)}else{Qt&&le&&e.texStorage2D(n.TEXTURE_2D,dt,pt,Xt[0].width,Xt[0].height);for(let Y=0,St=Xt.length;Y<St;Y++)ut=Xt[Y],w.format!==Rn?wt!==null?Qt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ut.width,ut.height,wt,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,pt,ut.width,ut.height,0,ut.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?z&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,ut.width,ut.height,wt,Et,ut.data):e.texImage2D(n.TEXTURE_2D,Y,pt,ut.width,ut.height,0,wt,Et,ut.data)}else if(w.isDataArrayTexture)if(Qt){if(le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,pt,J.width,J.height,J.depth),z)if(w.layerUpdates.size>0){const Y=Ed(J.width,J.height,w.format,w.type);for(const St of w.layerUpdates){const mt=J.data.subarray(St*Y/J.data.BYTES_PER_ELEMENT,(St+1)*Y/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,St,J.width,J.height,1,wt,Et,mt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,wt,Et,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,pt,J.width,J.height,J.depth,0,wt,Et,J.data);else if(w.isData3DTexture)Qt?(le&&e.texStorage3D(n.TEXTURE_3D,dt,pt,J.width,J.height,J.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,wt,Et,J.data)):e.texImage3D(n.TEXTURE_3D,0,pt,J.width,J.height,J.depth,0,wt,Et,J.data);else if(w.isFramebufferTexture){if(le)if(Qt)e.texStorage2D(n.TEXTURE_2D,dt,pt,J.width,J.height);else{let Y=J.width,St=J.height;for(let mt=0;mt<dt;mt++)e.texImage2D(n.TEXTURE_2D,mt,pt,Y,St,0,wt,Et,null),Y>>=1,St>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in n){const Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),J.parentNode!==Y){Y.appendChild(J),f.add(w),Y.onpaint=Kt=>{const Ne=Kt.changedElements;for(const me of f)Ne.includes(me.image)&&(me.needsUpdate=!0)},Y.requestPaint();return}const St=0,mt=n.RGBA,it=n.RGBA,Nt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,St,mt,it,Nt,J),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Qt&&le){const Y=de(Xt[0]);e.texStorage2D(n.TEXTURE_2D,dt,pt,Y.width,Y.height)}for(let Y=0,St=Xt.length;Y<St;Y++)ut=Xt[Y],Qt?z&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,wt,Et,ut):e.texImage2D(n.TEXTURE_2D,Y,pt,wt,Et,ut);w.generateMipmaps=!1}else if(Qt){if(le){const Y=de(J);e.texStorage2D(n.TEXTURE_2D,dt,pt,Y.width,Y.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,Et,J)}else e.texImage2D(n.TEXTURE_2D,0,pt,wt,Et,J);g(w)&&y(Z),ft.__version=ht.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ot(I,w,H){if(w.image.length!==6)return;const Z=K(I,w),nt=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+H);const ht=i.get(nt);if(nt.version!==ht.__version||Z===!0){e.activeTexture(n.TEXTURE0+H);const ft=oe.getPrimaries(oe.workingColorSpace),j=w.colorSpace===$i?null:oe.getPrimaries(w.colorSpace),J=w.colorSpace===$i||ft===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const wt=w.isCompressedTexture||w.image[0].isCompressedTexture,Et=w.image[0]&&w.image[0].isDataTexture,pt=[];for(let it=0;it<6;it++)!wt&&!Et?pt[it]=m(w.image[it],!0,s.maxCubemapSize):pt[it]=Et?w.image[it].image:w.image[it],pt[it]=ct(w,pt[it]);const ut=pt[0],Xt=r.convert(w.format,w.colorSpace),Qt=r.convert(w.type),le=b(w.internalFormat,Xt,Qt,w.normalized,w.colorSpace),z=w.isVideoTexture!==!0,dt=ht.__version===void 0||Z===!0,Y=nt.dataReady;let St=M(w,ut);kt(n.TEXTURE_CUBE_MAP,w);let mt;if(wt){z&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,le,ut.width,ut.height);for(let it=0;it<6;it++){mt=pt[it].mipmaps;for(let Nt=0;Nt<mt.length;Nt++){const Kt=mt[Nt];w.format!==Rn?Xt!==null?z?Y&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,Kt.width,Kt.height,Xt,Kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,le,Kt.width,Kt.height,0,Kt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,Kt.width,Kt.height,Xt,Qt,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,le,Kt.width,Kt.height,0,Xt,Qt,Kt.data)}}}else{if(mt=w.mipmaps,z&&dt){mt.length>0&&St++;const it=de(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,le,it.width,it.height)}for(let it=0;it<6;it++)if(Et){z?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt[it].width,pt[it].height,Xt,Qt,pt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,le,pt[it].width,pt[it].height,0,Xt,Qt,pt[it].data);for(let Nt=0;Nt<mt.length;Nt++){const Ne=mt[Nt].image[it].image;z?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,Ne.width,Ne.height,Xt,Qt,Ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,le,Ne.width,Ne.height,0,Xt,Qt,Ne.data)}}else{z?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Xt,Qt,pt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,le,Xt,Qt,pt[it]);for(let Nt=0;Nt<mt.length;Nt++){const Kt=mt[Nt];z?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,Xt,Qt,Kt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,le,Xt,Qt,Kt.image[it])}}}g(w)&&y(n.TEXTURE_CUBE_MAP),ht.__version=nt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Bt(I,w,H,Z,nt,ht){const ft=r.convert(H.format,H.colorSpace),j=r.convert(H.type),J=b(H.internalFormat,ft,j,H.normalized,H.colorSpace),wt=i.get(w),Et=i.get(H);if(Et.__renderTarget=w,!wt.__hasExternalTextures){const pt=Math.max(1,w.width>>ht),ut=Math.max(1,w.height>>ht);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,ht,J,pt,ut,w.depth,0,ft,j,null):e.texImage2D(nt,ht,J,pt,ut,0,ft,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Dt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,nt,Et.__webglTexture,0,qt(w)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,nt,Et.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(I,w,H){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){const Z=w.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,ht=S(w.stencilBuffer,nt),ft=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Dt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt(w),ht,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt(w),ht,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ht,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,I)}else{const Z=w.textures;for(let nt=0;nt<Z.length;nt++){const ht=Z[nt],ft=r.convert(ht.format,ht.colorSpace),j=r.convert(ht.type),J=b(ht.internalFormat,ft,j,ht.normalized,ht.colorSpace);Dt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt(w),J,w.width,w.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt(w),J,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,J,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ht(I,w,H){const Z=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=i.get(w.depthTexture);if(nt.__renderTarget=w,(!nt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,w.depthTexture.addEventListener("dispose",D)),nt.__webglTexture===void 0){nt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),kt(n.TEXTURE_CUBE_MAP,w.depthTexture);const wt=r.convert(w.depthTexture.format),Et=r.convert(w.depthTexture.type);let pt;w.depthTexture.format===Ri?pt=n.DEPTH_COMPONENT24:w.depthTexture.format===ps&&(pt=n.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pt,w.width,w.height,0,wt,Et,null)}}else X(w.depthTexture,0);const ht=nt.__webglTexture,ft=qt(w),j=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,J=w.depthTexture.format===ps?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ri)Dt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,j,ht,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,J,j,ht,0);else if(w.depthTexture.format===ps)Dt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,j,ht,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,J,j,ht,0);else throw new Error("Unknown depthTexture format")}function tt(I){const w=i.get(I),H=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const nt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),w.__depthDisposeCallback=nt}w.__boundDepthTexture=Z}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let Z=0;Z<6;Z++)Ht(w.__webglFramebuffer[Z],I,Z);else{const Z=I.texture.mipmaps;Z&&Z.length>0?Ht(w.__webglFramebuffer[0],I,0):Ht(w.__webglFramebuffer,I,0)}else if(H){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=n.createRenderbuffer(),ae(w.__webglDepthbuffer[Z],I,!1);else{const nt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,ht)}}else{const Z=I.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ae(w.__webglDepthbuffer,I,!1);else{const nt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,ht)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(I,w,H){const Z=i.get(I);w!==void 0&&Bt(Z.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&tt(I)}function et(I){const w=I.texture,H=i.get(I),Z=i.get(w);I.addEventListener("dispose",_);const nt=I.textures,ht=I.isWebGLCubeRenderTarget===!0,ft=nt.length>1;if(ft||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=w.version,o.memory.textures++),ht){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let J=0;J<w.mipmaps.length;J++)H.__webglFramebuffer[j][J]=n.createFramebuffer()}else H.__webglFramebuffer[j]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<w.mipmaps.length;j++)H.__webglFramebuffer[j]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ft)for(let j=0,J=nt.length;j<J;j++){const wt=i.get(nt[j]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Dt(I)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<nt.length;j++){const J=nt[j];H.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const wt=r.convert(J.format,J.colorSpace),Et=r.convert(J.type),pt=b(J.internalFormat,wt,Et,J.normalized,J.colorSpace,I.isXRRenderTarget===!0),ut=qt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,pt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,H.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),kt(n.TEXTURE_CUBE_MAP,w);for(let j=0;j<6;j++)if(w.mipmaps&&w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)Bt(H.__webglFramebuffer[j][J],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,J);else Bt(H.__webglFramebuffer[j],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(w)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let j=0,J=nt.length;j<J;j++){const wt=nt[j],Et=i.get(wt);let pt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,Et.__webglTexture),kt(pt,wt),Bt(H.__webglFramebuffer,I,wt,n.COLOR_ATTACHMENT0+j,pt,0),g(wt)&&y(pt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(j=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,Z.__webglTexture),kt(j,w),w.mipmaps&&w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)Bt(H.__webglFramebuffer[J],I,w,n.COLOR_ATTACHMENT0,j,J);else Bt(H.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,j,0);g(w)&&y(j),e.unbindTexture()}I.depthBuffer&&tt(I)}function xt(I){const w=I.textures;for(let H=0,Z=w.length;H<Z;H++){const nt=w[H];if(g(nt)){const ht=x(I),ft=i.get(nt).__webglTexture;e.bindTexture(ht,ft),y(ht),e.unbindTexture()}}}const vt=[],Gt=[];function B(I){if(I.samples>0){if(Dt(I)===!1){const w=I.textures,H=I.width,Z=I.height;let nt=n.COLOR_BUFFER_BIT;const ht=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(I),j=w.length>1;if(j)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const J=I.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[wt]);const Et=i.get(w[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Et,0)}n.blitFramebuffer(0,0,H,Z,0,0,H,Z,nt,n.NEAREST),c===!0&&(vt.length=0,Gt.length=0,vt.push(n.COLOR_ATTACHMENT0+wt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(vt.push(ht),Gt.push(ht),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Gt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,ft.__webglColorRenderbuffer[wt]);const Et=i.get(w[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,Et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function qt(I){return Math.min(s.maxSamples,I.samples)}function Dt(I){const w=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Wt(I){const w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function ct(I,w){const H=I.colorSpace,Z=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Sa&&H!==$i&&(oe.getTransfer(H)===fe?(Z!==Rn||nt!==Sn)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",H)),w}function de(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.getTextureUnits=N,this.setTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=st,this.setTextureCube=at,this.rebindTextures=rt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function RS(n,t){function e(i,s=$i){let r;const o=oe.getTransfer(s);if(i===Sn)return n.UNSIGNED_BYTE;if(i===Ah)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ch)return n.UNSIGNED_SHORT_5_5_5_1;if(i===em)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qp)return n.BYTE;if(i===tm)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===Th)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===im)return n.ALPHA;if(i===sm)return n.RGB;if(i===Rn)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===ps)return n.DEPTH_STENCIL;if(i===Ph)return n.RED;if(i===Rh)return n.RED_INTEGER;if(i===gs)return n.RG;if(i===Ih)return n.RG_INTEGER;if(i===Dh)return n.RGBA_INTEGER;if(i===la||i===ha||i===ua||i===da)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sl||i===Ml||i===El||i===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===Cl||i===Pl||i===Rl||i===Il||i===xa||i===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===Cl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rl)return r.COMPRESSED_R11_EAC;if(i===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xa)return r.COMPRESSED_RG11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ll||i===Nl||i===Fl||i===Ul||i===Ol||i===Bl||i===zl||i===kl||i===Vl||i===Hl||i===Gl||i===Wl||i===ql||i===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ll)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ql)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$l||i===jl||i===Yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===$l)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===Zl||i===ba||i===Jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new gm(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wn({vertexShader:IS,fragmentShader:DS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NS extends Ji{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,p=null;const v=typeof XRWebGLBinding<"u",m=new LS,g={},y=e.getContextAttributes();let x=null,b=null;const S=[],M=[],D=new ot;let _=null;const T=new en;T.viewport=new Se;const P=new en;P.viewport=new Se;const R=[T,P],U=new Ly;let O=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let gt=S[K];return gt===void 0&&(gt=new fc,S[K]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(K){let gt=S[K];return gt===void 0&&(gt=new fc,S[K]=gt),gt.getGripSpace()},this.getHand=function(K){let gt=S[K];return gt===void 0&&(gt=new fc,S[K]=gt),gt.getHandSpace()};function L(K){const gt=M.indexOf(K.inputSource);if(gt===-1)return;const lt=S[gt];lt!==void 0&&(lt.update(K.inputSource,K.frame,l||o),lt.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",k);for(let K=0;K<S.length;K++){const gt=M[K];gt!==null&&(M[K]=null,S[K].disconnect(gt))}O=null,N=null,m.reset();for(const K in g)delete g[K];t.setRenderTarget(x),d=null,u=null,f=null,s=null,b=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",F),s.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Pt=null,Ot=null;y.depth&&(Ot=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=y.stencil?ps:Ri,Pt=y.stencil?jr:ai);const Bt={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new oi(u.textureWidth,u.textureHeight,{format:Rn,type:Sn,depthTexture:new tr(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const lt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new oi(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(K){for(let gt=0;gt<K.removed.length;gt++){const lt=K.removed[gt],Pt=M.indexOf(lt);Pt>=0&&(M[Pt]=null,S[Pt].disconnect(lt))}for(let gt=0;gt<K.added.length;gt++){const lt=K.added[gt];let Pt=M.indexOf(lt);if(Pt===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=M.length){M.push(lt),Pt=Bt;break}else if(M[Bt]===null){M[Bt]=lt,Pt=Bt;break}if(Pt===-1)break}const Ot=S[Pt];Ot&&Ot.connect(lt)}}const X=new E,$=new E;function st(K,gt,lt){X.setFromMatrixPosition(gt.matrixWorld),$.setFromMatrixPosition(lt.matrixWorld);const Pt=X.distanceTo($),Ot=gt.projectionMatrix.elements,Bt=lt.projectionMatrix.elements,ae=Ot[14]/(Ot[10]-1),Ht=Ot[14]/(Ot[10]+1),tt=(Ot[9]+1)/Ot[5],rt=(Ot[9]-1)/Ot[5],et=(Ot[8]-1)/Ot[0],xt=(Bt[8]+1)/Bt[0],vt=ae*et,Gt=ae*xt,B=Pt/(-et+xt),qt=B*-et;if(gt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qt),K.translateZ(B),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ot[10]===-1)K.projectionMatrix.copy(gt.projectionMatrix),K.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Dt=ae+B,Wt=Ht+B,ct=vt-qt,de=Gt+(Pt-qt),I=tt*Ht/Wt*Dt,w=rt*Ht/Wt*Dt;K.projectionMatrix.makePerspective(ct,de,I,w,Dt,Wt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function at(K,gt){gt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(gt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let gt=K.near,lt=K.far;m.texture!==null&&(m.depthNear>0&&(gt=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),U.near=P.near=T.near=gt,U.far=P.far=T.far=lt,(O!==U.near||N!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,N=U.far),U.layers.mask=K.layers.mask|6,T.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;const Pt=K.parent,Ot=U.cameras;at(U,Pt);for(let Bt=0;Bt<Ot.length;Bt++)at(Ot[Bt],Pt);Ot.length===2?st(U,T,P):U.projectionMatrix.copy(T.projectionMatrix),Q(K,U,Pt)};function Q(K,gt,lt){lt===null?K.matrix.copy(gt.matrixWorld):(K.matrix.copy(lt.matrixWorld),K.matrix.invert(),K.matrix.multiply(gt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(gt.projectionMatrix),K.projectionMatrixInverse.copy(gt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Qs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return g[K]};let zt=null;function Jt(K,gt){if(h=gt.getViewerPose(l||o),p=gt,h!==null){const lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Pt=!1;lt.length!==U.cameras.length&&(U.cameras.length=0,Pt=!0);for(let Ht=0;Ht<lt.length;Ht++){const tt=lt[Ht];let rt=null;if(d!==null)rt=d.getViewport(tt);else{const xt=f.getViewSubImage(u,tt);rt=xt.viewport,Ht===0&&(t.setRenderTargetTextures(b,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(b))}let et=R[Ht];et===void 0&&(et=new en,et.layers.enable(Ht),et.viewport=new Se,R[Ht]=et),et.matrix.fromArray(tt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(tt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(rt.x,rt.y,rt.width,rt.height),Ht===0&&(U.matrix.copy(et.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pt===!0&&U.cameras.push(et)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Ht=f.getDepthInformation(lt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,s.renderState)}if(Ot&&Ot.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let Ht=0;Ht<lt.length;Ht++){const tt=lt[Ht].camera;if(tt){let rt=g[tt];rt||(rt=new gm,g[tt]=rt);const et=f.getCameraImage(tt);rt.sourceTexture=et}}}}for(let lt=0;lt<S.length;lt++){const Pt=M[lt],Ot=S[lt];Pt!==null&&Ot!==void 0&&Ot.update(Pt,gt,l||o)}zt&&zt(K,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),p=null}const kt=new Dm;kt.setAnimationLoop(Jt),this.setAnimationLoop=function(K){zt=K},this.dispose=function(){}}}const FS=new ne,zm=new jt;zm.set(-1,0,0,0,1,0,0,0,1);function US(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Tm(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,x,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,y,x):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ln&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ln&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=t.get(g),x=y.envMap,b=y.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(FS.makeRotationFromEuler(b)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=x*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ln&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function OS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const b=x.program;i.uniformBlockBinding(y,b)}function l(y,x){let b=s[y.id];b===void 0&&(p(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));const S=x.program;i.updateUBOMapping(y,S);const M=t.render.frame;r[y.id]!==M&&(u(y),r[y.id]=M)}function h(y){const x=f();y.__bindingPointIndex=x;const b=n.createBuffer(),S=y.__size,M=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,S,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,b),b}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=s[y.id],b=y.uniforms,S=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,D=b.length;M<D;M++){const _=Array.isArray(b[M])?b[M]:[b[M]];for(let T=0,P=_.length;T<P;T++){const R=_[T];if(d(R,M,T,S)===!0){const U=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let L=0;L<O.length;L++){const F=O[L],k=v(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,U+N,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):ArrayBuffer.isView(F)?R.__data.set(new F.constructor(F.buffer,F.byteOffset,R.__data.length)):(F.toArray(R.__data,N),N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,x,b,S){const M=y.value,D=x+"_"+b;if(S[D]===void 0)return typeof M=="number"||typeof M=="boolean"?S[D]=M:ArrayBuffer.isView(M)?S[D]=M.slice():S[D]=M.clone(),!0;{const _=S[D];if(typeof M=="number"||typeof M=="boolean"){if(_!==M)return S[D]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(_.equals(M)===!1)return _.copy(M),!0}}return!1}function p(y){const x=y.uniforms;let b=0;const S=16;for(let D=0,_=x.length;D<_;D++){const T=Array.isArray(x[D])?x[D]:[x[D]];for(let P=0,R=T.length;P<R;P++){const U=T[P],O=Array.isArray(U.value)?U.value:[U.value];for(let N=0,L=O.length;N<L;N++){const F=O[N],k=v(F),X=b%S,$=X%k.boundary,st=X+$;b+=$,st!==0&&S-st<k.storage&&(b+=S-st),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=k.storage}}}const M=b%S;return M>0&&(b+=S-M),y.__size=b,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(x.boundary=16,x.storage=y.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:g}}const BS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function zS(){return Yn===null&&(Yn=new Bh(BS,16,16,gs,Pi),Yn.name="DFG_LUT",Yn.minFilter=nn,Yn.magFilter=nn,Yn.wrapS=Si,Yn.wrapT=Si,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class Yh{constructor(t={}){const{canvas:e=Bg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Sn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=d,m=new Set([Dh,Ih,Rh]),g=new Set([Sn,ai,$r,jr,Ah,Ch]),y=new Uint32Array(4),x=new Int32Array(4),b=new E;let S=null,M=null;const D=[],_=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,U=null;this._outputColorSpace=wn;let O=0,N=0,L=null,F=-1,k=null;const X=new Se,$=new Se;let st=null;const at=new $t(0);let Q=0,zt=e.width,Jt=e.height,kt=1,K=null,gt=null;const lt=new Se(0,0,zt,Jt),Pt=new Se(0,0,zt,Jt);let Ot=!1;const Bt=new Ga;let ae=!1,Ht=!1;const tt=new ne,rt=new E,et=new Se,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Gt(){return L===null?kt:1}let B=i;function qt(C,V){return e.getContext(C,V)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eh}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),B===null){const V="webgl2";if(B=qt(V,C),B===null)throw qt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Vt("WebGLRenderer: "+C.message),C}let Dt,Wt,ct,de,I,w,H,Z,nt,ht,ft,j,J,wt,Et,pt,ut,Xt,Qt,le,z,dt,Y;function St(){Dt=new zb(B),Dt.init(),z=new RS(B,Dt),Wt=new Ib(B,Dt,t,z),ct=new CS(B,Dt),Wt.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),de=new Hb(B),I=new pS,w=new PS(B,Dt,ct,I,Wt,z,de),H=new Bb(P),Z=new Xy(B),dt=new Pb(B,Z),nt=new kb(B,Z,de,dt),ht=new Wb(B,nt,Z,dt,de),Xt=new Gb(B,Wt,w),Et=new Db(I),ft=new fS(P,H,Dt,Wt,dt,Et),j=new US(P,I),J=new gS,wt=new wS(Dt),ut=new Cb(P,H,ct,ht,p,c),pt=new AS(P,ht,Wt),Y=new OS(B,de,Wt,ct),Qt=new Rb(B,Dt,de),le=new Vb(B,Dt,de),de.programs=ft.programs,P.capabilities=Wt,P.extensions=Dt,P.properties=I,P.renderLists=J,P.shadowMap=pt,P.state=ct,P.info=de}St(),v!==Sn&&(T=new Xb(v,e.width,e.height,s,r));const mt=new NS(P,B);this.xr=mt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return kt},this.setPixelRatio=function(C){C!==void 0&&(kt=C,this.setSize(zt,Jt,!1))},this.getSize=function(C){return C.set(zt,Jt)},this.setSize=function(C,V,q=!0){if(mt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=C,Jt=V,e.width=Math.floor(C*kt),e.height=Math.floor(V*kt),q===!0&&(e.style.width=C+"px",e.style.height=V+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(zt*kt,Jt*kt).floor()},this.setDrawingBufferSize=function(C,V,q){zt=C,Jt=V,kt=q,e.width=Math.floor(C*q),e.height=Math.floor(V*q),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(v===Sn){Vt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){Rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(X)},this.getViewport=function(C){return C.copy(lt)},this.setViewport=function(C,V,q,G){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,V,q,G),ct.viewport(X.copy(lt).multiplyScalar(kt).round())},this.getScissor=function(C){return C.copy(Pt)},this.setScissor=function(C,V,q,G){C.isVector4?Pt.set(C.x,C.y,C.z,C.w):Pt.set(C,V,q,G),ct.scissor($.copy(Pt).multiplyScalar(kt).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(C){ct.setScissorTest(Ot=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){gt=C},this.getClearColor=function(C){return C.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,q=!0){let G=0;if(C){let W=!1;if(L!==null){const bt=L.texture.format;W=m.has(bt)}if(W){const bt=L.texture.type,Tt=g.has(bt),_t=ut.getClearColor(),Lt=ut.getClearAlpha(),Ft=_t.r,Zt=_t.g,ie=_t.b;Tt?(y[0]=Ft,y[1]=Zt,y[2]=ie,y[3]=Lt,B.clearBufferuiv(B.COLOR,0,y)):(x[0]=Ft,x[1]=Zt,x[2]=ie,x[3]=Lt,B.clearBufferiv(B.COLOR,0,x))}else G|=B.COLOR_BUFFER_BIT}V&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),U=C},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),ut.dispose(),J.dispose(),wt.dispose(),I.dispose(),H.dispose(),ht.dispose(),dt.dispose(),Y.dispose(),ft.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",fu),mt.removeEventListener("sessionend",pu),es.stop()};function it(C){C.preventDefault(),Ea("WebGLRenderer: Context Lost."),R=!0}function Nt(){Ea("WebGLRenderer: Context Restored."),R=!1;const C=de.autoReset,V=pt.enabled,q=pt.autoUpdate,G=pt.needsUpdate,W=pt.type;St(),de.autoReset=C,pt.enabled=V,pt.autoUpdate=q,pt.needsUpdate=G,pt.type=W}function Kt(C){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ne(C){const V=C.target;V.removeEventListener("dispose",Ne),me(V)}function me(C){hi(C),I.remove(C)}function hi(C){const V=I.get(C).programs;V!==void 0&&(V.forEach(function(q){ft.releaseProgram(q)}),C.isShaderMaterial&&ft.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,q,G,W,bt){V===null&&(V=xt);const Tt=W.isMesh&&W.matrixWorld.determinant()<0,_t=Y0(C,V,q,G,W);ct.setMaterial(G,Tt);let Lt=q.index,Ft=1;if(G.wireframe===!0){if(Lt=nt.getWireframeAttribute(q),Lt===void 0)return;Ft=2}const Zt=q.drawRange,ie=q.attributes.position;let Ut=Zt.start*Ft,ge=(Zt.start+Zt.count)*Ft;bt!==null&&(Ut=Math.max(Ut,bt.start*Ft),ge=Math.min(ge,(bt.start+bt.count)*Ft)),Lt!==null?(Ut=Math.max(Ut,0),ge=Math.min(ge,Lt.count)):ie!=null&&(Ut=Math.max(Ut,0),ge=Math.min(ge,ie.count));const Fe=ge-Ut;if(Fe<0||Fe===1/0)return;dt.setup(W,G,_t,q,Lt);let Re,xe=Qt;if(Lt!==null&&(Re=Z.get(Lt),xe=le,xe.setIndex(Re)),W.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*Gt()),xe.setMode(B.LINES)):xe.setMode(B.TRIANGLES);else if(W.isLine){let Ke=G.linewidth;Ke===void 0&&(Ke=1),ct.setLineWidth(Ke*Gt()),W.isLineSegments?xe.setMode(B.LINES):W.isLineLoop?xe.setMode(B.LINE_LOOP):xe.setMode(B.LINE_STRIP)}else W.isPoints?xe.setMode(B.POINTS):W.isSprite&&xe.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))xe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ke=W._multiDrawStarts,Mt=W._multiDrawCounts,vn=W._multiDrawCount,ce=Lt?Z.get(Lt).bytesPerElement:1,An=I.get(G).currentProgram.getUniforms();for(let $n=0;$n<vn;$n++)An.setValue(B,"_gl_DrawID",$n),xe.render(Ke[$n]/ce,Mt[$n])}else if(W.isInstancedMesh)xe.renderInstances(Ut,Fe,W.count);else if(q.isInstancedBufferGeometry){const Ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Mt=Math.min(q.instanceCount,Ke);xe.renderInstances(Ut,Fe,Mt)}else xe.render(Ut,Fe)};function Xn(C,V,q){C.transparent===!0&&C.side===cn&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,ho(C,V,q),C.side=Zi,C.needsUpdate=!0,ho(C,V,q),C.side=cn):ho(C,V,q)}this.compile=function(C,V,q=null){q===null&&(q=C),M=wt.get(q),M.init(V),_.push(M),q.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),C!==q&&C.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();const G=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const bt=W.material;if(bt)if(Array.isArray(bt))for(let Tt=0;Tt<bt.length;Tt++){const _t=bt[Tt];Xn(_t,q,W),G.add(_t)}else Xn(bt,q,W),G.add(bt)}),M=_.pop(),G},this.compileAsync=function(C,V,q=null){const G=this.compile(C,V,q);return new Promise(W=>{function bt(){if(G.forEach(function(Tt){I.get(Tt).currentProgram.isReady()&&G.delete(Tt)}),G.size===0){W(C);return}setTimeout(bt,10)}Dt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let nc=null;function $0(C){nc&&nc(C)}function fu(){es.stop()}function pu(){es.start()}const es=new Dm;es.setAnimationLoop($0),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(C){nc=C,mt.setAnimationLoop(C),C===null?es.stop():es.start()},mt.addEventListener("sessionstart",fu),mt.addEventListener("sessionend",pu),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(C,V);const q=mt.enabled===!0&&mt.isPresenting===!0,G=T!==null&&(L===null||q)&&T.begin(P,L);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(V),V=mt.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,V,L),M=wt.get(C,_.length),M.init(V),M.state.textureUnits=w.getTextureUnits(),_.push(M),tt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Bt.setFromProjectionMatrix(tt,ii,V.reversedDepth),Ht=this.localClippingEnabled,ae=Et.init(this.clippingPlanes,Ht),S=J.get(C,D.length),S.init(),D.push(S),mt.enabled===!0&&mt.isPresenting===!0){const Tt=P.xr.getDepthSensingMesh();Tt!==null&&ic(Tt,V,-1/0,P.sortObjects)}ic(C,V,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(K,gt),vt=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,vt&&ut.addToRenderList(S,C),this.info.render.frame++,ae===!0&&Et.beginShadows();const W=M.state.shadowsArray;if(pt.render(W,C,V),ae===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&T.hasRenderPass())===!1){const Tt=S.opaque,_t=S.transmissive;if(M.setupLights(),V.isArrayCamera){const Lt=V.cameras;if(_t.length>0)for(let Ft=0,Zt=Lt.length;Ft<Zt;Ft++){const ie=Lt[Ft];gu(Tt,_t,C,ie)}vt&&ut.render(C);for(let Ft=0,Zt=Lt.length;Ft<Zt;Ft++){const ie=Lt[Ft];mu(S,C,ie,ie.viewport)}}else _t.length>0&&gu(Tt,_t,C,V),vt&&ut.render(C),mu(S,C,V)}L!==null&&N===0&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),G&&T.end(P),C.isScene===!0&&C.onAfterRender(P,C,V),dt.resetDefaultState(),F=-1,k=null,_.pop(),_.length>0?(M=_[_.length-1],w.setTextureUnits(M.state.textureUnits),ae===!0&&Et.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,D.pop(),D.length>0?S=D[D.length-1]:S=null,U!==null&&U.renderEnd()};function ic(C,V,q,G){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLightProbeGrid)M.pushLightProbeGrid(C);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Bt.intersectsSprite(C)){G&&et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tt);const Tt=ht.update(C),_t=C.material;_t.visible&&S.push(C,Tt,_t,q,et.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Bt.intersectsObject(C))){const Tt=ht.update(C),_t=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),et.copy(C.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),et.copy(Tt.boundingSphere.center)),et.applyMatrix4(C.matrixWorld).applyMatrix4(tt)),Array.isArray(_t)){const Lt=Tt.groups;for(let Ft=0,Zt=Lt.length;Ft<Zt;Ft++){const ie=Lt[Ft],Ut=_t[ie.materialIndex];Ut&&Ut.visible&&S.push(C,Tt,Ut,q,et.z,ie)}}else _t.visible&&S.push(C,Tt,_t,q,et.z,null)}}const bt=C.children;for(let Tt=0,_t=bt.length;Tt<_t;Tt++)ic(bt[Tt],V,q,G)}function mu(C,V,q,G){const{opaque:W,transmissive:bt,transparent:Tt}=C;M.setupLightsView(q),ae===!0&&Et.setGlobalState(P.clippingPlanes,q),G&&ct.viewport(X.copy(G)),W.length>0&&lo(W,V,q),bt.length>0&&lo(bt,V,q),Tt.length>0&&lo(Tt,V,q),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function gu(C,V,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){const Ut=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new oi(1,1,{generateMipmaps:!0,type:Ut?Pi:Sn,minFilter:fs,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const bt=M.state.transmissionRenderTarget[G.id],Tt=G.viewport||X;bt.setSize(Tt.z*P.transmissionResolutionScale,Tt.w*P.transmissionResolutionScale);const _t=P.getRenderTarget(),Lt=P.getActiveCubeFace(),Ft=P.getActiveMipmapLevel();P.setRenderTarget(bt),P.getClearColor(at),Q=P.getClearAlpha(),Q<1&&P.setClearColor(16777215,.5),P.clear(),vt&&ut.render(q);const Zt=P.toneMapping;P.toneMapping=ri;const ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),ae===!0&&Et.setGlobalState(P.clippingPlanes,G),lo(C,q,G),w.updateMultisampleRenderTarget(bt),w.updateRenderTargetMipmap(bt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ge=0,Fe=V.length;ge<Fe;ge++){const Re=V[ge],{object:xe,geometry:Ke,material:Mt,group:vn}=Re;if(Mt.side===cn&&xe.layers.test(G.layers)){const ce=Mt.side;Mt.side=ln,Mt.needsUpdate=!0,vu(xe,q,G,Ke,Mt,vn),Mt.side=ce,Mt.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(bt),w.updateRenderTargetMipmap(bt))}P.setRenderTarget(_t,Lt,Ft),P.setClearColor(at,Q),ie!==void 0&&(G.viewport=ie),P.toneMapping=Zt}function lo(C,V,q){const G=V.isScene===!0?V.overrideMaterial:null;for(let W=0,bt=C.length;W<bt;W++){const Tt=C[W],{object:_t,geometry:Lt,group:Ft}=Tt;let Zt=Tt.material;Zt.allowOverride===!0&&G!==null&&(Zt=G),_t.layers.test(q.layers)&&vu(_t,V,q,Lt,Zt,Ft)}}function vu(C,V,q,G,W,bt){C.onBeforeRender(P,V,q,G,W,bt),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(P,V,q,G,C,bt),W.transparent===!0&&W.side===cn&&W.forceSinglePass===!1?(W.side=ln,W.needsUpdate=!0,P.renderBufferDirect(q,V,G,W,C,bt),W.side=Zi,W.needsUpdate=!0,P.renderBufferDirect(q,V,G,W,C,bt),W.side=cn):P.renderBufferDirect(q,V,G,W,C,bt),C.onAfterRender(P,V,q,G,W,bt)}function ho(C,V,q){V.isScene!==!0&&(V=xt);const G=I.get(C),W=M.state.lights,bt=M.state.shadowsArray,Tt=W.state.version,_t=ft.getParameters(C,W.state,bt,V,q,M.state.lightProbeGridArray),Lt=ft.getProgramCacheKey(_t);let Ft=G.programs;G.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?V.environment:null,G.fog=V.fog;const Zt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;G.envMap=H.get(C.envMap||G.environment,Zt),G.envMapRotation=G.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Ft===void 0&&(C.addEventListener("dispose",Ne),Ft=new Map,G.programs=Ft);let ie=Ft.get(Lt);if(ie!==void 0){if(G.currentProgram===ie&&G.lightsStateVersion===Tt)return _u(C,_t),ie}else _t.uniforms=ft.getUniforms(C),U!==null&&C.isNodeMaterial&&U.build(C,q,_t),C.onBeforeCompile(_t,P),ie=ft.acquireProgram(_t,Lt),Ft.set(Lt,ie),G.uniforms=_t.uniforms;const Ut=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ut.clippingPlanes=Et.uniform),_u(C,_t),G.needsLights=Z0(C),G.lightsStateVersion=Tt,G.needsLights&&(Ut.ambientLightColor.value=W.state.ambient,Ut.lightProbe.value=W.state.probe,Ut.directionalLights.value=W.state.directional,Ut.directionalLightShadows.value=W.state.directionalShadow,Ut.spotLights.value=W.state.spot,Ut.spotLightShadows.value=W.state.spotShadow,Ut.rectAreaLights.value=W.state.rectArea,Ut.ltc_1.value=W.state.rectAreaLTC1,Ut.ltc_2.value=W.state.rectAreaLTC2,Ut.pointLights.value=W.state.point,Ut.pointLightShadows.value=W.state.pointShadow,Ut.hemisphereLights.value=W.state.hemi,Ut.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ut.spotLightMatrix.value=W.state.spotLightMatrix,Ut.spotLightMap.value=W.state.spotLightMap,Ut.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=ie,G.uniformsList=null,ie}function yu(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=fa.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function _u(C,V){const q=I.get(C);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function j0(C,V){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let q=0,G=C.length;q<G;q++){const W=C[q];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function Y0(C,V,q,G,W){V.isScene!==!0&&(V=xt),w.resetTextureUnits();const bt=V.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?V.environment:null,_t=L===null?P.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:oe.workingColorSpace,Lt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ft=H.get(G.envMap||Tt,Lt),Zt=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ie=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ut=!!q.morphAttributes.position,ge=!!q.morphAttributes.normal,Fe=!!q.morphAttributes.color;let Re=ri;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Re=P.toneMapping);const xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ke=xe!==void 0?xe.length:0,Mt=I.get(G),vn=M.state.lights;if(ae===!0&&(Ht===!0||C!==k)){const Ee=C===k&&G.id===F;Et.setState(G,C,Ee)}let ce=!1;G.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==vn.state.version||Mt.outputColorSpace!==_t||W.isBatchedMesh&&Mt.batching===!1||!W.isBatchedMesh&&Mt.batching===!0||W.isBatchedMesh&&Mt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Mt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Mt.instancing===!1||!W.isInstancedMesh&&Mt.instancing===!0||W.isSkinnedMesh&&Mt.skinning===!1||!W.isSkinnedMesh&&Mt.skinning===!0||W.isInstancedMesh&&Mt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Mt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Mt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Mt.instancingMorph===!1&&W.morphTexture!==null||Mt.envMap!==Ft||G.fog===!0&&Mt.fog!==bt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Et.numPlanes||Mt.numIntersection!==Et.numIntersection)||Mt.vertexAlphas!==Zt||Mt.vertexTangents!==ie||Mt.morphTargets!==Ut||Mt.morphNormals!==ge||Mt.morphColors!==Fe||Mt.toneMapping!==Re||Mt.morphTargetsCount!==Ke||!!Mt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Mt.__version=G.version);let An=Mt.currentProgram;ce===!0&&(An=ho(G,V,W),U&&G.isNodeMaterial&&U.onUpdateProgram(G,An,Mt));let $n=!1,Ni=!1,Ms=!1;const be=An.getUniforms(),Ue=Mt.uniforms;if(ct.useProgram(An.program)&&($n=!0,Ni=!0,Ms=!0),G.id!==F&&(F=G.id,Ni=!0),Mt.needsLights){const Ee=j0(M.state.lightProbeGridArray,W);Mt.lightProbeGrid!==Ee&&(Mt.lightProbeGrid=Ee,Ni=!0)}if($n||k!==C){ct.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),be.setValue(B,"projectionMatrix",C.projectionMatrix),be.setValue(B,"viewMatrix",C.matrixWorldInverse);const Ui=be.map.cameraPosition;Ui!==void 0&&Ui.setValue(B,rt.setFromMatrixPosition(C.matrixWorld)),Wt.logarithmicDepthBuffer&&be.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&be.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,Ni=!0,Ms=!0)}if(Mt.needsLights&&(vn.state.directionalShadowMap.length>0&&be.setValue(B,"directionalShadowMap",vn.state.directionalShadowMap,w),vn.state.spotShadowMap.length>0&&be.setValue(B,"spotShadowMap",vn.state.spotShadowMap,w),vn.state.pointShadowMap.length>0&&be.setValue(B,"pointShadowMap",vn.state.pointShadowMap,w)),W.isSkinnedMesh){be.setOptional(B,W,"bindMatrix"),be.setOptional(B,W,"bindMatrixInverse");const Ee=W.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),be.setValue(B,"boneTexture",Ee.boneTexture,w))}W.isBatchedMesh&&(be.setOptional(B,W,"batchingTexture"),be.setValue(B,"batchingTexture",W._matricesTexture,w),be.setOptional(B,W,"batchingIdTexture"),be.setValue(B,"batchingIdTexture",W._indirectTexture,w),be.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&be.setValue(B,"batchingColorTexture",W._colorsTexture,w));const Fi=q.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Xt.update(W,q,An),(Ni||Mt.receiveShadow!==W.receiveShadow)&&(Mt.receiveShadow=W.receiveShadow,be.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&V.environment!==null&&(Ue.envMapIntensity.value=V.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=zS()),Ni){if(be.setValue(B,"toneMappingExposure",P.toneMappingExposure),Mt.needsLights&&K0(Ue,Ms),bt&&G.fog===!0&&j.refreshFogUniforms(Ue,bt),j.refreshMaterialUniforms(Ue,G,kt,Jt,M.state.transmissionRenderTarget[C.id]),Mt.needsLights&&Mt.lightProbeGrid){const Ee=Mt.lightProbeGrid;Ue.probesSH.value=Ee.texture,Ue.probesMin.value.copy(Ee.boundingBox.min),Ue.probesMax.value.copy(Ee.boundingBox.max),Ue.probesResolution.value.copy(Ee.resolution)}fa.upload(B,yu(Mt),Ue,w)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fa.upload(B,yu(Mt),Ue,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&be.setValue(B,"center",W.center),be.setValue(B,"modelViewMatrix",W.modelViewMatrix),be.setValue(B,"normalMatrix",W.normalMatrix),be.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const Ee=G.uniformsGroups;for(let Ui=0,Es=Ee.length;Ui<Es;Ui++){const xu=Ee[Ui];Y.update(xu,An),Y.bind(xu,An)}}return An}function K0(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Z0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,V,q){const G=I.get(C);G.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),I.get(C.texture).__webglTexture=V,I.get(C.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const q=I.get(C);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const J0=B.createFramebuffer();this.setRenderTarget=function(C,V=0,q=0){L=C,O=V,N=q;let G=null,W=!1,bt=!1;if(C){const _t=I.get(C);if(_t.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(B.FRAMEBUFFER,_t.__webglFramebuffer),X.copy(C.viewport),$.copy(C.scissor),st=C.scissorTest,ct.viewport(X),ct.scissor($),ct.setScissorTest(st),F=-1;return}else if(_t.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(_t.__hasExternalTextures)w.rebindTextures(C,I.get(C.texture).__webglTexture,I.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Zt=C.depthTexture;if(_t.__boundDepthTexture!==Zt){if(Zt!==null&&I.has(Zt)&&(C.width!==Zt.image.width||C.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const Lt=C.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(bt=!0);const Ft=I.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ft[V])?G=Ft[V][q]:G=Ft[V],W=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?G=I.get(C).__webglMultisampledFramebuffer:Array.isArray(Ft)?G=Ft[q]:G=Ft,X.copy(C.viewport),$.copy(C.scissor),st=C.scissorTest}else X.copy(lt).multiplyScalar(kt).floor(),$.copy(Pt).multiplyScalar(kt).floor(),st=Ot;if(q!==0&&(G=J0),ct.bindFramebuffer(B.FRAMEBUFFER,G)&&ct.drawBuffers(C,G),ct.viewport(X),ct.scissor($),ct.setScissorTest(st),W){const _t=I.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,_t.__webglTexture,q)}else if(bt){const _t=V;for(let Lt=0;Lt<C.textures.length;Lt++){const Ft=I.get(C.textures[Lt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Lt,Ft.__webglTexture,q,_t)}}else if(C!==null&&q!==0){const _t=I.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_t.__webglTexture,q)}F=-1},this.readRenderTargetPixels=function(C,V,q,G,W,bt,Tt,_t=0){if(!(C&&C.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=I.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Tt!==void 0&&(Lt=Lt[Tt]),Lt){ct.bindFramebuffer(B.FRAMEBUFFER,Lt);try{const Ft=C.textures[_t],Zt=Ft.format,ie=Ft.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_t),!Wt.textureFormatReadable(Zt)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(ie)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-G&&q>=0&&q<=C.height-W&&B.readPixels(V,q,G,W,z.convert(Zt),z.convert(ie),bt)}finally{const Ft=L!==null?I.get(L).__webglFramebuffer:null;ct.bindFramebuffer(B.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,V,q,G,W,bt,Tt,_t=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=I.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Tt!==void 0&&(Lt=Lt[Tt]),Lt)if(V>=0&&V<=C.width-G&&q>=0&&q<=C.height-W){ct.bindFramebuffer(B.FRAMEBUFFER,Lt);const Ft=C.textures[_t],Zt=Ft.format,ie=Ft.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_t),!Wt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,bt.byteLength,B.STREAM_READ),B.readPixels(V,q,G,W,z.convert(Zt),z.convert(ie),0);const ge=L!==null?I.get(L).__webglFramebuffer:null;ct.bindFramebuffer(B.FRAMEBUFFER,ge);const Fe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zg(B,Fe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,bt),B.deleteBuffer(Ut),B.deleteSync(Fe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,q=0){const G=Math.pow(2,-q),W=Math.floor(C.image.width*G),bt=Math.floor(C.image.height*G),Tt=V!==null?V.x:0,_t=V!==null?V.y:0;w.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Tt,_t,W,bt),ct.unbindTexture()};const Q0=B.createFramebuffer(),tg=B.createFramebuffer();this.copyTextureToTexture=function(C,V,q=null,G=null,W=0,bt=0){let Tt,_t,Lt,Ft,Zt,ie,Ut,ge,Fe;const Re=C.isCompressedTexture?C.mipmaps[bt]:C.image;if(q!==null)Tt=q.max.x-q.min.x,_t=q.max.y-q.min.y,Lt=q.isBox3?q.max.z-q.min.z:1,Ft=q.min.x,Zt=q.min.y,ie=q.isBox3?q.min.z:0;else{const Ue=Math.pow(2,-W);Tt=Math.floor(Re.width*Ue),_t=Math.floor(Re.height*Ue),C.isDataArrayTexture?Lt=Re.depth:C.isData3DTexture?Lt=Math.floor(Re.depth*Ue):Lt=1,Ft=0,Zt=0,ie=0}G!==null?(Ut=G.x,ge=G.y,Fe=G.z):(Ut=0,ge=0,Fe=0);const xe=z.convert(V.format),Ke=z.convert(V.type);let Mt;V.isData3DTexture?(w.setTexture3D(V,0),Mt=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(w.setTexture2DArray(V,0),Mt=B.TEXTURE_2D_ARRAY):(w.setTexture2D(V,0),Mt=B.TEXTURE_2D),ct.activeTexture(B.TEXTURE0),ct.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),ct.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),ct.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const vn=ct.getParameter(B.UNPACK_ROW_LENGTH),ce=ct.getParameter(B.UNPACK_IMAGE_HEIGHT),An=ct.getParameter(B.UNPACK_SKIP_PIXELS),$n=ct.getParameter(B.UNPACK_SKIP_ROWS),Ni=ct.getParameter(B.UNPACK_SKIP_IMAGES);ct.pixelStorei(B.UNPACK_ROW_LENGTH,Re.width),ct.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Re.height),ct.pixelStorei(B.UNPACK_SKIP_PIXELS,Ft),ct.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),ct.pixelStorei(B.UNPACK_SKIP_IMAGES,ie);const Ms=C.isDataArrayTexture||C.isData3DTexture,be=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const Ue=I.get(C),Fi=I.get(V),Ee=I.get(Ue.__renderTarget),Ui=I.get(Fi.__renderTarget);ct.bindFramebuffer(B.READ_FRAMEBUFFER,Ee.__webglFramebuffer),ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Es=0;Es<Lt;Es++)Ms&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,I.get(C).__webglTexture,W,ie+Es),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,I.get(V).__webglTexture,bt,Fe+Es)),B.blitFramebuffer(Ft,Zt,Tt,_t,Ut,ge,Tt,_t,B.DEPTH_BUFFER_BIT,B.NEAREST);ct.bindFramebuffer(B.READ_FRAMEBUFFER,null),ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||C.isRenderTargetTexture||I.has(C)){const Ue=I.get(C),Fi=I.get(V);ct.bindFramebuffer(B.READ_FRAMEBUFFER,Q0),ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,tg);for(let Ee=0;Ee<Lt;Ee++)Ms?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.__webglTexture,W,ie+Ee):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ue.__webglTexture,W),be?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fi.__webglTexture,bt,Fe+Ee):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Fi.__webglTexture,bt),W!==0?B.blitFramebuffer(Ft,Zt,Tt,_t,Ut,ge,Tt,_t,B.COLOR_BUFFER_BIT,B.NEAREST):be?B.copyTexSubImage3D(Mt,bt,Ut,ge,Fe+Ee,Ft,Zt,Tt,_t):B.copyTexSubImage2D(Mt,bt,Ut,ge,Ft,Zt,Tt,_t);ct.bindFramebuffer(B.READ_FRAMEBUFFER,null),ct.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else be?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Mt,bt,Ut,ge,Fe,Tt,_t,Lt,xe,Ke,Re.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Mt,bt,Ut,ge,Fe,Tt,_t,Lt,xe,Re.data):B.texSubImage3D(Mt,bt,Ut,ge,Fe,Tt,_t,Lt,xe,Ke,Re):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,bt,Ut,ge,Tt,_t,xe,Ke,Re.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,bt,Ut,ge,Re.width,Re.height,xe,Re.data):B.texSubImage2D(B.TEXTURE_2D,bt,Ut,ge,Tt,_t,xe,Ke,Re);ct.pixelStorei(B.UNPACK_ROW_LENGTH,vn),ct.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ce),ct.pixelStorei(B.UNPACK_SKIP_PIXELS,An),ct.pixelStorei(B.UNPACK_SKIP_ROWS,$n),ct.pixelStorei(B.UNPACK_SKIP_IMAGES,Ni),bt===0&&V.generateMipmaps&&B.generateMipmap(Mt),ct.unbindTexture()},this.initRenderTarget=function(C){I.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),ct.unbindTexture()},this.resetState=function(){O=0,N=0,L=null,ct.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Hn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new A);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new A);const i=this.elements,s=t.x,r=t.y,o=t.z;return e.x=i[0]*s+i[1]*r+i[2]*o,e.y=i[3]*s+i[4]*r+i[5]*o,e.z=i[6]*s+i[7]*r+i[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Hn);const i=this.elements,s=t.elements,r=e.elements,o=i[0],a=i[1],c=i[2],l=i[3],h=i[4],f=i[5],u=i[6],d=i[7],p=i[8],v=s[0],m=s[1],g=s[2],y=s[3],x=s[4],b=s[5],S=s[6],M=s[7],D=s[8];return r[0]=o*v+a*y+c*S,r[1]=o*m+a*x+c*M,r[2]=o*g+a*b+c*D,r[3]=l*v+h*y+f*S,r[4]=l*m+h*x+f*M,r[5]=l*g+h*b+f*D,r[6]=u*v+d*y+p*S,r[7]=u*m+d*x+p*M,r[8]=u*g+d*b+p*D,e}scale(t,e){e===void 0&&(e=new Hn);const i=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*i[3*r+0],s[3*r+1]=t.y*i[3*r+1],s[3*r+2]=t.z*i[3*r+2];return e}solve(t,e){e===void 0&&(e=new A);const i=3,s=4,r=[];let o,a;for(o=0;o<i*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let c=3;const l=c;let h;const f=4;let u;do{if(o=l-c,r[o+s*o]===0){for(a=o+1;a<l;a++)if(r[o+s*a]!==0){h=f;do u=f-h,r[u+s*o]+=r[u+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<l;a++){const d=r[o+s*a]/r[o+s*o];h=f;do u=f-h,r[u+s*a]=u<=o?0:r[u+s*a]-r[u+s*o]*d;while(--h)}}while(--c);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,i){if(i===void 0)return this.elements[e+3*t];this.elements[e+3*t]=i}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let i=0;i<9;i++)t+=this.elements[i]+e;return t}reverse(t){t===void 0&&(t=new Hn);const e=3,i=6,s=kS;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const c=a;let l;const h=i;let f;do{if(r=c-a,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){l=h;do f=h-l,s[f+i*r]+=s[f+i*o];while(--l);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const u=s[r+i*o]/s[r+i*r];l=h;do f=h-l,s[f+i*o]=f<=r?0:s[f+i*o]-s[f+i*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{const u=s[r+i*o]/s[r+i*r];l=i;do f=i-l,s[f+i*o]=s[f+i*o]-s[f+i*r]*u;while(--l)}while(o--)}while(--r);r=2;do{const u=1/s[r+i*r];l=i;do f=i-l,s[f+i*r]=s[f+i*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(f=s[e+o+i*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,f)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,i=t.y,s=t.z,r=t.w,o=e+e,a=i+i,c=s+s,l=e*o,h=e*a,f=e*c,u=i*a,d=i*c,p=s*c,v=r*o,m=r*a,g=r*c,y=this.elements;return y[3*0+0]=1-(u+p),y[3*0+1]=h-g,y[3*0+2]=f+m,y[3*1+0]=h+g,y[3*1+1]=1-(l+p),y[3*1+2]=d-v,y[3*2+0]=f-m,y[3*2+1]=d+v,y[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new Hn);const e=this.elements,i=t.elements;let s;return i[0]=e[0],i[4]=e[4],i[8]=e[8],s=e[1],i[1]=e[3],i[3]=s,s=e[2],i[2]=e[6],i[6]=s,s=e[5],i[5]=e[7],i[7]=s,t}}const kS=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class A{constructor(t,e,i){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x=t,this.y=e,this.z=i}cross(t,e){e===void 0&&(e=new A);const i=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*s,e.y=c*i-o*r,e.z=o*s-a*i,e}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new A(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new A(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Hn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,i=this.z,s=Math.sqrt(t*t+e*e+i*i);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new A);const e=this.x,i=this.y,s=this.z;let r=Math.sqrt(e*e+i*i+s*s);return r>0?(r=1/r,t.x=e*r,t.y=i*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-i)*(o-i)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-i)*(o-i)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new A);const i=this.x,s=this.y,r=this.z;return e.x=t*i,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new A),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,i){return i===void 0&&(i=new A),i.x=this.x+t*e.x,i.y=this.y+t*e.y,i.z=this.z+t*e.z,i}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new A),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const i=this.length();if(i>0){const s=VS,r=1/i;s.set(this.x*r,this.y*r,this.z*r);const o=HS;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,i){const s=this.x,r=this.y,o=this.z;i.x=s+(t.x-s)*e,i.y=r+(t.y-r)*e,i.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Yd),Yd.almostEquals(t,e)}clone(){return new A(this.x,this.y,this.z)}}A.ZERO=new A(0,0,0);A.UNIT_X=new A(1,0,0);A.UNIT_Y=new A(0,1,0);A.UNIT_Z=new A(0,0,1);const VS=new A,HS=new A,Yd=new A;class Tn{constructor(t){t===void 0&&(t={}),this.lowerBound=new A,this.upperBound=new A,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,i,s){const r=this.lowerBound,o=this.upperBound,a=i;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Kd),l=Kd),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Tn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=i.x&&i.x<=r.x||e.x<=r.x&&r.x<=i.x,a=s.y<=i.y&&i.y<=r.y||e.y<=r.y&&r.y<=i.y,c=s.z<=i.z&&i.z<=r.z||e.z<=r.z&&r.z<=i.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&i.x>=r.x&&e.y<=s.y&&i.y>=r.y&&e.z<=s.z&&i.z>=r.z}getCorners(t,e,i,s,r,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),i.set(h.x,h.y,l.z),s.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const i=Zd,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],h=i[6],f=i[7];this.getCorners(s,r,o,a,c,l,h,f);for(let u=0;u!==8;u++){const d=i[u];t.pointToLocal(d,d)}return e.setFromPoints(i)}toWorldFrame(t,e){const i=Zd,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],h=i[6],f=i[7];this.getCorners(s,r,o,a,c,l,h,f);for(let u=0;u!==8;u++){const d=i[u];t.pointToWorld(d,d)}return e.setFromPoints(i)}overlapsRay(t){const{direction:e,from:i}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-i.x)*s,c=(this.upperBound.x-i.x)*s,l=(this.lowerBound.y-i.y)*r,h=(this.upperBound.y-i.y)*r,f=(this.lowerBound.z-i.z)*o,u=(this.upperBound.z-i.z)*o,d=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(f,u)),p=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(f,u));return!(p<0||d>p)}}const Kd=new A,Zd=[new A,new A,new A,new A,new A,new A,new A,new A];class Jd{constructor(){this.matrix=[]}get(t,e){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}return this.matrix[(i*(i+1)>>1)+s-1]}set(t,e,i){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=i?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class km{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[t]===void 0&&(i[t]=[]),i[t].includes(e)||i[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[t]!==void 0&&i[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const i=this._listeners;if(i[t]===void 0)return this;const s=i[t].indexOf(e);return s!==-1&&i[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const i=this._listeners[t.type];if(i!==void 0){t.target=this;for(let s=0,r=i.length;s<r;s++)i[s].call(this,t)}return this}}class ze{constructor(t,e,i,s){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=i,this.w=s}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const i=Math.sin(e*.5);return this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new A),this.normalize();const e=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/i,t.y=this.y/i,t.z=this.z/i),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const i=GS,s=WS;t.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{const i=t.cross(e);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ze);const i=this.x,s=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=i*h+o*a+s*l-r*c,e.y=s*h+o*c+r*a-i*l,e.z=r*h+o*l+i*c-s*a,e.w=o*h-i*a-s*c-r*l,e}inverse(t){t===void 0&&(t=new ze);const e=this.x,i=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+i*i+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new ze),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new A);const i=t.x,s=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*i+a*r-c*s,f=l*s+c*i-o*r,u=l*r+o*s-a*i,d=-o*i-a*s-c*r;return e.x=h*l+d*-o+f*-c-u*-a,e.y=f*l+d*-a+u*-o-h*-c,e.z=u*l+d*-c+h*-a-f*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let i,s,r;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(i=2*Math.atan2(o,l),s=Math.PI/2,r=0),h<-.499&&(i=-2*Math.atan2(o,l),s=-Math.PI/2,r=0),i===void 0){const f=o*o,u=a*a,d=c*c;i=Math.atan2(2*a*l-2*o*c,1-2*u-2*d),s=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=i,t.z=s,t.x=r}setFromEuler(t,e,i,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(i/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(i/2);return s==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):s==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):s==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):s==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new ze(this.x,this.y,this.z,this.w)}slerp(t,e,i){i===void 0&&(i=new ze);const s=this.x,r=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,f=t.w,u,d,p,v,m;return d=s*c+r*l+o*h+a*f,d<0&&(d=-d,c=-c,l=-l,h=-h,f=-f),1-d>1e-6?(u=Math.acos(d),p=Math.sin(u),v=Math.sin((1-e)*u)/p,m=Math.sin(e*u)/p):(v=1-e,m=e),i.x=v*s+m*c,i.y=v*r+m*l,i.z=v*o+m*h,i.w=v*a+m*f,i}integrate(t,e,i,s){s===void 0&&(s=new ze);const r=t.x*i.x,o=t.y*i.y,a=t.z*i.z,c=this.x,l=this.y,h=this.z,f=this.w,u=e*.5;return s.x+=u*(r*f+o*h-a*l),s.y+=u*(o*f+a*c-r*h),s.z+=u*(a*f+r*l-o*c),s.w+=u*(-r*c-o*l-a*h),s}}const GS=new A,WS=new A,qS={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class At{constructor(t){t===void 0&&(t={}),this.id=At.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}At.idCounter=0;At.types=qS;class he{constructor(t){t===void 0&&(t={}),this.position=new A,this.quaternion=new ze,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return he.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return he.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,i,s){return s===void 0&&(s=new A),i.vsub(t,s),e.conjugate(Qd),Qd.vmult(s,s),s}static pointToWorldFrame(t,e,i,s){return s===void 0&&(s=new A),e.vmult(i,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,i){return i===void 0&&(i=new A),t.vmult(e,i),i}static vectorToLocalFrame(t,e,i,s){return s===void 0&&(s=new A),e.w*=-1,e.vmult(i,s),e.w*=-1,s}}const Qd=new ze;class Wr extends At{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:i=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:At.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,i=this.uniqueEdges;i.length=0;const s=new A;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],s),s.normalize();let h=!1;for(let f=0;f!==i.length;f++)if(i[f].almostEquals(s)||i[f].almostEquals(s)){h=!0;break}h||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new A;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const i=this.vertices[this.faces[t][0]];if(e.dot(i)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const i=this.faces[t],s=this.vertices[i[0]],r=this.vertices[i[1]],o=this.vertices[i[2]];Wr.computeNormal(s,r,o,e)}static computeNormal(t,e,i,s){const r=new A,o=new A;e.vsub(t,o),i.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,i,s,r,o,a,c,l){const h=new A;let f=-1,u=-Number.MAX_VALUE;for(let p=0;p<i.faces.length;p++){h.copy(i.faceNormals[p]),r.vmult(h,h);const v=h.dot(o);v>u&&(u=v,f=p)}const d=[];for(let p=0;p<i.faces[f].length;p++){const v=i.vertices[i.faces[f][p]],m=new A;m.copy(v),r.vmult(m,m),s.vadd(m,m),d.push(m)}f>=0&&this.clipFaceAgainstHull(o,t,e,d,a,c,l)}findSeparatingAxis(t,e,i,s,r,o,a,c){const l=new A,h=new A,f=new A,u=new A,d=new A,p=new A;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){i.vmult(m.uniqueAxes[g],l);const y=m.testSepAxis(l,t,e,i,s,r);if(y===!1)return!1;y<v&&(v=y,o.copy(l))}else{const g=a?a.length:m.faces.length;for(let y=0;y<g;y++){const x=a?a[y]:y;l.copy(m.faceNormals[x]),i.vmult(l,l);const b=m.testSepAxis(l,t,e,i,s,r);if(b===!1)return!1;b<v&&(v=b,o.copy(l))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){r.vmult(t.uniqueAxes[g],h);const y=m.testSepAxis(h,t,e,i,s,r);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}else{const g=c?c.length:t.faces.length;for(let y=0;y<g;y++){const x=c?c[y]:y;h.copy(t.faceNormals[x]),r.vmult(h,h);const b=m.testSepAxis(h,t,e,i,s,r);if(b===!1)return!1;b<v&&(v=b,o.copy(h))}}for(let g=0;g!==m.uniqueEdges.length;g++){i.vmult(m.uniqueEdges[g],u);for(let y=0;y!==t.uniqueEdges.length;y++)if(r.vmult(t.uniqueEdges[y],d),u.cross(d,p),!p.almostZero()){p.normalize();const x=m.testSepAxis(p,t,e,i,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(p))}}return s.vsub(e,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,i,s,r,o){const a=this;Wr.project(a,t,i,s,Wc),Wr.project(e,t,r,o,qc);const c=Wc[0],l=Wc[1],h=qc[0],f=qc[1];if(c<f||h<l)return!1;const u=c-f,d=h-l;return u<d?u:d}calculateLocalInertia(t,e){const i=new A,s=new A;this.computeLocalAABB(s,i);const r=i.x-s.x,o=i.y-s.y,a=i.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],i=this.faceNormals[t],s=this.vertices[e[0]];return-i.dot(s)}clipFaceAgainstHull(t,e,i,s,r,o,a){const c=new A,l=new A,h=new A,f=new A,u=new A,d=new A,p=new A,v=new A,m=this,g=[],y=s,x=g;let b=-1,S=Number.MAX_VALUE;for(let P=0;P<m.faces.length;P++){c.copy(m.faceNormals[P]),i.vmult(c,c);const R=c.dot(t);R<S&&(S=R,b=P)}if(b<0)return;const M=m.faces[b];M.connectedFaces=[];for(let P=0;P<m.faces.length;P++)for(let R=0;R<m.faces[P].length;R++)M.indexOf(m.faces[P][R])!==-1&&P!==b&&M.connectedFaces.indexOf(P)===-1&&M.connectedFaces.push(P);const D=M.length;for(let P=0;P<D;P++){const R=m.vertices[M[P]],U=m.vertices[M[(P+1)%D]];R.vsub(U,l),h.copy(l),i.vmult(h,h),e.vadd(h,h),f.copy(this.faceNormals[b]),i.vmult(f,f),e.vadd(f,f),h.cross(f,u),u.negate(u),d.copy(R),i.vmult(d,d),e.vadd(d,d);const O=M.connectedFaces[P];p.copy(this.faceNormals[O]);const N=this.getPlaneConstantOfFace(O);v.copy(p),i.vmult(v,v);const L=N-v.dot(e);for(this.clipFaceAgainstPlane(y,x,v,L);y.length;)y.shift();for(;x.length;)y.push(x.shift())}p.copy(this.faceNormals[b]);const _=this.getPlaneConstantOfFace(b);v.copy(p),i.vmult(v,v);const T=_-v.dot(e);for(let P=0;P<y.length;P++){let R=v.dot(y[P])+T;if(R<=r&&(console.log(`clamped: depth=${R} to minDist=${r}`),R=r),R<=o){const U=y[P];if(R<=1e-6){const O={point:U,normal:v,depth:R};a.push(O)}}}}clipFaceAgainstPlane(t,e,i,s){let r,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=i.dot(c)+s;for(let h=0;h<a;h++){if(l=t[h],o=i.dot(l)+s,r<0)if(o<0){const f=new A;f.copy(l),e.push(f)}else{const f=new A;c.lerp(l,r/(r-o),f),e.push(f)}else if(o<0){const f=new A;c.lerp(l,r/(r-o),f),e.push(f),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new A);const i=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(i[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const i=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=i[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new A);const i=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(i[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let i=0;i!==e.length;i++){const s=e[i].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,i,s){const r=this.vertices;let o,a,c,l,h,f,u=new A;for(let d=0;d<r.length;d++){u.copy(r[d]),e.vmult(u,u),t.vadd(u,u);const p=u;(o===void 0||p.x<o)&&(o=p.x),(l===void 0||p.x>l)&&(l=p.x),(a===void 0||p.y<a)&&(a=p.y),(h===void 0||p.y>h)&&(h=p.y),(c===void 0||p.z<c)&&(c=p.z),(f===void 0||p.z>f)&&(f=p.z)}i.set(o,a,c),s.set(l,h,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new A);const e=this.vertices;for(let i=0;i<e.length;i++)t.vadd(e[i],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const i=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<i;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<i;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,i=this.faces,s=this.faceNormals,r=new A;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const c=e[i[o][0]],l=new A;t.vsub(c,l);const h=a.dot(l),f=new A;r.vsub(c,f);const u=a.dot(f);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,i,s,r){const o=t.vertices.length,a=XS;let c=0,l=0;const h=$S,f=t.vertices;h.setZero(),he.vectorToLocalFrame(i,s,e,a),he.pointToLocalFrame(i,s,h,h);const u=h.dot(a);l=c=f[0].dot(a);for(let d=1;d<o;d++){const p=f[d].dot(a);p>c&&(c=p),p<l&&(l=p)}if(l-=u,c-=u,l>c){const d=l;l=c,c=d}r[0]=c,r[1]=l}}const Wc=[],qc=[];new A;const XS=new A,$S=new A;class Kh extends At{constructor(t){super({type:At.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,i=this.halfExtents.z,s=A,r=[new s(-t,-e,-i),new s(t,-e,-i),new s(t,e,-i),new s(-t,e,-i),new s(-t,-e,i),new s(t,-e,i),new s(t,e,i),new s(-t,e,i)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],c=new Wr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new A),Kh.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,i){const s=t;i.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const i=t,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==i.length;r++)e.vmult(i[r],i[r]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,i){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Gi.set(r[o][0],r[o][1],r[o][2]),e.vmult(Gi,Gi),t.vadd(Gi,Gi),i(Gi.x,Gi.y,Gi.z)}calculateWorldAABB(t,e,i,s){const r=this.halfExtents;Kn[0].set(r.x,r.y,r.z),Kn[1].set(-r.x,r.y,r.z),Kn[2].set(-r.x,-r.y,r.z),Kn[3].set(-r.x,-r.y,-r.z),Kn[4].set(r.x,-r.y,-r.z),Kn[5].set(r.x,r.y,-r.z),Kn[6].set(-r.x,r.y,-r.z),Kn[7].set(r.x,-r.y,r.z);const o=Kn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),i.copy(o);for(let a=1;a<8;a++){const c=Kn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,f=c.z;l>s.x&&(s.x=l),h>s.y&&(s.y=h),f>s.z&&(s.z=f),l<i.x&&(i.x=l),h<i.y&&(i.y=h),f<i.z&&(i.z=f)}}}const Gi=new A,Kn=[new A,new A,new A,new A,new A,new A,new A,new A],Zh={DYNAMIC:1,STATIC:2,KINEMATIC:4},Jh={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ct extends km{constructor(t){t===void 0&&(t={}),super(),this.id=Ct.idCounter++,this.index=-1,this.world=null,this.vlambda=new A,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new A,this.previousPosition=new A,this.interpolatedPosition=new A,this.initPosition=new A,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new A,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new A,this.force=new A;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Ct.STATIC:Ct.DYNAMIC,typeof t.type==typeof Ct.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ct.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new A,this.quaternion=new ze,this.initQuaternion=new ze,this.previousQuaternion=new ze,this.interpolatedQuaternion=new ze,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new A,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new A,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new A,this.invInertia=new A,this.invInertiaWorld=new Hn,this.invMassSolve=0,this.invInertiaSolve=new A,this.invInertiaWorldSolve=new Hn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new A(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new A(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Tn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new A,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ct.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ct.SLEEPING&&this.dispatchEvent(Ct.wakeupEvent)}sleep(){this.sleepState=Ct.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===Ct.AWAKE&&i<s?(this.sleepState=Ct.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ct.sleepyEvent)):e===Ct.SLEEPY&&i>s?this.wakeUp():e===Ct.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ct.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ct.SLEEPING||this.type===Ct.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new A),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new A),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e}addShape(t,e,i){const s=new A,r=new ze;return e&&s.copy(e),i&&r.copy(i),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,i=t.length;let s=0;for(let r=0;r!==i;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),c=o.boundingSphereRadius;a+c>s&&(s=a+c)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,i=this.shapeOrientations,s=t.length,r=jS,o=YS,a=this.quaternion,c=this.aabb,l=KS;for(let h=0;h!==s;h++){const f=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(i[h],o),f.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const i=ZS,s=JS;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(e,i),i.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new A),this.type!==Ct.DYNAMIC)return;this.sleepState===Ct.SLEEPING&&this.wakeUp();const i=QS;e.cross(t,i),this.force.vadd(t,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new A),this.type!==Ct.DYNAMIC)return;const i=tM,s=eM;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyForce(i,s)}applyTorque(t){this.type===Ct.DYNAMIC&&(this.sleepState===Ct.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new A),this.type!==Ct.DYNAMIC)return;this.sleepState===Ct.SLEEPING&&this.wakeUp();const i=e,s=nM;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=iM;i.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new A),this.type!==Ct.DYNAMIC)return;const i=sM,s=rM;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyImpulse(i,s)}updateMassProperties(){const t=oM;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,i=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Kh.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!i?1/e.x:0,e.y>0&&!i?1/e.y:0,e.z>0&&!i?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const i=new A;return t.vsub(this.position,i),this.angularVelocity.cross(i,e),this.velocity.vadd(e,e),e}integrate(t,e,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ct.DYNAMIC||this.type===Ct.KINEMATIC)||this.sleepState===Ct.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,f=this.invInertiaWorld,u=this.linearFactor,d=h*t;s.x+=a.x*d*u.x,s.y+=a.y*d*u.y,s.z+=a.z*d*u.z;const p=f.elements,v=this.angularFactor,m=c.x*v.x,g=c.y*v.y,y=c.z*v.z;r.x+=t*(p[0]*m+p[1]*g+p[2]*y),r.y+=t*(p[3]*m+p[4]*g+p[5]*y),r.z+=t*(p[6]*m+p[7]*g+p[8]*y),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(i?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ct.idCounter=0;Ct.COLLIDE_EVENT_NAME="collide";Ct.DYNAMIC=Zh.DYNAMIC;Ct.STATIC=Zh.STATIC;Ct.KINEMATIC=Zh.KINEMATIC;Ct.AWAKE=Jh.AWAKE;Ct.SLEEPY=Jh.SLEEPY;Ct.SLEEPING=Jh.SLEEPING;Ct.wakeupEvent={type:"wakeup"};Ct.sleepyEvent={type:"sleepy"};Ct.sleepEvent={type:"sleep"};const jS=new A,YS=new ze,KS=new Tn,ZS=new Hn,JS=new Hn;new Hn;const QS=new A,tM=new A,eM=new A,nM=new A,iM=new A,sM=new A,rM=new A,oM=new A;class aM{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Ct.STATIC||t.sleepState===Ct.SLEEPING)&&(e.type&Ct.STATIC||e.sleepState===Ct.SLEEPING))}intersectionTest(t,e,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,i,s):this.doBoundingSphereBroadphase(t,e,i,s)}doBoundingSphereBroadphase(t,e,i,s){const r=cM;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(i.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,i,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(i.push(t),s.push(e))}makePairsUnique(t,e){const i=lM,s=hM,r=uM,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=s[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;i[h]=a,i.keys.push(h)}for(let a=0;a!==i.keys.length;a++){const c=i.keys.pop(),l=i[c];t.push(s[l]),e.push(r[l]),delete i[c]}}setWorld(t){}static boundingSphereCheck(t,e){const i=new A;t.position.vsub(e.position,i);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(t,e,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const cM=new A;new A;new ze;new A;const lM={keys:[]},hM=[],uM=[];new A;new A;new A;class dM extends aM{constructor(){super()}collisionPairs(t,e,i){const s=t.bodies,r=s.length;let o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=s[c],a=s[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,i)}aabbQuery(t,e,i){i===void 0&&(i=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&i.push(r)}return i}}class Ra{constructor(){this.rayFromWorld=new A,this.rayToWorld=new A,this.hitNormalWorld=new A,this.hitPointWorld=new A,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,i,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let Vm,Hm,Gm,Wm,qm,Xm,$m;const Qh={CLOSEST:1,ANY:2,ALL:4};Vm=At.types.SPHERE;Hm=At.types.PLANE;Gm=At.types.BOX;Wm=At.types.CYLINDER;qm=At.types.CONVEXPOLYHEDRON;Xm=At.types.HEIGHTFIELD;$m=At.types.TRIMESH;class Be{get[Vm](){return this._intersectSphere}get[Hm](){return this._intersectPlane}get[Gm](){return this._intersectBox}get[Wm](){return this._intersectConvex}get[qm](){return this._intersectConvex}get[Xm](){return this._intersectHeightfield}get[$m](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new A),e===void 0&&(e=new A),this.from=t.clone(),this.to=e.clone(),this.direction=new A,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Be.ANY,this.result=new Ra,this.hasHit=!1,this.callback=i=>{}}intersectWorld(t,e){return this.mode=e.mode||Be.ANY,this.result=e.result||new Ra,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(tf),Xc.length=0,t.broadphase.aabbQuery(t,tf,Xc),this.intersectBodies(Xc),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=fM,r=pM;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(i&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(c,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let i=0,s=t.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(t[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,i,s){const r=this.from;if(CM(r,this.direction,i)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,i,s,t)}_intersectBox(t,e,i,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,i,s,r)}_intersectPlane(t,e,i,s,r){const o=this.from,a=this.to,c=this.direction,l=new A(0,0,1);e.vmult(l,l);const h=new A;o.vsub(i,h);const f=h.dot(l);a.vsub(i,h);const u=h.dot(l);if(f*u>0||o.distanceTo(a)<f)return;const d=l.dot(c);if(Math.abs(d)<this.precision)return;const p=new A,v=new A,m=new A;o.vsub(i,p);const g=-l.dot(p)/d;c.scale(g,v),o.vadd(v,m),this.reportIntersection(l,m,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:i}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),i.x=Math.max(s.x,r.x),i.y=Math.max(s.y,r.y),i.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,i,s,r){t.data,t.elementSize;const o=mM;o.from.copy(this.from),o.to.copy(this.to),he.pointToLocalFrame(i,e,o.from,o.from),he.pointToLocalFrame(i,e,o.to,o.to),o.updateDirection();const a=gM;let c,l,h,f;c=l=0,h=f=t.data.length-1;const u=new Tn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),f=Math.min(f,a[1]+1);for(let d=c;d<h;d++)for(let p=l;p<f;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,p,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(d,p,!1),he.pointToWorldFrame(i,e,t.pillarOffset,Go),this._intersectConvex(t.pillarConvex,e,Go,s,r,ef),this.result.shouldStop)return;t.getConvexTrianglePillar(d,p,!0),he.pointToWorldFrame(i,e,t.pillarOffset,Go),this._intersectConvex(t.pillarConvex,e,Go,s,r,ef)}}}_intersectSphere(t,e,i,s,r){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-i.x)+(a.y-o.y)*(o.y-i.y)+(a.z-o.z)*(o.z-i.z)),f=(o.x-i.x)**2+(o.y-i.y)**2+(o.z-i.z)**2-c**2,u=h**2-4*l*f,d=vM,p=yM;if(!(u<0))if(u===0)o.lerp(a,u,d),d.vsub(i,p),p.normalize(),this.reportIntersection(p,d,r,s,-1);else{const v=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,d),d.vsub(i,p),p.normalize(),this.reportIntersection(p,d,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(i,p),p.normalize(),this.reportIntersection(p,d,r,s,-1))}}_intersectConvex(t,e,i,s,r,o){const a=_M,c=nf,l=o&&o.faceList||null,h=t.faces,f=t.vertices,u=t.faceNormals,d=this.direction,p=this.from,v=this.to,m=p.distanceTo(v),g=l?l.length:h.length,y=this.result;for(let x=0;!y.shouldStop&&x<g;x++){const b=l?l[x]:x,S=h[b],M=u[b],D=e,_=i;c.copy(f[S[0]]),D.vmult(c,c),c.vadd(_,c),c.vsub(p,c),D.vmult(M,a);const T=d.dot(a);if(Math.abs(T)<this.precision)continue;const P=a.dot(c)/T;if(!(P<0)){d.scale(P,hn),hn.vadd(p,hn),Un.copy(f[S[0]]),D.vmult(Un,Un),_.vadd(Un,Un);for(let R=1;!y.shouldStop&&R<S.length-1;R++){Zn.copy(f[S[R]]),Jn.copy(f[S[R+1]]),D.vmult(Zn,Zn),D.vmult(Jn,Jn),_.vadd(Zn,Zn),_.vadd(Jn,Jn);const U=hn.distanceTo(p);!(Be.pointInTriangle(hn,Un,Zn,Jn)||Be.pointInTriangle(hn,Zn,Un,Jn))||U>m||this.reportIntersection(a,hn,r,s,b)}}}}_intersectTrimesh(t,e,i,s,r,o){const a=xM,c=TM,l=AM,h=nf,f=bM,u=wM,d=SM,p=EM,v=MM,m=t.indices;t.vertices;const g=this.from,y=this.to,x=this.direction;l.position.copy(i),l.quaternion.copy(e),he.vectorToLocalFrame(i,e,x,f),he.pointToLocalFrame(i,e,g,u),he.pointToLocalFrame(i,e,y,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,d.vsub(u,f),f.normalize();const b=u.distanceSquared(d);t.tree.rayQuery(this,l,c);for(let S=0,M=c.length;!this.result.shouldStop&&S!==M;S++){const D=c[S];t.getNormal(D,a),t.getVertex(m[D*3],Un),Un.vsub(u,h);const _=f.dot(a),T=a.dot(h)/_;if(T<0)continue;f.scale(T,hn),hn.vadd(u,hn),t.getVertex(m[D*3+1],Zn),t.getVertex(m[D*3+2],Jn);const P=hn.distanceSquared(u);!(Be.pointInTriangle(hn,Zn,Un,Jn)||Be.pointInTriangle(hn,Un,Zn,Jn))||P>b||(he.vectorToWorldFrame(e,a,v),he.pointToWorldFrame(i,e,hn,p),this.reportIntersection(v,p,r,s,D))}c.length=0}reportIntersection(t,e,i,s,r){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Be.ALL:this.hasHit=!0,l.set(o,a,t,e,i,s,c),l.hasHit=!0,this.callback(l);break;case Be.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,i,s,c));break;case Be.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,i,s,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,i,s){s.vsub(e,ds),i.vsub(e,xr),t.vsub(e,$c);const r=ds.dot(ds),o=ds.dot(xr),a=ds.dot($c),c=xr.dot(xr),l=xr.dot($c);let h,f;return(h=c*a-o*l)>=0&&(f=r*l-o*a)>=0&&h+f<r*c-o*o}}Be.CLOSEST=Qh.CLOSEST;Be.ANY=Qh.ANY;Be.ALL=Qh.ALL;const tf=new Tn,Xc=[],xr=new A,$c=new A,fM=new A,pM=new ze,hn=new A,Un=new A,Zn=new A,Jn=new A;new A;new Ra;const ef={faceList:[0]},Go=new A,mM=new Be,gM=[],vM=new A,yM=new A,_M=new A;new A;new A;const nf=new A,xM=new A,bM=new A,wM=new A,SM=new A,MM=new A,EM=new A;new Tn;const TM=[],AM=new he,ds=new A,Wo=new A;function CM(n,t,e){e.vsub(n,ds);const i=ds.dot(t);return t.scale(i,Wo),Wo.vadd(n,Wo),e.distanceTo(Wo)}class PM{static defaults(t,e){t===void 0&&(t={});for(let i in e)i in t||(t[i]=e[i]);return t}}class sf{constructor(){this.spatial=new A,this.rotational=new A}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class co{constructor(t,e,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=co.idCounter++,this.minForce=i,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new sf,this.jacobianElementB=new sf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,i){const s=e,r=t,o=i;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,i){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*i}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.velocity,o=s.velocity,a=i.angularVelocity,c=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.vlambda,o=s.vlambda,a=i.wlambda,c=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.force,o=i.torque,a=s.force,c=s.torque,l=i.invMassSolve,h=s.invMassSolve;return r.scale(l,rf),a.scale(h,of),i.invInertiaWorldSolve.vmult(o,af),s.invInertiaWorldSolve.vmult(c,cf),t.multiplyVectors(rf,af)+e.multiplyVectors(of,cf)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.invMassSolve,o=s.invMassSolve,a=i.invInertiaWorldSolve,c=s.invInertiaWorldSolve;let l=r+o;return a.vmult(t.rotational,qo),l+=qo.dot(t.rotational),c.vmult(e.rotational,qo),l+=qo.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,r=this.bj,o=RM;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,i.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(i.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}co.idCounter=0;const rf=new A,of=new A,af=new A,cf=new A,qo=new A,RM=new A;class IM extends co{constructor(t,e,i){i===void 0&&(i=1e6),super(t,e,0,i),this.restitution=0,this.ri=new A,this.rj=new A,this.ni=new A}computeB(t){const e=this.a,i=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,c=DM,l=LM,h=s.velocity,f=s.angularVelocity;s.force,s.torque;const u=r.velocity,d=r.angularVelocity;r.force,r.torque;const p=NM,v=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,c),a.cross(g,l),g.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(g),m.rotational.copy(l),p.copy(r.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(o,p);const y=g.dot(p),x=this.restitution+1,b=x*u.dot(g)-x*h.dot(g)+d.dot(l)-f.dot(c),S=this.computeGiMf();return-y*e-b*i-t*S}getImpactVelocityAlongNormal(){const t=FM,e=UM,i=OM,s=BM,r=zM;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const DM=new A,LM=new A,NM=new A,FM=new A,UM=new A,OM=new A,BM=new A,zM=new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class lf extends co{constructor(t,e,i){super(t,e,-i,i),this.ri=new A,this.rj=new A,this.t=new A}computeB(t){this.a;const e=this.b;this.bi,this.bj;const i=this.ri,s=this.rj,r=kM,o=VM,a=this.t;i.cross(a,r),s.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),f=this.computeGiMf();return-h*e-t*f}}const kM=new A,VM=new A;class Ka{constructor(t,e,i){i=PM.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ka.idCounter++,this.materials=[t,e],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}Ka.idCounter=0;class Za{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Za.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Za.idCounter=0;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new Be;new A;new A;new A;new A(1,0,0),new A(0,1,0),new A(0,0,1);new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class HM extends At{constructor(t){if(super({type:At.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new A);const i=2*t*this.radius*this.radius/5;return e.x=i,e.y=i,e.z=i,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,i,s){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];i[c]=t[c]-r,s[c]=t[c]+r}}}new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new Tn;new A;new Tn;new A;new A;new A;new A;new A;new A;new A;new Tn;new A;new he;new Tn;class GM{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,i=e.indexOf(t);i!==-1&&e.splice(i,1)}removeAllEquations(){this.equations.length=0}}class WM extends GM{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let i=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let f,u,d,p,v,m;if(a!==0)for(let b=0;b!==l;b++)c[b].updateSolveMassProperties();const g=XM,y=$M,x=qM;g.length=a,y.length=a,x.length=a;for(let b=0;b!==a;b++){const S=o[b];x[b]=0,y[b]=S.computeB(h),g[b]=1/S.computeC()}if(a!==0){for(let M=0;M!==l;M++){const D=c[M],_=D.vlambda,T=D.wlambda;_.set(0,0,0),T.set(0,0,0)}for(i=0;i!==s;i++){p=0;for(let M=0;M!==a;M++){const D=o[M];f=y[M],u=g[M],m=x[M],v=D.computeGWlambda(),d=u*(f-v-D.eps*m),m+d<D.minForce?d=D.minForce-m:m+d>D.maxForce&&(d=D.maxForce-m),x[M]+=d,p+=d>0?d:-d,D.addToWlambda(d)}if(p*p<r)break}for(let M=0;M!==l;M++){const D=c[M],_=D.velocity,T=D.angularVelocity;D.vlambda.vmul(D.linearFactor,D.vlambda),_.vadd(D.vlambda,_),D.wlambda.vmul(D.angularFactor,D.wlambda),T.vadd(D.wlambda,T)}let b=o.length;const S=1/h;for(;b--;)o[b].multiplier=x[b]*S}return i}}const qM=[],XM=[],$M=[];class jM{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class YM extends jM{constructor(){super(...arguments),this.type=A}constructObject(){return new A}}const Te={sphereSphere:At.types.SPHERE,spherePlane:At.types.SPHERE|At.types.PLANE,boxBox:At.types.BOX|At.types.BOX,sphereBox:At.types.SPHERE|At.types.BOX,planeBox:At.types.PLANE|At.types.BOX,convexConvex:At.types.CONVEXPOLYHEDRON,sphereConvex:At.types.SPHERE|At.types.CONVEXPOLYHEDRON,planeConvex:At.types.PLANE|At.types.CONVEXPOLYHEDRON,boxConvex:At.types.BOX|At.types.CONVEXPOLYHEDRON,sphereHeightfield:At.types.SPHERE|At.types.HEIGHTFIELD,boxHeightfield:At.types.BOX|At.types.HEIGHTFIELD,convexHeightfield:At.types.CONVEXPOLYHEDRON|At.types.HEIGHTFIELD,sphereParticle:At.types.PARTICLE|At.types.SPHERE,planeParticle:At.types.PLANE|At.types.PARTICLE,boxParticle:At.types.BOX|At.types.PARTICLE,convexParticle:At.types.PARTICLE|At.types.CONVEXPOLYHEDRON,cylinderCylinder:At.types.CYLINDER,sphereCylinder:At.types.SPHERE|At.types.CYLINDER,planeCylinder:At.types.PLANE|At.types.CYLINDER,boxCylinder:At.types.BOX|At.types.CYLINDER,convexCylinder:At.types.CONVEXPOLYHEDRON|At.types.CYLINDER,heightfieldCylinder:At.types.HEIGHTFIELD|At.types.CYLINDER,particleCylinder:At.types.PARTICLE|At.types.CYLINDER,sphereTrimesh:At.types.SPHERE|At.types.TRIMESH,planeTrimesh:At.types.PLANE|At.types.TRIMESH};class KM{get[Te.sphereSphere](){return this.sphereSphere}get[Te.spherePlane](){return this.spherePlane}get[Te.boxBox](){return this.boxBox}get[Te.sphereBox](){return this.sphereBox}get[Te.planeBox](){return this.planeBox}get[Te.convexConvex](){return this.convexConvex}get[Te.sphereConvex](){return this.sphereConvex}get[Te.planeConvex](){return this.planeConvex}get[Te.boxConvex](){return this.boxConvex}get[Te.sphereHeightfield](){return this.sphereHeightfield}get[Te.boxHeightfield](){return this.boxHeightfield}get[Te.convexHeightfield](){return this.convexHeightfield}get[Te.sphereParticle](){return this.sphereParticle}get[Te.planeParticle](){return this.planeParticle}get[Te.boxParticle](){return this.boxParticle}get[Te.convexParticle](){return this.convexParticle}get[Te.cylinderCylinder](){return this.convexConvex}get[Te.sphereCylinder](){return this.sphereConvex}get[Te.planeCylinder](){return this.planeConvex}get[Te.boxCylinder](){return this.boxConvex}get[Te.convexCylinder](){return this.convexConvex}get[Te.heightfieldCylinder](){return this.heightfieldCylinder}get[Te.particleCylinder](){return this.particleCylinder}get[Te.sphereTrimesh](){return this.sphereTrimesh}get[Te.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new YM,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,i,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new IM(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&i.collisionResponse&&s.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=i.material||t.material,h=s.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||i,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const i=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=r.material||i.material,f=o.material||s.material;if(h&&f&&h.friction>=0&&f.friction>=0&&(l=h.friction*f.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let d=i.invMass+s.invMass;d>0&&(d=1/d);const p=this.frictionEquationPool,v=p.length?p.pop():new lf(i,s,u*d),m=p.length?p.pop():new lf(i,s,u*d);return v.bi=m.bi=i,v.bj=m.bj=s,v.minForce=m.minForce=-u*d,v.maxForce=m.maxForce=u*d,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];os.setZero(),Hs.setZero(),Gs.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(os.vadd(e.ni,os),Hs.vadd(e.ri,Hs),Gs.vadd(e.rj,Gs)):(os.vsub(e.ni,os),Hs.vadd(e.rj,Hs),Gs.vadd(e.ri,Gs));const o=1/t;Hs.scale(o,i.ri),Gs.scale(o,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),os.normalize(),os.tangents(i.t,s.t)}getContacts(t,e,i,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const c=QM,l=tE,h=ZM,f=JM;for(let u=0,d=t.length;u!==d;u++){const p=t[u],v=e[u];let m=null;p.material&&v.material&&(m=i.getContactMaterial(p.material,v.material)||null);const g=p.type&Ct.KINEMATIC&&v.type&Ct.STATIC||p.type&Ct.STATIC&&v.type&Ct.KINEMATIC||p.type&Ct.KINEMATIC&&v.type&Ct.KINEMATIC;for(let y=0;y<p.shapes.length;y++){p.quaternion.mult(p.shapeOrientations[y],c),p.quaternion.vmult(p.shapeOffsets[y],h),h.vadd(p.position,h);const x=p.shapes[y];for(let b=0;b<v.shapes.length;b++){v.quaternion.mult(v.shapeOrientations[b],l),v.quaternion.vmult(v.shapeOffsets[b],f),f.vadd(v.position,f);const S=v.shapes[b];if(!(x.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(f)>x.boundingSphereRadius+S.boundingSphereRadius)continue;let M=null;x.material&&S.material&&(M=i.getContactMaterial(x.material,S.material)||null),this.currentContactMaterial=M||m||i.defaultContactMaterial;const D=x.type|S.type,_=this[D];if(_){let T=!1;x.type<S.type?T=_.call(this,x,S,h,f,c,l,p,v,x,S,g):T=_.call(this,S,x,f,h,l,c,v,p,x,S,g),T&&g&&(i.shapeOverlapKeeper.set(x.id,S.id),i.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(t,e,i,s,r,o,a,c,l,h,f){if(f)return i.distanceSquared(s)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);s.vsub(i,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(i,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,i,s,r,o,a,c,l,h,f){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),i.vsub(s,Xo),u.ni.scale(u.ni.dot(Xo),hf),Xo.vsub(hf,u.rj),-Xo.dot(u.ni)<=t.radius){if(f)return!0;const d=u.ri,p=u.rj;d.vadd(i,d),d.vsub(a.position,d),p.vadd(s,p),p.vsub(c.position,p),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,i,s,r,o,a,c,l,h,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,i,s,r,o,a,c,t,e,f)}sphereBox(t,e,i,s,r,o,a,c,l,h,f){const u=this.v3pool,d=TE;i.vsub(s,$o),e.getSideNormals(d,o);const p=t.radius;let v=!1;const m=CE,g=PE,y=RE;let x=null,b=0,S=0,M=0,D=null;for(let F=0,k=d.length;F!==k&&v===!1;F++){const X=SE;X.copy(d[F]);const $=X.length();X.normalize();const st=$o.dot(X);if(st<$+p&&st>0){const at=ME,Q=EE;at.copy(d[(F+1)%3]),Q.copy(d[(F+2)%3]);const zt=at.length(),Jt=Q.length();at.normalize(),Q.normalize();const kt=$o.dot(at),K=$o.dot(Q);if(kt<zt&&kt>-zt&&K<Jt&&K>-Jt){const gt=Math.abs(st-$-p);if((D===null||gt<D)&&(D=gt,S=kt,M=K,x=$,m.copy(X),g.copy(at),y.copy(Q),b++,f))return!0}}}if(b){v=!0;const F=this.createContactEquation(a,c,t,e,l,h);m.scale(-p,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(x,m),g.scale(S,g),m.vadd(g,m),y.scale(M,y),m.vadd(y,F.rj),F.ri.vadd(i,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(s,F.rj),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let _=u.get();const T=AE;for(let F=0;F!==2&&!v;F++)for(let k=0;k!==2&&!v;k++)for(let X=0;X!==2&&!v;X++)if(_.set(0,0,0),F?_.vadd(d[0],_):_.vsub(d[0],_),k?_.vadd(d[1],_):_.vsub(d[1],_),X?_.vadd(d[2],_):_.vsub(d[2],_),s.vadd(_,T),T.vsub(i,T),T.lengthSquared()<p*p){if(f)return!0;v=!0;const $=this.createContactEquation(a,c,t,e,l,h);$.ri.copy(T),$.ri.normalize(),$.ni.copy($.ri),$.ri.scale(p,$.ri),$.rj.copy(_),$.ri.vadd(i,$.ri),$.ri.vsub(a.position,$.ri),$.rj.vadd(s,$.rj),$.rj.vsub(c.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}u.release(_),_=null;const P=u.get(),R=u.get(),U=u.get(),O=u.get(),N=u.get(),L=d.length;for(let F=0;F!==L&&!v;F++)for(let k=0;k!==L&&!v;k++)if(F%3!==k%3){d[k].cross(d[F],P),P.normalize(),d[F].vadd(d[k],R),U.copy(i),U.vsub(R,U),U.vsub(s,U);const X=U.dot(P);P.scale(X,O);let $=0;for(;$===F%3||$===k%3;)$++;N.copy(i),N.vsub(O,N),N.vsub(R,N),N.vsub(s,N);const st=Math.abs(X),at=N.length();if(st<d[$].length()&&at<p){if(f)return!0;v=!0;const Q=this.createContactEquation(a,c,t,e,l,h);R.vadd(O,Q.rj),Q.rj.copy(Q.rj),N.negate(Q.ni),Q.ni.normalize(),Q.ri.copy(Q.rj),Q.ri.vadd(s,Q.ri),Q.ri.vsub(i,Q.ri),Q.ri.normalize(),Q.ri.scale(p,Q.ri),Q.ri.vadd(i,Q.ri),Q.ri.vsub(a.position,Q.ri),Q.rj.vadd(s,Q.rj),Q.rj.vsub(c.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}}u.release(P,R,U,O,N)}planeBox(t,e,i,s,r,o,a,c,l,h,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,i,s,r,o,a,c,t,e,f)}convexConvex(t,e,i,s,r,o,a,c,l,h,f,u,d){const p=qE;if(!(i.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,i,r,s,o,p,u,d)){const v=[],m=XE;t.clipAgainstHull(i,r,e,s,o,p,-100,100,v);let g=0;for(let y=0;y!==v.length;y++){if(f)return!0;const x=this.createContactEquation(a,c,t,e,l,h),b=x.ri,S=x.rj;p.negate(x.ni),v[y].normal.negate(m),m.scale(v[y].depth,m),v[y].point.vadd(m,b),S.copy(v[y].point),b.vsub(i,b),S.vsub(s,S),b.vadd(i,b),b.vsub(a.position,b),S.vadd(s,S),S.vsub(c.position,S),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,i,s,r,o,a,c,l,h,f){const u=this.v3pool;i.vsub(s,IE);const d=e.faceNormals,p=e.faces,v=e.vertices,m=t.radius;let g=!1;for(let y=0;y!==v.length;y++){const x=v[y],b=FE;o.vmult(x,b),s.vadd(b,b);const S=NE;if(b.vsub(i,S),S.lengthSquared()<m*m){if(f)return!0;g=!0;const M=this.createContactEquation(a,c,t,e,l,h);M.ri.copy(S),M.ri.normalize(),M.ni.copy(M.ri),M.ri.scale(m,M.ri),b.vsub(s,M.rj),M.ri.vadd(i,M.ri),M.ri.vsub(a.position,M.ri),M.rj.vadd(s,M.rj),M.rj.vsub(c.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);return}}for(let y=0,x=p.length;y!==x&&g===!1;y++){const b=d[y],S=p[y],M=UE;o.vmult(b,M);const D=OE;o.vmult(v[S[0]],D),D.vadd(s,D);const _=BE;M.scale(-m,_),i.vadd(_,_);const T=zE;_.vsub(D,T);const P=T.dot(M),R=kE;if(i.vsub(D,R),P<0&&R.dot(M)>0){const U=[];for(let O=0,N=S.length;O!==N;O++){const L=u.get();o.vmult(v[S[O]],L),s.vadd(L,L),U.push(L)}if(wE(U,M,i)){if(f)return!0;g=!0;const O=this.createContactEquation(a,c,t,e,l,h);M.scale(-m,O.ri),M.negate(O.ni);const N=u.get();M.scale(-P,N);const L=u.get();M.scale(-m,L),i.vsub(s,O.rj),O.rj.vadd(L,O.rj),O.rj.vadd(N,O.rj),O.rj.vadd(s,O.rj),O.rj.vsub(c.position,O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(a.position,O.ri),u.release(N),u.release(L),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let F=0,k=U.length;F!==k;F++)u.release(U[F]);return}else for(let O=0;O!==S.length;O++){const N=u.get(),L=u.get();o.vmult(v[S[(O+1)%S.length]],N),o.vmult(v[S[(O+2)%S.length]],L),s.vadd(N,N),s.vadd(L,L);const F=DE;L.vsub(N,F);const k=LE;F.unit(k);const X=u.get(),$=u.get();i.vsub(N,$);const st=$.dot(k);k.scale(st,X),X.vadd(N,X);const at=u.get();if(X.vsub(i,at),st>0&&st*st<F.lengthSquared()&&at.lengthSquared()<m*m){if(f)return!0;const Q=this.createContactEquation(a,c,t,e,l,h);X.vsub(s,Q.rj),X.vsub(i,Q.ni),Q.ni.normalize(),Q.ni.scale(m,Q.ri),Q.rj.vadd(s,Q.rj),Q.rj.vsub(c.position,Q.rj),Q.ri.vadd(i,Q.ri),Q.ri.vsub(a.position,Q.ri),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult);for(let zt=0,Jt=U.length;zt!==Jt;zt++)u.release(U[zt]);u.release(N),u.release(L),u.release(X),u.release(at),u.release($);return}u.release(N),u.release(L),u.release(X),u.release(at),u.release($)}for(let O=0,N=U.length;O!==N;O++)u.release(U[O])}}}planeConvex(t,e,i,s,r,o,a,c,l,h,f){const u=VE,d=HE;d.set(0,0,1),r.vmult(d,d);let p=0;const v=GE;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),s.vadd(u,u),u.vsub(i,v),d.dot(v)<=0){if(f)return!0;const y=this.createContactEquation(a,c,t,e,l,h),x=WE;d.scale(d.dot(v),x),u.vsub(x,x),x.vsub(i,y.ri),y.ni.copy(d),u.vsub(s,y.rj),y.ri.vadd(i,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(s,y.rj),y.rj.vsub(c.position,y.rj),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,i,s,r,o,a,c,l,h,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,i,s,r,o,a,c,t,e,f)}sphereHeightfield(t,e,i,s,r,o,a,c,l,h,f){const u=e.data,d=t.radius,p=e.elementSize,v=s1,m=i1;he.pointToLocalFrame(s,o,i,m);let g=Math.floor((m.x-d)/p)-1,y=Math.ceil((m.x+d)/p)+1,x=Math.floor((m.y-d)/p)-1,b=Math.ceil((m.y+d)/p)+1;if(y<0||b<0||g>u.length||x>u[0].length)return;g<0&&(g=0),y<0&&(y=0),x<0&&(x=0),b<0&&(b=0),g>=u.length&&(g=u.length-1),y>=u.length&&(y=u.length-1),b>=u[0].length&&(b=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const S=[];e.getRectMinMax(g,x,y,b,S);const M=S[0],D=S[1];if(m.z-d>D||m.z+d<M)return;const _=this.result;for(let T=g;T<y;T++)for(let P=x;P<b;P++){const R=_.length;let U=!1;if(e.getConvexTrianglePillar(T,P,!1),he.pointToWorldFrame(s,o,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,i,v,r,o,a,c,t,e,f)),f&&U||(e.getConvexTrianglePillar(T,P,!0),he.pointToWorldFrame(s,o,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,i,v,r,o,a,c,t,e,f)),f&&U))return!0;if(_.length-R>2)return}}boxHeightfield(t,e,i,s,r,o,a,c,l,h,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,i,s,r,o,a,c,t,e,f)}convexHeightfield(t,e,i,s,r,o,a,c,l,h,f){const u=e.data,d=e.elementSize,p=t.boundingSphereRadius,v=e1,m=n1,g=t1;he.pointToLocalFrame(s,o,i,g);let y=Math.floor((g.x-p)/d)-1,x=Math.ceil((g.x+p)/d)+1,b=Math.floor((g.y-p)/d)-1,S=Math.ceil((g.y+p)/d)+1;if(x<0||S<0||y>u.length||b>u[0].length)return;y<0&&(y=0),x<0&&(x=0),b<0&&(b=0),S<0&&(S=0),y>=u.length&&(y=u.length-1),x>=u.length&&(x=u.length-1),S>=u[0].length&&(S=u[0].length-1),b>=u[0].length&&(b=u[0].length-1);const M=[];e.getRectMinMax(y,b,x,S,M);const D=M[0],_=M[1];if(!(g.z-p>_||g.z+p<D))for(let T=y;T<x;T++)for(let P=b;P<S;P++){let R=!1;if(e.getConvexTrianglePillar(T,P,!1),he.pointToWorldFrame(s,o,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,i,v,r,o,a,c,null,null,f,m,null)),f&&R||(e.getConvexTrianglePillar(T,P,!0),he.pointToWorldFrame(s,o,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,i,v,r,o,a,c,null,null,f,m,null)),f&&R))return!0}}sphereParticle(t,e,i,s,r,o,a,c,l,h,f){const u=KE;if(u.set(0,0,1),s.vsub(i,u),u.lengthSquared()<=t.radius*t.radius){if(f)return!0;const p=this.createContactEquation(c,a,e,t,l,h);u.normalize(),p.rj.copy(u),p.rj.scale(t.radius,p.rj),p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,i,s,r,o,a,c,l,h,f){const u=$E;u.set(0,0,1),a.quaternion.vmult(u,u);const d=jE;if(s.vsub(a.position,d),u.dot(d)<=0){if(f)return!0;const v=this.createContactEquation(c,a,e,t,l,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=YE;u.scale(u.dot(s),m),s.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,i,s,r,o,a,c,l,h,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,i,s,r,o,a,c,t,e,f)}convexParticle(t,e,i,s,r,o,a,c,l,h,f){let u=-1;const d=JE,p=QE;let v=null;const m=ZE;if(m.copy(s),m.vsub(i,m),r.conjugate(uf),uf.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(i,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let g=0,y=t.faces.length;g!==y;g++){const x=[t.worldVertices[t.faces[g][0]]],b=t.worldFaceNormals[g];s.vsub(x[0],df);const S=-b.dot(df);if(v===null||Math.abs(S)<Math.abs(v)){if(f)return!0;v=S,u=g,d.copy(b)}}if(u!==-1){const g=this.createContactEquation(c,a,e,t,l,h);d.scale(v,p),p.vadd(s,p),p.vsub(i,p),g.rj.copy(p),d.negate(g.ni),g.ri.set(0,0,0);const y=g.ri,x=g.rj;y.vadd(s,y),y.vsub(c.position,y),x.vadd(i,x),x.vsub(a.position,x),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,i,s,r,o,a,c,l,h,f){return this.convexHeightfield(e,t,s,i,o,r,c,a,l,h,f)}particleCylinder(t,e,i,s,r,o,a,c,l,h,f){return this.convexParticle(e,t,s,i,o,r,c,a,l,h,f)}sphereTrimesh(t,e,i,s,r,o,a,c,l,h,f){const u=cE,d=lE,p=hE,v=uE,m=dE,g=fE,y=vE,x=aE,b=rE,S=yE;he.pointToLocalFrame(s,o,i,m);const M=t.radius;y.lowerBound.set(m.x-M,m.y-M,m.z-M),y.upperBound.set(m.x+M,m.y+M,m.z+M),e.getTrianglesInAABB(y,S);const D=oE,_=t.radius*t.radius;for(let O=0;O<S.length;O++)for(let N=0;N<3;N++)if(e.getVertex(e.indices[S[O]*3+N],D),D.vsub(m,b),b.lengthSquared()<=_){if(x.copy(D),he.pointToWorldFrame(s,o,x,D),D.vsub(i,b),f)return!0;let L=this.createContactEquation(a,c,t,e,l,h);L.ni.copy(b),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(t.radius,L.ri),L.ri.vadd(i,L.ri),L.ri.vsub(a.position,L.ri),L.rj.copy(D),L.rj.vsub(c.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let O=0;O<S.length;O++)for(let N=0;N<3;N++){e.getVertex(e.indices[S[O]*3+N],u),e.getVertex(e.indices[S[O]*3+(N+1)%3],d),d.vsub(u,p),m.vsub(d,g);const L=g.dot(p);m.vsub(u,g);let F=g.dot(p);if(F>0&&L<0&&(m.vsub(u,g),v.copy(p),v.normalize(),F=g.dot(v),v.scale(F,g),g.vadd(u,g),g.distanceTo(m)<t.radius)){if(f)return!0;const X=this.createContactEquation(a,c,t,e,l,h);g.vsub(m,X.ni),X.ni.normalize(),X.ni.scale(t.radius,X.ri),X.ri.vadd(i,X.ri),X.ri.vsub(a.position,X.ri),he.pointToWorldFrame(s,o,g,g),g.vsub(c.position,X.rj),he.vectorToWorldFrame(o,X.ni,X.ni),he.vectorToWorldFrame(o,X.ri,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}const T=pE,P=mE,R=gE,U=sE;for(let O=0,N=S.length;O!==N;O++){e.getTriangleVertices(S[O],T,P,R),e.getNormal(S[O],U),m.vsub(T,g);let L=g.dot(U);if(U.scale(L,g),m.vsub(g,g),L=g.distanceTo(m),Be.pointInTriangle(g,T,P,R)&&L<t.radius){if(f)return!0;let F=this.createContactEquation(a,c,t,e,l,h);g.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(i,F.ri),F.ri.vsub(a.position,F.ri),he.pointToWorldFrame(s,o,g,g),g.vsub(c.position,F.rj),he.vectorToWorldFrame(o,F.ni,F.ni),he.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}S.length=0}planeTrimesh(t,e,i,s,r,o,a,c,l,h,f){const u=new A,d=eE;d.set(0,0,1),r.vmult(d,d);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,u);const v=new A;v.copy(u),he.pointToWorldFrame(s,o,v,u);const m=nE;if(u.vsub(i,m),d.dot(m)<=0){if(f)return!0;const y=this.createContactEquation(a,c,t,e,l,h);y.ni.copy(d);const x=iE;d.scale(m.dot(d),x),u.vsub(x,x),y.ri.copy(x),y.ri.vsub(a.position,y.ri),y.rj.copy(u),y.rj.vsub(c.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}}const os=new A,Hs=new A,Gs=new A,ZM=new A,JM=new A,QM=new ze,tE=new ze,eE=new A,nE=new A,iE=new A,sE=new A,rE=new A;new A;const oE=new A,aE=new A,cE=new A,lE=new A,hE=new A,uE=new A,dE=new A,fE=new A,pE=new A,mE=new A,gE=new A,vE=new Tn,yE=[],Xo=new A,hf=new A,_E=new A,xE=new A,bE=new A;function wE(n,t,e){let i=null;const s=n.length;for(let r=0;r!==s;r++){const o=n[r],a=_E;n[(r+1)%s].vsub(o,a);const c=xE;a.cross(t,c);const l=bE;e.vsub(o,l);const h=c.dot(l);if(i===null||h>0&&i===!0||h<=0&&i===!1){i===null&&(i=h>0);continue}else return!1}return!0}const $o=new A,SE=new A,ME=new A,EE=new A,TE=[new A,new A,new A,new A,new A,new A],AE=new A,CE=new A,PE=new A,RE=new A,IE=new A,DE=new A,LE=new A,NE=new A,FE=new A,UE=new A,OE=new A,BE=new A,zE=new A,kE=new A;new A;new A;const VE=new A,HE=new A,GE=new A,WE=new A,qE=new A,XE=new A,$E=new A,jE=new A,YE=new A,KE=new A,uf=new ze,ZE=new A;new A;const JE=new A,df=new A,QE=new A,t1=new A,e1=new A,n1=[0],i1=new A,s1=new A;class ff{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const i=e;e=t,t=i}return t<<16|e}set(t,e){const i=this.getKey(t,e),s=this.current;let r=0;for(;i>s[r];)r++;if(i!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=i}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const i=this.current,s=this.previous,r=i.length,o=s.length;let a=0;for(let c=0;c<r;c++){let l=!1;const h=i[c];for(;h>s[a];)a++;l=h===s[a],l||pf(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=s[c];for(;h>i[a];)a++;l=i[a]===h,l||pf(e,h)}}}function pf(n,t){n.push((t&4294901760)>>16,t&65535)}const jc=(n,t)=>n<t?`${n}-${t}`:`${t}-${n}`;class r1{constructor(){this.data={keys:[]}}get(t,e){const i=jc(t,e);return this.data[i]}set(t,e,i){const s=jc(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=i}delete(t,e){const i=jc(t,e),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const i=e.pop();delete t[i]}}}class o1 extends km{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new A,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new A,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new dM,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new WM,this.constraints=[],this.narrowphase=new KM(this),this.collisionMatrix=new Jd,this.collisionMatrixPrevious=new Jd,this.bodyOverlapKeeper=new ff,this.shapeOverlapKeeper=new ff,this.contactmaterials=[],this.contactMaterialTable=new r1,this.defaultMaterial=new Za("default"),this.defaultContactMaterial=new Ka(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,i){i instanceof Ra?this.raycastClosest(t,e,{skipBackfaces:!0},i):this.raycastAll(t,e,{skipBackfaces:!0},i)}raycastAll(t,e,i,s){return i===void 0&&(i={}),i.mode=Be.ALL,i.from=t,i.to=e,i.callback=s,Yc.intersectWorld(this,i)}raycastAny(t,e,i,s){return i===void 0&&(i={}),i.mode=Be.ANY,i.from=t,i.to=e,i.result=s,Yc.intersectWorld(this,i)}raycastClosest(t,e,i,s){return i===void 0&&(i={}),i.mode=Be.CLOSEST,i.from=t,i.to=e,i.result=s,Yc.intersectWorld(this,i)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ct&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,i=this.bodies,s=i.indexOf(t);if(s!==-1){i.splice(s,1);for(let r=0;r!==i.length;r++)i[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let i=0;i<e.length;i++){const s=e[i].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const i=Ve.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=i-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=i}step(t,e,i){if(i===void 0&&(i=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ve.now();let r=0;for(;this.accumulator>=t&&r<i&&(this.internalStep(t),this.accumulator-=t,r++,!(Ve.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,i=u1,s=d1,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,f=Ct.DYNAMIC;let u=-1/0;const d=this.constraints,p=h1;c.length();const v=c.x,m=c.y,g=c.z;let y=0;for(l&&(u=Ve.now()),y=0;y!==r;y++){const O=o[y];if(O.type===f){const N=O.force,L=O.mass;N.x+=L*v,N.y+=L*m,N.z+=L*g}}for(let O=0,N=this.subsystems.length;O!==N;O++)this.subsystems[O].update();l&&(u=Ve.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),l&&(h.broadphase=Ve.now()-u);let x=d.length;for(y=0;y!==x;y++){const O=d[y];if(!O.collideConnected)for(let N=i.length-1;N>=0;N-=1)(O.bodyA===i[N]&&O.bodyB===s[N]||O.bodyB===i[N]&&O.bodyA===s[N])&&(i.splice(N,1),s.splice(N,1))}this.collisionMatrixTick(),l&&(u=Ve.now());const b=l1,S=e.length;for(y=0;y!==S;y++)b.push(e[y]);e.length=0;const M=this.frictionEquations.length;for(y=0;y!==M;y++)p.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,e,b,this.frictionEquations,p),l&&(h.narrowphase=Ve.now()-u),l&&(u=Ve.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);const D=e.length;for(let O=0;O!==D;O++){const N=e[O],L=N.bi,F=N.bj,k=N.si,X=N.sj;let $;if(L.material&&F.material?$=this.getContactMaterial(L.material,F.material)||this.defaultContactMaterial:$=this.defaultContactMaterial,$.friction,L.material&&F.material&&(L.material.friction>=0&&F.material.friction>=0&&L.material.friction*F.material.friction,L.material.restitution>=0&&F.material.restitution>=0&&(N.restitution=L.material.restitution*F.material.restitution)),a.addEquation(N),L.allowSleep&&L.type===Ct.DYNAMIC&&L.sleepState===Ct.SLEEPING&&F.sleepState===Ct.AWAKE&&F.type!==Ct.STATIC){const st=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),at=F.sleepSpeedLimit**2;st>=at*2&&(L.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===Ct.DYNAMIC&&F.sleepState===Ct.SLEEPING&&L.sleepState===Ct.AWAKE&&L.type!==Ct.STATIC){const st=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),at=L.sleepSpeedLimit**2;st>=at*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,F,!0),this.collisionMatrixPrevious.get(L,F)||(br.body=F,br.contact=N,L.dispatchEvent(br),br.body=L,F.dispatchEvent(br)),this.bodyOverlapKeeper.set(L.id,F.id),this.shapeOverlapKeeper.set(k.id,X.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Ve.now()-u,u=Ve.now()),y=0;y!==r;y++){const O=o[y];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(x=d.length,y=0;y!==x;y++){const O=d[y];O.update();for(let N=0,L=O.equations.length;N!==L;N++){const F=O.equations[N];a.addEquation(F)}}a.solve(t,this),l&&(h.solve=Ve.now()-u),a.removeAllEquations();const _=Math.pow;for(y=0;y!==r;y++){const O=o[y];if(O.type&f){const N=_(1-O.linearDamping,t),L=O.velocity;L.scale(N,L);const F=O.angularVelocity;if(F){const k=_(1-O.angularDamping,t);F.scale(k,F)}}}this.dispatchEvent(c1),l&&(u=Ve.now());const P=this.stepnumber%(this.quatNormalizeSkip+1)===0,R=this.quatNormalizeFast;for(y=0;y!==r;y++)o[y].integrate(t,P,R);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Ve.now()-u),this.stepnumber+=1,this.dispatchEvent(a1);let U=!0;if(this.allowSleep)for(U=!1,y=0;y!==r;y++){const O=o[y];O.sleepTick(this.time),O.sleepState!==Ct.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(vi,yi),t){for(let r=0,o=vi.length;r<o;r+=2)wr.bodyA=this.getBodyById(vi[r]),wr.bodyB=this.getBodyById(vi[r+1]),this.dispatchEvent(wr);wr.bodyA=wr.bodyB=null}if(e){for(let r=0,o=yi.length;r<o;r+=2)Sr.bodyA=this.getBodyById(yi[r]),Sr.bodyB=this.getBodyById(yi[r+1]),this.dispatchEvent(Sr);Sr.bodyA=Sr.bodyB=null}vi.length=yi.length=0;const i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(vi,yi),i){for(let r=0,o=vi.length;r<o;r+=2){const a=this.getShapeById(vi[r]),c=this.getShapeById(vi[r+1]);_i.shapeA=a,_i.shapeB=c,a&&(_i.bodyA=a.body),c&&(_i.bodyB=c.body),this.dispatchEvent(_i)}_i.bodyA=_i.bodyB=_i.shapeA=_i.shapeB=null}if(s){for(let r=0,o=yi.length;r<o;r+=2){const a=this.getShapeById(yi[r]),c=this.getShapeById(yi[r+1]);xi.shapeA=a,xi.shapeB=c,a&&(xi.bodyA=a.body),c&&(xi.bodyB=c.body),this.dispatchEvent(xi)}xi.bodyA=xi.bodyB=xi.shapeA=xi.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let i=0;i!==e;i++){const s=t[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new Tn;const Yc=new Be,Ve=globalThis.performance||{};if(!Ve.now){let n=Date.now();Ve.timing&&Ve.timing.navigationStart&&(n=Ve.timing.navigationStart),Ve.now=()=>Date.now()-n}new A;const a1={type:"postStep"},c1={type:"preStep"},br={type:Ct.COLLIDE_EVENT_NAME,body:null,contact:null},l1=[],h1=[],u1=[],d1=[],vi=[],yi=[],wr={type:"beginContact",bodyA:null,bodyB:null},Sr={type:"endContact",bodyA:null,bodyB:null},_i={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},xi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},mf=new E(0,1,0);function jo(n,t,e){return Math.max(t,Math.min(e,n))}function f1(n,t){return Math.atan2(Math.sin(t-n),Math.cos(t-n))}function Kc(n){return new A(n.x,n.y,n.z)}class p1{constructor({position:t=new E,mass:e=4,maxSpeed:i=95,manualAcceleration:s=160,autoAcceleration:r=130}={}){this.world=new o1({gravity:new A(0,0,0)}),this.world.allowSleep=!1,this.body=new Ct({mass:e,shape:new HM(2.5),position:Kc(t),linearDamping:.32,angularDamping:.72}),this.world.addBody(this.body),this.maxSpeed=i,this.manualAcceleration=s,this.autoAcceleration=r,this.maxYawSpeed=1.8,this.yawAcceleration=4.5,this.yaw=0,this.yawVelocity=0,this.tmpForward=new E,this.tmpRight=new E,this.tmpForce=new E,this.tmpQuaternion=new Ye}syncToMesh(t){this.body.position.set(t.position.x,t.position.y,t.position.z),this.yaw=new Ii().setFromQuaternion(t.quaternion,"YXZ").y,this.body.quaternion.setFromEuler(0,this.yaw,0,"XYZ")}syncMesh(t){t.position.set(this.body.position.x,this.body.position.y,this.body.position.z),t.quaternion.copy(this.tmpQuaternion.setFromAxisAngle(mf,this.yaw))}applyManualInput(t,e){const i=this.tmpForce.set(0,0,0),s=new Ye().setFromAxisAngle(mf,this.yaw),r=this.tmpForward.set(0,0,-1).applyQuaternion(s),o=this.tmpRight.set(1,0,0).applyQuaternion(s);t.w&&i.add(r),t.s&&i.sub(r),t.d&&i.add(o),t.a&&i.sub(o),t.space&&(i.y+=1),t.shift&&(i.y-=1),i.lengthSq()>0&&(i.normalize().multiplyScalar(this.manualAcceleration*this.body.mass),this.body.applyForce(Kc(i),this.body.position));const a=(t.q?1:0)+(t.e?-1:0);a!==0&&(this.yawVelocity=jo(this.yawVelocity+a*this.yawAcceleration*e,-this.maxYawSpeed,this.maxYawSpeed))}applyAutoNavigation(t,e){const i=this.getPosition(),s=t.clone().sub(i),r=s.length();if(r===0)return;const o=this.maxSpeed*.8,a=r>6?jo(r*1.35,8,o):Math.min(r*1.2,o),c=s.normalize().multiplyScalar(a),l=this.getVelocity(),f=c.sub(l).multiplyScalar(this.autoAcceleration*this.body.mass*e);this.body.applyForce(Kc(f),this.body.position)}facePoint(t,e){const i=t.x-this.body.position.x,s=t.z-this.body.position.z;if(Math.abs(i)+Math.abs(s)<.001)return;const r=Math.atan2(-i,-s),o=f1(this.yaw,r),a=jo(o*4,-this.maxYawSpeed,this.maxYawSpeed),c=jo(e*8,0,1);this.yawVelocity=pn.lerp(this.yawVelocity,a,c)}holdAt(t,e){this.applyAutoNavigation(t,e)}stop(){this.body.velocity.scale(.15,this.body.velocity),this.body.angularVelocity.set(0,0,0),this.yawVelocity*=.15}setPosition(t){return this.body.position.set(t.x,t.y,t.z),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this}step(t){this.world.step(1/60,t,3),this.limitVelocity(),this.yaw+=this.yawVelocity*t,this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.yawVelocity*=Math.exp(-t*1.8),this.body.angularVelocity.set(0,0,0),this.body.quaternion.setFromEuler(0,this.yaw,0,"XYZ")}getPosition(){return new E(this.body.position.x,this.body.position.y,this.body.position.z)}getVelocity(){return new E(this.body.velocity.x,this.body.velocity.y,this.body.velocity.z)}limitVelocity(){const t=this.body.velocity,e=t.length();e>this.maxSpeed&&t.scale(this.maxSpeed/e,t)}}const Ie=Object.freeze({IDLE:"IDLE",AUTO_NAV:"AUTO_NAV",MANUAL:"MANUAL",PHOTOGRAPHING:"PHOTOGRAPHING"}),m1=new Set(Object.values(Ie)),g1=new Set([Ie.IDLE,Ie.AUTO_NAV,Ie.PHOTOGRAPHING]);class v1{constructor(t=Ie.IDLE){this.current=t,this.onChange=null}get state(){return this.current}setState(t){var e;if(!m1.has(t))throw new Error(`Invalid drone state: ${t}`);return this.current===t?!1:(this.current=t,(e=this.onChange)==null||e.call(this,t),!0)}canKeyboardInterrupt(){return g1.has(this.current)}}const y1="modulepreload",_1=function(n){return"/bridge-inspection-demo/"+n},gf={},jm=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=_1(c),c in gf)return;gf[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":y1,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((u,d)=>{f.addEventListener("load",u),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};function x1(){const n=new Yt({color:329223,roughness:.4,metalness:.78}),t=new Yt({color:1513755,roughness:.38,metalness:.62}),e=new Yt({color:15922417,roughness:.34,metalness:.22}),i=new Yt({color:16777215,roughness:.28,metalness:.18}),s=new Yt({color:12568007,roughness:.48,metalness:.36}),r=new Yt({color:9081493,roughness:.62,metalness:.18}),o=new Yt({color:723982,roughness:.78,metalness:.22}),a=new Yt({color:197379,roughness:.92,metalness:.04}),c=new Yt({color:661280,roughness:.18,metalness:.22,transparent:!0,opacity:.78,emissive:463642,emissiveIntensity:.45}),l=new Yt({color:132875,roughness:.05,metalness:.35,transparent:!0,opacity:.86,emissive:401197,emissiveIntensity:.35}),h=new Yt({color:13938487,roughness:.32,metalness:.86}),f=new Yt({color:16758845,roughness:.28,metalness:.45,emissive:16751872,emissiveIntensity:.45}),u=new Yt({color:16721471,roughness:.2,metalness:.15,emissive:16715816,emissiveIntensity:1.4}),d=new Yt({color:3538826,roughness:.2,metalness:.15,emissive:1638253,emissiveIntensity:1.15}),p=new Yt({color:592395,roughness:.58,metalness:.18}),v=new rn({color:14411753,transparent:!0,opacity:0,depthWrite:!1,side:cn});return{carbon:n,graphite:t,shell:e,ceramic:i,lightGray:s,panelLine:r,matteBlack:o,rubber:a,glass:c,lens:l,gold:h,warning:f,redLed:u,greenLed:d,blade:p,blur:v}}function b1(){return"/bridge-inspection-demo/models/drone.glb"}function Qn(n,t,e,i){const s=new so,r=n/2,o=e/2;s.moveTo(-r+i,-o),s.lineTo(r-i,-o),s.lineTo(r,-o+i),s.lineTo(r,o-i),s.lineTo(r-i,o),s.lineTo(-r+i,o),s.lineTo(-r,o-i),s.lineTo(-r,-o+i),s.closePath();const a=new qa(s,{depth:t,bevelEnabled:!0,bevelSize:i*.12,bevelThickness:i*.08,bevelSegments:1});return a.rotateX(Math.PI/2),a.center(),a}function w1(n=2.55,t=.34,e=.035){const i=new so;i.moveTo(.08,-t*.34),i.bezierCurveTo(n*.34,-t*.72,n*.82,-t*.5,n,-t*.08),i.bezierCurveTo(n*1.04,0,n*1.04,t*.12,n,t*.19),i.bezierCurveTo(n*.76,t*.48,n*.3,t*.52,.08,t*.28),i.bezierCurveTo(-.03,t*.13,-.03,-t*.15,.08,-t*.34);const s=new qa(i,{depth:e,bevelEnabled:!0,bevelSize:e*.6,bevelThickness:e*.25,bevelSegments:1});return s.rotateX(-Math.PI/2),s.translate(.18,0,0),s}class S1{constructor({modelUrl:t=b1()}={}){this.group=new Me,this.rotors=[],this.rotorThrottle=0,this.rotorThrottleTarget=0,this.rotorRampRate=1.65,this.materials=x1(),this.modelRoot=this.createProceduralModel(),this.group.add(this.modelRoot),this.addLights(),this.modelLoadPromise=typeof document>"u"?Promise.resolve(!1):this.loadHighPrecisionModel(t)}createProceduralModel(){const t=new Me;return t.name="procedural-m350-industrial-drone",this.addFuselage(t),this.addCarbonArmSystem(t),this.addLandingGear(t),this.addGimbalPayload(t),this.addSensorSuite(t),this.addAntennasAndDetails(t),t}addMesh(t,e,i,s=[0,0,0],r=[0,0,0],o=""){const a=new It(e,i);return a.position.set(...s),a.rotation.set(...r),a.name=o,a.castShadow=!0,a.receiveShadow=!0,t.add(a),a}addBox(t,e,i,s,r=[0,0,0],o=""){return this.addMesh(t,new _e(...e),i,s,r,o)}addCylinder(t,e,i,s,r,o,a=[0,0,0],c=32,l=""){return this.addMesh(t,new ci(e,i,s,c),r,o,a,l)}addSphere(t,e,i,s,r=24,o=""){return this.addMesh(t,new ts(e,r,Math.max(12,r/2)),i,s,[0,0,0],o)}addTorus(t,e,i,s,r,o=[0,0,0],a=""){return this.addMesh(t,new ys(e,i,12,48),s,r,o,a)}addCylinderBetween(t,e,i,s,r,o=24,a=""){const c=new E(...e),l=new E(...i),h=c.clone().add(l).multiplyScalar(.5),f=l.clone().sub(c),u=this.addCylinder(t,s,s,f.length(),r,h.toArray(),[0,0,0],o,a);return u.quaternion.setFromUnitVectors(new E(0,1,0),f.normalize()),u}addFuselage(t){const{shell:e,ceramic:i,lightGray:s,panelLine:r,matteBlack:o,gold:a,warning:c,rubber:l}=this.materials;this.addMesh(t,Qn(3.25,.72,4.4,.34),e,[0,.02,0],[0,0,0],"ceramic-white-main-fuselage"),this.addMesh(t,Qn(2.25,.48,2.8,.22),i,[0,.52,-.1],[0,0,0],"raised-avionics-shell"),this.addMesh(t,Qn(2.72,.34,1.22,.14),s,[0,.88,.86],[0,0,0],"dual-battery-left"),this.addMesh(t,Qn(2.72,.34,1.22,.14),s,[0,.88,-.74],[0,0,0],"dual-battery-right"),[-.78,.78].forEach(h=>{this.addBox(t,[.06,.07,1],a,[h,1.08,.86],[0,0,0],"battery-release-rail"),this.addBox(t,[.06,.07,1],a,[h,1.08,-.74],[0,0,0],"battery-release-rail"),this.addBox(t,[.34,.04,.08],o,[h,1.11,.18],[0,0,0],"battery-lift-handle")});for(let h=0;h<5;h+=1){const f=-1.05+h*.28;this.addBox(t,[1.9,.03,.035],l,[0,1.075,f],[0,0,0],"battery-cooling-slot")}this.addBox(t,[.9,.035,.42],a,[0,.42,-2.24],[-.2,0,0],"front-brass-nameplate"),this.addBox(t,[.7,.03,.08],c,[0,.48,-2.5],[-.23,0,0],"industrial-warning-strip"),this.addBox(t,[.12,.025,.55],a,[-1.67,.18,.55],[0,0,-.1],"left-shell-accent"),this.addBox(t,[.12,.025,.55],a,[1.67,.18,.55],[0,0,.1],"right-shell-accent"),this.addBox(t,[2.2,.018,.045],r,[0,.74,-1.55],[0,0,0],"top-panel-seam"),this.addBox(t,[.045,.018,2.75],r,[-1.16,.74,-.05],[0,0,0],"left-top-panel-seam"),this.addBox(t,[.045,.018,2.75],r,[1.16,.74,-.05],[0,0,0],"right-top-panel-seam"),[-1.74,1.74].forEach(h=>{this.addBox(t,[.08,.42,1.48],s,[h,-.08,-.18],[0,0,0],"reinforced-side-fairing"),this.addBox(t,[.06,.28,.86],o,[h*1.01,-.13,1.05],[0,0,0],"side-service-panel"),this.addBox(t,[.08,.025,.46],c,[h,.17,-1.78],[0,0,0],"side-safety-decal")}),[-1.05,1.05].forEach(h=>{[-1.7,-.35,.95,1.72].forEach(f=>{this.addCylinder(t,.035,.035,.012,r,[h,.39,f],[0,0,0],14,"flush-panel-fastener")})})}addCarbonArmSystem(t){const{carbon:e,graphite:i,shell:s,lightGray:r,matteBlack:o,gold:a,warning:c,blade:l,blur:h}=this.materials,f=[[3.65,.23,-3.18,1],[-3.65,.23,-3.18,-1],[3.65,.23,3.18,-1],[-3.65,.23,3.18,1]];f.forEach(([d,p,v,m],g)=>{const y=Math.atan2(d,v);this.addCylinderBetween(t,[.72*Math.sign(d),.18,.64*Math.sign(v)],[d*.88,p,v*.88],.105,e,32,"carbon-fiber-arm"),this.addCylinderBetween(t,[.38*Math.sign(d),-.03,.35*Math.sign(v)],[d*.75,p-.06,v*.75],.045,e,16,"lower-tension-strut"),this.addMesh(t,Qn(.54,.22,.92,.08),s,[d*.42,p+.03,v*.42],[0,y,0],"white-arm-root-fairing"),this.addMesh(t,Qn(.48,.18,.78,.07),r,[d*.78,p-.01,v*.78],[0,y,0],"light-gray-arm-end-sleeve"),this.addMotorAssembly(t,d,p,v,g,m)});const u=w1();f.forEach(([d,p,v,m],g)=>{const y=new Me;y.name=`rotor-assembly-${g+1}`,y.position.set(d,p+.55,v),y.userData.spin=m;const x=this.addCylinder(y,.24,.28,.16,i,[0,0,0],[0,0,0],32,"quick-release-hub");x.castShadow=!0,this.addCylinder(y,.13,.13,.23,a,[0,.11,0],[0,0,0],24,"gold-hub-cap"),[0,Math.PI].forEach(S=>{const M=this.addMesh(y,u.clone(),l,[.13,.02,0],[0,S,0],"folding-carbon-propeller-blade");M.scale.z=g%2===0?1:-1;const D=S===0?2.42:-2.42,_=this.addBox(y,[.42,.014,.055],c,[D,.062,0],[0,S,0],"yellow-propeller-tip-stripe");y.userData.blades=[...y.userData.blades??[],M,_]});const b=this.addCylinder(y,2.55,2.55,.018,h,[0,.025,0],[0,0,0],64,"transparent-rotor-motion-disc");b.userData.isBlurDisc=!0,y.userData.blurDisc=b,t.add(y),this.rotors.push(y)})}addMotorAssembly(t,e,i,s,r,o){const{ceramic:a,shell:c,lightGray:l,matteBlack:h,panelLine:f,gold:u,carbon:d,redLed:p,greenLed:v}=this.materials,m=Math.sign(e),g=Math.sign(s),y=r<2?p:v;this.addCylinder(t,.54,.46,.42,a,[e,i+.18,s],[0,0,0],40,"white-sealed-brushless-motor-bell"),this.addCylinder(t,.44,.5,.18,c,[e,i-.16,s],[0,0,0],40,"white-motor-esc-pod"),this.addCylinder(t,.48,.48,.05,h,[e,i+.02,s],[0,0,0],40,"black-motor-separator-ring"),this.addCylinder(t,.57,.57,.045,u,[e,i+.42,s],[0,0,0],40,"motor-retaining-ring"),this.addTorus(t,.39,.018,f,[e,i+.32,s],[Math.PI/2,0,0],"machined-motor-panel-line");for(let b=0;b<8;b+=1){const S=b/8*Math.PI*2;this.addBox(t,[.035,.14,.26],d,[e+Math.cos(S)*.48,i+.05,s+Math.sin(S)*.48],[0,S,0],"motor-cooling-fin")}const x=[e-m*.48,i-.07,s-g*.48];this.addMesh(t,Qn(.72,.22,.44,.08),l,x,[0,Math.atan2(m,g),0],"light-gray-arm-end-esc-fairing"),this.addBox(t,[.42,.035,.05],h,[e-m*.45,i+.03,s-g*.45],[0,Math.atan2(m,g),0],"esc-cooling-slot"),this.addCylinder(t,.11,.11,.04,y,[e-m*.38,i+.03,s-g*.62],[Math.PI/2,0,0],18,"navigation-status-light"),this.addBox(t,[.08,.025,.34],u,[e-m*.12,i+.41,s],[0,o*.2,0],"prop-lock-direction-mark")}addLandingGear(t){const{carbon:e,shell:i,matteBlack:s,rubber:r,gold:o}=this.materials;[-1.32,1.32].forEach(a=>{this.addMesh(t,Qn(.42,.2,.5,.07),i,[a,-.36,-1.48],[0,0,0],"white-front-gear-mount"),this.addMesh(t,Qn(.42,.2,.5,.07),i,[a,-.36,1.38],[0,0,0],"white-rear-gear-mount"),this.addCylinderBetween(t,[a,-.42,-1.58],[a,-2,-1.92],.075,e,20,"front-landing-leg"),this.addCylinderBetween(t,[a,-.42,1.48],[a,-2,1.92],.075,e,20,"rear-landing-leg"),this.addCylinderBetween(t,[a,-2.02,-2.18],[a,-2.02,2.18],.095,r,24,"rubberized-landing-skid"),this.addCylinderBetween(t,[a,-1.25,-1.64],[a,-1.25,1.64],.035,e,14,"landing-gear-cross-brace"),this.addCylinderBetween(t,[a,-.65,-.9],[.44*Math.sign(a),-.18,-.28],.035,e,14,"gear-diagonal-brace"),this.addCylinderBetween(t,[a,-.65,.9],[.44*Math.sign(a),-.18,.28],.035,e,14,"gear-diagonal-brace"),this.addCylinder(t,.12,.12,.1,o,[a,-1.98,-2.18],[Math.PI/2,0,0],20,"skid-front-end-cap"),this.addCylinder(t,.12,.12,.1,o,[a,-1.98,2.18],[Math.PI/2,0,0],20,"skid-rear-end-cap"),this.addBox(t,[.34,.045,.68],s,[a,-2.1,-1.58],[0,0,0],"front-skid-grip-pad"),this.addBox(t,[.34,.045,.68],s,[a,-2.1,1.58],[0,0,0],"rear-skid-grip-pad")})}addGimbalPayload(t){const{shell:e,lightGray:i,matteBlack:s,carbon:r,lens:o,glass:a,gold:c,warning:l}=this.materials,h=new Me;h.name="three-axis-gimbal-camera-payload",h.position.set(0,-.92,-1.05),this.addCylinder(h,.32,.32,.18,r,[0,.24,0],[Math.PI/2,0,0],32,"gimbal-damper-plate"),this.addCylinder(h,.08,.08,.42,c,[-.32,.06,0],[0,0,Math.PI/2],16,"gimbal-left-yoke"),this.addCylinder(h,.08,.08,.42,c,[.32,.06,0],[0,0,Math.PI/2],16,"gimbal-right-yoke"),this.addCylinder(h,.24,.24,.14,i,[0,.08,0],[0,0,Math.PI/2],32,"gimbal-roll-axis-motor"),this.addMesh(h,Qn(.78,.52,.64,.12),e,[0,-.12,-.04],[.08,0,0],"white-stabilized-camera-housing"),this.addTorus(h,.28,.018,c,[0,-.12,-.43],[0,0,0],"gold-optics-retaining-ring"),this.addCylinder(h,.28,.24,.18,o,[0,-.12,-.43],[Math.PI/2,0,0],40,"large-optical-zoom-lens"),this.addCylinder(h,.13,.13,.04,a,[-.24,-.05,-.42],[Math.PI/2,0,0],28,"thermal-camera-window"),this.addCylinder(h,.07,.07,.035,o,[.25,-.05,-.43],[Math.PI/2,0,0],22,"laser-rangefinder-aperture"),this.addBox(h,[.22,.035,.075],l,[.25,-.23,-.36],[0,0,0],"payload-warning-decal"),this.addBox(h,[.52,.05,.08],s,[0,.22,-.34],[0,0,0],"gimbal-status-display"),t.add(h)}addSensorSuite(t){const{shell:e,lightGray:i,glass:s,lens:r,matteBlack:o,gold:a,warning:c}=this.materials;[[-.42,.2,-2.34],[.42,.2,-2.34],[-1.66,.1,-.74],[1.66,.1,-.74],[-1.66,.1,.86],[1.66,.1,.86],[-.52,.18,2.22],[.52,.18,2.22]].forEach(([h,f,u])=>{const d=Math.abs(h)>1.5?[0,0,Math.PI/2]:[Math.PI/2,0,0];this.addCylinder(t,.18,.18,.025,e,[h,f-.015,u],d,24,"white-sensor-carrier"),this.addCylinder(t,.115,.115,.035,r,[h,f,u],d,24,"stereo-obstacle-avoidance-lens"),this.addCylinder(t,.15,.15,.02,o,[h,f-.005,u],d,24,"sensor-bezel")}),this.addBox(t,[.9,.035,.28],s,[0,.08,-2.45],[-.12,0,0],"forward-vision-sensor-window"),this.addBox(t,[.56,.03,.18],s,[0,-.22,2.32],[.12,0,0],"rear-ranging-sensor-window"),this.addBox(t,[.36,.025,.1],a,[0,.35,-2.58],[-.24,0,0],"rtk-lock-indicator-strip"),this.addCylinder(t,.3,.3,.08,i,[0,-.39,-.22],[0,0,0],32,"downward-lidar-puck"),this.addCylinder(t,.18,.18,.045,s,[0,-.44,-.22],[0,0,0],32,"downward-optical-flow-window"),this.addBox(t,[.22,.025,.52],c,[-.58,-.34,-.88],[0,0,.08],"belly-warning-stripe-left"),this.addBox(t,[.22,.025,.52],c,[.58,-.34,-.88],[0,0,-.08],"belly-warning-stripe-right")}addAntennasAndDetails(t){const{shell:e,ceramic:i,lightGray:s,matteBlack:r,carbon:o,gold:a,panelLine:c}=this.materials;[-.98,.98].forEach(l=>{this.addCylinder(t,.26,.28,.14,s,[l,1.22,1.24],[0,0,0],32,"gnss-antenna-base"),this.addCylinder(t,.2,.24,.1,i,[l,1.34,1.24],[0,0,0],32,"white-gnss-rtk-dome"),this.addSphere(t,.16,e,[l,1.41,1.24],24,"rounded-rtk-cap"),this.addCylinderBetween(t,[l,1.18,-1.42],[l+Math.sign(l)*.48,1.58,-1.74],.025,o,10,"angled-telemetry-antenna"),this.addCylinder(t,.045,.045,.06,a,[l+Math.sign(l)*.5,1.6,-1.75],[0,0,0],12,"antenna-gold-tip")}),this.addCylinder(t,.12,.12,.46,r,[0,1.46,-.95],[0,0,0],16,"short-rtk-mast"),this.addCylinder(t,.28,.2,.12,i,[0,1.73,-.95],[0,0,0],32,"central-rtk-mushroom-antenna");for(let l=0;l<7;l+=1){const h=-.54+l*.18;this.addBox(t,[.55,.028,.032],r,[-1.72,.38,h],[0,0,.05],"left-thermal-vent"),this.addBox(t,[.55,.028,.032],r,[1.72,.38,h],[0,0,-.05],"right-thermal-vent"),this.addBox(t,[.42,.024,.028],c,[-.42,.78,h-.06],[0,0,0],"top-avionics-vent"),this.addBox(t,[.42,.024,.028],c,[.42,.78,h-.06],[0,0,0],"top-avionics-vent")}this.addBox(t,[.22,.02,.82],a,[-.62,1.1,.06],[0,0,0],"top-service-label-line"),this.addBox(t,[.22,.02,.82],a,[.62,1.1,.06],[0,0,0],"top-service-label-line"),this.addBox(t,[1.38,.018,.08],a,[0,1.11,.1],[0,0,0],"m350-style-top-nameplate"),this.addBox(t,[.44,.026,.06],r,[0,1.11,-1.42],[0,0,0],"top-maintenance-qr-plate")}addLights(){this.spotLight=new Py(13938487,200,300,Math.PI/8,.5,1),this.spotLight.position.set(0,-1,0),this.targetObj=new Ce,this.targetObj.position.set(0,-100,0),this.group.add(this.targetObj),this.spotLight.target=this.targetObj,this.group.add(this.spotLight),this.flashLight=new ar(16777215,0,100),this.flashLight.position.set(0,-2,0),this.group.add(this.flashLight)}async loadHighPrecisionModel(t){if(!t)return!1;try{const{GLTFLoader:e}=await jm(async()=>{const{GLTFLoader:o}=await import("./GLTFLoader-CjaV2RWU.js");return{GLTFLoader:o}},[]),i=new e,r=(await new Promise((o,a)=>{i.load(t,o,void 0,a)})).scene;return r.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),this.group.remove(this.modelRoot),this.modelRoot=r,this.rotors.length=0,this.group.add(r),!0}catch(e){return console.info("Drone GLB unavailable, using procedural fallback.",(e==null?void 0:e.message)??e),!1}}setRotorThrottle(t=0,e=!1){return this.rotorThrottleTarget=pn.clamp(Number(t)||0,0,1),e&&(this.rotorThrottle=this.rotorThrottleTarget),this}getRotorThrottle(){return this.rotorThrottle}updateRotors(t,e){const i=Math.max(this.rotorThrottleTarget,e?1:0),s=Math.max(.02,this.rotorRampRate*t);this.rotorThrottle=pn.damp(this.rotorThrottle,i,this.rotorRampRate,t),Math.abs(this.rotorThrottle-i)<s*.05&&(this.rotorThrottle=i),this.rotors.forEach((r,o)=>{const a=r.userData.blurDisc,c=r.userData.blades??[],l=r.userData.spin??(o%2===0?1:-1),h=this.rotorThrottle;if(h>.02){r.rotation.y+=l*pn.lerp(3.5,54,h)*t,a&&(a.material.opacity=pn.lerp(0,.28,h)),c.forEach(f=>{f.visible=h<.36});return}a&&(a.material.opacity=0),c.forEach(f=>{f.visible=!0})})}getFpvCameraPose(){return{offset:new E(0,-1.08,-1.78),lookAt:new E(0,-1.1,-36)}}aimSpotlightAt(t){this.targetObj.position.copy(this.group.worldToLocal(t.clone()))}setFlash(t){this.flashLight.intensity=t?1e3:0}}const M1=[new E(-250,110,140),new E(0,45,160),new E(250,110,140)],E1=new E(0,-10,150),T1=new E(15,10,15),A1=new Set(["w","a","s","d"," ","shift","q","e"]),Ym="bridge:drone-photo-flash",vf=Object.freeze({offset:new E(0,-1.05,-3.2),lookAt:new E(0,-1.12,-120)});class C1{constructor(t,e,i,s={}){this.scene=t,this.camera=e,this.controls=i,this.isFPV=!1,this.photoTimer=0,this.photoFlashDispatched=!1,this.holdPosition=null,this.safetyHoldPosition=null,this.safetyState=null,this.safetyAlert=null,this.waterImpactState={active:!1,mode:"clear",position:null},this.splashState={active:!1,startedAt:0,position:null},this.keys={w:!1,a:!1,s:!1,d:!1,space:!1,shift:!1,q:!1,e:!1},this.waypoints=M1.map(o=>o.clone()),this.visual=new S1,this.mesh=this.visual.group;const r=Yo(s.initialPosition,E1);this.homePosition=r.clone(),this.mesh.position.copy(r),this.scene.add(this.mesh),this.motion=new p1({position:r}),this.motion.syncToMesh(this.mesh),this.stateMachine=new v1(Ie.IDLE),this.stateMachine.onChange=o=>{var a;return(a=this.onStateChange)==null?void 0:a.call(this,o)},this.position=this.mesh.position,this.onStateChange=null,this._initControls()}get flightState(){return this.stateMachine.state}set flightState(t){this.stateMachine.setState(t)}_initControls(){window.addEventListener("keydown",t=>{const e=t.key.toLowerCase(),i=e===" "?"space":e;A1.has(e)&&(t.preventDefault(),Object.prototype.hasOwnProperty.call(this.keys,i)&&(this.keys[i]=!0),this.isFPV&&this.stateMachine.canKeyboardInterrupt()&&(this.flightState=Ie.MANUAL,this.motion.stop()))}),window.addEventListener("keyup",t=>{const e=t.key.toLowerCase(),i=e===" "?"space":e;Object.prototype.hasOwnProperty.call(this.keys,i)&&(this.keys[i]=!1)})}toggleView(){return this.isFPV=!this.isFPV,this.controls.enabled=!this.isFPV,this.isFPV}addWaypoint(t){this.waypoints.push(t.clone()),this.flightState===Ie.IDLE&&(this.flightState=Ie.AUTO_NAV)}removeLastWaypoint(){this.waypoints.length>0&&this.waypoints.pop()}resumeMission(){this.waypoints.length>0&&(this.flightState=Ie.AUTO_NAV)}startMission(){this.waypoints.length>0&&this.flightState===Ie.IDLE&&(this.flightState=Ie.AUTO_NAV)}update(t){const e=Math.min(t,.1),s=this.mesh.position.y>this.homePosition.y+8||this.flightState!==Ie.IDLE;this.visual.updateRotors(e,s),this.updateFlightMode(e),this.motion.step(e),this.motion.syncMesh(this.mesh),this.updateCamera(e)}updateFlightMode(t){if(this.flightState===Ie.MANUAL&&this.isFPV){this.motion.applyManualInput(this.getSafetyFilteredKeys(),t);return}if(this.flightState===Ie.AUTO_NAV){this.updateAutoNavigation(t);return}this.flightState===Ie.PHOTOGRAPHING&&this.updatePhotography(t)}updateAutoNavigation(t){var s,r,o;if((s=this.safetyState)!=null&&s.waterImpact){this.motion.stop();return}if((r=this.safetyState)!=null&&r.blocked&&this.safetyState.reason==="geofence-exit"){this.updateSafetyHold(t);return}if((o=this.safetyState)!=null&&o.blocked){this.updateAutoAvoidance(t);return}if(this.safetyHoldPosition=null,this.waypoints.length===0){this.flightState=Ie.IDLE;return}const e=this.waypoints[0].clone(),i=e.clone().add(T1);this.motion.applyAutoNavigation(i,t),this.motion.facePoint(new E(e.x,this.mesh.position.y,e.z),t),this.visual.aimSpotlightAt(e),this.motion.getPosition().distanceTo(i)<2.5&&this.motion.getVelocity().length()<12&&(this.holdPosition=i,this.motion.stop(),this.flightState=Ie.PHOTOGRAPHING,this.photoTimer=1.5,this.photoFlashDispatched=!1)}updateAutoAvoidance(t){var r;const i=Yo((r=this.safetyState)==null?void 0:r.avoidanceVector,new E(1,.12,0)).applyQuaternion(this.mesh.quaternion);i.lengthSq()===0&&i.set(1,.12,0);const s=this.motion.getPosition().add(i.normalize().multiplyScalar(18));this.motion.applyAutoNavigation(s,t),this.motion.facePoint(s,t)}updateSafetyHold(t){this.safetyHoldPosition||(this.safetyHoldPosition=this.motion.getPosition()),this.motion.holdAt(this.safetyHoldPosition,t),this.motion.stop()}updatePhotography(t){this.photoTimer-=t;const e=this.photoTimer>1.2&&this.photoTimer<1.4;this.visual.setFlash(e),e&&!this.photoFlashDispatched&&(this.photoFlashDispatched=!0,this.dispatchPhotoFlashEvent()),this.holdPosition&&this.motion.holdAt(this.holdPosition,t),!(this.photoTimer>0)&&(this.visual.setFlash(!1),this.waypoints.shift(),this.holdPosition=null,this.photoFlashDispatched=!1,this.flightState=this.waypoints.length>0?Ie.AUTO_NAV:Ie.IDLE)}dispatchPhotoFlashEvent(){typeof window>"u"||typeof window.CustomEvent!="function"||window.dispatchEvent(new window.CustomEvent(Ym,{detail:{position:P1(this.motion.getPosition()),state:this.flightState,timestamp:new Date().toISOString()}}))}updateCamera(t){if(this.isFPV){const e=this.getFpvCameraPose(),i=e.offset.clone().applyQuaternion(this.mesh.quaternion),s=e.lookAt.clone().applyQuaternion(this.mesh.quaternion);this.camera.position.copy(this.mesh.position).add(i),this.camera.lookAt(this.mesh.position.clone().add(s));return}this.controls.target.lerp(this.mesh.position,5*t)}getFpvCameraPose(){const t=typeof this.visual.getFpvCameraPose=="function"?this.visual.getFpvCameraPose():null;return{offset:Yo(t==null?void 0:t.offset,vf.offset),lookAt:Yo(t==null?void 0:t.lookAt,vf.lookAt)}}applySafetyPolicyState(t){if(this.safetyState=t??null,this.safetyAlert=(t==null?void 0:t.alert)??null,!(t!=null&&t.waterImpact)){(t==null?void 0:t.reason)!=="geofence-exit"&&(this.safetyHoldPosition=null);return}this.motion.stop(),this.holdPosition=this.motion.getPosition(),this.safetyHoldPosition=this.holdPosition.clone(),this.splashState={active:!0,startedAt:performance.now(),position:this.holdPosition.clone()},this.waterImpactState={active:!0,mode:"hover",position:this.holdPosition.clone(),alert:this.safetyAlert},this.flightState!==Ie.IDLE&&(this.flightState=Ie.IDLE)}getSafetyFilteredKeys(t=this.keys){var s;const e={...t},i=(s=this.safetyState)==null?void 0:s.inputMask;return i&&Object.entries(i).forEach(([r,o])=>{!o&&Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=!1)}),e}}function Yo(n,t){return n instanceof E?n.clone():Array.isArray(n)?new E(Number(n[0]??t.x),Number(n[1]??t.y),Number(n[2]??t.z)):n&&typeof n=="object"?new E(Number(n.x??t.x),Number(n.y??t.y),Number(n.z??t.z)):t.clone()}function P1(n={}){return{x:Number(n.x??0),y:Number(n.y??0),z:Number(n.z??0)}}const yf={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>n*(2-n),easeInOutCubic:n=>n<.5?4*n*n*n:1-(-2*n+2)**3/2,easeOutExpo:n=>n===1?1:1-2**(-10*n)},R1={duration:900,easing:"easeInOutCubic"};function I1(n,t={}){return new D1(n,t)}class D1{constructor(t,e={}){this.camera=t,this.options={...R1,...e},this.active=!1,this.finished=!0,this.animation=null}animateTo(t={},e=0){if(!this.camera)return this;const i=Math.max(0,Number(t.duration??this.options.duration)),s=F1(t.easing??this.options.easing),r=N1(this.camera,t);return this.animation={startedAt:e,duration:i,easing:s,fromPosition:this.camera.position.clone(),toPosition:qr(t.position,this.camera.position),fromQuaternion:this.camera.quaternion.clone(),toQuaternion:r,fromZoom:Number(this.camera.zoom??1),toZoom:Number(t.zoom??this.camera.zoom??1),onUpdate:t.onUpdate,onComplete:t.onComplete},this.active=!0,this.finished=!1,i===0&&this.update(e),this}update(t=0){var r,o,a,c;if(!this.active||!this.animation||!this.camera)return!1;const e=Math.max(0,t-this.animation.startedAt),i=this.animation.duration===0?1:dh(e/this.animation.duration),s=this.animation.easing(i);if(this.camera.position.lerpVectors(this.animation.fromPosition,this.animation.toPosition,s),this.camera.quaternion.copy(this.animation.fromQuaternion).slerp(this.animation.toQuaternion,s),"zoom"in this.camera&&(this.camera.zoom=U1(this.animation.fromZoom,this.animation.toZoom,s),(o=(r=this.camera).updateProjectionMatrix)==null||o.call(r)),(c=(a=this.animation).onUpdate)==null||c.call(a,{progress:i,eased:s,camera:this.camera,active:i<1}),i>=1){const l=this.animation.onComplete;this.active=!1,this.finished=!0,this.animation=null,l==null||l({camera:this.camera})}return this.active}stop({snapToEnd:t=!1}={}){return t&&this.animation?(this.update(this.animation.startedAt+this.animation.duration),this):(this.active=!1,this.finished=!0,this.animation=null,this)}isActive(){return this.active}}function L1(n,t,e,i=n==null?void 0:n.up){const s=new Ce;return s.position.copy(qr(t,n==null?void 0:n.position)),s.up.copy(qr(i,(n==null?void 0:n.up)??new E(0,1,0))),s.lookAt(qr(e,new E)),s.quaternion.clone()}function N1(n,t){return t.quaternion instanceof Ye?t.quaternion.clone():t.quaternion&&typeof t.quaternion=="object"?new Ye(Number(t.quaternion.x??0),Number(t.quaternion.y??0),Number(t.quaternion.z??0),Number(t.quaternion.w??1)).normalize():t.target?L1(n,qr(t.position,n.position),t.target,t.up):n.quaternion.clone()}function F1(n){return typeof n=="function"?t=>dh(n(dh(t))):yf[n]??yf.easeInOutCubic}function qr(n,t=new E){return n instanceof E?n.clone():Array.isArray(n)?new E(Number(n[0]??t.x),Number(n[1]??t.y),Number(n[2]??t.z)):n&&typeof n=="object"?new E(Number(n.x??t.x),Number(n.y??t.y),Number(n.z??t.z)):t.clone()}function dh(n){return Math.min(1,Math.max(0,Number.isFinite(n)?n:0))}function U1(n,t,e){return n+(t-n)*e}const _f={type:"change"},tu={type:"start"},Km={type:"end"},Ko=new sr,xf=new Xi,O1=Math.cos(70*pn.DEG2RAD),ke=new E,un=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zc=1e-6;class B1 extends Wy{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new Ye,this._lastTargetPosition=new E,this._quat=new Ye().setFromUnitVectors(t.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sd,this._sphericalDelta=new Sd,this._scale=1,this._panOffset=new E,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new E,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k1.bind(this),this._onPointerDown=z1.bind(this),this._onPointerUp=V1.bind(this),this._onContextMenu=j1.bind(this),this._onMouseWheel=W1.bind(this),this._onKeyDown=q1.bind(this),this._onTouchStart=X1.bind(this),this._onTouchMove=$1.bind(this),this._onMouseDown=H1.bind(this),this._onMouseMove=G1.bind(this),this._interceptControlDown=Y1.bind(this),this._interceptControlUp=K1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_f),this.update(),this.state=ye.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ke.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new E(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ko.origin.copy(this.object.position),Ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ko.direction))<O1?this.object.lookAt(this.target):(xf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ko.intersectPlane(xf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zc||this._lastTargetPosition.distanceToSquared(this.target)>Zc?(this.dispatchEvent(_f),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?un/60*this.autoRotateSpeed*t:un/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ke.copy(s).sub(this.target);let r=ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function z1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function k1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function V1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Km),this.state=ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function H1(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ye.DOLLY;break;case $s.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ye.ROTATE}break;case $s.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(tu)}function G1(n){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function W1(n){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(n.preventDefault(),this.dispatchEvent(tu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Km))}function q1(n){this.enabled!==!1&&this._handleKeyDown(n)}function X1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ye.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ye.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(tu)}function $1(n){switch(this._trackPointer(n),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ye.NONE}}function j1(n){this.enabled!==!1&&n.preventDefault()}function Y1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function K1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Z1=-15,Ia=new E(-430,28,175),$e=30,Le=22,fh=11,pa=2.6,dn=pa+fh,eu=dn+.75,Zm=.45,Da=dn-3,ph=dn+.95,Ja=.6,Jm=1.45,Qm=Da+Ja/2+Jm,t0=ph+Ja/2+Jm;Ia.clone().add(new E(0,Qm,0));Ia.clone().add(new E(0,t0,0));const bf=new E(-315,88,150);function J1(n,t={}){var i;const e=new Q1(t);return(i=n==null?void 0:n.add)==null||i.call(n,e.group),e}class Q1{constructor({position:t=Ia,parkPosition:e,launchPosition:i,exitPosition:s=bf}={}){this.position=Zo(t,Ia),this.parkPosition=Zo(e,this.position.clone().add(new E(0,Qm,0))),this.launchPosition=Zo(i,this.position.clone().add(new E(0,t0,0))),this.exitPosition=Zo(s,bf),this.group=new Me,this.group.name="IndustrialBoxDockStation",this.group.position.copy(this.position),this.hatchProgress=0,this.platformProgress=0,this.lockProgress=1,this.status="closed",this.hatchLeft=null,this.hatchRight=null,this.platformGroup=null,this.lockPins=[],this.statusLight=null,this.statusLenses=[],this.createModel()}createModel(){const t=lT();this.materials=t;const e=this.group;we(e,[38,.8,28],t.concrete,[0,.4,0],"raised-concrete-service-pad"),we(e,[34,.35,24],t.blackSeal,[0,.98,0],"black-pad-drainage-seal"),tT(e,t),we(e,[$e,fh,Le],t.cabinet,[0,pa+fh/2,0],"white-weatherproof-cabinet"),we(e,[$e+1,1.2,Le+1],t.blackSeal,[0,dn+.25,0],"continuous-black-top-gasket"),we(e,[$e+1.4,1.2,1.1],t.blackSeal,[0,pa+.7,Le/2+.25],"front-lower-rubber-seal"),we(e,[$e+1.4,1.2,1.1],t.blackSeal,[0,pa+.7,-Le/2-.25],"rear-lower-rubber-seal"),eT(e,t),nT(e,t),this.platformGroup=iT(t),e.add(this.platformGroup),sT(e,t),this.hatchLeft=wf(-1,t),this.hatchRight=wf(1,t),e.add(this.hatchLeft,this.hatchRight),this.lockPins=rT(e,t),this.statusLenses=oT(e,t),this.statusLight=new ar(3718648,1.6,80),this.statusLight.position.set(-$e/2+5,dn+5,Le/2+4),e.add(this.statusLight),aT(e,t),this.setHatchProgress(0),this.setPlatformProgress(0),this.setLockProgress(1),this.setStatus("closed")}setHatchProgress(t=0){this.hatchProgress=Jo(t);const e=this.hatchProgress*Math.PI*.39;return this.hatchLeft&&(this.hatchLeft.rotation.z=e),this.hatchRight&&(this.hatchRight.rotation.z=-e),this}setPlatformProgress(t=0){return this.platformProgress=Jo(t),this.platformGroup&&(this.platformGroup.position.y=pn.lerp(Da,ph,Sf(this.platformProgress))),this}setLockProgress(t=1){return this.lockProgress=Jo(t),this.lockPins.forEach(e=>{const i=e.userData.side??1;e.position.x=i*(1.4+this.lockProgress*3.5)}),this}setStatus(t="closed"){var i;this.status=t;const e=hT(t);return(i=this.statusLight)==null||i.color.setHex(e),this.statusLenses.forEach(s=>{var r;s.material.color.setHex(e),(r=s.material.emissive)==null||r.setHex(e)}),this}getParkPosition(){return this.parkPosition.clone()}getLaunchPosition(){return this.launchPosition.clone()}getExitPosition(){return this.exitPosition.clone()}getPlatformTopWorldY(t=this.platformProgress){const e=pn.lerp(Da,ph,Sf(Jo(t)));return this.position.y+e+Ja/2}getDockTopWorldY(){return this.position.y+eu+Zm/2}getWaterLevel(){return Z1}}function tT(n,t){const e=[-$e/2+6,$e/2-6],i=[-Le/2+5,Le/2-5];e.forEach(s=>{i.forEach(r=>{Mn(n,.34,.44,2.2,t.leg,[s,1.95,r],[0,0,0],18,"galvanized-support-leg"),Mn(n,.62,.62,.35,t.rubber,[s,.8,r],[Math.PI/2,0,0],24,"small-locking-caster-wheel")})})}function eT(n,t){[-7.2,7.2].forEach(e=>{we(n,[9.6,6.2,.24],t.panel,[e,8.6,Le/2+.16],"front-service-door"),we(n,[.26,6.6,.36],t.blackSeal,[e-4.9,8.6,Le/2+.28],"front-door-hinge-strip"),Mn(n,.26,.26,.11,t.blackSeal,[e+3.6,8.6,Le/2+.34],[Math.PI/2,0,0],18,"flush-round-door-lock")}),[-4.8,4.8].forEach(e=>{we(n,[.24,5.6,6.8],t.panel,[-$e/2-.14,8.2,e],"left-side-service-panel"),we(n,[.24,5.2,5.8],t.panel,[$e/2+.14,8.4,e],"right-side-vented-panel")});for(let e=0;e<6;e+=1)we(n,[.24,.14,4.2],t.blackSeal,[$e/2+.29,6.6+e*.55,0],"side-cooling-louver")}function nT(n,t){const e=dn+.55;we(n,[$e+1,.78,.72],t.blackSeal,[0,e,Le/2-.5],"front-top-weather-gasket"),we(n,[$e+1,.78,.72],t.blackSeal,[0,e,-Le/2+.5],"rear-top-weather-gasket"),we(n,[.72,.78,Le-1],t.blackSeal,[-$e/2+.5,e,0],"left-top-weather-gasket"),we(n,[.72,.78,Le-1],t.blackSeal,[$e/2-.5,e,0],"right-top-weather-gasket"),we(n,[.46,.58,Le-2.2],t.blackSeal,[0,eu+.02,0],"center-hatch-seal-line")}function iT(n){const t=new Me;return t.name="elevating-slide-rail-platform",t.position.y=Da,we(t,[19,Ja,14],n.platform,[0,0,0],"lift-table"),we(t,[16,.2,1],n.rail,[0,.48,5],"front-slide-rail"),we(t,[16,.2,1],n.rail,[0,.48,-5],"rear-slide-rail"),Mn(t,4.8,4.8,.18,n.pad,[0,.58,0],[0,0,0],48,"center-landing-pad"),cT(t,5.25,.09,n.marker,[0,.7,0],[Math.PI/2,0,0],"yellow-landing-ring"),we(t,[1.8,.14,11.2],n.blackSeal,[-7.2,.66,0],"left-platform-track"),we(t,[1.8,.14,11.2],n.blackSeal,[7.2,.66,0],"right-platform-track"),t}function sT(n,t){[-8.3,8.3].forEach(e=>{Mn(n,.2,.2,5.1,t.rail,[e,dn-1,6.2],[0,0,0],14,"front-vertical-lift-guide"),Mn(n,.2,.2,5.1,t.rail,[e,dn-1,-6.2],[0,0,0],14,"rear-vertical-lift-guide")})}function wf(n,t){const e=$e/2-.9,i=new Me;i.name=n<0?"left-flip-hatch-panel":"right-flip-hatch-panel",i.position.set(n*($e/2-.42),eu,0);const s=-n,r=we(i,[e,Zm,Le-1.8],t.hatch,[s*(e/2+.08),0,0],"ceramic-white-roof-cover");return r.castShadow=!0,we(i,[e-1.8,.11,1],t.hatchInner,[s*(e/2+.08),-.28,5.8],"inner-hatch-reinforcement-rib"),we(i,[e-1.8,.11,1],t.hatchInner,[s*(e/2+.08),-.28,-5.8],"inner-hatch-reinforcement-rib"),we(i,[1,.12,Le-5.2],t.hatchInner,[s*.9,-.28,0],"outer-hatch-stiffener-strip"),we(i,[.36,.58,Le-1.4],t.blackSeal,[s*(e-.16),-.01,0],"center-free-edge-rubber-lip"),Mn(i,.28,.28,Le-1.8,t.rail,[0,-.28,0],[Math.PI/2,0,0],18,"outer-side-hinge-bar"),i}function rT(n,t){return[-1,1].map(e=>{const i=we(n,[1.8,.32,.45],t.warning,[e*2.2,dn+.32,Le/2-2.4],"hatch-electromagnetic-lock-pin");return i.userData.side=e,i})}function oT(n,t){return[-1.6,0,1.6].map((e,i)=>Mn(n,.34,.34,.11,i===1?t.status:t.darkLens,[-$e/2+2.6+e*.62,9.8,Le/2+.38],[Math.PI/2,0,0],18,"front-stack-status-light"))}function aT(n,t){const e=$e/2-3.5,i=-Le/2+3.2;Mn(n,.16,.22,7.8,t.rail,[e,dn+4.2,i],[0,0,0],14,"weather-station-mast"),Mn(n,.08,.08,3.8,t.rail,[e,dn+8.35,i],[0,0,Math.PI/2],10,"anemometer-crossbar-x"),Mn(n,.08,.08,3.8,t.rail,[e,dn+8.35,i],[Math.PI/2,0,0],10,"anemometer-crossbar-z"),[[2.1,0],[-2.1,0],[0,2.1],[0,-2.1]].forEach(([s,r])=>{Mn(n,.32,.16,.4,t.blackSeal,[e+s,dn+8.35,i+r],[0,0,0],14,"anemometer-wind-cup")}),Mn(n,.42,.32,.55,t.hatch,[e,dn+9.45,i],[0,0,0],18,"compact-weather-sensor-head")}function we(n,t,e,i,s,r=[0,0,0]){const o=new It(new _e(...t),e);return o.position.set(...i),o.rotation.set(...r),o.name=s,o.castShadow=!0,o.receiveShadow=!0,n.add(o),o}function Mn(n,t,e,i,s,r,o,a,c){const l=new It(new ci(t,e,i,a),s);return l.position.set(...r),l.rotation.set(...o),l.name=c,l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function cT(n,t,e,i,s,r,o){const a=new It(new ys(t,e,12,72),i);return a.position.set(...s),a.rotation.set(...r),a.name=o,a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}function lT(){const n=new Yt({color:3718648,emissive:3718648,emissiveIntensity:.8,roughness:.35});return{concrete:new Yt({color:4937059,roughness:.85,metalness:.08}),cabinet:new Yt({color:15265264,roughness:.42,metalness:.18}),panel:new Yt({color:14147041,roughness:.5,metalness:.2}),hatch:new Yt({color:16054264,roughness:.36,metalness:.22}),hatchInner:new Yt({color:12174025,roughness:.45,metalness:.32}),platform:new Yt({color:3095107,roughness:.52,metalness:.55}),pad:new Yt({color:725271,roughness:.72,metalness:.16}),marker:new rn({color:13938487,transparent:!0,opacity:.9,side:cn}),blackSeal:new Yt({color:1120295,roughness:.76,metalness:.15}),rubber:new Yt({color:329482,roughness:.9,metalness:.04}),leg:new Yt({color:9147550,roughness:.38,metalness:.8}),rail:new Yt({color:6583435,roughness:.36,metalness:.72}),warning:new Yt({color:16096779,roughness:.5,metalness:.18}),darkLens:new Yt({color:988970,emissive:988970,emissiveIntensity:.25,roughness:.45}),status:n}}function hT(n){return n==="unlocking"||n==="opening"||n==="spoolup"?16096779:n==="ready"||n==="departed"||n==="open"?2278750:n==="launching"?15680580:3718648}function Zo(n,t){return n instanceof E?n.clone():Array.isArray(n)?new E(n[0]??t.x,n[1]??t.y,n[2]??t.z):n&&typeof n=="object"?new E(Number(n.x??t.x),Number(n.y??t.y),Number(n.z??t.z)):t.clone()}function Jo(n){return pn.clamp(Number(n),0,1)}function Sf(n){return n*n*(3-2*n)}const Mf={critical:15680580,high:16347926,warning:16096779,medium:16096779,low:2278750,info:3718648},Wi={dark:.92,light:.78};function uT({color:n=16096779,opacity:t=.86}={}){return new Yt({color:n,emissive:n,emissiveIntensity:.75,roughness:.34,metalness:.08,transparent:!0,opacity:t,depthWrite:!1})}function dT({radius:n=9,color:t=16096779,opacity:e=.82}={}){const i=new Me;i.name="DefectTargetRing";const s=new rn({color:t,transparent:!0,opacity:e,depthWrite:!1,side:cn}),r=new It(new ys(n,.22,8,96),s),o=new It(new ys(n*.62,.14,8,72),s.clone()),a=s.clone();a.opacity=e*.7;const c=new It(new _e(n*2.2,.08,.08),a),l=new It(new _e(.08,n*2.2,.08),a.clone());return i.add(r,o,c,l),i}function fT({color:n=16096779,height:t=15}={}){const e=new Me;e.name="DefectAlertMarker";const i=new rn({color:n,transparent:!0,opacity:.95,depthWrite:!1}),s=i.clone();s.opacity=.5;const r=new It(new ci(.16,.16,t,12),s);r.position.y=t*.5;const o=new It(new Vh(2.2,5,24),i);o.position.y=t+2.5,o.rotation.x=Math.PI;const a=new ar(n,1.2,55);return a.position.y=t+2,e.add(r,o,a),e}function pT(n,{camera:t=null,theme:e="dark"}={}){const i=new Me;i.name="DefectMarkerSystem",n.add(i);const s=new Map;let r=null,o=e;function a(p={}){const v=Jc(p),m=s.get(v);if(m)return m.group.position.copy(Ef(p.position,m.group.position)),m.group;const g=mT(p.severity),y=new Me;y.name=`DefectMarker:${v}`,y.position.copy(Ef(p.position)),y.userData.defect={...p,id:v};const x=dT({radius:p.radius??10,color:g,opacity:Wi[o]??Wi.dark}),b=fT({color:g,height:p.height??14});b.position.y=2,y.add(x,b),i.add(y);const S={id:v,group:y,ring:x,alert:b,color:g,materialTargets:gT(y),pulseOffset:s.size*.63};return s.set(v,S),y}function c(p,v={}){var g;const m=Jc(p);return!s.has(m)&&typeof p=="object"&&a({...p,id:m}),r=m,s.forEach(y=>{const x=y.id===r;y.group.visible=v.hideInactive?x:!0,y.group.userData.highlighted=x,y.materialTargets.forEach(b=>{b.opacity=x?1:(Wi[o]??Wi.dark)*.55})}),((g=s.get(m))==null?void 0:g.group)??null}function l(){r=null,s.forEach(p=>{p.group.visible=!0,p.group.userData.highlighted=!1,p.materialTargets.forEach(v=>{v.opacity=Wi[o]??Wi.dark})})}function h(p){const v=Jc(p),m=s.get(v);return m?(i.remove(m.group),Tf(m.group),s.delete(v),r===v&&(r=null),!0):!1}function f(p="dark"){o=p;const v=Wi[p]??Wi.dark;s.forEach(m=>{m.materialTargets.forEach(g=>{g.opacity=m.id===r?1:v})})}function u({elapsed:p=0}={}){s.forEach(v=>{const m=v.id===r,g=Math.sin(p*(m?4.4:2.5)+v.pulseOffset)*.5+.5,y=m?1.15+g*.22:.95+g*.08;v.ring.scale.setScalar(y),v.alert.scale.setScalar(m?1.05+g*.16:1),t&&v.ring.lookAt(t.position)})}function d(){n.remove(i),Tf(i),s.clear()}return{group:i,addDefectMarker:a,highlightDefect:c,clearDefectHighlight:l,removeDefectMarker:h,applyTheme:f,update:u,dispose:d}}function Jc(n={}){return typeof n=="string"?n:n.id??n.code??`defect-${vT()}`}function Ef(n,t=new E){return n instanceof E?n.clone():Array.isArray(n)?new E(n[0]??0,n[1]??0,n[2]??0):n&&typeof n=="object"?new E(n.x??0,n.y??0,n.z??0):t.clone()}function mT(n="warning"){return Mf[String(n).toLowerCase()]??Mf.warning}function gT(n){const t=[];return n.traverse(e=>{(Array.isArray(e.material)?e.material:[e.material]).filter(Boolean).forEach(s=>{s.transparent&&t.push(s)})}),t}function Tf(n){n.traverse(t=>{var i,s;(s=(i=t.geometry)==null?void 0:i.dispose)==null||s.call(i),(Array.isArray(t.material)?t.material:[t.material]).filter(Boolean).forEach(r=>{var o;return(o=r.dispose)==null?void 0:o.call(r)})})}function vT(){var n;return(n=globalThis.crypto)!=null&&n.randomUUID?globalThis.crypto.randomUUID():Math.random().toString(36).slice(2,10)}function yT({scene:n,camera:t,theme:e="dark"}={}){if(!n)throw new Error("createSceneVisuals requires a Three.js scene");const i=pT(n,{camera:t,theme:e}),s=uT(),r=new Map;function o(d){return i.addDefectMarker(Af(d))}function a(d,p={}){const v=i.highlightDefect(Af(d),p);return p.object&&u(p.object),v}function c(){i.clearDefectHighlight(),r.forEach((d,p)=>{p.material=d.originalMaterial}),r.clear()}function l(d){i.applyTheme(d)}function h(d){i.update(d)}function f(){c(),i.dispose(),s.dispose()}function u(d,p){d!=null&&d.material&&(r.has(d)||r.set(d,{originalMaterial:d.material}),d.material=s)}return{defectMarkers:i,addDefectMarker:o,highlightDefect:a,clearDefectHighlight:c,applyTheme:l,update:h,dispose:f}}function Af(n={}){return typeof n=="string"?n:{...n,position:_T(n.position??n.worldPosition??n.target)}}function _T(n){return n instanceof E?n:Array.isArray(n)?new E(n[0]??0,n[1]??0,n[2]??0):n&&typeof n=="object"?new E(n.x??0,n.y??0,n.z??0):new E(250,105,20)}const Cf={dark:{deepColor:398108,surfaceColor:1192007,accentColor:3718648,opacity:.72,waveStrength:1.7,foamStrength:.28},light:{deepColor:9358054,surfaceColor:13101299,accentColor:959977,opacity:.62,waveStrength:1.25,foamStrength:.18}},xT=`
    uniform float uTime;
    uniform float uWaveStrength;

    varying vec2 vUv;
    varying float vWave;

    void main() {
        vUv = uv;
        vec3 transformed = position;
        float waveA = sin(position.x * 0.034 + uTime * 0.85);
        float waveB = cos(position.z * 0.045 - uTime * 0.62);
        float ripple = sin((position.x + position.z) * 0.018 + uTime * 1.35);
        float wave = (waveA * waveB + ripple * 0.35) * uWaveStrength;
        transformed.y += wave;
        vWave = wave;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
`,bT=`
    uniform vec3 uDeepColor;
    uniform vec3 uSurfaceColor;
    uniform vec3 uAccentColor;
    uniform float uOpacity;
    uniform float uFoamStrength;
    uniform float uTime;

    varying vec2 vUv;
    varying float vWave;

    void main() {
        float flow = sin((vUv.x * 32.0) + (vUv.y * 18.0) + uTime * 0.8) * 0.5 + 0.5;
        float crossFlow = cos((vUv.x - vUv.y) * 42.0 - uTime * 0.55) * 0.5 + 0.5;
        float crest = smoothstep(0.55, 1.0, abs(vWave));
        float current = smoothstep(0.72, 1.0, flow * crossFlow);
        vec3 base = mix(uDeepColor, uSurfaceColor, flow * 0.45 + 0.25);
        vec3 color = mix(base, uAccentColor, current * 0.15 + crest * uFoamStrength);
        float alpha = uOpacity + crest * 0.08;

        gl_FragColor = vec4(color, alpha);
    }
`;function wT({size:n=3e3,segments:t=128,y:e=-15,theme:i="dark"}={}){const s=new Ss(n,n,t,t);s.rotateX(-Math.PI/2);const r=new Wn({uniforms:{uTime:{value:0},uDeepColor:{value:new $t},uSurfaceColor:{value:new $t},uAccentColor:{value:new $t},uOpacity:{value:.7},uWaveStrength:{value:1.5},uFoamStrength:{value:.22}},vertexShader:xT,fragmentShader:bT,transparent:!0,depthWrite:!1,side:cn}),o=new It(s,r);o.position.y=e,o.receiveShadow=!0,o.name="ThemedWaterSurface";function a(h="dark"){const f=Cf[h]??Cf.dark;r.uniforms.uDeepColor.value.setHex(f.deepColor),r.uniforms.uSurfaceColor.value.setHex(f.surfaceColor),r.uniforms.uAccentColor.value.setHex(f.accentColor),r.uniforms.uOpacity.value=f.opacity,r.uniforms.uWaveStrength.value=f.waveStrength,r.uniforms.uFoamStrength.value=f.foamStrength}function c(h){r.uniforms.uTime.value=h}function l(){s.dispose(),r.dispose()}return a(i),{mesh:o,material:r,setTheme:a,update:c,dispose:l}}const mn={sky:9358054,cloud:16317439,mesh:14279144,grid:10143704,accent:3718648,land:14936043,ambientIntensity:1.05,directionalIntensity:1.25,fogDensity:55e-5};function ST(n){const t=new cm;t.fog=new Ha(mn.sky,mn.fogDensity);const e=new en(50,window.innerWidth/window.innerHeight,.1,3e3);e.position.set(250,150,350);const i=new Yh({antialias:!0,alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio),i.setClearColor(mn.sky,1),i.shadowMap.enabled=!0,i.shadowMap.type=zr,n.appendChild(i.domElement);const s=new B1(e,i.domElement);s.enableDamping=!0,s.dampingFactor=.05,s.maxPolarAngle=Math.PI/2+.1;const r=MT(t),o=ET(t),a=TT(),c=AT(t,a),l=CT(t,a),h=J1(t),f=RT(t),u=yT({scene:t,camera:e,theme:"dark"});let d=null,p=null;const v=new Set,m=new Gy;function g(){const S=mn;i.setClearColor(S.sky,1),t.fog.color.setHex(S.sky),t.fog.density=S.fogDensity,a.concrete.color.setHex(S.mesh),a.terrain.color.setHex(S.land),r.ambient.intensity=S.ambientIntensity,r.directional.intensity=S.directionalIntensity,c.waterSurface.setTheme("light"),u.applyTheme("light"),o.apply(),t.remove(c.gridHelper),c.gridHelper=e0(S.accent,S.grid),t.add(c.gridHelper)}function y(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}function x(){const S=m.getDelta(),M=m.getElapsedTime(),D=performance.now();d&&!d.isFPV&&s.update(),d&&(d.update(S),r.drone.position.copy(d.mesh.position)),DT(f),c.waterSurface.update(M),u.update({dt:S,elapsed:M,now:D}),v.forEach(_=>_({dt:S,elapsed:M,now:D})),i.render(t,e)}function b(){p=requestAnimationFrame(b),x()}return{scene:t,camera:e,renderer:i,controls:s,bridgeGroup:l,dockStation:h,terrainGroup:c.group,water:c.water,applyTheme:g,resize:y,addDefectMarker:u.addDefectMarker,highlightDefect:u.highlightDefect,clearDefectHighlight:u.clearDefectHighlight,attachDrone(S){d=S},addFrameTask(S){return v.add(S),()=>v.delete(S)},start(){p||b()}}}function MT(n){const t=new Rm(16777215,mn.ambientIntensity);n.add(t);const e=new Ay(12576767,1776411,.55);n.add(e);const i=new ah(16777215,mn.directionalIntensity);i.position.set(300,500,200),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=1500,i.shadow.camera.left=-500,i.shadow.camera.right=500,i.shadow.camera.top=300,i.shadow.camera.bottom=-300,n.add(i);const s=new ar(15680580,2.5,150);return n.add(s),window.ambientLight=t,window.directionalLight=i,{ambient:t,hemi:e,directional:i,drone:s}}function ET(n){const t=new Me;t.name="blue-sky-and-clouds";const e=new It(new ts(1400,32,16),new rn({color:mn.sky,side:ln,depthWrite:!1}));e.position.y=220,t.add(e);const i=new rn({color:mn.cloud,transparent:!0,opacity:.82,depthWrite:!1});return[[-520,330,-380,80,18],[-120,380,-520,110,24],[360,340,-420,92,20],[620,300,120,118,26],[-660,280,220,96,22],[120,420,360,130,28]].forEach(([s,r,o,a,c],l)=>{const h=new It(new Ss(a,c),i.clone());h.name=`soft-cloud-${l+1}`,h.position.set(s,r,o),h.rotation.set(-.18,.12+l*.18,0),t.add(h)}),n.add(t),{group:t,apply(){e.material.color.setHex(mn.sky),t.children.forEach(s=>{var r;s!==e&&((r=s.material)!=null&&r.color)&&s.material.color.setHex(mn.cloud)})}}}function TT(){return{concrete:new Yt({color:mn.mesh,roughness:.9,metalness:.1}),road:new Yt({color:12042699,roughness:.95}),cable:new Qi({color:9741240,transparent:!0,opacity:.82}),highlight:new Yt({color:13938487,emissive:13938487,emissiveIntensity:.4}),metal:new Yt({color:9741240,roughness:.42,metalness:.55}),terrain:new Yt({color:mn.land,roughness:1,flatShading:!0})}}function AT(n,t){const e=new Me,i=new Ss(3e3,3e3,80,80);i.rotateX(-Math.PI/2);const s=i.attributes.position;for(let l=0;l<s.count;l++){const h=s.getX(l),f=s.getZ(l),u=Math.abs(h);let d=-20;u>280?d=(u-280)*.15+Math.sin(h*.01)*Math.cos(f*.01)*30+Math.random()*5:u>200?d=-20+(u-200)*.2+Math.random()*2:d=-35+Math.random()*3,s.setY(l,d)}i.computeVertexNormals();const r=new It(i,t.terrain);r.receiveShadow=!0,e.add(r);const o=wT({size:3e3,segments:128,y:-15,theme:"light"}),a=o.mesh;e.add(a);const c=e0(mn.accent,mn.grid);return n.add(e,c),{group:e,water:a,waterSurface:o,gridHelper:c}}function e0(n,t){const e=new Im(3e3,150,n,t);return e.position.y=-14.5,e.material.transparent=!0,e.material.opacity=.2,e}function CT(n,t){const e=new Me,i=new It(new _e(1600,4,40),t.concrete);i.position.y=50,i.receiveShadow=!0,i.castShadow=!0,e.add(i);const s=new It(new _e(1600,.5,30),t.road);s.position.y=52,s.receiveShadow=!0,e.add(s);const r=new It(new _e(1600,1.2,1.5),t.concrete);return r.position.y=52.6,r.castShadow=!0,e.add(r),e.add(Pf(19,t.metal),Pf(-19,t.metal)),PT(e,t.metal),e.add(Rf(-250,t),Rf(250,t)),If(e,-250,t.cable),If(e,250,t.cable),n.add(e),e}function Pf(n,t){const e=new Me,i=new It(new _e(1600,.5,.5),t);i.position.set(0,54,n);const s=new It(new _e(1600,.5,.5),t);s.position.set(0,53,n),e.add(i,s);for(let r=-800;r<=800;r+=10){const o=new It(new _e(.5,2.5,.5),t);o.position.set(r,53.25,n),e.add(o)}return e}function PT(n,t){const e=new ci(.3,.5,12),i=new ts(1.5),s=new rn({color:16777215});for(let r=-750;r<=750;r+=60){const o=new It(e,t);o.position.set(r,58,0);const a=new It(i,s);a.position.set(0,6,0),o.add(a);const c=new ar(16773341,.8,100);c.position.set(r,65,0),n.add(o,c)}}function Rf(n,t){const e=new Me,i=new ci(14,18,80,16),s=new It(i,t.concrete);s.position.set(0,0,18);const r=new It(i,t.concrete);r.position.set(0,0,-18);const o=new It(new _e(32,10,56),t.concrete);o.position.set(0,42,0);const a=new _e(10,180,10),c=new It(a,t.concrete);c.position.set(0,130,18),c.castShadow=!0;const l=new It(a,t.concrete);l.position.set(0,130,-18),l.castShadow=!0;const h=new It(new _e(8,10,36),t.concrete);h.position.set(0,80,0);const f=new It(new _e(8,10,36),t.concrete);f.position.set(0,180,0);const u=new It(new _e(12,6,40),t.highlight);return u.position.set(0,223,0),e.add(s,r,o,c,l,h,f,u),e.position.set(n,0,0),e}function If(n,t,e){for(let i=1;i<=18;i++){const s=25*i,r=215-i*3,o=new E(t,r,0);n.add(new si(new ue().setFromPoints([o,new E(t-s,52,19)]),e)),n.add(new si(new ue().setFromPoints([o,new E(t-s,52,-19)]),e)),n.add(new si(new ue().setFromPoints([o,new E(t+s,52,19)]),e)),n.add(new si(new ue().setFromPoints([o,new E(t+s,52,-19)]),e))}}function RT(n){const t=[];for(let e=0;e<30;e++)t.push(IT(n,e%2===0));return t}function IT(n,t){const e=new Me,i=new Yt({color:new $t().setHSL(Math.random(),.7,.5),roughness:.3,metalness:.6}),s=new Yt({color:1118481,roughness:.1}),r=new It(new _e(8,2.5,4),i);r.position.y=1.25,r.castShadow=!0;const o=new It(new _e(4,2,3.5),s);o.position.set(-.5,3.25,0),e.add(r,o);const a=new It(new _e(.5,.5,3),new rn({color:16777215}));a.position.set(4,1.5,0);const c=new It(new _e(.5,.5,3),new rn({color:16711680}));c.position.set(-4,1.5,0),e.add(a,c);const l=(Math.random()-.5)*1600,h=t?-8-Math.random()*4:8+Math.random()*4;return e.position.set(l,52.2,h),t&&(e.rotation.y=Math.PI),n.add(e),{model:e,speed:(1.2+Math.random()*.8)*(t?-1:1)}}function DT(n){n.forEach(t=>{t.model.position.x+=t.speed,t.model.position.x>800&&(t.model.position.x=-800),t.model.position.x<-800&&(t.model.position.x=800)})}const ei=Object.freeze({id:"bridge-demo-origin",name:"示范桥梁巡检原点",lng:116.391,lat:39.904,height:0,headingDegrees:0}),Df=6378137,Lf=.00669437999014,ma=Math.PI/180,Nf=180/Math.PI;function n0(n=ei){return new LT(n)}class LT{constructor(t=ei){this.origin=NT(t),this._metrics=FT(this.origin.lat),this._headingRad=Number(this.origin.headingDegrees??0)*ma,this._cosHeading=Math.cos(this._headingRad),this._sinHeading=Math.sin(this._headingRad)}geoToLocal(t,e,i=this.origin.height){const s=(Number(t)-this.origin.lng)*this._metrics.metersPerDegreeLng,r=(Number(e)-this.origin.lat)*this._metrics.metersPerDegreeLat,o=Number(i)-this.origin.height;return new E(s*this._cosHeading+r*this._sinHeading,o,-s*this._sinHeading+r*this._cosHeading)}localToGeo(t=new E){const e=UT(t),i=e.x*this._cosHeading-e.z*this._sinHeading,s=e.x*this._sinHeading+e.z*this._cosHeading;return{lng:this.origin.lng+i/this._metrics.metersPerDegreeLng,lat:this.origin.lat+s/this._metrics.metersPerDegreeLat,height:this.origin.height+e.y}}localToCesiumCartesian(t,e=Ff()){var s;if(!((s=e==null?void 0:e.Cartesian3)!=null&&s.fromDegrees))return null;const i=this.localToGeo(t);return e.Cartesian3.fromDegrees(i.lng,i.lat,i.height)}localFromCesiumCartesian(t,e=Ff()){var s;if(!t||!((s=e==null?void 0:e.Cartographic)!=null&&s.fromCartesian))return null;const i=e.Cartographic.fromCartesian(t);return i?this.geoToLocal(i.longitude*Nf,i.latitude*Nf,i.height):null}}n0();function NT(n){return{id:n.id??ei.id,name:n.name??ei.name,lng:Number(n.lng??ei.lng),lat:Number(n.lat??ei.lat),height:Number(n.height??ei.height),headingDegrees:Number(n.headingDegrees??ei.headingDegrees)}}function FT(n){const t=n*ma,e=Math.sin(t),i=Math.sqrt(1-Lf*e*e),s=Df/i;return{metersPerDegreeLat:Df*(1-Lf)/i**3*ma,metersPerDegreeLng:s*Math.cos(t)*ma}}function UT(n){return n instanceof E?n:Array.isArray(n)?new E(Number(n[0]??0),Number(n[1]??0),Number(n[2]??0)):n&&typeof n=="object"?new E(Number(n.x??0),Number(n.y??0),Number(n.z??0)):new E}function Ff(){return globalThis==null?void 0:globalThis.Cesium}const mh="bridge:cesium-bridge-selected",ji=Object.freeze({id:"demo-bridge-main",name:"示范桥梁资产",lng:ei.lng,lat:ei.lat,height:180,localPosition:{x:0,y:60,z:0}});function OT(n={}){return new BT(n)}class BT{constructor({viewer:t,Cesium:e=zT(),geoReference:i=n0(),bridgeAssets:s=[ji],eventTarget:r=globalThis,flyToOnSelect:o=!1}={}){this.viewer=t,this.Cesium=e,this.geoReference=i,this.eventTarget=r,this.entities=new Map,this.handler=null,this.isReady=!!(t&&(e!=null&&e.Cartesian3)&&t.entities),this.isReady&&(s.forEach(a=>this.addBridgeAsset(a)),this.bindSelection(o))}addBridgeAsset(t=ji){if(!this.isReady)return null;const e=Uf(t,this.geoReference),i=this.entities.get(e.id);i&&this.viewer.entities.remove(i);const s=this.viewer.entities.add({id:`bridge-asset-${e.id}`,name:e.name,position:this.Cesium.Cartesian3.fromDegrees(e.lng,e.lat,e.height),point:{pixelSize:13,color:this.Cesium.Color.fromCssColorString("#d4af37"),outlineColor:this.Cesium.Color.fromCssColorString("#101014"),outlineWidth:2,heightReference:this.resolveHeightReference()},label:{text:e.name,font:"13px sans-serif",fillColor:this.Cesium.Color.WHITE,outlineColor:this.Cesium.Color.BLACK,outlineWidth:3,style:this.Cesium.LabelStyle.FILL_AND_OUTLINE,pixelOffset:new this.Cesium.Cartesian2(0,-22),verticalOrigin:this.Cesium.VerticalOrigin.BOTTOM,heightReference:this.resolveHeightReference()},properties:{bridgeLinkId:e.id,bridgeAsset:e}});return s.bridgeAsset=e,this.entities.set(e.id,s),s}flyToAsset(t=ji.id,e={}){var s;if(!this.isReady)return!1;const i=typeof t=="string"?(s=this.entities.get(t))==null?void 0:s.bridgeAsset:Uf(t,this.geoReference);return i?this.flyToPoint(i.lng,i.lat,i.height,e):!1}flyToPoint(t,e,i=450,s={}){var a;if(!this.isReady||!((a=this.viewer.camera)!=null&&a.flyTo))return!1;const r=Number(s.range??1800),o=Number(s.destinationHeight??Number(i)+r);return this.viewer.camera.flyTo({destination:this.Cesium.Cartesian3.fromDegrees(Number(t),Number(e),o),duration:Number(s.duration??1.2),orientation:{heading:Qc(s.headingDegrees??0),pitch:Qc(s.pitchDegrees??-55),roll:Qc(s.rollDegrees??0)}}),!0}bindSelection(t=!1){var e,i,s;return!this.isReady||!this.Cesium.ScreenSpaceEventHandler||!((e=this.viewer.scene)!=null&&e.canvas)?!1:((s=(i=this.handler)==null?void 0:i.destroy)==null||s.call(i),this.handler=new this.Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas),this.handler.setInputAction(r=>{const o=this.viewer.scene.pick(r.position),a=o==null?void 0:o.id,c=a==null?void 0:a.bridgeAsset;c&&(this.dispatchSelection(c,a),t&&this.flyToAsset(c.id))},this.Cesium.ScreenSpaceEventType.LEFT_CLICK),!0)}dispatchSelection(t,e){var r,o;const i={asset:t,entity:e,viewer:this.viewer,localPosition:this.geoReference.geoToLocal(t.lng,t.lat,t.height)},s=typeof CustomEvent=="function"?new CustomEvent(mh,{detail:i}):{type:mh,detail:i};return(o=(r=this.eventTarget)==null?void 0:r.dispatchEvent)==null||o.call(r,s),i}destroy(){var t,e,i;(e=(t=this.handler)==null?void 0:t.destroy)==null||e.call(t),this.handler=null,(i=this.viewer)!=null&&i.entities&&this.entities.forEach(s=>this.viewer.entities.remove(s)),this.entities.clear(),this.isReady=!1}resolveHeightReference(){var t,e;return((t=this.Cesium.HeightReference)==null?void 0:t.CLAMP_TO_GROUND)??((e=this.Cesium.HeightReference)==null?void 0:e.NONE)}}function Uf(n,t){const e=n.localPosition&&(n.lng==null||n.lat==null)?t.localToGeo(n.localPosition):null;return{id:String(n.id??ji.id),name:String(n.name??ji.name),lng:Number(n.lng??(e==null?void 0:e.lng)??ji.lng),lat:Number(n.lat??(e==null?void 0:e.lat)??ji.lat),height:Number(n.height??(e==null?void 0:e.height)??ji.height),localPosition:n.localPosition??null,metadata:n.metadata??{}}}function Qc(n){return Number(n)*Math.PI/180}function zT(){return globalThis==null?void 0:globalThis.Cesium}const kT=[{start:[116.4074,39.9042],end:[-74.006,40.7128]},{start:[-.1278,51.5074],end:[-74.006,40.7128]},{start:[116.4074,39.9042],end:[139.6503,35.6762]}];function VT({containerId:n="cesium-container",googleApiKey:t,bridgeAssets:e,enableBridgeLink:i=!0,onBridgeLinkReady:s}={}){const r=document.getElementById(n),o=window.Cesium;if(!r||typeof o>"u")return null;o.Ion.defaultAccessToken="";const a=new o.Viewer(n,{timeline:!1,animation:!1,geocoder:!1,homeButton:!1,baseLayerPicker:!1,navigationHelpButton:!1,sceneModePicker:!1,fullscreenButton:!1,infoBox:!1,selectionIndicator:!1,baseLayer:!1});return a.scene.skyBox.show=!1,a.scene.backgroundColor=o.Color.fromCssColorString("#080808"),t&&HT(a,o,t),a.camera.flyTo({destination:o.Cartesian3.fromDegrees(116.391,39.904,15e6),duration:0}),GT(a,o,kT),i&&(a.bridgeLink=OT({viewer:a,Cesium:o,bridgeAssets:e}),s==null||s(a.bridgeLink)),window.cesiumViewer=a,a}async function HT(n,t,e){try{const i=await t.createGooglePhotorealistic3DTileset(e);n.scene.primitives.add(i),i.colorBlendMode=t.Cesium3DTileColorBlendMode.MIX,i.colorBlendAmount=.5,i.style=new t.Cesium3DTileStyle({color:"color('#444444')"})}catch(i){console.error("Error loading Google 3D Tiles:",i)}}function GT(n,t,e){e.forEach(i=>{n.entities.add({polyline:{positions:t.Cartesian3.fromDegreesArray([i.start[0],i.start[1],i.end[0],i.end[1]]),width:3,arcType:t.ArcType.GEODESIC,material:new t.PolylineGlowMaterialProperty({glowPower:.3,color:t.Color.fromCssColorString("#d4af37")})}})})}const tl=[{id:"standby",label:"待命关闭",duration:260},{id:"unlock",label:"舱门解锁",duration:620},{id:"opening",label:"左右盖板打开",duration:1200},{id:"platformReady",label:"平台升起",duration:900},{id:"rotorIdle",label:"旋翼怠速",duration:850},{id:"spoolUp",label:"旋翼加速",duration:1150},{id:"rise",label:"垂直升空",duration:1550},{id:"depart",label:"离巢巡检",duration:1500}],el=.28,Qo=1;function WT(n={}){return new qT(n)}class qT{constructor({drone:t,dockStation:e,documentRef:i=document}={}){this.drone=t,this.dockStation=e,this.document=i,this.active=!1,this.completed=!1,this.startedAt=0,this.phase="standby",this.promise=null,this.resolve=null,this.parkPosition=new E,this.launchPosition=new E,this.risePosition=new E,this.exitPosition=new E,this.refreshPositions(),this.resetDroneToDock(),this.updateDockPanel({status:"待命关闭",hatch:"关闭",pusher:"锁止",platform:"收纳",rotor:"停止"})}refreshPositions(){var t,e,i,s,r,o,a,c;this.parkPosition=((e=(t=this.dockStation)==null?void 0:t.getParkPosition)==null?void 0:e.call(t))??((s=(i=this.dockStation)==null?void 0:i.getLaunchPosition)==null?void 0:s.call(i))??new E,this.launchPosition=((o=(r=this.dockStation)==null?void 0:r.getLaunchPosition)==null?void 0:o.call(r))??this.parkPosition.clone(),this.risePosition=this.launchPosition.clone().add(new E(0,54,0)),this.exitPosition=((c=(a=this.dockStation)==null?void 0:a.getExitPosition)==null?void 0:c.call(a))??new E(-315,96,150)}resetDroneToDock(){var t,e,i,s,r,o,a,c,l,h;this.drone&&(this.refreshPositions(),(c=(a=(o=(r=(s=(i=(e=(t=this.dockStation)==null?void 0:t.setStatus)==null?void 0:e.call(t,"closed"))==null?void 0:i.setHatchProgress)==null?void 0:s.call(i,0))==null?void 0:r.setPlatformProgress)==null?void 0:o.call(r,0))==null?void 0:a.setLockProgress)==null||c.call(a,1),(h=(l=this.drone.visual)==null?void 0:l.setRotorThrottle)==null||h.call(l,0,!0),this.setDronePosition(this.parkPosition))}startLaunch(){var t,e;return this.completed?Promise.resolve(!0):this.active?this.promise:!this.drone||!this.dockStation?Promise.resolve(!1):(this.refreshPositions(),this.active=!0,this.startedAt=performance.now(),this.phase="standby",this.dockStation.setStatus("unlocking").setHatchProgress(0).setPlatformProgress(0).setLockProgress(1),(e=(t=this.drone.visual)==null?void 0:t.setRotorThrottle)==null||e.call(t,0),this.setDronePosition(this.parkPosition),this.updateDockPanel({status:"起飞准备",hatch:"关闭",pusher:"解锁中",platform:"收纳",rotor:"停止"}),this.promise=new Promise(i=>{this.resolve=i}),this.promise)}update(t=performance.now()){var s,r,o;if(!this.active)return;const e=t-this.startedAt,i=XT(e);this.phase=i.phase.id,this.updatePhase(i),i.done&&(this.active=!1,this.completed=!0,this.dockStation.setStatus("departed").setHatchProgress(1).setPlatformProgress(1).setLockProgress(0),(r=(s=this.drone.visual)==null?void 0:s.setRotorThrottle)==null||r.call(s,Qo),this.setDronePosition(this.exitPosition),this.updateDockPanel({status:"已离巢",hatch:"开启",pusher:"释放",platform:"升起",rotor:"高速"}),(o=this.resolve)==null||o.call(this,!0),this.resolve=null)}updatePhase({phase:t,localProgress:e}){var s,r,o,a,c,l,h,f,u,d;const i=$T(e);if(t.id==="standby"){this.dockStation.setStatus("closed").setHatchProgress(0).setPlatformProgress(0).setLockProgress(1),(r=(s=this.drone.visual)==null?void 0:s.setRotorThrottle)==null||r.call(s,0),this.setDronePosition(this.parkPosition);return}if(t.id==="unlock"){this.dockStation.setStatus("unlocking").setHatchProgress(0).setPlatformProgress(0).setLockProgress(1-i),this.setDronePosition(this.parkPosition),this.updateDockPanel({status:"舱门解锁",hatch:"关闭",pusher:"解锁中",platform:"收纳",rotor:"停止"});return}if(t.id==="opening"){this.dockStation.setStatus("opening").setHatchProgress(i).setPlatformProgress(0).setLockProgress(0),this.setDronePosition(this.parkPosition),this.updateDockPanel({status:"左右开盖",hatch:`${Math.round(i*100)}%`,pusher:"已解锁",platform:"收纳",rotor:"停止"});return}if(t.id==="platformReady"){this.dockStation.setStatus("ready").setHatchProgress(1).setPlatformProgress(i).setLockProgress(0),this.setDronePosition(nl(this.parkPosition,this.launchPosition,i)),this.updateDockPanel({status:"平台就绪",hatch:"开启",pusher:"释放",platform:`${Math.round(i*100)}%`,rotor:"停止"});return}if(t.id==="rotorIdle"){this.dockStation.setStatus("ready").setHatchProgress(1).setPlatformProgress(1).setLockProgress(0),this.setDronePosition(this.launchPosition),(a=(o=this.drone.visual)==null?void 0:o.setRotorThrottle)==null||a.call(o,pn.lerp(0,el,i)),this.updateDockPanel({status:"旋翼怠速",hatch:"开启",pusher:"释放",platform:"升起",rotor:`${Math.round(el*i*100)}%`});return}if(t.id==="spoolUp"){const p=pn.lerp(el,Qo,i);this.dockStation.setStatus("spoolup").setHatchProgress(1).setPlatformProgress(1).setLockProgress(0),this.setDronePosition(this.launchPosition),(l=(c=this.drone.visual)==null?void 0:c.setRotorThrottle)==null||l.call(c,p),this.updateDockPanel({status:"旋翼加速",hatch:"开启",pusher:"释放",platform:"升起",rotor:`${Math.round(p*100)}%`});return}if(t.id==="rise"){this.dockStation.setStatus("launching").setHatchProgress(1).setPlatformProgress(1).setLockProgress(0),(f=(h=this.drone.visual)==null?void 0:h.setRotorThrottle)==null||f.call(h,Qo),this.setDronePosition(nl(this.launchPosition,this.risePosition,i)),this.updateDockPanel({status:"垂直升空",hatch:"开启",pusher:"释放",platform:"升起",rotor:"高速"});return}t.id==="depart"&&(this.dockStation.setStatus("launching").setHatchProgress(1).setPlatformProgress(1).setLockProgress(0),(d=(u=this.drone.visual)==null?void 0:u.setRotorThrottle)==null||d.call(u,Qo),this.setDronePosition(nl(this.risePosition,this.exitPosition,i)),this.updateDockPanel({status:"离巢中",hatch:"开启",pusher:"释放",platform:"升起",rotor:"高速"}))}setDronePosition(t){var e,i,s;(i=(e=this.drone.motion)==null?void 0:e.setPosition)==null||i.call(e,t),(s=this.drone.mesh)==null||s.position.copy(t)}updateDockPanel({status:t,hatch:e,pusher:i,platform:s,rotor:r}){Mr(this.document,"[data-dock-status]",t),Mr(this.document,"[data-dock-hatch]",e),Mr(this.document,"[data-dock-pusher]",i),Mr(this.document,"[data-dock-platform]",s),Mr(this.document,"[data-dock-rotor]",r)}}function XT(n){let t=0;for(const e of tl){const i=t+e.duration;if(n<=i)return{phase:e,localProgress:Math.max(0,Math.min(1,(n-t)/e.duration)),done:!1};t=i}return{phase:tl[tl.length-1],localProgress:1,done:!0}}function nl(n,t,e){return n.clone().lerp(t,e)}function $T(n){return n*n*(3-2*n)}function Mr(n,t,e){var s;const i=(s=n==null?void 0:n.querySelector)==null?void 0:s.call(n,t);i&&(i.textContent=e)}const De={CLEAR:"clear",WARNING:"warning",BLOCKED:"blocked",WATER_IMPACT:"waterImpact"},i0={maxDistance:24,warningDistance:12,blockedDistance:4,waterCheckDistance:18,waterImpactDistance:2.2,waterLevel:null,lateralSpread:.45,verticalSpread:.22},Of={front:[{id:"center",offset:new E(0,0,0),direction:new E(0,0,-1)},{id:"left",offset:new E(-.45,0,0),direction:new E(-.18,0,-1)},{id:"right",offset:new E(.45,0,0),direction:new E(.18,0,-1)},{id:"upper-front",offset:new E(0,.22,0),direction:new E(0,.12,-1)},{id:"lower-front",offset:new E(0,-.22,0),direction:new E(0,-.16,-1)}],back:[{id:"back",offset:new E(0,0,0),direction:new E(0,0,1)}],left:[{id:"left",offset:new E(-.5,0,0),direction:new E(-1,0,0)}],right:[{id:"right",offset:new E(.5,0,0),direction:new E(1,0,0)}],up:[{id:"up",offset:new E(0,.5,0),direction:new E(0,1,0)}],down:[{id:"down",offset:new E(0,-.5,0),direction:new E(0,-1,0)}]};function jT(n={}){return new YT(n)}class YT{constructor(t={}){this.options={...i0,...t},this.obstacles=[...t.obstacles??[]],this.waterObjects=[...t.waterObjects??[]],this.raycaster=new ch,this.waterRaycaster=new ch}setObstacles(t=[]){return this.obstacles=[...t],this}setWaterObjects(t=[]){return this.waterObjects=[...t],this}updateOptions(t={}){return this.options={...this.options,...t},this}scan(t={}){const e=QT(t),i=tA(t),s=eA(t,i),r=this.scanDirectionalRays(e,i,s),o=Bf(r),a=o[0]??null,c=this.scanWater(e),l=KT(a,c,this.options),h=ZT(r,this.options),f=JT(c,this.options);return{status:l,clear:l===De.CLEAR,distance:(a==null?void 0:a.distance)??1/0,forward:s,origin:e,nearestObstacle:a,waterHit:c,water:f,hits:o,directionalHits:r,directions:h,zones:{warningDistance:this.options.warningDistance,blockedDistance:this.options.blockedDistance,waterImpactDistance:this.options.waterImpactDistance}}}scanObstacleRays(t,e,i){return Bf(this.scanDirectionalRays(t,e,i))}scanDirectionalRays(t,e,i){const s=Object.fromEntries(Object.keys(Of).map(o=>[o,[]]));if(this.obstacles.length===0)return s;const r={...s};return Object.entries(Of).forEach(([o,a])=>{a.forEach(c=>{const l=new E(c.offset.x*this.options.lateralSpread,c.offset.y*this.options.verticalSpread,c.offset.z).applyQuaternion(e),h=t.clone().add(l),f=c.direction.clone().applyQuaternion(e).normalize();this.raycaster.set(h,f.lengthSq()>0?f:i),this.raycaster.far=this.options.maxDistance;const u=this.raycaster.intersectObjects(this.obstacles,!0)[0];u&&r[o].push({...u,sensorId:c.id,directionId:o})}),r[o].sort((c,l)=>c.distance-l.distance)}),r}scanWater(t){const e=this.options.waterLevel==null?NaN:Number(this.options.waterLevel);if(this.waterObjects.length===0&&!Number.isFinite(e))return null;const i=new E(0,-1,0);this.waterRaycaster.set(t,i),this.waterRaycaster.far=this.options.waterCheckDistance;const s=this.waterRaycaster.intersectObjects(this.waterObjects,!0)[0]??null;if(s)return s;if(!Number.isFinite(e)||t.y<e)return null;const r=t.y-e;return r>this.options.waterCheckDistance?null:{distance:r,point:new E(t.x,e,t.z),object:null,sensorId:"water-level",directionId:"down"}}}function nu({obstacleDistance:n=1/0,waterDistance:t=1/0}={},e={}){const i={...i0,...e};return t<=i.waterImpactDistance?De.WATER_IMPACT:n<=i.blockedDistance?De.BLOCKED:n<=i.warningDistance?De.WARNING:De.CLEAR}function KT(n,t,e){return nu({obstacleDistance:(n==null?void 0:n.distance)??1/0,waterDistance:(t==null?void 0:t.distance)??1/0},e)}function Bf(n={}){return Object.values(n).flat().sort((t,e)=>t.distance-e.distance)}function ZT(n,t){return Object.fromEntries(Object.entries(n).map(([e,i])=>{const s=i[0]??null;return[e,{status:nu({obstacleDistance:(s==null?void 0:s.distance)??1/0},t),clear:!s||s.distance>t.warningDistance,distance:(s==null?void 0:s.distance)??1/0,hit:s,hits:i}]}))}function JT(n,t){const e=(n==null?void 0:n.distance)??1/0,i=nu({waterDistance:e},t);return{status:i,clear:i===De.CLEAR,distance:e,hit:n,impact:i===De.WATER_IMPACT}}function QT(n){var t;return n.origin?iu(n.origin):(t=n.object)!=null&&t.position?n.object.position.clone():new E}function tA(n){var t;if(n.quaternion instanceof Ye)return n.quaternion.clone();if(((t=n.object)==null?void 0:t.quaternion)instanceof Ye)return n.object.quaternion.clone();if(n.direction){const e=iu(n.direction,new E(0,0,-1)).normalize();return new Ye().setFromRotationMatrix(new ne().lookAt(new E,e,new E(0,1,0)))}return new Ye}function eA(n,t){return n.direction?iu(n.direction,new E(0,0,-1)).normalize():new E(0,0,-1).applyQuaternion(t).normalize()}function iu(n,t=new E){return n instanceof E?n.clone():Array.isArray(n)?new E(Number(n[0]??t.x),Number(n[1]??t.y),Number(n[2]??t.z)):n&&typeof n=="object"?new E(Number(n.x??t.x),Number(n.y??t.y),Number(n.z??t.z)):t.clone()}const s0={warningDistance:12,blockedDistance:4,waterWarningDistance:8,waterImpactDistance:2.2,geofenceWarningMargin:18},nA=Object.freeze({w:!0,a:!0,s:!0,d:!0,space:!0,shift:!0,q:!0,e:!0});function iA(n={}){return new sA(n)}class sA{constructor(t={}){this.config={...s0,...t}}updateConfig(t={}){return this.config={...this.config,...t},this}evaluate(t,e,i={}){var p,v,m;const s={...this.config,...i},r=rA(t,e),o=r.directions??{},a=((p=r.water)==null?void 0:p.distance)??((v=r.waterHit)==null?void 0:v.distance)??1/0,c=r.nearestObstacle??((m=r.hits)==null?void 0:m[0])??null,l=(c==null?void 0:c.distance)??r.distance??1/0,h=oA(o,s),f=aA(o,s),u=cA(h,r.hits??[],s),d=uA(t,s.geofence);if(a<=s.waterImpactDistance||r.status===De.WATER_IMPACT)return Er({status:De.WATER_IMPACT,reason:"water-impact",distance:a,obstacleDistance:l,waterDistance:a,snapshot:r,blockedDirections:h,warningDirections:f,inputMask:zf(u),action:"water-impact",alertLevel:"critical",geofence:d});if(d.violation)return Er({status:De.BLOCKED,reason:"geofence-exit",distance:d.distance,obstacleDistance:l,waterDistance:a,snapshot:r,blockedDirections:["geofence"],warningDirections:f,inputMask:zf(u),action:"geofence-hold",alertLevel:"danger",geofence:d});if(h.length>0||l<=s.blockedDistance)return Er({status:De.BLOCKED,reason:h.length>0?`obstacle-${h[0]}`:"obstacle-near",distance:l,obstacleDistance:l,waterDistance:a,snapshot:r,blockedDirections:h,warningDirections:f,inputMask:u,action:"limit-input",alertLevel:"danger",avoidanceVector:hA(h),geofence:d});if(f.length>0||l<=s.warningDistance||a<=s.waterWarningDistance||d.warning||r.status===De.WARNING){const g=a<=l&&a<=s.waterWarningDistance;return Er({status:De.WARNING,reason:d.warning?"geofence-boundary":g?"water-proximity":`obstacle-${f[0]??"near"}`,distance:Math.min(l,a,d.distance),obstacleDistance:l,waterDistance:a,snapshot:r,blockedDirections:h,warningDirections:f,inputMask:u,action:"warn",alertLevel:"warning",geofence:d})}return Er({status:De.CLEAR,reason:"clear",distance:Math.min(l,a),obstacleDistance:l,waterDistance:a,snapshot:r,blockedDirections:h,warningDirections:f,inputMask:u,action:"none",alertLevel:"info",geofence:d})}}function rA(n,t){return t&&typeof t.scan=="function"?t.scan({object:(n==null?void 0:n.mesh)??n}):t??{}}function oA(n,t){return Object.entries(n).filter(([,e])=>(e==null?void 0:e.distance)<=t.blockedDistance).map(([e])=>e)}function aA(n,t){return Object.entries(n).filter(([,e])=>(e==null?void 0:e.distance)<=t.warningDistance).map(([e])=>e)}function cA(n,t,e){const i={...nA},s=t.filter(r=>r.distance<=e.blockedDistance).map(r=>r.sensorId);return n.includes("front")&&(i.w=!1),n.includes("back")&&(i.s=!1),n.includes("left")&&(i.a=!1),n.includes("right")&&(i.d=!1),n.includes("up")&&(i.space=!1),n.includes("down")&&(i.shift=!1),s.includes("left")&&(i.a=!1),s.includes("right")&&(i.d=!1),i}function zf(n){return{...n,w:!1,a:!1,s:!1,d:!1,space:!1,shift:!1}}function Er({status:n,reason:t,distance:e,obstacleDistance:i,waterDistance:s,snapshot:r,blockedDirections:o,warningDirections:a,inputMask:c,action:l,alertLevel:h,avoidanceVector:f,geofence:u={enabled:!1,warning:!1,violation:!1,distance:1/0}}){return{status:n,clear:n===De.CLEAR,warning:n===De.WARNING,blocked:n===De.BLOCKED,waterImpact:n===De.WATER_IMPACT,reason:t,distance:e,obstacleDistance:i,waterDistance:s,blockedDirections:o,warningDirections:a,inputMask:c,action:l,avoidanceVector:f??null,geofence:u,alert:{active:n!==De.CLEAR,level:h,message:lA(n,t)},sensorSnapshot:r}}function lA(n,t){return n===De.WATER_IMPACT?"检测到坠水风险，无人机已悬停并暂停任务。":n===De.BLOCKED?t==="geofence-exit"?"已越过电子围栏边界，无人机保持悬停。":`飞行路径受阻：${kf(t)}。`:n===De.WARNING?t==="geofence-boundary"?"正在接近电子围栏边界。":`飞行安全告警：${kf(t)}。`:"飞行路径正常。"}function kf(n){return{clear:"正常","water-impact":"坠水风险","water-proximity":"接近水面","geofence-exit":"越过电子围栏","geofence-boundary":"接近电子围栏","obstacle-near":"障碍物过近","obstacle-front":"前方障碍","obstacle-back":"后方障碍","obstacle-left":"左侧障碍","obstacle-right":"右侧障碍","obstacle-up":"上方障碍","obstacle-down":"下方障碍"}[n]||n||"未知风险"}function hA(n=[]){return n.includes("front")?{x:1,y:.18,z:0}:n.includes("left")?{x:1,y:.08,z:0}:n.includes("right")?{x:-1,y:.08,z:0}:n.includes("back")?{x:0,y:.1,z:-1}:n.includes("down")?{x:0,y:1,z:0}:n.includes("up")?{x:1,y:0,z:0}:{x:1,y:.1,z:0}}function uA(n,t){var c;const e={enabled:!1,warning:!1,violation:!1,distance:1/0,point:null};if(!(t!=null&&t.enabled)||!Array.isArray(t.polygon)||t.polygon.length<3)return e;const i=((c=n==null?void 0:n.mesh)==null?void 0:c.position)??(n==null?void 0:n.position)??{},s={x:Number(i.x??0),y:Number(i.z??0)},r=t.polygon.map(l=>({x:Number(l.x),y:Number(l.y)})).filter(l=>Number.isFinite(l.x)&&Number.isFinite(l.y));if(r.length<3)return e;const o=dA(s,r),a=fA(s,r);return{enabled:!0,warning:o&&a<=(t.warningMargin??s0.geofenceWarningMargin),violation:!o,distance:a,point:s,polygon:r,updatedAt:t.updatedAt}}function dA(n,t){let e=!1;for(let i=0,s=t.length-1;i<t.length;s=i,i+=1){const r=t[i],o=t[s];r.y>n.y!=o.y>n.y&&n.x<(o.x-r.x)*(n.y-r.y)/(o.y-r.y||1e-6)+r.x&&(e=!e)}return e}function fA(n,t){let e=1/0;for(let i=0;i<t.length;i+=1){const s=t[i],r=t[(i+1)%t.length];e=Math.min(e,pA(n,s,r))}return e}function pA(n,t,e){const i=e.x-t.x,s=e.y-t.y,r=i*i+s*s,o=r===0?0:Math.max(0,Math.min(1,((n.x-t.x)*i+(n.y-t.y)*s)/r)),a=t.x+o*i,c=t.y+o*s;return Math.hypot(n.x-a,n.y-c)}const Vf={position:new E(330,170,330),target:new E(40,72,20)};function mA(n={}){return new gA(n)}class gA{constructor({camera:t,controls:e,cameraAnimator:i,navigateToView:s,getCesiumViewer:r,overlayRoot:o=document.body}={}){this.camera=t,this.controls=e,this.cameraAnimator=i,this.navigateToView=s,this.getCesiumViewer=r,this.overlay=vA(o),this.active=!1}async startFromCesium(t={}){var r,o,a,c,l;if(this.active)return!1;this.active=!0;const e=t.asset||t,i=t.viewer||((r=this.getCesiumViewer)==null?void 0:r.call(this)),s=yA(t.localPosition||e.localPosition,Vf.target);return this.setOverlay("锁定桥梁资产",!0),await this.flyCesium(i,e,{destinationHeight:18e4,duration:1.35,pitchDegrees:-65}),this.setOverlay("下降至桥梁上空",!0),await this.flyCesium(i,e,{destinationHeight:5200,duration:1.55,pitchDegrees:-72}),this.setOverlay("切换局部数字孪生场景",!0),await ta(360),(o=this.navigateToView)==null||o.call(this,"view-flight-control"),this.setThreeTopView(s),await ta(120),this.setOverlay("进入巡检固定镜头",!0),await this.animateThreeCamera({position:Vf.position,target:s,duration:1700}),(l=(c=(a=this.controls)==null?void 0:a.target)==null?void 0:c.copy)==null||l.call(c,s),this.setOverlay("过渡完成",!1),await ta(260),this.overlay.classList.remove("is-active"),this.active=!1,!0}setThreeTopView(t){var i,s,r;if(!this.camera)return;const e=t.clone().add(new E(0,760,.01));this.camera.position.copy(e),this.camera.lookAt(t),(r=(s=(i=this.controls)==null?void 0:i.target)==null?void 0:s.copy)==null||r.call(s,t)}animateThreeCamera({position:t,target:e,duration:i}){return this.cameraAnimator?new Promise(s=>{this.cameraAnimator.animateTo({position:t,target:e,duration:i,easing:"easeInOutCubic",onComplete:()=>s(!0)},performance.now())}):Promise.resolve(!1)}flyCesium(t,e={},i={}){var r;const s=globalThis.Cesium||window.Cesium;return!((r=t==null?void 0:t.camera)!=null&&r.flyTo)||!(s!=null&&s.Cartesian3)||e.lng==null||e.lat==null?ta(Number(i.duration??1)*1e3):new Promise(o=>{t.camera.flyTo({destination:s.Cartesian3.fromDegrees(Number(e.lng),Number(e.lat),Number(i.destinationHeight??6e3)),duration:Number(i.duration??1.2),orientation:{heading:pn.degToRad(i.headingDegrees??0),pitch:pn.degToRad(i.pitchDegrees??-65),roll:0},complete:o,cancel:o})})}setOverlay(t,e){this.overlay.classList.toggle("is-active",e),this.overlay.querySelector("[data-transition-text]").textContent=t}}function vA(n){var i;const t=document.querySelector(".scene-transition-overlay");if(t)return t;const e=document.createElement("div");return e.className="scene-transition-overlay",e.innerHTML=`
        <div class="scene-transition-panel">
            <span data-transition-text>准备切换场景</span>
        </div>
    `,(i=n==null?void 0:n.appendChild)==null||i.call(n,e),e}function ta(n){return new Promise(t=>window.setTimeout(t,n))}function yA(n,t){return n instanceof E?n.clone():Array.isArray(n)?new E(n[0]??t.x,n[1]??t.y,n[2]??t.z):n&&typeof n=="object"?new E(Number(n.x??t.x),Number(n.y??t.y),Number(n.z??t.z)):t.clone()}const Hf=new E(95,68,135),_A=15680580,xA=13938487;function bA(n={}){return new wA(n)}class wA{constructor({scene:t,camera:e,controls:i,cameraAnimator:s,defaultOffset:r=Hf,getNow:o=()=>performance.now()}={}){this.scene=t,this.camera=e,this.controls=i,this.cameraAnimator=s,this.defaultOffset=Yi(r,Hf),this.getNow=o,this.highlightGroup=null,this.currentFocusTarget=null}focusTarget(t,e={}){var o,a,c,l,h,f,u;const i=Gf(t);if(!i)return!1;const s=Yi(e.offset,this.defaultOffset),r=e.cameraPosition?Yi(e.cameraPosition):i.clone().add(s);return this.currentFocusTarget=i.clone(),(c=(a=(o=this.controls)==null?void 0:o.target)==null?void 0:a.copy)==null||c.call(a,i),(h=(l=this.controls)==null?void 0:l.update)==null||h.call(l),(f=this.cameraAnimator)!=null&&f.animateTo?(this.cameraAnimator.animateTo({position:r,target:i,duration:e.duration,easing:e.easing,onComplete:e.onComplete},this.getNow()),!0):this.camera?(this.camera.position.copy(r),this.camera.lookAt(i),(u=e.onComplete)==null||u.call(e,{camera:this.camera}),!0):!1}highlightDefect(t,e={}){const i=Gf(t);if(!i||!this.scene)return null;this.clearHighlight();const s=Number(e.size??(t==null?void 0:t.size)??7),r=Number(e.color??(t==null?void 0:t.color)??_A),o=Number(e.ringColor??xA),a=new Me;a.name=e.name??`defect-highlight-${(t==null?void 0:t.id)??"active"}`,a.position.copy(i);const c=new It(new ts(s,24,16),new rn({color:r,transparent:!0,opacity:.86,depthTest:!1}));c.name="defect-highlight-marker",c.renderOrder=40;const l=new It(new Xa(s*1.45,s*2.1,40),new rn({color:o,transparent:!0,opacity:.72,side:cn,depthTest:!1}));l.name="defect-highlight-ring",l.rotation.x=Math.PI/2,l.renderOrder=39;const h=new si(new ue().setFromPoints([new E(0,-s*3,0),new E(0,s*3,0)]),new Qi({color:o,transparent:!0,opacity:.65,depthTest:!1}));return h.name="defect-highlight-axis",h.renderOrder=38,a.add(c,l,h),a.userData.defect=t??null,this.scene.add(a),this.highlightGroup=a,e.focus!==!1&&this.focusTarget(i,{cameraPosition:e.cameraPosition,offset:e.offset,duration:e.duration,easing:e.easing}),a}clearHighlight(){return this.highlightGroup?(this.highlightGroup.removeFromParent(),SA(this.highlightGroup),this.highlightGroup=null,!0):!1}update(){if(!this.highlightGroup)return;const t=this.highlightGroup.getObjectByName("defect-highlight-ring");t&&(t.rotation.z+=.018)}destroy(){this.clearHighlight(),this.scene=null,this.camera=null,this.controls=null,this.cameraAnimator=null}}function Gf(n){return n?n instanceof E||Array.isArray(n)?Yi(n):n.position?Yi(n.position):n.localPosition?Yi(n.localPosition):n.waypoint?Yi(n.waypoint):typeof n.x<"u"||typeof n.y<"u"||typeof n.z<"u"?Yi(n):null:null}function Yi(n,t=new E){return n instanceof E?n.clone():Array.isArray(n)?new E(Number(n[0]??t.x),Number(n[1]??t.y),Number(n[2]??t.z)):n&&typeof n=="object"?new E(Number(n.x??t.x),Number(n.y??t.y),Number(n.z??t.z)):t.clone()}function SA(n){n.traverse(t=>{var e,i,s,r;if((i=(e=t.geometry)==null?void 0:e.dispose)==null||i.call(e),Array.isArray(t.material)){t.material.forEach(o=>{var a;return(a=o.dispose)==null?void 0:a.call(o)});return}(r=(s=t.material)==null?void 0:s.dispose)==null||r.call(s)})}const il=42,MA=1500,EA={active:!1,update:()=>{},destroy:()=>{}};function TA({scene:n,drone:t}={}){if(!n)return EA;const e=new Me;e.visible=!1,n.add(e);const i=AA(),s=CA(),r=PA();e.add(i,s.points,r);let o=0,a=new E;function c(h){var f,u;o=h.startedAt,a=((u=(f=h.position)==null?void 0:f.clone)==null?void 0:u.call(f))??new E,a.y=Math.max(a.y,-14.2),e.position.copy(a),e.visible=!0,i.scale.setScalar(.1),i.material.opacity=.75,s.points.material.opacity=.95,r.material.opacity=.9}function l({now:h=performance.now()}={}){const f=t==null?void 0:t.splashState;if(!(f!=null&&f.active)){e.visible=!1;return}f.startedAt!==o&&c(f);const u=Math.min(1,(h-o)/MA),d=1-Math.pow(1-u,2);i.scale.setScalar(.2+d*4.8),i.material.opacity=Math.max(0,.7*(1-u)),r.position.y=1+Math.sin(u*Math.PI)*8,r.scale.setScalar(1+d*3),r.material.opacity=Math.max(0,.85*(1-u)),RA(s,u),u>=1&&(f.active=!1,e.visible=!1)}return{active:!0,update:l,destroy(){n.remove(e),IA(e)}}}function AA(){const n=new Xa(.8,1.1,48);n.rotateX(-Math.PI/2);const t=new rn({color:8246268,transparent:!0,opacity:.7,depthWrite:!1});return new It(n,t)}function CA(){const n=new ue,t=new Float32Array(il*3),e=[];for(let s=0;s<il;s+=1){const r=s/il*Math.PI*2,o=1.2+s%7*.32,a=4+s%5*1.7;e.push({angle:r,radius:o,height:a,phase:s%11/11})}n.setAttribute("position",new gn(t,3));const i=new zh({color:12447743,size:1.1,transparent:!0,opacity:.95,depthWrite:!1});return{points:new pm(n,i),positions:t,seeds:e}}function PA(){const n=new ts(1,16,8),t=new rn({color:16724814,transparent:!0,opacity:0,depthWrite:!1});return new It(n,t)}function RA(n,t){const e=Math.sin(t*Math.PI);n.seeds.forEach((i,s)=>{const r=s*3,o=i.radius*(1+t*4.5),a=i.phase*t*Math.PI;n.positions[r]=Math.cos(i.angle+a)*o,n.positions[r+1]=e*i.height-t*3,n.positions[r+2]=Math.sin(i.angle+a)*o}),n.points.geometry.attributes.position.needsUpdate=!0,n.points.material.opacity=Math.max(0,.95*(1-t))}function IA(n){n.traverse(t=>{var e,i,s,r;(i=(e=t.geometry)==null?void 0:e.dispose)==null||i.call(e),Array.isArray(t.material)?t.material.forEach(o=>{var a;return(a=o.dispose)==null?void 0:a.call(o)}):(r=(s=t.material)==null?void 0:s.dispose)==null||r.call(s)})}const DA={rainDropCount:220,rainArea:820,rainHeight:360,seed:2147};function r0(n={}){const t={options:{...DA,...n},scene:n.scene||null,ambientLight:n.ambientLight||ea("ambientLight"),directionalLight:n.directionalLight||ea("directionalLight"),water:n.water||null,rain:null,rainPositions:null,originalFog:null,originalAmbientIntensity:null,originalDirectionalIntensity:null,originalWaveStrength:null,latest:null,disposed:!1};return Xf(t),Nr(t.scene)&&(t.rain=qf(t.options),t.rainPositions=t.rain.geometry.attributes.position,t.scene.add(t.rain)),{get active(){return!!(t.scene&&!t.disposed)},get supported(){return Nr(t.scene)},get snapshot(){return t.latest?{...t.latest}:null},setScene(e,i={}){return t.scene&&t.rain&&t.scene.remove(t.rain),t.scene=e||null,t.ambientLight=i.ambientLight||t.ambientLight||ea("ambientLight"),t.directionalLight=i.directionalLight||t.directionalLight||ea("directionalLight"),t.water=i.water||t.water,Xf(t),Nr(t.scene)&&!t.rain&&(t.rain=qf(t.options),t.rainPositions=t.rain.geometry.attributes.position),Nr(t.scene)&&t.rain&&t.scene.add(t.rain),t.latest&&Wf(t,t.latest),this},apply(e={}){return t.latest=LA(e.weather||e),Wf(t,t.latest),this.snapshot},update(e=.016){BA(t,e)},destroy(){t.disposed||(zA(t),t.scene&&t.rain&&t.scene.remove(t.rain),t.rain&&(t.rain.geometry.dispose(),t.rain.material.dispose()),t.rain=null,t.rainPositions=null,t.disposed=!0)}}}function LA(n={}){const t=qi(n.rainRate??n.rain??0,0,30),e=qi(n.visibility??8,.6,12),i=qi(n.windSpeed??0,0,24),s=qi(n.gustSpeed??i,i,32);return{windSpeed:i,gustSpeed:s,rainRate:t,visibility:e,fogDensity:qi(n.fogDensity??8e-4+(12-e)*28e-5,5e-4,.006),waterDisturbance:qi(n.waterDisturbance??t/30+s/64,0,1),lightFactor:qi(n.lightFactor??1-t/90-(12-e)/42,.45,1.08)}}function Wf(n,t){NA(n,t),FA(n,t),UA(n,t),OA(n,t)}function NA(n,t){if(!n.rain)return;const e=qi(t.rainRate/18,0,1);n.rain.visible=e>.03,n.rain.material.opacity=.12+e*.42,n.rain.userData.speed=80+e*260+t.gustSpeed*5,n.rain.userData.windDrift=t.windSpeed*.08}function FA(n,t){if(Nr(n.scene)){if(!n.scene.fog){n.scene.fog=new Ha(526344,t.fogDensity);return}"density"in n.scene.fog&&(n.scene.fog.density=t.fogDensity)}}function UA(n,t){var s,r;const e=n.originalAmbientIntensity??((s=n.ambientLight)==null?void 0:s.intensity),i=n.originalDirectionalIntensity??((r=n.directionalLight)==null?void 0:r.intensity);n.ambientLight&&Number.isFinite(e)&&(n.ambientLight.intensity=e*t.lightFactor),n.directionalLight&&Number.isFinite(i)&&(n.directionalLight.intensity=i*(.82+t.lightFactor*.18))}function OA(n,t){var o,a,c;const e=((o=n.water)==null?void 0:o.material)||((c=(a=n.water)==null?void 0:a.mesh)==null?void 0:c.material),i=e==null?void 0:e.uniforms,s=i==null?void 0:i.uWaveStrength;if(!s)return;const r=n.originalWaveStrength??Number(s.value)??1;s.value=r*(1+t.waterDisturbance*.8)}function BA(n,t){if(!n.rain||!n.rain.visible||!n.rainPositions)return;const e=n.rain.userData.speed||160,i=n.rain.userData.windDrift||0,s=n.options.rainArea,r=n.options.rainHeight;for(let o=0;o<n.rainPositions.count;o+=2){const a=n.rainPositions.getY(o)-e*t,c=n.rainPositions.getX(o)+i*t,l=a<0,h=l?r:a,f=VA(l?c+19:c,-s/2,s/2);n.rainPositions.setXYZ(o,f,h,n.rainPositions.getZ(o)),n.rainPositions.setXYZ(o+1,f+i*.14,h-16,n.rainPositions.getZ(o+1))}n.rainPositions.needsUpdate=!0}function qf(n){const t=kA(n.seed),e=[],i=n.rainArea,s=n.rainHeight;for(let c=0;c<n.rainDropCount;c+=1){const l=(t()-.5)*i,h=t()*s,f=(t()-.5)*i;e.push(l,h,f,l+2.5,h-16,f)}const r=new ue;r.setAttribute("position",new re(e,3)),r.attributes.position.setUsage(Fg);const o=new Qi({color:9425919,transparent:!0,opacity:.22,depthWrite:!1}),a=new fm(r,o);return a.name="DemoWeatherRain",a.visible=!1,a.frustumCulled=!1,a.position.set(0,-20,0),a.userData.speed=160,a.userData.windDrift=0,a}function Xf(n){var e,i,s,r,o;n.originalFog===null&&n.scene&&(n.originalFog=n.scene.fog?n.scene.fog.clone():null),n.originalAmbientIntensity===null&&n.ambientLight&&(n.originalAmbientIntensity=n.ambientLight.intensity),n.originalDirectionalIntensity===null&&n.directionalLight&&(n.originalDirectionalIntensity=n.directionalLight.intensity);const t=(o=(r=((e=n.water)==null?void 0:e.material)||((s=(i=n.water)==null?void 0:i.mesh)==null?void 0:s.material))==null?void 0:r.uniforms)==null?void 0:o.uWaveStrength;n.originalWaveStrength===null&&t&&(n.originalWaveStrength=Number(t.value))}function zA(n){var e,i,s,r,o;n.scene&&(n.scene.fog=n.originalFog?n.originalFog.clone():null),n.ambientLight&&n.originalAmbientIntensity!==null&&(n.ambientLight.intensity=n.originalAmbientIntensity),n.directionalLight&&n.originalDirectionalIntensity!==null&&(n.directionalLight.intensity=n.originalDirectionalIntensity);const t=(o=(r=((e=n.water)==null?void 0:e.material)||((s=(i=n.water)==null?void 0:i.mesh)==null?void 0:s.material))==null?void 0:r.uniforms)==null?void 0:o.uWaveStrength;t&&n.originalWaveStrength!==null&&(t.value=n.originalWaveStrength)}function kA(n){let t=Math.max(1,Math.floor(n))%2147483647;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function ea(n){return typeof window>"u"?null:window[n]||null}function Nr(n){return!!(n&&typeof n.add=="function"&&typeof n.remove=="function")}function qi(n,t,e){const i=Number(n);return Number.isFinite(i)?Math.min(e,Math.max(t,i)):t}function VA(n,t,e){const i=e-t;return i<=0?n:((n-t)%i+i)%i+t}const Xe=Object.freeze({LOW:"low",MEDIUM:"medium",HIGH:"high",CRITICAL:"critical"}),_s=Object.freeze({DATA:"data",PROCESSING:"processing",VERIFICATION:"verification",TICKETS:"tickets"}),xs=Object.freeze({CRACK:"crack",CORROSION:"corrosion",SPALLING:"spalling"}),HA=new Set(Object.values(Xe)),GA=new Set(Object.values(_s)),o0=Object.freeze([Object.freeze({id:"DEF-102",type:xs.CRACK,label:"深度裂缝",description:"南侧索塔混凝土表面纵向深裂缝。",severity:Xe.HIGH,localPosition:Object.freeze({x:250,y:110,z:140}),geoPosition:Object.freeze({longitude:113.1234,latitude:23.5678,altitude:142.5}),snapshot:Object.freeze({imageUrl:"",cameraId:"M30T-ZOOM-02",capturedAt:"2026-05-18T00:00:00+08:00",missionId:"ROUTE-B-CABLE-INSPECTION",telemetry:Object.freeze({altitude:142.5,speed:.8,battery:76,signal:"4/4"})}),workflowStage:_s.VERIFICATION}),Object.freeze({id:"DEF-117",type:xs.SPALLING,label:"边缘剥落",description:"斜拉索锚固区附近疑似混凝土剥落。",severity:Xe.MEDIUM,localPosition:Object.freeze({x:-180,y:86,z:-95}),geoPosition:Object.freeze({longitude:113.1218,latitude:23.5685,altitude:118.2}),snapshot:Object.freeze({imageUrl:"",cameraId:"M30T-WIDE-01",capturedAt:"2026-05-18T00:04:30+08:00",missionId:"ROUTE-A-PYLON-INSPECTION",telemetry:Object.freeze({altitude:118.2,speed:1.4,battery:71,signal:"4/4"})}),workflowStage:_s.PROCESSING})]);function a0(n){return typeof structuredClone=="function"?structuredClone(n):JSON.parse(JSON.stringify(n))}function In(n,t=0){const e=Number(n);return Number.isFinite(e)?e:t}function La(n={}){return{x:In(n.x),y:In(n.y),z:In(n.z)}}function c0(n={}){return{longitude:In(n.longitude??n.lng),latitude:In(n.latitude??n.lat),altitude:In(n.altitude??n.alt)}}function WA(n={}){return{imageUrl:n.imageUrl||n.url||"",cameraId:n.cameraId||n.camera||"",capturedAt:n.capturedAt||new Date().toISOString(),missionId:n.missionId||"",telemetry:n.telemetry?a0(n.telemetry):{}}}function l0(n={}){return{x:In(n.x),y:In(n.y),width:In(n.width),height:In(n.height)}}function h0(n={}){var e,i;const t=String(n.label||n.type||xs.CRACK).toLowerCase();return{id:String(n.id||"").trim()||"DET-UNKNOWN",defectId:String(n.defectId||n.anchorId||"").trim().toUpperCase(),label:t,type:Object.values(xs).includes(t)?t:t.replace(/_/g,"-"),confidence:Math.max(0,Math.min(1,In(n.confidence,.72))),bbox:l0(n.bbox),severity:String(n.severity||Xe.MEDIUM).toLowerCase(),localPosition:La(n.localPosition||((e=n.anchor)==null?void 0:e.localPosition)),geoPosition:c0(n.geoPosition||((i=n.anchor)==null?void 0:i.geoPosition)),cameraPosition:n.cameraPosition?La(n.cameraPosition):void 0,source:n.source||"mock",processedAt:n.processedAt||new Date().toISOString()}}function On(n={}){const t=String(n.id||"").trim().toUpperCase(),e=String(n.severity||Xe.MEDIUM).toLowerCase(),i=String(n.workflowStage||_s.DATA).toLowerCase();return{id:t||"DEF-UNKNOWN",type:n.type||n.label||xs.CRACK,label:n.label||n.type||xs.CRACK,description:n.description||"",confidence:n.confidence===void 0?null:Math.max(0,Math.min(1,In(n.confidence))),bbox:n.bbox?l0(n.bbox):null,source:n.source||"mock",severity:HA.has(e)?e:Xe.MEDIUM,localPosition:La(n.localPosition),geoPosition:c0(n.geoPosition),cameraPosition:n.cameraPosition?La(n.cameraPosition):void 0,snapshot:WA(n.snapshot),workflowStage:GA.has(i)?i:_s.DATA}}function u0(n={},t=0){const e=h0(n),i=e.defectId||`DEF-AI-${String(t+1).padStart(3,"0")}`;return On({id:i,type:e.type,label:e.label,description:`${e.label} 由 ${e.source} 检测生成`,confidence:e.confidence,bbox:e.bbox,source:e.source,severity:e.severity,localPosition:e.localPosition,geoPosition:e.geoPosition,cameraPosition:e.cameraPosition,snapshot:{imageUrl:"",cameraId:"AI-MOCK-ZOOM",capturedAt:e.processedAt,missionId:"MOCK-AI-CLOSED-LOOP",telemetry:{confidence:e.confidence,detectionId:e.id,bbox:e.bbox}},workflowStage:e.severity===Xe.HIGH||e.severity===Xe.CRITICAL?_s.VERIFICATION:_s.PROCESSING})}function to(){return a0(o0)}function d0(n,t=o0){const e=String(n||"").trim().toUpperCase(),i=t.find(s=>s.id===e);return i?On(i):null}const qA="bridge:ai-engine-change",ir="bridge:ai-detections-updated";function f0(){return typeof window<"u"?window:null}function $f(n,t,e){!n||typeof n.CustomEvent!="function"||n.dispatchEvent(new n.CustomEvent(t,{detail:e}))}function Na(n=[]){return n.map((t,e)=>h0({id:t.id||`DET-${String(e+1).padStart(3,"0")}`,bbox:t.bbox||{x:.32,y:.28,width:.2,height:.14},...t}))}function XA(n={}){const t=n.labels||["crack","corrosion","spalling"],e=n.anchors||[{defectId:"DEF-AI-201",severity:"high",localPosition:{x:188,y:104,z:132},geoPosition:{longitude:113.1231,latitude:23.5681,altitude:136.2},cameraPosition:{x:260,y:152,z:230}},{defectId:"DEF-AI-202",severity:"medium",localPosition:{x:-126,y:92,z:-118},geoPosition:{longitude:113.1213,latitude:23.5688,altitude:121.4},cameraPosition:{x:-220,y:140,z:-215}},{defectId:"DEF-AI-203",severity:"critical",localPosition:{x:42,y:76,z:-174},geoPosition:{longitude:113.1222,latitude:23.5671,altitude:109.7},cameraPosition:{x:120,y:132,z:-265}}];let i=0;return{id:"mock-detector",label:"Mock Detector",async load(){return{provider:"mock-detector",ready:!0,modelPath:null}},async detect(s,r={}){i+=1;const o=String(r.frameId||r.assetId||i).length+i,a=r.count||3,c=Array.from({length:a},(l,h)=>{const f=e[(i+h)%e.length],u=(o+h*17)%34/100;return{id:`MOCK-${i}-${h+1}`,defectId:f.defectId,label:t[h%t.length],confidence:Math.round((.76+u)*100)/100,bbox:{x:Math.min(.74,.18+u),y:Math.min(.72,.24+h*.18),width:.16+h*.03,height:.11+h*.02},severity:f.severity,localPosition:f.localPosition,geoPosition:f.geoPosition,cameraPosition:f.cameraPosition,source:s?"mock":"mock-empty-input"}});return{provider:"mock-detector",detections:Na(c),processedAt:new Date().toISOString()}}}}function $A(n={}){var e;if(n.enableOnnx!==!0)return null;const t=n.runtime||((e=f0())==null?void 0:e.ort)||globalThis.ort;return!t||!n.modelPath?null:{id:"onnx-detector",label:"ONNX Detector",session:null,async load(){return this.session=await t.InferenceSession.create(n.modelPath),{provider:this.id,ready:!!this.session,modelPath:n.modelPath}},async detect(i,s={}){if(this.session||await this.load(),typeof n.preprocess!="function"||typeof n.postprocess!="function")return{provider:this.id,detections:[],processedAt:new Date().toISOString(),warning:"ONNX session loaded, but preprocess/postprocess hooks are not configured."};const r=await n.preprocess(i,s),o=await this.session.run(r),a=await n.postprocess(o,s);return{provider:this.id,detections:Na(a),processedAt:new Date().toISOString()}}}}function jA(n={}){const t=f0(),e=n.provider||$A(n)||XA(n.mock),i={providerId:e.id,ready:!1,modelPath:n.modelPath||null,lastResult:null,updatedAt:new Date().toISOString()};let s=null;const r=()=>{i.updatedAt=new Date().toISOString();const a={...i};t&&(t.bridgeAiEngineState=a),$f(t,qA,a),typeof n.onChange=="function"&&n.onChange(a)},o=a=>{const c=Na((a==null?void 0:a.detections)||[]),l=c.map((f,u)=>u0(f,u)),h={provider:(a==null?void 0:a.provider)||i.providerId,detections:c,defects:l,processedAt:(a==null?void 0:a.processedAt)||new Date().toISOString(),source:"ai-engine"};return t&&(t.bridgeAiDetections=h,$f(t,ir,h)),h};return{provider:e,getState(){return{...i}},async load(){const a=typeof e.load=="function"?await e.load():{ready:!0};return i.ready=a.ready!==!1,i.providerId=a.provider||e.id,i.modelPath=a.modelPath||i.modelPath,r(),n.autoStartMock!==!1&&e.id==="mock-detector"&&this.start(),this.getState()},async detect(a,c={}){!i.ready&&n.autoLoad!==!1&&await this.load();const l=await e.detect(a,c);return i.lastResult={...l,detections:Na(l.detections)},r(),o(i.lastResult),i.lastResult},start(){var l;if(!t||s||e.id!=="mock-detector")return!1;const a=Number(n.intervalMs||((l=n.mock)==null?void 0:l.intervalMs)||4200),c=()=>this.detect(null,{frameId:`auto-${Date.now()}`});return c(),s=t.setInterval(c,a),!0},stop(){!t||!s||(t.clearInterval(s),s=null)},destroy(){this.stop()}}}const Tr=Object.freeze({minDistance:2.5,maxDistance:320,minBoxSize:.035,maxBoxSize:.34,padding:.012});function YA(n={}){return new KA(n)}class KA{constructor({camera:t=null,defects:e=[],visuals:i=[],source:s="fpv-defect-projection",minDistance:r=Tr.minDistance,maxDistance:o=Tr.maxDistance,minBoxSize:a=Tr.minBoxSize,maxBoxSize:c=Tr.maxBoxSize,padding:l=Tr.padding}={}){this.provider=s,this.camera=t,this.defects=e,this.visuals=i,this.limits={minDistance:r,maxDistance:o,minBoxSize:a,maxBoxSize:c,padding:l}}setCamera(t){return this.camera=t,this}setDefects(t=[],e=this.visuals){return this.defects=t,this.visuals=e,this}project(t={}){const e=t.camera||this.camera;if(!g0(e))return[];const i={...this.limits,...aC(t)},s=JA(t.defects||this.defects,t.visuals||this.visuals),r=QA(e),o=t.processedAt||new Date().toISOString(),a=rC(t.viewport);return s.reduce((c,l,h)=>{const f=ZA({entry:l,camera:e,frustum:r,limits:i,viewport:a,index:h,processedAt:o,source:t.source||this.provider,frameId:t.frameId});return f&&c.push(f),c},[])}createPayload(t={}){const e=this.project(t),i=new Set(e.map(r=>r.defectId)),s=(t.defects||this.defects).filter(r=>i.has(String(r.id||r.defectId||"").toUpperCase())).map(r=>({...r}));return{provider:t.source||this.provider,detections:e,defects:s,processedAt:t.processedAt||new Date().toISOString(),source:"defect-projection-service",camera:oC(t.camera||this.camera)}}}function ZA({entry:n,camera:t,frustum:e,limits:i,viewport:s,index:r,processedAt:o,source:a,frameId:c}){var b,S,M,D,_,T;const l=((b=n.visual)==null?void 0:b.object)||((S=n.visual)==null?void 0:S.group)||n.defect.object3D||null,h=tC(n.defect,l),f=t.position.distanceTo(h);if(f<i.minDistance||f>i.maxDistance)return null;const u=eC(l);if(!(u?e.intersectsBox(u):e.containsPoint(h)))return null;const p=u?nC(u,t,i):p0(h,n.projectionRadius,t,i);if(!p)return null;const v=h.clone().project(t),m={x:En((v.x+1)/2,4),y:En((1-v.y)/2,4)},g=Number(n.defect.confidence??.86),y=1-bn((f-i.minDistance)/(i.maxDistance-i.minDistance),0,1)*.28,x=1-bn(Math.hypot(m.x-.5,m.y-.5),0,.72)*.18;return{id:`${a.toUpperCase()}-${String(r+1).padStart(3,"0")}`,defectId:String(n.defect.id||n.defect.defectId||`DEF-${r+1}`).toUpperCase(),label:n.defect.type||n.defect.label||"defect",type:n.defect.type||n.defect.label||"defect",confidence:En(bn(g*y*x,.35,.99),2),severity:n.defect.severity||"medium",bbox:p,bboxPx:s?sC(p,s):null,distance:En(f,2),localPosition:cC(n.defect.localPosition||n.defect.position||h),worldPosition:Fa(h),cameraPosition:Fa(t.position),screenCenter:m,visualId:((D=(M=n.visual)==null?void 0:M.metadata)==null?void 0:D.id)||((_=n.defect.visual)==null?void 0:_.id)||null,source:a,frameId:c||null,processedAt:o,capture:{reusable:!0,projection:"fpv-camera",objectName:(l==null?void 0:l.name)||((T=n.defect.visual)==null?void 0:T.objectName)||null}}}function JA(n=[],t=[]){const e=new Map;return t.forEach(i=>{var r;const s=String(i.defectId||((r=i.metadata)==null?void 0:r.defectId)||"").toUpperCase();s&&e.set(s,i)}),n.map(i=>{var o,a;const s=String(i.id||i.defectId||"").toUpperCase(),r=e.get(s)||null;return{defect:i,visual:r,projectionRadius:Number(((o=r==null?void 0:r.metadata)==null?void 0:o.projectionRadius)||((a=i.visual)==null?void 0:a.projectionRadius)||i.projectionRadius||6)}})}function QA(n){var e,i;(e=n.updateProjectionMatrix)==null||e.call(n),(i=n.updateMatrixWorld)==null||i.call(n,!0),n.matrixWorldInverse.copy(n.matrixWorld).invert();const t=new ne().multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse);return new Ga().setFromProjectionMatrix(t)}function tC(n,t){return t!=null&&t.isObject3D?(t.updateMatrixWorld(!0),t.getWorldPosition(new E)):v0(n.worldPosition||n.localPosition||n.position)}function eC(n){if(!(n!=null&&n.isObject3D))return null;n.updateMatrixWorld(!0);const t=new Di().setFromObject(n);return t.isEmpty()?null:t}function nC(n,t,e){const i=iC(n).map(c=>c.project(t)).filter(c=>Number.isFinite(c.x)&&Number.isFinite(c.y)&&c.z>=-1.15&&c.z<=1.15);if(i.length<2)return p0(n.getCenter(new E),n.getSize(new E).length()*.5,t,e);let s=1/0,r=1/0,o=-1/0,a=-1/0;return i.forEach(c=>{const l=(c.x+1)/2,h=(1-c.y)/2;s=Math.min(s,l),r=Math.min(r,h),o=Math.max(o,l),a=Math.max(a,h)}),m0({x:s-e.padding,y:r-e.padding,width:o-s+e.padding*2,height:a-r+e.padding*2},e)}function p0(n,t,e,i){const s=n.clone().project(e);if(s.z<-1||s.z>1)return null;const r=Math.max(e.position.distanceTo(n),.001),o=Math.tan(pn.degToRad(e.fov)*.5)*r,a=bn(t/o*.62,i.minBoxSize,i.maxBoxSize),c=bn(a/Math.max(e.aspect||1,.1),i.minBoxSize,i.maxBoxSize);return m0({x:(s.x+1)/2-c*.5,y:(1-s.y)/2-a*.5,width:c,height:a},i)}function m0(n,t){const e=bn(n.x,0,1),i=bn(n.y,0,1),s=bn(n.x+n.width,0,1),r=bn(n.y+n.height,0,1);let o=s-e,a=r-i;if(o<=0||a<=0)return null;const c=e+o*.5,l=i+a*.5;return o=bn(o,t.minBoxSize,t.maxBoxSize),a=bn(a,t.minBoxSize,t.maxBoxSize),{x:En(bn(c-o*.5,0,1-o),4),y:En(bn(l-a*.5,0,1-a),4),width:En(o,4),height:En(a,4)}}function iC(n){const{min:t,max:e}=n;return[new E(t.x,t.y,t.z),new E(t.x,t.y,e.z),new E(t.x,e.y,t.z),new E(t.x,e.y,e.z),new E(e.x,t.y,t.z),new E(e.x,t.y,e.z),new E(e.x,e.y,t.z),new E(e.x,e.y,e.z)]}function sC(n,t){return{x:Math.round(n.x*t.width),y:Math.round(n.y*t.height),width:Math.round(n.width*t.width),height:Math.round(n.height*t.height)}}function rC(n){if(!n)return null;const t=Number(n.width),e=Number(n.height);return!Number.isFinite(t)||!Number.isFinite(e)||t<=0||e<=0?null:{width:t,height:e}}function oC(n){return g0(n)?{name:n.name||"fpv-camera",position:Fa(n.position),fov:En(n.fov,2),aspect:En(n.aspect,4)}:null}function aC(n){return Object.fromEntries(["minDistance","maxDistance","minBoxSize","maxBoxSize","padding"].filter(t=>Number.isFinite(Number(n[t]))).map(t=>[t,Number(n[t])]))}function g0(n){return!!(n!=null&&n.isPerspectiveCamera&&n.position&&n.projectionMatrix)}function cC(n){return Fa(v0(n))}function v0(n){return n instanceof E?n.clone():Array.isArray(n)?new E(n[0]??0,n[1]??0,n[2]??0):n&&typeof n=="object"?new E(Number(n.x??0),Number(n.y??0),Number(n.z??0)):new E}function Fa(n){return{x:En(n.x,3),y:En(n.y,3),z:En(n.z,3)}}function bn(n,t,e){return Math.max(t,Math.min(e,Number(n)))}function En(n,t=3){const e=10**t;return Math.round(Number(n)*e)/e}const ga=Object.freeze({width:12,height:8}),jf=new E(0,1,0),Yf=new E(0,0,1),lC={low:.82,medium:1,high:1.18,critical:1.36};function hC(n={}){return{create(t,e={}){return uC(t,{...n,...e})}}}function uC(n={},t={}){var p,v;const e=typeof t.rng=="function"?t.rng:bC(t.seed||20260518),i=String(n.type||n.label||"crack").toLowerCase(),s=String(n.severity||"medium").toLowerCase(),r=yC(t.size||((p=n.visual)==null?void 0:p.size)||ga),o=(lC[s]||1)*Number(t.scale||1),a=gC(t.attachment||n.attachment||((v=n.visual)==null?void 0:v.attachment)),c=va(t.position||n.worldPosition||n.position||n.localPosition),l=String(n.id||n.defectId||`DEFECT-${Math.round(e()*9999)}`).toUpperCase(),h=new Me;h.name=`DefectVisual:${l}`,h.position.copy(c).add(a.normal.clone().multiplyScalar(.08)),vC(h,a),h.userData.defectId=l,h.userData.defectType=i;const f={group:h,rng:e,severity:s,size:r,scale:o};i==="corrosion"?fC(f):i==="spalling"?pC(f):i==="debris"?mC(f):dC(f);const u=Math.max(r.width,r.height)*o*.62,d={id:`VIS-${l}`,defectId:l,type:i,severity:s,objectName:h.name,localPosition:Ar(c),worldPosition:Ar(c),projectionRadius:u,size:{width:Xr(r.width*o,2),height:Xr(r.height*o,2)},attachment:{surface:a.surface,normal:Ar(a.normal),tangentU:Ar(a.tangentU),tangentV:Ar(a.tangentV)}};return h.userData.defectVisual=d,h.userData.projectionRadius=u,h.traverse(m=>{m.frustumCulled=!1,m.isMesh&&(m.castShadow=!1,m.receiveShadow=!0)}),{object:h,group:h,metadata:d,dispose(){xC(h)}}}function dC({group:n,rng:t,severity:e,size:i,scale:s}){const r=i.width*s,o=i.height*s,a=e==="critical"?9:7,c=[];for(let d=0;d<=a;d+=1){const p=d/a,v=-r*.5+r*p,m=Math.sin(p*Math.PI*2.4)*o*.12,g=(t()-.5)*o*.34;c.push(new E(v,m+g,.07))}const l=fn({color:724756,roughness:.96,metalness:0,opacity:.96}),h=fn({color:3359061,roughness:.9,metalness:.02,opacity:.72});for(let d=0;d<c.length-1;d+=1){const p=(.28+t()*.22)*s;Ks(n,c[d],c[d+1],p*1.9,h.clone(),.035,"crack-broken-edge"),Ks(n,c[d],c[d+1],p,l.clone(),.09,"crack-open-gap")}const f=e==="critical"?5:3;for(let d=0;d<f;d+=1){const p=c[1+Math.floor(t()*(c.length-2))].clone(),v=(t()>.5?1:-1)*(.55+t()*.7),m=(o*.28+t()*o*.38)*s,g=p.clone().add(new E(Math.cos(v)*m,Math.sin(v)*m,0));Ks(n,p,g,(.13+t()*.09)*s,l.clone(),.1,"crack-branch")}const u=new si(new ue().setFromPoints(c),new Qi({color:132631,transparent:!0,opacity:.92}));u.name="crack-hairline-polyline",n.add(u)}function fC({group:n,rng:t,severity:e,size:i,scale:s}){const r=i.width*s,o=i.height*s,a=fn({color:e==="low"?11817737:10105874,roughness:1,metalness:0,opacity:.72}),c=fn({color:6233868,roughness:1,opacity:.84}),l=fn({color:14711076,roughness:.95,opacity:.64});Ua(n,r,o,15,a,t,.04,"corrosion-main-stain");const h=e==="low"?7:12;for(let u=0;u<h;u+=1){const d=(.5+t()*1.6)*s,p=new It(new Wa(d,18),(t()>.42?l:c).clone());p.name="corrosion-oxidation-island",p.position.set((t()-.5)*r*.78,(t()-.5)*o*.72,.08+t()*.04),p.scale.set(1+t()*1.8,.45+t()*1.2,1),p.rotation.z=t()*Math.PI,n.add(p)}const f=e==="low"?3:6;for(let u=0;u<f;u+=1){const d=(t()-.5)*r*.72,p=new E(d,(t()-.1)*o*.22,.12),v=p.clone().add(new E((t()-.5)*.9,-o*(.32+t()*.42),0));Ks(n,p,v,(.28+t()*.24)*s,c.clone(),.1,"corrosion-runoff-streak")}}function pC({group:n,rng:t,severity:e,size:i,scale:s}){const r=i.width*s,o=i.height*s,a=fn({color:4674921,roughness:1,metalness:.02,opacity:.94}),c=fn({color:11051678,roughness:.92,metalness:.04,opacity:.9}),l=fn({color:14870768,roughness:.88,metalness:.04,opacity:.7}),h=fn({color:1120295,roughness:1,opacity:.52});Ua(n,r*1.06,o*1.06,14,h,t,.025,"spalling-cavity-shadow"),Ua(n,r,o,13,a,t,.08,"spalling-exposed-concrete");const f=e==="high"||e==="critical"?17:11;for(let u=0;u<f;u+=1){const d=t()*Math.PI*2,p=r*(.18+t()*.31),v=o*(.16+t()*.3),m=new It(new Wa((.22+t()*.45)*s,9),(t()>.45?c:l).clone());m.name="spalling-aggregate-chip",m.position.set(Math.cos(d)*p,Math.sin(d)*v,.12+t()*.04),m.scale.set(1+t()*1.5,.55+t(),1),m.rotation.z=t()*Math.PI,n.add(m)}for(let u=0;u<5;u+=1){const d=new E((t()-.5)*r*.7,(t()-.5)*o*.7,.13),p=d.clone().add(new E((t()-.5)*r*.42,(t()-.5)*o*.42,0));Ks(n,d,p,(.09+t()*.08)*s,h.clone(),.14,"spalling-radial-fracture")}}function mC({group:n,rng:t,severity:e,size:i,scale:s}){const r=i.width*s,o=i.height*s,a=fn({color:7893356,roughness:1,metalness:0,opacity:.38}),c=fn({color:12042699,roughness:.9,metalness:.05,opacity:1}),l=fn({color:2565930,roughness:.88,metalness:.03,opacity:1}),h=fn({color:6583435,roughness:.5,metalness:.62,opacity:1});Ua(n,r,o,18,a,t,.015,"debris-dust-scatter");const f=e==="high"||e==="critical"?13:8;for(let d=0;d<f;d+=1){const p=(.45+t()*1.45)*s,v=(.28+t()*1.1)*s,m=(.12+t()*.55)*s,g=t()>.72?new ci(p*.45,p*.5,m,8):new _e(p,v,m),y=new It(g,_C([c,l,h],t).clone());y.name="debris-physical-fragment",y.position.set((t()-.5)*r*.76,(t()-.5)*o*.78,m*.5+.04),y.rotation.set((t()-.5)*.28,(t()-.5)*.28,t()*Math.PI),n.add(y)}const u=fn({color:16347926,roughness:.8,metalness:0,opacity:.5});Ks(n,new E(-r*.4,-o*.38,.04),new E(r*.4,o*.32,.04),.28*s,u,.05,"debris-scrape-mark")}function Ua(n,t,e,i,s,r,o,a){const c=new so;for(let h=0;h<i;h+=1){const f=h/i*Math.PI*2,u=.62+r()*.44,d=Math.cos(f)*t*.5*u,p=Math.sin(f)*e*.5*u;h===0?c.moveTo(d,p):c.lineTo(d,p)}c.closePath();const l=new It(new Wh(c),s.clone());return l.name=a,l.position.z=o,l.rotation.z=(r()-.5)*.35,n.add(l),l}function Ks(n,t,e,i,s,r,o){const a=e.clone().sub(t),c=Math.max(.01,Math.hypot(a.x,a.y)),l=new It(new _e(c,i,.055),s);return l.name=o,l.position.copy(t).add(e).multiplyScalar(.5),l.position.z=r,l.rotation.z=Math.atan2(a.y,a.x),n.add(l),l}function fn({color:n,roughness:t=.9,metalness:e=.02,opacity:i=1}){return new Yt({color:n,roughness:t,metalness:e,transparent:i<1,opacity:i,depthWrite:i>=.85,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:cn})}function gC(n={}){const t=va(n.normal,Yf).normalize();let e=va(n.tangentV,null),i=va(n.tangentU,null);return e&&e.projectOnPlane(t).normalize(),i&&i.projectOnPlane(t).normalize(),!e&&!i&&(e=Math.abs(t.dot(jf))<.92?jf.clone():Yf.clone(),e.projectOnPlane(t).normalize()),i||(i=e.clone().cross(t).normalize()),e||(e=t.clone().cross(i).normalize()),i.clone().cross(e).dot(t)<0&&i.negate(),{surface:n.surface||"bridge-surface",normal:t,tangentU:i,tangentV:e}}function vC(n,t){const e=new ne().makeBasis(t.tangentU,t.tangentV,t.normal);n.quaternion.setFromRotationMatrix(e)}function yC(n=ga){return{width:Math.max(1,Number(n.width||ga.width)),height:Math.max(1,Number(n.height||ga.height))}}function va(n,t=new E){return n instanceof E?n.clone():Array.isArray(n)?new E(n[0]??0,n[1]??0,n[2]??0):n&&typeof n=="object"?new E(Number(n.x??0),Number(n.y??0),Number(n.z??0)):t?t.clone():null}function Ar(n){return{x:Xr(n.x,3),y:Xr(n.y,3),z:Xr(n.z,3)}}function _C(n,t){return n[Math.min(n.length-1,Math.floor(t()*n.length))]}function Xr(n,t=3){const e=10**t;return Math.round(Number(n)*e)/e}function xC(n){n.traverse(t=>{var i,s;(s=(i=t.geometry)==null?void 0:i.dispose)==null||s.call(i),(Array.isArray(t.material)?t.material:[t.material]).filter(Boolean).forEach(r=>{var o;return(o=r.dispose)==null?void 0:o.call(r)})})}function bC(n){let t=Math.max(1,Math.floor(n))%2147483647;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}const wC="debris",Qe=Object.freeze({...xs,DEBRIS:wC}),Kf={[Qe.CRACK]:"裂缝",[Qe.CORROSION]:"锈蚀",[Qe.SPALLING]:"剥落",[Qe.DEBRIS]:"抛洒物"},Zf=[as(-255,142,23.4,Qe.CRACK,Xe.HIGH,"pylon-front",15,9),as(248,118,-23.4,Qe.CORROSION,Xe.MEDIUM,"pylon-rear",18,11),as(-116,58,20.8,Qe.SPALLING,Xe.MEDIUM,"deck-fascia",13,8),Jf(96,52.8,8,Qe.DEBRIS,Xe.HIGH,"deck-lane",12,7),as(145,54,-20.8,Qe.CRACK,Xe.CRITICAL,"deck-fascia",18,10),as(-340,68,-20.8,Qe.CORROSION,Xe.LOW,"deck-fascia",15,9),as(355,72,20.8,Qe.SPALLING,Xe.HIGH,"deck-fascia",17,11),Jf(0,52.8,-9,Qe.DEBRIS,Xe.MEDIUM,"deck-shoulder",10,6),as(210,165,23.4,Qe.CORROSION,Xe.HIGH,"pylon-front",20,12)];function SC({bridgeScene:n,seed:t=20260518,count:e=7,publish:i=!1}={}){const s=PC(t),o=Zf.slice(0,Math.max(0,Math.min(e,Zf.length))).map((d,p)=>MC(d,p,s)),a=o.map((d,p)=>EC(d,p)),c=hC({seed:t}),l=(n==null?void 0:n.bridgeGroup)??(n==null?void 0:n.scene)??null,h=a.map((d,p)=>{var g;const v=o[p],m=c.create(d,{attachment:v.attachment,position:v.localPosition,rng:s,size:v.visual.size});return(g=l==null?void 0:l.add)==null||g.call(l,m.object),d.visual=m.metadata,v.visual=m.metadata,v.visualId=m.metadata.id,v.worldPosition=m.metadata.worldPosition,{defectId:d.id,detectionId:v.id,object:m.object,metadata:m.metadata,dispose:m.dispose}});a.forEach(d=>{var p;(p=n==null?void 0:n.addDefectMarker)==null||p.call(n,{...d,position:d.localPosition,radius:d.severity===Xe.CRITICAL?12:9,height:d.type===Qe.DEBRIS?9:14})});const f=YA({camera:n==null?void 0:n.camera,defects:a,visuals:h,maxDistance:340,source:"seeded-fpv-projection"}),u={detections:o,defects:a,visuals:h,projectionService:f,projectDetections(d,p={}){const v=d!=null&&d.isCamera?{...p,camera:d}:{...d||{}};return f.project(v)},createProjectionPayload(d={}){return f.createPayload(d)}};return i&&y0(u),u}function y0({detections:n=[],defects:t=[],projectionService:e=null}={}){if(typeof window>"u"||typeof window.CustomEvent!="function")return!1;const i={provider:"seeded-demo-defects",detections:n.map(Qf),defects:t.map(Qf),processedAt:new Date().toISOString(),source:"bridge-defect-seeder",projection:{provider:(e==null?void 0:e.provider)||"seeded-fpv-projection",available:!!e}};return window.bridgeAiDetections=i,e&&(window.bridgeDefectProjectionService=e),window.dispatchEvent(new CustomEvent(ir,{detail:i})),!0}function MC(n,t,e){const i=TC(n,e),s=Math.round((.78+e()*.18)*100)/100,r={surface:n.surface,normal:n.attachment.normal,tangentU:n.attachment.tangentU,tangentV:n.attachment.tangentV};return{id:`SEED-DET-${String(t+1).padStart(3,"0")}`,defectId:`DEF-SEED-${String(t+1).padStart(3,"0")}`,label:n.type,type:n.type,confidence:s,severity:n.severity,bbox:CC(t,n),localPosition:i,worldPosition:i,cameraPosition:AC(i,n.attachment.normal),geoPosition:{longitude:113.122+t*22e-5,latitude:23.567+t*18e-5,altitude:i.y},attachment:r,visual:{kind:"procedural-bridge-defect",size:n.size,surface:n.surface},source:"seeded-demo-visual"}}function EC(n,t){const e=u0(n,t);return{...e,type:n.type,label:Kf[n.type]||n.type,description:`${Kf[n.type]||n.type}可视化演示瑕疵`,bbox:n.bbox,localPosition:n.localPosition,worldPosition:n.worldPosition,position:n.localPosition,cameraPosition:n.cameraPosition,attachment:n.attachment,visual:n.visual,snapshot:{...e.snapshot,telemetry:{...e.snapshot.telemetry,visualType:n.type,visualSurface:n.attachment.surface,seededDetectionId:n.id}}}}function as(n,t,e,i,s,r,o,a){const c=e>=0?1:-1;return{x:n,y:t,z:e,type:i,severity:s,surface:r,size:{width:o,height:a},jitter:{u:11,v:7},attachment:{normal:{x:0,y:0,z:c},tangentU:{x:c,y:0,z:0},tangentV:{x:0,y:1,z:0}}}}function Jf(n,t,e,i,s,r,o,a){return{x:n,y:t,z:e,type:i,severity:s,surface:r,size:{width:o,height:a},jitter:{u:13,v:8},attachment:{normal:{x:0,y:1,z:0},tangentU:{x:1,y:0,z:0},tangentV:{x:0,y:0,z:1}}}}function TC(n,t){const e=Math.round((t()-.5)*n.jitter.u),i=Math.round((t()-.5)*n.jitter.v),s=n.attachment.tangentU,r=n.attachment.tangentV;return{x:n.x+s.x*e+r.x*i,y:n.y+s.y*e+r.y*i,z:n.z+s.z*e+r.z*i}}function AC(n,t){return{x:n.x+t.x*105+55,y:n.y+t.y*70+34,z:n.z+t.z*105+45}}function CC(n,t){const e=t.type===Qe.DEBRIS?.18:.15+(t.size.width>16?.03:0),i=t.type===Qe.CORROSION?.14:.11;return{x:Math.round((.16+n%3*.22)*100)/100,y:Math.round((.2+n%2*.2)*100)/100,width:e,height:i}}function Qf(n){return JSON.parse(JSON.stringify(n,(t,e)=>{if(typeof e!="function"&&!(e!=null&&e.isObject3D||e!=null&&e.isMaterial||e!=null&&e.isBufferGeometry)&&!(t==="object"||t==="group"||t==="parent"))return e}))}function PC(n){let t=Math.max(1,Math.floor(n))%2147483647;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}const RC="bridge:workflow-card-moved",IC="bridge:defect-focus-requested",DC="bridge:resource-telemetry",LC="bridge:settings-change",ni=()=>{};function bs(n){return n&&n.nodeType===9?n:n&&n.ownerDocument?n.ownerDocument:typeof document<"u"?document:null}function su(n){return n&&n.defaultView?n.defaultView:typeof window<"u"?window:null}function Oa(n,t,e){!n||typeof n.CustomEvent!="function"||n.dispatchEvent(new n.CustomEvent(t,{detail:e}))}function Gn(n){return n?n.textContent.trim().replace(/\s+/g," "):""}function na(n,t,e){return Math.max(t,Math.min(e,n))}function Bn(n,t,e=0){const i=n+Math.random()*(t-n),s=10**e;return Math.round(i*s)/s}function _0(n,t){const e=n.match(/#([A-Z]+-\d+)/i);if(e)return e[1].toUpperCase();const i=n.match(/\b([A-Z]{2,}-?\d{3,}|\d[A-Z0-9]{5,})\b/i);return i?i[1].toUpperCase():t}function ru(n,t){return!n||typeof n.querySelector!="function"?null:n.querySelector(`#${t}`)}function NC(n,t){const e=bs(n);if(!e)return!1;const i=e.querySelector(`.nav-item[data-target="${t}"]`);if(i)return i.click(),!0;const s=e.getElementById(t);return s?(e.querySelectorAll(".view-container").forEach(r=>r.classList.remove("active")),s.classList.add("active"),!0):!1}function eo(n={}){return{active:!1,destroy:ni,...n}}function x0(n){const t=Gn(n.querySelector(".kanban-title, h3"));return/Data/i.test(t)?"data":/Processing/i.test(t)?"processing":/Verification/i.test(t)?"verification":/Tickets/i.test(t)?"tickets":t.toLowerCase().replace(/[^a-z0-9]+/g,"-")||"stage"}function FC(n,t,e){const i=Gn(n.querySelector("h4"))||Gn(n).slice(0,48);return{id:_0(i,`CARD-${e+1}`),title:i,stage:x0(t),text:Gn(n)}}function UC(n,t){n.draggable=!0,n.tabIndex=n.tabIndex>=0?n.tabIndex:0,n.setAttribute("role",n.getAttribute("role")||"button"),n.dataset.workflowCardId=t.id,n.dataset.workflowStage=t.stage}function OC(n,t){if(!n)return;n.scrollIntoView({block:"center",behavior:"smooth"});const e=n.style.outline,i=n.style.boxShadow;n.style.outline="2px solid rgba(239, 68, 68, 0.9)",n.style.boxShadow="0 0 0 4px rgba(239, 68, 68, 0.16)";const s=()=>{n.style.outline=e,n.style.boxShadow=i};t&&t.setTimeout(s,1400)}function tp(n,t,e){if(typeof n.showDefectModal=="function"){n.showDefectModal(e);return}t&&typeof t.showDefectModal=="function"&&t.showDefectModal(e)}function BC(n={}){const t=n.root||bs(),e=bs(t),i=su(e),s=ru(t,"view-workflow");if(!s)return eo({cards:new Map,focusDefectCard:ni});const r=Array.from(s.querySelectorAll(".kanban-col"));if(!r.length)return eo({cards:new Map,focusDefectCard:ni});const o=new Map,a=[];let c=null;const l=()=>{o.clear(),r.forEach(d=>{Array.from(d.querySelectorAll(".kanban-card")).forEach((p,v)=>{const m=FC(p,d,v);UC(p,m),o.set(m.id,{element:p,payload:m})})})},h=d=>{const v=d.dataTransfer&&d.dataTransfer.getData("text/plain")||c,m=v?o.get(v):null;return m?m.element:null},f=(d,p,v)=>{const m=d.dataset.workflowCardId,g=o.get(m);if(!g)return;g.payload.stage=v,g.element.dataset.workflowStage=v;const y={card:{...g.payload},fromStage:p,toStage:v,movedAt:new Date().toISOString()};Oa(i,RC,y),typeof n.onMove=="function"&&n.onMove(y)},u=d=>{const p=d.dataset.workflowCardId,v=o.get(p),m={id:"DEF-102",title:v?v.payload.title:"#DEF-102",location:"Pylon-2-South",source:"workflow-kanban"};typeof n.navigateTo=="function"?n.navigateTo("view-flight-control",m):NC(t,"view-flight-control"),typeof n.focusDefect=="function"&&n.focusDefect(m),Oa(i,IC,m),OC(d,i)};return l(),r.forEach(d=>{const p=m=>{c&&(m.preventDefault(),m.dataTransfer&&(m.dataTransfer.dropEffect="move"))},v=m=>{const g=h(m);if(!g)return;m.preventDefault();const y=g.dataset.workflowStage||"",x=x0(d);d.appendChild(g),l(),f(g,y,x)};d.addEventListener("dragover",p),d.addEventListener("drop",v),a.push(()=>{d.removeEventListener("dragover",p),d.removeEventListener("drop",v)})}),o.forEach(({element:d})=>{const p=y=>{c=d.dataset.workflowCardId,y.dataTransfer&&(y.dataTransfer.effectAllowed="move",y.dataTransfer.setData("text/plain",c)),d.style.opacity="0.62"},v=()=>{c=null,d.style.opacity=""},m=y=>{Gn(d).includes("#DEF-102")&&(u(d),!y.target.closest("button")&&tp(n,i,{id:"DEF-102"}))},g=y=>{Gn(d).includes("#DEF-102")&&(y.key!=="Enter"&&y.key!==" "||(y.preventDefault(),u(d),tp(n,i,{id:"DEF-102"})))};d.addEventListener("dragstart",p),d.addEventListener("dragend",v),d.addEventListener("click",m),d.addEventListener("keydown",g),a.push(()=>{d.removeEventListener("dragstart",p),d.removeEventListener("dragend",v),d.removeEventListener("click",m),d.removeEventListener("keydown",g)})}),{active:!0,cards:o,focusDefectCard(){const d=o.get("DEF-102");return d?(u(d.element),!0):!1},destroy(){a.splice(0).forEach(d=>d()),o.forEach(({element:d})=>{d.removeAttribute("draggable"),d.removeAttribute("data-workflow-card-id"),d.removeAttribute("data-workflow-stage")}),o.clear()}}}function zC(n){const t=Gn(n).toLowerCase(),e=n.querySelector("img"),i=e&&e.getAttribute("src")||"";return t.includes("dock")||i.includes("dock")?"dock":t.includes("m30")||t.includes("m350")||i.includes("fleet")?"drone":"asset"}function kC(n,t){const e=n.querySelector(".rc-title"),i=n.querySelector(".rc-status"),s=n.querySelector(".rc-meta"),r=Gn(e).replace(Gn(i),"").trim()||`资产 ${t+1}`,o=Gn(s);return{id:_0(`${r} ${o}`,`ASSET-${t+1}`),title:r,type:zC(n),card:n,titleElement:e,statusElement:i,metaElement:s,baseMeta:s?s.innerHTML:"",state:{battery:Bn(54,94),temperature:Bn(18,27,1),humidity:Bn(39,62),networkMbps:Bn(320,480),signalBars:Bn(3,4),cycles:Bn(10,86),online:!0,maintenance:/maintenance|保养/i.test(o+r)}}}function VC(n){const t=n.type==="drone"?Bn(-2,1):Bn(-1,1);n.state.battery=na(n.state.battery+t,12,100),n.state.temperature=na(n.state.temperature+Bn(-.6,.7,1),12,38),n.state.humidity=na(n.state.humidity+Bn(-2,2),24,82),n.state.networkMbps=na(n.state.networkMbps+Bn(-28,24),90,520),n.state.signalBars=n.state.networkMbps>360?4:n.state.networkMbps>190?3:2,n.state.online=n.state.networkMbps>120&&n.state.battery>15}function HC(n){return n.state.maintenance?{text:"保养中",color:"#ef4444",background:"rgba(239, 68, 68, 0.1)"}:n.state.online?n.type==="dock"?{text:"在线",color:"#10b981",background:"rgba(16, 185, 129, 0.1)"}:{text:n.state.battery<28?"即将返航":"待命",color:"#10b981",background:"rgba(16, 185, 129, 0.1)"}:{text:"离线风险",color:"#f59e0b",background:"rgba(245, 158, 11, 0.1)"}}function ep(n){if(!n.metaElement)return;const t=n.type==="dock"?`UPS 电量: ${n.state.battery}%`:`电量: ${n.state.battery}%`,e=`网络: 5G (${n.state.networkMbps}Mbps, ${n.state.signalBars}/4)`,i=`温湿度: ${n.state.temperature.toFixed(1)}C / ${n.state.humidity}%`;if(n.metaElement.innerHTML=[`遥测编号: ${n.id}`,t,e,i].join("<br>"),n.statusElement){const s=HC(n);n.statusElement.textContent=s.text,n.statusElement.style.color=s.color,n.statusElement.style.background=s.background}}function GC(n){return{id:n.id,title:n.title,type:n.type,...n.state}}function WC(n={}){const t=n.root||bs(),e=bs(t),i=su(e),s=ru(t,"view-resource-management");if(!s)return eo({start:ni,stop:ni,tick:ni,snapshot:()=>[]});const r=Array.from(s.querySelectorAll(".resource-card")).map(kC);if(!r.length)return eo({start:ni,stop:ni,tick:ni,snapshot:()=>[]});let o=null;const a=Number(n.intervalMs||2500),c=()=>r.map(GC),l=()=>{const d={assets:c(),updatedAt:new Date().toISOString()};i&&(i.bridgeInspectionTelemetry=d),Oa(i,DC,d),typeof n.onUpdate=="function"&&n.onUpdate(d)},h=()=>{r.forEach(d=>{VC(d),ep(d)}),l()},f=()=>{o||!i||(o=i.setInterval(h,a))},u=()=>{!o||!i||(i.clearInterval(o),o=null)};return r.forEach(ep),l(),n.autoStart!==!1&&f(),{active:!0,assets:r,start:f,stop:u,tick:h,snapshot:c,destroy(){u(),r.forEach(d=>{d.metaElement&&(d.metaElement.innerHTML=d.baseMeta)})}}}function qC(n,t){const e=n.toLowerCase();return e.includes("altitude")||n.includes("限高")?"maxAltitudeM":e.includes("battery")||n.includes("低电量")?"returnBatteryPercent":e.includes("radar")||n.includes("雷达")?"obstacleSensitivity":e.includes("vision")||n.includes("视觉")?"visionModel":e.includes("confidence")||n.includes("置信度")?"confidencePercent":e.includes("alert")||n.includes("告警")?"instantAlerts":`setting${t+1}`}function XC(n){return n.endsWith("M")?"m":n.endsWith("Percent")?"%":""}function gh(n){return n.type==="checkbox"?!!n.checked:n.type==="range"||n.type==="number"?Number(n.value):n.value}function np(n,t){if(n.type==="checkbox"){n.checked=!!t;return}n.value=String(t)}function ia(n,t,e){const i=n.querySelector(".setting-val");if(i){if(typeof e=="boolean"){i.textContent=e?"On":"Off";return}i.textContent=`${e}${XC(t)}`}}function $C(n){return Array.from(n.querySelectorAll(".setting-item")).map((t,e)=>{const i=t.querySelector("input, select, textarea"),s=Gn(t.querySelector("label"))||`Setting ${e+1}`;if(!i)return null;const r=qC(s,e);return{item:t,control:i,label:s,key:r,initialValue:gh(i)}}).filter(Boolean)}function jC(n={}){const t=n.root||bs(),e=bs(t),i=su(e),s=ru(t,"view-system");if(!s)return eo({getState:()=>({}),setState:ni});const r=$C(s),o=[],a={},c=(h=null)=>{const f={settings:{...a},changedKey:h,updatedAt:new Date().toISOString()};i&&(i.bridgeInspectionSettings=f.settings),Oa(i,LC,f),typeof n.onChange=="function"&&n.onChange(f)},l=(h,f=h.key)=>{const u=gh(h.control);a[h.key]=u,ia(h.item,h.key,u),c(f)};return r.forEach(h=>{a[h.key]=h.initialValue,ia(h.item,h.key,h.initialValue);const f=()=>l(h),u=()=>l(h);h.control.addEventListener("input",f),h.control.addEventListener("change",u),o.push(()=>{h.control.removeEventListener("input",f),h.control.removeEventListener("change",u)})}),c(null),{active:!0,getState(){return{...a}},setState(h={}){Object.entries(h).forEach(([f,u])=>{const d=r.find(p=>p.key===f);d&&(np(d.control,u),a[f]=gh(d.control),ia(d.item,d.key,a[f]))}),c(null)},destroy(){o.splice(0).forEach(h=>h()),r.forEach(h=>{np(h.control,h.initialValue),ia(h.item,h.key,h.initialValue)})}}}function YC(n={}){const t=BC(n.workflow||n),e=WC(n.telemetry||n),i=jC(n.settings||n);return{workflow:t,telemetry:e,settings:i,destroy(){t.destroy(),e.destroy(),i.destroy()}}}const KC="bridge:demo-simulation-change",ZC={seed:8231,intervalMs:1e3,autoStart:!0,initialBattery:88,returnHomeThreshold:25,dockId:"NEST-BR-01",missionId:"MIS-DEMO-2026-001",baseTime:"2026-05-18T00:00:00.000Z"};function JC(n={}){const t={...ZC,...n},e=t.window||a2(),i=t.weatherEffects||r0({scene:t.scene,ambientLight:t.ambientLight,directionalLight:t.directionalLight,water:t.water,seed:t.seed}),s={config:t,win:e,effects:i,active:!1,destroyed:!1,step:0,timerId:null,snapshot:w0(t,0,S0(e,t))},r={get active(){return s.active},get snapshot(){return M0(s.snapshot)},start(){return QC(s,r)},stop(){return ip(s,r)},destroy(){var o;return ip(s,r),s.destroyed=!0,s.effects&&typeof s.effects.destroy=="function"&&!t.weatherEffects&&s.effects.destroy(),((o=s.win)==null?void 0:o.bridgeDemoSimulation)===r&&delete s.win.bridgeDemoSimulation,r}};return e&&(e.bridgeDemoSimulation=r),b0(s),t.autoStart!==!1&&r.start(),r}function QC(n,t){return n.destroyed||n.active||(n.active=!0,sp(n),n.timerId=setInterval(()=>sp(n),n.config.intervalMs)),t}function ip(n,t){return n.timerId&&clearInterval(n.timerId),n.timerId=null,n.active=!1,t}function sp(n){var t,e,i,s;n.destroyed||(n.step+=1,n.snapshot=w0(n.config,n.step,S0(n.win,n.config)),(e=(t=n.effects)==null?void 0:t.apply)==null||e.call(t,n.snapshot),(s=(i=n.effects)==null?void 0:i.update)==null||s.call(i,n.config.intervalMs/1e3),b0(n))}function b0(n){const t=M0(n.snapshot);return n.win&&(n.win.bridgeDemoSimulationSnapshot=t),n.win&&typeof n.win.CustomEvent=="function"&&n.win.dispatchEvent(new n.win.CustomEvent(KC,{detail:t})),typeof n.config.onChange=="function"&&n.config.onChange(t),t}function w0(n,t,e={}){const i=t+n.seed%97,s=t2(n,i),r=e2(n,i,s),o=n2(n,i,r),a=i2(i,s,o),c=s2({telemetry:r,mission:o,weather:s,externalSafety:e});return{weather:s,telemetry:r,mission:o,ai:a,safety:c,meta:{source:"deterministic-demo-simulation",seed:n.seed,step:t,updatedAt:o2(n,t)}}}function t2(n,t){const e=Vn(t,.11,4.6,3.1)+Vn(t,.031,.9,.4),i=Math.max(0,Vn(t,.047,1,-.35)),s=tn(i*i*18,1),r=tn(e+s*.08,1),o=tn(r+1.2+Vn(t,.19,2.2,1.7),1),a=tn(Ti(10.5-s*.28-r*.08,2.1,12),1);return{condition:s>8?"moderate-rain":s>1.6?"light-rain":"cloudy",windSpeed:r,gustSpeed:o,windDirection:Math.round((n.seed*13+t*7)%360),rainRate:s,visibility:a,fogDensity:tn(8e-4+(12-a)*26e-5,5),waterDisturbance:tn(Ti(s/24+o/58,0,1),2),lightFactor:tn(Ti(1-s/85-(12-a)/40,.48,1),2)}}function e2(n,t,e){const i=t*.115+e.windSpeed*.025+e.rainRate*.018,s=tn(Ti(n.initialBattery-i,8,100),1),r=Math.round(Ti(94-e.rainRate*1.5-e.gustSpeed*.55+Vn(t,.17,6,0),18,100)),o=r>=58&&e.visibility>=3.5,a=Math.round(Ti(54+e.rainRate*1.7+Vn(t,.05,7,2),36,91));return{droneId:"M350-RTK-DEMO",battery:s,batteryDrainPerMinute:tn(.8+e.windSpeed*.03+e.rainRate*.02,2),signalQuality:r,rtkStatus:o?"FIXED":r>=42?"FLOAT":"LOST",satellites:Math.round(Ti(28-e.rainRate*.35-(o?0:5),8,31)),altitude:tn(72+Vn(t,.07,18,0),1),speed:tn(8.2+e.windSpeed*.08+Vn(t,.13,1.1,0),1),dock:{id:n.dockId,hatch:r2(t),temperature:tn(23.5+e.lightFactor*3+Vn(t,.04,1.8,0),1),humidity:a,charging:s<=n.returnHomeThreshold+3}}}function n2(n,t,e){const i=tn(Ti(t*.82%118,0,100),1),r=e.battery<=n.returnHomeThreshold||i>=100?"RETURN_HOME":i<8?"TAKEOFF":"INSPECTION";return{id:n.missionId,phase:r,progress:i,waypointIndex:Math.min(12,Math.floor(i/8.4)+1),waypointTotal:12,returnHomeThreshold:n.returnHomeThreshold,estimatedRemainingSec:Math.max(0,Math.round((100-i)*5.8)),autoReturnRequired:e.battery<=n.returnHomeThreshold}}function i2(n,t,e){const i=tn(Ti(.62+e.progress/360+Vn(n,.09,.08,0),.58,.96),2),s=Math.max(0,Math.round(t.rainRate/3+Vn(n,.1,2,0)));return{pipeline:"edge-mock-analysis",status:t.visibility<3?"degraded":"nominal",framesProcessed:420+Math.floor(n*14),defectCandidates:Math.floor(e.progress/28)+s,lastDetection:{id:`SIM-DEF-${String(Math.floor(n/9)%12+1).padStart(3,"0")}`,type:e.progress>35?"crack":"surface-stain",confidence:i,severity:i>.86?"high":"medium"}}}function s2({telemetry:n,mission:t,weather:e,externalSafety:i}){const s=[],r=Ba(i.obstacleDistance,1/0),o=Ba(i.waterDistance,1/0);Cr(s,n.battery<=t.returnHomeThreshold,{code:"LOW_BATTERY",level:n.battery<=t.returnHomeThreshold-7?"critical":"warning",message:"电量低于返航安全阈值。",value:n.battery,threshold:t.returnHomeThreshold}),Cr(s,n.signalQuality<45,{code:"WEAK_SIGNAL",level:n.signalQuality<30?"critical":"warning",message:"指令链路质量下降。",value:n.signalQuality,threshold:45}),Cr(s,r<14,{code:"OBSTACLE_PROXIMITY",level:r<5?"critical":"warning",message:"环境传感器检测到障碍接近。",value:tn(r,1),threshold:14}),Cr(s,o<9,{code:"WATER_PROXIMITY",level:o<2.5?"critical":"warning",message:"无人机接近水面。",value:tn(o,1),threshold:9}),Cr(s,e.gustSpeed>=14,{code:"GUST_LIMIT",level:e.gustSpeed>=19?"critical":"advisory",message:"阵风可能影响云台稳定性。",value:e.gustSpeed,threshold:14});const a=s.reduce((c,l)=>op(l.level)>op(c.level)?l:c,{active:!1,level:"normal",code:"CLEAR",message:"当前无演示安全告警。"});return{status:s.length?a.level:"normal",clear:s.length===0,alert:{active:s.length>0,level:a.level,code:a.code,message:a.message},alerts:s,obstacleDistance:r,waterDistance:o,source:i.source||"demo-simulation"}}function S0(n,t){var s;if(typeof t.getSafetyState=="function")return rp(t.getSafetyState());const e=(n==null?void 0:n.bridgeFlightSafetyState)||{},i=(n==null?void 0:n.bridgeEnvironmentStatus)||e.sensorSnapshot||{};return rp({source:i.status?"environment-sensors":"demo-simulation",obstacleDistance:i.obstacleDistance??i.distance??e.obstacleDistance,waterDistance:((s=i.water)==null?void 0:s.distance)??i.waterDistance??e.waterDistance})}function rp(n={}){return{source:n.source||"demo-simulation",obstacleDistance:Ba(n.obstacleDistance,1/0),waterDistance:Ba(n.waterDistance,1/0)}}function Cr(n,t,e){t&&n.push(e)}function r2(n){const t=n%120;return t<6?"OPENING":t<96?"OPEN":t<102?"CLOSING":"CLOSED"}function o2(n,t){const e=Date.parse(n.baseTime),i=Number.isFinite(e)?e:0;return new Date(i+t*n.intervalMs).toISOString()}function Vn(n,t,e,i){return i+(Math.sin(n*t)*.5+.5)*e}function op(n){return{normal:0,advisory:1,warning:2,critical:3}[n]??0}function Ba(n,t){const e=Number(n);return Number.isFinite(e)?e:t}function tn(n,t=0){const e=10**t;return Math.round(n*e)/e}function Ti(n,t,e){return Math.min(e,Math.max(t,Number(n)))}function M0(n){return JSON.parse(JSON.stringify(n))}function a2(){return typeof window<"u"?window:null}const c2="bridge:resource-telemetry",l2=()=>{};function h2(n){return n&&n.nodeType===9?n:n&&n.ownerDocument?n.ownerDocument:typeof document<"u"?document:null}function u2(n){const t=h2(n);return t&&t.defaultView?t.defaultView:typeof window<"u"?window:null}function E0(n){return{assets:Array.isArray(n==null?void 0:n.assets)?n.assets.map(t=>({...t})):[],updatedAt:(n==null?void 0:n.updatedAt)||null,...Object.fromEntries(Object.entries(n||{}).filter(([t])=>t!=="assets"&&t!=="updatedAt"))}}function sl(n={}){return E0({...n,assets:Array.isArray(n.assets)?n.assets:[],updatedAt:n.updatedAt||new Date().toISOString()})}class d2{constructor(t={}){var e;this.eventName=t.eventName||c2,this.window=t.window||u2(t.root),this.listeners=new Set,this.latest=sl(t.initialSnapshot||((e=this.window)==null?void 0:e.bridgeInspectionTelemetry)||{assets:[]}),this.handleEvent=this.handleEvent.bind(this),this.window&&this.window.addEventListener(this.eventName,this.handleEvent)}handleEvent(t){this.latest=sl(t.detail||{}),this.notify()}notify(){const t=this.snapshot();this.listeners.forEach(e=>e(t))}subscribe(t,e={}){return typeof t!="function"?l2:(this.listeners.add(t),e.replay!==!1&&t(this.snapshot()),()=>{this.listeners.delete(t)})}publish(t={}){const e=sl(t);return this.latest=e,this.window&&(this.window.bridgeInspectionTelemetry=this.snapshot()),!this.window||typeof this.window.CustomEvent!="function"?(this.notify(),this.snapshot()):(this.window.dispatchEvent(new this.window.CustomEvent(this.eventName,{detail:e})),this.snapshot())}snapshot(){return E0(this.latest)}destroy(){this.window&&this.window.removeEventListener(this.eventName,this.handleEvent),this.listeners.clear()}}function T0(n={}){return new d2(n)}const A0="resource-explorer-drawer",ap="view-resource-management",Ws=()=>{};function cp(n){return n&&n.nodeType===9?n:n&&n.ownerDocument?n.ownerDocument:typeof document<"u"?document:null}function Fr(n){return n?n.textContent.trim().replace(/\s+/g," "):""}function f2(n,t){const e=n.match(/\b([A-Z]{2,}-?\d{3,}|\d[A-Z0-9]{5,})\b/i);return e?e[1].toUpperCase():t}function p2(n){const t=Fr(n).toLowerCase(),e=n.querySelector("img"),i=e&&e.getAttribute("src")||"";return t.includes("dock")||i.includes("dock")?"dock":t.includes("m30")||t.includes("m350")||i.includes("fleet")?"drone":"asset"}function m2(n,t){const e=n.querySelector(".rc-title"),i=n.querySelector(".rc-status"),s=n.querySelector(".rc-meta"),r=n.querySelector("img"),o=Fr(e).replace(Fr(i),"").trim()||`资产 ${t+1}`,a=Fr(s),c=n.dataset.resourceAssetId||f2(`${o} ${a}`,`ASSET-${t+1}`);return n.dataset.resourceAssetId=c,n.dataset.resourceAssetType=n.dataset.resourceAssetType||p2(n),{id:c,title:o,type:n.dataset.resourceAssetType,status:Fr(i)||"Unknown",meta:a,imageUrl:r?r.getAttribute("src"):"",modelUrl:n.dataset.modelUrl||"",card:n}}function lp(n,t){return{...n,...t||{},title:(t==null?void 0:t.title)||n.title,type:(t==null?void 0:t.type)||n.type,modelUrl:(t==null?void 0:t.modelUrl)||n.modelUrl}}function Pr(n,t,e="--"){const i=n==null?void 0:n[t];return i==null||i===""?e:i}function rl(n,t,e=0,i="--"){const s=Number(n==null?void 0:n[t]);return Number.isFinite(s)?s.toFixed(e):i}function Ur(n,t,e){return Math.max(t,Math.min(e,n))}function g2(n=""){return String(n).split("").reduce((t,e)=>t+e.charCodeAt(0),0)}function hp(n={},t=0){const e=g2(n.id||n.title||t),i=n.type==="dock",s=Number(n.battery??72+e%22),r=Number(n.networkMbps??260+e%180),o=Number(n.temperature??20+e%8),a=Number(n.humidity??44+e%18),c=Number(n.cycles??18+e%80),l=Ur(Math.round((100-s)*.32+Math.max(0,220-r)*.16+(n.online===!1?35:0)),4,96);return{...n,battery:s,networkMbps:r,temperature:o,humidity:a,offlineRisk:l,droneHealth:i?void 0:Ur(96-Math.round(c*.18)-Math.round(l*.12),58,99),batteryLife:Ur(100-Math.round(c*.34),42,98),propellerStatus:i||e%5?"正常":"需检查",dockClimateHistory:Array.from({length:8},(h,f)=>({t:f,temperature:Math.round((o+Math.sin(f+e)*1.8)*10)/10,humidity:Ur(Math.round(a+Math.cos(f+e)*5),24,86)}))}}function v2(n=[]){return n.map(t=>`<span style="height:${Ur(Math.round((t.temperature-12)*3),16,74)}px" title="${Number(t.temperature).toFixed(1)}°C / ${t.humidity}%"></span>`).join("")}function y2(n,t,e,i=""){const s=n.createElement(t);return s.className=e,i&&(s.textContent=i),s}class _2{constructor(t,e={}){this.canvas=t,this.window=e.window||t.ownerDocument.defaultView,this.scene=new cm,this.camera=new en(38,1,.1,100),this.camera.position.set(5.5,3.8,7),this.renderer=new Yh({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(this.window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=wn,this.group=new Me,this.scene.add(this.group),this.scene.add(new Rm(16777215,1.6));const i=new ah(16176251,2.2);i.position.set(4,8,5),this.scene.add(i);const s=new ah(6277119,1.3);s.position.set(-4,2,-4),this.scene.add(s),this.scene.add(new Im(9,18,4937059,2042167)),this.resize=this.resize.bind(this),this.animate=this.animate.bind(this),this.disposed=!1,this.resizeObserver=typeof ResizeObserver<"u"?new ResizeObserver(this.resize):null,this.resizeObserver&&this.resizeObserver.observe(t.parentElement||t),this.window.addEventListener("resize",this.resize),this.resize(),this.frame=this.window.requestAnimationFrame(this.animate)}resize(){const t=(this.canvas.parentElement||this.canvas).getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),i=Math.max(1,Math.floor(t.height));this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i,!1)}clearGroup(){for(;this.group.children.length;)this.group.children.pop().traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(i=>i.dispose()):e.material.dispose())})}async renderAsset(t){this.clearGroup(),this.group.rotation.set(.15,-.55,0),!(t.modelUrl&&await this.loadModel(t.modelUrl))&&(t.type==="dock"?this.createDock():this.createDrone())}async loadModel(t){try{const{GLTFLoader:e}=await jm(async()=>{const{GLTFLoader:r}=await import("./GLTFLoader-CjaV2RWU.js");return{GLTFLoader:r}},[]),s=await new e().loadAsync(t);return s.scene.scale.setScalar(1.5),this.group.add(s.scene),!0}catch(e){return console.warn("[ResourceExplorer] GLB load failed, falling back to procedural view:",e),this.clearGroup(),!1}}addPart(t,e,i=""){const s=new Me;return s.add(t),s.position.copy(e).multiplyScalar(.35),s.userData.target=e.clone(),s.userData.label=i,this.group.add(s),s}createBox(t,e,i=.55){return new It(new _e(t.x,t.y,t.z),new Yt({color:e,roughness:i,metalness:.35}))}createRotor(t){const e=new Yt({color:13938487,roughness:.38,metalness:.55}),i=new It(new ys(.42,.025,10,40),e);i.rotation.x=Math.PI/2;const s=new It(new _e(.78,.025,.09),e),r=new Me;r.add(i,s),this.addPart(r,t,"rotor")}createDrone(){this.addPart(this.createBox(new E(1.55,.38,1),3159617),new E(0,.2,0),"airframe"),this.addPart(this.createBox(new E(.84,.22,.56),1120295),new E(0,-.35,.95),"gimbal"),this.addPart(this.createBox(new E(1.05,.2,.62),13938487),new E(0,.72,-.1),"battery"),[[-1.65,.12,-1.22,-.65],[1.65,.12,1.22,.65],[-1.65,.12,1.22,.65],[1.65,.12,-1.22,-.65]].forEach(([i,s,r,o])=>{const a=this.createBox(new E(1.6,.12,.12),3159617,.48);a.rotation.y=o,this.addPart(a,new E(i*.48,s,r*.48),"arm"),this.createRotor(new E(i,s+.2,r))})}createDock(){this.addPart(this.createBox(new E(1.9,1.5,1.35),2634047),new E(0,.1,0),"dock-shell"),this.addPart(this.createBox(new E(2.25,.18,1.65),13938487),new E(0,1.12,0),"sliding-roof"),this.addPart(this.createBox(new E(1.5,.09,1.1),988970),new E(0,1.42,0),"landing-pad"),this.addPart(this.createBox(new E(.24,1.1,.2),1120295),new E(-1.38,.02,0),"power-module"),this.addPart(this.createBox(new E(.24,1.1,.2),1120295),new E(1.38,.02,0),"network-module");const s=new Yt({color:13938487,roughness:.4,metalness:.5});[-.82,.82].forEach(r=>{const o=new It(new ci(.025,.025,1.05,12),s);o.position.y=.5,this.addPart(o,new E(r,1.05,-.95),"antenna")})}animate(t){if(this.disposed)return;const e=t*.001;this.group.rotation.y+=.003,this.group.children.forEach((i,s)=>{i.userData.target&&(i.position.lerp(i.userData.target,.055),i.rotation.y=Math.sin(e+s)*.04)}),this.renderer.render(this.scene,this.camera),this.frame=this.window.requestAnimationFrame(this.animate)}dispose(){this.disposed=!0,this.window.cancelAnimationFrame(this.frame),this.window.removeEventListener("resize",this.resize),this.resizeObserver&&this.resizeObserver.disconnect(),this.clearGroup(),this.renderer.dispose()}}function x2(n){const t=y2(n,"aside","resource-explorer-drawer");return t.id=A0,t.setAttribute("aria-hidden","true"),t.innerHTML=`
    <div class="resource-explorer-head">
      <div>
        <div class="resource-explorer-kicker">资产三维拆解视图</div>
        <h3 data-re-title>资源详情</h3>
      </div>
      <button class="resource-explorer-close" type="button" aria-label="关闭资源详情">&times;</button>
    </div>
    <div class="resource-explorer-stage">
      <canvas data-re-canvas></canvas>
      <div class="resource-explorer-scanline"></div>
    </div>
    <div class="resource-explorer-body">
      <div class="resource-explorer-status" data-re-status>等待遥测</div>
      <div class="resource-explorer-stats">
        <div><span>电量</span><strong data-re-battery>--</strong></div>
        <div><span>网络</span><strong data-re-network>--</strong></div>
        <div><span>温度</span><strong data-re-temp>--</strong></div>
        <div><span>信号</span><strong data-re-signal>--</strong></div>
        <div><span>健康度</span><strong data-re-health>--</strong></div>
        <div><span>电池寿命</span><strong data-re-life>--</strong></div>
        <div><span>桨叶状态</span><strong data-re-propeller>--</strong></div>
        <div><span>离线风险</span><strong data-re-risk>--</strong></div>
      </div>
      <div class="resource-explorer-chart" data-re-climate></div>
      <div class="resource-explorer-meta" data-re-meta></div>
      <div class="resource-explorer-note" data-re-model>正在使用程序化拆解模型；配置模型地址后可加载 GLB。</div>
    </div>
  `,n.body.appendChild(t),t}function up(n,t){n.querySelector("[data-re-title]").textContent=t.title,n.querySelector("[data-re-status]").textContent=t.online===!1||t.offlineRisk>68?"离线风险":t.status||"在线",n.querySelector("[data-re-battery]").textContent=`${rl(t,"battery",0)}%`,n.querySelector("[data-re-network]").textContent=`${rl(t,"networkMbps",0)} Mbps`,n.querySelector("[data-re-temp]").textContent=`${rl(t,"temperature",1)}°C`,n.querySelector("[data-re-signal]").textContent=`${Pr(t,"signalBars")}/4`,n.querySelector("[data-re-health]").textContent=t.type==="dock"?"机巢":`${Pr(t,"droneHealth")}%`,n.querySelector("[data-re-life]").textContent=`${Pr(t,"batteryLife")}%`,n.querySelector("[data-re-propeller]").textContent=Pr(t,"propellerStatus"),n.querySelector("[data-re-risk]").textContent=`${Pr(t,"offlineRisk")}%`,n.querySelector("[data-re-climate]").innerHTML=v2(t.dockClimateHistory),n.querySelector("[data-re-meta]").textContent=[t.meta||`遥测编号: ${t.id}`,`机巢温湿度曲线点: ${(t.dockClimateHistory||[]).length}`].join(`
`),n.querySelector("[data-re-model]").textContent=t.modelUrl?`GLB 来源: ${t.modelUrl}`:"正在使用程序化拆解模型；设置 data-model-url 或 modelUrl 可加载 GLB。"}function b2(n={}){const t=n.root||cp(),e=cp(t),i=e==null?void 0:e.getElementById(ap);if(!e||!i)return{active:!1,open:Ws,close:Ws,snapshot:()=>[],destroy:Ws};const s=Array.from(i.querySelectorAll(".resource-card")).map(m2);if(!s.length)return{active:!1,open:Ws,close:Ws,snapshot:()=>[],destroy:Ws};const r=e.defaultView,o=n.telemetryBus||T0({root:e}),a=[],c=new Map;let l=null,h=null,f=null,u=!1;const d=S=>{const M=s.find(D=>D.id===S)||s[0];return hp(lp(M,c.get(M.id)))},p=()=>{if(!l||!f)return;const S=d(f);up(l,S)},v=o.subscribe(S=>{c.clear();const M=S.assets.map(hp);M.forEach(D=>c.set(D.id,D)),!S.extendedResourceTelemetry&&!u&&(u=!0,o.publish({...S,assets:M,extendedResourceTelemetry:!0,updatedAt:new Date().toISOString()}),u=!1),p()});a.push(v);const m=()=>{if(l)return l;l=e.getElementById(A0)||x2(e);const S=l.querySelector(".resource-explorer-close");return S.addEventListener("click",y),a.push(()=>S.removeEventListener("click",y)),h=new _2(l.querySelector("[data-re-canvas]"),{window:r}),l};function g(S){var T;const M=typeof S=="string"?S:(T=S==null?void 0:S.dataset)==null?void 0:T.resourceAssetId;if(!M)return!1;f=M;const D=m(),_=d(M);return up(D,_),h.renderAsset(_),D.classList.add("is-open"),D.setAttribute("aria-hidden","false"),!0}function y(){l&&(l.classList.remove("is-open"),l.setAttribute("aria-hidden","true"),f=null)}s.forEach(S=>{const M=()=>g(S.id),D=_=>{_.key!=="Enter"&&_.key!==" "||(_.preventDefault(),g(S.id))};S.card.tabIndex=S.card.tabIndex>=0?S.card.tabIndex:0,S.card.setAttribute("role",S.card.getAttribute("role")||"button"),S.card.addEventListener("click",M),S.card.addEventListener("keydown",D),a.push(()=>{S.card.removeEventListener("click",M),S.card.removeEventListener("keydown",D)})});const x=S=>{S.key==="Escape"&&y()};r.addEventListener("keydown",x),a.push(()=>r.removeEventListener("keydown",x));const b=S=>{var M;((M=S.detail)==null?void 0:M.targetId)!==ap&&y()};return r.addEventListener("bridge:view-change",b),a.push(()=>r.removeEventListener("bridge:view-change",b)),{active:!0,bus:o,open:g,close:y,snapshot:()=>s.map(S=>lp(S,c.get(S.id))),destroy(){y(),a.splice(0).forEach(S=>S()),h&&h.dispose(),n.telemetryBus||o.destroy(),l!=null&&l.parentNode&&l.parentNode.removeChild(l),s.forEach(S=>{S.card.removeAttribute("data-resource-asset-id"),S.card.removeAttribute("data-resource-asset-type")})}}}const w2="bridge:access-control-change",dp=()=>{},no={admin:{label:"管理员",permissions:["system:read","system:write","system:advanced","ai:configure","geofence:edit"]},operator:{label:"操作员",permissions:["system:read","geofence:edit"]}};let cs=vh();function fp(n){return n&&n.nodeType===9?n:n&&n.ownerDocument?n.ownerDocument:typeof document<"u"?document:null}function S2(n){return n&&n.defaultView?n.defaultView:typeof window<"u"?window:null}function M2(n,t,e){!n||typeof n.CustomEvent!="function"||n.dispatchEvent(new n.CustomEvent(t,{detail:e}))}function C0(n){return no[n]?n:"operator"}function vh(n={}){const t=C0(n.role||"operator"),e=[...no[t].permissions];return{role:t,userId:n.userId||`mock-${t}`,label:no[t].label,permissions:e,updatedAt:new Date().toISOString(),can(i){return e.includes(i)}}}function E2(n){return{active:!1,state:n,setRole:dp,getState:()=>n,destroy:dp}}function pp(n){return n?n.textContent.trim().replace(/\s+/g," "):""}function T2(n){return!n||typeof n.querySelector!="function"?null:n.querySelector("#view-system")}function A2(n,t){const e=n.createElement("div");e.className="system-role-switcher glass-panel",e.setAttribute("data-system-enhancement","access-control");const i=n.createElement("span");i.className="system-role-label",i.textContent="演示角色";const s=n.createElement("div");return s.className="system-role-buttons",Object.keys(no).forEach(r=>{const o=n.createElement("button");o.type="button",o.className="system-role-button",o.dataset.role=r,o.textContent=no[r].label,o.setAttribute("aria-pressed",String(r===t.role)),s.appendChild(o)}),e.append(i,s),e}function C2(n){const t=[];return Array.from(n.querySelectorAll(".settings-panel")).forEach(i=>{const s=pp(i.querySelector("h3"));/AI|engine|model|vision|引擎|模型|视觉/i.test(s)&&(i.dataset.accessPermission="ai:configure",i.classList.add("system-admin-only"),t.push(i))}),Array.from(n.querySelectorAll(".setting-item")).forEach(i=>{var r;const s=pp(i.querySelector("label"));/radar|sensitivity|confidence|alert|雷达|灵敏度|置信度|告警/i.test(s)&&(i.dataset.accessPermission=((r=i.closest(".settings-panel"))==null?void 0:r.dataset.accessPermission)||"system:advanced",i.classList.add("system-admin-only"),t.push(i))}),t}function mp(n,t){const e=t.can("system:advanced")||t.can("ai:configure");n.dataset.accessRole=t.role,n.querySelectorAll(".system-admin-only").forEach(i=>{const s=i.dataset.accessPermission||"system:advanced",r=e||t.can(s);i.hidden=!r,i.setAttribute("aria-hidden",String(!r))}),n.querySelectorAll(".system-role-button").forEach(i=>{i.classList.toggle("active",i.dataset.role===t.role),i.setAttribute("aria-pressed",String(i.dataset.role===t.role))})}function P2(n={}){const t=n.root||fp(),e=fp(t),i=S2(e),s=vh(n);cs=s,i&&(i.AccessControlState=s);const r=T2(t);if(!r||!e)return E2(s);const o=[],a=C2(r),c=n.showRoleSwitcher===!1?null:A2(e,s);if(c){const f=r.querySelector(".resource-header");f?f.appendChild(c):r.prepend(c);const u=d=>{const p=d.target.closest(".system-role-button");p&&h.setRole(p.dataset.role)};c.addEventListener("click",u),o.push(()=>c.removeEventListener("click",u))}const l=()=>{i&&(i.AccessControlState=cs),M2(i,w2,cs),typeof n.onChange=="function"&&n.onChange(cs)},h={active:!0,get state(){return cs},getState(){return cs},setRole(f){const u=vh({role:f,userId:n.userId||`mock-${C0(f)}`});cs=u,mp(r,u),l()},destroy(){o.splice(0).forEach(f=>f()),a.forEach(f=>{f.hidden=!1,f.removeAttribute("aria-hidden"),f.classList.remove("system-admin-only"),delete f.dataset.accessPermission}),c!=null&&c.parentNode&&c.parentNode.removeChild(c),delete r.dataset.accessRole}};return mp(r,s),l(),h}const R2="bridge:geofence-change",gp=()=>{},I2={minX:-520,maxX:420,minY:-260,maxY:260},vp=[{x:-470,y:-220},{x:330,y:-220},{x:345,y:220},{x:-470,y:225}];function yp(n){return n&&n.nodeType===9?n:n&&n.ownerDocument?n.ownerDocument:typeof document<"u"?document:null}function D2(n){return n&&n.defaultView?n.defaultView:typeof window<"u"?window:null}function L2(n,t,e){!n||typeof n.CustomEvent!="function"||n.dispatchEvent(new n.CustomEvent(t,{detail:e}))}function za(n,t,e){return Math.max(t,Math.min(e,n))}function Rr(n){return n.map(t=>({x:Number(t.x),y:Number(t.y)}))}function N2(n){return!n||typeof n.querySelector!="function"?null:n.querySelector("#view-system")}function wi(n,t,e={}){const i=n.createElementNS("http://www.w3.org/2000/svg",t);return Object.entries(e).forEach(([s,r])=>i.setAttribute(s,r)),i}function ls(n,t){const e=(n.x-t.minX)/(t.maxX-t.minX)*100,i=(1-(n.y-t.minY)/(t.maxY-t.minY))*100;return{x:e,y:i}}function _p(n,t){return{x:Math.round(t.minX+n.x/100*(t.maxX-t.minX)),y:Math.round(t.minY+(100-n.y)/100*(t.maxY-t.minY))}}function xp(n,t){const e=t.getBoundingClientRect();return{x:za((n.clientX-e.left)/e.width*100,0,100),y:za((n.clientY-e.top)/e.height*100,0,100)}}function F2(n){return{active:!1,getState:()=>n,setPolygon:gp,destroy:gp}}function U2(n){const t=n.createElement("section");return t.className="settings-panel glass-panel geofence-panel",t.setAttribute("data-system-enhancement","geofence-editor"),t.innerHTML=`
    <div class="geofence-header">
      <div>
        <h3>电子围栏顶视图</h3>
        <p>桥梁局部坐标下的可飞行区域、航线、机巢与瑕疵点。</p>
      </div>
      <label class="geofence-toggle">
        <input type="checkbox" data-geofence-enabled checked>
        <span>启用</span>
      </label>
    </div>
    <div class="geofence-editor">
      <svg class="geofence-svg" viewBox="0 0 100 100" role="img" aria-label="电子围栏顶视图编辑器"></svg>
      <div class="geofence-readout" aria-live="polite"></div>
    </div>
    <div class="geofence-actions">
      <button type="button" data-geofence-action="add">添加点</button>
      <button type="button" data-geofence-action="reset">重置</button>
      <button type="button" data-geofence-action="clear">清空</button>
    </div>
  `,t}function O2(n){if(!n.length)return null;const t=n.map(i=>i.x),e=n.map(i=>i.y);return{minX:Math.min(...t),maxX:Math.max(...t),minY:Math.min(...e),maxY:Math.max(...e)}}function B2(n={}){var D;const t=n.root||yp(),e=yp(t),i=D2(e),s={...I2,...n.bounds||{}},r=n.context||{},o={enabled:n.enabled!==!1,polygon:Rr(n.polygon||vp),bounds:s,updatedAt:new Date().toISOString()},a=N2(t);if(!a||!e)return F2(o);const c=U2(e),l=c.querySelector(".geofence-svg"),h=c.querySelector("[data-geofence-enabled]"),f=c.querySelector(".geofence-readout"),u=[];let d=null;h.checked=o.enabled;const p=()=>{o.updatedAt=new Date().toISOString();const _={enabled:o.enabled,polygon:Rr(o.polygon),bounds:O2(o.polygon),coordinateSystem:"bridge-local-meters",updatedAt:o.updatedAt};i&&(i.bridgeGeofenceState=_),L2(i,R2,_),typeof n.onChange=="function"&&n.onChange(_)},v=()=>{l.replaceChildren(),z2(l,e,s,r);const _=wi(e,"path",{class:"geofence-grid",d:"M 0 25 H 100 M 0 50 H 100 M 0 75 H 100 M 25 0 V 100 M 50 0 V 100 M 75 0 V 100"});l.appendChild(_);const T=o.polygon.map(P=>ls(P,s));if(T.length){const P=wi(e,"polygon",{class:"geofence-shape",points:T.map(R=>`${R.x},${R.y}`).join(" ")});l.appendChild(P)}T.forEach((P,R)=>{const U=wi(e,"circle",{class:"geofence-point",cx:P.x,cy:P.y,r:2.4,tabindex:"0","data-point-index":String(R)});l.appendChild(U)}),f.textContent=`${o.polygon.length} 个围栏点 | ${o.enabled?"已启用":"已停用"}`},m=(_,T)=>{const P=_p(xp(T,l),s);o.polygon[_]={x:za(P.x,s.minX,s.maxX),y:za(P.y,s.minY,s.maxY)},v(),p()},g=_=>{var R;const T=_.target.closest(".geofence-point");if(T){d=Number(T.dataset.pointIndex),(R=l.setPointerCapture)==null||R.call(l,_.pointerId);return}const P=_p(xp(_,l),s);o.polygon.push(P),v(),p()},y=_=>{d!==null&&m(d,_)},x=_=>{var T;d=null,(T=l.releasePointerCapture)==null||T.call(l,_.pointerId)},b=()=>{o.enabled=!!h.checked,v(),p()},S=_=>{var P;const T=(P=_.target.closest("[data-geofence-action]"))==null?void 0:P.dataset.geofenceAction;T&&(T==="add"&&o.polygon.push({x:0,y:0}),T==="reset"&&(o.polygon=Rr(vp)),T==="clear"&&(o.polygon=[]),v(),p())};l.addEventListener("pointerdown",g),l.addEventListener("pointermove",y),l.addEventListener("pointerup",x),l.addEventListener("pointercancel",x),h.addEventListener("change",b),c.addEventListener("click",S);const M=(D=i==null?void 0:i.setInterval)==null?void 0:D.call(i,v,800);return u.push(()=>{l.removeEventListener("pointerdown",g),l.removeEventListener("pointermove",y),l.removeEventListener("pointerup",x),l.removeEventListener("pointercancel",x),h.removeEventListener("change",b),c.removeEventListener("click",S),M&&i.clearInterval(M)}),a.appendChild(c),v(),p(),{active:!0,getState(){return{...o,polygon:Rr(o.polygon)}},setPolygon(_=[]){o.polygon=Rr(_),v(),p()},destroy(){u.splice(0).forEach(_=>_()),c.parentNode&&c.parentNode.removeChild(c)}}}function z2(n,t,e,i){var l;n.appendChild(wi(t,"rect",{class:"geofence-water",x:0,y:0,width:100,height:100}));const s=ls({x:e.minX,y:-24},e),r=ls({x:e.maxX,y:24},e);n.appendChild(wi(t,"rect",{class:"geofence-bridge",x:0,y:Math.min(s.y,r.y),width:100,height:Math.abs(r.y-s.y)}));const o=k2(i.route);o.length>1&&n.appendChild(wi(t,"polyline",{class:"geofence-route",points:o.map(h=>{const f=ls(h,e);return`${f.x},${f.y}`}).join(" ")}));const a=ya(i.dockPosition);if(a){const h=ls(a,e);n.appendChild(wi(t,"rect",{class:"geofence-dock",x:h.x-2,y:h.y-2,width:4,height:4,rx:.8}))}(i.defects||[]).forEach(h=>{const f=ya(h.localPosition||h.position);if(!f)return;const u=ls(f,e);n.appendChild(wi(t,"circle",{class:`geofence-defect severity-${h.severity||"medium"}`,cx:u.x,cy:u.y,r:1.2}))});const c=ya((l=i.getDronePosition)==null?void 0:l.call(i));if(c){const h=ls(c,e);n.appendChild(wi(t,"path",{class:"geofence-drone",d:`M ${h.x} ${h.y-2.2} L ${h.x+1.8} ${h.y+1.8} L ${h.x} ${h.y+.9} L ${h.x-1.8} ${h.y+1.8} Z`}))}}function k2(n=[]){return n.map(ya).filter(Boolean)}function ya(n){return n?{x:Number(n.x??0),y:Number(n.z??n.y??0)}:null}const sa=()=>{};function bp(n){return n&&n.nodeType===9?n:n&&n.ownerDocument?n.ownerDocument:typeof document<"u"?document:null}function V2(){return{active:!1,accessControl:{active:!1,destroy:sa},geofenceEditor:{active:!1,destroy:sa},aiEngine:{destroy:sa},destroy:sa}}function H2(n={}){const t=n.root||bp();if(!bp(t))return V2();const i=P2({root:t,...n.accessControl||{}}),s=B2({root:t,...n.geofence||{}}),r=jA(n.aiEngine||{}),o=n.loadAiEngine===!1?Promise.resolve(r.getState()):r.load();return{active:i.active||s.active,accessControl:i,geofenceEditor:s,aiEngine:r,aiEngineReady:o,destroy(){i.destroy(),s.destroy(),r.destroy()}}}const G2="tactical",W2=420,P0=900,q2=650,X2=18,$2=520,wp=Object.freeze({enabled:!1,isAiming:!1,enable:()=>!1,disable:()=>!1,destroy:()=>!1,fire:()=>!1});function j2({scene:n,camera:t,drone:e}={}){if(!N0(n)||!F0(t)||!e)return wp;const i=uP();if(!i)return wp;const s={scene:n,camera:t,drone:e,win:i,enabled:!1,isAiming:!1,sequenceBuffer:"",effects:[],rafId:null,hud:null,destroyed:!1},r={get enabled(){return s.enabled},get isAiming(){return s.isAiming},enable(){return yh(s)},disable(){return _h(s)},destroy(){return K2(s)},fire(){return R0(s)}};return s.onViewChange=o=>{var a;((a=o.detail)==null?void 0:a.targetId)!=="view-flight-control"&&_h(s)},i.addEventListener("bridge:view-change",s.onViewChange),Sp(i)&&(s.onKeydown=o=>Y2(o,s),i.addEventListener("keydown",s.onKeydown,{passive:!0})),i.bridgeDeveloperMode===!0&&Sp(i)&&yh(s),r}function Y2(n,t){if(t.destroyed||t.enabled||n.defaultPrevented||hP(n.target))return;const e=String(n.key||"").toLowerCase();if(e.length!==1||n.altKey||n.ctrlKey||n.metaKey)return;const i=lP(t.win);t.sequenceBuffer=`${t.sequenceBuffer}${e}`.slice(-i.length),t.sequenceBuffer===i&&(t.win.bridgeDeveloperMode=!0,yh(t))}function yh(n){return n.destroyed||n.enabled?!1:(n.enabled=!0,n.win.document.body.classList.add("tactical-payload-enabled"),n.hud=iP(n.win.document),n.onContextMenu=t=>{xh(n)&&t.preventDefault()},n.onMouseDown=t=>{if(xh(n)){if(t.button===2){t.preventDefault(),_a(n,!0);return}t.button===0&&n.isAiming&&(t.preventDefault(),R0(n))}},n.onMouseUp=t=>{t.button===2&&_a(n,!1)},n.onBlur=()=>_a(n,!1),n.win.addEventListener("contextmenu",n.onContextMenu),n.win.addEventListener("mousedown",n.onMouseDown),n.win.addEventListener("mouseup",n.onMouseUp),n.win.addEventListener("blur",n.onBlur),D0(n),!0)}function _h(n){return n.enabled?(_a(n,!1),n.enabled=!1,n.win.document.body.classList.remove("tactical-payload-enabled"),n.win.removeEventListener("contextmenu",n.onContextMenu),n.win.removeEventListener("mousedown",n.onMouseDown),n.win.removeEventListener("mouseup",n.onMouseUp),n.win.removeEventListener("blur",n.onBlur),sP(n),nP(n),L0(n),!0):!1}function K2(n){return n.destroyed?!1:(_h(n),n.destroyed=!0,n.onKeydown&&n.win.removeEventListener("keydown",n.onKeydown),n.win.removeEventListener("bridge:view-change",n.onViewChange),!0)}function R0(n){if(!xh(n))return!1;const t=oP(n.camera,n.drone),e=new E;return n.camera.getWorldDirection(e).normalize(),Z2(n,t,e),rP(n),eP(n),D0(n),!0}function Z2(n,t,e){const i=new Yt({color:16770232,emissive:16735278,emissiveIntensity:1.4,roughness:.38,metalness:.2}),s=new It(new kh(.42,2.4,4,10),i);s.name="DevEffectProjectile",s.userData.devEffect=!0,s.position.copy(t),s.quaternion.setFromUnitVectors(new E(0,1,0),e.clone().normalize());const r=new ar(16739116,1.5,38);r.position.set(0,-1.2,0),s.add(r),n.scene.add(s),ou(n,{object:s,material:i,geometry:s.geometry,direction:e.clone(),origin:t.clone(),bornAt:Qa(n),ttl:P0,projectile:!0})}function J2(n,t,e){const i=new ue().setFromPoints([t,e]),s=new Qi({color:16731438,transparent:!0,opacity:.9,depthWrite:!1}),r=new si(i,s);r.name="DevEffectTrajectory",r.userData.devEffect=!0,n.scene.add(r),ou(n,{object:r,material:s,geometry:i,bornAt:Qa(n),ttl:P0})}function Q2(n,t,e){const s=new Float32Array(78),r=[],o=aP(e);for(let h=0;h<26;h+=1){const f=cP(o,1.7);s[h*3]=t.x+f.x,s[h*3+1]=t.y+f.y,s[h*3+2]=t.z+f.z,r.push(f.multiplyScalar(10+Math.random()*18).addScaledVector(e,-14))}const a=new ue;a.setAttribute("position",new gn(s,3));const c=new zh({color:16757575,size:4,transparent:!0,opacity:.85,depthWrite:!1,blending:ul}),l=new pm(a,c);l.name="DevEffectParticles",l.userData.devEffect=!0,n.scene.add(l),ou(n,{object:l,material:c,geometry:a,velocities:r,bornAt:Qa(n),ttl:q2})}function I0(n){if(!n.enabled&&n.effects.length===0){L0(n);return}const t=Qa(n);n.pendingEffects=[],n.updatingEffects=!0,n.effects=n.effects.filter(e=>{const i=t-e.bornAt,s=Math.min(1,i/e.ttl);if(e.projectile){const r=Math.min(W2,i/1e3*$2);if(e.object.position.copy(e.origin).addScaledVector(e.direction,r),!e.trailAt||i-e.trailAt>70){const o=e.object.position.clone().addScaledVector(e.direction,-8);J2(n,o,e.object.position.clone()),e.trailAt=i}}return s>=1?(e.projectile&&Q2(n,e.object.position.clone(),e.direction),au(n,e),!1):(e.material.opacity=1-s,e.velocities&&tP(e,i/1e3),!0)}),n.updatingEffects=!1,n.pendingEffects.length&&(n.effects.push(...n.pendingEffects),n.pendingEffects=[]),n.rafId=n.win.requestAnimationFrame(()=>I0(n))}function ou(n,t){n.updatingEffects?n.pendingEffects.push(t):n.effects.push(t)}function tP(n,t){const e=n.geometry.getAttribute("position");n.velocities.forEach((i,s)=>{e.setXYZ(s,e.getX(s)+i.x*t*.04,e.getY(s)+i.y*t*.04,e.getZ(s)+i.z*t*.04)}),e.needsUpdate=!0}function D0(n){n.rafId===null&&(n.rafId=n.win.requestAnimationFrame(()=>I0(n)))}function L0(n){n.rafId!==null&&(n.win.cancelAnimationFrame(n.rafId),n.rafId=null)}function eP(n){for(;n.effects.length>X2;)au(n,n.effects.shift())}function nP(n){n.effects.forEach(t=>au(n,t)),n.effects=[]}function au(n,t){var e,i,s,r;t&&(n.scene.remove(t.object),(i=(e=t.geometry)==null?void 0:e.dispose)==null||i.call(e),(r=(s=t.material)==null?void 0:s.dispose)==null||r.call(s))}function _a(n,t){n.isAiming!==t&&(n.isAiming=t,n.win.document.body.classList.toggle("tactical-payload-aiming",t))}function xh(n){var t;return n.enabled&&!!((t=n.drone)!=null&&t.isFPV)&&N0(n.scene)&&F0(n.camera)}function iP(n){const t=n.createElement("div");return t.className="tactical-payload-hud",t.setAttribute("aria-hidden","true"),t.innerHTML=['<div class="tactical-payload-reticle">',"  <span></span><span></span><span></span><span></span>","</div>",'<div class="tactical-payload-status">DEV EFFECT</div>'].join(""),n.body.appendChild(t),t}function sP(n){var t,e;(e=(t=n.hud)==null?void 0:t.remove)==null||e.call(t),n.hud=null}function rP(n){n.hud&&(n.hud.classList.remove("is-firing"),n.hud.offsetWidth,n.hud.classList.add("is-firing"))}function oP(n,t){var r;const e=new E,i=(r=t==null?void 0:t.mesh)==null?void 0:r.position;i?e.copy(i):e.copy(n.position);const s=new E;return n.getWorldDirection(s).normalize(),e.addScaledVector(s,5)}function aP(n){const t=Math.abs(n.y)>.9?new E(1,0,0):new E(0,1,0),e=new E().crossVectors(n,t).normalize(),i=new E().crossVectors(e,n).normalize();return{right:e,vertical:i}}function cP({right:n,vertical:t},e){const i=Math.random()*Math.PI*2,s=Math.random()*e;return n.clone().multiplyScalar(Math.cos(i)*s).addScaledVector(t,Math.sin(i)*s)}function lP(n){return String(n.bridgeTacticalSequence||G2).toLowerCase()}function Sp(n){var e,i,s,r,o,a,c;return new URLSearchParams(((e=n.location)==null?void 0:e.search)||"").get("devEffects")==="1"?((s=(i=n.sessionStorage)==null?void 0:i.setItem)==null||s.call(i,"bridge-dev-effects","1"),!0):n.bridgeDeveloperMode===!0||((o=(r=n.sessionStorage)==null?void 0:r.getItem)==null?void 0:o.call(r,"bridge-dev-effects"))==="1"||((c=(a=n.localStorage)==null?void 0:a.getItem)==null?void 0:c.call(a,"bridge-dev-effects"))==="1"}function N0(n){return!!(n!=null&&n.add&&(n!=null&&n.remove))}function F0(n){return!!(n!=null&&n.position&&(n!=null&&n.getWorldDirection))}function hP(n){const t=String((n==null?void 0:n.tagName)||"").toLowerCase();return!!(n!=null&&n.isContentEditable||t==="input"||t==="textarea"||t==="select")}function uP(){return typeof window>"u"?null:window}function Qa(n){var t,e;return((e=(t=n.win.performance)==null?void 0:t.now)==null?void 0:e.call(t))??Date.now()}const dP="bridge:inspection-capture",fP=()=>{};function pP(n={}){return new mP(n)}class mP{constructor(t={}){this.window=t.window||vP(t.root),this.liveFpvPreview=t.liveFpvPreview||null,this.runtimeStore=t.runtimeStore||null,this.getTelemetrySnapshot=t.getTelemetrySnapshot||null,this.getDetections=t.getDetections||null,this.onCapture=t.onCapture||fP,this.captureEventName=t.captureEventName||dP,this.flashEventName=t.flashEventName||Ym,this.latestDetections=Mp(this.window),this.active=!!this.window,this.captureCount=0,this.handleFlash=this.handleFlash.bind(this),this.handleDetections=this.handleDetections.bind(this),this.active&&t.autoStart!==!1&&this.start()}start(){return!this.active||this.started?this:(this.window.addEventListener(this.flashEventName,this.handleFlash),this.window.addEventListener(ir,this.handleDetections),this.started=!0,this)}stop(){return!this.active||!this.started?this:(this.window.removeEventListener(this.flashEventName,this.handleFlash),this.window.removeEventListener(ir,this.handleDetections),this.started=!1,this)}destroy(){this.stop(),this.active=!1}handleDetections(t){var i;const e=(i=t.detail)==null?void 0:i.detections;Array.isArray(e)&&(this.latestDetections=qe(e))}async handleFlash(t){var c;const e=yP(t.detail),i=this.readRuntimeSnapshot(),s=this.readTelemetrySnapshot(i),r=this.readDetections(i),o=await this.captureFrame(r),a=this.createCaptureRecord({flash:e,frame:o,telemetry:s,runtimeSnapshot:i,detections:r});return typeof((c=this.runtimeStore)==null?void 0:c.addCapture)=="function"&&this.runtimeStore.addCapture(a),this.dispatchCapture(a),this.onCapture(a),a}async captureFrame(t){var i;const e=(i=this.liveFpvPreview)==null?void 0:i.captureFrame;if(typeof e!="function")return{imageUrl:"",width:0,height:0,capturedAt:new Date().toISOString()};try{return await Promise.resolve(e.call(this.liveFpvPreview,{overlayDetections:t}))}catch(s){return console.warn("[FpvCaptureService] FPV capture failed.",s),{imageUrl:"",width:0,height:0,capturedAt:new Date().toISOString(),error:(s==null?void 0:s.message)||"capture-failed"}}}readRuntimeSnapshot(){var t,e;return typeof((t=this.runtimeStore)==null?void 0:t.snapshot)=="function"?qe(this.runtimeStore.snapshot()):qe(((e=this.window)==null?void 0:e.bridgeInspectionRuntime)||null)}readTelemetrySnapshot(t){var e,i;return typeof this.getTelemetrySnapshot=="function"?qe(this.getTelemetrySnapshot()):t!=null&&t.telemetry?qe(t.telemetry):t!=null&&t.resource?qe(t.resource):(e=this.window)!=null&&e.bridgeInspectionTelemetry?qe(this.window.bridgeInspectionTelemetry):(i=this.window)!=null&&i.bridgeDemoTelemetrySnapshot?qe(this.window.bridgeDemoTelemetrySnapshot):{}}readDetections(t){var i;if(typeof this.getDetections=="function"){const s=this.getDetections();if(Array.isArray(s))return qe(s)}if(Array.isArray((i=t==null?void 0:t.ai)==null?void 0:i.detections))return qe(t.ai.detections);const e=Mp(this.window);return e.length?(this.latestDetections=e,qe(e)):qe(this.latestDetections)}createCaptureRecord({flash:t,frame:e,telemetry:i,runtimeSnapshot:s,detections:r}){var u,d,p,v;this.captureCount+=1;const o=(e==null?void 0:e.capturedAt)||t.timestamp||new Date().toISOString(),a=r[0]||null,c=gP((u=s==null?void 0:s.ai)==null?void 0:u.defects,a==null?void 0:a.defectId),l=t.position||(s==null?void 0:s.position)||{},h=t.state||(s==null?void 0:s.flightState)||"";return{id:`CAP-FPV-${_P(o)}-${String(this.captureCount).padStart(3,"0")}`,source:"fpv-capture-service",imageUrl:(e==null?void 0:e.imageUrl)||"",width:Number((e==null?void 0:e.width)||0),height:Number((e==null?void 0:e.height)||0),capturedAt:o,state:h,position:U0(l),flash:t,telemetry:i||{},mission:qe((s==null?void 0:s.mission)||((d=this.window)==null?void 0:d.bridgeMissionSnapshot)||{}),weather:qe((s==null?void 0:s.weather)||((p=this.window)==null?void 0:p.bridgeWeatherSnapshot)||{}),safety:qe((s==null?void 0:s.safety)||((v=this.window)==null?void 0:v.bridgeFlightSafetyState)||{}),detectionId:(a==null?void 0:a.id)||"",defectId:(a==null?void 0:a.defectId)||(a==null?void 0:a.anchorId)||"",defect:c,bbox:(a==null?void 0:a.bbox)||null,label:(a==null?void 0:a.label)||(a==null?void 0:a.type)||"fpv-capture",severity:(a==null?void 0:a.severity)||"medium",detection:a,detections:qe(r),snapshot:{imageUrl:(e==null?void 0:e.imageUrl)||"",width:Number((e==null?void 0:e.width)||0),height:Number((e==null?void 0:e.height)||0),capturedAt:o,cameraId:"FPV-LIVE",telemetry:i||{}}}}dispatchCapture(t){return!this.window||typeof this.window.CustomEvent!="function"?!1:(this.window.dispatchEvent(new this.window.CustomEvent(this.captureEventName,{detail:t})),!0)}}function gP(n=[],t=""){const e=String(t||"").toUpperCase();return!e||!Array.isArray(n)?null:qe(n.find(i=>String(i.id||i.defectId||"").toUpperCase()===e)||null)}function vP(n){var t;return n!=null&&n.defaultView?n.defaultView:(t=n==null?void 0:n.ownerDocument)!=null&&t.defaultView?n.ownerDocument.defaultView:typeof window<"u"?window:null}function Mp(n){var e;const t=(e=n==null?void 0:n.bridgeAiDetections)==null?void 0:e.detections;return Array.isArray(t)?qe(t):[]}function yP(n={}){return{position:n.position?U0(n.position):null,state:n.state||"",timestamp:n.timestamp||new Date().toISOString()}}function U0(n={}){return{x:Number(n.x??0),y:Number(n.y??0),z:Number(n.z??0)}}function _P(n){return String(n||new Date().toISOString()).replace(/\D/g,"").slice(0,17)}function qe(n){return n==null?n:typeof structuredClone=="function"?structuredClone(n):JSON.parse(JSON.stringify(n))}const bh="bridge:inspection-runtime-change",O0="bridge:defect-selection-requested",xP=Object.freeze({flightState:"IDLE",position:Object.freeze({x:0,y:0,z:0}),mission:Object.freeze({phase:"待命",progress:0,waypointIndex:0,waypointTotal:0}),weather:Object.freeze({windSpeed:0,rainRate:0,temperatureC:0,humidity:0,visibility:0}),telemetry:Object.freeze({battery:0,signalQuality:0,rtkStatus:"FIXED"}),safety:Object.freeze({status:"clear",alerts:[]}),resource:Object.freeze({assets:[]}),ai:Object.freeze({detections:[]}),captures:Object.freeze([]),selectedDefect:null,updatedAt:""});function Ep(n){return JSON.parse(JSON.stringify(n,(t,e)=>{if(typeof e!="function"&&!(e!=null&&e.isObject3D||e!=null&&e.isMaterial||e!=null&&e.isBufferGeometry)&&!(t==="element"||t==="card"||t==="object"||t==="group"||t==="parent"))return e}))}function bP(){return typeof window<"u"?window:null}function wP(n={}){return{x:Number(n.x??0),y:Number(n.y??0),z:Number(n.z??0)}}function Tp(n={}){var t,e;return{condition:n.condition||"cloudy",windSpeed:Number(n.windSpeed??n.windSpeedMps??0),gustSpeed:Number(n.gustSpeed??0),rainRate:Number(n.rainRate??n.rainfall??0),temperatureC:Number(n.temperatureC??n.temperature??((t=n.dock)==null?void 0:t.temperature)??24),humidity:Number(n.humidity??n.dockHumidity??((e=n.dock)==null?void 0:e.humidity)??58),visibility:Number(n.visibility??n.visibilityKm??8)}}function Ap(n={}){return{id:n.id||"",phase:n.phase||"IDLE",progress:Number(n.progress??0),waypointIndex:Number(n.waypointIndex??0),waypointTotal:Number(n.waypointTotal??0),estimatedRemainingSec:Number(n.estimatedRemainingSec??0)}}function Cp(n={}){return{droneId:n.droneId||"M350-RTK-DEMO",battery:Number(n.battery??0),signalQuality:Number(n.signalQuality??n.networkMbps??0),signalBars:Number(n.signalBars??Math.max(1,Math.min(4,Math.ceil(Number(n.signalQuality??88)/25)))),rtkStatus:n.rtkStatus||"FIXED",satellites:Number(n.satellites??0),altitude:Number(n.altitude??0),speed:Number(n.speed??0),dock:n.dock||{}}}function Pp(n={}){return{assets:Array.isArray(n.assets)?n.assets:[],updatedAt:n.updatedAt||new Date().toISOString()}}function Rp(n={}){const t=Array.isArray(n.alerts)?n.alerts:[];return{...n,status:n.status||n.level||"clear",reason:n.reason||n.message||"",alerts:t}}function ol(n={}){const t=Array.isArray(n)?n:n.detections;return{detections:Array.isArray(t)?t:[],defects:Array.isArray(n.defects)?n.defects:[],provider:n.provider||n.source||"runtime",processedAt:n.processedAt||new Date().toISOString()}}function SP(n={}){var e,i,s,r,o,a,c,l;return{id:n.id||`CAP-${Date.now()}-${Math.round(Math.random()*999)}`,defectId:n.defectId||((e=n.defect)==null?void 0:e.id)||"",detectionId:n.detectionId||((i=n.detection)==null?void 0:i.id)||"",imageUrl:n.imageUrl||((s=n.snapshot)==null?void 0:s.imageUrl)||"",capturedAt:n.capturedAt||new Date().toISOString(),bbox:n.bbox||((r=n.detection)==null?void 0:r.bbox)||null,label:n.label||((o=n.detection)==null?void 0:o.label)||((a=n.defect)==null?void 0:a.label)||"异常",severity:n.severity||((c=n.defect)==null?void 0:c.severity)||((l=n.detection)==null?void 0:l.severity)||"medium",telemetry:n.telemetry||{},weather:n.weather||{},safety:n.safety||{},defect:n.defect||null}}function MP(n={}){const t=n.window||bP(),e=Ep(xP),i=new Set;function s(a="update"){e.updatedAt=new Date().toISOString();const c=o.snapshot();return c.reason=a,t&&(t.bridgeInspectionRuntime=c,typeof t.CustomEvent=="function"&&t.dispatchEvent(new t.CustomEvent(bh,{detail:c}))),i.forEach(l=>l(c)),c}function r(a={},c="merge"){return Object.entries(a).forEach(([l,h])=>{h!==void 0&&(e[l]=h)}),s(c)}const o={subscribe(a){return typeof a!="function"?()=>{}:(i.add(a),a(o.snapshot()),()=>i.delete(a))},snapshot(){return Ep(e)},syncFrame({drone:a,simulation:c,safety:l,resource:h,ai:f}={}){var p,v,m,g,y;const u=(p=a==null?void 0:a.mesh)!=null&&p.position?wP(a.mesh.position):e.position,d={flightState:(a==null?void 0:a.state)||e.flightState,position:u};return c!=null&&c.weather&&(d.weather=Tp({...c.weather,temperatureC:(m=(v=c.telemetry)==null?void 0:v.dock)==null?void 0:m.temperature,humidity:(y=(g=c.telemetry)==null?void 0:g.dock)==null?void 0:y.humidity})),c!=null&&c.mission&&(d.mission=Ap(c.mission)),c!=null&&c.telemetry&&(d.telemetry=Cp(c.telemetry)),l&&(d.safety=Rp(l)),h&&(d.resource=Pp(h)),f&&(d.ai=ol(f)),r(d,"frame")},updateSimulation(a={}){var c,l,h,f;return r({weather:Tp({...a.weather,temperatureC:(l=(c=a.telemetry)==null?void 0:c.dock)==null?void 0:l.temperature,humidity:(f=(h=a.telemetry)==null?void 0:h.dock)==null?void 0:f.humidity}),telemetry:Cp(a.telemetry),mission:Ap(a.mission),ai:ol(a.ai)},"simulation")},updateSafety(a={}){return r({safety:Rp(a)},"safety")},updateResource(a={}){return r({resource:Pp(a)},"resource")},updateAi(a={}){return r({ai:ol(a)},"ai")},addCapture(a={}){const c=SP(a);return e.captures=[c,...e.captures.filter(l=>l.id!==c.id)].slice(0,80),s("capture"),c},selectDefect(a,c={}){var h;const l={id:String(a||((h=c.defect)==null?void 0:h.id)||"").toUpperCase(),...c,selectedAt:new Date().toISOString()};return e.selectedDefect=l,s("select-defect"),t&&typeof t.CustomEvent=="function"&&t.dispatchEvent(new t.CustomEvent(O0,{detail:l})),l}};return s("init"),o}const EP="桥梁巡检病害报告";function TP(){return typeof document<"u"?document:null}function tc(){return typeof window<"u"?window:null}function se(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function lr(n){if(!n)return"无数据";const t=new Date(n);return Number.isNaN(t.getTime())?String(n):t.toLocaleString("zh-CN",{hour12:!1})}function AP(n={}){return`X ${n.x??0}, Y ${n.y??0}, Z ${n.z??0}`}function CP(n={}){return`${n.longitude??0}, ${n.latitude??0}, ${n.altitude??0}m`}function B0(n){return{low:"低",medium:"中",high:"高",critical:"严重"}[n]||n||"N/A"}function z0(n={}){const t=n.flightState||n.position||n.weather?n:null;return{capturedAt:n.capturedAt||new Date().toISOString(),droneState:n.droneState||n.drone||(t?{state:n.flightState,position:n.position}:{}),environmentStatus:n.environmentStatus||n.environment||{},flightSafety:n.flightSafety||n.safety||{},resourceTelemetry:n.resourceTelemetry||n.resources||{},mission:n.mission||{}}}function k0(n){var r;const t=tc(),e=typeof(n==null?void 0:n.snapshot)=="function"?n.snapshot():null,i=(n==null?void 0:n.drone)||(t==null?void 0:t.myDrone),s=(n==null?void 0:n.environmentStatus)||(t==null?void 0:t.bridgeEnvironmentStatus)||{};return z0({capturedAt:new Date().toISOString(),droneState:(n==null?void 0:n.droneState)||{state:i==null?void 0:i.state,isFPV:!!(i!=null&&i.isFPV),position:(r=i==null?void 0:i.mesh)!=null&&r.position?{x:i.mesh.position.x,y:i.mesh.position.y,z:i.mesh.position.z}:void 0},environmentStatus:s,flightSafety:(n==null?void 0:n.flightSafety)||(t==null?void 0:t.bridgeFlightSafetyState)||{},resourceTelemetry:e||(t==null?void 0:t.bridgeInspectionTelemetry)||{},mission:(n==null?void 0:n.mission)||{}})}function PP(n=[]){return n.map((t,e)=>({id:t.id||`AI-${e+1}`,defectId:t.defectId||t.anchorId||"无数据",label:t.label||t.type||"surface-defect",confidence:Number(t.confidence??0),severity:t.severity||"medium",bbox:t.bbox||{},source:t.source||"mock",processedAt:t.processedAt||t.capturedAt||""}))}function RP(n={}){var h,f,u;const t=Array.isArray(n.captures)?[...n.captures]:Array.isArray((h=n.telemetrySnapshot)==null?void 0:h.captures)?[...n.telemetrySnapshot.captures]:[],e=new Map(t.map(d=>{var p;return[d.defectId||((p=d.defect)==null?void 0:p.id),d]})),i=(n.defects||to()).map(d=>{var m,g;const p=On(d),v=e.get(p.id);return v!=null&&v.imageUrl?On({...p,snapshot:{imageUrl:v.imageUrl,cameraId:"M350-RTK-FPV",capturedAt:v.capturedAt,missionId:((g=(m=v.telemetry)==null?void 0:m.mission)==null?void 0:g.id)||p.snapshot.missionId,telemetry:v.telemetry||p.snapshot.telemetry}}):p}),s=z0(n.telemetrySnapshot||k0(n.telemetrySource)),r=Array.isArray(n.workflowHistory)?[...n.workflowHistory]:[],o=tc(),a=PP(n.aiDetections||((f=o==null?void 0:o.bridgeAiDetections)==null?void 0:f.detections)||[]),c=Array.isArray(n.taskHistory)?[...n.taskHistory]:r,l=Array.isArray(n.safetyEvents)?n.safetyEvents:[s.flightSafety].filter(d=>Object.keys(d||{}).length);return{title:n.title||EP,generatedAt:n.generatedAt||new Date().toISOString(),defects:i,telemetrySnapshot:s,workflowHistory:r,captures:t,aiDetections:a,taskHistory:c,safetyEvents:l,weatherSnapshot:n.weatherSnapshot||((u=n.telemetrySnapshot)==null?void 0:u.weather)||{condition:"模拟晴好",windSpeedMps:4.2,temperatureC:24,humidity:58,visibilityKm:8},meta:{author:n.author||"桥梁巡检 Demo",version:n.version||"1.0"}}}function ra(n={}){const t=Object.entries(n).map(([e,i])=>{const s=typeof i=="object"&&i!==null?JSON.stringify(i):i;return`<tr><th>${se(e)}</th><td>${se(s??"N/A")}</td></tr>`});return t.length?t.join(""):'<tr><td colspan="2">无数据</td></tr>'}function IP(n){return n.map(t=>`
    <tr>
      <td><strong>${se(t.id)}</strong></td>
      <td><span class="severity severity-${se(t.severity)}">${se(B0(t.severity))}</span></td>
      <td>${se(AP(t.localPosition))}</td>
      <td>${se(CP(t.geoPosition))}</td>
      <td>${se(t.workflowStage)}</td>
      <td>${se(t.snapshot.cameraId||"无数据")}</td>
      <td>${se(lr(t.snapshot.capturedAt))}</td>
    </tr>
  `).join("")}function Ip(n){return n.length?n.map(t=>{var e;return`
    <tr>
      <td>${se(((e=t.card)==null?void 0:e.id)||t.id||"无数据")}</td>
      <td>${se(t.fromStage||"无数据")}</td>
      <td>${se(t.toStage||t.workflowStage||"无数据")}</td>
      <td>${se(lr(t.movedAt||t.requestedAt||t.time))}</td>
      <td>${se(t.source||"workflow")}</td>
    </tr>
  `}).join(""):'<tr><td colspan="5">暂无流转记录</td></tr>'}function DP(n){return n.length?n.map(t=>`
    <tr>
      <td>${se(t.id)}</td>
      <td>${se(t.defectId)}</td>
      <td>${se(t.label)}</td>
      <td>${se(Math.round(t.confidence*100))}%</td>
      <td>${se(B0(t.severity))}</td>
      <td>${se(JSON.stringify(t.bbox||{}))}</td>
      <td>${se(lr(t.processedAt))}</td>
    </tr>
  `).join(""):'<tr><td colspan="7">暂无 AI 检测结果</td></tr>'}function LP(n){return n.length?n.map((t,e)=>`
    <tr>
      <td>${se(t.id||`SAFE-${e+1}`)}</td>
      <td>${se(t.status||t.level||"无数据")}</td>
      <td>${se(t.reason||t.message||"无数据")}</td>
      <td>${se(lr(t.time||t.updatedAt||t.capturedAt))}</td>
    </tr>
  `).join(""):'<tr><td colspan="4">暂无安全事件</td></tr>'}function NP(n,t){const e=n.length?n:t.map(i=>({id:i.id,defectId:i.id,imageUrl:i.snapshot.imageUrl,label:i.label,capturedAt:i.snapshot.capturedAt,telemetry:i.snapshot.telemetry,bbox:i.bbox})).filter(i=>i.imageUrl);return e.length?e.map(i=>`
    <div class="snapshot-card">
      <h3>${se(i.defectId||i.id)}</h3>
      ${i.imageUrl?`<img src="${se(i.imageUrl)}" alt="${se(i.defectId||i.id)} snapshot">`:""}
      <p><strong>类型:</strong> ${se(i.label||"异常")}</p>
      <p><strong>采集时间:</strong> ${se(lr(i.capturedAt))}</p>
      <p><strong>检测框:</strong> ${se(JSON.stringify(i.bbox||{}))}</p>
    </div>
  `).join(""):"暂无抓拍"}function FP(){return`
    body { margin: 0; color: #172033; background: #f6f8fb; font-family: Arial, "Microsoft YaHei", sans-serif; }
    .report-page { max-width: 1120px; margin: 0 auto; padding: 32px; }
    .report-header { border-bottom: 3px solid #2563eb; padding-bottom: 16px; margin-bottom: 24px; }
    .report-header h1 { margin: 0 0 8px; font-size: 28px; letter-spacing: 0; }
    .report-meta { color: #526071; font-size: 13px; }
    .report-section { background: #fff; border: 1px solid #d9e1ec; margin: 0 0 20px; padding: 18px; }
    .report-section h2 { margin: 0 0 14px; font-size: 18px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th, td { border: 1px solid #d9e1ec; padding: 9px 10px; text-align: left; vertical-align: top; }
    th { background: #eef3f9; color: #243044; }
    .severity { display: inline-block; min-width: 64px; padding: 3px 8px; border-radius: 4px; text-align: center; font-weight: 700; }
    .severity-low { background: #dcfce7; color: #166534; }
    .severity-medium { background: #fef3c7; color: #92400e; }
    .severity-high { background: #fee2e2; color: #991b1b; }
    .severity-critical { background: #111827; color: #fff; }
    .snapshot-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
    .snapshot-card { border: 1px solid #d9e1ec; padding: 12px; background: #fbfdff; }
    .snapshot-card img { width: 100%; max-height: 180px; object-fit: cover; border: 1px solid #d9e1ec; }
    .section-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; }
    @media print { body { background: #fff; } .report-page { padding: 0; } .report-section { break-inside: avoid; } }
  `}function ec(n={}){const t=RP(n),e=NP(t.captures,t.defects);return`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${se(t.title)}</title>
  <style>${FP()}</style>
</head>
<body>
  <main class="report-page">
    <header class="report-header">
      <h1>${se(t.title)}</h1>
      <div class="report-meta">生成时间: ${se(lr(t.generatedAt))} | 作者: ${se(t.meta.author)} | 版本: ${se(t.meta.version)}</div>
    </header>

    <section class="report-section">
      <h2>病害清单</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>等级</th><th>局部坐标</th><th>地理坐标</th><th>流程阶段</th><th>相机</th><th>采集时间</th>
          </tr>
        </thead>
        <tbody>${IP(t.defects)}</tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>遥测快照</h2>
      <div class="section-grid">
        <table><tbody>${ra(t.telemetrySnapshot.droneState)}</tbody></table>
        <table><tbody>${ra(t.telemetrySnapshot.environmentStatus)}</tbody></table>
        <table><tbody>${ra(t.telemetrySnapshot.resourceTelemetry)}</tbody></table>
      </div>
    </section>

    <section class="report-section">
      <h2>AI 检测结果</h2>
      <table>
        <thead><tr><th>检测</th><th>病害</th><th>类型</th><th>置信度</th><th>等级</th><th>检测框</th><th>处理时间</th></tr></thead>
        <tbody>${DP(t.aiDetections)}</tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>工作流历史</h2>
      <table>
        <thead><tr><th>病害/卡片</th><th>来源阶段</th><th>目标阶段</th><th>时间</th><th>来源</th></tr></thead>
        <tbody>${Ip(t.workflowHistory)}</tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>任务历史与安全事件</h2>
      <div class="section-grid">
        <table>
          <thead><tr><th>任务/卡片</th><th>来源阶段</th><th>目标阶段</th><th>时间</th><th>来源</th></tr></thead>
          <tbody>${Ip(t.taskHistory)}</tbody>
        </table>
        <table>
          <thead><tr><th>ID</th><th>状态</th><th>原因</th><th>时间</th></tr></thead>
          <tbody>${LP(t.safetyEvents)}</tbody>
        </table>
      </div>
    </section>

    <section class="report-section">
      <h2>天气快照</h2>
      <table><tbody>${ra(t.weatherSnapshot)}</tbody></table>
    </section>

    <section class="report-section">
      <h2>抓拍图像</h2>
      <div class="snapshot-grid">${e||"暂无抓拍"}</div>
    </section>
  </main>
</body>
</html>`}function V0(n,t,e){var c;const i=TP(),s=tc();if(!i||!s||typeof Blob>"u"||!s.URL)return{ok:!1,reason:"browser-download-unavailable"};const r=new Blob([n],{type:e}),o=s.URL.createObjectURL(r),a=i.createElement("a");return a.href=o,a.download=t,a.style.display="none",(c=i.body)==null||c.appendChild(a),a.click(),a.remove(),s.setTimeout(()=>s.URL.revokeObjectURL(o),250),{ok:!0,filename:t}}function UP(n={}){const t=ec(n);return V0(t,n.filename||`bridge-inspection-report-${Date.now()}.html`,"text/html;charset=utf-8")}function OP(n={}){const t=ec(n);return V0(t,n.filename||`bridge-inspection-report-${Date.now()}.doc`,"application/msword;charset=utf-8")}function BP(n={}){const t=tc();if(!t||typeof t.open!="function")return{ok:!1,reason:"window-open-unavailable"};const e=t.open("","_blank","noopener,noreferrer,width=1200,height=800");return e?(e.document.open(),e.document.write(ec(n)),e.document.close(),e.focus(),e.setTimeout(()=>e.print(),300),{ok:!0}):{ok:!1,reason:"popup-blocked"}}const H0="bridge:defect-highlight-requested",al="bridge:workflow-card-moved",Dp="bridge:inspection-capture",Or="DEF-102",zP=()=>{};function wh(n){return n&&n.nodeType===9?n:n&&n.ownerDocument?n.ownerDocument:typeof document<"u"?document:null}function G0(n){return n!=null&&n.defaultView?n.defaultView:typeof window<"u"?window:null}function Lp(n,t,e){return!n||typeof n.CustomEvent!="function"?!1:(n.dispatchEvent(new n.CustomEvent(t,{detail:e})),!0)}function io(n){return n?n.textContent.trim().replace(/\s+/g," "):""}function Np(n={}){return{active:!1,destroy:zP,requestHighlight:()=>!1,downloadHtmlReport:()=>({ok:!1,reason:"workflow-enhancement-inactive"}),downloadWordReport:()=>({ok:!1,reason:"workflow-enhancement-inactive"}),generateReportHtml:()=>"",printReport:()=>({ok:!1,reason:"workflow-enhancement-inactive"}),getWorkflowHistory:()=>[],...n}}function kP(n){if(!n||typeof n.querySelectorAll!="function")return null;const t=n.querySelector("#view-workflow")||n;return Array.from(t.querySelectorAll(".kanban-card")).find(e=>io(e).includes(`#${Or}`))||null}function Br(n){var s,r,o;const t=(s=n==null?void 0:n.dataset)==null?void 0:s.workflowStage;if(t)return t;const e=(r=n==null?void 0:n.closest)==null?void 0:r.call(n,".kanban-col"),i=io((o=e==null?void 0:e.querySelector)==null?void 0:o.call(e,".kanban-title, h3"));return/Data/i.test(i)?"data":/Processing/i.test(i)?"processing":/Verification/i.test(i)?"verification":/Tickets/i.test(i)?"tickets":"verification"}function VP(n,t){t&&(t.classList.add("defect-highlight-requested"),n==null||n.setTimeout(()=>t.classList.remove("defect-highlight-requested"),1400))}function oa(n,t){var s;const e=typeof n.getTelemetrySnapshot=="function"?n.getTelemetrySnapshot():k0(n.telemetrySource),i=G0(wh(n.root));return{defects:t.defects,telemetrySnapshot:e,workflowHistory:t.workflowHistory,taskHistory:t.workflowHistory,aiDetections:t.aiDetections.length?t.aiDetections:((s=i==null?void 0:i.bridgeAiDetections)==null?void 0:s.detections)||[],captures:t.captures,safetyEvents:n.safetyEvents||[i==null?void 0:i.bridgeFlightSafetyState].filter(Boolean),weatherSnapshot:n.weatherSnapshot||(i==null?void 0:i.bridgeWeatherSnapshot)||{condition:"模拟晴好",windSpeedMps:4.2,temperatureC:24,humidity:58,visibilityKm:8},title:n.reportTitle,author:n.reportAuthor}}function HP(n,t){if(!n||n.querySelector(".defect-report-actions"))return;const e=n.ownerDocument.createElement("div");return e.className="defect-report-actions",e.innerHTML=`
    <button type="button" class="defect-report-btn" data-report-action="html">导出 HTML</button>
    <button type="button" class="defect-report-btn" data-report-action="doc">Word</button>
    <button type="button" class="defect-report-btn" data-report-action="print">打印</button>
  `,e.addEventListener("click",i=>{const s=i.target.closest("[data-report-action]");if(!s)return;i.preventDefault(),i.stopPropagation();const r=s.dataset.reportAction;r==="html"&&t.downloadHtmlReport(),r==="doc"&&t.downloadWordReport(),r==="print"&&t.printReport()}),n.appendChild(e),()=>e.remove()}function GP(n,t="processing"){const e=n.querySelector("#view-workflow")||n,i=Array.from(e.querySelectorAll(".kanban-col"));return i.find(s=>Br({closest:()=>s})===t)||i.find(s=>/AI|Processing/i.test(io(s.querySelector(".kanban-title, h3"))))||i[0]||null}function W0(n){const t=WP(n.label||n.type||"surface-defect");return`#${n.id}: ${t.replace(/-/g," ")}`}function WP(n){return{crack:"裂缝",corrosion:"锈蚀",spalling:"剥落",debris:"抛洒物","surface-defect":"表面病害","fpv-capture":"FPV 抓拍"}[n]||n}function qP(n,t){var s,r;const e=n.createElement("div");e.className="kanban-card warning-card ai-defect-card",e.draggable=!0,e.tabIndex=0,e.setAttribute("role","button"),e.dataset.workflowCardId=t.id,e.dataset.aiDefectCard="true",e.dataset.workflowStage=t.workflowStage;const i=(s=t.snapshot)!=null&&s.imageUrl?`<img src="${t.snapshot.imageUrl}" class="kanban-thumb" alt="${t.id}">`:"";return e.innerHTML=`
    ${i}
    <h4>${W0(t)}</h4>
    <p>AI 置信度: ${Math.round((t.confidence||0)*100)}%</p>
    <p>锚点: X ${Math.round(t.localPosition.x)}, Y ${Math.round(t.localPosition.y)}, Z ${Math.round(t.localPosition.z)}</p>
    <p>${(r=t.snapshot)!=null&&r.capturedAt?new Date(t.snapshot.capturedAt).toLocaleString("zh-CN",{hour12:!1}):"等待抓拍"}</p>
  `,e}function XP(n={}){var s,r,o,a;const t=String(n.defectId||((s=n.defect)==null?void 0:s.id)||`DEF-CAP-${n.id||Date.now()}`).toUpperCase(),e=n.detection||((r=n.detections)==null?void 0:r[0])||{},i=n.defect||{};return On({...i,id:t,type:n.label||e.label||i.type||"surface-defect",label:n.label||e.label||i.label||"异常抓拍",severity:n.severity||e.severity||i.severity||"medium",confidence:e.confidence??i.confidence??.86,bbox:n.bbox||e.bbox||i.bbox,localPosition:i.localPosition||e.localPosition||n.localPosition||{},geoPosition:i.geoPosition||e.geoPosition||n.geoPosition||{},snapshot:{imageUrl:n.imageUrl,cameraId:"M350-RTK-FPV",capturedAt:n.capturedAt,missionId:((a=(o=n.telemetry)==null?void 0:o.mission)==null?void 0:a.id)||"DEMO-INSPECTION",telemetry:n.telemetry||{}},workflowStage:i.workflowStage||"verification"})}function $P(n={}){const t=n.root||wh(),e=wh(t),i=G0(e);if(!e||!i)return Np();const s=kP(t);if(!s)return Np({reason:"defect-card-not-found"});const r=On({...d0(Or,n.defects||to()),workflowStage:Br(s)}),o={defects:[r,...(n.defects||to()).filter(_=>_.id!==Or)],aiDetections:[],captures:[],workflowHistory:Array.isArray(n.workflowHistory)?[...n.workflowHistory]:[]},a=[],c=new Map;let l=null;const h=()=>{const _=o.defects.find(T=>T.id===Or)||r;return On({..._,workflowStage:Br(s)})},f=_=>On(o.defects.find(T=>T.id===_)||h()),u=(_,T)=>{const P=On(_),R={id:P.id,defect:P,localPosition:P.localPosition,geoPosition:P.geoPosition,snapshot:P.snapshot,workflowStage:P.workflowStage,source:T,requestedAt:new Date().toISOString()},U=c.get(P.id);return VP(i,(U==null?void 0:U.card)||s),Lp(i,H0,R),typeof n.onHighlightRequested=="function"&&n.onHighlightRequested(R),!0},d=(_,T)=>{const P=()=>u(f(T.id),"ai-defect-card-click"),R=N=>{N.key!=="Enter"&&N.key!==" "||(N.preventDefault(),u(f(T.id),"ai-defect-card-keyboard"))},U=N=>{l=T.id,N.dataTransfer&&(N.dataTransfer.effectAllowed="move",N.dataTransfer.setData("text/plain",T.id)),_.style.opacity="0.62"},O=()=>{l=null,_.style.opacity=""};_.addEventListener("click",P),_.addEventListener("keydown",R),_.addEventListener("dragstart",U),_.addEventListener("dragend",O),a.push(()=>{_.removeEventListener("click",P),_.removeEventListener("keydown",R),_.removeEventListener("dragstart",U),_.removeEventListener("dragend",O)})},p=(_=[])=>{_.map(On).forEach(T=>{var O;o.defects=[T,...o.defects.filter(N=>N.id!==T.id)];const P=c.get(T.id);if(P){P.card.querySelector("h4").textContent=W0(T);const N=P.card.querySelector(".kanban-thumb");N&&((O=T.snapshot)!=null&&O.imageUrl)&&(N.src=T.snapshot.imageUrl),P.card.dataset.workflowStage=T.workflowStage;return}const R=GP(t,T.workflowStage);if(!R)return;const U=qP(e,T);R.appendChild(U),c.set(T.id,{card:U}),d(U,T)})},v={active:!0,card:s,getWorkflowHistory(){return[...o.workflowHistory]},requestHighlight(_="workflow-enhancement"){return u(h(),_)},generateReportHtml(_={}){return ec({...oa(n,o),..._})},downloadHtmlReport(_={}){return UP({...oa(n,o),..._})},downloadWordReport(_={}){return OP({...oa(n,o),..._})},printReport(_={}){return BP({...oa(n,o),..._})},destroy(){a.splice(0).forEach(_=>_()),s.classList.remove("defect-highlight-requested"),c.forEach(({card:_})=>_.remove()),c.clear()}},m=()=>v.requestHighlight("def-102-card-click"),g=_=>{_.key!=="Enter"&&_.key!==" "||v.requestHighlight("def-102-card-keyboard")},y=_=>{var P,R,U;const T=((R=(P=_.detail)==null?void 0:P.card)==null?void 0:R.id)||((U=_.detail)==null?void 0:U.id);T!==Or&&!c.has(T)||(o.workflowHistory.push(_.detail),o.defects=o.defects.map(O=>O.id===T?On({...O,workflowStage:_.detail.toStage||Br(s)}):O))},x=_=>{const T=_.detail||{};o.aiDetections=Array.isArray(T.detections)?[...T.detections]:[],p(T.defects||[])},b=_=>{const T=_.detail||{},P=T.id||`${T.defectId}-${T.capturedAt}`;o.captures=[T,...o.captures.filter(U=>(U.id||`${U.defectId}-${U.capturedAt}`)!==P)].slice(0,80);const R=XP(T);o.aiDetections=[{id:T.detectionId||`DET-${P}`,defectId:R.id,label:R.label,confidence:R.confidence||.86,severity:R.severity,bbox:T.bbox||{},processedAt:T.capturedAt,source:"fpv-capture"},...o.aiDetections.filter(U=>U.defectId!==R.id)],p([R])},S=_=>{if(!l)return;const T=_.currentTarget,P=c.get(l);if(!P)return;_.preventDefault();const R=P.card.dataset.workflowStage||"",U=Br({closest:()=>T});T.appendChild(P.card),P.card.dataset.workflowStage=U,Lp(i,al,{card:{id:l,title:io(P.card.querySelector("h4")),stage:U,text:io(P.card)},fromStage:R,toStage:U,movedAt:new Date().toISOString(),source:"ai-workflow-enhancement"})},M=_=>{l&&(_.preventDefault(),_.dataTransfer&&(_.dataTransfer.dropEffect="move"))};s.addEventListener("click",m),s.addEventListener("keydown",g),i.addEventListener(al,y),i.addEventListener(ir,x),i.addEventListener(Dp,b),a.push(()=>s.removeEventListener("click",m)),a.push(()=>s.removeEventListener("keydown",g)),a.push(()=>i.removeEventListener(al,y)),a.push(()=>i.removeEventListener(ir,x)),a.push(()=>i.removeEventListener(Dp,b)),Array.from((t.querySelector("#view-workflow")||t).querySelectorAll(".kanban-col")).forEach(_=>{_.addEventListener("drop",S),_.addEventListener("dragover",M),a.push(()=>{_.removeEventListener("drop",S),_.removeEventListener("dragover",M)})});const D=HP(s,v);return D&&a.push(D),v}const Sh=()=>{};function jP(n){return n&&n.nodeType===9?n:n!=null&&n.ownerDocument?n.ownerDocument:typeof document<"u"?document:null}function YP(n){return(n==null?void 0:n.defaultView)||(typeof window<"u"?window:null)}function bi(n,t=0,e="--"){const i=Number(n);return Number.isFinite(i)?i.toFixed(t):e}function KP(n,t=0){return`${bi(n,t)}%`}function ZP(n){const t=Number(n);return Number.isFinite(t)?`${Math.max(1,Math.min(4,Math.ceil(t/25)))}/4`:"4/4"}function Fp(n){const t=Math.max(0,Math.floor(Number(n)||0)),e=String(Math.floor(t/60)).padStart(2,"0"),i=String(t%60).padStart(2,"0");return`00:${e}:${i}`}function JP(n=""){return{IDLE:"待命",TAKEOFF:"起飞",INSPECTION:"巡检中",RETURN_HOME:"返航",AUTO_NAV:"自动巡检",MANUAL:"手动接管",PHOTOGRAPHING:"拍照中"}[n]||n||"待命"}function QP(n=""){return{crack:"裂缝",corrosion:"锈蚀",spalling:"剥落",debris:"抛洒物","fpv-capture":"FPV 抓拍",defect:"异常"}[String(n).toLowerCase()]||n||"异常抓拍"}function xn(n,t,e){const i=n.querySelector(t);i&&(i.textContent=e)}function tR(n,t=[],e=Sh){const i=n.querySelector("[data-ai-feed-list]");if(i){if(!t.length){i.innerHTML='<div class="ai-feed-empty">等待无人机发现异常并抓拍</div>';return}i.innerHTML=t.slice(0,8).map(s=>`
    <button type="button" class="ai-feed-card" data-capture-id="${s.id}">
      ${s.imageUrl?`<img src="${s.imageUrl}" class="ai-thumb" alt="${s.label}">`:'<span class="ai-thumb ai-thumb-empty"></span>'}
      <div class="ai-feed-info">
        <div class="ai-feed-title">${QP(s.label)}</div>
        <div class="ai-feed-meta">${new Date(s.capturedAt).toLocaleString("zh-CN",{hour12:!1})}</div>
      </div>
    </button>
  `).join(""),i.querySelectorAll("[data-capture-id]").forEach(s=>{s.addEventListener("click",()=>{const r=t.find(o=>o.id===s.dataset.captureId);r&&e(r)},{once:!0})})}}function eR(n={}){var c,l,h,f;const t=jP(n.root),e=YP(t),i=t==null?void 0:t.getElementById("view-flight-control");if(!t||!e||!i)return{active:!1,render:Sh,destroy:Sh};const s=((l=(c=e.performance)==null?void 0:c.now)==null?void 0:l.call(c))??Date.now(),r=(u={})=>{var _,T,P,R,U,O;const d=u||{},p=((P=(T=(_=d.resource)==null?void 0:_.assets)==null?void 0:T.find)==null?void 0:P.call(T,N=>N.type==="drone"))||{},v=d.telemetry||{},m=v.battery??p.battery,g=v.signalQuality??p.signalQuality??p.networkMbps,y=d.mission||{},x=d.weather||{},b=d.position||{},S=d.captures||[],M=((((U=(R=e.performance)==null?void 0:R.now)==null?void 0:U.call(R))??Date.now())-s)/1e3;xn(i,"[data-fpv-record-time]",`录制 ${Fp(M)}`),xn(i,"[data-fpv-z]",`Z: ${bi(b.y,1)}m`),xn(i,"[data-telemetry-altitude]",bi(b.y,1)),xn(i,"[data-telemetry-distance]",bi(((O=d.safety)==null?void 0:O.distance)??y.distanceM??0,1)),xn(i,"[data-telemetry-battery]",bi(m??68,0)),xn(i,"[data-telemetry-signal]",ZP(g??88)),xn(i,"[data-dock-wind]",`${bi(x.windSpeed,1)} m/s`),xn(i,"[data-dock-rain]",`${bi(x.rainRate,1)} mm`),xn(i,"[data-dock-temp]",`${bi(x.temperatureC,1)}°C`),xn(i,"[data-dock-humidity]",`${bi(x.humidity,0)}%`),xn(i,"[data-mission-time]",`已飞行: ${Fp(M)} (${JP(y.phase||d.flightState)})`),xn(i,"[data-mission-percent]",KP(y.progress??0,0));const D=i.querySelector("[data-timeline-progress]");D&&(D.style.width=`${Math.max(0,Math.min(100,Number(y.progress||0)))}%`),xn(i,"[data-ai-capture-count]",`异常抓拍 (${S.length})`),tR(i,S,N=>{var L;(L=n.onSelectCapture)==null||L.call(n,N)})},o=u=>r(u.detail);e.addEventListener(bh,o);const a=e.setInterval(()=>{var u,d;return r(((d=(u=n.store)==null?void 0:u.snapshot)==null?void 0:d.call(u))||e.bridgeInspectionRuntime)},500);return r(((f=(h=n.store)==null?void 0:h.snapshot)==null?void 0:f.call(h))||e.bridgeInspectionRuntime||{}),{active:!0,render:r,destroy(){e.clearInterval(a),e.removeEventListener(bh,o)}}}const Up={"pylon-1":new E(-250,110,140),"pylon-2":new E(250,110,140),"cable-left":new E(-150,85,110),"pier-3":new E(0,45,160)};function nR({drone:n,pathVisualizer:t,dockLaunchController:e,camera:i,bridgeGroup:s,terrainGroup:r}){const o=()=>t.update();iR(n,o),sR(n,o),rR(n,e),oR(n),aR({drone:n,camera:i,bridgeGroup:s,terrainGroup:r,updatePath:o}),window.updatePathVisualization=o,window.setTimeout(o,500)}function iR(n,t){document.querySelectorAll(".node-item").forEach(e=>{e.addEventListener("click",()=>{const i=e.getAttribute("data-target");Up[i]&&(n.addWaypoint(Up[i]),t())})})}function sR(n,t){n.onStateChange=e=>{const i=document.getElementById("btn-resume-mission"),s=document.getElementById("btn-start-mission");i&&(e==="MANUAL"&&n.waypoints.length>0?i.classList.remove("hidden"):i.classList.add("hidden")),s&&(e!=="IDLE"?s.classList.add("hidden"):n.waypoints.length>0&&s.classList.remove("hidden")),t()}}function rR(n,t){const e=document.getElementById("btn-start-mission");e&&e.addEventListener("click",async()=>{e.disabled=!0,e.textContent="🚁 机巢开盖起飞中",(t?await t.startLaunch():!0)&&n.startMission(),e.disabled=!1,e.textContent="✈️ 起飞并执行任务"});const i=document.getElementById("btn-resume-mission");i&&i.addEventListener("click",()=>n.resumeMission())}function oR(n){const t=document.getElementById("btn-toggle-fpv"),e=document.getElementById("fpv-instructions");t&&t.addEventListener("click",()=>{n.toggleView()?(document.body.classList.add("fpv-mode"),t.textContent="💻 退出 FPV",t.classList.replace("secondary-btn","danger-btn"),e==null||e.classList.remove("hidden")):(document.body.classList.remove("fpv-mode"),t.textContent="💻 切换第一人称 (FPV)",t.classList.replace("danger-btn","secondary-btn"),e==null||e.classList.add("hidden"))})}function aR({drone:n,camera:t,bridgeGroup:e,terrainGroup:i,updatePath:s}){const r=new ch,o=new ot;window.addEventListener("dblclick",a=>{const c=document.getElementById("view-flight-control");if(!(c!=null&&c.classList.contains("active"))||n.isFPV)return;o.x=a.clientX/window.innerWidth*2-1,o.y=-(a.clientY/window.innerHeight)*2+1,r.setFromCamera(o,t);const l=r.intersectObjects([e,i],!0);l.length!==0&&(a.shiftKey?n.removeLastWaypoint():n.addWaypoint(l[0].point),s())})}const Op="bridge:demo-simulation-change",Bp="bridge:flight-safety-change",zp="bridge:inspection-runtime-change",kp=()=>{};function cR(n){return n&&n.nodeType===9?n:n&&n.ownerDocument?n.ownerDocument:typeof document<"u"?document:null}function lR(n){return n!=null&&n.defaultView?n.defaultView:typeof window<"u"?window:null}function hR(){return{active:!1,render:kp,destroy:kp,getState:()=>({})}}function qs(n,t=0,e="--"){const i=Number(n);return Number.isFinite(i)?i.toFixed(t):e}function uR(n={},t){return{id:n.id||`HUD-${t+1}`,label:fR(n.label||n.type||"defect"),confidence:Number(n.confidence??.78),bbox:n.bbox||{x:.56,y:.38,width:.18,height:.13},severity:n.severity||"medium"}}function dR(n){const t=n.createElement("div");return t.className="fpv-hud-layer",t.setAttribute("aria-hidden","true"),t.innerHTML=`
        <div class="fpv-hud-vignette"></div>
        <div class="fpv-hud-panel fpv-hud-top-left">
            <span class="fpv-hud-rec">录制</span>
            <span data-fpv-time>00:00:00</span>
            <span data-fpv-rig>吊舱相机</span>
        </div>
        <div class="fpv-hud-panel fpv-hud-top-right">
            <span>RTK <strong data-fpv-rtk>固定解</strong></span>
            <span>信号 <strong data-fpv-signal>4/4</strong></span>
            <span>电量 <strong data-fpv-battery>--%</strong></span>
        </div>
        <div class="fpv-hud-center">
            <div class="fpv-hud-reticle"></div>
            <div class="fpv-hud-horizon"></div>
        </div>
        <div class="fpv-hud-readout fpv-hud-bottom-left">
            <span>高度 <strong data-fpv-altitude>--m</strong></span>
            <span>距离 <strong data-fpv-distance>--m</strong></span>
            <span>风速 <strong data-fpv-wind>--m/s</strong></span>
        </div>
        <div class="fpv-hud-readout fpv-hud-bottom-right">
            <span>焦距 <strong>35mm</strong></span>
            <span>云台 <strong data-fpv-gimbal>-12°</strong></span>
            <span>能见 <strong data-fpv-visibility>--km</strong></span>
        </div>
        <div class="fpv-hud-ai-layer" data-fpv-ai-layer></div>
        <div class="fpv-hud-alert" data-fpv-alert></div>
    `,n.body.appendChild(t),t}function fR(n){return{crack:"裂缝",corrosion:"锈蚀",spalling:"剥落",debris:"抛洒物",defect:"病害","surface-defect":"表面病害","surface scan":"表面扫描"}[n]||n}function pR(n){return{FIX:"固定解",FIXED:"固定解",FLOAT:"浮点解",LOST:"丢失"}[n]||n}function mR(n,t=[]){if(!n)return;const e=Array.isArray(t)?t:[];if(!e.length){n.innerHTML="";return}n.innerHTML=e.slice(0,4).map((i,s)=>{const r=uR(i,s),o=r.bbox,a=Math.max(4,Math.min(90,o.x*100)),c=Math.max(8,Math.min(82,o.y*100)),l=Math.max(8,Math.min(32,o.width*100)),h=Math.max(6,Math.min(24,o.height*100)),f=Math.round(r.confidence*100);return`
            <div class="fpv-ai-box severity-${r.severity}" style="left:${a}%;top:${c}%;width:${l}%;height:${h}%;">
                <span>${r.label} ${f}%</span>
            </div>
        `}).join("")}function gR(n={}){var d,p;const t=cR(n.root),e=lR(t);if(!t||!e)return hR();const i=n.hudElement||dR(t),s={simulation:{},safety:{},telemetry:{},startedAt:((p=(d=e.performance)==null?void 0:d.now)==null?void 0:p.call(d))??Date.now()},r=v=>i.querySelector(v),o=(v,m)=>{const g=r(v);g&&(g.textContent=m)},a=()=>{var v;return typeof n.getTelemetrySnapshot=="function"?n.getTelemetrySnapshot():(v=n.telemetryBus)!=null&&v.snapshot?n.telemetryBus.snapshot():s.telemetry},c=()=>{var U,O,N,L,F,k,X,$,st,at,Q,zt,Jt,kt,K,gt,lt,Pt;const v=((O=(U=e.performance)==null?void 0:U.now)==null?void 0:O.call(U))??Date.now(),m=Math.floor((v-s.startedAt)/1e3),g=n.drone,y=(N=g==null?void 0:g.mesh)==null?void 0:N.position,x=a(),b=((F=(L=x==null?void 0:x.assets)==null?void 0:L.find)==null?void 0:F.call(L,Ot=>Ot.type==="drone"))||((k=x==null?void 0:x.assets)==null?void 0:k[0])||{},S=s.simulation.weather||{},M=s.simulation.mission||{},D=s.simulation.ai||{},_=s.safety||{},T=String(Math.floor(m/60)).padStart(2,"0"),P=String(m%60).padStart(2,"0");o("[data-fpv-time]",`00:${T}:${P}`),o("[data-fpv-rtk]",pR(((X=s.simulation.telemetry)==null?void 0:X.rtkStatus)||b.rtkStatus||"FIX")),o("[data-fpv-signal]",`${(($=s.simulation.telemetry)==null?void 0:$.signalBars)??b.signalBars??4}/4`),o("[data-fpv-battery]",`${qs(((st=s.simulation.telemetry)==null?void 0:st.battery)??b.battery??68)}%`),o("[data-fpv-altitude]",`${qs((y==null?void 0:y.y)??M.altitudeM??145,1)}m`),o("[data-fpv-distance]",`${qs(_.distance,1,qs(M.distanceM,1,"5.1"))}m`),o("[data-fpv-wind]",`${qs(S.windSpeed,1,"2.4")}m/s`),o("[data-fpv-visibility]",`${qs(S.visibilityKm,1,"8.5")}km`);const R=r("[data-fpv-alert]");if(R){const Ot=!!((at=_.alert)!=null&&at.active||(zt=(Q=s.simulation.safety)==null?void 0:Q.alert)!=null&&zt.active),Bt=((Jt=_.alert)==null?void 0:Jt.message)||((K=(kt=s.simulation.safety)==null?void 0:kt.alert)==null?void 0:K.message)||"";R.textContent=Ot?Bt:"",R.classList.toggle("is-active",Ot),R.dataset.level=((gt=_.alert)==null?void 0:gt.level)||((Pt=(lt=s.simulation.safety)==null?void 0:lt.alert)==null?void 0:Pt.level)||"info"}mR(r("[data-fpv-ai-layer]"),D.detections||s.simulation.detections)},l=v=>{s.simulation=v.detail||{},c()},h=v=>{s.safety=v.detail||{},c()},f=v=>{s.telemetry=v.detail||{},c()};e.addEventListener(Op,l),e.addEventListener(zp,l),e.addEventListener(Bp,h),e.addEventListener("bridge:resource-telemetry",f);const u=e.setInterval(c,500);return c(),{active:!0,element:i,render:c,getState:()=>({...s}),destroy(){e.clearInterval(u),e.removeEventListener(Op,l),e.removeEventListener(zp,l),e.removeEventListener(Bp,h),e.removeEventListener("bridge:resource-telemetry",f),n.hudElement||i.remove()}}}function vR(n={}){return new yR(n)}class yR{constructor({scene:t,drone:e,canvas:i}={}){this.scene=t,this.drone=e,this.canvas=i,this.active=!!(t&&e&&i),this.camera=new en(52,16/9,.1,2500),this.renderer=null,this.captureCanvas=null,this.captureContext=null,this.active&&(this.renderer=new Yh({canvas:i,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setClearColor(132875,1),this.resize())}resize(){if(!this.active)return;const t=this.canvas.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),i=Math.max(1,Math.floor(t.height));this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i,!1)}update(){if(!this.active)return;const t=this.drone.getFpvCameraPose(),e=t.offset.clone().applyQuaternion(this.drone.mesh.quaternion),i=t.lookAt.clone().applyQuaternion(this.drone.mesh.quaternion);this.camera.position.copy(this.drone.mesh.position).add(e),this.camera.lookAt(this.drone.mesh.position.clone().add(i)),this.renderer.render(this.scene,this.camera)}captureFrame({overlayDetections:t}={}){var l;this.active&&this.update();const e=new Date().toISOString(),i=((l=this.renderer)==null?void 0:l.domElement)||this.canvas,s=Math.max(1,Number((i==null?void 0:i.width)||0)),r=Math.max(1,Number((i==null?void 0:i.height)||0)),o=_R(t);if(!o.length){const h=Vp(i);if(h)return{imageUrl:h,width:s,height:r,capturedAt:e}}const a=this.getCaptureCanvas(s,r);if(!a||!this.captureContext)return{imageUrl:"",width:s,height:r,capturedAt:e};const c=this.captureContext;return c.clearRect(0,0,s,r),i?c.drawImage(i,0,0,s,r):(c.fillStyle="#02070b",c.fillRect(0,0,s,r)),xR(c,o,s,r),{imageUrl:Vp(a)||"",width:s,height:r,capturedAt:e}}getCaptureCanvas(t,e){var s;const i=((s=this.canvas)==null?void 0:s.ownerDocument)||(typeof document<"u"?document:null);return i?(this.captureCanvas||(this.captureCanvas=i.createElement("canvas"),this.captureContext=this.captureCanvas.getContext("2d")),this.captureCanvas.width!==t&&(this.captureCanvas.width=t),this.captureCanvas.height!==e&&(this.captureCanvas.height=e),this.captureCanvas):null}destroy(){var t,e;(e=(t=this.renderer)==null?void 0:t.dispose)==null||e.call(t),this.active=!1,this.captureCanvas=null,this.captureContext=null}}function _R(n){return Array.isArray(n)?n:Array.isArray(n==null?void 0:n.detections)?n.detections:[]}function Vp(n){if(!n||typeof n.toDataURL!="function")return"";try{return n.toDataURL("image/png")}catch(t){return console.warn("[LiveFpvPreview] Unable to capture canvas frame.",t),""}}function xR(n,t,e,i){t.slice(0,12).forEach((s,r)=>{const o=bR(s==null?void 0:s.bbox,e,i);if(!o.width||!o.height)return;const a=MR(s==null?void 0:s.severity),c=Math.max(2,Math.round(e/480)),l=Math.max(12,Math.min(18,Math.round(e/42))),h=wR(s,r),f=Math.max(5,Math.round(l*.42)),u=l+f*2;n.font=`600 ${l}px Inter, Arial, sans-serif`;const d=Math.min(e-o.x,Math.ceil(n.measureText(h).width)+f*2),p=Math.max(0,o.y-u);n.save(),n.lineWidth=c,n.strokeStyle=a,n.fillStyle=a,n.shadowColor="rgba(0, 0, 0, 0.45)",n.shadowBlur=c*2,n.strokeRect(o.x,o.y,o.width,o.height),n.shadowBlur=0,n.globalAlpha=.92,n.fillRect(o.x,p,d,u),n.globalAlpha=1,n.fillStyle="#031018",n.textBaseline="middle",n.fillText(h,o.x+f,p+u/2),n.restore()})}function bR(n={},t,e){const i={x:aa(n.x??n.left),y:aa(n.y??n.top),width:aa(n.width??n.w),height:aa(n.height??n.h)},s=Math.abs(i.x)<=1&&Math.abs(i.y)<=1&&Math.abs(i.width)<=1&&Math.abs(i.height)<=1,r=!s&&Math.abs(i.x)<=100&&Math.abs(i.y)<=100&&Math.abs(i.width)<=100&&Math.abs(i.height)<=100,o=s?t:r?t/100:1,a=s?e:r?e/100:1,c=ca(i.x*o,0,t),l=ca(i.y*a,0,e),h=ca(c+i.width*o,c,t),f=ca(l+i.height*a,l,e);return{x:c,y:l,width:h-c,height:f-l}}function wR(n={},t){const e=SR(n.label||n.type||`detection-${t+1}`),i=Number(n.confidence);return Number.isFinite(i)?`${e} ${Math.round(i*100)}%`:String(e)}function SR(n){return{crack:"裂缝",corrosion:"锈蚀",spalling:"剥落",debris:"抛洒物",defect:"异常"}[String(n).toLowerCase()]||n}function MR(n=""){return{critical:"#ef4444",high:"#f97316",medium:"#facc15",low:"#38bdf8"}[String(n).toLowerCase()]||"#22d3ee"}function aa(n,t=0){const e=Number(n);return Number.isFinite(e)?e:t}function ca(n,t,e){return Math.min(e,Math.max(t,n))}function ER({canvasContainer:n,getCesiumViewer:t,onBeforeViewChange:e}){TR(),AR(n,t,e)}function TR(){document.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(i=>i.classList.remove("active")),n.classList.add("active");const t=n.getAttribute("data-tab");if(!t)return;document.querySelectorAll(".tab-content").forEach(i=>i.classList.add("hidden"));const e=document.getElementById(t);e&&e.classList.remove("hidden")})})}function AR(n,t,e){document.querySelectorAll(".nav-item").forEach(i=>{i.addEventListener("click",s=>{var a;s.preventDefault();const r=i.getAttribute("data-target");if(!r)return;e==null||e(r),document.querySelectorAll(".nav-item").forEach(c=>c.classList.remove("active")),i.classList.add("active"),document.querySelectorAll(".view-container").forEach(c=>c.classList.remove("active"));const o=document.getElementById(r);o&&o.classList.add("active"),r==="view-command-center"&&((a=t())==null||a.resize()),CR(n,r==="view-flight-control"),window.dispatchEvent(new CustomEvent("bridge:view-change",{detail:{targetId:r}}))})})}function CR(n,t){n&&(n.style.opacity=t?"1":"0",n.style.pointerEvents=t?"auto":"none")}const PR={closed:!1,curveType:"centripetal",tension:.45,arcLengthDivisions:160};function cl(n,t=new E){return n instanceof E?n.clone():Array.isArray(n)?new E(Number(n[0]??t.x),Number(n[1]??t.y),Number(n[2]??t.z)):n&&typeof n=="object"?new E(Number(n.x??t.x),Number(n.y??t.y),Number(n.z??t.z)):t.clone()}function RR(n=[],t={}){return new DR(n,t)}function IR(n,t=80){return!n||typeof n.getPoints!="function"?[]:n.getPoints(Math.max(1,Math.floor(t)))}class DR{constructor(t=[],e={}){this.options={...PR,...e},this.waypoints=[],this.curve=null,this.setWaypoints(t)}setWaypoints(t=[]){return this.waypoints=t.map(e=>cl(e)),this.rebuild(),this}addWaypoint(t,e=this.waypoints.length){const i=cl(t),s=Math.max(0,Math.min(e,this.waypoints.length));return this.waypoints.splice(s,0,i),this.rebuild(),this}updateWaypoint(t,e){return this.waypoints[t]?(this.waypoints[t]=cl(e),this.rebuild(),this):this}removeWaypoint(t){return this.waypoints[t]?(this.waypoints.splice(t,1),this.rebuild(),this):this}updateOptions(t={}){return this.options={...this.options,...t},this.rebuild(),this}rebuild(){return this.waypoints.length<2?(this.curve=null,this):(this.curve=new vm(this.waypoints.map(t=>t.clone()),this.options.closed,this.options.curveType,this.options.tension),this.curve.arcLengthDivisions=this.options.arcLengthDivisions,this.curve.updateArcLengths(),this)}getCurve(){return this.curve}getWaypoints(){return this.waypoints.map(t=>t.clone())}getPointAt(t=0){var e;return this.curve?this.curve.getPointAt(ll(t)):((e=this.waypoints[0])==null?void 0:e.clone())??new E}getTangentAt(t=0){return this.curve?this.curve.getTangentAt(ll(t)).normalize():new E(0,0,-1)}getPoints(t=80){return IR(this.curve,t)}getSpacedPoints(t=80){return this.curve?this.curve.getSpacedPoints(Math.max(1,Math.floor(t))):this.getWaypoints()}getLength(){var t;return((t=this.curve)==null?void 0:t.getLength())??0}getFrameAt(t=0){const e=ll(t);return{position:this.getPointAt(e),tangent:this.getTangentAt(e),progress:e,length:this.getLength()}}toWaypointQueue(t=this.waypoints.length){return this.getSpacedPoints(t).map(e=>({x:e.x,y:e.y,z:e.z}))}}function ll(n){return Math.min(1,Math.max(0,Number.isFinite(n)?n:0))}function LR(n,t){const e=new Qi({color:13938487,opacity:.8,transparent:!0});let i=null;const s=[];function r(){i&&(n.remove(i),i.geometry.dispose(),i=null),s.forEach(a=>{n.remove(a),a.geometry.dispose(),a.material.dispose()}),s.length=0}function o(){if(r(),t.waypoints.length===0)return;const a=NR(t),c=new ue().setFromPoints(a);i=new si(c,e),n.add(i),t.waypoints.forEach((l,h)=>{const f=new It(new ts(1.5),new rn({color:h===0?16711680:13938487}));f.position.copy(l),n.add(f),s.push(f)})}return{update:o,clear:r}}function NR(n){const t=[n.mesh.position.clone(),...n.waypoints];return t.length<3?t:RR(t,{curveType:"centripetal",tension:.35}).getSpacedPoints(Math.max(32,t.length*24))}const hl="/bridge-inspection-demo/";function Ae(n=""){const t=String(n).replace(/^\/+/,"");return`${hl.endsWith("/")?hl:`${hl}/`}${t}`}const FR={textures:{crack:Ae("textures/crack.png")},ui:{dock:Ae("ui/dock.png"),drone:Ae("ui/drone.png"),fleet:Ae("ui/fleet.png"),fpv:Ae("ui/fpv.png"),liveFeed:Ae("ui/live-feed.png"),map:Ae("ui/map.png")},icons:{favicon:Ae("icons/favicon.svg"),sprite:Ae("icons/icons.svg")}},UR={bridge:Ae("models/bridge.glb"),drone:Ae("models/drone.glb"),dock:Ae("models/dock.glb")},OR={crackDetector:Ae("models/ai/crack-detector.onnx"),corrosionSegmenter:Ae("models/ai/corrosion-segmenter.onnx"),spallingClassifier:Ae("models/ai/spalling-classifier.onnx")},BR={crack:Ae("crack.png"),dock:Ae("dock.png"),drone:Ae("drone.png"),favicon:Ae("favicon.svg"),fleet:Ae("fleet.png"),fpv:Ae("fpv.png"),icons:Ae("icons.svg"),liveFeed:Ae("live_feed.png"),map:Ae("map.png")},zR=Object.freeze(Object.defineProperty({__proto__:null,AI_MODEL_ASSETS:OR,ASSETS:FR,LEGACY_PUBLIC_ALIASES:BR,MODEL_ASSETS:UR,assetUrl:Ae},Symbol.toStringTag,{value:"Module"}));function kR(){return`
    <div id="view-command-center" class="view-container">
      <div class="cc-map-container">
        <div id="cesium-container" class="cc-map"></div>
        <div class="cc-stats-overlay">
          <div class="cc-stat-panel left-panel">
            <div class="cc-card">
              <div class="label">累计巡检</div>
              <div class="value">12,458</div>
            </div>
            <div class="cc-card">
              <div class="label">在线机巢</div>
              <div class="value">42</div>
            </div>
            <div class="cc-card">
              <div class="label">24小时告警</div>
              <div class="value value-alert">86</div>
            </div>
          </div>
          <div></div>
          <div class="cc-stat-panel right-panel">
            <div class="cc-card">
              <div class="label">机队在线率</div>
              <div class="value">99.8%</div>
            </div>
            <div class="cc-card">
              <div class="label">图传数据量</div>
              <div class="value">4.2 TB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function VR(n){return`
    <div id="defect-modal" class="modal glass-panel hidden">
      <div class="modal-header">
        <h3>病害详情确认</h3>
        <button class="close-btn" onclick="hideDefectModal()">×</button>
      </div>
      <div class="modal-body">
        <img src="${n.crack}" alt="Crack Defect" class="defect-image" />
        <div class="defect-info">
          <p><strong>位置坐标:</strong> [113.1234, 23.5678, 142.5]</p>
          <p><strong>AI 分析结果:</strong> 混凝土深度裂缝，建议尽快进行人工复核与灌浆修复。</p>
        </div>
        <button class="action-btn">生成维修工单</button>
      </div>
    </div>
  `}function HR(n){return`
    <div id="view-flight-control" class="view-container app-body active">
      <aside class="sidebar-left glass-panel">
        <div class="sidebar-tabs">
          <button class="tab-btn active">任务飞行</button>
          <button class="tab-btn">航线规划</button>
          <button class="tab-btn">巡检记录</button>
        </div>

        <div class="panel-section dock-status">
          <h3>机巢状态 (DJI Dock)</h3>
          <div class="dock-grid">
            <div class="dock-item dock-item-wide">
              <span class="d-label">任务状态</span>
              <span class="d-value text-success" data-dock-status>待命</span>
            </div>
            <div class="dock-item">
              <span class="d-label">舱盖</span>
              <span class="d-value text-success" data-dock-hatch>关闭</span>
            </div>
            <div class="dock-item">
              <span class="d-label">锁止/推杆</span>
              <span class="d-value text-warning" data-dock-pusher>锁定</span>
            </div>
            <div class="dock-item">
              <span class="d-label">升降平台</span>
              <span class="d-value" data-dock-platform>收纳</span>
            </div>
            <div class="dock-item">
              <span class="d-label">旋翼</span>
              <span class="d-value" data-dock-rotor>停止</span>
            </div>
            <div class="dock-item">
              <span class="d-label">风速</span>
              <span class="d-value" data-dock-wind>-- m/s</span>
            </div>
            <div class="dock-item">
              <span class="d-label">雨量</span>
              <span class="d-value" data-dock-rain>-- mm</span>
            </div>
            <div class="dock-item">
              <span class="d-label">温度</span>
              <span class="d-value" data-dock-temp>--°C</span>
            </div>
            <div class="dock-item">
              <span class="d-label">湿度</span>
              <span class="d-value" data-dock-humidity>--%</span>
            </div>
          </div>
        </div>

        <div class="panel-section">
          <h3>当前任务：索塔精细化巡检</h3>
          <ul class="node-list">
            <li class="node-item" data-target="pylon-1">📍 1号主索塔</li>
            <li class="node-item" data-target="pylon-2">📍 2号主索塔</li>
            <li class="node-item" data-target="cable-left">🕸 左侧斜拉索群</li>
            <li class="node-item" data-target="pier-3">🏛 3号承台及墩身</li>
          </ul>
        </div>
      </aside>

      <main class="main-content">
        <div class="waypoint-timeline glass-panel">
          <div class="timeline-header">
            <span class="mission-time" data-mission-time>已飞行: 00:00:00 (待命)</span>
            <span class="mission-percent" data-mission-percent>0%</span>
          </div>
          <div class="timeline-track">
            <div class="timeline-progress timeline-progress-80" data-timeline-progress></div>
            <div class="wp-node completed wp-node-0"><span>起飞</span></div>
            <div class="wp-node completed wp-node-20"><span>航点36</span></div>
            <div class="wp-node completed wp-node-40"><span>航点37</span></div>
            <div class="wp-node completed wp-node-60"><span>航点38</span></div>
            <div class="wp-node active wp-node-80"><span>航点39</span></div>
            <div class="wp-node pending wp-node-100"><span>返航</span></div>
          </div>
        </div>

        <div class="fpv-controls-overlay">
          <div class="fpv-control-row">
            <button id="btn-start-mission" class="action-btn primary-btn">✈️ 起飞并执行任务</button>
            <button id="btn-resume-mission" class="action-btn danger-btn hidden">🔄 恢复自动巡检</button>
            <button id="btn-toggle-fpv" class="action-btn secondary-btn">💻 切换第一人称 (FPV)</button>
          </div>
          <div id="fpv-instructions" class="glass-panel hidden fpv-instructions-panel">
            <strong>[飞行控制]</strong><br/>
            W/S: 前进/后退<br/>
            A/D: 左右平移<br/>
            Q/E: 旋转机头<br/>
            空格/Shift: 升/降<br/>
            <em>* 第三视角下双击桥梁可自动飞往目标</em>
          </div>
        </div>
      </main>

      <aside class="sidebar-right glass-panel">
        <div class="panel-section fpv-container">
          <div class="fpv-header">
            <h3>实时图传 (M350 RTK)</h3>
            <button class="pip-btn" title="视口切换">🔄</button>
          </div>
          <div class="fpv-view">
            <canvas class="fpv-image fpv-preview-canvas" data-live-fpv-canvas aria-label="实时第一人称图传"></canvas>
            <div class="fpv-overlay">
              <div class="crosshair"></div>
              <div class="fpv-data top-left" data-fpv-record-time>录制 00:00:00</div>
              <div class="fpv-data bottom-right" data-fpv-z>Z: --m</div>
            </div>
          </div>
          <div class="telemetry-grid mt-2">
            <div class="telemetry-item"><div class="label">高度</div><div class="value"><span data-telemetry-altitude>--</span><span class="unit">m</span></div></div>
            <div class="telemetry-item"><div class="label">距离</div><div class="value"><span data-telemetry-distance>--</span><span class="unit">m</span></div></div>
            <div class="telemetry-item"><div class="label">电量</div><div class="value"><span data-telemetry-battery>--</span><span class="unit">%</span></div></div>
            <div class="telemetry-item"><div class="label">信号</div><div class="value" data-telemetry-signal>--</div></div>
          </div>
        </div>

        <div class="panel-section ai-feed-section">
          <div class="ai-feed-header">
            <h3 data-ai-capture-count>异常抓拍 (0)</h3>
            <div class="ai-tags">
              <span class="tag tag-red">裂缝</span>
              <span class="tag tag-yellow">锈蚀</span>
              <span class="tag tag-blue">抛洒物</span>
            </div>
          </div>
          <div class="ai-feed-list" data-ai-feed-list>
            <div class="ai-feed-empty">等待无人机发现异常并抓拍</div>
          </div>
        </div>
      </aside>
    </div>
  `}const GR=`
  <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
`,WR=`
  <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
`;function qR(n){return`
    <header class="global-header glass-panel">
      <div class="header-left">
        <div class="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <span>DJI Cloud API · 桥梁孪生指控中心</span>
        </div>
        <nav class="main-nav">
          <a href="#" class="nav-item" data-target="view-command-center">指挥中心</a>
          <a href="#" class="nav-item active" data-target="view-flight-control">飞行控制</a>
          <a href="#" class="nav-item" data-target="view-resource-management">资源管理</a>
          <a href="#" class="nav-item" data-target="view-workflow">工作流</a>
          <a href="#" class="nav-item" data-target="view-system">系统管理</a>
        </nav>
      </div>
      <div class="header-right">
        <div class="status-indicators">
          <span class="status online">● M350 RTK 在线</span>
          <span class="status rtk">● RTK 固定解</span>
        </div>
        <button id="theme-toggle" class="theme-btn" title="切换主题">
          ${GR}
          ${WR}
        </button>
        <div class="user-profile">
          <img src="${n.avatar}" alt="当前用户" class="avatar" />
        </div>
      </div>
    </header>
  `}function XR(n){return`
    <div id="view-resource-management" class="view-container">
      <div class="resource-header">
        <h2>资产设备全息档案</h2>
      </div>
      <div class="resource-grid">
        <div class="resource-card">
          <img src="${n.fleet}" class="rc-img" />
          <div class="rc-info">
            <div class="rc-title">M350 RTK <span class="rc-status">🟢 待机正常</span></div>
            <div class="rc-meta">序列号: 3Q4DF2409X<br>飞行时长: 240H<br>电池循环: 12次</div>
          </div>
        </div>
        <div class="resource-card">
          <img src="${n.dock}" class="rc-img" />
          <div class="rc-info">
            <div class="rc-title">DJI Dock 2 (大桥北塔) <span class="rc-status">🟢 运行中</span></div>
            <div class="rc-meta">序列号: DOCK-40291<br>网络: 5G (420Mbps)<br>内温: 22°C</div>
          </div>
        </div>
        <div class="resource-card">
          <img src="${n.fleet}" class="rc-img" />
          <div class="rc-info">
            <div class="rc-title">M30T <span class="rc-status rc-status-danger">🔴 保养中</span></div>
            <div class="rc-meta">序列号: 8K9LM102XX<br>飞行时长: 1200H<br>电池循环: 84次</div>
          </div>
        </div>
        <div class="resource-card">
          <img src="${n.dock}" class="rc-img" />
          <div class="rc-info">
            <div class="rc-title">DJI Dock 2 (大桥南塔) <span class="rc-status">🟢 待命</span></div>
            <div class="rc-meta">序列号: DOCK-40292<br>网络: 5G (390Mbps)<br>内温: 20°C</div>
          </div>
        </div>
      </div>
    </div>
  `}function $R(){return`
    <div id="view-system" class="view-container">
      <div class="resource-header">
        <h2>系统底层配置</h2>
      </div>
      <div class="system-settings-grid">
        <div class="settings-panel glass-panel">
          <h3>🛸 飞行控制参数</h3>
          <div class="setting-item">
            <label>全局飞行限高 (m)</label>
            <input type="range" min="50" max="500" value="150" class="slider">
            <span class="setting-val">150m</span>
          </div>
          <div class="setting-item">
            <label>低电量返航阈值 (%)</label>
            <input type="range" min="10" max="50" value="30" class="slider">
            <span class="setting-val">30%</span>
          </div>
          <div class="setting-item">
            <label>避障雷达灵敏度</label>
            <select class="custom-select">
              <option>保守 (保守绕行)</option>
              <option selected>标准 (均衡)</option>
              <option>激进 (近距越障)</option>
            </select>
          </div>
        </div>

        <div class="settings-panel glass-panel">
          <h3>🧠 AI 引擎配置</h3>
          <div class="setting-item">
            <label>计算机视觉模型</label>
            <select class="custom-select">
              <option>ResNet-50 (通用)</option>
              <option selected>YOLOv10-Bridge (专业版)</option>
            </select>
          </div>
          <div class="setting-item">
            <label>置信度阈值</label>
            <input type="range" min="1" max="100" value="85" class="slider">
            <span class="setting-val">85%</span>
          </div>
          <div class="setting-item">
            <label>开启异常即时告警</label>
            <label class="switch">
              <input type="checkbox" checked>
              <span class="slider-toggle round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  `}function jR(n){return`
    <div id="view-workflow" class="view-container">
      <div class="resource-header">
        <h2>自动化巡检工作流</h2>
      </div>
      <div class="workflow-board">
        <div class="kanban-col">
          <h3 class="kanban-title">📥 数据采集</h3>
          <div class="kanban-card">
            <h4>航线 A - 主桥墩</h4>
            <p>状态: 飞行中 (80%)</p>
            <div class="progress-bar"><div class="progress-fill progress-fill-80"></div></div>
          </div>
          <div class="kanban-card">
            <h4>航线 B - 斜拉索</h4>
            <p>状态: 已完成</p>
            <div class="progress-bar"><div class="progress-fill progress-fill-100 progress-fill-complete"></div></div>
          </div>
        </div>
        <div class="kanban-col">
          <h3 class="kanban-title">🧠 AI 分析</h3>
          <div class="kanban-card">
            <h4>航线 B 图像集</h4>
            <p>模型: YOLOv10-Bridge</p>
            <p class="text-accent">发现 3 处疑似病害</p>
          </div>
        </div>
        <div class="kanban-col">
          <h3 class="kanban-title">⚠️ 人工复核</h3>
          <div class="kanban-card warning-card">
            <div class="kanban-thumb kanban-thumb-placeholder">等待 FPV 抓拍</div>
            <h4>#DEF-102: 深度裂缝</h4>
            <p>位置: Pylon-2-South</p>
            <button class="action-btn danger-btn card-action-full" onclick="showDefectModal()">查看详情</button>
          </div>
        </div>
        <div class="kanban-col">
          <h3 class="kanban-title">📄 维修工单</h3>
          <div class="kanban-card">
            <h4>工单 #T-091</h4>
            <p>级别: 高</p>
            <p>指派给: 结构维修组</p>
          </div>
        </div>
      </div>
    </div>
  `}const YR=Object.assign({"../config/assets.js":zR}),KR={avatar:"https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff",crack:"/crack.png",dock:"/dock.png",drone:"/drone.png",favicon:"/favicon.svg",fleet:"/fleet.png",fpv:"/fpv.png"};function ZR(){var i,s,r,o,a,c;const n=Object.values(YR)[0];if(!n)return{};const t=n.default||n.ASSETS||n.assets||{},e=n.LEGACY_PUBLIC_ALIASES||{};return{...t,crack:t.crack||((i=t.textures)==null?void 0:i.crack)||e.crack,dock:t.dock||((s=t.ui)==null?void 0:s.dock)||e.dock,drone:t.drone||((r=t.ui)==null?void 0:r.drone)||e.drone,favicon:t.favicon||((o=t.icons)==null?void 0:o.favicon)||e.favicon,fleet:t.fleet||((a=t.ui)==null?void 0:a.fleet)||e.fleet,fpv:t.fpv||((c=t.ui)==null?void 0:c.fpv)||e.fpv}}function JR(){return{...KR,...ZR()}}function q0(){var n;(n=document.getElementById("defect-modal"))==null||n.classList.remove("hidden")}function X0(){var n;(n=document.getElementById("defect-modal"))==null||n.classList.add("hidden")}function QR(){window.showDefectModal=q0,window.hideDefectModal=X0}function tI(n){const t=document.querySelector('link[rel="icon"]');t&&n.favicon&&t.setAttribute("href",n.favicon)}function eI(n=document.getElementById("ui-layer")){if(!n)throw new Error("Missing #ui-layer");const t=JR();return n.classList.add("app-shell"),n.innerHTML=[qR(t),HR(),kR(),XR(t),jR(),$R(),VR(t)].join(""),tI(t),QR(),{assets:t,hideDefectModal:X0,showDefectModal:q0}}function nI({onThemeChange:n}){const t=document.getElementById("theme-toggle"),e=document.querySelector(".sun-icon"),i=document.querySelector(".moon-icon");if(!t)return;let s=!1;t.addEventListener("click",()=>{s=!s;const r=s?"light":"dark";s?(document.documentElement.setAttribute("data-theme","light"),e&&(e.style.display="none"),i&&(i.style.display="block")):(document.documentElement.removeAttribute("data-theme"),e&&(e.style.display="block"),i&&(i.style.display="none")),n(r)})}const Hp={"DEF-102":{waypoint:new E(250,110,140),camera:new E(330,150,250),lookAt:new E(250,105,0)}};function iI(){const n=eI(),t=document.getElementById("canvas-container");if(!t)throw new Error("Missing #canvas-container");const e=ST(t),i=r0({scene:e.scene,ambientLight:window.ambientLight,directionalLight:window.directionalLight,water:e.water}),s=new C1(e.scene,e.camera,e.controls,{initialPosition:e.dockStation.getLaunchPosition()}),r=LR(e.scene,s),o=I1(e.camera,{duration:950}),a=mA({camera:e.camera,controls:e.controls,cameraAnimator:o,navigateToView:Mh,getCesiumViewer:()=>b||window.cesiumViewer}),c=bA({scene:e.scene,camera:e.camera,controls:e.controls,cameraAnimator:o}),l=jT({obstacles:[e.bridgeGroup,e.dockStation.group],waterObjects:e.water?[e.water]:[]}),h=iA(),f=TA({scene:e.scene,drone:s}),u=WT({drone:s,dockStation:e.dockStation}),d=SC({bridgeScene:e,seed:20260518,count:7}),p=T0(),v=MP(),m=JC({weatherEffects:i,getSafetyState:()=>{var N,L;return{source:"flight-safety-policy",obstacleDistance:(N=window.bridgeFlightSafetyState)==null?void 0:N.obstacleDistance,waterDistance:(L=window.bridgeFlightSafetyState)==null?void 0:L.waterDistance}},onChange:N=>{window.bridgeWeatherSnapshot=N.weather,window.bridgeMissionSnapshot=N.mission,window.bridgeDemoTelemetrySnapshot=N.telemetry,v.updateSimulation(N)}});let g="",y="",x=0,b=null;e.attachDrone(s),e.addFrameTask(({now:N,dt:L})=>{o.update(N),c.update();const F=l.scan({object:s.mesh}),k=h.evaluate(s,F,{geofence:window.bridgeGeofenceState});if(s.applySafetyPolicyState(k),window.bridgeEnvironmentStatus=F,window.bridgeFlightSafetyState=k,g=aI(k,g),v.syncFrame({drone:s,simulation:m.snapshot,safety:k,resource:p.snapshot(),ai:window.bridgeAiDetections}),f.update({now:N}),i.update(L),u.update(N),P.update(),N-x>450){const X=cI({seededDefects:d,liveFpvPreview:P,runtimeStore:v,previousSignature:y,now:N});x=N,y=X.signature}}),window.myDrone=s,window.bridgeEnvironmentSensors=l,window.bridgeSceneFocusService=c,nI({onThemeChange:N=>e.applyTheme(N)}),nR({drone:s,pathVisualizer:r,dockLaunchController:u,camera:e.camera,bridgeGroup:e.bridgeGroup,terrainGroup:e.terrainGroup}),ER({canvasContainer:t,getCesiumViewer:()=>b||window.cesiumViewer,onBeforeViewChange:N=>{var L,F;N!=="view-flight-control"&&s.isFPV&&(s.toggleView(),document.body.classList.remove("fpv-mode"),(L=document.getElementById("fpv-instructions"))==null||L.classList.add("hidden"),(F=U==null?void 0:U.disable)==null||F.call(U))}});const S=YC({navigateTo:Mh,showDefectModal:n.showDefectModal}),M=b2({telemetryBus:p}),D=$P({defects:[...to(),...d.defects],telemetrySource:v,getTelemetrySnapshot:()=>v.snapshot()}),_=H2({loadAiEngine:!1,geofence:{context:{getDronePosition:()=>s.mesh.position,defects:d.defects,route:s.waypoints,dockPosition:e.dockStation.getLaunchPosition()}}});y0(d);const T=gR({drone:s,telemetryBus:p,getTelemetrySnapshot:()=>v.snapshot()}),P=vR({scene:e.scene,drone:s,canvas:document.querySelector("[data-live-fpv-canvas]")}),R=pP({liveFpvPreview:P,runtimeStore:v,getTelemetrySnapshot:()=>v.snapshot(),getDetections:()=>{var N;return((N=v.snapshot().ai)==null?void 0:N.detections)||[]}}),U=j2({scene:e.scene,camera:e.camera,drone:s}),O=eR({store:v,onSelectCapture:N=>{var L;return v.selectDefect(N.defectId||((L=N.defect)==null?void 0:L.id)||"DEF-102",{defect:N.defect,capture:N,focus:!0,addWaypoint:!1,source:"capture-card"})}});window.addEventListener("bridge:resource-telemetry",N=>v.updateResource(N.detail)),window.addEventListener("bridge:ai-detections-updated",N=>v.updateAi(N.detail)),window.addEventListener("bridge:inspection-capture",N=>v.addCapture(N.detail)),window.bridgeModules={businessFeatures:S,resourceExplorer:M,workflowEnhancements:D,systemEnhancements:_,fpvHud:T,liveFpvPreview:P,fpvCaptureService:R,safetyEffects:f,weatherEffects:i,demoSimulation:m,runtimeStore:v,sceneTransitionService:a,dockLaunchController:u,seededDefects:d,tacticalPayload:U,flightPanelBinder:O,telemetryBus:p},window.addEventListener(H0,N=>{var F;const L=N.detail||{};v.selectDefect(L.id||((F=L.defect)==null?void 0:F.id)||"DEF-102",{...L,focus:!0,addWaypoint:!1,source:L.source||"workflow-highlight"})}),window.addEventListener(O0,N=>{var F;const L=N.detail||{};L.focus!==!1&&rI(L.defect||((F=L.capture)==null?void 0:F.defect)||L,{addWaypoint:!!L.addWaypoint,pathVisualizer:r,drone:s,sceneFocusService:c,bridgeScene:e})}),window.addEventListener(mh,N=>{a.startFromCesium(N.detail)}),window.addEventListener("resize",e.resize),sI(N=>{b=N}),e.start()}function sI(n){window.setTimeout(()=>{try{const t=VT({googleApiKey:"AIzaSyDFvyp4aldsAst_XL51uqa7OlpupEjoOyg"});n(t)}catch(t){console.warn("[BridgeInspection] Cesium command center unavailable:",t),n(null)}},0)}function Mh(n){var e;const t=document.querySelector(`.nav-item[data-target="${n}"]`);return t?(t.click(),!0):(document.querySelectorAll(".view-container").forEach(i=>i.classList.remove("active")),(e=document.getElementById(n))==null||e.classList.add("active"),!!document.getElementById(n))}function rI(n,{addWaypoint:t,pathVisualizer:e,drone:i,sceneFocusService:s,bridgeScene:r}){const o=oI(n);Mh("view-flight-control"),t&&(i.addWaypoint(o.waypoint),e.update()),r.highlightDefect({...o.defect,position:o.waypoint}),s.focusTarget(o.waypoint,{cameraPosition:o.camera,duration:950})}function oI(n={}){const t=n.id||"DEF-102",e=d0(t,to())||n,i=Hp[t]||Hp["DEF-102"],s=Gp(e.localPosition,i.waypoint);return{defect:{...e,id:t},waypoint:s,camera:Gp(e.cameraPosition,i.camera)}}function Gp(n,t){return n instanceof E?n.clone():Array.isArray(n)?new E(n[0]??t.x,n[1]??t.y,n[2]??t.z):n&&typeof n=="object"?new E(Number(n.x??t.x),Number(n.y??t.y),Number(n.z??t.z)):t.clone()}function aI(n,t){const e=[n.status,n.reason,n.blockedDirections.join(","),Math.round(Math.min(n.distance,9999)*10)/10].join("|");return e!==t&&window.dispatchEvent(new CustomEvent("bridge:flight-safety-change",{detail:n})),e}function cI({seededDefects:n,liveFpvPreview:t,runtimeStore:e,previousSignature:i,now:s}){if(!(n!=null&&n.createProjectionPayload)||!(t!=null&&t.camera))return{signature:i};const r=t.canvas,o=n.createProjectionPayload({camera:t.camera,viewport:{width:(r==null?void 0:r.width)||1,height:(r==null?void 0:r.height)||1},frameId:`fpv-${Math.round(s)}`}),a=(o.detections||[]).map(c=>`${c.id}:${c.defectId}:${Math.round((c.confidence||0)*100)}`).join("|");return e.updateAi(o),a!==i&&(window.bridgeAiDetections=o,window.dispatchEvent(new CustomEvent("bridge:ai-detections-updated",{detail:o}))),{signature:a}}try{iI()}catch(n){window.bridgeStartupError=n,console.error("[BridgeInspection] Startup failed:",n)}export{wn as $,wI as A,wv as B,Si as C,ah as D,rn as E,SI as F,Me as G,bI as H,TI as I,Yt as J,wl as K,si as L,ws as M,je as N,uo as O,Eg as P,Ca as Q,Ce as R,Xh as S,en as T,ar as U,pm as V,zh as W,ve as X,Ye as Y,$a as Z,bl as _,Di as a,dm as a0,vI as a1,Li as a2,Py as a3,sn as a4,MI as a5,uI as a6,hI as a7,lI as a8,ot as a9,E as aa,Pa as ab,gn as b,ue as c,$t as d,oe as e,cn as f,Zi as g,Ju as h,yI as i,pI as j,um as k,ro as l,wa as m,Ql as n,Qi as o,_I as p,fm as q,nn as r,fs as s,oc as t,Sa as u,oo as v,EI as w,pn as x,ne as y,It as z};
