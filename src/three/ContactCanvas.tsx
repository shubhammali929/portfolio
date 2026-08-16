import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactCore } from './ContactCore'

export function ContactCanvas({ progress }: { progress: React.RefObject<number> }) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]}>
      <color attach="background" args={['#0a0a0b']} />
      <fog attach="fog" args={['#0a0a0b', 3, 9]} />
      <Suspense fallback={null}>
        <ContactCore progress={progress} />
      </Suspense>
    </Canvas>
  )
}
