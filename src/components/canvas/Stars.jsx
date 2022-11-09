import * as React from 'react'
import { Stars } from '@react-three/drei'
import { useControls, folder } from 'leva'

export default function StarScene(props) {
  const { radius, depth, count, factor, sat, speed, fade } = useControls({
    'components': folder({
      stars: folder({
        radius: 243,
        depth: 86,
        count: 2500,
        factor: 7,
        sat: 18,
        fade: true,
        speed: 1
      })
    })
  })

  return (  
    <Stars radius={radius} depth={depth} count={count} factor={factor} saturation={sat} fade={fade} speed={speed} {...props} />
  )
}