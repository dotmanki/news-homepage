'use client'
import Image from 'next/image'
import styled from 'styled-components'

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <Image src='/logo.svg' alt='logo' width={50} height={30} />
      <Image src='/icon-menu.svg' alt='icon-menu' width={40} height={17} />
    </StyledNavBar>
  )
}

export default NavBar
