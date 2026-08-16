import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const start = performance.now()
    const minDuration = reducedMotion ? 150 : 1100

    let raf = 0
    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / minDuration) * 100))
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setExiting(true)
        setTimeout(onDone, reducedMotion ? 0 : 500)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone, reducedMotion])

  return (
    <AnimatePresence>
      {!exiting || progress < 100 ? (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, filter: reducedMotion ? 'none' : 'blur(8px)' }}
          transition={{ duration: reducedMotion ? 0 : 0.5, ease: 'easeInOut' }}
        >
          <div className="font-display text-sm tracking-[0.3em] text-mist">SM</div>
          <div className="mt-6 h-px w-40 overflow-hidden bg-line">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <div className="mt-4 font-body text-[10px] uppercase tracking-[0.25em] text-mist">
            Loading Experience — {progress}%
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
