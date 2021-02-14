// 加密密码

const crypto = require('crypto')
const { CRYPTO_SECRET_KEY } = require('../conf/secretKeys')

function md5(content) {
  const pMd5 = crypto.createHash('md5')
  return pMd5.update(content).digest('hex')
}

function doCrypto(content) {
  const str = `password=${content}&key=${CRYPTO_SECRET_KEY}`
  return md5(str)
}

module.exports = {
  doCrypto
}