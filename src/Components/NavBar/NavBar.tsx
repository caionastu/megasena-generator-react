import React from 'react'
import LastGame from '../LastGame'
import Logo from '../Logo'
import { Container } from './NavBarStyles'

const NavBar: React.FC = () => {
  return (
    <Container>
      <Logo></Logo>
      <LastGame></LastGame>
    </Container>
  )
}

export default NavBar
