import { ITracks } from '@/pages/discover/pages/recommend/store/type'

export interface ISongDeatil {
  songs: Song[]
  privileges: Privilege[]
  code: number
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: null
  freeTrialPrivilege: FreeTrialPrivilege
  chargeInfoList: ChargeInfoList[]
}

export interface ChargeInfoList {
  rate: number
  chargeUrl: null
  chargeMessage: null
  chargeType: number
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: null
}

export interface Song {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: any[]
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  crbt: null
  cf: string
  al: Al
  dt: number
  h: H
  m: H
  l: H
  sq: H
  hr: null
  a: null
  cd: string
  no: number
  rtUrl: null
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData: null
  tagPicList: null
  resourceState: boolean
  version: number
  songJumpInfo: null
  entertainmentTags: null
  awardTags: null
  single: number
  noCopyrightRcmd: null
  rtype: number
  rurl: null
  mst: number
  cp: number
  mv: number
  publishTime: number
}

export interface Al {
  id: number
  name: string
  picUrl: string
  tns: any[]
  pic_str: string
  pic: number
}

export interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface ILyric {
  sgc: boolean
  sfy: boolean
  qfy: boolean
  lrc: Klyric
  klyric: Klyric
  tlyric: Klyric
  romalrc: Klyric
  code: number
}

export interface Klyric {
  version: number
  lyric: string
}

export interface IPlayerState {
  currentSong: ISongDeatil & any
  lyrics: {
    time: number
    text: string
  }[]
  lyricIndex: number
  playSongList: ITracks[]
  playSongIndex: number
  playMode: number
  showLyric: boolean
}

export type changeType = 'pre' | 'next'
