import {
  createCardElement,
  deal,
  generateDeck,
  shuffle,
  sortDescending
} from '/lib/cards.js'

const deck = shuffle(generateDeck())
const main = document.querySelector('main')

for (let i = 0; i < 8; i++) {
  const hand = sortDescending(deal(deck, 5))
  const handElement = document.createElement('div')
  handElement.classList.add('hand')
  for (const card of hand) {
    handElement.appendChild(createCardElement(card))
  }
  main.appendChild(handElement)
}
