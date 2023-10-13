'use client'
import styled from 'styled-components'

const FooterArticle = styled.article`
  position: relative;
  display: flex;
  padding: 1rem 0;
  gap: 1.5rem;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.grayishBlue};
  }

  & h4 {
    font-size: 1.1rem;
    font-weight: 800;
  }

  & p {
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    line-height: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-column: span 4 / span 4;
  }
`

export default FooterArticle
