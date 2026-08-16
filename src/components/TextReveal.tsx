import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

/**
 * Masked line-by-line reveal. Visibility is tracked on the untransformed
 * wrapper (not the translated inner element) — tracking the transformed node
 * directly would measure its intersection hundreds of pixels away from its
 * true position for tall blocks, and the reveal would never fire.
 */
export function TextReveal({
  lines,
  className = '',
  delayStep = 0.08,
  once = true,
}: {
  lines: ReactNode[]
  className?: string
  delayStep?: number
  once?: boolean
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <RevealLine key={i} delay={i * delayStep} once={once}>
          {line}
        </RevealLine>
      ))}
    </div>
  )
}

function RevealLine({ children, delay, once }: { children: ReactNode; delay: number; once: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.3 })

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '110%' }}
        animate={inView ? { y: '0%' } : { y: '110%' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
