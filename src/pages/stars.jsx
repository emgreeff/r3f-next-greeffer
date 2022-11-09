import dynamic from 'next/dynamic'
import Overlay from '@/components/dom/Overlay'

const StarsScene = dynamic(() => import('@/components/canvas/Stars'), { ssr: false })

export default function Page(props) {
  return (
    <Overlay />
  )
}

Page.canvas = (props) => <StarsScene position-y={props.position} />

export async function getStaticProps() {

  return {
    props: {
      title: 'Stars Scene',
      position: -0.75
    }
  }
}
