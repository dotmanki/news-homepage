'use client'

import styled from 'styled-components'

const Display = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;

  @media (min-width: 768px) {
    grid-column: span 6 / span 6;
    grid-row: span 2 / span 2;
    font-size: 3rem;
  }
`

export default Display
