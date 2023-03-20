import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  padding: 40px;
  padding-bottom: 60px;
  .header {
    border-bottom: 2px solid #c20c0c;
    padding-bottom: 5px;
    .left {
      display: flex;
      .category {
        font-size: 24px;
      }
      .selection {
        line-height: 31px;
        padding: 0px 15px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #c3c3c3;
        border-radius: 5px;
        margin-left: 15px;
        color: #0c73c2;
        .text {
          margin-right: 5px;
        }
      }
    }
  }
  .list {
    display: grid;
    grid-template-columns: repeat(5, 140px);
    grid-gap: 30px;
    justify-content: space-between;
    padding: 20px 0;
    line-height: 18px;
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
