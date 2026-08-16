import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { SkillsConstellation } from './SkillsConstellation'
import type { PointerState } from '@/hooks/usePointer'

export function SkillsCanvas({
  pointer,
  onHover,
  quality,
  isMobile,
}: {
  pointer: React.RefObject<PointerState>
  onHover: (v: { name: string; category: string } | null) => void
  quality: 'high' | 'low'
  isMobile: boolean
}) {
  return (
    <Canvas dpr={isMobile ? [1, 1] : [1, 1.6]} camera={{ position: [0, 0, 6], fov: 42 }} gl={{ antialias: !isMobile }}>
      <color attach="background" args={['#0a0a0b']} />
      <Suspense fallback={null}>
        <SkillsConstellation pointer={pointer} onHover={onHover} quality={quality} />
      </Suspense>
    </Canvas>
  )
}
