let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')

const Schema = mongoose.Schema

const userSchema = new Schema({
  avatar: {
    type: String
  },
  school: String,
  student_id: String,
  password: String,
  money: {
    type: Number,
    default: 0
  },
  goods: Array,
  news: Array,
  footStep: Array,
  order: Array,
  address: [
    {
      pos: String,
      main: {
        type: Boolean,
        default: false
      },
    }
  ]
})

module.exports = mongoose.model('User', userSchema)