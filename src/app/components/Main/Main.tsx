'use client'
import styled from 'styled-components'

const StyledMain = styled.main`
  margin-bottom: 3rem;
`

const Main = ({ children }: { children: React.ReactNode }) => {
  return <StyledMain>{children}</StyledMain>
}

export default Main
