/**
 * @description jsonSchame 中间件验证
 * @param {function} validatorFn 验证函数
 */

const { ErrorModel } = require('../model/ResultModel')

function genValidator(validatorFn) {
  async function validator (ctx, next) {
    // 校验
    const data = ctx.request.body
    const error = validatorFn(data)
    console.log(error)
    if (error) {
      ctx.body = new ErrorModel({
        errno: 10009,
        message: error.message || '数据格式验证错误!'
      })
    } else {
      // 成功则继续
      await next()
    }
  }
  return validator
}
module.exports = {
  genValidator
}