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
    headerTitle: 'home',
    article: {},
    person: {},
    shopCart: {},
  },
  mutations: {
    login (state, str) {
      state.login = str
    },
    headerTitle (state, str) {
      state.headerTitle = str
    },
    article (state, str) {
      state.article = str
    },
    person (state, str) {
      state.person = str
    },
    shopCart (state, str) {
      state.shopCart = str
    }
  },
  actions: {}
})

export default store