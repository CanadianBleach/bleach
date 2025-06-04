import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import React from 'react';

const typeColors = {
  project: '#ff69b4',
  skill: '#1e90ff',
  tool: '#32cd32',
};

export default function NodeStar({
  node,
  index,
  total,
  innerRef,
  isHovered,
  isConnected,
  setHoveredNodeId,
}) {
  const groupRef = innerRef || useRef();
  const sphereRef = useRef();
  const textRef = useRef();
  const { camera } = useThree();

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / (total - 1)) * 2;
  const radius = 8;
  const distance = Math.sqrt(1 - y * y);
  const theta = goldenAngle * index;
  const x = Math.cos(theta) * distance;
  const z = Math.sin(theta) * distance;
  const position = [x * radius, y * radius, z * radius];

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(...position);
      groupRef.current.userData.type = 'star';
      groupRef.current.layers.set(0);
    }
    if (textRef.current) {
      textRef.current.userData.type = 'text';
      textRef.current.layers.set(1);
    }
    if (sphereRef.current?.material) {
      sphereRef.current.material.emissiveIntensity = 0.6;
    }
  }, []);

  useFrame(() => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  const baseColor = typeColors[node.type] || '#ffffff';

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHoveredNodeId(node.id)}
      onPointerOut={() => setHoveredNodeId(null)}
    >
      <mesh ref={sphereRef}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color={isHovered || isConnected ? 'yellow' : baseColor}
          emissive={isHovered || isConnected ? 'yellow' : baseColor}
          emissiveIntensity={0.9}
        />
      </mesh>
      <Text
        ref={textRef}
        fontSize={0.6}
        color={isHovered || isConnected ? 'yellow' : baseColor}
        anchorX="center"
        anchorY="middle"
        position={[0, 0.8, 0]}
      >
        {node.label}
      </Text>
    </group>
  );
}