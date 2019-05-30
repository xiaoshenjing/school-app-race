import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueCropper from 'vue-cropper'
import commonFun from './commonFun'
import 'element-ui/lib/theme-chalk/index.css'

// 富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueCropper)
Vue.use(commonFun)

import App from './App.vue'
import store from './store'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// http
let Http = Axios.create({
  baseURL: 'http://192.144.183.22:3000', // 服务器
  // baseURL: 'http://10.14.4.153:3000', // dt
  // baseURL: 'http://172.16.77.178:3000',// 校园网
  // baseURL: 'http://192.168.43.87:3000',// 手机
  withCredentials: true,
})
Vue.prototype.$http = Http

// mock
let Api = Axios.create({
  baseURL: '/data',
})
Vue.prototype.$api = Api

require('./mock')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
