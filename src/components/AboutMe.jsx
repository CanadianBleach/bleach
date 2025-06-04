import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-5xl font-bold mb-6">(about me)</h2>

      {/* Intro line */}
      <p className="max-w-2xl text-2xl mb-8">
        I'm a creative developer who loves building 3D experiences, experimenting with AI, and making cool stuff on the web.
        Always exploring, always learning.
      </p>

      {/* Socials */}
      <div className="flex gap-8 mb-12">
        <a href="https://github.com/CanadianBleach" target="_blank" rel="noopener noreferrer">
          <FaGithub size={38} className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/connorbaltich" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={38} className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://www.instagram.com/canadianbleach/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={38} className="hover:text-blue-400 transition-colors" />
        </a>
      </div>

      {/* Extended bio */}
      <div className="max-w-2xl text-lg leading-relaxed">
        <p className="mb-4">
          I’m based in Athens, GA and have been building for the web since 2018. My work spans interactive front-ends, AI integrations,
          physics simulations, and portfolio experiments — often blending React, Three.js, and visual storytelling.
        </p>
        <p>
          I’m constantly learning and tinkering, whether it’s designing immersive dev tools, writing shaders,
          or playing with automation in my homelab. I care about thoughtful interfaces and weird, wonderful digital experiences.
        </p>
      </div>
    </section>
  );
}