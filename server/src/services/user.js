const { User } = require('../db/model/index')
const { formatUser } = require('./_format')
const { doCrypto } = require('../utils/cryp')
async function getUserInfo(userName, password) {
  const whereOpt = {
    username: userName
  }
  if (password) {
    Object.assign(whereOpt, { password })
  }
  // 查询
  const result = await User.findOne({
    // attributes: ['id', 'username', 'nickName', 'picture', 'city']
    where: whereOpt
  })
  if (result == null) {
    return result
  }
  // 格式化
  const formatRes = formatUser(result.dataValues)
  return formatRes
}

// 创建用户
async function createUser({ userName, password, gender = 3, nickName }) {
  const result = await User.create({
    username: userName,
    password,
    gender,
    nickName: nickName || userName
  })
  console.log(result)
  return result.dataValues
}

// 修改用户信息
async function updateUser({ newPassword, newNickName, newPicture, newCity }, { userName }) {
  const updateData = {}
  if (newPassword) {
    updateData.password = doCrypto(newPassword)
  }
  if (newNickName) {
    updateData.nickName = newNickName
  }
  if (newPicture) {
    updateData.picture = newPicture
  }
  if (newCity) {
    updateData.city = newCity
  }
  const whereData = {
    userName
  }
  // if (password) {
  //   whereData.password = password
  // }

  // 执行修改
  const result = await User.update(updateData, {
    where: whereData
  })
  return result[0] > 0 // 修改的行数
}

module.exports = {
  getUserInfo,
  createUser,
  updateUser
}