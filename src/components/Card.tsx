import { formatDate } from '@/utils/data.util';
import Tags from './Tags';
import { Post } from '@/lib/schema';

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const postUrl = `/posts/${post.slug}`;

  return (
    <a href={postUrl}>
      <div className="h-full bg-stone-200/50 text-sm dark:bg-gray-900 hover:shadow-effect transition-shadow">
        <div className="flex h-full w-full flex-col bg-stone-300 p-4 text-gray-900 opacity-90 dark:bg-stone-800 dark:text-white">
          <div className="flex-auto">
            <div className="flex justify-between pb-4 text-xs">
              <p>{formatDate(post.publishedAt)}</p>
              <p>{post.readTimeInMinutes} min de leitura</p>
            </div>

            <p className="pb-4 text-lg font-bold">{post.title}</p>

            <Tags tags={post.tags.map(tag => tag.slug)} />
            <p className="line-clamp-6 pt-4">{post.subtitle}</p>
          </div>
          <p className="pt-4 underline">ler mais →</p>
        </div>
      </div>
    </a>
  );
};

export default PostCard;