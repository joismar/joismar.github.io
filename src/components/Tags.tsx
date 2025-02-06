import React from 'react';
import Tag from './Tag';

interface Props {
	tags: string[];
	withHref?: boolean;
}

export const Tags: React.FC<Props> = ({ tags, withHref }) => {
	return (
		<div className="flex flex-wrap">
			{tags.map((tag: string) => {
				const element = <Tag tag={tag} withHref={withHref} />;
				return withHref ? <a href={`/tags/${tag}`}>{element}</a> : element;
			})}
		</div>
	);
};

export default Tags;