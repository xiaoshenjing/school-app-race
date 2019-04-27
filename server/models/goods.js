let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')

const Schema = mongoose.Schema

const goodsSchema = new Schema({
  select: Number,
  price: Number,
  watch: {
    type: Number,
    default: 0
  },
  count: {
    type: Number,
    default: 0
  },
  src: Array,
  title: String,
  time: String,
  comment: [
    {
      person: String,
      time: String,
      content: String,
    }
  ],
  desc: String,
  max_count: Number,
  userId: String,
})

module.exports = mongoose.model('Good', goodsSchema)