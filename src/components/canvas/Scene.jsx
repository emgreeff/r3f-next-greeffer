import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { useControls, folder } from 'leva'
// import usePostProcess from '@/templates/hooks/usePostprocess'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const { ambientIntensity, directionalIntensity, enableDamping, enablePan, enableZoom, enableRotate, reverseOrbit } = useControls({
    'lights': folder({
      directional: folder({
        directionalIntensity: 0.75
      }),
      ambient: folder({
        ambientIntensity: 0.75
      })
    }),
    'orbit controls': folder({
      enableDamping: true,
      enablePan: true,
      enableRotate: true,
      enableZoom: true,
      reverseOrbit: false
    }),
    'Canvas': folder({
      fov: 80,
      position: [0, 0, 1]
    })
  })

  return (
    <Canvas  {...props}>
      <directionalLight intensity={directionalIntensity} />
      <ambientLight intensity={ambientIntensity} />
      {children}
      <Preload all />
      <OrbitControls enableDamping={enableDamping} enablePan={enablePan} enableRotate={enableRotate} enableZoom={enableZoom} reverseOrbit={reverseOrbit} />
    </Canvas>
  )
}
