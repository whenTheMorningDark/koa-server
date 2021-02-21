/**
 * @description 微博路由
 */
const router = require('koa-router')()
const getTokenInfo = require('../../utils/getToken')
const { create } = require('../../controller/blog')
const { genValidator } = require('../../middlewares/validator')
const blogValidator = require('../../validator/blog')
router.prefix('/api/blog')
router.post('/create', genValidator(blogValidator), async (ctx) => {
  const { content, image } = ctx.request.body
  const userInfo = await getTokenInfo(ctx)
  console.log(userInfo)
  ctx.body = await create({ userId: userInfo.id, content, image })
  // console.log('xxxxxxaa', content)
  // console.log('xxxxxxaa', image)
  // ctx.body = new SuccessModel({
  //   errorno: 0,
  //   data: userInfo
  // })
})
module.exports = router
