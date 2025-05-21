import { useEffect, useRef, useState } from 'react';
import './index.css';
import Project from './components/project';
import { ArrowDown } from 'phosphor-react';

export default function App() {
  const bubbleRef = useRef(null);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const interBubble = bubbleRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    const onMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    const handleScroll = () => {
      setAtTop(window.scrollY <= 10); // anything above 10px hides the arrow
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', handleScroll);
    move();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className="gradient-bg fixed top-0 left-0 w-screen h-screen z-[-1]">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" ref={bubbleRef}></div>
        </div>
      </div>
      <section className="min-h-screen flex flex-col items-center justify-center text-center gap-4 z-10">
        <h1 className="font-anton text-6xl md:text-8xl text-white">
          heres my stuff
        </h1>
        <h2 className="font-anton text-4xl md:text-6xl text-white">
          (connor baltich)
        </h2>
      </section>
      <section className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Project
            link='https://liminal-eosin.vercel.app/'
            image='/images/liminal.png'
            title='Liminal'
            description='a game made in three.js'
          />
          <Project
            link='https://time-traveler.vercel.app/'
            image='/images/time-traveler.png'
            title='Time Traveler'
            description='do you have the same song on reapeat... i do.'
          />
          <Project
            link='https://bindaddy-util.vercel.app/'
            image='/images/bd-util.png'
            title='BD-Util'
            description='client management tool for bindaddy'
          />
          <Project
            link='https://github.com/CanadianBleach/Unity-Weapon-Package'
            image='/images/unity-weapons-package.png'
            title='Unity Weapons Package'
            description='unity weapon management utility'
          />
        </div>
      </section>
      <div
        className={`fixed bottom-4 left-1/2 m-4 -translate-x-1/2 z-20 text-white transition-opacity duration-500 ${atTop ? 'opacity-100' : 'opacity-0'
          } animate-bounce`}
      >
        <ArrowDown size={44} />
      </div>
    </>
  );
}
