(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f841"],{d9c9:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"small"}},[o("el-form-item",{attrs:{label:"用户名称"}},[o("el-input",{model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1),o("el-form-item",{attrs:{label:"密码"}},[o("el-input",{model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询是否含有账号")]),o("el-button",{on:{click:e.register}},[e._v("注册")])],1)],1)},r=[],n=o("7ded"),a={data:function(){return{form:{userName:"",password:""}}},methods:{onSubmit:function(){var e=this;Object(n["b"])(this.form).then((function(t){console.log(t),0===t.errno&&(e.$message({message:"登录成功!",type:"success"}),e.$store.commit("user/SET_TOKEN",t.data),e.$router.push({path:"/Home"}))}))},login:n["b"],register:function(){var e=this;Object(n["c"])(this.form).then((function(t){console.log(t),0===t.errno&&e.$message({message:"注册成功!",type:"success"})}))}}},l=a,m=o("5d22"),c=Object(m["a"])(l,s,r,!1,null,null,null);t["default"]=c.exports}}]);