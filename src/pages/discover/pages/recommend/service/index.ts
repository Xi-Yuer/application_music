import request from '@/service/index'

export function getBanner<T>() {
  return request.get<T>({
    url: '/banner'
  })
}
