let commonFun = {}

commonFun.install = function (Vue) {
  // 验证表单是否为空，并返回为空的键
  Vue.prototype.$checkEmpty = function (obj) {
    for (let item in obj) {
      if (obj[item] === '') {
        return item
      }
    }
  }
  // 验证 token 是否过期
  Vue.prototype.$jwt = function (obj) {
    if (obj.jwt) {
      this.$router.push('/home')
      this.$store.commit('login', false)
      this.$store.commit('token', '')
      this.$store.commit('tip', { reason: obj.reason, color: 'red', update: new Date() })
    }
  }
}

export default commonFun