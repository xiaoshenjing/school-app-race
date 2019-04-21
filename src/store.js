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
    shopCart: [],
    footStep: [],
    article: {},
    goodsShow: {},
  },
  mutations: {
    login (state, str) {
      state.login = str
    },
    headerTitle (state, str) {
      state.headerTitle = str
    },

    addShopCart (state, obj) {
      state.shopCart.push(obj)
    },
    footStep (state, obj) {
      state.footStep.push(obj)
    },

    article (state, str) {
      state.article = str
    },
    goodsShow (state, str) {
      state.goodsShow = str
    }
  },
  actions: {}
})

export default store