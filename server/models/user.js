let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')

let Schema = mongoose.Schema

let userSchema = new Schema({
  student_id: {
    type: String
  }
})

module.exports = mongoose.model('User', userSchema)