'use client'
import styled from 'styled-components'

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  font-size: 0.938rem;
  padding: 1rem 0;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
`

export default Paragraph
