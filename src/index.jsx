import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene'
import { Physics } from '@react-three/cannon'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas>
      <Physics 
        broadphase="SAP"
        gravity={[0,-3.5,0]}>
          <Scene />
        </Physics>
    </Canvas>
  </React.StrictMode>,
)
