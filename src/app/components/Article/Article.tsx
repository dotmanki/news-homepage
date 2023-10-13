'use client'
import styled from 'styled-components'

const Article = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrayishBlue};
  padding: 1rem 0;

  & h4 {
    color: ${({ theme }) => theme.colors.offWhite};
    font-size: 1.25rem;
  }

  & p {
    padding: 1rem 0;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grayishBlue};
  }
`

export default Article
