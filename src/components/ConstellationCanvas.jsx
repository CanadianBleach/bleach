import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useRef, useEffect } from 'react';
import NodeStar from './NodeStar';
import ConstellationLines from './ConstellationLines';
import { graphData } from '../data/nodes';
import React from 'react';

export default function ConstellationCanvas({ orbitEnabled = true }) {
  // Create refs for all nodes (no hooks inside hooks)
  const nodeRefs = {};
  graphData.nodes.forEach((node) => {
    nodeRefs[node.id] = useRef();
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 75 }}
      gl={{ alpha: true }}
      onCreated={({ camera, scene }) => {
        camera.layers.enable(0); // Layer 0 = bloom
        camera.layers.enable(1); // Layer 1 = non-bloom (text)

        // Apply correct layers to objects after load
        scene.traverse((obj) => {
          if (obj.userData.type === 'star') obj.layers.set(0);
          if (obj.userData.type === 'text') obj.layers.set(1);
        });
      }}
    >
      <SceneContent nodeRefs={nodeRefs} orbitEnabled={orbitEnabled} />
    </Canvas>
  );
}

function SceneContent({ nodeRefs, orbitEnabled }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.layers.enable(0); // Bloom layer
    camera.layers.enable(1); // No bloom for text
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} />

      {graphData.nodes.map((node, i) => (
        <NodeStar
          key={node.id}
          node={node}
          index={i}
          total={graphData.nodes.length}
          innerRef={nodeRefs[node.id]}
        />
      ))}

      <ConstellationLines nodeRefs={nodeRefs} />

      <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />

      {orbitEnabled && (
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
      )}

      {/* 🎆 Postprocessing only on layer 0 */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.5}
          intensity={.25}
        />
      </EffectComposer>
    </>
  );
}