import request from '@/utils/request'

// 上传接口
export function upload(data) {
  return request({
    url: '/api/utils/upload',
    method: 'post',
    data
  })
}

// 创建微博
export function createBlog(data) {
  return request({
    url: '/api/blog/create',
    method: 'post',
    data
  })
}