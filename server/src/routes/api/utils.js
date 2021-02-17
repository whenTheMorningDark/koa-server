/**
 * @description 文件上传api
 */
const router = require('koa-router')()
router.prefix('/api/utils')
const koaForm = require('formidable-upload-koa')
const { saveFile } = require('../../controller/utils')
// const options = {

// }
// 上传图片
router.post('/upload', koaForm(), async (ctx) => {
  const file = ctx.req.files['file']
  const { size, path, name, type } = file
  // controller
  ctx.body = await saveFile({
    size, filePath: path, name, type
  })
})

module.exports = router