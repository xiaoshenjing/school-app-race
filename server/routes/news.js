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

module.exports = router