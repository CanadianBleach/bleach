export function GradientBackground({ blobRef }) {
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