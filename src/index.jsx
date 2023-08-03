import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas>
      <Scene />
    </Canvas>
  </React.StrictMode>,
)
