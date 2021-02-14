// user 数据校验
const validate = require('./validator')
const schema = {
  type: 'object',
  properties: {
    userName: {
      type: 'string',
      maxLength: 5,
      minLength: 2
    }
  },
  errorMessage: {
    properties: {
      userName: '用户名长度范围在2-5!'
    }
  }
}

// 校验用户数据格式
function userValidator(data = {}) {
  return validate(schema, data)
}

module.exports = userValidator