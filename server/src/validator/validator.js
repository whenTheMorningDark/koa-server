// 统一的校验方法
const Ajv = require('ajv').default
const ajv = new Ajv({ allErrors: true })
require('ajv-errors')(ajv, { singleError: true })
function validate(schma, data = {}) {
  const valid = ajv.validate(schma, data)
  if (!valid) {
    return ajv.errors[0]
  }
}

module.exports = validate