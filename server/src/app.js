const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const jwtKoa = require('koa-jwt')
const cors = require('koa2-cors')
const whiteOrigin = ['http://192.168.31.243:8082']
app.use(cors({
  origin: function(ctx) {
    if (whiteOrigin.includes(ctx.header.origin)) {
      return '*'
    } else {
      return false
    }
    // console.log('header', ctx.header.origin)

    // console.log(ctx.url)
    // if (ctx.url === '/test') {
    //   return false
    // }
    // return '*'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))
// const path = require('path')
// const session = require('koa-generic-session')
// const redisStore = require('koa-redis')
// const REDIS_CONF = require('./conf/redisConf')
// const index = require('./routes/index')
const users = require('./routes/api/user')
const utils = require('./routes/api/utils')
const blog = require('./routes/api/blog')
const { TOKEN_SECRET_KEY } = require('./conf/secretKeys')
// error handler
onerror(app)
// eslint-disable-next-line no-path-concat
app.use(require('koa-static')(__dirname + '/public'))

app.use(jwtKoa({
  secret: TOKEN_SECRET_KEY
}).unless({
  path: ['/api/user/login', '/api/user/register']
}))

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// app.use(require('koa-static')(path.join(__dirname, '..', 'uploadFiles')))
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
app.use(utils.routes(), utils.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
