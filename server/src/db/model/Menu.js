/**
 * @description 微博数据模型
 */

const Seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../types')

// 创建blog模型
const Menu = Seq.define('menu', {
  menuId: {
    type: INTEGER,
    allowNull: false,
    comment: '菜单id'
  },
  path: {
    type: TEXT,
    allowNull: false,
    comment: '路由路径'
  },
  code: {
    type: STRING,
    comment: '路由的标识符号'
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用户id'
  }
})
module.exports = Menu