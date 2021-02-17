/**
 * user api路由
 */
const router = require('koa-router')()
const userValidator = require('../../validator/user')
router.prefix('/api/user')
const { isExist, register, login, getUserPersonInfo, changeInfo } = require('../../controller/user')
const { genValidator } = require('../../middlewares/validator')
// 注册路由
router.post('/register', genValidator(userValidator), async(ctx, next) => {
  const { userName, password, gender } = ctx.request.body

  // console.log(userName)
  ctx.body = await register({ userName, password, gender })
})
// 用户是否存在
router.post('/isExist', async(ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})
// 登录
router.post('/login', async(ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
  // controller
  // ctx.body = await isExist(userName)
})
// 获取用户信息
router.get('/getUserInfo', async(ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await getUserPersonInfo(ctx, userName, password)
  // controller
  // ctx.body = await isExist(userName)
})

// 修改个人信息接口
router.post('/changeInfo', genValidator(userValidator), async(ctx, next) => {
  const { nickName, city, picture, password } = ctx.request.body
  ctx.body = await changeInfo({ ctx, nickName, city, picture, password })
  // controller
  // ctx.body = await isExist(userName)
})

module.exports = router