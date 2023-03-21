import request from '@/service/index'

export function fetchPlayListDetail<T = any>(id: string) {
  return request.get<T>({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function fetchPlayListSongs<T = any>(
  id: string | number,
  limit: number,
  offset: number
) {
  return request.get<T>({
    url: '/playlist/track/all',
    params: {
      id,
      limit,
      offset
    }
  })
}

export function fetchLikeOther<T = any>(id: number) {
  return request.get<T>({
    url: '/related/playlist',
    params: {
      id
    }
  })
}
