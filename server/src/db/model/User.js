/**
 * @description 用户数据模型
 * @author kafei
 *
 */
// const Sequelize = require('sequelize')
const Seq = require('../seq')
const { STRING, DECIMAL } = require('../types')
// 创建user模型
const User = Seq.define('user', {
  username: {
    type: STRING,
    allowNull: false,
    unique: false,
    comment: '用户名唯一'
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码'
  },
  nickName: {
    type: STRING,
    allowNull: false,
    comment: '昵称'
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    comment: '性别(1男,2女性,3保密)',
    defaultValue: '3'
  },
  picture: {
    type: STRING,
    comment: '头像'
  },
  city: {
    type: STRING,
    comment: '城市'
  }
})
module.exports = User
