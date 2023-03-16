import styled from 'styled-components'

interface IProps {
  bgUrl: string
}

export const BannderWrapper = styled.div<IProps>`
  background: url(${(props) => props.bgUrl + '?imageView&blur=40x20'})
    center/6000px no-repeat;
  .content {
    position: relative;
    width: 980px;
    height: 285px;
    margin: 0 auto;
    display: flex;
    img {
      height: 285px;
    }
  }
`
export const BannderLeft = styled.div`
  width: 730px;
`
export const BannderRight = styled.div`
  flex: 1;
  width: 154px;
  overflow: hidden;
  .img {
    height: 285px;
  }
`
export const BannderControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    cursor: pointer;
    width: 37px;
    height: 63px;
    transform: translateY(-50%);
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -60px;
    background-position: 0 300px;
  }
  .right {
    right: -60px;
    background-position: 0 -508px;
  }
`
