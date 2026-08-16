import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { HeroCore } from './HeroCore'
import { Particles } from './Particles'
import { usePointer } from '@/hooks/usePointer'

export function HeroScene({
  scrollProgress,
  quality,
}: {
  scrollProgress: React.RefObject<number>
  quality: 'high' | 'low'
}) {
  const pointer = usePointer()
  const staticPointer = useRef({ x: 0, y: 0, nx: 0, ny: 0 })

  return (
    <Canvas
      dpr={quality === 'high' ? [1, 1.8] : [1, 1]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: quality === 'high', powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#0a0a0b']} />
      <fog attach="fog" args={['#0a0a0b', 5, 13]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#c98a4b" />
      <pointLight position={[-4, -2, -3]} intensity={15} color="#eeeeec" />
      <Suspense fallback={null}>
        <HeroCore pointer={quality === 'high' ? pointer : staticPointer} scrollProgress={scrollProgress} quality={quality} />
        {quality === 'high' && <Particles count={350} spread={12} />}
      </Suspense>
    </Canvas>
  )
}
