import { Game } from 'data/game'
import { generateDeck, shuffle } from 'data/deck'
import { generatePlayers } from 'data/player'

export function generateGame(): Game {
  return {
    ante: 1,
    bigBet: 10,
    deck: shuffle(generateDeck()),
    name: 'Seven Card Stud',
    players: generatePlayers(6),
    pot: 0,
    smallBet: 5
  }
}
