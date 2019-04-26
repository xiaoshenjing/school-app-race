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

// 上传商品
router.post('/add', upload.array('img_file'), async function (req, res, next) {
  try {
    let goods = req.body
    goods.src = []
    goods.userId = req.userId
    for (let i = 0; i < req.files.length; i++) {
      goods.src.push(req.publicUrl + '/ign_upload/goods/' + path.basename(req.files[i].path))
    }

    let addGoods = await new Goods(goods).save()

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

module.exports = router
