webpackJsonp([0],{162:function(t,e,o){o(195);var i=o(69)(o(181),o(203),"data-v-7535438e",null);t.exports=i.exports},165:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"rightFooter",data:function(){return{}},created:function(){},mounted:function(){}}},166:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"rightHeader",data:function(){return{account:"女人恋上读书的公众号"}},props:["title"],methods:{logout:function(){this.$router.push("/")}},created:function(){},mounted:function(){}}},167:function(t,e,o){e=t.exports=o(154)(!1),e.push([t.i,"#rightHeader[data-v-2892cff2]{padding:0 50px;height:64px;line-height:64px;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff}#rightHeader[data-v-2892cff2],.title[data-v-2892cff2]{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.title[data-v-2892cff2]{font-size:14px;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.border[data-v-2892cff2]{display:inline-block;width:2px;height:14px;background-color:#1890ff;margin-right:8px}.el-dropdown[data-v-2892cff2]{height:64px}.el-dropdown-link[data-v-2892cff2]{display:inline-block;width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.el-dropdown-menu[data-v-2892cff2]{width:160px}",""])},168:function(t,e,o){e=t.exports=o(154)(!1),e.push([t.i,"#rightFooter[data-v-2a52a980]{background:#f0f2f5;padding:24px 50px;color:rgba(0,0,0,.65);font-size:14px;text-align:center}",""])},169:function(t,e,o){var i=o(167);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(155)("585602c0",i,!0)},170:function(t,e,o){var i=o(168);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(155)("848da59c",i,!0)},171:function(t,e,o){o(170);var i=o(69)(o(165),o(174),"data-v-2a52a980",null);t.exports=i.exports},172:function(t,e,o){o(169);var i=o(69)(o(166),o(173),"data-v-2892cff2",null);t.exports=i.exports},173:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"rightHeader"}},[o("div",{staticClass:"title"},[o("span",{staticClass:"border"}),t._v(" "),o("span",[t._v(t._s(t.title))])]),t._v(" "),o("div",[o("el-dropdown",[o("span",{staticClass:"el-dropdown-link"},[t._v("\n                "+t._s(t.account)),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)],1)],1)])},staticRenderFns:[]}},174:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"rightFooter"}},[t._v("\n   © 2019 听书宝\n")])},staticRenderFns:[]}},181:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(172),a=o.n(i),n=o(171),r=o.n(n);e.default={name:"product",data:function(){return{title:"商品管理",bookList:[{book_id:1,book_cover:"https://daka666-1253442168.file.myqcloud.com/college_pro_media/goods_cover/1_582c97680e.jpeg",book_name:"180天读书计划",book_price:"99.00",book_welfare:"90%",book_fans_profit:"432.00",book_arpu:"16.30",is_new:0,is_hot:0},{book_id:2,book_cover:"https://daka666-1253442168.file.myqcloud.com/college_pro_media/goods_cover/_2ead77c088.jpeg",book_name:"名人传记·精英阅读计划",book_price:"99.00",book_welfare:"90%",book_fans_profit:"366.00",book_arpu:"13.60",is_new:1,is_hot:1}]}},components:{RightHeader:a.a,RightFooter:r.a},methods:{addRecommend:function(){this.$router.push("/home/channel_add")}},created:function(){},mounted:function(){}}},187:function(t,e,o){e=t.exports=o(154)(!1),e.push([t.i,"#product[data-v-7535438e]{width:100%;height:100%;position:relative}.content-box[data-v-7535438e]{margin:24px 16px 0;overflow:hidden}.content-box[data-v-7535438e],.content[data-v-7535438e]{background:#fff;width:calc(100vw - 232px);min-height:calc(100vh - 160px)}.content[data-v-7535438e]{padding:24px}.content-flex[data-v-7535438e]{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.content-item[data-v-7535438e]{-ms-flex-direction:column;flex-direction:column;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:20px;border-radius:5px;width:250px;box-shadow:0 2px 46px -14px #9a9a9a}.cover-img[data-v-7535438e]{width:100%;border-radius:5px 5px 0 0}.title-box[data-v-7535438e]{font-size:18px;text-align:left;padding-left:20px;margin-top:10px;font-weight:600;padding-bottom:10px}.new[data-v-7535438e]{width:30px}.hot[data-v-7535438e]{width:20px}.item-info[data-v-7535438e]{text-align:left;padding-left:20px;margin-top:0;margin-bottom:1em}.recommend[data-v-7535438e]{margin:0 auto 16px;width:86px}",""])},195:function(t,e,o){var i=o(187);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(155)("211c6d96",i,!0)},203:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"product"}},[o("RightHeader",{attrs:{title:t.title}}),t._v(" "),o("div",{staticClass:"content-box"},[o("div",{staticClass:"content"},[o("div",{staticClass:"content-flex"},t._l(t.bookList,function(e){return o("div",{key:e.id,staticClass:"content-item"},[o("div",[o("img",{staticClass:"cover-img",attrs:{src:e.book_cover,alt:""}}),t._v(" "),o("div",{staticClass:"title-box"},[e.is_new?o("img",{staticClass:"new",attrs:{src:"https://daka666-1253442168.file.myqcloud.com/college_pro_media/tool/files/20181009_180813_new1.png",alt:""}}):t._e(),t._v(" "),e.is_hot?o("img",{staticClass:"hot",attrs:{src:"https://daka666-1253442168.file.myqcloud.com/college_pro_media/tool/files/20181009_181647_hot1.png",alt:""}}):t._e(),t._v("\n                            "+t._s(e.book_name)+"\n                        ")]),t._v(" "),o("p",{staticClass:"item-info"},[t._v("单价：￥"+t._s(e.book_price))]),t._v(" "),o("p",{staticClass:"item-info"},[t._v("分成："+t._s(e.book_welfare))]),t._v(" "),o("p",{staticClass:"item-info"},[t._v("万粉收益：￥"+t._s(e.book_fans_profit))]),t._v(" "),o("p",{staticClass:"item-info"},[t._v("ARPU值：￥"+t._s(e.book_arpu))])]),t._v(" "),o("el-button",{staticClass:"recommend",attrs:{type:"primary"},on:{click:t.addRecommend}},[t._v("加入推广")])],1)}),0)])]),t._v(" "),o("RightFooter")],1)},staticRenderFns:[]}}});