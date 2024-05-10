import * as SevenCardStud from 'data/seven-card-stud'
import styled from 'styled-components'
import { Game } from 'data/game'
import { useState } from 'react'

const Form = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--medium);
  padding: var(--large) var(--medium);
`

enum GameType {
  SevenCardStud = 'SEVEN_CARD_STUD'
}

interface Props {
  setGame: (game: Game) => void
}

export default function NewGameForm({ setGame }: Props) {
  const [gameType, setGameType] = useState<GameType>()

  const okay = Boolean(gameType)

  function generateGame() {
    // Right now, only one game type
    setGame(SevenCardStud.generateGame())
  }

  function handleGameSelect(event) {
    setGameType(event.target.value)
  }

  return (
    <Form>
      <select onChange={handleGameSelect}>
        <option value="">Select a game type</option>
        <option value={GameType.SevenCardStud}>Seven Card Stud</option>
      </select>
      <button disabled={!okay} onClick={generateGame}>
        Play Game
      </button>
    </Form>
  )
}
