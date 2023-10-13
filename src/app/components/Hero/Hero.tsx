'use client'
import styled from 'styled-components'

const Hero = styled.div`
  width: 100%;
  height: 18rem;
  background-image: url('/image-web-3-mobile.jpg');
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    background-image: url('/image-web-3-desktop.jpg');
    grid-column: span 12 / span 12;
    grid-row: span 1 / span 1;
  }
`
export default Hero
