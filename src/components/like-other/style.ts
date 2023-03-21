import styled from 'styled-components'

export const Wrapper = styled.div`
  .item {
    width: 100%;
    display: flex;
    padding: 10px 0;
    .left {
      margin-right: 10px;
      width: 50px;
      height: 50px;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .name {
        width: 165px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .nickname,
      span {
        font-size: 12px;
        color: #666;
      }
      .nickname,
      .name {
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`
