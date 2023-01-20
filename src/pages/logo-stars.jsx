import dynamic from 'next/dynamic'
import Overlay from '@/components/dom/Overlay'
// import Logo from '@/components/canvas/Logo'
// import StarsScene from '@/components/canvas/Stars'
const StarsScene = dynamic(() => import('@/components/canvas/Stars'), { ssr: false })
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

export default function Page(props) {
  return (
    <Overlay />
  )
}


function LogoScene(props) {

  return (
    <>      
      <Logo scale={ props.logoScale } route='/stars' position-y={ props.logoPosition } />
      <StarsScene position-y={ props.position } />
    </>

  )
}

Page.canvas = (props) => <LogoScene position-y={-1} />


export async function getStaticProps() {

  return {
    props: {
      title: 'Logo Stars',
      starsPosition: -0.75,
      logoPosition: -0.75,
      logoScale: 0.5,
    }
  }
}
