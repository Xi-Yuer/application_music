export interface Banner {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
}
export interface IBanner {
  banners: Banner[]
  code: number
}

export interface IInitialState {
  banners: Banner[]
  hotRecommend: Result[]
  newAlbum: Album[]
  upRanking: Playlist | null
  newRanking: Playlist | null
  originRanking: Playlist | null
}

export interface IHotRecommend {
  hasTaste: boolean
  code: number
  category: number
  result: Result[]
}

export interface Result {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export interface INewAlbum {
  code: number
  albums: Album[]
}

export interface Album {
  name: string
  id: number
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company: string
  briefDesc: string
  artist: Artist
  songs: null
  alias: any[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Artist[]
  paid: boolean
  onSale: boolean
  picId_str: string
}

export interface Artist {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: string[]
  trans: string
  musicSize: number
  topicPerson: number
  picId_str?: string
  transNames?: string[]
  img1v1Id_str: string
}

export interface IRanking {
  code: number
  relatedVideos: null
  playlist: Playlist
  urls: null
  privileges: any
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
  subscribers: any[]
  subscribed: boolean
  creator: any
  tracks: ITracks[]
  videoIds: null
  videos: null
  trackIds: any[]
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

interface ITracks {
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
  h: H | null
  m: H | null
  l: H | null
  sq: H | null
  hr: H | null
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
  rtype: number
  rurl: null
  mst: number
  cp: number
  mv: number
  publishTime: number
  tns?: string[]
}

export interface Al {
  id: number
  name: string
  picUrl: string
  tns: any[]
  pic_str?: string
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
