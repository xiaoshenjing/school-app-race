import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)

import App from './App.vue'
import store from './store'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

/*Axios.defaults.baseURL = ''
Vue.prototype.$http = Axios*/

// Axios.defaults.withCredentials = true
Axios.defaults.baseURL = '/data'
Vue.prototype.$api = Axios

require('./mock')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
