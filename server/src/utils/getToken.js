
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)
const { TOKEN_SECRET_KEY } = require('../conf/secretKeys')
async function getTokenInfo(ctx) {
  const token = ctx.header.authorization
  const payLoad = await verify(token.split(' ')[1], TOKEN_SECRET_KEY)
  return new Promise(reslove => {
    reslove(payLoad)
  })
}
module.exports = getTokenInfo