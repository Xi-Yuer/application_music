import styled from 'styled-components'
export const Wrapper = styled.div`
width: 110px;
.top {
  height: 100px;
  position:relative;
  .cover {
    position:absolute;
    display: inline;
    width: 110px;
    height: 100px;
    background:url('https://s2.music.126.net/style/web2/img/coverall.png?8e0e86ee96b143417d07dc274030d4ec');
    background-position: -800px 636px;
  }
}
.name,.artist {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  line-height:18px;
}
.artist {
  font-size:12px;
  color:#666;
}
`
