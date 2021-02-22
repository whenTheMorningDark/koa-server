/**
 * user controller
 */
// 用户名称是否存在
const { getUserInfo, createUser, updateUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResultModel')
const { registerNameNotExitInfo, registerNameExitInfo, registerFailInfo } = require('../model/ErrorInfo')
const { doCrypto } = require('../utils/cryp')
const { TOKEN_SECRET_KEY } = require('../conf/secretKeys')
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)
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

// 登录控制器
async function login(ctx, userName, password) {
  const userInfo = await getUserInfo(userName, doCrypto(password))
  if (!userInfo) {
    // 登录失败
    return new ErrorModel({
      errno: 10004,
      message: '账号不存在!'
    })
  }

  // 加密userinfo
  const token = jwt.sign(userInfo, TOKEN_SECRET_KEY, { expiresIn: '1h' }) // 设置token
  delete userInfo['password']
  return new SuccessModel(
    {
      token,
      userInfo: userInfo
    }
  )
}

// 获取当前用户信息的控制器
// Bearer 456
async function getUserPersonInfo(ctx, userName, password) {
  const token = ctx.header.authorization
  try {
    const payLoad = await verify(token.split(' ')[1], TOKEN_SECRET_KEY)
    return new SuccessModel(payLoad)
  } catch (err) {
    return new ErrorModel({
      errno: 10010,
      message: 'token获取失败!'
    })
  }
}

// 修改个人信息controller
async function changeInfo({ ctx, nickName, city, picture, password }) {
  const token = ctx.header.authorization
  const payLoad = await verify(token.split(' ')[1], TOKEN_SECRET_KEY)
  const username = payLoad.username
  const data = await updateUser({ newNickName: nickName, newCity: city, newPicture: picture, newPassword: password }, { userName: username })
  return data ? new SuccessModel({ nickName, city, picture }) : new ErrorModel({ errno: 10030, message: '数据修改失败!' })
}

module.exports = {
  isExist,
  register,
  login,
  getUserPersonInfo,
  changeInfo
}