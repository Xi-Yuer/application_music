import SongCoverV3 from '@/components/song-cover-v3'
import { useAppDispatch, useAppSelector } from '@/store'
import { UnorderedListOutlined } from '@ant-design/icons'
import { Popover, Pagination, PaginationProps } from 'antd'
import React, { FC, memo, ReactNode, useEffect, useState } from 'react'
import Selection from './components/selection'
import { fetchHightQuality, fetchPlayListCatList } from './store'
import { Wrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  const { currentCat, songList } = useAppSelector((state) => state.playlist)
  const [currentPage, setCurrentPage] = useState(1)
  const [updateTime, setUpdateTime] = useState<any>()

  useEffect(() => {
    dispatch(fetchPlayListCatList())
    dispatch(
      fetchHightQuality({ limit: 35, cat: currentCat, before: updateTime })
    )
  }, [currentCat, updateTime])

  useEffect(() => {
    setUpdateTime(null)
    setCurrentPage(1)
  }, [currentCat])

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page)
    setUpdateTime(songList?.playlists[songList.playlists.length - 1].updateTime)
  }
  return (
    <Wrapper>
      <div className="header">
        <div className="left">
          <span className="category">{currentCat}</span>
          <Popover
            placement="bottomLeft"
            trigger="click"
            content={<Selection />}
          >
            <div className="selection">
              <span className="text">选择分类</span>
              <UnorderedListOutlined />
            </div>
          </Popover>
        </div>
      </div>
      <div className="list">
        {songList?.playlists.map((item) => {
          return (
            <div key={item.id}>
              <SongCoverV3 data={item} />
            </div>
          )
        })}
      </div>
      <div className="footer">
        <Pagination
          current={currentPage}
          total={songList?.total}
          size="small"
          showSizeChanger={false}
          onChange={onChange}
          pageSize={35}
        />
      </div>
    </Wrapper>
  )
})

export default Songs
