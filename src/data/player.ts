export default interface Player {
  cash: number
  name: string
}

export function generateName(): string {
  return `Name${Math.floor(Math.random() * 89 + 10)}`
}

export function generatePlayer({ cash, name }: Partial<Player>): Player {
  return {
    cash: cash ?? 0,
    name: name ?? generateName()
  }
}

export function generatePlayers(num: number): Player[] {
  const players = []
  for (let i = 0; i < numPlayers; i++) {
    players.push(generatePlayer())
  }
  return players
}
