'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    padding: 1rem;
  }

  @media (min-width: 768px) {
    body {
      padding: 3rem 9rem;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1.5rem;
    }
  }
`
