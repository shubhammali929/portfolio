import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Line } from '@react-three/drei'
import * as THREE from 'three'
import { skills } from '@/data/content'
import { SKILL_ICONS } from '@/data/skillIcons'
import type { PointerState } from '@/hooks/usePointer'

const GROUP_COLOR: Record<string, string> = {
  frontend: '#c98a4b',
  backend: '#eeeeec',
  data: '#9a9a9f',
  cloud: '#7a5730',
  tools: '#c98a4b',
}

function fibonacciSphere(count: number, radius: number) {
  const points: [number, number, number][] = []
  const offset = 2 / count
  const increment = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2
    const r = Math.sqrt(Math.max(0, 1 - y * y))
    const phi = i * increment
    points.push([Math.cos(phi) * r * radius, y * radius, Math.sin(phi) * r * radius])
  }
  return points
}

function Node({
  position,
  color,
  name,
  category,
  onHover,
}: {
  position: [number, number, number]
  color: string
  name: string
  category: string
  onHover: (v: { name: string; category: string } | null) => void
}) {
  const [hovered, setHovered] = useState(false)
  const glow = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!glow.current) return
    const target = hovered ? 1 : 0
    const material = glow.current.material as THREE.MeshBasicMaterial
    material.opacity = THREE.MathUtils.lerp(material.opacity, target * 0.35, 0.15)
  })

  const entry = SKILL_ICONS[name]
  const Icon = entry?.icon
  const iconColor = entry?.color ?? color

  const handleOver = () => {
    setHovered(true)
    onHover({ name, category })
  }
  const handleOut = () => {
    setHovered(false)
    onHover(null)
  }

  return (
    <group position={position}>
      <mesh ref={glow}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial color={iconColor} transparent opacity={0} depthWrite={false} />
      </mesh>
      <Html center distanceFactor={6} occlude={false} zIndexRange={[20, 0]}>
        <div
          data-cursor=""
          onPointerOver={(e) => {
            e.stopPropagation()
            handleOver()
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            handleOut()
          }}
          className="relative flex select-none items-center justify-center rounded-full border transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out"
          style={{
            width: 40,
            height: 40,
            cursor: 'pointer',
            transform: `scale(${hovered ? 1.35 : 1})`,
            background: hovered ? `${iconColor}22` : 'rgba(10,10,11,0.6)',
            borderColor: hovered ? iconColor : 'rgba(238,238,236,0.12)',
            boxShadow: hovered ? `0 0 22px ${iconColor}77, 0 0 2px ${iconColor}` : '0 0 0 rgba(0,0,0,0)',
            backdropFilter: 'blur(6px)',
          }}
        >
          {Icon ? (
            <Icon size={18} color={hovered ? iconColor : '#9a9a9f'} style={{ transition: 'color 0.3s ease' }} />
          ) : (
            <span className="font-display text-[10px] text-mist">{name.slice(0, 2)}</span>
          )}
          <span
            className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line/70 bg-void/95 px-2 py-1 font-display text-[10px] uppercase tracking-[0.15em] text-bone transition-opacity duration-200"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            {name}
          </span>
        </div>
      </Html>
    </group>
  )
}

export function SkillsConstellation({
  pointer,
  onHover,
  quality = 'high',
}: {
  pointer: React.RefObject<PointerState>
  onHover: (v: { name: string; category: string } | null) => void
  quality?: 'high' | 'low'
}) {
  const group = useRef<THREE.Group>(null)
  const radius = 2.6

  const nodes = useMemo(() => {
    const positions = fibonacciSphere(skills.length, radius)
    return skills.map((s, i) => ({ ...s, position: positions[i] }))
  }, [radius])

  const lines = useMemo(() => {
    const segments: [THREE.Vector3, THREE.Vector3][] = []
    const limit = quality === 'high' ? 2 : 1
    nodes.forEach((node, i) => {
      const a = new THREE.Vector3(...node.position)
      const distances = nodes
        .map((other, j) => ({ j, d: a.distanceTo(new THREE.Vector3(...other.position)) }))
        .filter((x) => x.j !== i)
        .sort((x, y) => x.d - y.d)
        .slice(0, limit)
      distances.forEach(({ j }) => {
        segments.push([a, new THREE.Vector3(...nodes[j].position)])
      })
    })
    return segments
  }, [nodes, quality])

  useFrame((state) => {
    const p = pointer.current
    if (!group.current) return
    group.current.rotation.y += 0.0015
    group.current.rotation.x += (-p.ny * 0.25 - group.current.rotation.x) * 0.02
    group.current.rotation.y += (p.nx * 0.0004)
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
  })

  return (
    <group ref={group}>
      {lines.map((pts, i) => (
        <Line key={i} points={pts} color="#46464c" lineWidth={1} transparent opacity={0.5} />
      ))}
      {nodes.map((node) => (
        <Node
          key={node.name}
          position={node.position}
          color={GROUP_COLOR[node.group] ?? '#c98a4b'}
          name={node.name}
          category={node.group}
          onHover={onHover}
        />
      ))}
    </group>
  )
}
