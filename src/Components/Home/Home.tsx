import React from 'react'
import GameGenerator from '../GameGenerator'
import NavBar from '../NavBar'
import { Container, Content } from './HomeStyles'

const Home: React.FC = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <Content>
        <GameGenerator></GameGenerator>
      </Content>
    </Container>
  )
}

export default Home
