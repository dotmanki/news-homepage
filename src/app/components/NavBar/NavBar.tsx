'use client'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media (min-width: 768px) {
    grid-column: span 12 / span 12;
  }
`

const Logo = styled.div`
  width: 50px;
  height: 30px;
  background-image: url('/logo.svg');
  background-size: cover;

  @media (min-width: 768px) {
    width: 60px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`

const Menu = styled.div`
  width: 40px;
  height: 17px;
  background-image: url('/icon-menu.svg');
  background-size: cover;

  @media (min-width: 768px) {
    display: none;
  }
`

const Ul = styled.ul`
  display: none;
  list-style: none;

  & > li > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.softRed};
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo />
      <Menu />
      <Ul>
        <li>
          <Link href='#home'>Home</Link>
        </li>
        <li>
          <Link href='#new'>New</Link>
        </li>
        <li>
          <Link href='#popular'>Popular</Link>
        </li>
        <li>
          <Link href='#trending'>Trending</Link>
        </li>
        <li>
          <Link href='#categories'>Categories</Link>
        </li>
      </Ul>
    </StyledNavBar>
  )
}

export default NavBar
