import styled from 'styled-components'

export const Wrappper = styled.div`
  display: flex;
  padding-bottom: 50px;
  .left {
    width: 158px;
    height: 158px;
    img {
      width: 158px;
      height: 158px;
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
  }
`
