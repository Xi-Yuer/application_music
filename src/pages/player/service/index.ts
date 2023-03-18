import request from '@/service/index'

export function getMusicPlayUrl(id: number) {
  return request.get<IMusicResult>({
    url: `/song/url/v1?id=${id}&level=lossless`
  })
}

export function getSongDetail<T>(ids: number) {
  return request.get<T>({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export interface IMusicResult {
  data: Datum[]
  code: number
}

export interface Datum {
  id: number
  url: string
  br: number
  size: number
  md5: string
  code: number
  expi: number
  type: string
  gain: number
  peak: number
  fee: number
  uf: null
  payed: number
  flag: number
  canExtend: boolean
  freeTrialInfo: null
  level: string
  encodeType: string
  freeTrialPrivilege: FreeTrialPrivilege
  freeTimeTrialPrivilege: FreeTimeTrialPrivilege
  urlSource: number
  rightSource: number
  podcastCtrp: null
  effectTypes: null
  time: number
}

export interface FreeTimeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  type: number
  remainTime: number
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: null
  cannotListenReason: null
}
