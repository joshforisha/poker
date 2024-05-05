const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']

export function createCardElement({ rank, suit }) {
  const cardElement = document.createElement('div')
  cardElement.classList.add('card')
  if (suit === 'Spades' || suit === 'Clubs') {
    cardElement.classList.add('-black')
  }
  if (suit === 'Hearts' || suit === 'Diamonds') {
    cardElement.classList.add('-red')
  }
  const rankSpan = document.createElement('span')
  rankSpan.classList.add('rank')
  rankSpan.textContent = rank
  cardElement.appendChild(rankSpan)
  const suitSpan = document.createElement('span')
  suitSpan.classList.add('suit')
  suitSpan.innerHTML = suitEntity(suit)
  cardElement.appendChild(suitSpan)
  return cardElement
}

export function draw(cards, num) {
  return [cards.slice(0, num), cards.slice(num)]
}

export function generateDeck() {
  const deck = []
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ rank, suit })
    }
  }
  return deck
}

export function shuffle(xs) {
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

export function suitEntity(suit) {
  switch (suit) {
    case 'Clubs':
      return '&clubs;'
    case 'Diamonds':
      return '&diams;'
    case 'Hearts':
      return '&hearts;'
    case 'Spades':
      return '&spades;'
  }
}

export function sortDescending(cards) {
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
