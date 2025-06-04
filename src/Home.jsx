import { useEffect, useRef, useState } from 'react';
import './index.css';
import { ArrowDown } from 'phosphor-react';
import ConstellationCanvas from './components/ConstellationCanvas';
import React from 'react';

export default function Home() {
    const bubbleRef = useRef(null);
    const [atTop, setAtTop] = useState(true);
    const scrollTargetRef = useRef(null);

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
        }, 50); // Short delay to ensure DOM/layout is ready

        return () => clearTimeout(timeout);
    }, []);

    // Mouse tracking
    useEffect(() => {
        const blob = bubbleRef.current;
        if (!blob) return;

        let curX = 0,
            curY = 0,
            tgX = 0,
            tgY = 0;

        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            blob.style.transform = `translate(${Math.round(curX - 100)}px, ${Math.round(
                curY - 100
            )}px)`;
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

            <section className="min-h-screen w-full flex flex-col items-center justify-center text-center gap-4 z-10 relative text-black dark:text-white">
                <h1 className="font-anton text-6xl md:text-8xl font-extrabold">
                    here’s my stuff
                </h1>
                <h2 className="font-anton text-4xl md:text-6xl font-semibold">
                    (connor baltich)
                </h2>
            </section>

            <ScrollArrow visible={atTop} onClick={() => {
                scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth' });
            }} />

            <section ref={scrollTargetRef} className="w-screen h-screen relative overflow-hidden z-0">
                <ConstellationCanvas />
            </section>
        </>
    );
}

function GradientBackground({ blobRef }) {
    return (
        <div className="gradient-bg absolute top-0 left-0 w-screen z-[-1]" style={{ minHeight: '100%' }}>
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
                <div className="blob-layer">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className={`blob blob-${i}`} />
                    ))}
                    <div className="interactive" ref={blobRef} />
                </div>
            </div>
        </div>
    );
}

function ScrollArrow({ visible, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer fixed bottom-4 left-1/2 m-4 -translate-x-1/2 z-20 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'
                } text-black dark:text-white animate-bounce`}
        >
            <ArrowDown size={44} />
        </div>
    );
}