
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([1],{127:function(t,e,n){"use strict";var r=n(128),o=n(266),a="function"==typeof Symbol&&"symbol"==typeof Symbol(),i=Object.prototype.toString,s=function(t){return"function"==typeof t&&"[object Function]"===i.call(t)},u=Object.defineProperty&&function(){var t={};try{Object.defineProperty(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch(t){return!1}}(),c=function(t,e,n,r){(!(e in t)||s(r)&&r())&&(u?Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n,writable:!0}):t[e]=n)},l=function(t,e){var n=arguments.length>2?arguments[2]:{},i=r(e);a&&(i=i.concat(Object.getOwnPropertySymbols(e))),o(i,function(r){c(t,r,e[r],n[r])})};l.supportsDescriptors=!!u,t.exports=l},128:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString,a=Array.prototype.slice,i=n(265),s=Object.prototype.propertyIsEnumerable,u=!s.call({toString:null},"toString"),c=s.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(t){var e=t.constructor;return e&&e.prototype===t},h={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},p=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!h["$"+t]&&r.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{f(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),d=function(t){if("undefined"==typeof window||!p)return f(t);try{return f(t)}catch(t){return!1}},y=function(t){var e=null!==t&&"object"==typeof t,n="[object Function]"===o.call(t),a=i(t),s=e&&"[object String]"===o.call(t),f=[];if(!e&&!n&&!a)throw new TypeError("Object.keys called on a non-object");var h=c&&n;if(s&&t.length>0&&!r.call(t,0))for(var p=0;p<t.length;++p)f.push(String(p));if(a&&t.length>0)for(var y=0;y<t.length;++y)f.push(String(y));else for(var v in t)h&&"prototype"===v||!r.call(t,v)||f.push(String(v));if(u)for(var m=d(t),b=0;b<l.length;++b)m&&"constructor"===l[b]||!r.call(t,l[b])||f.push(l[b]);return f};y.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var t=Object.keys;Object.keys=function(e){return t(i(e)?a.call(e):e)}}}else Object.keys=y;return Object.keys||y},t.exports=y},129:function(t,e,n){"use strict";var r=n(128),o=n(130),a=function(t){return void 0!==t&&null!==t},i=n(268)(),s=Object,u=o.call(Function.call,Array.prototype.push),c=o.call(Function.call,Object.prototype.propertyIsEnumerable),l=i?Object.getOwnPropertySymbols:null;t.exports=function(t,e){if(!a(t))throw new TypeError("target must be an object");var n,o,f,h,p,d,y,v=s(t);for(n=1;n<arguments.length;++n){o=s(arguments[n]),h=r(o);var m=i&&(Object.getOwnPropertySymbols||l);if(m)for(p=m(o),f=0;f<p.length;++f)y=p[f],c(o,y)&&u(h,y);for(f=0;f<h.length;++f)y=h[f],d=o[y],c(o,y)&&(v[y]=d)}return v}},130:function(t,e,n){"use strict";var r=n(267);t.exports=Function.prototype.bind||r},131:function(t,e,n){"use strict";var r=n(129),o=function(){if(!Object.assign)return!1;for(var t="abcdefghijklmnopqrst",e=t.split(""),n={},r=0;r<e.length;++r)n[e[r]]=e[r];var o=Object.assign({},n),a="";for(var i in o)a+=i;return t!==a},a=function(){if(!Object.assign||!Object.preventExtensions)return!1;var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}return!1};t.exports=function(){return Object.assign?o()?r:a()?r:Object.assign:r}},258:function(t,e,n){t.exports=n(259)},259:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),a=r(o),i=n(0),s=r(i),u=n(1),c=r(u),l=n(260),f=r(l),h=n(32),p=r(h),d=(0,a.default)(["\n  & button {\n    margin: 16px;\n  }\n"],["\n  & button {\n    margin: 16px;\n  }\n"]),y=function(t){var e=t.className;return s.default.createElement(p.default,{theme:{primary:"#03A9F4"}},s.default.createElement("div",{className:e},s.default.createElement("h1",null,"Placeholder"),s.default.createElement(f.default,{href:"/buttons"},s.default.createElement("a",null,"Buttons Page")),s.default.createElement("br",null),s.default.createElement(f.default,{href:"/cards"},s.default.createElement("a",null,"Cards Page")),s.default.createElement("br",null),s.default.createElement(f.default,{href:"/text-fields"},s.default.createElement("a",null,"TextFields Page")),s.default.createElement("br",null),s.default.createElement(f.default,{href:"/tabs"},s.default.createElement("a",null,"Tabs Page")),s.default.createElement("br",null),s.default.createElement(f.default,{href:"/dialog"},s.default.createElement("a",null,"Dialog Page"))))},v=(0,c.default)(y)(d);e.default=v},260:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=(0,g.parse)(t,!1,!0),n=(0,g.parse)((0,S.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}Object.defineProperty(e,"__esModule",{value:!0});var a=n(40),i=r(a),s=n(261),u=r(s),c=n(6),l=r(c),f=n(2),h=r(f),p=n(3),d=r(p),y=n(7),v=r(y),m=n(8),b=r(m),g=n(53),w=n(0),j=r(w),O=n(19),x=r(O),k=n(263),C=r(k),_=n(29),E=r(_),S=n(20),P=function(t){function e(t){var n;(0,h.default)(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];var i=(0,v.default)(this,(n=e.__proto__||(0,l.default)(e)).call.apply(n,[this,t].concat(o)));return i.linkClicked=i.linkClicked.bind(i),i.formatUrls(t),i}return(0,b.default)(e,t),(0,d.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.formatUrls(t)}},{key:"linkClicked",value:function(t){var e=this;if("A"!==t.currentTarget.nodeName||!(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var n=this.props.shallow,r=this.href,a=this.as;if(o(r)){var i=window.location.pathname;r=(0,g.resolve)(i,r),a=a?(0,g.resolve)(i,a):r,t.preventDefault();var s=this.props.scroll;null==s&&(s=a.indexOf("#")<0);var u=this.props.replace,c=u?"replace":"push";E.default[c](r,a,{shallow:n}).then(function(t){t&&s&&window.scrollTo(0,0)}).catch(function(t){e.props.onError&&e.props.onError(t)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var t=window.location.pathname,e=(0,g.resolve)(t,this.href);E.default.prefetch(e)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(t){(0,u.default)(this.props.href)!==(0,u.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function(t){this.href=t.href&&"object"===(0,i.default)(t.href)?(0,g.format)(t.href):t.href,this.as=t.as&&"object"===(0,i.default)(t.as)?(0,g.format)(t.as):t.as}},{key:"render",value:function(){var t=this.props.children,e=this.href,n=this.as;"string"==typeof t&&(t=j.default.createElement("a",null,t));var r=w.Children.only(t),o={onClick:this.linkClicked};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(o.href=n||e),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,_._rewriteUrlForNextExport)(o.href)),j.default.cloneElement(r,o)}}]),e}(w.Component);P.propTypes=(0,C.default)({href:x.default.oneOfType([x.default.string,x.default.object]).isRequired,as:x.default.oneOfType([x.default.string,x.default.object]),prefetch:x.default.bool,replace:x.default.bool,shallow:x.default.bool,passHref:x.default.bool,scroll:x.default.bool,children:x.default.oneOfType([x.default.element,function(t,e){return"string"==typeof t[e]&&A("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired}),e.default=P;var A=(0,S.execOnce)(S.warn)},261:function(t,e,n){t.exports={default:n(262),__esModule:!0}},262:function(t,e,n){var r=n(5),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},263:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){return(0,c.default)(t,o({},d,y))}function i(t){return t&&t[d]===y}function s(t){if(!(0,p.default)(t))throw new TypeError("given propTypes must be an object");if((0,f.default)(t,d)&&!i(t[d]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,c.default)({},t,o({},d,a(function(){function e(e,n,r){var o=Object.keys(e).filter(function(e){return!(0,f.default)(t,e)});return o.length>0?new TypeError(String(r)+": unknown props found: "+String(o.join(", "))):null}return e}())))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var u=n(264),c=r(u),l=n(270),f=r(l),h=n(271),p=r(h),d="prop-types-exact: ​",y={};t.exports=e.default},264:function(t,e,n){"use strict";var r=n(127),o=n(129),a=n(131),i=n(269),s=a();r(s,{getPolyfill:a,implementation:o,shim:i}),t.exports=s},265:function(t,e,n){"use strict";var r=Object.prototype.toString;t.exports=function(t){var e=r.call(t),n="[object Arguments]"===e;return n||(n="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===r.call(t.callee)),n}},266:function(t,e){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString;t.exports=function(t,e,o){if("[object Function]"!==r.call(e))throw new TypeError("iterator must be a function");var a=t.length;if(a===+a)for(var i=0;i<a;i++)e.call(o,t[i],i,t);else for(var s in t)n.call(t,s)&&e.call(o,t[s],s,t)}},267:function(t,e,n){"use strict";var r=Array.prototype.slice,o=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==o.call(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var n,a=r.call(arguments,1),i=function(){if(this instanceof n){var o=e.apply(this,a.concat(r.call(arguments)));return Object(o)===o?o:this}return e.apply(t,a.concat(r.call(arguments)))},s=Math.max(0,e.length-a.length),u=[],c=0;c<s;c++)u.push("$"+c);if(n=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(i),e.prototype){var l=function(){};l.prototype=e.prototype,n.prototype=new l,l.prototype=null}return n}},268:function(t,e,n){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),n=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;t[e]=42;for(e in t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var r=Object.getOwnPropertySymbols(t);if(1!==r.length||r[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(t,e);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},269:function(t,e,n){"use strict";var r=n(127),o=n(131);t.exports=function(){var t=o();return r(Object,{assign:t},{assign:function(){return Object.assign!==t}}),t}},270:function(t,e,n){var r=n(130);t.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},271:function(t,e){function n(t){return t&&"object"===(void 0===t?"undefined":r(t))&&!Array.isArray(t)}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n,t.exports=e.default},29:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){if(!y.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}}function a(t){y.onAppUpdated?y.onAppUpdated(t):(console.warn('An app update detected. Loading the SSR version of "'+t+'"'),window.location.href=t)}function i(t){var e=t.split("#"),n=(0,c.default)(e,2),r=n[1];t=t.replace(/#.*/,"");var o=t.split("?"),a=(0,c.default)(o,2),i=a[0],s=a[1];i=i.replace(/\/$/,"");var u=i;return/\.[^\/]+\/?$/.test(i)||(u=i+"/"),s&&(u=u+"?"+s),r&&(u=u+"#"+r),u}function s(t){var e={};return v.forEach(function(n){(0,f.default)(e,n,{get:function(){return t[n]}})}),m.forEach(function(n){e[n]=function(){return t[n].apply(t,arguments)}}),e}Object.defineProperty(e,"__esModule",{value:!0}),e.Router=e.createRouter=e.withRouter=void 0;var u=n(30),c=r(u),l=n(73),f=r(l),h=n(74);Object.defineProperty(e,"withRouter",{enumerable:!0,get:function(){return r(h).default}}),e._notifyBuildIdMismatch=a,e._rewriteUrlForNextExport=i,e.makePublicRouterInstance=s;var p=n(80),d=r(p),y={router:null,readyCallbacks:[],ready:function(t){if(this.router)return t();"undefined"!=typeof window&&this.readyCallbacks.push(t)}},v=["components","pathname","route","query","asPath"],m=["push","replace","reload","back","prefetch"],b=["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError"];v.forEach(function(t){(0,f.default)(y,t,{get:function(){return o(),y.router[t]}})}),m.forEach(function(t){y[t]=function(){var e;return o(),(e=y.router)[t].apply(e,arguments)}}),b.forEach(function(t){y.ready(function(){y.router.events.on(t,function(){var e="on"+t.charAt(0).toUpperCase()+t.substring(1);if(y[e])try{y[e].apply(y,arguments)}catch(t){console.error("Error when running the Router event: "+e),console.error(t.message+"\n"+t.stack)}})})}),e.default=y;e.createRouter=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return y.router=new(Function.prototype.bind.apply(d.default,[null].concat(e))),y.readyCallbacks.forEach(function(t){return t()}),y.readyCallbacks=[],y.router},e.Router=d.default},41:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(31),a=r(o),i=n(2),s=r(i),u=n(3),c=r(u),l=function(){function t(){(0,s.default)(this,t),this.listeners={}}return(0,c.default)(t,[{key:"on",value:function(t,e){if(this.listeners[t]||(this.listeners[t]=new a.default),this.listeners[t].has(e))throw new Error("The listener already exising in event: "+t);this.listeners[t].add(e)}},{key:"emit",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.listeners[t]&&this.listeners[t].forEach(function(t){return t.apply(void 0,n)})}},{key:"off",value:function(t,e){this.listeners[t].delete(e)}}]),t}();e.default=l},53:function(t,e,n){"use strict";function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function o(t,e,n){if(t&&c.isObject(t)&&t instanceof r)return t;var o=new r;return o.parse(t,e,n),o}function a(t){return c.isString(t)&&(t=o(t)),t instanceof r?t.format():r.prototype.format.call(t)}function i(t,e){return o(t,!1,!0).resolve(e)}function s(t,e){return t?o(t,!1,!0).resolveObject(e):e}var u=n(82),c=n(84);e.parse=o,e.resolve=i,e.resolveObject=s,e.format=a,e.Url=r;var l=/^([a-z0-9.+-]+:)/i,f=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,p=["<",">",'"',"`"," ","\r","\n","\t"],d=["{","}","|","\\","^","`"].concat(p),y=["'"].concat(d),v=["%","/","?",";","#"].concat(y),m=["/","?","#"],b=/^[+a-z0-9A-Z_-]{0,63}$/,g=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,w={javascript:!0,"javascript:":!0},j={javascript:!0,"javascript:":!0},O={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},x=n(85);r.prototype.parse=function(t,e,n){if(!c.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=t.indexOf("?"),o=-1!==r&&r<t.indexOf("#")?"?":"#",a=t.split(o),i=/\\/g;a[0]=a[0].replace(i,"/"),t=a.join(o);var s=t;if(s=s.trim(),!n&&1===t.split("#").length){var f=h.exec(s);if(f)return this.path=s,this.href=s,this.pathname=f[1],f[2]?(this.search=f[2],this.query=e?x.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var p=l.exec(s);if(p){p=p[0];var d=p.toLowerCase();this.protocol=d,s=s.substr(p.length)}if(n||p||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var k="//"===s.substr(0,2);!k||p&&j[p]||(s=s.substr(2),this.slashes=!0)}if(!j[p]&&(k||p&&!O[p])){for(var C=-1,_=0;_<m.length;_++){var E=s.indexOf(m[_]);-1!==E&&(-1===C||E<C)&&(C=E)}var S,P;P=-1===C?s.lastIndexOf("@"):s.lastIndexOf("@",C),-1!==P&&(S=s.slice(0,P),s=s.slice(P+1),this.auth=decodeURIComponent(S)),C=-1;for(var _=0;_<v.length;_++){var E=s.indexOf(v[_]);-1!==E&&(-1===C||E<C)&&(C=E)}-1===C&&(C=s.length),this.host=s.slice(0,C),s=s.slice(C),this.parseHost(),this.hostname=this.hostname||"";var A="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!A)for(var q=this.hostname.split(/\./),_=0,I=q.length;_<I;_++){var R=q[_];if(R&&!R.match(b)){for(var T="",L=0,$=R.length;L<$;L++)R.charCodeAt(L)>127?T+="x":T+=R[L];if(!T.match(b)){var N=q.slice(0,_),U=q.slice(_+1),M=R.match(g);M&&(N.push(M[1]),U.unshift(M[2])),U.length&&(s="/"+U.join(".")+s),this.hostname=N.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),A||(this.hostname=u.toASCII(this.hostname));var F=this.port?":"+this.port:"",D=this.hostname||"";this.host=D+F,this.href+=this.host,A&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==s[0]&&(s="/"+s))}if(!w[d])for(var _=0,I=y.length;_<I;_++){var H=y[_];if(-1!==s.indexOf(H)){var z=encodeURIComponent(H);z===H&&(z=escape(H)),s=s.split(H).join(z)}}var B=s.indexOf("#");-1!==B&&(this.hash=s.substr(B),s=s.slice(0,B));var K=s.indexOf("?");if(-1!==K?(this.search=s.substr(K),this.query=s.substr(K+1),e&&(this.query=x.parse(this.query)),s=s.slice(0,K)):e&&(this.search="",this.query={}),s&&(this.pathname=s),O[d]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var F=this.pathname||"",X=this.search||"";this.path=F+X}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",o=!1,a="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&c.isObject(this.query)&&Object.keys(this.query).length&&(a=x.stringify(this.query));var i=this.search||a&&"?"+a||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||O[e])&&!1!==o?(o="//"+(o||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):o||(o=""),r&&"#"!==r.charAt(0)&&(r="#"+r),i&&"?"!==i.charAt(0)&&(i="?"+i),n=n.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),i=i.replace("#","%23"),e+o+n+i+r},r.prototype.resolve=function(t){return this.resolveObject(o(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(c.isString(t)){var e=new r;e.parse(t,!1,!0),t=e}for(var n=new r,o=Object.keys(this),a=0;a<o.length;a++){var i=o[a];n[i]=this[i]}if(n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol){for(var s=Object.keys(t),u=0;u<s.length;u++){var l=s[u];"protocol"!==l&&(n[l]=t[l])}return O[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(t.protocol&&t.protocol!==n.protocol){if(!O[t.protocol]){for(var f=Object.keys(t),h=0;h<f.length;h++){var p=f[h];n[p]=t[p]}return n.href=n.format(),n}if(n.protocol=t.protocol,t.host||j[t.protocol])n.pathname=t.pathname;else{for(var d=(t.pathname||"").split("/");d.length&&!(t.host=d.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),n.pathname=d.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var y=n.pathname||"",v=n.search||"";n.path=y+v}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var m=n.pathname&&"/"===n.pathname.charAt(0),b=t.host||t.pathname&&"/"===t.pathname.charAt(0),g=b||m||n.host&&t.pathname,w=g,x=n.pathname&&n.pathname.split("/")||[],d=t.pathname&&t.pathname.split("/")||[],k=n.protocol&&!O[n.protocol];if(k&&(n.hostname="",n.port=null,n.host&&(""===x[0]?x[0]=n.host:x.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===d[0]?d[0]=t.host:d.unshift(t.host)),t.host=null),g=g&&(""===d[0]||""===x[0])),b)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,x=d;else if(d.length)x||(x=[]),x.pop(),x=x.concat(d),n.search=t.search,n.query=t.query;else if(!c.isNullOrUndefined(t.search)){if(k){n.hostname=n.host=x.shift();var C=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@");C&&(n.auth=C.shift(),n.host=n.hostname=C.shift())}return n.search=t.search,n.query=t.query,c.isNull(n.pathname)&&c.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!x.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var _=x.slice(-1)[0],E=(n.host||t.host||x.length>1)&&("."===_||".."===_)||""===_,S=0,P=x.length;P>=0;P--)_=x[P],"."===_?x.splice(P,1):".."===_?(x.splice(P,1),S++):S&&(x.splice(P,1),S--);if(!g&&!w)for(;S--;S)x.unshift("..");!g||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),E&&"/"!==x.join("/").substr(-1)&&x.push("");var A=""===x[0]||x[0]&&"/"===x[0].charAt(0);if(k){n.hostname=n.host=A?"":x.length?x.shift():"";var C=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@");C&&(n.auth=C.shift(),n.host=n.hostname=C.shift())}return g=g||n.host&&x.length,g&&!A&&x.unshift(""),x.length?n.pathname=x.join("/"):(n.pathname=null,n.path=null),c.isNull(n.pathname)&&c.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},r.prototype.parseHost=function(){var t=this.host,e=f.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},55:function(t,e,n){"use strict";function r(t,e){for(var n in t)if(e[n]!==t[n])return!1;for(var r in e)if(e[r]!==t[r])return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},74:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=(0,x.getDisplayName)(t),n=function(e){function n(){return(0,l.default)(this,n),(0,d.default)(this,(n.__proto__||(0,u.default)(n)).apply(this,arguments))}return(0,v.default)(n,e),(0,h.default)(n,[{key:"render",value:function(){var e=(0,i.default)({router:this.context.router},this.props);return b.default.createElement(t,e)}}]),n}(m.Component);return n.contextTypes={router:w.default.object},n.displayName="withRoute("+e+")",(0,O.default)(n,t)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(18),i=r(a),s=n(6),u=r(s),c=n(2),l=r(c),f=n(3),h=r(f),p=n(7),d=r(p),y=n(8),v=r(y);e.default=o;var m=n(0),b=r(m),g=n(19),w=r(g),j=n(79),O=r(j),x=n(20)},79:function(t,e,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,l=c&&c(Object);t.exports=function t(e,n,f){if("string"!=typeof n){if(l){var h=c(n);h&&h!==l&&t(e,h,f)}var p=i(n);s&&(p=p.concat(s(n)));for(var d=0;d<p.length;++d){var y=p[d];if(!(r[y]||o[y]||f&&f[y])){var v=u(n,y);try{a(e,y,v)}catch(t){}}}return e}return e}},80:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return t.replace(/\/$/,"")||"/"}Object.defineProperty(e,"__esModule",{value:!0});var a=n(30),i=r(a),s=n(40),u=r(s),c=n(18),l=r(c),f=n(42),h=r(f),p=n(48),d=r(p),y=n(31),v=r(y),m=n(2),b=r(m),g=n(3),w=r(g),j=n(53),O=n(41),x=r(O),k=n(55),C=r(k),_=n(88),E=r(_),S=n(20),P=n(29),A=function(){function t(e,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=a.pageLoader,s=a.Component,u=a.ErrorComponent,c=a.err;(0,b.default)(this,t),this.route=o(e),this.components={},s!==u&&(this.components[this.route]={Component:s,err:c}),this.events=new x.default,this.pageLoader=i,this.prefetchQueue=new E.default({concurrency:2}),this.ErrorComponent=u,this.pathname=e,this.query=n,this.asPath=r,this.subscriptions=new v.default,this.componentLoadCancel=null,this.onPopState=this.onPopState.bind(this),"undefined"!=typeof window&&(this.changeState("replaceState",(0,j.format)({pathname:e,query:n}),(0,S.getURL)()),window.addEventListener("popstate",this.onPopState))}return(0,w.default)(t,[{key:"onPopState",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,d.default)(h.default.mark(function t(e){var n,r,o,a,i,s;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state){t.next=4;break}return n=this.pathname,r=this.query,this.changeState("replaceState",(0,j.format)({pathname:n,query:r}),(0,S.getURL)()),t.abrupt("return");case 4:o=e.state,a=o.url,i=o.as,s=o.options,this.replace(a,i,s);case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"update",value:function(t,e){var n=this.components[t];if(!n)throw new Error("Cannot update unavailable route: "+t);var r=(0,l.default)({},n,{Component:e});this.components[t]=r,t===this.route&&this.notify(r)}},{key:"reload",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,d.default)(h.default.mark(function t(e){var n,r,o,a,i;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(delete this.components[e],this.pageLoader.clearCache(e),e===this.route){t.next=4;break}return t.abrupt("return");case 4:return n=this.pathname,r=this.query,o=window.location.href,this.events.emit("routeChangeStart",o),t.next=9,this.getRouteInfo(e,n,r,o);case 9:if(a=t.sent,!(i=a.error)||!i.cancelled){t.next=13;break}return t.abrupt("return");case 13:if(this.notify(a),!i){t.next=17;break}throw this.events.emit("routeChangeError",i,o),i;case 17:this.events.emit("routeChangeComplete",o);case 18:case"end":return t.stop()}},t,this)}));return t}()},{key:"back",value:function(){window.history.back()}},{key:"push",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("pushState",t,e,n)}},{key:"replace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("replaceState",t,e,n)}},{key:"change",value:function(){function t(t,n,r,o){return e.apply(this,arguments)}var e=(0,d.default)(h.default.mark(function t(e,n,r,a){var i,s,c,f,p,d,y,v,m,b,g,w;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i="object"===(void 0===n?"undefined":(0,u.default)(n))?(0,j.format)(n):n,s="object"===(void 0===r?"undefined":(0,u.default)(r))?(0,j.format)(r):r,__NEXT_DATA__.nextExport&&(s=(0,P._rewriteUrlForNextExport)(s)),this.abortComponentLoad(s),c=(0,j.parse)(i,!0),f=c.pathname,p=c.query,!this.onlyAHashChange(s)){t.next=9;break}return this.changeState(e,i,s),this.scrollToHash(s),t.abrupt("return");case 9:if(this.urlIsNew(f,p)||(e="replaceState"),d=o(f),y=a.shallow,v=void 0!==y&&y,m=null,this.events.emit("routeChangeStart",s),!v||!this.isShallowRoutingPossible(d)){t.next=18;break}m=this.components[d],t.next=21;break;case 18:return t.next=20,this.getRouteInfo(d,f,p,s);case 20:m=t.sent;case 21:if(b=m,!(g=b.error)||!g.cancelled){t.next=24;break}return t.abrupt("return",!1);case 24:if(this.events.emit("beforeHistoryChange",s),this.changeState(e,i,s,a),w=window.location.hash.substring(1),this.set(d,f,p,s,(0,l.default)({},m,{hash:w})),!g){t.next=31;break}throw this.events.emit("routeChangeError",g,s),g;case 31:return this.events.emit("routeChangeComplete",s),t.abrupt("return",!0);case 33:case"end":return t.stop()}},t,this)}));return t}()},{key:"changeState",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};"pushState"===t&&(0,S.getURL)()===n||window.history[t]({url:e,as:n,options:r},null,n)}},{key:"getRouteInfo",value:function(){function t(t,n,r,o){return e.apply(this,arguments)}var e=(0,d.default)(h.default.mark(function t(e,n,r,o){var a,i,s,u,c,l;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=null,t.prev=1,a=this.components[e]){t.next=8;break}return t.next=6,this.fetchComponent(e,o);case 6:t.t0=t.sent,a={Component:t.t0};case 8:return i=a,s=i.Component,u={pathname:n,query:r,asPath:o},t.next=12,this.getInitialProps(s,u);case 12:a.props=t.sent,this.components[e]=a,t.next=32;break;case 16:if(t.prev=16,t.t1=t.catch(1),!t.t1.cancelled){t.next=20;break}return t.abrupt("return",{error:t.t1});case 20:if(!t.t1.buildIdMismatched){t.next=24;break}return(0,P._notifyBuildIdMismatch)(o),t.t1.cancelled=!0,t.abrupt("return",{error:t.t1});case 24:return 404===t.t1.statusCode&&(t.t1.ignore=!0),c=this.ErrorComponent,a={Component:c,err:t.t1},l={err:t.t1,pathname:n,query:r},t.next=30,this.getInitialProps(c,l);case 30:a.props=t.sent,a.error=t.t1;case 32:return t.abrupt("return",a);case 33:case"end":return t.stop()}},t,this,[[1,16]])}));return t}()},{key:"set",value:function(t,e,n,r,o){this.route=t,this.pathname=e,this.query=n,this.asPath=r,this.notify(o)}},{key:"onlyAHashChange",value:function(t){if(!this.asPath)return!1;var e=this.asPath.split("#"),n=(0,i.default)(e,2),r=n[0],o=n[1],a=t.split("#"),s=(0,i.default)(a,2),u=s[0],c=s[1];return r===u&&o!==c}},{key:"scrollToHash",value:function(t){var e=t.split("#"),n=(0,i.default)(e,2),r=n[1],o=document.getElementById(r);o&&o.scrollIntoView()}},{key:"urlIsNew",value:function(t,e){return this.pathname!==t||!(0,C.default)(e,this.query)}},{key:"isShallowRoutingPossible",value:function(t){return Boolean(this.components[t])&&this.route===t}},{key:"prefetch",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,d.default)(h.default.mark(function t(e){var n,r,a,i=this;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2;break;case 2:return n=(0,j.parse)(e),r=n.pathname,a=o(r),t.abrupt("return",this.prefetchQueue.add(function(){return i.fetchRoute(a)}));case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"fetchComponent",value:function(){function t(t,n){return e.apply(this,arguments)}var e=(0,d.default)(h.default.mark(function t(e,n){var r,o,a,i;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=!1,o=this.componentLoadCancel=function(){r=!0},t.prev=2,t.next=5,this.fetchRoute(e);case 5:if(a=t.sent,!r){t.next=10;break}throw i=new Error('Abort fetching component for route: "'+e+'"'),i.cancelled=!0,i;case 10:return o===this.componentLoadCancel&&(this.componentLoadCancel=null),t.abrupt("return",a);case 14:throw t.prev=14,t.t0=t.catch(2),window.location.href=n,t.t0;case 18:case"end":return t.stop()}},t,this,[[2,14]])}));return t}()},{key:"getInitialProps",value:function(){function t(t,n){return e.apply(this,arguments)}var e=(0,d.default)(h.default.mark(function t(e,n){var r,o,a,i;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=!1,o=function(){r=!0},this.componentLoadCancel=o,t.next=5,(0,S.loadGetInitialProps)(e,n);case 5:if(a=t.sent,o===this.componentLoadCancel&&(this.componentLoadCancel=null),!r){t.next=11;break}throw i=new Error("Loading initial props cancelled"),i.cancelled=!0,i;case 11:return t.abrupt("return",a);case 12:case"end":return t.stop()}},t,this)}));return t}()},{key:"fetchRoute",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,d.default)(h.default.mark(function t(e){return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.pageLoader.loadPage(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return t}()},{key:"abortComponentLoad",value:function(t){this.componentLoadCancel&&(this.events.emit("routeChangeError",new Error("Route Cancelled"),t),this.componentLoadCancel(),this.componentLoadCancel=null)}},{key:"notify",value:function(t){this.subscriptions.forEach(function(e){return e(t)})}},{key:"subscribe",value:function(t){var e=this;return this.subscriptions.add(t),function(){return e.subscriptions.delete(t)}}}]),t}();e.default=A},82:function(t,e,n){(function(t,r){var o;!function(a){function i(t){throw new RangeError(I[t])}function s(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function u(t,e){var n=t.split("@"),r="";return n.length>1&&(r=n[0]+"@",t=n[1]),t=t.replace(q,"."),r+s(t.split("."),e).join(".")}function c(t){for(var e,n,r=[],o=0,a=t.length;o<a;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<a?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function l(t){return s(t,function(t){var e="";return t>65535&&(t-=65536,e+=L(t>>>10&1023|55296),t=56320|1023&t),e+=L(t)}).join("")}function f(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:j}function h(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function p(t,e,n){var r=0;for(t=n?T(t/C):t>>1,t+=T(t/e);t>R*x>>1;r+=j)t=T(t/R);return T(r+(R+1)*t/(t+k))}function d(t){var e,n,r,o,a,s,u,c,h,d,y=[],v=t.length,m=0,b=E,g=_;for(n=t.lastIndexOf(S),n<0&&(n=0),r=0;r<n;++r)t.charCodeAt(r)>=128&&i("not-basic"),y.push(t.charCodeAt(r));for(o=n>0?n+1:0;o<v;){for(a=m,s=1,u=j;o>=v&&i("invalid-input"),c=f(t.charCodeAt(o++)),(c>=j||c>T((w-m)/s))&&i("overflow"),m+=c*s,h=u<=g?O:u>=g+x?x:u-g,!(c<h);u+=j)d=j-h,s>T(w/d)&&i("overflow"),s*=d;e=y.length+1,g=p(m-a,e,0==a),T(m/e)>w-b&&i("overflow"),b+=T(m/e),m%=e,y.splice(m++,0,b)}return l(y)}function y(t){var e,n,r,o,a,s,u,l,f,d,y,v,m,b,g,k=[];for(t=c(t),v=t.length,e=E,n=0,a=_,s=0;s<v;++s)(y=t[s])<128&&k.push(L(y));for(r=o=k.length,o&&k.push(S);r<v;){for(u=w,s=0;s<v;++s)(y=t[s])>=e&&y<u&&(u=y);for(m=r+1,u-e>T((w-n)/m)&&i("overflow"),n+=(u-e)*m,e=u,s=0;s<v;++s)if(y=t[s],y<e&&++n>w&&i("overflow"),y==e){for(l=n,f=j;d=f<=a?O:f>=a+x?x:f-a,!(l<d);f+=j)g=l-d,b=j-d,k.push(L(h(d+g%b,0))),l=T(g/b);k.push(L(h(l,0))),a=p(n,m,r==o),n=0,++r}++n,++e}return k.join("")}function v(t){return u(t,function(t){return P.test(t)?d(t.slice(4).toLowerCase()):t})}function m(t){return u(t,function(t){return A.test(t)?"xn--"+y(t):t})}var b=("object"==typeof e&&e&&e.nodeType,"object"==typeof t&&t&&t.nodeType,"object"==typeof r&&r);var g,w=2147483647,j=36,O=1,x=26,k=38,C=700,_=72,E=128,S="-",P=/^xn--/,A=/[^\x20-\x7E]/,q=/[\x2E\u3002\uFF0E\uFF61]/g,I={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},R=j-O,T=Math.floor,L=String.fromCharCode;g={version:"1.4.1",ucs2:{decode:c,encode:l},decode:d,encode:y,toASCII:m,toUnicode:v},void 0!==(o=function(){return g}.call(e,n,e,t))&&(t.exports=o)}()}).call(e,n(54)(t),n(83))},84:function(t,e,n){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},85:function(t,e,n){"use strict";e.decode=e.parse=n(86),e.encode=e.stringify=n(87)},86:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,a){e=e||"&",n=n||"=";var i={};if("string"!=typeof t||0===t.length)return i;var s=/\+/g;t=t.split(e);var u=1e3;a&&"number"==typeof a.maxKeys&&(u=a.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var l=0;l<c;++l){var f,h,p,d,y=t[l].replace(s,"%20"),v=y.indexOf(n);v>=0?(f=y.substr(0,v),h=y.substr(v+1)):(f=y,h=""),p=decodeURIComponent(f),d=decodeURIComponent(h),r(i,p)?o(i[p])?i[p].push(d):i[p]=[i[p],d]:i[p]=d}return i};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},87:function(t,e,n){"use strict";function r(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var o=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,s){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?r(i(t),function(i){var s=encodeURIComponent(o(i))+n;return a(t[i])?r(t[i],function(t){return s+encodeURIComponent(o(t))}).join(e):s+encodeURIComponent(o(t[i]))}).join(e):s?encodeURIComponent(o(s))+n+encodeURIComponent(o(t)):""};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},88:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),a=r(o),i=n(50),s=r(i),u=n(2),c=r(u),l=n(3),f=r(l),h=function(){function t(){(0,c.default)(this,t),this._queue=[]}return(0,f.default)(t,[{key:"enqueue",value:function(t){this._queue.push(t)}},{key:"dequeue",value:function(){return this._queue.shift()}},{key:"size",get:function(){return this._queue.length}}]),t}(),p=function(){function t(e){if((0,c.default)(this,t),e=(0,s.default)({concurrency:1/0,queueClass:h},e),e.concurrency<1)throw new TypeError("Expected `concurrency` to be a number from 1 and up");this.queue=new e.queueClass,this._pendingCount=0,this._concurrency=e.concurrency,this._resolveEmpty=function(){}}return(0,f.default)(t,[{key:"_next",value:function(){this._pendingCount--,this.queue.size>0?this.queue.dequeue()():this._resolveEmpty()}},{key:"add",value:function(t,e){var n=this;return new a.default(function(r,o){var a=function(){n._pendingCount++,t().then(function(t){r(t),n._next()},function(t){o(t),n._next()})};n._pendingCount<n._concurrency?a():n.queue.enqueue(a,e)})}},{key:"onEmpty",value:function(){var t=this;return new a.default(function(e){var n=t._resolveEmpty;t._resolveEmpty=function(){n(),e()}})}},{key:"size",get:function(){return this.queue.size}},{key:"pending",get:function(){return this._pendingCount}}]),t}();e.default=p}},[258]);
            return { page: comp.default }
          })
        