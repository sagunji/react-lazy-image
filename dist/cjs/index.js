"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e),n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};exports.LazyImage=function(t){var o=t.source,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(t,["source"]),u=e.useState(!1),c=u[0],i=u[1],f=e.useRef(null);return function(t,r){var n,o=new WeakMap;function a(e){e.forEach((function(e){if(o.has(e.target)){var t=o.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),o.delete(e.target),t())}}))}function u(){return void 0===n&&(n=new IntersectionObserver(a,{rootMargin:"100px",threshold:.15})),n}e.useEffect((function(){var e=t.current,n=u();return o.set(e,r),n.observe(e),function(){o.delete(e),n.unobserve(e)}}),[])}(f,(function(){i(!0)})),r.default.createElement("img",n({ref:f,src:c?o:void 0},a))};
//# sourceMappingURL=index.js.map