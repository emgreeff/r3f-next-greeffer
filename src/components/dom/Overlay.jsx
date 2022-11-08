import { useControls } from 'leva'

export default function Overlay({ children }) {
  // useControls(
  //   { children }
  // )
  return (
    <div className='tracking-wider'>
      <p className='hidden mb-8 md:block'>{children}</p>
    </div>
  )
}
