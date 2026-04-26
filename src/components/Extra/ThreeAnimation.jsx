import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = () => {
  const mesh = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Smooth mouse follow
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, mouse.x * 2.5, 0.1);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, mouse.y * 2.5, 0.1);
    
    // Rotation
    mesh.current.rotation.x = time * 0.2;
    mesh.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#2dd4bf" // teal-400
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive="#2dd4bf"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

const ParticleSystem = () => {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  const points = useRef();

  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#2dd4bf"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const ThreeAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#2dd4bf" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <FloatingShape />
        <ParticleSystem />
      </Canvas>
    </div>
  );
};

export default ThreeAnimation;
