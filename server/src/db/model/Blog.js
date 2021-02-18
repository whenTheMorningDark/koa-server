/**
 * @description 微博数据模型
 */

const Seq = require('../seq')
const { STRING, INTEGER, TEXT } = require('../types')

// 创建blog模型
const Blog = Seq.define('blog', {
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用户id'
  },
  content: {
    type: TEXT,
    allowNull: false,
    comment: '微博内容'
  },
  image: {
    type: STRING,
    comment: '图片地址'
  }
})
module.exports = Blog