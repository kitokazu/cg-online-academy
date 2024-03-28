

// --------------------------------------------------

// NOT IN USE, FOR REFERENCE

'use client'
import React from 'react';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const ThreeScene = () => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio )
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current?.appendChild(renderer.domElement);
        camera.position.z = 30;
    // Render the scene and camera
        const geometry = new THREE.TorusGeometry(10,3,16,100);
        const material = new THREE.MeshLambertMaterial({ color: 0xFF6347 });
        const cube = new THREE.Mesh(geometry, material);
        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        scene.add( light );
        scene.add(cube);
        //const controls = new OrbitControls(camera, renderer.domElement)
        const renderScene = () => {
            cube.rotation.y += 0.01;
            //controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(renderScene);
          };
          
          // Call the renderScene function to start the animation loop
        renderScene();
      

      }
    }, []);
  
    return <div ref={containerRef} />;
  };
  
  export default ThreeScene;