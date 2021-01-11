import request from '@/utils/request'

export function getCityInfo() {
  return request.get('/api/posts/cities')
}



