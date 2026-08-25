import { About } from './components/About'
import { Contact } from './components/Contact'
import { Cs50 } from './components/Cs50'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { SkipLink } from './components/SkipLink'
import { Stack } from './components/Stack'

export default function App() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="conteudo">
        <Hero />
        <About />
        <Projects />
        <Cs50 />
        <Stack />
        <Contact />
      </main>

      <SiteFooter />
    </>
  )
}
