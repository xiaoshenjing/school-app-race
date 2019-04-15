import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    login: false,
  },
  mutations: {
    login (state, str) {
      state.login = str
    },
  },
  actions: {}
})

export default store