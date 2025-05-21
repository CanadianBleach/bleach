import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Project({ link, title, description, image }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-72 md:h-80 m-4 rounded-2xl overflow-hidden border border-black/10 dark:border-white/20 block shadow-md hover:shadow-xl transition-shadow duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={image}
                alt={title}
                className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${hovered ? 'blur-0' : 'blur-sm'
                    }`}
            />
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6
                transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <h3 className="text-3xl font-bold drop-shadow-lg">{title}</h3>
                <p className="text-base mt-3 drop-shadow-lg">{description}</p>
            </div>
        </a>
    );
}

Project.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
