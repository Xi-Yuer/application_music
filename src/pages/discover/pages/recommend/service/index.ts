import request from '@/service/index'

export function getBanner<T>() {
  return request.get<T>({
    url: '/banner'
  })
}

export function getHotRecommend<T>() {
  return request.get<T>({
    url: '/personalized',
    params: {
      limit: 8
    }
  })
}

export function getNewAlbum<T = any>() {
  return request.get<T>({
    url: '/album/newest',
    params: {
      limit: 10
    }
  })
}

export function getRanking<T = any>(id: number | string) {
  return request.get<T>({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
