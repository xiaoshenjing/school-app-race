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

// 保存富文本编辑器图片
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

// 保存内容
router.post('/', upload.single('img_file'), async function (req, res, next) {
  try {
    let news = req.body
    news.img_file = req.publicUrl + '/ign_upload/news/' + path.basename(req.file.path)
    let addNews = await new News(news).save()

    if (addNews) {
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

// 获取内容
router.get('/', async function (req, res, next) {
  try {
    let news = await News.find()

    if (news) {
      return res.status(200).json({
        result: true,
        news: news
      })
    }

    next({ result: false, reason: '发布失败' })
  } catch (err) {
    next(err)
  }
})

// 趣事留言
router.post('/comment', async function (req, res, next) {
  try {
    let comment = req.body

    let findNews = await News.findByIdAndUpdate(comment.newsId, {
      $push: {
        comment: {
          time: comment.time,
          content: comment.content,
          person: comment.person,
        }
      }
    })
    if (findNews) {
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

// add watch
router.post('/watch', async function (req, res, next) {
  try {
    let watch = req.body
    let findNews = await News.findOne({ _id: Object(watch.newsId) })

    findNews.watch++

    let updateWatch = await News.findByIdAndUpdate(watch.newsId, {
      watch: findNews.watch
    })

    if (updateWatch) {
      return res.status(200).json({
        result: true
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router