import Section from './Section';
import Card from './Card';
import TagFilter from './TagFilter';
import { MarkdownInstance } from 'astro';
import { useEffect, useState } from 'react';
import { sortPostsByDate } from '@/utils/data.util';
import { MAX_POSTS_TO_SHOW } from '@/utils/constants';

type Props = {
    allPosts: MarkdownInstance<any>[];
}

export const LatestProjects: React.FC<Props> = ({ allPosts }) => {
    const [posts, setPosts] = useState<MarkdownInstance<any>[] | []>([]);
    const [filteredPosts, setFilteredPosts] = useState<MarkdownInstance<any>[] | []>([]);
	const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const latestPosts = allPosts.slice(0, MAX_POSTS_TO_SHOW).sort(sortPostsByDate);
        setPosts(latestPosts);
        setFilteredPosts(latestPosts);
		setLoading(false);
    }, [allPosts]);

    const handleFilterChange = (tag: string) => {
        if (tag === 'all') {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(post => post.frontmatter.tags.includes(tag));
            setFilteredPosts(filtered);
        }
    };

    const loadMore = (e: any) => {
        e.preventDefault();
        const nextPosts = allPosts.slice(posts.length, posts.length + MAX_POSTS_TO_SHOW).sort(sortPostsByDate);
        setPosts([...posts, ...nextPosts]);
        setFilteredPosts([...posts, ...nextPosts]);
    }

    return (
        <Section>
            <div className="flex justify-between pb-4">
                <p className="text-xl font-bold">Ultimos projetos</p>
				<TagFilter tags={["frontend", "backend", "react", "snippet", "game", "real word"]} onFilterChange={handleFilterChange} />
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-20">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                        {filteredPosts.map((post: any) => (
                            <Card key={post.slug} post={post} />
                        ))}
                    </div>
                    <div className="flex justify-center text-primary">
                        {!(allPosts.length === posts.length) && <a href="" className="underline hover:text-orange-600" onClick={loadMore}>carregar mais →</a>}
                    </div>
                </>
            )}
        </Section>
    )
}