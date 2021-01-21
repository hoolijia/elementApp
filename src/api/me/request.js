import request from '@/utils/request'

export function getUserInfo (data) {
  return request.get(`/api/user/user_info/${data}`)
}



