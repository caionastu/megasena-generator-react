import styled from 'styled-components'

interface Props {
  width?: string
}

export const ButtonStyled = styled.button<Props>`
  background-color: #f3f5f7;
  border: 1px solid #f3f5f7;
  border-radius: 4px;
  color: #3c4043;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 30px;
  line-height: 27px;
  min-width: 54px;
  width: ${(props) => props.width};
  padding: ${(props) => (props.width ? '0' : '0 16px')};
  text-align: center;
  user-select: none;

  &:hover {
    border-color: #dadce0;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
    color: #202124;
  }
`
