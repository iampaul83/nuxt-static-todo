webpackJsonp([2],{CC3e:function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"column is-half"},[e("form",{on:{submit:function(o){o.preventDefault(),t.$router.go(-1)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Edit todo")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],ref:"input",staticClass:"input is-primary",attrs:{type:"text"},domProps:{value:t.todo},on:{input:[function(o){o.target.composing||(t.todo=o.target.value)},t.editTodo]}})])])])])},i=[],n={render:s,staticRenderFns:i};o.a=n},G8cK:function(t,o,e){var s=e("qkHk");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("20881f8b",s,!0)},KQG8:function(t,o,e){"use strict";o.a={name:"todo",data:function(){var t=this.$route.params.index;return console.log(this.$store.state.todo.todos),console.log(this.$store.state.todo.todos[t]),{index:t,todo:this.$store.state.todo.todos[t]}},mounted:function(){this.$refs.input.focus()},methods:{editTodo:function(){this.$store.commit("editTodo",{index:this.index,todo:this.todo})}}}},Rnxd:function(t,o,e){"use strict";function s(t){e("G8cK")}Object.defineProperty(o,"__esModule",{value:!0});var i=e("KQG8"),n=e("CC3e"),a=e("VU/8"),d=s,r=a(i.a,n.a,d,"data-v-8331bdc6",null);o.default=r.exports},qkHk:function(t,o,e){o=t.exports=e("FZ+f")(!1),o.push([t.i,"",""])}});
//# sourceMappingURL=index.96642f8202cd08896195.js.map