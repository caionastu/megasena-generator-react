import React from 'react'
import { ButtonStyled } from './ButtonStyles'

interface Props {
  text: string
  onClick(): void
  width?: string
}

const Button: React.FC<Props> = ({ text, onClick, width }) => {
  return (
    <ButtonStyled onClick={onClick} width={width}>
      {text}
    </ButtonStyled>
  )
}

export default Button
