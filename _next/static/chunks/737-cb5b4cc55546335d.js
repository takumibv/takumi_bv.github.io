(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[737],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},1752:function(e,t,r){e.exports=r(6949)},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},l=r(1003),s=r(880),c=r(9246);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),o=i.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,h=o.as,v=e.children,p=e.replace,m=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var x=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,j=a(c.useIntersection({rootMargin:"200px"}),2),y=j[0],_=j[1],k=i.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);i.default.useEffect((function(){var e=_&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(n,d,h,{locale:t})}),[h,d,_,b,r,n]);var w={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:i}))}(e,n,d,h,p,m,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&l.getDomainLocale(h,C,n&&n.locales,n&&n.domainLocales);w.href=E||l.addBasePath(l.addLocale(h,C,n&&n.defaultLocale))}return i.default.cloneElement(t,w)};t.default=d},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],h=f[1],v=a(o.useState(t?t.current:null),2),p=v[0],m=v[1],g=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),c.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:p,rootMargin:r}))}),[n,p,r,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&m(t.current)}),[t]),[g,d]};var o=r(7294),i=r(4686),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},7737:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(5893),a=r(9008),o=r(7294),i=r(627),l=r(345),s=r(2974),c=function(e){var t=e.hasProfile,r=void 0===t||t,a=(0,l.Z)({isBottom:!0,speed:1}).ref;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"container container--sm mx-auto pt-6 overflow-hidden",children:r&&(0,n.jsx)(i.Z,{})}),(0,n.jsxs)("footer",{className:"l-footer",children:[(0,n.jsx)("div",{className:"l-footer__bg",ref:a}),(0,n.jsxs)("div",{className:"container mx-auto clearfix",children:[(0,n.jsx)("div",{className:"l-footer__left",children:(0,n.jsx)("img",{src:(0,s.H)("/images/logo_text.svg"),alt:"",width:60,height:60})}),(0,n.jsx)("div",{className:"l-footer__right",children:(0,n.jsx)("p",{className:"text text-center",children:"Takumi, All Right Reserved."})})]})]})]})},u=r(1664),f=r(1163),d=r(4184),h=r.n(d),v=r(4767);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}var g=function(){var e=(0,f.useRouter)(),t=(0,o.useState)(!1),r=t[0],a=t[1],i=(0,o.useState)(!1),l=i[0],c=i[1],d=(0,v.Z)().props,p=e.asPath,g=e.pathname,b=e.events;return(0,o.useEffect)((function(){a("/#about"===p);var e=function(e){a("/#about"===e),c(!1)},t=function(){c(!1)};return b.on("hashChangeStart",e),b.on("routeChangeStart",e),window.addEventListener("resize",t),function(){b.off("hashChangeStart",e),b.off("routeChangeStart",e),window.removeEventListener("resize",t)}}),[]),(0,n.jsx)("div",{className:"l-header",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"l-header__inner",children:[(0,n.jsx)("div",{className:"l-header__logo",children:(0,n.jsx)(u.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:(0,s.H)("/images/logo.svg"),alt:"",width:32,height:32})})})}),(0,n.jsx)("div",{className:h()("l-header__burger",l&&"l-header__burger--open"),children:(0,n.jsxs)("a",{href:"#",className:"l-header__burger-button",onClick:function(e){e.preventDefault(),c(!l)},children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]})}),(0,n.jsxs)("div",{className:"l-header__nav",children:[(0,n.jsx)("div",{className:"l-header__nav-overlay",onClick:function(){return c(!1)}}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:h()("tablet:hidden l-header__nav-item","/"===g&&"l-header__nav-item--active"),children:(0,n.jsx)(u.default,{href:"/",children:(0,n.jsx)("a",{children:"HOME"})})}),(0,n.jsx)("li",{className:h()("hidden tablet:block l-header__nav-item js-nav-about",r&&"l-header__nav-item--active"),children:(0,n.jsx)("a",m({href:"/#about"},d,{children:"ABOUT"}))}),(0,n.jsx)("li",{className:h()("l-header__nav-item","/works"===g&&"l-header__nav-item--active"),children:(0,n.jsx)(u.default,{href:"/works",children:(0,n.jsx)("a",{children:"WORKS"})})}),(0,n.jsx)("li",{className:h()("l-header__nav-item"),children:(0,n.jsx)(u.default,{href:"https://qiita.com/takumibv",children:(0,n.jsx)("a",{target:"_blank",rel:"noreferrer",children:"BLOG"})})}),(0,n.jsx)("li",{className:h()("l-header__nav-item","/contact"===g&&"l-header__nav-item--active"),children:(0,n.jsx)(u.default,{href:"/contact",children:(0,n.jsx)("a",{children:"CONTACT"})})})]})]})]})})})},b=function(e){var t=e.title,r=e.hasProfile,i=e.children;return(0,o.useEffect)((function(){window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{children:(0,n.jsx)("title",{children:t})}),(0,n.jsx)(g,{}),i,(0,n.jsx)(c,{hasProfile:r})]})}},627:function(e,t,r){"use strict";var n=r(5893),a=r(7294),o=r(2947),i=r(6038),l=r(2974),s=["90% 80%","60% 30%","30% 60%","40% 50% 50% 50%","50% 40% 50% 50%","50% 50% 40% 50%","50% 50% 50% 40%","80% 50% 50% 50%","50% 80% 50% 50%","50% 50% 80% 50%","50% 50% 50% 80%","30% 75%","30% 85%","75% 50%","50% 75%","85% 30%"];t.Z=function(e){var t=e.showContact,r=(0,a.useState)(0),c=r[0],u=r[1],f=(0,a.useRef)(null),d=(0,a.useState)(),h=d[0],v=d[1],p=(0,a.useState)(),m=p[0],g=p[1],b=(0,a.useState)(),x=b[0],j=b[1],y=(0,a.useState)(),_=y[0],k=y[1],w=(0,a.useState)(!1),C=w[0],E=w[1],N=(0,a.useCallback)((function(){var e=Math.floor(Math.random()*s.length);return s[e]}),[]);(0,a.useEffect)((function(){v(i.p8.to(f.current,{repeat:-1,duration:1.5,repeatRefresh:!0,yoyo:!0,ease:"back.inOut(4)",borderRadius:N})),g(i.p8.to(f.current,{duration:.3,scale:1.1,paused:!0})),j(i.p8.to(f.current,{duration:.6,ease:"power4.out",rotate:"360deg",paused:!0})),k(i.p8.timeline({paused:!0}).to(f.current,{duration:2,ease:"back.out(2)",rotate:"1440deg"}).to(f.current,{duration:1.5,y:"150vh",ease:"sine.in"},"-=1.5").set(f.current,{scale:0,y:0},"+=0.5").to(f.current,{duration:1,scale:1,ease:"back.out(2)"}))}),[]),(0,a.useEffect)((function(){return function(){null===h||void 0===h||h.kill()}}),[h]),(0,a.useEffect)((function(){var e,t,r=function(){return!C&&(null===m||void 0===m?void 0:m.play())},n=function(){return null===m||void 0===m?void 0:m.reverse()};return null===(e=f.current)||void 0===e||e.addEventListener("mouseenter",r),null===(t=f.current)||void 0===t||t.addEventListener("mouseleave",n),function(){var e,t;null===(e=f.current)||void 0===e||e.removeEventListener("mouseenter",r),null===(t=f.current)||void 0===t||t.removeEventListener("mouseleave",n)}}),[m,C]);var S=(0,a.useCallback)((function(){C||(c<4?(null===x||void 0===x||x.restart(),u(c+1)):(E(!0),null===x||void 0===x||x.pause(),null===_||void 0===_||_.restart(),null===_||void 0===_||_.eventCallback("onComplete",(function(){E(!1),u(0)}))))}),[C,c,x,_]);return(0,a.useEffect)((function(){var e;return null===(e=f.current)||void 0===e||e.addEventListener("click",S),function(){var e;null===(e=f.current)||void 0===e||e.removeEventListener("click",S)}}),[S]),(0,n.jsxs)("div",{className:"profile",children:[(0,n.jsx)("div",{className:"profile__icon js-icon-animation",ref:f,children:(0,n.jsx)("img",{src:(0,l.H)("/images/profile.JPG"),alt:""})}),(0,n.jsx)("p",{className:"profile__name",children:"Takumibv"}),(0,n.jsx)(o.Z,{showContact:t})]})}},2947:function(e,t,r){"use strict";var n=r(5893),a=(r(7294),r(1664)),o=r(4184),i=r.n(o),l=r(3991);t.Z=function(e){var t=e.className,r=e.showContact,o=void 0===r||r;return(0,n.jsxs)("div",{className:i()("sns-links",t),children:[(0,n.jsx)(a.default,{href:"https://twitter.com/takumi_bv",children:(0,n.jsx)("a",{target:"_blank",className:"sns-links-item",rel:"noreferrer",children:(0,n.jsx)(l.nyZ,{size:28,stroke:.8,color:"#72AD8C"})})}),(0,n.jsx)(a.default,{href:"https://github.com/takumibv",children:(0,n.jsx)("a",{target:"_blank",className:"sns-links-item",rel:"noreferrer",children:(0,n.jsx)(l.oBr,{size:28,stroke:.8,color:"#72AD8C"})})}),(0,n.jsx)(a.default,{href:"https://qiita.com/takumibv",children:(0,n.jsx)("a",{target:"_blank",className:"sns-links-item",rel:"noreferrer",children:(0,n.jsx)(l.F1B,{size:28,stroke:.8,color:"#72AD8C"})})}),o&&(0,n.jsx)(a.default,{href:"/contact",children:(0,n.jsx)("a",{className:"sns-links-item",children:(0,n.jsx)(l.haR,{size:28,stroke:.8,color:"#72AD8C"})})})]})}},345:function(e,t,r){"use strict";var n=r(7294),a=r(6038);t.Z=function(e){var t=e||{},r=t.speed,o=void 0===r?1:r,i=t.isTop,l=void 0!==i&&i,s=t.isBottom,c=void 0!==s&&s,u=(0,n.useState)(0),f=u[0],d=u[1],h=(0,n.useRef)(null),v=(0,n.useCallback)((function(e){var t;d(null!==(t=e.target.innerHeight)&&void 0!==t?t:0)}),[]);return(0,n.useEffect)((function(){return d(window.innerHeight),window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}}),[]),(0,n.useEffect)((function(){var e,t=null!==(e=Math.floor(f/2))&&void 0!==e?e:0,r=a.p8.timeline({ease:"none",scrollTrigger:{trigger:h.current,start:l?"top top":"top bottom",end:c?"top top":"bottom top",scrub:!0}});return r.fromTo(h.current,{backgroundPosition:"50% ".concat(l?0:-t*o,"px")},{backgroundPosition:"50% ".concat(c?0:t*o,"px")}),function(){var e;r.kill(),null===(e=r.scrollTrigger)||void 0===e||e.kill()}}),[f,l,c,o]),{ref:h}}},4767:function(e,t,r){"use strict";var n=r(7294),a=r(6038),o=r(1163);t.Z=function(){var e=(0,n.useRef)(null),t=(0,o.useRouter)(),r=(0,n.useCallback)((function(r){var n;if(r.preventDefault(),null===(n=e.current)||void 0===n?void 0:n.href){var o=e.current.href,i=o;if(o.match(/^https?:\/\//g)){var l=new URL(o),s=l.pathname;i=l.hash,s!=="".concat(t.basePath).concat(t.pathname)&&t.push(o)}if(!a.p8.utils.selector(document)(i).length)return t.replace(o);a.p8.to(window,{scrollTo:i,duration:.5,ease:"power4.out"}).eventCallback("onComplete",(function(){t.replace(o)}))}}),[t]);return{props:{ref:e,onClick:r}}}},2974:function(e,t,r){"use strict";r.d(t,{H:function(){return a}});var n=r(1752);function a(e){return(0,n.default)().publicRuntimeConfig.urlPrefix+e}},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}}]);