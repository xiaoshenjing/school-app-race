let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')

const Schema = mongoose.Schema

const newsSchema = new Schema({
  author: String,
  title: String,
  content: String,
  time: String,
  watch: {
    type: Number,
    default: 0
  },
  img_file: String,
  comment: [
    {
      person: String,
      content: String,
      time: String,
    }
  ]
})

module.exports = mongoose.model('New', newsSchema)