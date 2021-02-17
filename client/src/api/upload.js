import request from '@/utils/request'

// 上传接口
export function upload(data) {
  return request({
    url: '/api/utils/upload',
    method: 'post',
    data
  })
}