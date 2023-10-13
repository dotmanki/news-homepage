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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Hero />
        <Display>The Bright Future of Web 3.0?</Display>
        <Paragraph>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </Paragraph>
        <Button>Read more</Button>
      </Main>
      <Aside>
        <h3>New</h3>
        <Article>
          <h4>Hydrogen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </Article>
        <Article>
          <h4>The Downsides of AI Artistry</h4>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </Article>
        <Article>
          <h4>Is VC Funding Drying Up?</h4>
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
            <h4>Reviving Retro PCs</h4>
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
            <h4>Top 10 Laptops of 2022</h4>
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
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </FooterArticle>
      </Footer>
    </ThemeProvider>
  )
}
