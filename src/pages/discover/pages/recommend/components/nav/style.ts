import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 10px;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 15px;
    .title {
      font-size: 12px;
      font-weight: bold;
    }
    .more {
      font-size: 12px;
      color: #666;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
`
