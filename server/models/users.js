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
  ],
  news: [
    {
      author: String,
      title: String,
      content: String,
      src: String,
      time: {
        type: Date,
        default: Date.now,
      },
      watches: Number,
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
    }
  ],
  footStep: [
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
  ],
  order: [
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
  ],
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