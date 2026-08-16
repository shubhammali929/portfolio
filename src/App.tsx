import { useState } from 'react'
import { Loader } from '@/components/Loader'
import { Navbar } from '@/components/Navbar'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { Certifications } from '@/sections/Certifications'
import { Education } from '@/sections/Education'
import { Contact } from '@/sections/Contact'
import { useLenis } from '@/hooks/useLenis'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

function App() {
  const [loaded, setLoaded] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  useLenis(loaded && !reducedMotion)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <CustomCursor />
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
