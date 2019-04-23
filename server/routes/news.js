let express = require('express')
let router = express.Router()

let News = require('../models/news')

router.get('/', function (req, res, next) {
  try {
    console.log(req)
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