import styled from 'styled-components'
export const Wrapper = styled.div`
  padding: 20px;
  padding-bottom: 0px;
  display: flex;
  overflow: hidden;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    line-height: 25px;
    .name {
      font-size: 12px;
    }
    .desc {
      font-size: 12px;
      color: #666;
      display: inline-block;
      width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
`
