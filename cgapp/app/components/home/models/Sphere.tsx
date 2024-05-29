'use client'
import React, { useState } from 'react'
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useRef  } from 'react';
import { Mesh } from 'three';
import { Text, OrbitControls, useCursor } from '@react-three/drei';

interface ModelType {
  clicked: Record<string, any>;
  setClicked: (obj: Record<string, any>) => void;
}

function Object({clicked, setClicked}: ModelType) {
    const sphereRef = useRef<Mesh>(null!);
    const [hovered, setHovered] = useState<any>()
    useCursor(hovered)

    useFrame(() => {
        if (!clicked.sphere) {
          sphereRef.current.rotation.y += 0.01;
        } 
    })

    useThree(({ camera }) => {
        camera.rotation.set(THREE.MathUtils.degToRad(-8), 0, 0);
    });

    return (
        <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick = {() => setClicked({...clicked, sphere: true})} ref = {sphereRef} >
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color="grey" />
        </mesh>
    );
}

export const Sphere = ({clicked, setClicked} : ModelType) => {
  return (
      <Canvas camera = {{
        fov: 50,
        }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Object clicked = {clicked} setClicked = {setClicked}/>
      </Canvas> 
  )
}

// Version that pops up when clicked
export const SphereZoom = ({clicked, setClicked}: ModelType) => {
  return (
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
      Movie: Sphere   Character: Sphere
    </Text>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

    <OrbitControls zoomSpeed = {0.5} rotateSpeed={0.5}/>
        <Object clicked = {clicked} setClicked = {setClicked}/>
    </Canvas>
    
  )
}