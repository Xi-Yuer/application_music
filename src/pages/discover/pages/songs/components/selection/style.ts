import styled from 'styled-components'
export const Wrapper = styled.div`
  width: 700px;
  padding-bottom: 20px;
  .top {
    height: 37px;
    padding-left: 26px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: normal;
  }
  .cat {
    display: flex;
    width: 100%;
    .type {
      font-size: 12px;
      line-height: 60px;
      text-align: center;
      width: 71px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #e6e6e6;
    }
    .typegroup {
      flex: 1;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-left: 10px;
    }
    .type-item {
      flex-wrap: nowrap;
      span {
        font-size: 12px;
      }
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
      .line {
        margin: 0 10px;
        color: #d8d8d8;
      }
    }
  }
`
