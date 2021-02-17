/**
 * @description 文件上传控制器
 */
const { SuccessModel, ErrorModel } = require('../model/ResultModel')
const maxSize = 1024 * 1024 * 1024 // 文件最大体积 1m
// const fes = require('fs-ex')
const fse = require('fs-extra')
const path = require('path')
async function saveFile({ name, type, size, filePath }) {
  if (size > maxSize) {
    await fse.remove(filePath)
    return new ErrorModel({
      errno: 10020,
      message: '文件体积过大'
    })
  }
  // 存储目录
  const DIST_FOLDER_PATH = path.join(__dirname, '..', '/public/upload')
  // 移动文件
  const fileName = Date.now() + name // 防止重名
  const distFilePath = path.join(DIST_FOLDER_PATH, fileName)
  await fse.move(filePath, distFilePath)
  return new SuccessModel({
    url: '/upload/' + fileName
  })
}
module.exports = {
  saveFile
}