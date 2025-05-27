'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Text, Stars } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { Suspense } from 'react'
import { Leva } from 'leva'
import BadgeCard from './BadgeCard'
import AnimatedLines from './AnimatedLines'
import LevaControls from './LevaControls'

function FloatingBox() {
  return (
    <RigidBody type="dynamic">
      <Box args={[1, 1, 1]} position={[0, 5, 0]}>
        <meshStandardMaterial color="hotpink" />
      </Box>
    </RigidBody>
  )
}

function Ground() {
  return (
    <RigidBody type="fixed">
      <Box args={[10, 0.5, 10]} position={[0, -2, 0]}>
        <meshStandardMaterial color="lightblue" />
      </Box>
    </RigidBody>
  )
}

function Scene() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#ff6b6b" intensity={0.5} />
      
      <Physics>
        <FloatingBox />
        <Ground />
        <BadgeCard
          title="Frontend Developer"
          subtitle="React • Next.js • Three.js"
          position={[-3, 2, 0]}
        />
        <BadgeCard
          title="3D Artist"
          subtitle="Blender • WebGL • GLSL"
          position={[3, 1, 0]}
        />
      </Physics>
      
      <AnimatedLines />
      <LevaControls />
      
      <Sphere args={[0.5]} position={[0, -0.5, 2]}>
        <meshStandardMaterial color="orange" emissive="#ff4500" emissiveIntensity={0.2} />
      </Sphere>
      
      <Text
        position={[0, 6, 0]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        3D Badge Card Portfolio
      </Text>
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-screen relative">
      <Leva collapsed={false} />
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}