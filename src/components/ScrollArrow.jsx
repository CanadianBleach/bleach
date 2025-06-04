import { ArrowDown } from "phosphor-react";

export function ScrollArrow({ visible, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer mt-10 animate-bounce transition-opacity duration-500 text-black dark:text-white
            ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            <ArrowDown size={44} />
        </div>
    );
}