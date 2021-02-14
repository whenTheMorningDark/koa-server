/**
 * user controller
 */
// 用户名称是否存在
const { getUserInfo, createUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResultModel')
const { registerNameNotExitInfo, registerNameExitInfo, registerFailInfo } = require('../model/ErrorInfo')
const { doCrypto } = require('../utils/cryp')
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new SuccessModel(userInfo)
  } else {
    return new ErrorModel(registerNameNotExitInfo)
  }
}

async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 用户名存在
    return new ErrorModel(registerNameExitInfo)
  }
  // 注册servies
  try {
    await createUser({
      userName, password: doCrypto(password), gender
    })
    return new SuccessModel()
  } catch (err) {
    console.log(err)

    return new ErrorModel(registerFailInfo)
  }
}

module.exports = {
  isExist,
  register
}