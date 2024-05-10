import { Deck } from 'data/deck'
import { Player } from 'data/player'

export interface Game {
  ante: number
  bigBet: number
  deck: Deck
  name: string
  players: Player[]
  pot: number
  smallBet: number
}
