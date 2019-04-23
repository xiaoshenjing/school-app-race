let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')

const Schema = mongoose.Schema

const goodsSchema = new Schema({
  carousel: [
    {
      src: {
        type: String,
        default: '',
      },
      href: String
    }
  ],
  goods: [
    {
      price: Number,
      watch: Number,
      count: {
        type: Number,
        default: 0
      },
      src: Array,
      title: String,
      time: {
        type: Date,
        default: Date.now,
      },
      comment: [
        {
          person: String,
          time: {
            type: Date,
            default: Date.now,
          },
          content: String,
          callback: [
            {
              person: String,
              content: String,
            }
          ]
        }
      ],
      desc: String,
      max_count: Number,
    }
  ]
})

module.exports = mongoose.model('Good', goodsSchema)