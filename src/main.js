import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VueCropper from 'vue-cropper'
import commonFun from './commonFun'
import 'element-ui/lib/theme-chalk/index.css'

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
  // baseURL: 'http://10.14.4.153:3000', // dt
  // baseURL: 'http://172.16.52.123:3000',// 校园网 教十二
  baseURL: 'http://172.16.153.6:3000',// 校园网 教十
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
  router
}).$mount('#app')
