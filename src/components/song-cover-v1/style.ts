import styled from 'styled-components'

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
cursor:pointer;
.top {
  position:relative;
  img {
    width:140px;
    height:140px;
  }
  .cover {
    width:140px;
    height:140px;
    overflow:hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:url('https://s2.music.126.net/style/web2/img/coverall.png?8e0e86ee96b143417d07dc274030d4ec');
    background-position: 0 0;
  }
  .bot {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    color: #ccc;
    background:url('https://s2.music.126.net/style/web2/img/coverall.png?8e0e86ee96b143417d07dc274030d4ec');
    background-position: 0 -537px;
  }
  .voice {
    float: left;
    width: 14px;
    height: 11px;
    margin: 9px 5px 9px 10px;
    line-height: 1.4;
    background:url('https://s2.music.126.net/style/web2/img/iconall.png?62d4244742a38ac24c32e949bcf5d292');
    background-position: 0 -24px;
    z-index:10;
  }
  .play {
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background:url('https://s2.music.126.net/style/web2/img/iconall.png?62d4244742a38ac24c32e949bcf5d292')
  }
  .count {
    float: left;
    color:#ccc;
    margin: 7px 0 0 0;
    line-height: 1.4;
    font-size:12px;
  }
}
.name {
  line-height: 1.4;
  &:hover{
    text-decoration:underline;
  }
}
`
