var express = require('express')
var router = express.Router()
let multer = require('multer')
let path = require('path')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/ign_upload/goods')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + '.jpg')
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
    await Users.update({ goods: { $ne: Object(addGoods._id) } }, {
      $push: {
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

// 获取商品
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
    await Users.update({ 'footStep': { $ne: Object(watch.goodsId) } }, {
      $push: {
        footStep: watch.goodsId
      }
    })

    return res.status(200).json({
      result: true
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router