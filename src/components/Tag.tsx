import React from 'react';

interface Props {
	tag: string;
	withHref?: boolean;
}

export const Tag: React.FC<Props> = ({ tag, withHref }) => {
	return (
		<span
			className={`mb-2 mr-2 rounded-xl bg-stone-600 px-3 py-1 text-xs font-bold uppercase text-white group-hover:bg-stone-500 ${
				withHref ? 'hover:bg-stone-500' : ''
			}`}
		>
			#{tag}
		</span>
	);
};

export default Tag;