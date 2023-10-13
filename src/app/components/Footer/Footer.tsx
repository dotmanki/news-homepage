'use client'
import styled from 'styled-components'

const Footer = styled.footer`
  @media (min-width: 768px) {
    grid-column: span 12 / span 12;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1.5rem;
  }
`

export default Footer
