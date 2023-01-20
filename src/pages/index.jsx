import dynamic from 'next/dynamic'
import Overlay from '@/components/dom/Overlay'



const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
// Dom components go here
export default function Page(props) {
  return (
    <Overlay />
  )
}











// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Logo scale={props.scale} route='/blob' position-y={props.position} />


export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
      position: -1,
      scale: 0.5


    }
  }
}
