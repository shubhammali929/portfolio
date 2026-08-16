import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { PointerState } from '@/hooks/usePointer'

function Fragment({
  position,
  scale,
  speed,
}: {
  position: [number, number, number]
  scale: number
  speed: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed
    ref.current.rotation.x = t * 0.4
    ref.current.rotation.y = t * 0.6
    ref.current.position.y = position[1] + Math.sin(t) * 0.25
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#c98a4b" wireframe transparent opacity={0.5} />
    </mesh>
  )
}

export function HeroCore({
  pointer,
  scrollProgress,
  quality = 'high',
}: {
  pointer: React.RefObject<PointerState>
  scrollProgress: React.RefObject<number>
  quality?: 'high' | 'low'
}) {
  const group = useRef<THREE.Group>(null)
  const core = useRef<THREE.Mesh>(null)
  const rotation = useRef({ x: 0, y: 0 })

  const fragments = useMemo(() => {
    const count = quality === 'high' ? 6 : 3
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2
      const radius = 3.2 + (i % 2)
      return {
        position: [Math.cos(angle) * radius, Math.sin(angle * 1.3) * 1.2, Math.sin(angle) * radius] as [
          number,
          number,
          number,
        ],
        scale: 0.25 + (i % 3) * 0.12,
        speed: 0.3 + (i % 4) * 0.15,
      }
    })
  }, [quality])

  useFrame((state, delta) => {
    const p = pointer.current
    const sp = scrollProgress.current ?? 0

    rotation.current.x += (-p.ny * 0.3 - rotation.current.x) * 0.04
    rotation.current.y += (p.nx * 0.4 - rotation.current.y) * 0.04

    if (group.current) {
      group.current.rotation.x = rotation.current.x + sp * 1.4
      group.current.rotation.y = rotation.current.y + state.clock.elapsedTime * 0.06
      group.current.position.z = -sp * 2.5
      group.current.scale.setScalar(1 - sp * 0.3)
    }
    if (core.current) {
      core.current.rotation.y += delta * 0.15
      core.current.rotation.x += delta * 0.08
    }
  })

  return (
    <group ref={group}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#eeeeec"
          wireframe
          transparent
          opacity={0.35}
          emissive="#c98a4b"
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.58, 1]} />
        <meshBasicMaterial color="#0a0a0b" transparent opacity={0.85} />
      </mesh>
      {fragments.map((f, i) => (
        <Fragment key={i} {...f} />
      ))}
    </group>
  )
}
