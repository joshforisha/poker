import { Card } from 'data/card'

export default interface Player {
  cash: number
  hand: Card[]
  name: string
}

export function generateName(): string {
  return `Player${Math.floor(Math.random() * 89 + 10)}`
}

export function generatePlayer({ cash, name }: Partial<Player> = {}): Player {
  return {
    cash: cash ?? 0,
    hand: [],
    name: name ?? generateName()
  }
}

export function generatePlayers(num: number): Player[] {
  const players = []
  for (let i = 0; i < num; i++) {
    players.push(generatePlayer())
  }
  return players
}
