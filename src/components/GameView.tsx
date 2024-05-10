import { Game } from 'data/game'

interface Props {
  game: Game
}

export default function GameView({ game }: Props) {
  return <h1>Game View</h1>
}
