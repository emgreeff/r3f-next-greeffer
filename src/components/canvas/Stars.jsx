import * as React from 'react'
import { Stars } from '@react-three/drei'
import { useControls, folder } from 'leva'
import { EffectComposer, Bloom, Noise, DepthOfField, Vignette } from '@react-three/postprocessing'

export default function StarScene(props) {
  const { radius, depth, count, factor, sat, speed, fade, kernalSize, height, width, luminanceSmoothing, luminanceThreshold,
    intensity, focalLength, focusDistance, dofheight, dofwidth, bokehScale, eskil, offset, darkness, premultiply, opacity } = useControls({
    'components': folder({
      stars: folder({
        radius: 140,
        depth: 13,
        count: 5000,
        factor: 1,
        sat: 0,
        fade: true,
        speed: 0.2
      }),
      'Bloom': folder({
        kernalSize: 3,//<------------------------broken
        luminanceSmoothing: -2.00,
        luminanceThreshold: 1.0,
        intensity: 1.0,
        height: 157,
        width: 208
      }),
      'DepthOfField': folder({
        focalLength: 4.50,
        focusDistance: -0.50,
        bokehScale: 0.7,
        dofheight: 81,
        dofwidth: 181
      }),
      'Noise': folder({
        premultiply: true,
        opacity: 1.20
      }),
      'Vignette': folder({
        eskil: false,
        offset: -1.00,
        darkness: 1.1
      })
    })
  })

  return (
    <mesh {...props}>
      <Stars radius={radius} depth={depth} count={count} factor={factor} saturation={sat} fade={fade} speed={speed} />
      <EffectComposer>
        <DepthOfField focusDistance={focusDistance} focalLength={focalLength} bokehScale={bokehScale} height={dofheight} width={dofwidth} />
        <Bloom luminanceThreshold={luminanceThreshold} luminanceSmoothing={luminanceSmoothing} width={width} height={height} intensity={intensity} />
        <Noise opacity={opacity} premultiply={premultiply} />
        <Vignette eskil={eskil} offset={offset} darkness={darkness} />
      </EffectComposer>
    </mesh>
  )
}
