import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'
import { profile } from '@/data/content'

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const start = performance.now()
    const minDuration = reducedMotion ? 150 : 1300

    let raf = 0
    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / minDuration) * 100))
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setExiting(true)
        setTimeout(onDone, reducedMotion ? 0 : 550)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone, reducedMotion])

  return (
    <AnimatePresence>
      {!exiting || progress < 100 ? (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-8 bg-void"
          exit={{ opacity: 0, filter: reducedMotion ? 'none' : 'blur(10px)' }}
          transition={{ duration: reducedMotion ? 0 : 0.55, ease: 'easeInOut' }}
        >
          <motion.div
            animate={exiting ? { scale: 1.6, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="loader-sphere relative h-16 w-16 md:h-20 md:w-20"
          >
            <div className="loader-sphere-inner absolute inset-0">
              <span className="loader-ring" style={{ transform: 'rotateX(0deg)' }} />
              <span className="loader-ring" style={{ transform: 'rotateX(60deg)' }} />
              <span className="loader-ring" style={{ transform: 'rotateX(120deg)' }} />
            </div>
            <span className="loader-core absolute" />
          </motion.div>

          <div className="flex flex-col items-center gap-2">
            <div className="font-display text-sm tracking-[0.3em] text-bone">{profile.name.toUpperCase()}</div>
            <div className="font-body text-[10px] uppercase tracking-[0.25em] text-mist">{profile.subRole}</div>
          </div>

          <div className="h-px w-40 overflow-hidden bg-line">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <div className="font-body text-[10px] uppercase tracking-[0.25em] text-mist">
            Loading Experience — {progress}%
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
