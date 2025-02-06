import Section from './Section';
import Card from './Card';
import { MarkdownInstance } from 'astro';
import { useEffect, useState } from 'react';
import { sortPostsByDate } from '@/utils/data.util';

type Props = {
	allPosts: MarkdownInstance<any>[];
}

export const LatestProjects: React.FC<Props> = ({ allPosts }) => {
	const [posts, setPosts] = useState<MarkdownInstance<any>[] | []>([]);

	useEffect(() => {
		const latestPosts = allPosts.slice(0, 3).sort(sortPostsByDate);

		setPosts(latestPosts);
	}, [allPosts]);
	
	const loadMore = (e: any) => {
		e.preventDefault();
		const nextPosts = allPosts.slice(posts.length, posts.length + 3).sort(sortPostsByDate);
		setPosts([...posts, ...nextPosts]);
	}

	return (
		<Section>
			<div className="flex justify-between pb-4">
				<p className="text-xl font-bold">Ultimos projetos</p>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
				{
					posts.map((post: any) => (
						<Card post={post} />
					))
				}
			</div>
			<div className="flex justify-center text-primary">
				{!(allPosts.length === posts.length) && <a href="" className="underline hover:text-orange-600" onClick={loadMore}>carregar mais →</a>}
			</div>
		</Section>
	)
}

