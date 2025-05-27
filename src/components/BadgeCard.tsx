'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, RoundedBox, Float, MeshDistortMaterial } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

interface BadgeCardProps {
  title: string
  subtitle: string
  position: [number, number, number]
}

export default function BadgeCard({ title, subtitle, position }: BadgeCardProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <RigidBody type="dynamic" position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {/* Card Background */}
          <RoundedBox
            ref={meshRef}
            args={[4, 2.5, 0.2]}
            radius={0.1}
            smoothness={4}
            scale={hovered ? 1.1 : 1}
          >
            <MeshDistortMaterial
              color={hovered ? "#ff6b6b" : "#4ecdc4"}
              distort={0.3}
              speed={2}
              roughness={0.1}
              metalness={0.8}
            />
          </RoundedBox>

          {/* Title Text */}
          <Text
            position={[0, 0.3, 0.11]}
            fontSize={0.4}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {title}
          </Text>

          {/* Subtitle Text */}
          <Text
            position={[0, -0.2, 0.11]}
            fontSize={0.2}
            color="#e0e0e0"
            anchorX="center"
            anchorY="middle"
          >
            {subtitle}
          </Text>

          {/* Decorative Elements */}
          <mesh position={[-1.5, 0.8, 0.11]}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="#ffd93d" emissive="#ffd93d" emissiveIntensity={0.3} />
          </mesh>

          <mesh position={[1.5, 0.8, 0.11]}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="#6bcf7f" emissive="#6bcf7f" emissiveIntensity={0.3} />
          </mesh>
        </group>
      </Float>
    </RigidBody>
  )
}