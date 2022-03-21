import React, { useEffect, useState } from 'react'
import Game from '../Game'
import { Container, Title } from './LastGameStyles'

interface GameResult {
  numbers: number[]
  date: Date
}

const LastGame: React.FC = () => {
  const [lastGameResult, setLasteGameResult] = useState<GameResult>()

  useEffect(() => {
    fetchLastGame()
  }, [])

  function fetchLastGame(): void {
    const numbers = [1, 2, 3, 4, 5, 6]
    const gameDate = new Date()
    setLasteGameResult({ numbers: numbers, date: gameDate })
  }

  return (
    <Container>
      <Title>
        Last Result
        {lastGameResult && ` ` + lastGameResult.date.toLocaleDateString()}:
      </Title>
      {lastGameResult && <Game numbers={lastGameResult.numbers}></Game>}
    </Container>
  )
}

export default LastGame
