import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user/isExist',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/api/user/register',
    method: 'post',
    data
  })
}