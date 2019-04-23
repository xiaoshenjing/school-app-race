var express = require('express')
var router = express.Router()

// userSchema 的引入
let Users = require('../models/users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  try {
    let user = new Users({
      school: '1',
      student_id: 'admin1',
      password: 'admin1'
    })
    let add = user.save()
    console.log(add)
  } catch (err) {
    next(err)
  }
})

/* GET users listing. */
router.post('/login', async function (req, res, next) {
  try {
    let req = req.body

    let search = Users.findOne(req)

    if (search) {
      res.status(200).json({
        err_code: 0,
        result: true,
        token: ''
      })
    }

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
