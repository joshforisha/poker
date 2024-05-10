export enum Suit {
  Spades = 'SPADES',
  Hearts = 'HEARTS',
  Diamonds = 'DIAMONDS',
  Clubs = 'CLUBS'
}

export function isBlack(suit: Suit): boolean {
  return suit === Suit.Spades || suit === Suit.Clubs
}

export function isRed(suit: Suit): boolean {
  return suit === Suit.Hearts || suit === Suit.Diamonds
}

export function suitEntity(suit: Suit): string {
  switch (suit) {
    case Suit.Clubs:
      return '&clubs;'
    case Suit.Diamonds:
      return '&diams;'
    case Suit.Hearts:
      return '&hearts;'
    case Suit.Spades:
      return '&spades;'
  }
}
