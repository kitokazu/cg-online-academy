'use client'
import React, { useState } from 'react'
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useRef  } from 'react';
import { Mesh } from 'three';
import { Text, useCursor } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

interface ModelType {
  clicked: Record<string, any>;
  setClicked: (obj: Record<string, any>) => void;
}

function Box({clicked, setClicked}: ModelType) {
    const boxRef = useRef<Mesh>(null!);
    const [hovered, setHovered] = useState<any>()
    useCursor(hovered)
    
    useFrame(() => {
        if (!clicked.box) {
          boxRef.current.rotation.y += 0.01;
        } 
    })

    useThree(({ camera }) => {
        camera.rotation.set(THREE.MathUtils.degToRad(-8), 0, 0);
    });

    return (
        <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick = {() => setClicked({...clicked, box: true})} ref = {boxRef} >
            <boxGeometry args={[3.2,3.2, 3.2]} />
            <meshStandardMaterial color="grey" />
        </mesh>

    );
}

export const Three = ({clicked, setClicked} : ModelType) => {
  return (
      <Canvas camera = {{
        fov: 50,
        }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Box clicked = {clicked} setClicked = {setClicked} />
      </Canvas> 
  )
}

// Version that pops up when clicked
export const ThreeZoom = ({clicked, setClicked}: ModelType) => {
  return (
    <>
    <Canvas camera = {{
      fov: 50,
      position: [0,3,8]
      }}>
    <Text
      position={[0, 3, 0]}
      fontSize={0.6}
      color="white"
      anchorX="center"
      anchorY="top"
    >
      Movie: Box   Character: Box
    </Text>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <OrbitControls zoomSpeed = {0.5} rotateSpeed={0.5}/>
        <Box clicked = {clicked} setClicked = {setClicked}/>
    </Canvas>
    </>
    
  )
}

