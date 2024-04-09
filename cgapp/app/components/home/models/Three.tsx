'use client'
import React from 'react'
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

function Box() {

  //change modal to click instead, and then use the box as a child component
  //so the main three component has passses props to box to determine taht it is false/true

    const [clicked, setClicked] = useState<boolean>(false);

    const boxRef = useRef<Mesh>(null!);

    useFrame(() => {
        if (!clicked) {
          boxRef.current.rotation.y += 0.01;
        }
    })

    useThree(({ camera }) => {
        camera.rotation.set(THREE.MathUtils.degToRad(-8), 0, 0);
    });


    return (
        <mesh onClick = {() => setClicked(!clicked)} ref = {boxRef} >
            <boxGeometry args={[3.2,3.2, 3.2]} />
            <meshStandardMaterial color="grey" />
        </mesh>
    );
}

function Modal({modal, setModal} : {modal: boolean, setModal: (val:boolean) => boolean}) {
  return (
    <dialog open={modal} className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
                <button className="btn" onClick={() => setModal(false)}>Close</button>
            </div>
        </div>
    </dialog>
);
}
const Three = () => {
  return (
    <Canvas camera = {{
      fov: 50
      }}>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box />


    </Canvas>
  )
}

export default Three
