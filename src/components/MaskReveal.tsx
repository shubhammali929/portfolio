import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

/**
 * Single masked reveal (word/line). Visibility is tracked on the
 * untransformed wrapper — see TextReveal for why tracking the transformed
 * node itself is unreliable for anything taller than a sliver.
 */
export function MaskReveal({
  children,
  delay = 0,
  once = true,
  className = '',
}: {
  children: ReactNode
  delay?: number
  once?: boolean
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.3 })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '110%' }}
        animate={inView ? { y: '0%' } : { y: '110%' }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
