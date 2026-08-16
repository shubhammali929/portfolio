import { useEffect, useRef, useState } from 'react'
import { navItems } from '@/data/content'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight || 1)
      if (barRef.current) {
        barRef.current.style.transform = `scaleY(${scrolled})`
      }

      let idx = 0
      navItems.forEach((item, i) => {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          idx = i
        }
      })
      setActiveIndex(idx)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 lg:flex">
      <div className="relative h-40 w-px bg-line">
        <div
          ref={barRef}
          className="absolute left-0 top-0 h-full w-full origin-top bg-accent"
          style={{ transform: 'scaleY(0)' }}
        />
      </div>
      <span className="mt-3 font-display text-[10px] tracking-[0.2em] text-mist">
        {String(activeIndex + 1).padStart(2, '0')}
      </span>
    </div>
  )
}
