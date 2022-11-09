import * as THREE from 'three'
import { extend, createRoot, events } from '@react-three/fiber'

// Register the THREE namespace as native JSX elements.
// See below for notes on tree-shaking
extend(THREE)

// Create a react root
const root = createRoot(document.querySelector('canvas'))

// Configure the root, inject events optionally, set camera, etc
root.configure({ events, camera: { position: [0, 0, 50] } })

// createRoot by design is not responsive, you have to take care of resize yourself
// window.addEventListener('resize', () => {
//   root.configure({ size: { width: window.innerWidth, height: window.innerHeight } })
// })

// Trigger resize
// window.dispatchEvent(new Event('resize'))

// Render entry point
// root.render(<App />)

// Unmount and dispose of memory
// root.unmount()
