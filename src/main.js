import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Axios from 'axios'

Axios.defaults.baseURL=''
Vue.prototype.$http = Axios

require('./mock')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
