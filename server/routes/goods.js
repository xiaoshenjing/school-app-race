var express = require('express')
var router = express.Router()
let multer = require('multer')
let path = require('path')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/ign_upload/goods')
  },
  filename: function (req, file, cb) {
    let time = Date.now() + Math.ceil(Math.random() * 100) + Math.ceil(Math.random() * 100)
    cb(null, file.fieldname + '_' + time + '.jpg')
  }
})
let upload = multer({ storage })

let Goods = require('../models/goods')
let Users = require('../models/users')

// 上传商品
router.post('/', upload.array('img_file'), async function (req, res, next) {
  try {
    let goods = req.body
    goods.src = []
    goods.userId = req.userId
    for (let i = 0; i < req.files.length; i++) {
      goods.src.push(req.publicUrl + '/ign_upload/goods/' + path.basename(req.files[i].path))
    }

    let addGoods = await new Goods(goods).save()

    // id 添加到我的商品
    await Users.update({ _id: Object(req.userId) }, {
      $addToSet: {
        goods: addGoods._id.toString()
      }
    })

    if (addGoods) {
      return res.status(200).json({
        result: true,
        reason: '发布成功'
      })
    }

    next({ result: false, reason: '发布失败' })
  } catch (err) {
    next(err)
  }
})

// 获取全部商品
router.get('/', async function (req, res, next) {
  try {
    let getGoods = await Goods.find()

    if (getGoods) {
      return res.status(200).json({
        result: true,
        goods: getGoods
      })
    }
  } catch (err) {
    next(err)
  }
})

// 搜索商品
router.get('/search', async function (req, res, next) {
  try {
    let search = req.query

    let selectGoods = await Goods.find({
      select: search.select,
      title: { $regex: search.content, $options: 'i' }
    })

    return res.status(200).json({
      result: true,
      goods: selectGoods
    })
  } catch (err) {
    next(err)
  }
})

// 获取学生自营商品
router.get('/self-running', async function (req, res, next) {
  try {
    let one = await Goods.find({ select: 0 })

    if (one) {
      return res.status(200).json({
        result: true,
        one: one
      })
    }
  } catch (err) {
    next(err)
  }
})

// 获取校网经营商品
router.get('/official-running', async function (req, res, next) {
  try {
    let two = await Goods.find({ select: 1 })

    if (two) {
      return res.status(200).json({
        result: true,
        two: two
      })
    }
  } catch (err) {
    next(err)
  }
})

// 获取校会托售商品
router.get('/entrusted-running', async function (req, res, next) {
  try {
    let three = await Goods.find({ select: 2 })

    if (three) {
      return res.status(200).json({
        result: true,
        three: three
      })
    }
  } catch (err) {
    next(err)
  }
})

// 商品留言
router.post('/comment', async function (req, res, next) {
  try {
    let comment = req.body
    let findGoods = await Goods.findByIdAndUpdate(comment.goodsId, {
      $push: {
        comment: {
          time: comment.time,
          content: comment.content,
          person: comment.person,
        }
      }
    })

    if (findGoods) {
      return res.status(200).json({
        result: true,
        reason: '发表成功'
      })
    }

    next({ result: false, reason: '发表失败' })
  } catch (err) {
    next(err)
  }
})

// 商品被点击触发的事件，watch、footerStep
router.post('/click', async function (req, res, next) {
  try {
    let watch = req.body
    let findGoods = await Goods.findOne({ _id: Object(watch.goodsId) })

    findGoods.watch++

    // 更新 watch
    await Goods.findByIdAndUpdate(watch.goodsId, {
      watch: findGoods.watch
    })

    // 添加足迹
    await Users.update({ _id: Object(req.userId) }, {
      $addToSet: {
        footStep: watch.goodsId
      }
    })
  } catch (err) {
    next(err)
  }
})

// User goods
router.get('/user-goods', async function (req, res, next) {
  try {
    let goodsId = req.query

    let goods = await Goods.find({ _id: { $in: goodsId.ids } })

    if (goods) {
      return res.status(200).json({
        result: true,
        goods: goods
      })
    }
  } catch (err) {
    next(err)
  }
})

// User footStep
router.get('/user-foot-step', async function (req, res, next) {
  try {
    let footStepId = req.query

    let footStep = await Goods.find({ _id: { $in: footStepId.ids } })

    if (footStep) {
      return res.status(200).json({
        result: true,
        footStep: footStep
      })
    }
  } catch (err) {
    next(err)
  }
})

// 支付数据核实
router.post('/pay-check', async function (req, res, next) {
  try {
    let payData = req.body.pay
    let sumPrice = 0
    let goodsMsg = []
    for (let i = 0; i < payData.length; i++) {
      if (payData[i].count > 0) {
        let payCheck = await Goods.find({ _id: Object(payData[i].goodsId) })
        goodsMsg.push({
          price: (payData[i].count * payCheck[0].price).toFixed(2),
          title: payCheck[0].title,
          count: payData[i].count,
          time: payCheck[0].time,
          goodsId: payData[i].goodsId
        })
        sumPrice += payData[i].count * payCheck[0].price
      }
    }

    return res.status(200).json({
      result: true,
      pay_check: goodsMsg,
      sumPrice: sumPrice.toFixed(2)
    })
  } catch (err) {
    next(err)
  }
})

// 确定支付
router.post('/pay', async function (req, res, next) {
  try {
    let payData = req.body.pay
    let goodsMsg = []
    let count = []
    let sumPrice = 0

    for (let i = 0; i < payData.length; i++) {
      if (payData[i].count > 0) {
        let payCheck = await Goods.find({ _id: Object(payData[i].goodsId) })

        goodsMsg.push({
          price: (payData[i].count * payCheck[0].price).toFixed(2),
          title: payCheck[0].title,
          src: payCheck[0].src[0],
          count: payData[i].count,
          time: payCheck[0].time,
          goodsId: payData[i].goodsId
        })

        count.push({
          title: payCheck[0].title,
          goodsId: payData[i].goodsId,
          count: payCheck[0].max_count - payData[i].count
        })

        sumPrice += Number((payData[i].count * payCheck[0].price).toFixed(2))
      }
    }

    // 订单数目和余额核实
    for (let i = 0; i < count.length; i++) {
      // 订单数目统计
      if (count[i].count >= 0) {
        await Goods.update({ _id: Object(count[i].goodsId) }, { max_count: count[i].count })

        // 支付余额统计
        let user = await Users.findOne({ _id: Object(req.userId) })
        if (user.money > sumPrice) {
          await Users.update({ _id: Object(req.userId) }, {
            money: user.money - sumPrice
          })
        } else {
          return res.status(200).json({
            result: false,
            reason: '余额不足'
          })
        }
      } else {
        await Goods.remove({ _id: Object(count[i].goodsId) })

        return res.status(200).json({
          result: false,
          reason: '商品 ' + count[i].title + ' 库存不足，请您重新选择',
        })
      }
    }

    await Users.update({ _id: Object(req.userId) }, {
      $addToSet: {
        'order': { $each: goodsMsg }
      }
    })

    return res.status(200).json({
      result: true,
      reason: '支付成功'
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router


