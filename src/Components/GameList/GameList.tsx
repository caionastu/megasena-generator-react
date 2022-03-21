import React from 'react'
import Button from '../Button'
import Game from '../Game'
import {
  Container,
  ContainerButtons,
  Item,
  ItemHeader,
  Title
} from './GameListStyles'

interface Props {
  games: GameModel[]
  onGenerateAgain(id: number): void
  onDelete(id: number): void
}

export interface GameModel {
  id: number
  numbers: number[]
}

const GameList: React.FC<Props> = ({ games, onGenerateAgain, onDelete }) => {
  return (
    <>
      {games.length > 0 && (
        <Container>
          {games.map((game, index) => (
            <Item key={game.id}>
              <ItemHeader>
                <Title>{index + 1}</Title>
                <ContainerButtons>
                  <Button
                    width="80px"
                    text="Generate"
                    onClick={() => onGenerateAgain(game.id)}
                  ></Button>
                  <Button
                    width="80px"
                    text="Delete"
                    onClick={() => onDelete(game.id)}
                  ></Button>
                </ContainerButtons>
              </ItemHeader>
              <Game key={game.id} numbers={game.numbers}></Game>
            </Item>
          ))}
        </Container>
      )}
    </>
  )
}

export default GameList
