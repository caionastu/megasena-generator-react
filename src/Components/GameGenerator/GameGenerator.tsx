import React, { useState } from 'react'
import Button from '../Button'
import GameList, { GameModel } from '../GameList'
import {
  Container,
  FormButtons,
  Form,
  FormContent
} from './GameGeneratorStyles'

const GameGenerator: React.FC = () => {
  const [gamesAmount, setGameAmount] = useState(1)
  const [numbersPerGame, setNumbersPerGame] = useState(6)

  const [games, setGames] = useState<GameModel[]>([])

  function generate() {
    const randomGames = generateGames(gamesAmount, numbersPerGame)
    setGames(randomGames)
  }

  function clear() {
    setGames([])
  }

  function onEnterKey(key: String, callback: Function): void {
    if (key !== 'Enter') {
      return
    }

    callback()
  }

  function onGenerateAgain(id: number): void {
    const game = games.find((element) => element.id === id)
    if (game === undefined) {
      return
    }

    game.numbers = generateNumbers(numbersPerGame)
    setGames([...games])
  }

  function onDelete(id: number): void {
    const gameList = games.filter((element) => element.id !== id)
    setGames([...gameList])
  }

  return (
    <Container>
      <Form>
        <FormContent>
          <div>
            <label htmlFor="">Jogos</label>
            <input
              type="number"
              min={1}
              max={10}
              value={gamesAmount}
              onKeyDown={(e) => onEnterKey(e.key, generate)}
              onChange={(e) => setGameAmount(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="">Números</label>
            <input
              type="number"
              min={6}
              max={15}
              value={numbersPerGame}
              onKeyDown={(e) => onEnterKey(e.key, generate)}
              onChange={(e) => setNumbersPerGame(parseFloat(e.target.value))}
            />
          </div>
        </FormContent>
        <FormButtons>
          <Button
            width="80px"
            text="Generate"
            onClick={() => generate()}
          ></Button>
          <Button width="80px" text="Clear" onClick={() => clear()}></Button>
        </FormButtons>
      </Form>
      <GameList
        games={games}
        onGenerateAgain={onGenerateAgain}
        onDelete={onDelete}
      ></GameList>
    </Container>
  )
}

export default GameGenerator

function generateGames(
  gamesAmount: number,
  numbersPerGame: number
): GameModel[] {
  if (gamesAmount <= 0) {
    alert('Games amount should not be 0 or less than 0.')
    return []
  }

  const games: GameModel[] = []
  for (let i = 0; i < gamesAmount; i++) {
    const numbers = generateNumbers(numbersPerGame)
    if (numbers.length === 0) return []

    const game: GameModel = {
      id: i + 1,
      numbers: numbers
    }

    games.push(game)
  }

  return games
}

function generateNumbers(numberAmount: number): number[] {
  if (numberAmount < 6 || numberAmount > 15) {
    alert('Games amount should not be less than 6 or higher than 15.')
    return []
  }

  const numbers: number[] = []

  do {
    const number = getRandonNumber(1, 60)
    if (!numbers.includes(number)) {
      numbers.push(number)
    }
  } while (numbers.length < numberAmount)

  return numbers
}

function getRandonNumber(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
