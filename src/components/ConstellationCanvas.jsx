import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useEffect, useMemo, useState } from 'react';
import NodeStar from './NodeStar';
import ConstellationLines from './ConstellationLines';
import { graphData } from '../data/nodes';
import React from 'react';
import usePrefersDarkMode from '../hooks/usePrefersDarkMode';

export default function ConstellationCanvas({ orbitEnabled = true }) {
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [hoveredLineIndex, setHoveredLineIndex] = useState(null);

  const nodeRefs = useMemo(() => {
    const refs = {};
    graphData.nodes.forEach((node) => {
      refs[node.id] = { current: null };
    });
    return refs;
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 75 }}
      gl={{ alpha: true }}
      onCreated={({ camera, scene }) => {
        camera.layers.enable(0);
        camera.layers.enable(1);
        scene.traverse((obj) => {
          if (obj.userData.type === 'star') obj.layers.set(0);
          if (obj.userData.type === 'text') obj.layers.set(1);
        });
      }}
    >
      <SceneContent
        nodeRefs={nodeRefs}
        orbitEnabled={orbitEnabled}
        hoveredNodeId={hoveredNodeId}
        setHoveredNodeId={setHoveredNodeId}
        hoveredLineIndex={hoveredLineIndex}
        setHoveredLineIndex={setHoveredLineIndex}
      />
    </Canvas>
  );
}

function SceneContent({
  nodeRefs,
  orbitEnabled,
  hoveredNodeId,
  setHoveredNodeId,
  hoveredLineIndex,
  setHoveredLineIndex,
}) {
  const isDark = usePrefersDarkMode();
  const { camera } = useThree();

  useEffect(() => {
    camera.layers.enable(0);
    camera.layers.enable(1);
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
          isHovered={hoveredNodeId === node.id}
          isConnected={
            hoveredNodeId &&
            graphData.edges.some(
              (e) =>
                (e.from === hoveredNodeId && e.to === node.id) ||
                (e.to === hoveredNodeId && e.from === node.id)
            )
          }
          setHoveredNodeId={setHoveredNodeId}
        />
      ))}

      <ConstellationLines
        nodeRefs={nodeRefs}
        darkMode={isDark}
        hoveredNodeId={hoveredNodeId}
        hoveredLineIndex={hoveredLineIndex}
        setHoveredLineIndex={setHoveredLineIndex}
        setHoveredNodeId={setHoveredNodeId}
      />

      <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />

      {orbitEnabled && <OrbitControls enableZoom={false} enablePan enableRotate />}

      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} intensity={0.25} />
      </EffectComposer>
    </>
  );
}