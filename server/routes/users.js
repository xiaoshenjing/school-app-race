var express = require('express')
var router = express.Router()
let multer = require('multer')
let path = require('path')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/ign_upload/avatar')
  },
  filename: function (req, file, cb) {
    let time = Date.now()
    cb(null, file.fieldname + '_' + time + '.jpg')
  },
})
let upload = multer({ storage })

let commonFun = require('../commonFun')

// userSchema 的引入
let Users = require('../models/users')
let Goods = require('../models/goods')

// 登陆
router.post('/login', async function (req, res, next) {
  try {
    let user = req.body
    let search = await Users.findOne(user)
    if (search) {
      let jwt = commonFun.creatToken(search.school_id, search._id)

      return res.status(200).json({
        result: true,
        reason: '登陆成功',
        token: jwt,
      })
    } else {
      next({ result: false, reason: '信息验证失败，请确认信息后重新登陆' })
    }
  } catch (err) {
    next(err)
  }
})

// get user message
router.get('/', async function (req, res, next) {
  try {
    let user = await Users.findOne({ _id: Object(req.userId) })

    if (user) {
      res.status(200).json({
        result: true,
        personData: user,
      })
    }
  } catch (err) {
    next(err)
  }
})

// address
router.post('/address', async function (req, res, next) {
  try {
    let address = req.body

    await Users.update({ _id: Object(req.userId) }, {
      address: address.address,
    })

    res.status(200).json({
      result: true,
      reason: '修改成功',
    })
  } catch (err) {
    next(err)
  }
})

// 加入购物车
router.post('/add-cart', async function (req, res, next) {
  try {
    let goodsId = req.body.id
    let addCart = await Users.update({ _id: Object(req.userId) }, {
      $addToSet: {
        cart: goodsId,
      },
    })

    if (addCart.nModified) {
      return res.status(200).json({
        result: true,
        reason: '添加成功',
      })
    }

    return res.status(200).json({
      result: false,
      reason: '已添加到购物车，请勿重复添加',
    })
  } catch (err) {
    next(err)
  }
})

// 获取购物车
router.get('/get-cart', async function (req, res, next) {
  try {
    let user = await Users.findOne({ _id: Object(req.userId) })

    let cart = await Goods.find({ _id: { $in: user.cart } })

    return res.status(200).json({
      result: true,
      cart: cart,
    })
  } catch (err) {
    next(err)
  }
})

// 删除购物车
router.post('/delete-cart', async function (req, res, next) {
  try {
    let goodsId = req.body.goodsId

    await Users.update({ _id: Object(req.userId) }, {
      $pull: { cart: goodsId },
    })

    return res.status(200).json({
      result: true,
      reason: '删除成功',
    })
  } catch (err) {
    next(err)
  }
})

// 获取订单
router.get('/get-order', async function (req, res, next) {
  try {
    let user = await Users.findOne({ _id: Object(req.userId) })

    return res.status(200).json({
      result: true,
      order: user.order,
    })
  } catch (err) {
    next(err)
  }
})

// 获取订单内容
router.get('/get-goods', async function (req, res, next) {
  try {
    let goodsId = req.query.id

    let goods = await Goods.findOne({ _id: Object(goodsId) })

    if (goods) {
      return res.status(200).json({
        result: true,
        goods: goods,
      })
    }

    res.status(200).json({
      result: false,
      reason: '抱歉，该商品已下架',
    })
  } catch (err) {
    next(err)
  }
})

// 修改个人资料
router.post('/set-person', upload.single('avatar'),
  async function (req, res, next) {
    try {
      let person = req.body
      person.money = Number(person.money)

      if (req.file) {
        person.avatar = req.publicUrl + '/ign_upload/avatar/' +
          path.basename(req.file.path)
      } else {
        delete person.avatar
      }

      let updatePerson = await Users.update({ _id: Object(req.userId) }, person)

      if (updatePerson.nModified) {
        return res.status(200).json({
          result: true,
          reason: '上传成功',
        })
      }
    } catch (err) {
      next(err)
    }
  })

module.exports = router
