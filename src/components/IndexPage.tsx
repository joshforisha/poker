import styled from 'styled-components'
import { deal, generateDeck, shuffle, sortDescending } from 'data/deck'
import { useGameStore } from 'data/game-store'

const Section = styled.section`
  background-color: var(--${(props) => props.$color || 'black'});
  padding: var(--medium);
`

export function IndexPage() {
  const [game, dispatch] = useGameStore()

  const deck = shuffle(generateDeck())
  const cards = sortDescending(deal(deck, 5))

  return (
    <>
      <Section>
        <h1>Index</h1>
        <p>This is the index view.</p>
      </Section>
      <Section $color="gray-darker">
        <Hand>
          {cards.map((card, i) => (
            <Card key={i} rank={card.rank} suit={card.suit} />
          ))}
        </Hand>
      </Section>
    </>
  )
}
