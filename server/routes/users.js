var express = require('express')
var router = express.Router()

// userSchema 的引入
let User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  try {
    new User({ student_id: '541788' }).save((err, data) => {
      if (err) {
        next(err)
      } else {
        console.log(data)
        res.send('yes')
      }
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
