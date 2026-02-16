import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useFBX, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 300;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c46a72"
        transparent
        opacity={0.25}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FBXModel() {
  const groupRef = useRef<THREE.Group>(null);
  const fbx = useFBX('/Male_Real.fbx');

  useEffect(() => {
    if (!fbx) return;
    // Apply a consistent material to the model
    const material = new THREE.MeshStandardMaterial({
      color: '#b0a08a',
      roughness: 0.45,
      metalness: 0.3,
      transparent: true,
      opacity: 0.35,
    });
    fbx.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = material;
      }
    });

    // Center the model based on its bounding box
    const box = new THREE.Box3().setFromObject(fbx);
    const center = box.getCenter(new THREE.Vector3());
    fbx.position.sub(center);
  }, [fbx]);

  const { viewport } = useThree();

  // Responsive: adapt position and scale to viewport width
  const responsive = useMemo(() => {
    const vw = viewport.width;
    // viewport.width is in Three.js world units (~14 at fov 60, z=8 on desktop)
    if (vw < 8) {
      // Mobile: center the model, smaller, push it back
      return { posX: 0, posY: -1, posZ: -3, sizeFactor: 4 };
    } else if (vw < 12) {
      // Tablet: slightly right, medium size
      return { posX: 3, posY: -0.5, posZ: -2, sizeFactor: 5.5 };
    }
    // Desktop: full right, large
    return { posX: 5, posY: -0.5, posZ: -1, sizeFactor: 7 };
  }, [viewport.width]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.4 + 0.3;
    groupRef.current.position.y = responsive.posY + Math.sin(state.clock.elapsedTime * 0.25) * 0.2;
  });

  // Compute scale to normalize model size
  const scale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(fbx);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    return maxDim > 0 ? responsive.sizeFactor / maxDim : 1;
  }, [fbx, responsive.sizeFactor]);

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={groupRef} position={[responsive.posX, responsive.posY, responsive.posZ]} scale={scale}>
        <primitive object={fbx} />
      </group>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-3, 2, 4]} intensity={0.4} color="#c46a72" />
        <pointLight position={[0, -3, 3]} intensity={0.3} color="#c46a72" />
        <FloatingParticles />
        <FBXModel />
      </Canvas>
    </div>
  );
}
