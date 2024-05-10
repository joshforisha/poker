import { Card } from 'data/card'
import { Rank, rankString } from 'data/rank'
import { Suit, suitEntity } from 'data/suit'

export type Deck = Card[]

const ranks = [
  Rank.Ace,
  Rank.King,
  Rank.Queen,
  Rank.Jack,
  Rank.Ten,
  Rank.Nine,
  Rank.Eight,
  Rank.Seven,
  Rank.Six,
  Rank.Five,
  Rank.Four,
  Rank.Three,
  Rank.Two
]

const suits = [Suit.Spades, Suit.Hearts, Suit.Diamonds, Suit.Clubs]

export function deal(deck: Deck, num: number): Card[] {
  return deck.splice(0, num)
}

export function draw(deck: Deck, num: number): [Card[], Deck] {
  return [deck.slice(0, num), deck.slice(num)]
}

export function generateDeck(): Deck {
  const deck = []
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ rank, suit })
    }
  }
  return deck
}

export function shuffle<T>(xs: T[]): T[] {
  const ys = [...xs]
  let i = xs.length - 1
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const y = ys[i]
    ys[i] = ys[j]
    ys[j] = y
  }
  return ys
}

export function sortDescending(cards: Card[]): Card[] {
  return cards.sort((a, b) => {
    const rA = ranks.indexOf(a.rank)
    const rB = ranks.indexOf(b.rank)
    if (rA < rB) return -1
    if (rB < rA) return 1
    const sA = suits.indexOf(a.suit)
    const sB = suits.indexOf(b.suit)
    if (sA < sB) return -1
    return 1
  })
}
