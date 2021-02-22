/**
 * 数据模型入口文件
 */
const User = require('./User')
const Blog = require('./Blog')
const Menu = require('./Menu')
Blog.belongsTo(User, {
  foreignKey: 'userId'
})
Menu.belongsTo(User, {
  foreignKey: 'userId'
})
module.exports = {
  User,
  Blog
}