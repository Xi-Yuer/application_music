import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 980px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px 1px 1px;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  border-right: 1px solid #d3d3d3;
  background-color: #f9f9f9;
  .title {
    padding: 0 20px;
    display: inline-block;
    line-height: 50px;
    font-size: 14px;
    font-weight: bold;
  }
`
export const RightWrapper = styled.div`
  padding: 40px;
  width: 740px;
  background-color: white;
`
