"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{2954:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var i=t(5893),r=t(7294),o=t(2212),a=t(9365),c=t(1764),u=t(7379);function s(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function d(){var n=s(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n\n  color: #fff;\n  text-align: center;\n\n  background-position: center;\n"]);return d=function(){return n},n}function f(){var n=s(["\n  position: absolute;\n  top: 5rem;\n  left: 0;\n  z-index: 9;\n\n  width: 100%;\n  font-size: 4rem;\n\n  @media (max-width: 480px) {\n    font-size: 2.5rem;\n  }\n\n  h1 {\n    font-size: inherit;\n  }\n  span {\n    background: linear-gradient(orange, red);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n"]);return f=function(){return n},n}function l(){var n=s(["\n  position: absolute;\n  inset: 0;\n\n  height: 100%;\n  width: 100%;\n\n  cursor: pointer;\n  background-color: transparent;\n  background-repeat: no-repeat;\n"]);return l=function(){return n},n}function h(){var n=s(["\n  position: absolute;\n  bottom: 5rem;\n  z-index: 9;\n\n  width: 100%;\n"]);return h=function(){return n},n}u.ZP.div(d()),u.ZP.div(f());var v=u.ZP.div(l()),w=(u.ZP.div(h()),function(){var n=0,e=(0,r.useRef)(null),t=(0,r.useState)(!0),u=(t[0],t[1]),s=(0,r.useState)(),d=s[0],f=s[1],l=(0,r.useState)(),h=(l[0],l[1]),w=(0,r.useState)(new o.Pa4(0,1,0))[0],p=(0,r.useState)(new o.Pa4(20*Math.sin(.4*Math.PI),20,40*Math.cos(.1*Math.PI)))[0],b=(0,r.useState)(new o.xsS)[0],m=(0,r.useState)(),S=(m[0],m[1]),g=(0,r.useCallback)((function(){var n=e.current;if(n&&d){var t=n.clientWidth,i=n.clientHeight;d.setSize(t,i)}}),[d]);return(0,r.useEffect)((function(){var t=e.current;if(t&&!d){var i=t.clientWidth,r=t.clientHeight,s=new o.CP7({antialias:!0,alpha:!0});s.setPixelRatio(window.devicePixelRatio),s.setSize(i,r),s.outputEncoding=o.knz,0==n&&(t.appendChild(s.domElement),n=1.7),f(s);var l=2.3,v=new o.iKG(-2.3,2.9,l+-.7,-1.15,.001,5e4);v.position.copy(p),v.lookAt(w),h(v);var m=new o.Mig(13421772,.22);b.add(m);var g=new a.z(v,s.domElement);g.autoRotate=!0,g.enablePan=!1,g.enableZoom=!1,g.target=w,S(g),(0,c.D)(b,"/little-witch/knight.glb",{receiveShadow:!1,castShadow:!1}).then((function(){P(),u(!1)}));var k=null,x=0,P=function(){k=requestAnimationFrame(P);var n;if((x=x<=100?x+1:x)<=100){var e=p,t=(n=x/240,-Math.sqrt(1-Math.pow(n-1,4)));v.position.y=10,v.position.x=e.x*Math.cos(t),v.lookAt(w)}else g.update();s.render(b,v)};return function(){cancelAnimationFrame(k),s.dispose()}}}),[]),(0,r.useEffect)((function(){return window.addEventListener("resize",g,!1),function(){window.removeEventListener("resize",g,!1)}}),[d,g]),(0,i.jsx)("div",{className:"LitterWitch",children:(0,i.jsx)(v,{ref:e})})})},1764:function(n,e,t){t.d(e,{D:function(){return r}});var i=t(1217);function r(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{receiveShadow:!0,castShadow:!0},r=t.receiveShadow,o=t.castShadow;return new Promise((function(t,a){(new i.E).load(e,(function(e){var i=e.scene;i.name="dog",i.position.y=0,i.position.x=0,i.receiveShadow=r,i.castShadow=o,n.add(i),i.traverse((function(n){n.isMesh&&(n.castShadow=o,n.receiveShadow=r)})),t(i)}),void 0,(function(n){a(n)}))}))}}}]);