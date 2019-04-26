var express = require('express')
var router = express.Router()

let commonFun = require('../commonFun')

// userSchema 的引入
let Users = require('../models/users')

// 登陆
router.post('/login', async function (req, res, next) {
  try {
    let user = req.body
    let search = await Users.findOne(user)
    if (search) {
      let jwt = commonFun.creatToken(search.school_id, search._id)

      return res.status(200).json({
        result: true,
        reason: '登陆成功',
        token: jwt
      })
    } else {
      next({ result: false, reason: '信息验证失败，请确认信息后重新登陆' })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
