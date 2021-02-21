/**
 * @description 微博api的控制器
 */
const { SuccessModel, ErrorModel } = require('../model/ResultModel')
const { createBlog } = require('../services/blog')
const xss = require('xss')

// 创建微博
async function create({ userId, content, image }) {
  try {
    const bolg = await createBlog({ userId, content: xss(content), image })
    return new SuccessModel(bolg)
  } catch (err) {
    return new ErrorModel({
      errno: 10050,
      message: '微博创建失败!'
    })
  }
}
module.exports = {
  create
}