import { useEffect, useRef } from 'react'

export type PointerState = { x: number; y: number; nx: number; ny: number }

/** Tracks raw + normalized (-1..1) pointer position in a ref, no re-renders. */
export function usePointer() {
  const pointer = useRef<PointerState>({ x: 0, y: 0, nx: 0, ny: 0 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX
      pointer.current.y = e.clientY
      pointer.current.nx = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.ny = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return pointer
}
