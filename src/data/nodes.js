// /data/nodes.js
export const graphData = {
  nodes: [
    // Projects
    { id: 'bleach', type: 'project', label: 'Bleach', url: 'https://github.com/CanadianBleach/bleach' },
    { id: 'liminal', type: 'project', label: 'Liminal', url: 'https://liminal-nine.vercel.app/' },
    { id: 'timeTraveler', type: 'project', label: 'Time Traveler', url: 'https://github.com/CanadianBleach/time-traveler' },
    { id: 'bdUtil', type: 'project', label: 'BD-Util', url: 'https://github.com/CanadianBleach/bd-util/tree/main' },
    { id: 'unityWeapons', type: 'project', label: 'Unity Weapon Package', url: 'https://github.com/CanadianBleach/Unity-Weapon-Package' },

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

    // Time Traveler
    { from: 'timeTraveler', to: 'react' },
    { from: 'timeTraveler', to: 'spotifyApi' },
    { from: 'timeTraveler', to: 'css' },
    { from: 'timeTraveler', to: 'javascript' },

    // BD-Util
    { from: 'bdUtil', to: 'nextjs' },
    { from: 'bdUtil', to: 'mongodb' },
    { from: 'bdUtil', to: 'react' },
    { from: 'bdUtil', to: 'leaflet' },
    { from: 'bdUtil', to: 'css' },
    { from: 'bdUtil', to: 'javascript' },

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