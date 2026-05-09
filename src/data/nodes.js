// /data/nodes.js
export const graphData = {
  nodes: [
    // Projects
    {
      id: 'bleach',
      type: 'project',
      label: 'Bleach',
      title: 'Bleach',
      description:
        'A personal portfolio and experimental web project focused on immersive UI and interactive experiences.',
      tech: ['React', 'Three.js', 'Vite'],
      url: 'https://github.com/CanadianBleach/bleach',
    },

    {
      id: 'liminal',
      type: 'project',
      label: 'Liminal',
      title: 'Liminal',
      description:
        'An atmospheric 3D web experience built around exploration, mood, and physics-based interaction.',
      tech: ['Three.js', 'Rapier', 'JavaScript'],
      url: 'https://github.com/CanadianBleach/Liminal',
    },

    {
      id: 'timeTraveler',
      type: 'project',
      label: 'Time Traveler',
      title: 'Time Traveler',
      description:
        'A music-focused timeline app integrating Spotify APIs and dynamic React interfaces.',
      tech: ['React', 'Spotify API', 'CSS'],
      url: 'https://github.com/CanadianBleach/time-traveler',
    },

    {
      id: 'bdUtil',
      type: 'project',
      label: 'BD-Util',
      title: 'BD-Util',
      description:
        'A utility platform with mapping tools, database integration, and modern web tooling.',
      tech: ['Next.js', 'MongoDB', 'Leaflet'],
      url: 'https://github.com/CanadianBleach/bd-util',
    },

    {
      id: 'unityWeapons',
      type: 'project',
      label: 'Unity Weapon Package',
      title: 'Unity Weapon Package',
      description:
        'A modular FPS weapon system package built in Unity using C#.',
      tech: ['Unity', 'C#'],
      url: 'https://github.com/CanadianBleach/Unity-Weapon-Package',
    },

    // Skills
    { id: 'react', type: 'skill', label: 'React' },
    { id: 'threejs', type: 'skill', label: 'Three.js' },
    { id: 'javascript', type: 'skill', label: 'JavaScript' },
    { id: 'nodejs', type: 'skill', label: 'Node.js' },
    { id: 'python', type: 'skill', label: 'Python' },
    { id: 'csharp', type: 'skill', label: 'C#' },
    { id: 'css', type: 'skill', label: 'CSS' },
    { id: 'sql', type: 'skill', label: 'SQL' },
    { id: 'mongodb', type: 'skill', label: 'MongoDB' },
    { id: 'express', type: 'skill', label: 'Express' },
    { id: 'ai', type: 'skill', label: 'AI/ML' },

    // Tools
    { id: 'vite', type: 'tool', label: 'Vite' },
    { id: 'leaflet', type: 'tool', label: 'Leaflet' },
    { id: 'spotifyApi', type: 'tool', label: 'Spotify API' },
    { id: 'rapier', type: 'tool', label: 'Rapier' },
    { id: 'nextjs', type: 'tool', label: 'Next.js' },
    { id: 'unity', type: 'tool', label: 'Unity' }
  ],
  edges: [
    // Bleach
    { from: 'bleach', to: 'react' },
    { from: 'bleach', to: 'threejs' },
    { from: 'bleach', to: 'vite' },
    { from: 'bleach', to: 'css' },
    { from: 'bleach', to: 'javascript' },

    // Liminal
    { from: 'liminal', to: 'threejs' },
    { from: 'liminal', to: 'rapier' },
    { from: 'liminal', to: 'css' },
    { from: 'liminal', to: 'javascript' },
    { from: 'liminal', to: 'vite' },


    // Time Traveler
    { from: 'timeTraveler', to: 'react' },
    { from: 'timeTraveler', to: 'spotifyApi' },
    { from: 'timeTraveler', to: 'css' },
    { from: 'timeTraveler', to: 'javascript' },
    { from: 'timeTraveler', to: 'vite' },


    // BD-Util
    { from: 'bdUtil', to: 'nextjs' },
    { from: 'bdUtil', to: 'mongodb' },
    { from: 'bdUtil', to: 'react' },
    { from: 'bdUtil', to: 'leaflet' },
    { from: 'bdUtil', to: 'css' },
    { from: 'bdUtil', to: 'javascript' },
    { from: 'bdUtil', to: 'vite' },


    // Unity Weapon Package
    { from: 'unityWeapons', to: 'csharp' },
    { from: 'unityWeapons', to: 'unity' },

    // Shared tech
    { from: 'react', to: 'javascript' },
    { from: 'nodejs', to: 'express' },
    { from: 'nodejs', to: 'mongodb' },
    { from: 'sql', to: 'nodejs' },
    { from: 'vite', to: 'react' },
    { from: 'threejs', to: 'javascript' },
    { from: 'css', to: 'react' },
    { from: 'python', to: 'ai' }
  ]
};