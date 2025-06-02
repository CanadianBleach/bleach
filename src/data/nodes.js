// /data/nodes.js
export const graphData = {
  nodes: [
    // Projects
    { id: 'liminal', type: 'project', label: 'Liminal' },
    { id: 'unity', type: 'project', label: 'Unity Game' },
    { id: 'binDaddy', type: 'project', label: 'Bin Daddy' },
    { id: 'aiWebcam', type: 'project', label: 'AI Webcam Deepfake' },
    { id: 'tagSphere', type: 'project', label: 'Tag Sphere' },
    { id: 'constellationSite', type: 'project', label: '3D Portfolio Site' },

    // Skills
    { id: 'threejs', type: 'skill', label: 'Three.js' },
    { id: 'react', type: 'skill', label: 'React' },
    { id: 'csharp', type: 'skill', label: 'C#' },
    { id: 'javascript', type: 'skill', label: 'JavaScript' },
    { id: 'python', type: 'skill', label: 'Python' },
    { id: 'css', type: 'skill', label: 'CSS' },
    { id: 'ai', type: 'skill', label: 'AI/ML' },

    // Tools/Technologies
    { id: 'vite', type: 'tool', label: 'Vite' },
    { id: 'rapier', type: 'tool', label: 'Rapier Physics' },
    { id: 'freecad', type: 'tool', label: 'FreeCAD' },
    { id: 'nodejs', type: 'tool', label: 'Node.js' }
  ],
  edges: [
    // Liminal project
    { from: 'liminal', to: 'threejs' },
    { from: 'liminal', to: 'react' },
    { from: 'liminal', to: 'javascript' },
    { from: 'liminal', to: 'vite' },

    // Unity Game
    { from: 'unity', to: 'csharp' },

    // Bin Daddy
    { from: 'binDaddy', to: 'react' },
    { from: 'binDaddy', to: 'javascript' },
    { from: 'binDaddy', to: 'css' },

    // AI Webcam
    { from: 'aiWebcam', to: 'python' },
    { from: 'aiWebcam', to: 'ai' },
    { from: 'aiWebcam', to: 'javascript' },

    // Tag Sphere
    { from: 'tagSphere', to: 'threejs' },
    { from: 'tagSphere', to: 'vite' },

    // 3D Portfolio Site
    { from: 'constellationSite', to: 'threejs' },
    { from: 'constellationSite', to: 'react' },
    { from: 'constellationSite', to: 'rapier' },

    // General connections
    { from: 'react', to: 'javascript' },
    { from: 'threejs', to: 'javascript' },
    { from: 'vite', to: 'nodejs' },
    { from: 'rapier', to: 'threejs' },
    { from: 'freecad', to: 'python' }
  ]
};