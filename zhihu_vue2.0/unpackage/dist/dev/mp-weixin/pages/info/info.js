require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e,n){"use strict";var o=i(n(0)),s=i(n(15));function i(t){return t&&t.__esModule?t:{default:t}}new o.default(s.default).$mount()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),s=n.n(o),i=n(18),u=!1;var r=function(t){u||n(16)},a=n(1)(s.a,i.a,r,null,null);a.options.__file="..\\..\\..\\MUI\\knoqing\\pages\\info\\info.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] info.vue: functional components are not supported with templates, they should use render functions."),e.default=a.exports},function(t,e){},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"",strings:"",conten_url:""}},onLoad:function(e){var n=this;t.showLoading({title:"加载中..."}),t.request({url:"https://news-at.zhihu.com/api/4/news/"+e.id,method:"GET",data:{},success:function(e){n.strings=e.data.body,n.conten_url=e.data.share_url,t.hideLoading()},fail:function(){},complete:function(){}})}}}).call(e,n(2).default)},function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"content"},[e("view",{staticClass:"art-content"},[e("rich-text",{staticClass:"richText",staticStyle:{width:"100%",height:"100%"},attrs:{nodes:this.strings,mpcomid:"Jq9-0"}})],1)])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s}],[14]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/info/info.js.map