let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')

const Schema = mongoose.Schema

const newsSchema = new Schema({
  carousel: [
    {
      src: {
        type: String,
        default: ''
      },
      href: String,
    }
  ],
  news: [
    {
      author: String,
      title: String,
      content: String,
      time: {
        type: Date,
        default: Date.now
      },
      watches: Number,
      src: String,
      comment: [
        {
          person: String,
          content: String
        }
      ]
    }
  ]
})

module.exports = mongoose.module('New', newsSchema)