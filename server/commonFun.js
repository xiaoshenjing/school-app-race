let jwt = require('jsonwebtoken')

function creatToken (school_id, userId) {
  return jwt.sign({
    username: username,
    userId: userId,
  }, 'xiaoze', { expiresIn: '7d' })
}

function checkToken (token, callback) {
  jwt.verify(token, 'xiaoze', function (err, decode) {
    if (err) {
      callback(false)
    } else {
      callback(true)
    }
    console.log(decode)
  })
}

module.exports = { creatToken, checkToken }