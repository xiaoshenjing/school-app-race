(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6139cbcb"],{"32e9f":function(e,i,t){"use strict";t.r(i);var r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"clip"},[t("div",{staticClass:"preview",class:{cross:!e.previewImage.img}},[t("vueCropper",{directives:[{name:"show",rawName:"v-show",value:e.previewImage.img,expression:"previewImage.img"}],ref:"cropper",attrs:{img:e.previewImage.img,outputSize:e.previewImage.size,outputType:e.previewImage.outputType,autoCropWidth:e.previewImage.width,autoCropHeight:e.previewImage.height,autoCrop:!0,fixed:!0,canMove:!1}})],1),t("div",{staticClass:"clip-wrapper"},[t("button",{staticClass:"clip",style:e.previewImage.img?"opacity: 1;":"opacity: 0;",on:{click:e.endClip}},[e._v("确定剪裁\n        ")]),t("div",{staticClass:"form-src"},[t("span",{staticClass:"text"},[e._v(e._s(e.btn))]),t("input",{staticClass:"btn",attrs:{accept:"image/*",type:"file"},on:{change:function(i){return e.previewImg(i)}}})])])])},a=[],p={props:{btn:String},data:function(){return{previewImage:{img:"",size:1,outputType:"jpeg",width:"250",height:"250"}}},methods:{previewImg:function(e){var i=e.target.files[0],t=this;e&&window.FileReader||alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");var r=new FileReader;i&&r.readAsDataURL(i),r.onload=function(){t.previewImage.width=t.previewImage.height="250",t.previewImage.img=this.result}},endClip:function(){var e=this;this.$refs.cropper.getCropBlob(function(i){e.$emit("getFile",i),e.previewImage.width=e.previewImage.height="300"}),this.$refs.cropper.getCropData(function(i){e.$emit("getPreviewFile",i),e.previewImage.img=i})},clear:function(){this.previewImage.img="",this.$refs.cropper.clearCrop()}}},s=p,n=(t("711b"),t("2877")),o=Object(n["a"])(s,r,a,!1,null,"64a058b0",null);i["default"]=o.exports},"5f14":function(e,i,t){},"711b":function(e,i,t){"use strict";var r=t("5f14"),a=t.n(r);a.a}}]);
//# sourceMappingURL=chunk-6139cbcb.ee53200b.js.map