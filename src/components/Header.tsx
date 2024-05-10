import styled from 'styled-components'

const Container = styled.header`
  align-items: center;
  background-color: var(--gray-darker);
  display: flex;
  height: var(--large);
  justify-content: space-between;
  padding: var(--small);
  position: sticky;
  top: 0;
`

const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
`

interface Props {
  hasGame: boolean
  onNewGame: () => void
}

export default function Header({ hasGame, onNewGame }: Props) {
  return (
    <Container>
      <Title>Poker</Title>
      {hasGame && <button onClick={onNewGame}>New Game</button>}
    </Container>
  )
}
