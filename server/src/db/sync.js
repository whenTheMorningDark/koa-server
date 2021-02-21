const seq = require('./seq')
require('./model/index')
seq.authenticate().then(() => {
  console.log('onk')
}).catch(() => {
  console.log('error')
})

seq.sync({ alter: true }).then(() => {
  console.log('sync out')
  process.exit()
})