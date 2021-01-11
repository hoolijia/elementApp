import request from '@/utils/request'

export function test() {
  return request.get('/api/posts/cities')
}


