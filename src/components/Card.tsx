import Rank, { rankString } from 'data/rank'
import Suit, { isBlack, isRed, suitEntity } from 'data/suit'
import styled, { css } from 'styled-components'

export interface Props {
  rank: Rank
  suit: Suit
}

const Container = styled.div`
  align-items: center;
  background-color: var(--white);
  border-radius: var(--tiny);
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  height: 5rem;
  justify-content: center;
  line-height: 1;
  width: 4rem;

  ${(props) =>
    props.$black &&
    css`
      color: var(--black);
    `}

  ${(props) =>
    props.$red &&
    css`
      color: var(--red);
    `}
`

export default function Card({ rank, suit }: Props) {
  return (
    <Container $black={isBlack(suit)} $red={isRed(suit)}>
      <span>{rankString(rank)}</span>
      <span dangerouslySetInnerHTML={{ __html: suitEntity(suit) }} />
    </Container>
  )
}
