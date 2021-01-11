import request from '@/utils/request'

export function getCode(data) {
  return request.post('/api/posts/sms_send', data)
}

export function login(data) {
  return request.post('/api/posts/sms_back', data)
}


