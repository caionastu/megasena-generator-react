import React from 'react'
import { Container, ImageLogo, TextLogo } from './LogoStyles'

const Logo: React.FC = () => {
  return (
    <Container>
      <ImageLogo></ImageLogo>
      <TextLogo>MEGA-SENA</TextLogo>
    </Container>
  )
}

export default Logo
