const Sequelize = require('sequelize')
const config = {
  host: 'localhost',
  dialect: 'mysql'
}
const seq = new Sequelize('weibo', 'root', '7758258', config)

// seq.authenticate().then(() => {
//   console.log('onk')
// }).catch(() => {
//   console.log('error')
// })

module.exports = seq