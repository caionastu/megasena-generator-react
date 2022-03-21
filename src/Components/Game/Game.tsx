import React from 'react'
import { Container, Number } from './GameStyles'

interface Props {
  numbers: number[]
}

const sortCrescent = (a: number, b: number) => a - b

const Game: React.FC<Props> = ({ numbers }) => {
  return (
    <Container>
      {numbers.sort(sortCrescent).map((number) => (
        <Number key={number}>{number}</Number>
      ))}
    </Container>
  )
}

export default Game
