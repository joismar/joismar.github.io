import { formatDate } from '@/utils/data.util';
import Tags from './Tags';

interface Props {
  post: {
    url: string;
    frontmatter: {
      pubDate: string;
      minutesRead: string;
      title: string;
      tags: string[];
      description: string;
    };
  };
}

const PostCard = ({ post }: Props) => {
  return (
    <a href={post.url}>
      <div className="h-full bg-stone-200/50 text-sm dark:bg-gray-900 hover:shadow-effect transition-shadow">
        <div className="flex h-full w-full flex-col bg-stone-300 p-4 text-gray-900 opacity-90 dark:bg-stone-800 dark:text-white">
          <div className="flex-auto">
            <div className="flex justify-between pb-4 text-xs">
              <p>{formatDate(post.frontmatter.pubDate)}</p>
              <p>{post.frontmatter.minutesRead}</p>
            </div>

            <p className="pb-4 text-lg font-bold">{post.frontmatter.title}</p>

            <Tags tags={post.frontmatter.tags} />
            <p className="line-clamp-6 pt-4">{post.frontmatter.description}</p>
          </div>
          <p className="pt-4 underline">read more →</p>
        </div>
      </div>
    </a>
  );
};

export default PostCard;