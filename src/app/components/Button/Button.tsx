'use client'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.softRed};
  color: ${({ theme }) => theme.colors.offWhite};
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  border: none;
  width: 11rem;
  height: 3rem;
  margin: 0.5rem 0;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.veryDarkBlue};
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`

export default Button
