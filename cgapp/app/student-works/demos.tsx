'use client'

import { ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Overlay } from '../components/student-works/Overlay'
import { TestBox } from '../components/student-works/TestBox'

const Demos = () => {
  return (
    <section className = "bg-neutral-300 h-screen">
        <Canvas camera = {{
        fov: 75,
        position: [0,4,6]
        }}>
        {/* Lighting Conrols */}
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

        {/* Components affected by scrolling */}
        <ScrollControls pages={3} damping={0.1}>
            <Overlay />
            <TestBox  />
        </ScrollControls>
    </Canvas>
   </section>
  )
}

export default Demos
