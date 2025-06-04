import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { graphData } from '../data/nodes';
import React from 'react';

export default function ConstellationLines({
  nodeRefs,
  darkMode,
  hoveredNodeId,
  hoveredLineIndex,
  setHoveredLineIndex,
  setHoveredNodeId,
}) {
  const lineRefs = useRef([]);

  useFrame(({ raycaster }) => {
    raycaster.params.Line.threshold = 0.1;

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
        line.geometry.computeBoundingSphere(); // ✅ Crucial for raycasting accuracy
      }
    });
  });


  return (
    <>
      {graphData.edges.map(({ from, to }, i) => {
        const isConnected = hoveredNodeId && (from === hoveredNodeId || to === hoveredNodeId);
        const isHovered = hoveredLineIndex === i;

        return (
          <line
          raycastPriority={1}
            key={i}
            ref={(el) => (lineRefs.current[i] = el)}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredLineIndex(i);
              setHoveredNodeId(from);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHoveredLineIndex(null);
              setHoveredNodeId(null);
            }}
          >
            <bufferGeometry />
            <lineBasicMaterial
              color={isHovered || isConnected ? 'yellow' : darkMode ? 'white' : 'black'}
              transparent
              opacity={isHovered || isConnected ? 1.0 : 0.4}
              depthTest={true} // Default is fine here
              depthWrite={false} // Prevent it from occluding other things
            />
          </line>
        );
      })}
    </>
  );
}