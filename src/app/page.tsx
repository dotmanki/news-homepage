'use client'
import Main from './components/Main/Main'
import Hero from './components/Hero/Hero'
import Display from './components/Display/Display'
import Paragraph from './components/Paragraph/Paragraph'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import Button from './components/Button/Button'
import Aside from './components/Aside/Aside'
import Article from './components/Article/Article'
import Footer from './components/Footer/Footer'
import FooterArticle from './components/Article/FooterArticle'
import Image from 'next/image'
import NavBar from './components/NavBar/NavBar'
import Link from 'next/link'
import Menu from './components/Menu/Menu'
import { GlobalStyles } from './utils/GlobalStyles'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <Main>
        <Hero />
        <Display>The Bright Future of Web 3.0?</Display>
        <div className='container'>
          <Paragraph>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </Paragraph>
          <Button>Read more</Button>
        </div>
      </Main>
      <Aside>
        <h3>New</h3>
        <Article>
          <h4>
            <Link href='#'>Hydrogen VS Electric Cars</Link>
          </h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </Article>
        <Article>
          <h4>
            <Link href='#'>The Downsides of AI Artistry</Link>
          </h4>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </Article>
        <Article>
          <h4>
            <Link href='#'>Is VC Funding Drying Up?</Link>
          </h4>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </Article>
      </Aside>
      <Footer>
        <FooterArticle>
          <Image
            src='/image-retro-pcs.jpg'
            alt='retro pcs'
            width={100}
            height={135}
          />
          <div>
            <h3>01</h3>
            <h4>
              <Link href='#'>Reviving Retro PCs</Link>
            </h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </FooterArticle>
        <FooterArticle>
          <Image
            src='/image-top-laptops.jpg'
            alt='top laptops'
            width={100}
            height={135}
          />
          <div>
            <h3>02</h3>
            <h4>
              <Link href='#'>Top 10 Laptops of 2022</Link>
            </h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </FooterArticle>
        <FooterArticle>
          <Image
            src='/image-gaming-growth.jpg'
            alt='gaming growth'
            width={100}
            height={135}
          />
          <div>
            <h3>03</h3>
            <h4>
              <Link href='#'>The Growth of Gaming</Link>
            </h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </FooterArticle>
      </Footer>
      <Menu />
    </ThemeProvider>
  )
}
