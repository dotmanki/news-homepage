'use client'
import styled from 'styled-components'

const StyledMain = styled.main`
  margin-bottom: 3rem;
  padding: 1rem 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: span 8 / span 8;
    padding: 0;
    gap: 1.5rem;

    & .container {
      grid-column: span 6 / span 6;
      grid-row: span 2 / span 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`

const Main = ({ children }: { children: React.ReactNode }) => {
  return <StyledMain>{children}</StyledMain>
}

export default Main
