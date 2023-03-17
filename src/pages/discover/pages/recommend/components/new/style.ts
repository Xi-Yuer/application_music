import styled from 'styled-components'
export const ContentWrapper = styled.div`
  position: relative;
  border: 1px solid #d3d3d3;
  height: 184px;
  width: 100%;
  margin: 20px 0 37px;
  box-sizing: border-box;
  padding: 30px 15px;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left,
  .right {
    width: 20px;
    cursor: pointer;
    &:hover {
      color: #c20c0c;
    }
  }
  .center {
    width: 645px;
    padding: 0 10px;
  }
`

export const CaroselItem = styled.div`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  overflow: hidden;
  margin-top: 25px;
`
