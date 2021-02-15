import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user/login',
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
/**
 * @description 获取用户信息接口
 * @param {String} null
 */
export function getUserInfo() {
  return request({
    url: '/api/user/getUserInfo',
    method: 'get'
  })
}