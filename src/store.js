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
    tip: {},
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
    tip (state, obj) {
      // { reason: '', color: 'red/green/yellow' }
      state.tip = obj
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