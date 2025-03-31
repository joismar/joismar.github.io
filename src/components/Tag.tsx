import React from 'react';

interface Props {
    tag: string;
    withHref?: boolean;
    onClick?: () => void;
    isSelected?: boolean;
}

export const Tag: React.FC<Props> = ({ tag, withHref, onClick, isSelected }) => {
    return (
        <span
            onClick={onClick}
            className={`mb-2 mr-2 rounded-xl bg-stone-600 px-3 py-1 text-xs font-bold uppercase text-white group-hover:bg-stone-500 cursor-pointer ${
                withHref ? 'hover:bg-stone-500' : ''
            } ${isSelected ? 'bg-gradient' : ''}`}
        >
            #{tag}
        </span>
    );
};

export default Tag;