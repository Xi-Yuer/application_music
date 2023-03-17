import styled from 'styled-components'
export const TitleWrapper = styled.div`
  border-bottom: 2px solid #c10d0c;
  display: flex;
  height: 33px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 25px;
  .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      font-weight: normal;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .keywords {
      display: flex;
      align-items: center;
      margin: 7px 0 0 7px;
      .item {
        color: #666;
        padding: 0 13px;
        cursor: pointer;
        border-right: 1px solid #cfd0db;
        &:last-child {
          border: none;
        }
        &:hover {
          text-decoration: underline;
        }
        .text {
          font-size: 12px;
        }
      }
    }
  }
  .right {
    .more {
      display: flex;
      align-items: center;
      color: #666;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
