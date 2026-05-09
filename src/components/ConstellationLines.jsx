import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { graphData } from '../data/nodes';
import React from 'react';

export default function ConstellationLines({
  nodeRefs,
  darkMode,

  activeNodeId,
  setActiveNodeId,

  hoveredLineIndex,
  setHoveredLineIndex,
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
          fromRef.current.position.x,
          fromRef.current.position.y,
          fromRef.current.position.z,

          toRef.current.position.x,
          toRef.current.position.y,
          toRef.current.position.z
        ]);

        line.geometry.setAttribute(
          'position',
          new THREE.BufferAttribute(pos, 3)
        );

        line.geometry.attributes.position.needsUpdate = true;

        line.geometry.computeBoundingSphere();
      }
    });
  });

  return (
    <>
      {graphData.edges.map(({ from, to }, i) => {

        const isHovered =
          hoveredLineIndex === i;

        const isConnected =
          activeNodeId &&
          (
            from === activeNodeId ||
            to === activeNodeId
          );

        const highlighted =
          isHovered ||
          isConnected;

        return (
          <line
            key={i}

            raycastPriority={1}

            ref={(el) => (lineRefs.current[i] = el)}

            onPointerOver={(e) => {
              e.stopPropagation();

              setHoveredLineIndex(i);

              // Persist active constellation
              setActiveNodeId(from);
            }}

            onPointerOut={(e) => {
              e.stopPropagation();

              setHoveredLineIndex(null);

              // Do NOT clear active node anymore
            }}
          >
            <bufferGeometry />

            <lineBasicMaterial
              color={
                highlighted
                  ? 'yellow'
                  : darkMode
                    ? 'white'
                    : 'black'
              }

              transparent

              opacity={
                highlighted
                  ? 1
                  : 0.2
              }

              depthTest={true}

              depthWrite={false}
            />
          </line>
        );
      })}
    </>
  );
}