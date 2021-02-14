const { User } = require('../db/model/index')
const { formatUser } = require('./_format')
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

module.exports = {
  getUserInfo,
  createUser
}