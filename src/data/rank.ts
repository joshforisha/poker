export enum Rank {
  Ace = 'ACE',
  King = 'KING',
  Queen = 'QUEEN',
  Jack = 'JACK',
  Ten = 'TEN',
  Nine = 'NINE',
  Eight = 'EIGHT',
  Seven = 'SEVEN',
  Six = 'SIX',
  Five = 'FIVE',
  Four = 'FOUR',
  Three = 'THREE',
  Two = 'TWO'
}

export function rankString(rank: Rank): string {
  switch (rank) {
    case Rank.Ace:
      return 'A'
    case Rank.King:
      return 'K'
    case Rank.Queen:
      return 'Q'
    case Rank.Jack:
      return 'J'
    case Rank.Ten:
      return '10'
    case Rank.Nine:
      return '9'
    case Rank.Eight:
      return '8'
    case Rank.Seven:
      return '7'
    case Rank.Six:
      return '6'
    case Rank.Five:
      return '5'
    case Rank.Four:
      return '4'
    case Rank.Three:
      return '3'
    case Rank.Two:
      return '2'
  }
}
