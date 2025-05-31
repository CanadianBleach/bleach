import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { graphData } from '../data/nodes';
import React from 'react';

export default function ConstellationLines({ nodeRefs }) {
  const lineRefs = useRef([]);

  useFrame(() => {
    graphData.edges.forEach(({ from, to }, i) => {
      const fromRef = nodeRefs[from];
      const toRef = nodeRefs[to];
      const line = lineRefs.current[i];

      if (fromRef?.current && toRef?.current && line) {
        const pos = new Float32Array([
          fromRef.current.position.x, fromRef.current.position.y, fromRef.current.position.z,
          toRef.current.position.x, toRef.current.position.y, toRef.current.position.z
        ]);
        line.geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        line.geometry.attributes.position.needsUpdate = true;
      }
    });
  });

  return (
    <>
      {graphData.edges.map((_, i) => (
        <line key={i} ref={(el) => (lineRefs.current[i] = el)}>
          <bufferGeometry />
          <lineBasicMaterial color="white" transparent opacity={0.4} />
        </line>
      ))}
    </>
  );
}