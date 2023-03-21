import styled from 'styled-components'
export const Wrapper = styled.div`
  flex: 1;
  padding: 20px;
  width: 230px;
  &:last-child {
    margin-left: -12px;
  }
  &:nth-child(2) {
    margin-left: -7px;
  }
  .header {
    display: flex;
    .image {
      position: relative;
      overflow: hidden;
      width: 80px;
      .cover {
        height: 80px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('https://s2.music.126.net/style/web2/img/coverall.png?8e0e86ee96b143417d07dc274030d4ec');
        background-position: -145px -57px;
      }
    }
    .info {
      flex: 1;
      position: relative;
      margin: 6px 0 0 10px;
      .name {
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .btn {
        display: block;
        float: left;
        margin-top: 10px;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        text-indent: -9999px;
        cursor: pointer;
        background: url('https://s2.music.126.net/style/web2/img/index/index.png?80ce3ebe34f2cf0349d33951bb4b83cf')
          no-repeat 0 9999px;
      }
      .play {
        background-position: -267px -205px;
      }
      .favor {
        background-position: -300px -205px;
      }
    }
  }
  .list {
    margin-top: 30px;
    .item {
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      display: flex;
      height: 32px;
      width: 170px;
      cursor: pointer;
      .index {
        width: 20px;
        padding-right: 15px;
      }
      .name {
        margin-left: 10px;
        font-size: 12px;
        &:hover {
          text-decoration: underline;
        }
      }
      .icon {
        display: none;
      }
      &:hover {
        .icon {
          display: block;
        }
      }
    }
    .top {
      color: red;
    }
  }
`
