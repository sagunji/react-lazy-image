import e,{useEffect as r,useState as t,useRef as n}from"react";var o=function(){return o=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},o.apply(this,arguments)};var a=function(a){var c=a.source,i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(a,["source"]),u=t(!1),f=u[0],s=u[1],l=n(null);return function(e,t){var n,o=new WeakMap;function a(e){e.forEach((function(e){if(o.has(e.target)){var r=o.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),o.delete(e.target),r())}}))}function c(){return void 0===n&&(n=new IntersectionObserver(a,{rootMargin:"100px",threshold:.15})),n}r((function(){var r=e.current,n=c();return o.set(r,t),n.observe(r),function(){o.delete(r),n.unobserve(r)}}),[])}(l,(function(){s(!0)})),e.createElement("img",o({ref:l,src:f?c:void 0},i))};export{a as LazyImage};
//# sourceMappingURL=index.js.map