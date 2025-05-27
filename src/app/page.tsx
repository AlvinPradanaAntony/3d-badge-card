import Scene3D from '@/components/Scene3D'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute top-4 left-4 z-10 text-white">
        <h1 className="text-3xl font-bold mb-2">3D Badge Card</h1>
        <p className="text-lg opacity-80">
          Next.js + Three.js + React Three Fiber + Rapier Physics + Leva
        </p>
        <div className="mt-4 text-sm opacity-60">
          <p>• Drag to rotate the camera</p>
          <p>• Scroll to zoom</p>
          <p>• Watch the pink box fall with physics!</p>
          <p>• Use Leva controls (top-right) to tweak the scene!</p>
        </div>
      </div>
      <Scene3D />
    </main>
  )
}
