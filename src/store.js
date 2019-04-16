import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

let store = new Vuex.Store({
  plugins: [PersistedState({
    storage: window.sessionStorage,
    reducer (val) {
      return {
        headerTitle: val.headerTitle
      }
    }
  })],
  state: {
    login: false,
    headerTitle: 'home'
  },
  mutations: {
    login (state, str) {
      state.login = str
    },
    headerTitle (state, str) {
      state.headerTitle = str
    }

  },
  actions: {}
})

export default store