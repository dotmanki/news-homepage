'use client'

import { useNav } from '@/app/hooks/useNav'
import Link from 'next/link'
import styled from 'styled-components'

const StyledContainer = styled.div<{ $isMenuOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: hsla(0, 0%, 0%, 0.5);
  position: fixed;
  flex-direction: row-reverse;
  top: 0;
  left: 0;
  ${({ $isMenuOpen }) => ($isMenuOpen ? 'display: flex;' : 'display: none;')}
`

const StyledMenu = styled.div`
  width: 65%;
  height: 100vh;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.offWhite};
  display: flex;
  flex-direction: column;

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 6rem;
  }

  & ul li a {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.softOrange};
    }
  }
`

const Close = styled.button`
  width: 2rem;
  height: 2rem;
  justify-self: flex-end;
  border: none;
  background-color: transparent;
  background-image: url('/icon-menu-close.svg');
  background-size: cover;
`

const Menu = () => {
  const { isMenuOpen, toggleMenu } = useNav()
  console.log(isMenuOpen)
  return (
    <StyledContainer $isMenuOpen={isMenuOpen}>
      <StyledMenu>
        <Close onClick={toggleMenu} />
        <ul>
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>New</Link>
          </li>
          <li>
            <Link href='#'>Popular</Link>
          </li>
          <li>
            <Link href='#'>Trending</Link>
          </li>
          <li>
            <Link href='#'>Categories</Link>
          </li>
        </ul>
      </StyledMenu>
    </StyledContainer>
  )
}

export default Menu
