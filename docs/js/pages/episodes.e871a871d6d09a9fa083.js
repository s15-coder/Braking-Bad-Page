(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=8)})([function(){var a=document.querySelectorAll('.links'),b=window.location.origin;'https://s15-coder.github.io'==b&&(b='https://s15-coder.github.io/Braking-Bad-Page'),a[0].addEventListener('click',function(){window.location.href=b}),a[1].addEventListener('click',function(){window.location.href=''.concat(b,'/html/characters.html')}),a[2].addEventListener('click',function(){window.location.href=''.concat(b,'/html/episodes.html')}),a[3].addEventListener('click',function(){window.location.href=''.concat(b,'/html/quotes.html')}),a[4].addEventListener('click',function(){window.location.href=''.concat(b,'/html/deaths.html')})},function(){var a=document.querySelector('.menu-icon'),b=document.querySelector('.nav-links'),c=!1;a.addEventListener('click',function(){c?(b.style.left='-100vw',c=!1):(c=!0,b.style.left='0')}),a.addEventListener('mouseout',function(){b.style.left='-100vw',c=!1})},function(a,b,c){'use strict';function d(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}c.d(b,'a',function(){return e});var e=function c(a){d(this,c),this.baseUrl='https://www.breakingbadapi.com/api',this.localUrl=a}},function(a){var b=function(a){'use strict';function b(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}function c(a,b,c,d){var f=b&&b.prototype instanceof e?b:e,g=Object.create(f.prototype),h=new n(d||[]);return g._invoke=j(a,c,h),g}function d(a,b,c){try{return{type:'normal',arg:a.call(b,c)}}catch(a){return{type:'throw',arg:a}}}function e(){}function f(){}function g(){}function h(a){['next','throw','return'].forEach(function(c){b(a,c,function(a){return this._invoke(c,a)})})}function i(a,b){function c(e,f,g,h){var i=d(a[e],a,f);if('throw'===i.type)h(i.arg);else{var j=i.arg,k=j.value;return k&&'object'==typeof k&&r.call(k,'__await')?b.resolve(k.__await).then(function(a){c('next',a,g,h)},function(a){c('throw',a,g,h)}):b.resolve(k).then(function(a){j.value=a,g(j)},function(a){return c('throw',a,g,h)})}}function e(a,d){function e(){return new b(function(b,e){c(a,d,b,e)})}return f=f?f.then(e,e):e()}var f;this._invoke=e}function j(a,b,c){var e=w;return function(f,g){if(e===y)throw new Error('Generator is already running');if(e===z){if('throw'===f)throw g;return p()}for(c.method=f,c.arg=g;;){var h=c.delegate;if(h){var i=k(h,c);if(i){if(i===A)continue;return i}}if('next'===c.method)c.sent=c._sent=c.arg;else if('throw'===c.method){if(e===w)throw e=z,c.arg;c.dispatchException(c.arg)}else'return'===c.method&&c.abrupt('return',c.arg);e=y;var j=d(a,b,c);if('normal'===j.type){if(e=c.done?z:x,j.arg===A)continue;return{value:j.arg,done:c.done}}'throw'===j.type&&(e=z,c.method='throw',c.arg=j.arg)}}}function k(a,b){var c=a.iterator[b.method];if(void 0===c){if(b.delegate=null,'throw'===b.method){if(a.iterator['return']&&(b.method='return',b.arg=void 0,k(a,b),'throw'===b.method))return A;b.method='throw',b.arg=new TypeError('The iterator does not provide a \'throw\' method')}return A}var e=d(c,a.iterator,b.arg);if('throw'===e.type)return b.method='throw',b.arg=e.arg,b.delegate=null,A;var f=e.arg;if(!f)return b.method='throw',b.arg=new TypeError('iterator result is not an object'),b.delegate=null,A;if(f.done)b[a.resultName]=f.value,b.next=a.nextLoc,'return'!==b.method&&(b.method='next',b.arg=void 0);else return f;return b.delegate=null,A}function l(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function m(a){var b=a.completion||{};b.type='normal',delete b.arg,a.completion=b}function n(a){this.tryEntries=[{tryLoc:'root'}],a.forEach(l,this),this.reset(!0)}function o(a){if(a){var b=a[t];if(b)return b.call(a);if('function'==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(r.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=void 0,b.done=!0,b};return d.next=d}}return{next:p}}function p(){return{value:void 0,done:!0}}var q=Object.prototype,r=q.hasOwnProperty,s='function'==typeof Symbol?Symbol:{},t=s.iterator||'@@iterator',u=s.asyncIterator||'@@asyncIterator',v=s.toStringTag||'@@toStringTag';try{b({},'')}catch(a){b=function(a,b,c){return a[b]=c}}a.wrap=c;var w='suspendedStart',x='suspendedYield',y='executing',z='completed',A={},B={};B[t]=function(){return this};var C=Object.getPrototypeOf,D=C&&C(C(o([])));D&&D!==q&&r.call(D,t)&&(B=D);var E=g.prototype=e.prototype=Object.create(B);return f.prototype=E.constructor=g,g.constructor=f,f.displayName=b(g,v,'GeneratorFunction'),a.isGeneratorFunction=function(a){var b='function'==typeof a&&a.constructor;return!!b&&(b===f||'GeneratorFunction'===(b.displayName||b.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,g):(a.__proto__=g,b(a,v,'GeneratorFunction')),a.prototype=Object.create(E),a},a.awrap=function(a){return{__await:a}},h(i.prototype),i.prototype[u]=function(){return this},a.AsyncIterator=i,a.async=function(b,d,e,f,g){void 0===g&&(g=Promise);var h=new i(c(b,d,e,f),g);return a.isGeneratorFunction(d)?h:h.next().then(function(a){return a.done?a.value:h.next()})},h(E),b(E,v,'Generator'),E[t]=function(){return this},E.toString=function(){return'[object Generator]'},a.keys=function(a){var b=[];for(var c in a)b.push(c);return b.reverse(),function c(){for(;b.length;){var d=b.pop();if(d in a)return c.value=d,c.done=!1,c}return c.done=!0,c}},a.values=o,n.prototype={constructor:n,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method='next',this.arg=void 0,this.tryEntries.forEach(m),!a)for(var b in this)'t'===b.charAt(0)&&r.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0],b=a.completion;if('throw'===b.type)throw b.arg;return this.rval},dispatchException:function(a){function b(b,d){return f.type='throw',f.arg=a,c.next=b,d&&(c.method='next',c.arg=void 0),!!d}if(this.done)throw a;for(var c=this,d=this.tryEntries.length-1;0<=d;--d){var e=this.tryEntries[d],f=e.completion;if('root'===e.tryLoc)return b('end');if(e.tryLoc<=this.prev){var g=r.call(e,'catchLoc'),h=r.call(e,'finallyLoc');if(g&&h){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);if(this.prev<e.finallyLoc)return b(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return b(e.catchLoc,!0);}else if(!h)throw new Error('try statement without catch or finally');else if(this.prev<e.finallyLoc)return b(e.finallyLoc)}}},abrupt:function(a,b){for(var c,d=this.tryEntries.length-1;0<=d;--d)if(c=this.tryEntries[d],c.tryLoc<=this.prev&&r.call(c,'finallyLoc')&&this.prev<c.finallyLoc){var e=c;break}e&&('break'===a||'continue'===a)&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);var f=e?e.completion:{};return f.type=a,f.arg=b,e?(this.method='next',this.next=e.finallyLoc,A):this.complete(f)},complete:function(a,b){if('throw'===a.type)throw a.arg;return'break'===a.type||'continue'===a.type?this.next=a.arg:'return'===a.type?(this.rval=this.arg=a.arg,this.method='return',this.next='end'):'normal'===a.type&&b&&(this.next=b),A},finish:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),m(b),A},catch:function(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if('throw'===d.type){var e=d.arg;m(b)}return e}throw new Error('illegal catch attempt')},delegateYield:function(a,b,c){return this.delegate={iterator:o(a),resultName:b,nextLoc:c},'next'===this.method&&(this.arg=void 0),A}},a}(a.exports);try{regeneratorRuntime=b}catch(a){Function('r','regeneratorRuntime = r')(b)}},,,,,function(a,b,c){'use strict';function d(b){'@babel/helpers - typeof';return d='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&'function'==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?'symbol':typeof b},d(b)}function i(j,a,b,c,d,e,f){try{var g=j[e](f),h=g.value}catch(c){return void b(c)}g.done?a(h):Promise.resolve(h).then(c,d)}function e(j){return function(){var a=this,b=arguments;return new Promise(function(c,d){function e(b){i(g,c,d,e,f,'next',b)}function f(b){i(g,c,d,e,f,'throw',b)}var g=j.apply(a,b);e(void 0)})}}function f(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function g(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function h(d,a,b){return a&&g(d.prototype,a),b&&g(d,b),d}function j(c,d){if('function'!=typeof d&&null!==d)throw new TypeError('Super expression must either be null or a function');c.prototype=Object.create(d&&d.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),d&&k(c,d)}function k(c,a){return k=Object.setPrototypeOf||function(c,a){return c.__proto__=a,c},k(c,a)}function l(f){var a=o();return function(){var b,c=p(f);if(a){var d=p(this).constructor;b=Reflect.construct(c,arguments,d)}else b=c.apply(this,arguments);return m(this,b)}}function m(c,a){return a&&('object'===d(a)||'function'==typeof a)?a:n(c)}function n(b){if(void 0===b)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b}function o(){if('undefined'==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if('function'==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(b){return!1}}function p(b){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)},p(b)}function q(d){w.style.overflow='hidden';for(var a='',b=0;b<d.characters.length;b++)a+='<span class="alert-card__name">'.concat(d.characters[b],'</span>');x.innerHTML='\n    <div class="alert-card">\n        <h3 class="alert-card__title">Characters</h3>\n        '.concat(a,'\n    </div>'),x.style.top=''.concat(window.scrollY,'px'),x.style.display='flex'}c.r(b);var r=c(3),s=c(1),t=c(0),u=c(2),v=function(d){function a(){return f(this,a),b.apply(this,arguments)}j(a,d);var b=l(a);return h(a,[{key:'getEpisodes',value:function(){var b=e(regeneratorRuntime.mark(function c(){var d;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,fetch(this.baseUrl+'/episodes',{method:'get'});case 2:return d=b.sent,b.next=5,d.json();case 5:return b.abrupt('return',b.sent);case 6:case'end':return b.stop();}},c,this)}));return function(){return b.apply(this,arguments)}}()}]),a}(u.a),w=document.querySelector('body'),x=document.querySelector('.alert-episode'),y=document.querySelector('.episodes'),z=function(c){var a=document.createElement('div');a.className='episode',a.innerHTML='\n                <div class="episode__data"><b class="key">Title:</b> <span class="value">'.concat(c.title,'</span></div>\n                <div class="episode__data"><b class="key">season:</b> <span class="value">').concat(c.season,'</span></div>\n                <div class="episode__data"><b class="key">episode:</b> <span class="value">').concat(c.episode,'</span></div>\n                <div class="episode__data"><b class="key">Air Date:</b> <span class="value">').concat(c.air_date,'</span></div>\n                <div class="episode__data"><b class="key">Serie:</b> <span class="value"> ').concat(c.series,'</span></div>\n                <div class="episode__data"><b class="key">Characters</b><i class="fas fa-users icon-characters"></i></div>'),y.appendChild(a)};x.addEventListener('click',function(b){b.target!=this||(x.style.display='none',w.style.overflow='auto')});var A=new v;A.getEpisodes().then(function(f){y.style.height='max-content';for(var a=0;a<f.length;a++)z(f[a]);for(var e=document.querySelectorAll('.icon-characters'),b=function(a){e[a].addEventListener('click',function(){q(f[a])})},c=0;c<e.length;c++)b(c)})['catch'](function(b){console.log(b)})}]);