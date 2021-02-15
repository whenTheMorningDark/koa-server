const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const jwtKoa = require('koa-jwt')
// const session = require('koa-generic-session')
// const redisStore = require('koa-redis')
// const REDIS_CONF = require('./conf/redisConf')
// const index = require('./routes/index')
const users = require('./routes/api/user')
const { TOKEN_SECRET_KEY } = require('./conf/secretKeys')
// error handler
onerror(app)

app.use(jwtKoa({
  secret: TOKEN_SECRET_KEY
}).unless({
  path: ['/api/user/login']
}))

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
// eslint-disable-next-line no-path-concat
app.use(require('koa-static')(__dirname + '/public'))

// eslint-disable-next-line no-path-concat
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// session 配置
// app.keys = ['Ujazx45_$#@!']
// app.use(session({
//   key: 'weibo.sid', // cookies name
//   prefix: 'weibo:sess:', // redis key的前缀
//   cookie: {
//     path: '/',
//     httpOnly: true,
//     maxAge: 24 * 60 * 60 * 1000 // 一天
//   },
//   store: redisStore({
//     all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
//   })
// }))

// routes
// app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
