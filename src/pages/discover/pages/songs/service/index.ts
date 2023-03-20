import request from '@/service/index'

export function getPlayListCatList<T = any>() {
  return request.get<T>({
    url: '/playlist/catlist'
  })
}

export function getHightQuality<T = any>(
  limit: number,
  before?: number,
  cat?: string
) {
  return request.get<T>({
    url: '/top/playlist/highquality',
    params: {
      cat,
      limit,
      before
    }
  })
}
