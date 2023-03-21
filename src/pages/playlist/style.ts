import styled, { css } from 'styled-components'

const PaddingBottom = css`
  padding-bottom: 10px;
`

const Overhidden = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`

export const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  display: flex;
  background-color: white;
`

interface IProps {
  showMore: boolean
}
export const WrapperLeft = styled.div<IProps>`
  padding: 47px 30px 40px 39px;
  width: 709px;
  .top {
    display: flex;
    .left {
      width: 216px;
      height: 216px;
      border: 1px solid #d3d3d3;
      img {
        padding: 3px;
      }
    }
    .right {
      margin-left: 20px;
      .title {
        line-height: 24px;
        font-size: 20px;
        ${PaddingBottom}
      }
      .creator {
        display: flex;
        align-items: center;
        margin: 20px 0;
        .creator-name {
          margin: 0 10px;
          font-size: 12px;
          color: #0c73c2;
        }
        .creator-time {
          font-size: 12px;
          color: #999;
        }
      }
      .tags {
        color: #666;
        font-size: 12px;
        .tag {
          display: inline-block;
          padding: 3px 10px;
          border: 1px solid #999;
          border-radius: 20px;
          margin-right: 5px;
          color: #777;
          background-color: #f7f7f7;
        }
      }
      .desc {
        font-size: 12px;
        margin-top: 4px;
        line-height: 18px;
        color: #666;
        display: flex;
        overflow: hidden;
        height: ${(props) => (!props.showMore ? `${Overhidden}` : 'none')};
      }
      .expand {
        margin-top: 10px;
        display: inline-block;
        color: #0c73ce;
        cursor: pointer;
      }
    }
  }
  .footer {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const WrapperRight = styled.div`
  width: 207px;
  border-left: 1px solid #d3d3d3;
`
