export interface ISong {
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
  cp: number
  rtype: number
  rurl: null
  mst: number
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
