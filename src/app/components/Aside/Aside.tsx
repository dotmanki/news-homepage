'use client'
import styled from 'styled-components'

const Aside = styled.aside`
  padding: 1.5rem;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  margin-bottom: 3rem;

  & h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.softOrange};
    margin-bottom: 1rem;
  }

  & article:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`

export default Aside
