import {
  createCardElement,
  draw,
  generateDeck,
  shuffle,
  sortDescending
} from '/lib/cards.js'

let deck = shuffle(generateDeck())
const main = document.querySelector('main')

let hand = []
for (let i = 0; i < 6; i++) {
  ;[hand, deck] = draw(deck, 5)
  hand = sortDescending(hand)
  const handElement = document.createElement('div')
  handElement.classList.add('hand')
  for (const card of hand) {
    handElement.appendChild(createCardElement(card))
  }
  main.appendChild(handElement)
}
