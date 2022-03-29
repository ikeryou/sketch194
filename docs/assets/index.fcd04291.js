var T=Object.defineProperty;var D=(l,e,t)=>e in l?T(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var i=(l,e,t)=>(D(l,typeof e!="symbol"?e+"":e,t),t);import{d as _,W as G,S as F,P as N,a as q,G as W,V as x,C as y,O as B,b as U,R as V,B as X,c as S}from"./vendor.1c778009.js";const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};k();var j=`vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  
                      0.366025403784439,  
                     -0.577350269189626,  
                      0.024390243902439); 

  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  
  
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  
  
  
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i); 
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

precision highp float;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;

uniform float size;
uniform float time;
uniform float ang;
uniform vec3 move;

attribute vec3 position;
attribute vec3 info;
attribute vec3 color;

varying vec3 vColor;

float map(float value, float beforeMin, float beforeMax, float afterMin, float afterMax) {
  return afterMin + (afterMax - afterMin) * ((value - beforeMin) / (beforeMax - beforeMin));
}

vec3 rotate(vec3 p, float angle, vec3 axis){
    vec3 a = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float r = 1.0 - c;
    mat3 m = mat3(
        a.x * a.x * r + c,
        a.y * a.x * r + a.z * s,
        a.z * a.x * r - a.y * s,
        a.x * a.y * r - a.z * s,
        a.y * a.y * r + c,
        a.z * a.y * r + a.x * s,
        a.x * a.z * r + a.y * s,
        a.y * a.z * r - a.x * s,
        a.z * a.z * r + c
    );
    return m * p;
}

void main(){
  vec3 p = position;

  vec2 t = (time + position.xy) * 0.0025;
  float n1 = snoise(t) * 300.0;
  

  p.x += move.x * info.x;
  p.y += move.y * info.y;
  

  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size;

  vColor = color;
}`,Y=`precision highp float;

varying vec3 vColor;

void main(void) {
  gl_FragColor = vec4(vColor, 1.0);
}`;class u{constructor(){}}i(u,"LG",0),i(u,"XS",1);const C=class{constructor(){}static get instance(){return this._instance||(this._instance=new C),this._instance}random(e,t){return Math.random()*(t-e)+e}random2(e,t){let n=Math.random()*(t-e)+e;return this.hit(2)&&(n*=-1),n}randomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}hit(e=0){return e<2&&(e=2),this.randomInt(0,e-1)==0}randomArr(e){return e[this.randomInt(0,e.length-1)]}range(e){return this.random(-e,e)}clamp(e,t,n){return Math.min(n,Math.max(e,t))}map(e,t,n,s,r){if(e<=s)return t;if(e>=r)return n;const a=(n-t)/(r-s);return(e-s)*a+t}mix(e,t,n){return e*(1-n)+t*n}radian(e){return e*Math.PI/180}degree(e){return e*180/Math.PI}shuffle(e){let t=e.length;for(;--t;){let n=Math.floor(Math.random()*(t+1));if(t==n)continue;let s=e[t];e[t]=e[n],e[n]=s}}replaceAll(e,t,n){return e.split(t).join(n)}sort(e,t,n=!0){n?e.sort((s,r)=>r[t]-s[t]):e.sort((s,r)=>s[t]-r[t])}distance(e,t,n,s){const r=e-n,a=t-s;return Math.sqrt(r*r+a*a)}numStr(e,t){let n=String(e);if(n.length>=t)return n;const s=t-n.length;let r=0;for(;r<s;)n="0"+n,r++;return n}isIE(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1||e.indexOf("edge")!=-1}isIE2(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1}isWin(){return window.navigator.platform.indexOf("Win")!=-1}isChrome(){return window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1}isFF(){return window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1}isSafari(){return window.navigator.userAgent.toLowerCase().indexOf("safari")!=-1&&!this.isChrome()}useWebGL(){try{const e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(window.WebGLRenderingContext&&t&&t.getShaderPrecisionFormat)}catch{return!1}}getQuery(e){e=e.replace(/[€[]/,"\u20AC\u20AC\u20AC[").replace(/[€]]/,"\u20AC\u20AC\u20AC]");const n=new RegExp("[\u20AC\u20AC?&]"+e+"=([^&//]*)").exec(window.location.href);return n==null?"":n[1]}isTouchDevice(){return"ontouchstart"in window||navigator!=null&&navigator.maxTouchPoints>0}isPc(){return _.mobile()==!1}isSp(){return _.mobile()}isAod(){return _.android()}isIPhone(){return _.iphone()}isIPad(){return _.tablet()}};let o=C;i(o,"_instance");const z=class{constructor(){i(this,"FLG_PARAM",location.href.includes("10.0.1.33")||location.href.includes("localhost"));i(this,"FLG_STATS",location.href.includes("p=yes"));i(this,"FLG_TEST",location.href.includes("10.0.1.33")||location.href.includes("localhost"));i(this,"PATH_IMG","./assets/img/");i(this,"USE_TOUCH",o.instance.isTouchDevice());i(this,"BREAKPOINT",768);i(this,"LG_PSD_WIDTH",1600);i(this,"XS_PSD_WIDTH",750);i(this,"IS_SIMPLE",o.instance.isPc()&&o.instance.isSafari());i(this,"IS_PC",o.instance.isPc());i(this,"IS_SP",o.instance.isSp());i(this,"IS_AND",o.instance.isAod());i(this,"IS_TAB",o.instance.isIPad());i(this,"USE_ROLLOVER",o.instance.isPc()&&!o.instance.isIPad())}static get instance(){return this._instance||(this._instance=new z),this._instance}};let c=z;i(c,"_instance");const L=class{constructor(){i(this,"_useFullScreen",o.instance.isSp()||o.instance.isIPad())}static get instance(){return this._instance||(this._instance=new L),this._instance}ratio(){return window.devicePixelRatio||1}px(e){return e+"px"}useScreen(){return screen!=null}sw(){return window.innerWidth}sh(){return this._useFullScreen?screen.height:window.innerHeight}screenOffsetY(){return(window.innerHeight-this.sh())*.5}screen(){return window.innerWidth<=c.instance.BREAKPOINT?u.XS:u.LG}isXS(){return this.screen()==u.XS}isLG(){return this.screen()==u.LG}val(e,t){return this.isXS()?e:t}r(e){const t=this.val(c.instance.XS_PSD_WIDTH,c.instance.LG_PSD_WIDTH);return e/t*this.sw()}sin1(e){return Math.sin(e)+Math.sin(2*e)}sin2(e){return(Math.sin(e)+Math.sin(2.2*e+5.52)+Math.sin(2.9*e+.93)+Math.sin(4.6*e+8.94))/4}};let d=L;i(d,"_instance");class K{constructor(e={}){i(this,"opt");i(this,"el");this.opt=e,this.el=this.opt.el}init(){}dispose(){this.opt=null,this.el=null}getEl(){return this.el}hasData(e){return this.getEl().getAttribute(e)!=null}getData(e,t){const n=this.getEl().getAttribute(e);return n==null?t:n}qs(e){return this.el.querySelector(e)}qsAll(e){return this.el.querySelectorAll(e)}hasClass(e){return this.el.classList.contains(e)}addClass(e){this.el.classList.add(e)}attachClass(e,t){e!=null&&e.classList.add(t)}detachClass(e,t){e!=null&&e.classList.remove(t)}removeClass(e){this.el.classList.remove(e)}getWidth(e){var n;let t=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,null).width;return Number(t==null?void 0:t.replace("px",""))}getHeight(e){var t;if(e==null)return 0;{let n=(t=document.defaultView)==null?void 0:t.getComputedStyle(e,null).height;return Number(n==null?void 0:n.replace("px",""))}}getRect(e){var n;const t=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,null);return t!=null?{width:Number(t.width.replace("px","")),height:Number(t.height.replace("px",""))}:{}}getDataNumber(e){const t=this.getEl().getAttribute(e);return t==null?0:Number(t)}getOffsetTop(e){const t=e.getBoundingClientRect();var n=window.pageYOffset||document.documentElement.scrollTop;return t.top+n}getOffset(e){const t=e.getBoundingClientRect();var n=window.pageYOffset||document.documentElement.scrollTop;return{y:t.top+n,x:t.left}}_call(e,t=null){e!=null&&(t!=null?e(t):e())}}const E=class{constructor(){i(this,"cnt",0);i(this,"_updateList",[]);i(this,"play",!0);i(this,"_update",()=>{if(this.play){this.cnt++;for(var e of this._updateList)e!=null&&e();window.requestAnimationFrame(this._update)}});window.requestAnimationFrame(this._update)}static get instance(){return this._instance||(this._instance=new E),this._instance}add(e){this._updateList.push(e)}remove(e){const t=[];this._updateList.forEach(n=>{n!=e&&t.push(n)}),this._updateList=t}};let v=E;i(v,"_instance");class b{constructor(e=0,t=0,n=0,s=0){i(this,"x",0);i(this,"y",0);i(this,"width",0);i(this,"height",0);this.x=e,this.y=t,this.width=n,this.height=s}}const O=class{constructor(){i(this,"_list",[]);i(this,"_timer",null);i(this,"size",new b);i(this,"oldSize",new b);i(this,"_call",()=>{for(var e of this._list)e!=null&&e()});window.addEventListener("resize",()=>{this._eResize()},!1)}static get instance(){return this._instance||(this._instance=new O),this._instance}_eResize(){this._setStageSize(),this._timer===null&&(clearInterval(this._timer),this._timer=null),this._timer=setTimeout(()=>{this._call(),this.oldSize.width=this.size.width,this.oldSize.height=this.size.height},300)}_setStageSize(){this.size.width=window.innerWidth,this.size.height=window.innerHeight}add(e){this._list.push(e)}remove(e){const t=[];this._list.forEach(n=>{n!=e&&t.push(n)}),this._list=t}};let w=O;i(w,"_instance");class Q{constructor(e=0,t=0){i(this,"x",0);i(this,"y",0);this.x=e,this.y=t}set(e=0,t=0){this.x=e,this.y=t}copy(e){this.x=e.x,this.y=e.y}}class J extends K{constructor(e={}){super(e);i(this,"_updateHandler");i(this,"_resizeHandler");i(this,"_c",0);i(this,"_isEnter",!1);i(this,"_isOneEnter",!1);i(this,"_observer");i(this,"_elPos",new Q(0,9999));i(this,"_eRollOverHandler");i(this,"_eRollOutHandler");(e.isDefEvent==null||e.isDefEvent)&&(this._updateHandler=this._update.bind(this),v.instance.add(this._updateHandler),this._resizeHandler=this._resize.bind(this),w.instance.add(this._resizeHandler))}init(){super.init()}_setHover(){this._eRollOverHandler=this._eRollOver.bind(this),this._eRollOutHandler=this._eRollOut.bind(this),this.getEl().addEventListener("mouseenter",this._eRollOverHandler),this.getEl().addEventListener("mouseleave",this._eRollOutHandler)}_disposeHover(){this._eRollOverHandler!=null&&(this.getEl().removeEventListener("mouseenter",this._eRollOverHandler),this.getEl().removeEventListener("mouseleave",this._eRollOutHandler),this._eRollOverHandler=null,this._eRollOutHandler=null)}_eRollOver(){}_eRollOut(){}_setObserver(){this._observer=new IntersectionObserver(e=>{e!=null&&e.forEach(t=>{t!=null&&t.intersectionRatio>0?this._eEnter():this._eLeave()})},{root:null}),setTimeout(()=>{if(this._observer!=null&&this._observer!=null){const e=this.getEl();e!=null&&this._observer.observe(e)}},100)}_eEnter(){this._isEnter=!0}_eLeave(){this._isEnter=!1}_disposeObserver(){(this._observer!=null||this._observer!=null)&&(this._observer.unobserve(this.getEl()),this._observer=null)}dispose(){this._updateHandler!=null&&(v.instance.remove(this._updateHandler),this._updateHandler=null),this._resizeHandler!=null&&(w.instance.remove(this._resizeHandler),this._resizeHandler=null),this._disposeHover(),this._disposeObserver(),super.dispose()}css(e,t){const n=e.style;for(var s in t)n[s]=t[s]}_update(){this._c++}_resize(){}}class Z extends J{constructor(e={}){super(e);i(this,"camera");i(this,"renderer");i(this,"mainScene");i(this,"isRender",!0);i(this,"renderSize",new b);let t={canvas:this.el,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"};this.renderer=new G(t),this.renderer.autoClear=!0,this.renderer.setClearColor(16777215,1),this.mainScene=new F,this.camera=this._makeCamera(),this.updateCamera(this.camera,10,10)}init(){super.init()}_makeCamera(){return new N(80,1,1e-7,5e4)}updateCamera(e,t=10,n=10){this._updateOrthCamera(e,t,n)}_updateOrthCamera(e,t=10,n=10){e.aspect=t/n,e.updateProjectionMatrix(),e.position.z=n/Math.tan(e.fov*Math.PI/360)/2}_update(){super._update()}_setUni(e,t,n){const s=this._getUni(e);s[t].value=n}_getUni(e){return e.material.uniforms}}class g{constructor(){}}i(g,"HIGH",0),i(g,"MIDDLE",1),i(g,"LOW",2);const A=class{constructor(){i(this,"fps",g.MIDDLE);i(this,"debug",document.querySelector(".l-debug"));i(this,"_dat");i(this,"_stats");i(this,"particle",{x:{value:0,min:-100,max:100},y:{value:0,min:-100,max:100}});c.instance.FLG_PARAM&&this.makeParamGUI(),c.instance.FLG_STATS&&(this._stats=q(),document.body.appendChild(this._stats.domElement)),v.instance.add(()=>{this._update()})}_update(){this._stats!=null&&this._stats.update()}static get instance(){return this._instance||(this._instance=new A),this._instance}makeParamGUI(){this._dat==null&&(this._dat=new W,this._add(this.particle,"particle"))}_add(e,t){const n=this._dat.addFolder(t);for(var s in e){const r=e[s];r.use==null&&(r.type=="color"?n.addColor(r,"value").name(s):r.list!=null?n.add(r,"value",r.list).name(s):n.add(r,"value",r.min,r.max).name(s))}}};let f=A;i(f,"_instance");class $ extends Z{constructor(e){super(e);i(this,"_con");i(this,"_mesh");i(this,"_val",0);i(this,"_color",[]);i(this,"_imgSize",256);i(this,"_sample",[]);i(this,"_oldAng",-1);i(this,"_move",new x);i(this,"_rot",new x);var t,n;for(let s=0;s<10;s++)this._color.push(new y(o.instance.random(0,1),o.instance.random(0,1),o.instance.random(0,1)));this._color[0]=new y(1-this._color[1].r,1-this._color[1].g,1-this._color[1].b),this._con=new B,this.mainScene.add(this._con),!c.instance.FLG_TEST&&window.DeviceOrientationEvent?(t=document.querySelector(".l-btn"))==null||t.addEventListener("click",()=>{window.DeviceOrientationEvent.requestPermission().then(s=>{var r;s=="granted"&&(window.addEventListener("deviceorientation",a=>{this._oldAng!=-1?this._oldAng=this._val:this._oldAng=Number(a.alpha),this._val=Number(a.alpha),f.instance.debug.innerHTML="beta:"+Math.floor(Number(a.beta))+" gamma:"+Math.floor(Number(a.gamma)),this._rot.y=Number(a.gamma),this._rot.z=Number(a.beta)},!0),(r=document.querySelector(".l-btn"))==null||r.classList.add("-none"))})}):(n=document.querySelector(".l-btn"))==null||n.classList.add("-none"),this._loadImg(),this._resize()}_loadImg(){const e=new Image;e.src=c.instance.PATH_IMG+"sample-0.png",e.onload=()=>{const t=document.createElement("canvas");t.width=t.height=this._imgSize;const n=t.getContext("2d");n.drawImage(e,0,0),e.style.display="none";const r=n.getImageData(0,0,t.width,t.height).data;for(let a=0;a<r.length;a+=4){const h=~~(a/4),p=~~(h%t.width),m=~~(h/t.width),M=r[a+0],I=r[a+1],H=r[a+2],R=r[a+3],P=1;R>0&&this._sample.push({color:new y(M/255,I/255,H/255),pos:new x((p-this._imgSize*.5)*P,(m-this._imgSize*.5)*-1*P,0)})}console.log(this._sample.length),this._makeMesh()}}_makeMesh(){this._mesh=new U(this.getGeo(),new V({vertexShader:j,fragmentShader:Y,transparent:!0,depthTest:!1,uniforms:{alpha:{value:0},size:{value:2},time:{value:0},ang:{value:0},move:{value:this._move}}})),this._con.add(this._mesh)}_update(){super._update(),this._con.position.y=d.instance.screenOffsetY()*-1;const e=d.instance.sw();if(c.instance.FLG_TEST&&(this._move.x=f.instance.particle.x.value*.01*e*1,this._move.y=f.instance.particle.y.value*.01*e*1),this._mesh!=null){const t=d.instance.r(3);if(this._mesh.scale.set(t,t,1),this._setUni(this._mesh,"size",10),this._setUni(this._mesh,"time",this._c*2),!c.instance.FLG_TEST){const n=e,s=o.instance.map(this._rot.y,-1,1,-90,90)*n,r=o.instance.map(this._rot.z,1,-1,-90,90)*n;this._move.x+=(s-this._move.x)*.1,this._move.y+=(r-this._move.y)*.1}}this.isNowRenderFrame()&&this._render()}_render(){this.renderer.setClearColor(16777215,1),this.renderer.render(this.mainScene,this.camera)}isNowRenderFrame(){return this.isRender}_resize(e=!0){super._resize();const t=d.instance.sw(),n=d.instance.sh();if((c.instance.IS_SP||c.instance.IS_TAB)&&t==this.renderSize.width&&this.renderSize.height*2>n)return;this.renderSize.width=t,this.renderSize.height=n,this.updateCamera(this.camera,t,n);let s=window.devicePixelRatio||1;this.renderer.setPixelRatio(s),this.renderer.setSize(t,n),this.renderer.clear(),e&&this._render()}getGeo(){const e=this._sample.length,t=new X,n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3);let a=0,h=0;for(;h<e;){const p=this._sample[h].pos,m=this._sample[h].color;n[a*3+0]=p.x,n[a*3+1]=p.y,n[a*3+2]=0,s[a*3+0]=1+o.instance.random(0,1),s[a*3+1]=1+o.instance.random(0,1),s[a*3+2]=0,r[a*3+0]=m.r,r[a*3+1]=m.g,r[a*3+2]=m.b,a++,h++}return t.setAttribute("position",new S(n,3)),t.setAttribute("info",new S(s,3)),t.setAttribute("color",new S(r,3)),t.computeBoundingSphere(),t}}new $({el:document.querySelector("#js-con")});
