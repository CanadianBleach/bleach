import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useMemo, useState } from 'react';
import NodeStar from './NodeStar';
import ConstellationLines from './ConstellationLines';
import { graphData } from '../data/nodes';
import React from 'react';
import ConstellationInfo from './ConstellationInfo';
import { SceneContent } from './SceneContent';

export default function ConstellationCanvas({
  selectedProject,
  setSelectedProject,
  activeNodeId,
  setActiveNodeId,
  orbitEnabled = true,
  showInfo,
  setShowInfo,
}) {
  const [hoveredLineIndex, setHoveredLineIndex] = useState(null);

  const nodeRefs = useMemo(() => {
    const refs = {};
    graphData.nodes.forEach((node) => {
      refs[node.id] = { current: null };
    });
    return refs;
  }, []);

  return (
    <div className="relative w-full h-full">

      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        gl={{ alpha: true }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          transform: 'translateZ(0)',
        }}
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

          activeNodeId={activeNodeId}
          setActiveNodeId={setActiveNodeId}

          hoveredLineIndex={hoveredLineIndex}
          setHoveredLineIndex={setHoveredLineIndex}

          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </Canvas>

      {showInfo && (
        <ConstellationInfo
          onClose={() => setShowInfo(false)}
        />
      )}

    </div>
  );
}