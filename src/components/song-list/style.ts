import styled, { css } from 'styled-components'

const Elipse = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Wrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    padding: 5px 0;
    .left {
      .title {
        color: #333;
        font-size: 20px;
      }
      .count {
        color: #666;
        font-size: 12px;
        display: inline-block;
        margin-left: 25px;
      }
    }
    .right {
      .count,
      .num {
        font-size: 12px;
      }
      .count {
        display: inline-block;
        color: #666;
        margin-right: 10px;
      }
      .num {
        color: #ce0c0c;
        font-weight: bold;
      }
    }
  }
  .table {
    .table-header {
      border-bottom: 1px solid #cccccc;
    }
    .table-header,
    .table-list {
      display: flex;
      height: 38px;
      color: #666;
      line-height: 18px;
      align-items: center;
      background-color: #f8f8f8;
      div {
        border-left: 1px solid #e7e7e7;
        padding: 0 5px;
      }
      .line-througth {
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .index {
        width: 78px;
        text-align: center;
      }
      .title {
        width: 326px;
        display: flex;
        align-items: center;
        ${Elipse}
        span {
          margin-left: 15px;
          ${Elipse}
        }
      }
      .time {
        width: 91px;
        ${Elipse}
      }
      .singer {
        width: 174px;
        ${Elipse}
      }
    }
    .table-list {
      div {
        font-size: 12px;
        border: none;
      }
    }
  }
`
