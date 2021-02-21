// user 数据校验
const validate = require('./validator')
const schema = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
      maxLength: 15,
      minLength: 1
    }
  },
  errorMessage: {
    properties: {
      userName: '字数应该在1-15'
    }
  }
}

// 校验用户数据格式
function blogValidator(data = {}) {
  return validate(schema, data)
}

module.exports = blogValidator