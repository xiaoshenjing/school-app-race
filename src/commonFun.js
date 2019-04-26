let commonFun = {}

commonFun.install = function (Vue) {
  // 验证表单是否为空，并返回为空的键
  Vue.prototype.$checkEmpty = function (obj) {
    if (!obj)
      return true

    for (let item in obj) {
      if (obj[item] === '' || obj[item] === undefined ||  obj[item].length === 0) {
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
    } else {
      return true
    }
  }

  // 获取标准时间
  Vue.prototype.$now = function () {
    let standard = new Date()
    return `${standard.getFullYear()}-${standard.getMonth() + 1}-${standard.getDate()} ${standard.getHours()}:${standard.getMinutes()}:${standard.getSeconds()}`
  }
}

export default commonFun