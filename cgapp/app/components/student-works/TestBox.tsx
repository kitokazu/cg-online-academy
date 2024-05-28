import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useScroll, ScrollControls, Scroll, OrbitControls } from '@react-three/drei'
import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';


function Box(props:any) {
    const boxRef = useRef<Mesh>(null!);


    useFrame(() => {
         boxRef.current.rotation.y += 0.01;

     })

    return (
        <mesh {...props} ref = {boxRef}>
            <boxGeometry  args={[1.2,1.2,1.2]} />
            <meshStandardMaterial color="grey" />
        </mesh>
    );
}

export function TestBox() {

    const { viewport } = useThree();
    const boxPositionX = -(viewport.width / 2); 
    const boxPositionY = -(viewport.height / 2);
   

    return (
        <Scroll>
            <group>
                <Box position={[boxPositionX + 4.5, boxPositionY + 8,0]} />

                <Box position={[boxPositionX + 6.5, boxPositionY + 8,-2]} />
            </group>

            <group>
                <Box position={[boxPositionX + 4.5*3, boxPositionY-4 ,0]} />

                <Box position={[boxPositionX + 6.5*3, boxPositionY-4,-2]} />
            </group>

            <group>
                <Box position={[boxPositionX + 4.5,boxPositionY-16,0]} />

                <Box position={[boxPositionX + 6.5,boxPositionY-16,-2]} />
            </group>

        </Scroll>
    );
}