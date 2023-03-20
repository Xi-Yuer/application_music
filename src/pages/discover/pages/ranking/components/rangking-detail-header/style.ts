import styled from 'styled-components'

export const Wrappper = styled.div`
  display: flex;
  padding-bottom: 50px;
  .left {
    img {
      border: 1px solid #cccccc;
      padding: 3px;
    }
  }
  .right {
    display: flex;
    justify-content: center;
    margin-left: 30px;
    flex-direction: column;
    .name {
      line-height: 24px;
      font-size: 20px;
    }
    .time {
      line-height: 35px;
      height: 60px;
      span {
        font-size: 12px;
        color: #666;
        margin-right: 5px;
      }
    }
    .info {
      height: 50px;
      .btn {
        padding: 5px 10px;
        border: 1px solid #c4c4c4;
        margin-right: 10px;
        display: inline-block;
        cursor: pointer;
        background-color: #fafafa;
        border-radius: 5px;
        color: #333;
        font-size: 12px;
        svg {
          margin-right: 5px;
        }
      }
    }
  }
`
