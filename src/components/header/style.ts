import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  width:100%;
  line-height:70px;
  background-color:#242424;

  border-bottom:5px solid #c20c0c;
  .content {
    display:flex;
    justify-content:center;
    align-items:center;
  }
  a {
    color:white;
    display:inline-block;
    padding:0 25px;
    color:#cccccc;
    transition:all 0.1s linear;
    &:hover {
      background-color:#000000;
      color:white;
    }
  }
  .active {
    position:relative;
    background-color:#000000;
    color:white;
    &::before{
      content:'';
      width: 0;
      height: 0;
      position:absolute;
      bottom: 0;
      left:50%;
      transform:translateX(-50%);
      border-left: transparent solid 7px;
      border-right: transparent solid 7px;
      border-bottom: #c20c0c solid 7px;
    }
  }
  .logo {
    width: 176px;
    height: 69px;
    background-position: 0 0;
    background: url('https://s2.music.126.net/style/web2/img/frame/topbar.png?9eda0620c135d640f4d5d356b589735e') no-repeat;
    cursor:pointer;
  }
`
