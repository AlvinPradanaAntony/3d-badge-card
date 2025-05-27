'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AnimatedLines() {
  const lineRef = useRef<THREE.Line>(null)
  const materialRef = useRef<THREE.LineBasicMaterial>(null)

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      lineRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
    if (materialRef.current) {
      materialRef.current.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3
    }
  })

  // Create curved line points
  const points = []
  for (let i = 0; i <= 100; i++) {
    const t = i / 100
    const x = (t - 0.5) * 10
    const y = Math.sin(t * Math.PI * 4) * 2
    const z = Math.cos(t * Math.PI * 2) * 1
    points.push(new THREE.Vector3(x, y, z))
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        ref={materialRef}
        color="#ff6b6b"
        transparent
        opacity={0.8}
      />
    </line>
  )
}