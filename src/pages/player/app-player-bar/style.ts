import styled from 'styled-components'

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  background: url('https://s2.music.126.net/style/web2/img/frame/playbar.png?790346da2d2a5598db93590f7a5c827e');
  background-repeat: repeat;
  background-position: 0 0;
  .content {
    width: 980px;
    height: 47px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  }
`

export const BarControl = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  span {
    color: white;
    svg {
      font-size: 25px;
      cursor: pointer;
    }
  }
`
export const BarPlayInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 30px;
  color: white;
  .info {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .song {
      margin-top: 15px;
      display: flex;
      align-items: center;
    }
    .song-name,
    .song-singer {
      font-size: 12px;
    }
    .song-name {
      color: #e8e8e8;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
    .song-singer {
      margin-left: 15px;
      color: #9b9b9b;
    }
    .progress {
      flex: 1;
      width: 466px;
      display: flex;
      margin-top: -5px;
      justify-content: space-between;
      align-items: center;
      .ant-slider {
        width: 100%;
      }
      .ant-slider-rail {
        background-color: #191919;
      }
      .ant-slider-track {
        background-color: #c70c0c;
      }
      .ant-slider-handle::after {
        box-shadow: none;
        background-color: red;
        width: 6px;
        height: 6px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .ant-slider-handle::before {
        background-color: white !important;
        border-radius: 50%;
      }
      .time {
        display: flex;
        justify-content: space-between;
        .current,
        .duration {
          font-size: 12px;
          width: 30px;
          text-align: center;
        }
        .duration,
        div {
          color: #797979;
        }
        div {
          font-size: 12px;
        }
        .current {
          color: #a1a1a1;
          text-shadow: 0 1px 0 #121212;
        }
      }
    }
  }
`
export const BarOperator = styled.div`
  width: 87px +126px;
  svg {
    font-size: 18px;
    color: white;
    margin: 8px;
    cursor: pointer;
  }
`
