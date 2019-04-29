var express = require('express')
var path = require('path')
var logger = require('morgan')

let commonFun = require('./commonFun')
var goodsRouter = require('./routes/goods')
var usersRouter = require('./routes/users')
var newsRouter = require('./routes/news')

var app = express()

// 解决跨域
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

app.use('/public/', express.static(path.join(__dirname, 'public')))

/* add data */
let Users = require('./models/users')
app.use('/add', function (req, res, next) {
  try {
    new Users({
      school: '2',
      student_id: 'admin1',
      password: 'admin1'
    }).save()
  } catch (err) {
    next(err)
  }
})

// 验证 token 是否过期，以及全局处理中间件
app.use(function (req, res, next) {
  if (req.url === '/users/login' || /^\/public/.test(req.url)) {
    next()
  } else {
    commonFun.checkToken(req.headers.token, function (flag, userId) {
      if (flag) {
        return res.status(200).json({
          reason: '登陆状态过期，请重新登陆',
          jwt: true
        })
      }
      req.userId = userId
      // req.publicUrl = 'http://10.14.4.153:3000/public'// dt
      req.publicUrl = 'http://172.16.77.178:3000/public'// 校园网
      // req.publicUrl = 'http://192.168.43.87:3000/public'// 手机
      next()
    })
  }
})

// router 操作
app.use('/goods', goodsRouter)
app.use('/users', usersRouter)
app.use('/news', newsRouter)

// 全局处理错误
app.use(function (err, req, res, next) {
  if (err.reason) {
    return res.status(200).json(err)
  }

  console.log(err)
  return res.status(200).json({
    result: false,
    reason: '服务器错误'
  })
})

module.exports = app
