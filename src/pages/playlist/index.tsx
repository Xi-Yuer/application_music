import LazyLoadImg from '@/components/lazy-load-img'
import LikeOther from '@/components/like-other'
import OperationBtns from '@/components/operation-btns'
import SongList from '@/components/song-list'
import Subscribers from '@/components/subscribers'
import { useAppDispatch } from '@/store'
import { formatDate, formatImg } from '@/utils/format'
import { Pagination } from 'antd'
import React, { FC, memo, ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  changePlaySongListAction,
  fetchCurrentSongAction
} from '../player/store'
import { fetchPlayListDetail, fetchPlayListSongs } from './service'
import { Wrapper, WrapperLeft, WrapperRight } from './style'
import { IDeatil, IPlayList, Playlist, Song } from './type'

interface IProps {
  children?: ReactNode
}

const PlayList: FC<IProps> = memo(() => {
  const { id = '' } = useParams<{ id: string }>()
  const [limit] = useState(10)
  const dispatch = useAppDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [playListDeatil, setPlayListDeatil] = useState<Playlist>()
  const [playListSongs, setPlayListSongs] = useState<Song[]>([])
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    Promise.all([
      fetchPlayListDetail<IDeatil>(id),
      fetchPlayListSongs<IPlayList>(id, limit, (currentPage - 1) * 10)
    ]).then(([detail, song]) => {
      setPlayListDeatil(detail.playlist)
      setPlayListSongs(song.songs)
    })
  }, [id, limit, currentPage])

  const handlePlayBtnClick = () => {
    if (playListSongs.length > 1) {
      // 加入播放队列
      dispatch(changePlaySongListAction(playListSongs))
      // 播放第一首歌曲
      dispatch(fetchCurrentSongAction(playListSongs[0].id))
    }
  }

  return (
    <Wrapper>
      <WrapperLeft showMore={showMore}>
        <div className="top">
          <div className="left">
            <LazyLoadImg
              src={formatImg(playListDeatil?.coverImgUrl, 208, 208)}
              alt=""
            />
          </div>
          <div className="right">
            <div className="title">{playListDeatil?.name}</div>
            <div className="creator">
              <div className="creator-avatar">
                <LazyLoadImg
                  src={formatImg(playListDeatil?.creator.avatarUrl, 35, 35)}
                  alt=""
                />
              </div>
              <div className="creator-name">
                {playListDeatil?.creator.nickname}
              </div>
              <div className="creator-time">
                {formatDate(playListDeatil?.createTime || 0, 'YYYY-MM-DD')}创建
              </div>
            </div>
            <div className="operation">
              <OperationBtns
                onPlayBtnClick={handlePlayBtnClick}
                data={{
                  subcribe: playListDeatil?.subscribedCount,
                  shared: playListDeatil?.shareCount,
                  commend: playListDeatil?.commentCount
                }}
              />
            </div>
            <div className="tags">
              <span>标签：</span>
              {playListDeatil?.tags.map((item) => {
                return (
                  <span key={item} className="tag">
                    {item}
                  </span>
                )
              })}
            </div>
            <div
              className="desc"
              dangerouslySetInnerHTML={{
                __html: playListDeatil?.description.replace(/\n/g, '<br>') || ''
              }}
            ></div>
            <span className="expand" onClick={() => setShowMore(!showMore)}>
              {!showMore ? '展开' : '收起'}
            </span>
          </div>
        </div>
        <div className="list">
          <SongList
            list={playListSongs}
            playCount={playListDeatil?.playCount}
            songsCount={playListDeatil?.trackCount}
          />
        </div>
        <div className="footer">
          <Pagination
            current={currentPage}
            total={playListDeatil?.trackCount}
            size="small"
            showSizeChanger={false}
            onChange={(e) => setCurrentPage(e)}
            pageSize={10}
          />
        </div>
      </WrapperLeft>
      <WrapperRight>
        <Subscribers subscribtors={playListDeatil?.subscribers} />
        <LikeOther likeOtherID={playListDeatil?.id} />
      </WrapperRight>
    </Wrapper>
  )
})

export default PlayList
