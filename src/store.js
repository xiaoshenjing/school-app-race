import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

let store = new Vuex.Store({
  plugins: [
    PersistedState({
      storage: window.sessionStorage,
      reducer (val) {
        return {
          headerTitle: val.headerTitle
        }
      }
    }),
    PersistedState({
      storage: window.localStorage,
      reducer (val) {
        return {
          login: val.login,
          loginMessage: val.loginMessage
        }
      }
    }),
    PersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 7 }),
        removeItem: key => Cookies.remove(key)
      },
      reducer (val) {
        return {
          token: val.token,
        }
      }
    })
  ],
  state: {
    token: '',
    login: false,
    headerTitle: 'home',
    shopCart: [],
    footStep: [],
    loginMessage: {},
    tip: {},
    article: {},
    goodsShow: {},
    publicPath: process.env.BASE_URL,
  },
  mutations: {
    token (state, str) {
      state.token = str
    },
    login (state, str) {
      state.login = str
    },
    headerTitle (state, str) {
      state.headerTitle = str
    },
    tip (state, obj) {
      // { reason: '', color: 'red/green/yellow', update: new Date() }
      state.tip = obj
    },
    addShopCart (state, obj) {
      state.shopCart.push(obj)
    },
    footStep (state, obj) {
      state.footStep.push(obj)
    },
    loginMessage (state, obj) {
      state.loginMessage = { school: obj.school, student_id: obj.student_id, password: obj.password }
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