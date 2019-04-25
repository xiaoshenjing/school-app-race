var express = require('express')
var router = express.Router()

let commonFun = require('../commonFun')

// userSchema 的引入
let Users = require('../models/users')

// 登陆
router.post('/login', async function (req, res, next) {
  try {
    let body = req.body
    let search = await Users.findOne(body)
    if (search) {
      let jwt = commonFun.creatToken(search.school_id, search._id)

      // 保存 userId
      res.cookie('userId', search._id, { maxAge: 1000 * 24 * 60 * 60 * 7, signed: true })

      res.status(200).json({
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

// 全局处理错误
router.use(function (err, req, res, next) {
  if (err.reason) {
    console.log(err)
    res.status(200).json(err)
    return
  }
  console.log(err)
  res.status(200).json({
    result: false,
    reason: '服务器错误'
  })
})

module.exports = router
