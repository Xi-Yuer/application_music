import styled, { css } from 'styled-components'
const Elipse = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

interface IProps {
  hasCurrent: boolean
}

export const Wrapper = styled.div<IProps>`
  display: flex;
  width: 100%;
  height: 62px;
  padding: 10px 20px;
  background-color: ${(props) => (props.hasCurrent ? '#e6e6e6' : '#f9f9f9')};
  &:hover {
    background-color: #f4f2f2;
    cursor: pointer;
  }
  .right {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    ${Elipse}
    span {
      font-size: 12px;
      line-height: 1.8;
    }
    .updateFrequency {
      color: #999;
    }
  }
`
