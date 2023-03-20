import styled, { css } from 'styled-components'

export const Title = styled.div`
  padding: 0 20px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  h2 {
    color: #e2e2e2;
    font-weight: bold;
    flex: 1;
  }
  .song-name {
    color: #fff;
    font-size: 14px;
    width: 380px;
    text-align: center;
    font-weight: bold;
  }
`
export const Wrapper = styled.div`
  position: fixed;
  width: 986px;
  height: 300px;
  left: 50%;
  bottom: 45px;
  color: #ccc;
  transform: translateX(-50%);
  background-color: #202020;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 20px;
  .play-icon {
    position: absolute;
    left: 0px;
    color: red;
  }
`
const ScrollBar = css`
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 6px; /* Set the width of the scrollbar */
    border-radius: 4px; /* Set the border radius of the scrollbar */
  }

  /* Define the background color of the scrollbar track */
  ::-webkit-scrollbar-track {
    background-color: #131212;
  }

  /* Define the color of the scrollbar thumb */
  ::-webkit-scrollbar-thumb {
    background-color: #454444;
    border-radius: 4px; /* Set the border radius of the scrollbar thumb */
  }
`
const Elipse = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const LeftWrapper = styled.div`
  border-top: 1px solid #000000;
  position: absolute;
  overflow-y: scroll;
  bottom: 0;
  width: 565px;
  height: 260px;
  background-color: #242424;
  ${ScrollBar}
  .song-item {
    padding: 0 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    &:hover {
      background-color: #161616;
    }
  }
  .right {
    display: flex;
  }
  .name {
    font-size: 12px;
    width: 266px;
    ${Elipse}
  }
  .singer {
    width: 80px;
    color: #9b9b9b;
    font-size: 12px;
    ${Elipse}
  }
  .time {
    width: 45px;
    color: #666;
    margin-left: 15px;
    font-size: 12px;
    ${Elipse}
  }
`
export const RightWrapper = styled.div`
  scroll-behavior: smooth;
  transition: all 0.5s ease-in-out;
  border-top: 1px solid #000000;
  position: absolute;
  overflow-y: auto;
  right: 0;
  bottom: 0;
  width: 420px;
  height: 260px;
  background-color: #2d2a2a;
  ${ScrollBar}
  display:flex;
  flex-direction: column;
  align-items: center;
  .lyric-item {
    line-height: 32px;
    color: #989898;
    font-size: 12px;
    transition: all 0.5s ease-out;
  }
`
