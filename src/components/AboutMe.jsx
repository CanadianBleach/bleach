import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-5xl font-bold mb-6">(about me)</h2>

      {/* Intro line */}
      <p className="max-w-2xl text-2xl mb-8">
        I’ve developed a practical, hands-on approach to solving problems and supporting day-to-day operations. With experience across IT
        support, web development, and technical systems management, I am excited for the opportunity to bring that same reliability,
        curiosity, and willingness to learn to your team.
      </p>

      {/* Socials */}
      <div className="flex gap-8 mb-12">
        <a href="https://github.com/CanadianBleach" target="_blank" rel="noopener noreferrer">
          <FaGithub size={38} className="hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/connorbaltich" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={38} className="hover:text-blue-400 transition-colors" />
        </a>
      </div>

      {/* Extended bio */}
      <div className="max-w-2xl text-lg leading-relaxed">
        <p className="mb-4">
          I’ve always enjoyed being the person people turn to when something technical stops working or needs a better solution. From helping
          customers troubleshoot devices and understand unfamiliar technology to building internal tools and managing business websites,
        </p>
      </div>
    </section>
  );
}