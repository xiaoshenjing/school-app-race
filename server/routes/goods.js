var express = require('express')
var router = express.Router()

let Goods = require('../models/goods')

/* GET home page. */
router.get('/', function (req, res, next) {
  try {
    res.send('goods')
  } catch (err) {
    next(err)
  }
})

module.exports = router
