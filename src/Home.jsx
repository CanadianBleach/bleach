import { useEffect, useRef, useState } from 'react';
import './index.css';
import ConstellationCanvas from './components/ConstellationCanvas';
import AboutMe from './components/AboutMe';
import { ScrollArrow } from './components/ScrollArrow';
import { GradientBackground } from './components/GradientBackground';

export default function Home() {
    const bubbleRef = useRef(null);
    const [atTop, setAtTop] = useState(true);
    const constellationRef = useRef(null);
    const aboutRef = useRef(null);

    // Randomize blob styles
    useEffect(() => {
        const timeout = setTimeout(() => {
            const blobs = document.querySelectorAll('.blob');
            blobs.forEach((blob) => {
                const size = `${40 + Math.random() * 20}vw`;
                const top = `${Math.random() * 80}%`;
                const left = `${Math.random() * 80}%`;
                const blur = `${120 + Math.random() * 60}px`;
                const duration = `${30 + Math.random() * 30}s`;
                const opacity = 0.7 + Math.random() * 0.3;

                blob.style.width = size;
                blob.style.height = size;
                blob.style.top = top;
                blob.style.left = left;
                blob.style.filter = `blur(${blur})`;
                blob.style.animationDuration = duration;
                blob.style.opacity = opacity;
            });
        }, 50);

        return () => clearTimeout(timeout);
    }, []);

    // Mouse tracking + scroll detection
    useEffect(() => {
        const blob = bubbleRef.current;
        if (!blob) return;

        let curX = 0, curY = 0, tgX = 0, tgY = 0;

        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;

            // Adjust these if you tweak blob size or blur
            const offsetX = 100;
            const offsetY = 250;

            blob.style.transform = `translate(${Math.round(curX - offsetX)}px, ${Math.round(curY - offsetY)}px)`;
            requestAnimationFrame(move);
        };

        const handleMouseMove = (e) => {
            tgX = e.clientX;
            tgY = e.clientY;
        };

        const handleScroll = () => {
            setAtTop(window.scrollY <= 10);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <GradientBackground blobRef={bubbleRef} />

            {/* Hero Section */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center text-center gap-4 z-10 relative text-black dark:text-white">
                <h1 className="font-anton text-6xl md:text-8xl font-extrabold">
                    here’s my stuff
                </h1>
                <h2 className="font-anton text-4xl md:text-6xl font-semibold">
                    (connor baltich)
                </h2>
                {/* Scroll to constellation */}
                <ScrollArrow
                    visible={atTop}
                    onClick={() => constellationRef.current?.scrollIntoView({ behavior: 'smooth' })}
                />
            </section>

            {/* Constellation Section */}
            <section
                ref={constellationRef}
                className="w-screen h-screen relative overflow-visible z-0 flex flex-col justify-center items-center pb-16 pt-16"
            >
                <ConstellationCanvas />
                <ScrollArrow
                    visible={true}
                    onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
                />
            </section>

            {/* About Me Section */}
            <section
                ref={aboutRef}
                className="w-screen min-h-screen relative overflow-hidden z-0"
            >
                <AboutMe />
            </section>
        </>
    );
}
