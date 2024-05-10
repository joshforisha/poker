import { Game } from 'data/game'

interface Props {
  setGame: (game: Game) => void
}

export default function NewGameForm({ setGame }: Props) {
  return <h2>New Game Form</h2>
}
