let commonFun = {}

commonFun.install = function (Vue) {
  Vue.prototype.$checkEmpty = function (obj) {
    for (let item in obj) {
      if (obj[item] === '') {
        return item
      }
    }
  }

}