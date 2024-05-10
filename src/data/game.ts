import { Player, generatePlayers } from 'data/player'

export interface GameParameters {
  bigBet: number
  name: string
  numPlayers: number
  smallBet: number
}

export interface Game {
  ante: number
  name: string
  players: Player[]
}
