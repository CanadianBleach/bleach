import React from 'react';

export default function ConstellationInfo({ onClose }) {
    return (
        <div className="
            absolute inset-0 z-20
            flex items-center justify-center
            backdrop-blur-lg
            bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.12)_20%,rgba(0,0,0,0.18)_80%,transparent_100%)]
            fade-in
            pointer-events-none
        ">

            <div className="
                relative
                max-w-3xl
                px-8
                text-center
                text-white
                pointer-events-auto
            ">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="
                        absolute
                        -top-12
                        right-0
                        text-3xl
                        text-white/60
                        transition
                        hover:text-white
                    "
                >
                    ×
                </button>
                <h2 className="text-5xl md:text-6xl font-bold mb-10">
                    Explore the Constellation
                </h2>

                <div className="space-y-6 text-2xl text-white/80 leading-relaxed">

                    <p>
                        <span className="text-pink-400 font-semibold">
                            Pink nodes
                        </span>{' '}
                        represent projects.
                    </p>

                    <p>
                        <span className="text-blue-400 font-semibold">
                            Blue nodes
                        </span>{' '}
                        represent skills.
                    </p>

                    <p>
                        <span className="text-green-400 font-semibold">
                            Green nodes
                        </span>{' '}
                        represent tools & technologies.
                    </p>

                    <p>
                        Drag to rotate the constellation.
                    </p>

                    <p>
                        Click project nodes to learn more.
                    </p>

                </div>
            </div>
        </div>
    );
}