export default function ProjectCard({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative w-[90%] max-w-xl rounded-3xl border border-white/10 bg-black/60 p-8 text-white shadow-2xl backdrop-blur-xl">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl transition"
                >
                    ×
                </button>

                <h2 className="text-4xl font-bold mb-4">
                    {project.title}
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech?.map((item) => (
                        <span
                            key={item}
                            className="px-3 py-1 rounded-full bg-white/10 text-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {project.url && (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 rounded-full bg-white text-black hover:scale-105 transition"
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
}