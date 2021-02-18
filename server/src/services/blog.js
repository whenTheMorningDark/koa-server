/**
 * @description 微博的 服务层次
 */
const { Blog } = require('../db/model/index')
/**
 * @description 创建微博
 */
async function createBlog({ userId, content, image }) {
  const result = await Blog.create({
    userId, content, image
  })
  console.log(result)
  return result.dataValues
}
module.exports = {
  createBlog
}