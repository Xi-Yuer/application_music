import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  align-items: center;
  .subscribers {
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(4, 40px);
    grid-gap: 20px;
    img {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
`
