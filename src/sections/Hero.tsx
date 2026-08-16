import { useEffect, useRef, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { profile } from '@/data/content'
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery'

const HeroScene = lazy(() => import('@/three/HeroScene').then((m) => ({ default: m.HeroScene })))

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollProgress = useRef(0)
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const passed = Math.min(Math.max(-rect.top, 0), total)
      scrollProgress.current = total > 0 ? passed / total : 0
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} id="home" className="relative h-[180vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-void">
        {!reducedMotion && (
          <div className="absolute inset-0">
            <Suspense fallback={null}>
              <HeroScene scrollProgress={scrollProgress} quality={isMobile ? 'low' : 'high'} />
            </Suspense>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void" />

        <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-32 md:px-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-2 font-display text-xs uppercase tracking-[0.4em] text-mist"
            >
              {profile.subRole}
            </motion.div>

            <h1 className="font-display font-medium leading-[0.92] text-bone">
              <AnimatedWord text="SOFTWARE" delay={0.35} />
              <AnimatedWord text="ENGINEER" delay={0.5} />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 font-display text-2xl text-accent md:text-4xl"
            >
              {profile.name}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-4 max-w-md font-body text-sm uppercase tracking-[0.2em] text-mist"
            >
              {profile.role} · {profile.currentTitle} at {profile.currentCompany}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center gap-3 self-center font-display text-[11px] uppercase tracking-[0.3em] text-mist"
          >
            Scroll to explore
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnimatedWord({ text, delay }: { text: string; delay: number }) {
  return (
    <div className="overflow-hidden">
      <motion.span
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block text-[15vw] md:text-[8vw]"
      >
        {text}
      </motion.span>
    </div>
  )
}
