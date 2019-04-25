var express = require('express')
var router = express.Router()

// let Goods = require('../models/goods')

// 上传商品
router.post('/add', async function (req, res, next) {
  try {
    return res.status(200).json({
      result: true,
      data: '123'
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
