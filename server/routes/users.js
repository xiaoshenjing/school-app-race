var express = require('express')
var router = express.Router()

// userSchema 的引入
let Users = require('../models/users')

/* GET users listing. */
router.post('/login', function (req, res, next) {
  try {
    console.log(req.body)
  } catch (err) {
    next(err)
  }
})

// 全局处理错误
router.use(function (err, req, res, next) {
  console.log(err)
  /*res.status(200).json({
    result: false
  })*/
})

module.exports = router
