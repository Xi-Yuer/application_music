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
}

export interface IHotRecommend {
  hasTaste: boolean;
  code: number;
  category: number;
  result: Result[];
}

export interface Result {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

export interface INewAlbum {
  code: number;
  albums: Album[];
}

export interface Album {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: Artist;
  songs: null;
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: Artist[];
  paid: boolean;
  onSale: boolean;
  picId_str: string;
}

export interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: string[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  picId_str?: string;
  transNames?: string[];
  img1v1Id_str: string;
}
