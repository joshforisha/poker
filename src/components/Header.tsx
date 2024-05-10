import styled from 'styled-components'

const Container = styled.header`
  align-items: center;
  background-color: var(--gray-darkest);
  display: flex;
  height: var(--large);
  padding: 0 var(--medium);
`

interface Props {
  hasGame: boolean
  onNewGame: () => void
}

export default function Header({ hasGame, onNewGame }: Props) {
  return (
    <Container>
      <span>Poker</span>
      {hasGame && <button onClick={onNewGame}>New Game</button>}
    </Container>
  )
}
