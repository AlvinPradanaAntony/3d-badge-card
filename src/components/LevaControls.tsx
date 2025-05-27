'use client'

import { useControls } from 'leva'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Sphere } from '@react-three/drei'
import * as THREE from 'three'

export default function LevaControls() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const {
    position,
    rotation,
    scale,
    color,
    wireframe,
    metalness,
    roughness,
    animationSpeed,
    shape
  } = useControls({
    // Position controls
    position: { value: [0, 2, 0], step: 0.1 },
    
    // Rotation controls
    rotation: { value: [0, 0, 0], step: 0.1 },
    
    // Scale control
    scale: { value: 1, min: 0.1, max: 3, step: 0.1 },
    
    // Material controls
    color: '#ff6b6b',
    wireframe: false,
    metalness: { value: 0.5, min: 0, max: 1, step: 0.1 },
    roughness: { value: 0.5, min: 0, max: 1, step: 0.1 },
    
    // Animation control
    animationSpeed: { value: 1, min: 0, max: 5, step: 0.1 },
    
    // Shape selector
    shape: { options: ['box', 'sphere'] }
  })

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * animationSpeed
      meshRef.current.rotation.y = state.clock.elapsedTime * animationSpeed * 0.5
    }
  })

  const GeometryComponent = shape === 'sphere' ? Sphere : Box

  return (
    <GeometryComponent
      ref={meshRef}
      args={shape === 'sphere' ? [1] : [1, 1, 1]}
      position={position as [number, number, number]}
      rotation={rotation as [number, number, number]}
      scale={scale}
    >
      <meshStandardMaterial
        color={color}
        wireframe={wireframe}
        metalness={metalness}
        roughness={roughness}
      />
    </GeometryComponent>
  )
}