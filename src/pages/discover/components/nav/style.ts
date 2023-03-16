import styled from 'styled-components'

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: #c20c0c;
  a {
    font-size: 12px;
    display: inline-block;
    margin: 0 25px;
    padding: 5px 15px;
    color: white;
    border-radius: 20px;
    &:hover {
      background-color: #9b0909;
    }
  }
  .active {
    background-color: #9b0909;
  }
`
