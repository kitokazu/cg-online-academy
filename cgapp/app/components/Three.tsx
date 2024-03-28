'use client'
import React from 'react'
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useRef } from 'react';
import { Mesh } from 'three';

function Box() {
    const boxRef = useRef<Mesh>(null!);

    useFrame(() => {
        boxRef.current.rotation.y += 0.01;
    })

    useThree(({ camera }) => {
        camera.rotation.set(THREE.MathUtils.degToRad(-8), 0, 0);
      });
    return (
        <mesh ref = {boxRef}>
            <boxGeometry args={[3,3,3]} />
            <meshStandardMaterial color="grey" />
        </mesh>
    );
}
const Three = () => {
  return (
    <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box />
    </Canvas>
  )
}

export default Three
