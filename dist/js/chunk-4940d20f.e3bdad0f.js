(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4940d20f"],{"75c8":function(t,e,s){"use strict";var o=s("81222"),a=s.n(o);a.a},"76a4":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"enter"}},[s("div",{staticClass:"enter"},[s("div",{staticClass:"login"},[s("div",{staticClass:"select-wrapper"},[s("label",{attrs:{for:"select"}},[t._v("学校：")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.school,expression:"form.school"}],staticClass:"select",attrs:{name:"select",id:"select"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.form,"school",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"1"}},[t._v("华北电力大学")]),s("option",{attrs:{value:"2"}},[t._v("河北大学")]),s("option",{attrs:{value:"3"}},[t._v("清华大学")])])]),s("div",{staticClass:"count-wrapper"},[s("label",{attrs:{for:"count"}},[t._v("学号：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.student_id,expression:"form.student_id"}],staticClass:"count",attrs:{type:"text",id:"count"},domProps:{value:t.form.student_id},on:{input:function(e){e.target.composing||t.$set(t.form,"student_id",e.target.value)}}})]),s("div",{staticClass:"password-wrapper"},[s("label",{attrs:{for:"password"}},[t._v("密码：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"password",attrs:{type:"password",id:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),s("button",{staticClass:"submit",attrs:{id:"submit"},on:{click:t.login}},[t._v("提交")])])])])},a=[],r={name:"enter",data:function(){return{form:{school:"",student_id:"",password:""},empty:""}},methods:{login:function(){var t=this;if(this.empty=this.$checkEmpty(this.form),this.$store.commit("loginMessage",this.form),this.empty)switch(this.empty){case"school":this.$store.commit("tip",{reason:"学校不能为空",color:"red",update:new Date});break;case"student_id":this.$store.commit("tip",{reason:"学号不能为空",color:"red",update:new Date});break;case"password":this.$store.commit("tip",{reason:"密码不能为空",color:"red",update:new Date});break}else this.$http.post("/users/login",{school:this.form.school,student_id:this.form.student_id,password:this.form.password}).then(function(e){e.data.result?(t.$router.push("/home"),t.$store.commit("token",e.data.token),t.$store.commit("login",!0),t.$store.commit("headerTitle","home"),t.$store.commit("tip",{reason:e.data.reason,color:"green",update:new Date})):t.$store.commit("tip",{reason:e.data.reason,color:"red",update:new Date})})},init:function(){var t=this.$store.state.loginMessage;t&&(this.form.school=t.school,this.form.student_id=t.student_id,this.form.password=t.password)}},mounted:function(){this.init()}},i=r,n=(s("75c8"),s("2877")),c=Object(n["a"])(i,o,a,!1,null,"4b803da8",null);e["default"]=c.exports},81222:function(t,e,s){}}]);
//# sourceMappingURL=chunk-4940d20f.e3bdad0f.js.map