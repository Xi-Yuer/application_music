import request from '@/service/index'

export const getAlbumDetail = <T = any>(id: number | string) => {
  return request.get<T>({
    url: '/digitalAlbum/detail',
    params: {
      id
    }
  })
}
