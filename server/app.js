var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

let commonFun = require('./commonFun')
var goodsRouter = require('./routes/goods')
var usersRouter = require('./routes/users')
var newsRouter = require('./routes/news')

var app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Token, Accept, X-Requested-With')
  next()
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/* add data */
/*let Users = require('./models/users')
app.use('/add', function (req, res, next) {
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
})*/

// 验证 token 是否过期
app.use(function (req, res, next) {
  if (req.url !== '/users/login') {
    commonFun.checkToken(req.headers.token, function (flag) {
      if (!flag) {
        res.status(200).json({
          result: false,
          reason: '登陆状态过期，请重新登陆',
          jwt: true
        })
      }
    })
    return
  }
  next()
})

// router 操作
app.use('/goods', goodsRouter)
app.use('/users', usersRouter)
app.use('/news', newsRouter)

module.exports = app
