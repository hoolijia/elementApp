import request from '@/utils/request'

export function insert (uid, data) {
  return request.post(`/api/user/add_address/${uid}`, data)
}



