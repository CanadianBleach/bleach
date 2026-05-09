import { useFrame, useThree } from "@react-three/fiber";
import usePrefersDarkMode from "../hooks/usePrefersDarkMode";
import { useEffect, useRef } from "react";

import NodeStar from "./NodeStar";
import ConstellationLines from "./ConstellationLines";

import { OrbitControls, Stars } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import { graphData } from "../data/nodes";

export function SceneContent({
    nodeRefs,

    orbitEnabled,

    activeNodeId,
    setActiveNodeId,

    hoveredLineIndex,
    setHoveredLineIndex,

    selectedProject,
    setSelectedProject,
}) {
    const isDark = usePrefersDarkMode();

    const { camera } = useThree();

    const groupRef = useRef();

    useEffect(() => {
        camera.layers.enable(0);
        camera.layers.enable(1);
    }, [camera]);

    // Slow floating motion
    useFrame((state) => {
        if (!groupRef.current) return;

        groupRef.current.rotation.y =
            Math.sin(state.clock.elapsedTime * 0.15) * 0.15;

        groupRef.current.rotation.x =
            Math.cos(state.clock.elapsedTime * 0.1) * 0.05;
    });

    return (
        <>
            <ambientLight intensity={0.3} />

            <pointLight
                position={[10, 10, 10]}
                intensity={2}
            />

            <group ref={groupRef}>

                {graphData.nodes.map((node, i) => (

                    <NodeStar
                        key={node.id}

                        node={node}

                        index={i}
                        total={graphData.nodes.length}

                        innerRef={nodeRefs[node.id]}

                        activeNodeId={activeNodeId}
                        setActiveNodeId={setActiveNodeId}

                        isHighlighted={
                            activeNodeId === node.id ||
                            graphData.edges.some(
                                (e) =>
                                    (
                                        e.from === activeNodeId &&
                                        e.to === node.id
                                    ) ||
                                    (
                                        e.to === activeNodeId &&
                                        e.from === node.id
                                    )
                            )
                        }

                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                    />
                ))}

                <ConstellationLines
                    nodeRefs={nodeRefs}

                    darkMode={isDark}

                    activeNodeId={activeNodeId}
                    setActiveNodeId={setActiveNodeId}

                    hoveredLineIndex={hoveredLineIndex}
                    setHoveredLineIndex={setHoveredLineIndex}
                />

            </group>

            {/* Background stars */}
            <Stars
                radius={120}
                depth={60}
                count={600}
                factor={2}
                fade
                speed={0.3}
            />

            {/* Mid layer */}
            <Stars
                radius={100}
                depth={50}
                count={400}
                factor={3}
                fade
                speed={0.6}
            />

            {/* Foreground shimmer */}
            <Stars
                radius={80}
                depth={40}
                count={200}
                factor={5}
                fade
                speed={1.2}
            />

            {orbitEnabled && (
                <OrbitControls
                    enableZoom={false}
                    enablePan
                    enableRotate
                />
            )}

            <EffectComposer>
                <Bloom
                    luminanceThreshold={0}
                    luminanceSmoothing={0.5}
                    intensity={0.25}
                />
            </EffectComposer>
        </>
    );
}