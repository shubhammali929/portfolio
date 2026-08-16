import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ContactCore({ progress }: { progress: React.RefObject<number> }) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.1
    mesh.current.rotation.y += delta * 0.15
    const p = progress.current ?? 0
    mesh.current.position.z = -6 + p * 5
    const s = 1 + p * 0.6
    mesh.current.scale.setScalar(s)
  })

  return (
    <mesh ref={mesh} position={[0, 0, -6]}>
      <icosahedronGeometry args={[1.8, 0]} />
      <meshBasicMaterial color="#c98a4b" wireframe transparent opacity={0.45} />
    </mesh>
  )
}
