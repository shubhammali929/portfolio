import { useEffect, useRef, useState } from 'react'
import { useIsTouch } from '@/hooks/useMediaQuery'

/**
 * Desktop-only custom cursor. A small dot with a lagging ring, magnetic
 * expansion + label on elements carrying data-cursor="LABEL".
 */
export function CustomCursor() {
  const isTouch = useIsTouch()
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (isTouch) return
    document.documentElement.classList.add('has-cursor-fx')

    const pos = { x: 0, y: 0 }
    const ring = { x: 0, y: 0 }

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
      }
    }

    let raf = 0
    const tick = () => {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onOver = (e: Event) => {
      const el = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null
      if (el) {
        setLabel(el.dataset.cursor || '')
        setActive(true)
      }
    }
    const onOut = (e: Event) => {
      const el = (e.target as HTMLElement)?.closest('[data-cursor]')
      if (el) {
        setActive(false)
        setLabel('')
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerout', onOut)

    return () => {
      document.documentElement.classList.remove('has-cursor-fx')
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerout', onOut)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-bone will-change-transform"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border border-bone/40 will-change-transform transition-[width,height,background-color,border-color] duration-300 ease-out ${
          active ? 'h-16 w-16 border-accent/60 bg-accent/10' : 'h-8 w-8'
        }`}
      >
        {active && label && (
          <span className="font-display text-[10px] uppercase tracking-[0.15em] text-bone">{label}</span>
        )}
      </div>
    </>
  )
}
