import React from 'react';
import Tag from './Tag';

interface Props {
	tags: string[];
	centralized?: boolean;
	withHref?: boolean;
}

export const Tags: React.FC<Props> = ({ tags, withHref, centralized }) => {
	const justify = centralized ? 'justify-center' : '';
	return (
		<div className={`flex flex-wrap gap-1 ${justify}`}>
			{tags.map((tag: string) => {
				const element = <Tag tag={tag} withHref={withHref} key={tag} />;
				return withHref ? <a href={`/tags/${tag}`}>{element}</a> : element;
			})}
		</div>
	);
};

export default Tags;