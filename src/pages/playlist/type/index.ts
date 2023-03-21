export interface IPlayList {
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
  maxBrLevel: MaxBrLevel
  playMaxBrLevel: MaxBrLevel
  downloadMaxBrLevel: MaxBrLevel
  plLevel: LLevel
  dlLevel: DLLevel
  flLevel: LLevel
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

export enum DLLevel {
  Exhigh = 'exhigh',
  None = 'none'
}

export enum MaxBrLevel {
  Exhigh = 'exhigh',
  Lossless = 'lossless'
}

export enum LLevel {
  Exhigh = 'exhigh',
  Standard = 'standard'
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
  l: H | null
  sq: H | null
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
  name: AlName
  picUrl: string
  tns: any[]
  pic: number
  pic_str?: string
}

export enum AlName {
  PerQualcheDollaroInPiùExpandedEdition = 'Per qualche dollaro in più [Expanded Edition]',
  PerUnPugnoDiDollari = 'Per un Pugno di Dollari',
  黄金三镖客电影原声带修复版 = '黄金三镖客 (电影原声带) (修复版)'
}

export interface Ar {
  id: number
  name: ArName
  tns: any[]
  alias: any[]
}

export enum ArName {
  EddaDellOrso = "Edda Dell'Orso",
  EnnioMorricone = 'Ennio Morricone'
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface IDeatil {
  code: number
  relatedVideos: null
  playlist: Playlist
}

export interface Playlist {
  id: number
  name: string
  coverImgId: number
  coverImgUrl: string
  coverImgId_str: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: string[]
  updateFrequency: null
  backgroundCoverId: number
  backgroundCoverUrl: null
  titleImage: number
  titleImageUrl: null
  englishTitle: null
  officialPlaylistType: null
  copied: boolean
  relateResType: null
  subscribers: Creator[]
  subscribed: boolean
  creator: Creator
  tracks: Track[]
  videoIds: null
  videos: null
  trackIds: TrackID[]
  bannedTrackIds: null
  mvResourceInfos: null
  shareCount: number
  commentCount: number
  remixVideo: null
  sharedUsers: null
  historySharedUsers: null
  gradeStatus: string
  score: null
  algTags: null
}
export interface Creator {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: string[] | null
  experts: null
  djStatus: number
  vipType: number
  remarkName: null
  authenticationTypes: number
  avatarDetail: AvatarDetail | null
  anchor: boolean
  avatarImgIdStr: string
  backgroundImgIdStr: string
  avatarImgId_str: string
}

export interface AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}

export interface TrackID {
  id: number
  v: number
  t: number
  at: number
  alg: null
  uid: number
  rcmdReason: string
  sc: null
  f: null
  sr: null
}

export interface Track {
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
  l: H | null
  sq: H | null
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
  single: number
  noCopyrightRcmd: null
  mst: number
  cp: number
  mv: number
  rtype: number
  rurl: null
  publishTime: number
}

export interface Al {
  id: number
  name: AlName
  picUrl: string
  tns: any[]
  pic: number
  pic_str?: string
}
