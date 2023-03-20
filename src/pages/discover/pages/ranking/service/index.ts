import request from '@/service/index'

export function getRankingList<T = any>() {
  return request.get<T>({
    url: '/toplist'
  })
}

// 获取歌单详情
export function getCurrentRankingDetail<T = any>(id: number) {
  return request.get<T>({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
