import { useEffect, useRef, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { MaskReveal } from '@/components/MaskReveal'
import { SectionHeading } from '@/components/SectionHeading'
import { profile } from '@/data/content'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

const ContactCanvas = lazy(() => import('@/three/ContactCanvas').then((m) => ({ default: m.ContactCanvas })))

const LINE_1 = ['LET’S', 'BUILD']
const LINE_2 = ['SOMETHING', 'GREAT.']

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useRef(0)
  const { ref: lazyRef, inView } = useInViewOnce<HTMLDivElement>()
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const p = 1 - Math.min(Math.max(rect.top / window.innerHeight, 0), 1)
      progress.current = p
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-void px-6 py-40 md:px-10">
      <div ref={lazyRef} className="absolute inset-0">
        {inView && !reducedMotion && (
          <Suspense fallback={null}>
            <ContactCanvas progress={progress} />
          </Suspense>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

      <div className="relative mx-auto max-w-5xl text-center">
        <SectionHeading number="08" label="Contact" center />

        <h3 className="mt-8 font-display leading-[0.95] text-bone">
          {[...LINE_1, ...LINE_2].map((word, i) => (
            <MaskReveal key={i} delay={i * 0.08}>
              <span className={`block text-[13vw] md:text-[6.5vw] ${word === 'GREAT.' ? 'text-accent' : ''}`}>
                {word}
              </span>
            </MaskReveal>
          ))}
        </h3>

        <motion.a
          href={`mailto:${profile.email}`}
          data-cursor="SEND"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="group mt-14 inline-flex items-center gap-3 border border-line px-8 py-4 font-display text-xs uppercase tracking-[0.25em] text-bone transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Start a Conversation
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </motion.a>
      </div>
    </section>
  )
}
