export interface ICatList {
  code: number
  all: All
  sub: All[]
  categories: { [key: string]: string }
}

export interface All {
  name: string
  resourceCount: number
  imgId: number
  imgUrl: null
  type: number
  category: number
  resourceType: number
  hot: boolean
  activity: boolean
}

export interface IHightQuality {
  playlists: Playlist[]
  code: number
  more: boolean
  lasttime: number
  total: number
}

export interface Playlist {
  name: string
  id: number
  trackNumberUpdateTime: number
  status: number
  userId: number
  createTime: number
  updateTime: number
  subscribedCount: number
  trackCount: number
  cloudTrackCount: number
  coverImgUrl: string
  coverImgId: number
  description: string
  tags: string[]
  playCount: number
  trackUpdateTime: number
  specialType: number
  totalDuration: number
  creator: Creator
  tracks: null
  subscribers: Creator[]
  subscribed: boolean
  commentThreadId: string
  newImported: boolean
  adType: number
  highQuality: boolean
  privacy: number
  ordered: boolean
  anonimous: boolean
  coverStatus: number
  recommendInfo: null
  socialPlaylistCover: null
  recommendText: null
  shareCount: number
  coverImgId_str?: string
  commentCount: number
  copywriter: string
  tag: string
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
  experts: { [key: string]: string } | null
  djStatus: number
  vipType: number
  remarkName: null
  authenticationTypes: number
  avatarDetail: AvatarDetail | null
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str?: string
}

export interface AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}
