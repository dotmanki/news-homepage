'use client'
import styled from 'styled-components'

const Aside = styled.aside`
  padding: 1.5rem;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  margin-bottom: 3rem;

  & h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.softYellow};
    margin-bottom: 1rem;
  }

  & article:last-child {
    border-bottom: none;
  }
`

export default Aside
