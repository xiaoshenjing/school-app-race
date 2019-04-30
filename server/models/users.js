let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')

const defaultPath = 'http://10.14.4.153:3000/public' // dt
// const defaultPath = 'http://172.16.77.178:3000/public' // 校园网
// const defaultPath = 'http://192.168.43.87:3000/public' // 手机

const Schema = mongoose.Schema

const userSchema = new Schema({
  avatar: {
    type: String,
    default: defaultPath + '/avatar/avatar.jpg'
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
  address: [
    {
      pos: String,
      main: {
        type: Boolean,
        default: false
      },
    }
  ],
  order: [
    {
      goodsId: String,
      count: Number,
      price: Number,
      src: String,
      time: String,
      title: String,
    }
  ],
  cart: []
})

module.exports = mongoose.model('User', userSchema)