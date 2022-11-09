/**
 * @component       Points
 * @description     React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLCanvasElement> 
 * @param {boolean} transparent
 * @param {boolean} vertexColors
 * @param {number}  size 
 * @param {boolean} sizeAttenuation
 * @param {boolean} depthWrite
 * @exports <PointMaterialImpl>
 * 
 * React.ForwardRefExoticComponent<Pick<Omit<PrimitiveProps, "object" | "attach">, string | number> & React.RefAttributes<PointMaterialImpl>>
 */

import * as React from 'react'
import { PointMaterial } from '@react-three/drei'
import { useControls, folder } from 'leva'
// import { points, Vector4 } from 'three'

export default function Points(props) {
  const { transparent, sizeAttenuation, vertexColors, size, depthWrite } = useControls({
    'PointMaterial': folder({
      transparent: true,
      size: 15,
      sizeAttenuation: false,
      depthWrite: false,
      vertexColors: true
    })
  })

  return (
    <points>
      <PointMaterial transparent={transparent} vertexColors={vertexColors} size={size} sizeAttenuation={sizeAttenuation} depthWrite={depthWrite} />
    </points>)
}
