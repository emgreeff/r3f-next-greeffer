import dynamic from 'next/dynamic'
import Overlay from '@/components/dom/Overlay'
// import { postprocessing, EffectComposer, Bloom, DepthOfField } from '@react-three/drei'

const StarsScene = dynamic(() => import('@/components/canvas/Stars'), { ssr: false })

export default function Page(props) {
  return (
    <Overlay />
  )
}

Page.canvas = (props) => {

return(
<StarsScene position-y={props.position} />
)
}

export async function getStaticProps() {

  return {
    props: {
      title: 'Stars Scene',
      position: -0.75
    }
  }
}
