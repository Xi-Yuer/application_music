import { Song } from '@/pages/playlist/type'

export interface IRankingList {
  code: number
  list: List[]
  artistToplist: ArtistToplist
}

export interface ArtistToplist {
  coverUrl: string
  name: string
  upateFrequency: string
  position: number
  updateFrequency: string
}

export interface List {
  subscribers: any[]
  subscribed: null
  creator: null
  artists: null
  tracks: null
  updateFrequency: string
  backgroundCoverId: number
  backgroundCoverUrl: null
  titleImage: number
  titleImageUrl: null
  englishTitle: null
  opRecommend: boolean
  recommendInfo: null
  socialPlaylistCover: null
  adType: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  userId: number
  createTime: number
  highQuality: boolean
  specialType: number
  updateTime: number
  newImported: boolean
  anonimous: boolean
  coverImgId: number
  coverImgUrl: string
  trackUpdateTime: number
  trackCount: number
  commentThreadId: string
  totalDuration: number
  privacy: number
  playCount: number
  description: null | string
  ordered: boolean
  tags: string[]
  status: number
  name: string
  id: number
  coverImgId_str: string
  ToplistType?: string
}

export interface IRankingDetail {
  code: number
  relatedVideos: null
  playlist: Playlist
  urls: null
  privileges: Privilege[]
  sharedPrivilege: null
  resEntrance: null
  fromUsers: null
  fromUserCount: number
  songFromUsers: null
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
  tags: any[]
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
  tracks: Song[]
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
  ToplistType: string
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
  expertTags: null
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
  lr?: number
  ratio: number
}

export interface Track {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: string[]
  pop: number
  st: number
  rt: null | string
  fee: number
  v: number
  crbt: null
  cf: string
  al: Al
  dt: number
  h: L | null
  m: L | null
  l: L
  sq: L | null
  hr: L | null
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
  originSongSimpleData: OriginSongSimpleData | null
  tagPicList: null
  resourceState: boolean
  version: number
  songJumpInfo: null
  entertainmentTags: null
  single: number
  noCopyrightRcmd: null
  mst: number
  rtype: number
  rurl: null
  cp: number
  mv: number
  publishTime: number
  tns?: string[]
}

export interface Al {
  id: number
  name: string
  picUrl: string
  tns: string[]
  pic_str?: string
  pic: number
}

export interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface OriginSongSimpleData {
  songId: number
  name: string
  artists: AlbumMeta[]
  albumMeta: AlbumMeta
}

export interface AlbumMeta {
  id: number
  name: string
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  realPayed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  pc: null
  toast: boolean
  flag: number
  paidBigBang: boolean
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
  Lossless = 'lossless',
  None = 'none'
}

export enum MaxBrLevel {
  Exhigh = 'exhigh',
  Hires = 'hires',
  Lossless = 'lossless'
}

export enum LLevel {
  Exhigh = 'exhigh',
  None = 'none',
  Standard = 'standard'
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: null
}
