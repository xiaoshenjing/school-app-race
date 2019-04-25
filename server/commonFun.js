let jwt = require('jsonwebtoken')

function creatToken (schoolId, userId) {
  return jwt.sign({
    schoolId: schoolId,
    userId: userId,
  }, 'xiaoze', { expiresIn: '7d' })
}

function checkToken (token, callback) {
  jwt.verify(token, 'xiaoze', function (err, decode) {
    if (err) {
      callback(true)
    } else {
      callback(false)
    }
  })
}

module.exports = { creatToken, checkToken }