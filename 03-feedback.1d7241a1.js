function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(S,t),l?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function S(){var e=p();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function h(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function w(){var e=p(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");let j={};y.addEventListener("submit",(function(e){const t=JSON.parse(localStorage.getItem("feedback-form-state"));e.preventDefault(),console.log(t),e.target.reset(),localStorage.removeItem("feedback-form-state"),j={}})),y.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e),n=y.querySelectorAll("[name]");for(const e of n)Object.keys(t).includes(e.name)&&(e.value=t[e.name],j[e.name]=t[e.name])}}();
//# sourceMappingURL=03-feedback.1d7241a1.js.map
