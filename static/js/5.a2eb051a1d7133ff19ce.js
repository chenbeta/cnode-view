webpackJsonp([5],{134:function(t,e,s){function n(t){s(354)}var a=s(17)(s(179),s(544),n,"data-v-41c895ec",null);t.exports=a.exports},179:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(28),a=s.n(n),o=s(50),i=s(9);e.default={data:function(){return{accesstoken:""}},created:function(){this.setRightName(this.getLoginUser)},computed:a()({},s.i(i.a)(["getLoginUser"])),methods:a()({},s.i(i.b)({userLogin:"COM_USER_LOGIN",userLogOut:"COM_USER_LOGOUT",setRightName:"COM_SET_RIGHTUSERNAME"}),{login:function(){var t=this;o.d({accesstoken:this.accesstoken}).then(function(e){if(e.success){var s={token:t.accesstoken,name:e.loginname};t.userLogin(s);var n=t.$route.query.redirect;n||(n="/"),t.$router.push({path:n})}else console.log("登录失败")})}})}},265:function(t,e,s){e=t.exports=s(130)(!1),e.push([t.i,".login-box[data-v-41c895ec]{padding:50px 0;margin:0 auto;width:500px}.login-box .control-group[data-v-41c895ec]{padding:20px 0}.login-box .control-label[data-v-41c895ec]{color:#999;padding-right:30px;text-align:right;display:inline-block;width:180px}.login-box .control-input .input-box[data-v-41c895ec]{height:20px;padding:4px 6px;font-size:14px;line-height:20px;width:270px;border:1px solid #ccc;transition:border .2s linear,box-shadow .2s linear;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:3px}",""])},354:function(t,e,s){var n=s(265);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(131)("2f3b94e8",n,!0)},544:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel"},[t._m(0),t._v(" "),s("div",{staticClass:"inner"},[s("div",{staticClass:"login-box"},[s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"},[t._v("请输入accessToken登录")]),t._v(" "),s("span",{staticClass:"control-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.accesstoken,expression:"accesstoken"}],staticClass:"input-box",attrs:{type:"text"},domProps:{value:t.accesstoken},on:{input:function(e){e.target.composing||(t.accesstoken=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"control-group"},[s("label",{staticClass:"control-label"}),t._v(" "),s("span",{staticClass:"control-input"},[s("span",{staticClass:"span-primary",on:{click:t.login}},[t._v("登录")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("a",{attrs:{href:"#"}},[t._v(" 主页 ")]),t._v(" / 登录\n    ")])}]}}});