let express = require('express')
let router = express.Router()
let multer = require('multer')
let path = require('path')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/ign_upload/news')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + '.jpg')
  }
})
let upload = multer({ storage })

let News = require('../models/news')

router.post('/save_img', upload.single('img'), function (req, res, next) {
  try {
    if (req.file) {
      return res.status(200).json({
        result: true,
        img: req.publicUrl + '/ign_upload/news/' + path.basename(req.file.path)
      })
    }

    return res.status(200).json({
      result: false,
      reason: '图片上传失败'
    })
  } catch (err) {
    next(err)
  }
})

router.post('/add', upload.single('img_file'), async function (req, res, next) {
  try {
    let news = req.body
    let addNews = await new News(news).save()

    if (addNews) {
      console.log(news)
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