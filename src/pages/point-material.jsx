
// <points>
//   <PointMaterial transparent vertexColors size={15} sizeAttenuation={false} depthWrite={false} />
// </points>

import dynamic from 'next/dynamic'
import Overlay from '@/components/dom/Overlay'

const PointMaterial = dynamic(() => import('@/components/canvas/Points'), { ssr: false })

export default function Page(props) {
  return (
    <Overlay />
  )
}

Page.canvas = (props) => <PointMaterial position-y={props.position} />

export async function getStaticProps() {

  return {
    props: {
      title: 'Point Material',
      position: -0.75
    }
  }
}

