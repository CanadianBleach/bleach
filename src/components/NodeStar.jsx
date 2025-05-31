import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import React from 'react';

export default function NodeStar({ node, index, total, innerRef }) {
  const groupRef = innerRef || useRef(); // fallback in case parent doesn't provide it
  const sphereRef = useRef();
  const textRef = useRef();
  const { camera } = useThree();

  // Position using Fibonacci sphere
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / (total - 1)) * 2;
  const radius = 8;
  const distance = Math.sqrt(1 - y * y);
  const theta = goldenAngle * index;
  const x = Math.cos(theta) * distance;
  const z = Math.sin(theta) * distance;
  const position = [x * radius, y * radius, z * radius];

  const starColors = ['#ffffff', '#ffd700', '#ff4500', '#00bfff', '#87cefa']; // white, gold, red-orange, deep sky blue, light blue
  const starColor = starColors[index % starColors.length];

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(...position);
      groupRef.current.userData.type = 'star';
      groupRef.current.layers.set(0); // Bloom layer
    }

    if (textRef.current) {
      textRef.current.userData.type = 'text';
      textRef.current.layers.set(1); // No bloom
    }

    if (sphereRef.current?.material) {
      sphereRef.current.material.emissive = new THREE.Color(starColor);
      sphereRef.current.material.emissiveIntensity = 0.6;
    }
  }, []);

  useFrame(() => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        ref={sphereRef}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = 'default')}
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color={starColor}
          emissive={starColor}
          emissiveIntensity={0.9}
        />
      </mesh>
      <Text
        ref={textRef}
        fontSize={0.6}
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, 0.8, 0]}
      >
        {node.label}
      </Text>
    </group>
  );
}