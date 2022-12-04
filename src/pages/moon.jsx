import dynamic from 'next/dynamic'
import Overlay from '@/components/dom/Overlay'
// import { postprocessing, EffectComposer, Bloom, DepthOfField } from '@react-three/drei'

const MoonScene = dynamic(() => import('@/components/canvas/Moon'), { ssr: false })

export default function Page(props) {
  return (
    <Overlay />
  )
}

Page.canvas = (props) => {

  return (
    <MoonScene position-y={props.position} />
  )
}

export async function getStaticProps() {

  return {
    props: {
      title: 'Moon Scene',
      position: -0.75
    }
  }
}
