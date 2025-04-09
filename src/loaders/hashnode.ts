import { getAllPosts } from '@/lib/client';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import type { Loader, LoaderContext } from 'astro/loaders';

export function hashnodePostsLoader(): Loader {
    return {
      name: 'hasnode-posts-loader',
      load: async ({ config, logger, store }: LoaderContext) => {
        logger.info(`Loading posts`);
 
        const data = await getAllPosts();

        for (const post of data) {
          const { content, ...rest } = post;
          const postEntry = {
            id: rest.slug,
            data: rest,
            body: content.markdown,
          }

          const processor = await createMarkdownProcessor({
            ...config.markdown,
          })

          async function renderToString(entry: NonNullable<typeof postEntry>) {
            let cleanedMD = entry.body?.replace(/\salign="\w*"(?=\))/g, '');
            // cleanedMD = cleanedMD?.replace(/(\n\s*\n)+/g, '\n');
            // cleanedMD = cleanedMD?.replace(/(\[.*?\]\(.*?\))/g, '$1 \\');
            cleanedMD = cleanedMD?.replace(/(```)((?!plaintext)\w+)/g, '$1$2 showLineNumbers');

            const result = await processor.render(cleanedMD ?? '', {
              frontmatter: entry.data,
            });
            
            return {
              html: result.code,
              metadata: {
                ...result.metadata,
              },
            };
          };
              
          store.set({ 
              ...postEntry,
              rendered: await renderToString(postEntry)
          });
        }
 
        logger.info(`Loaded ${data.length} posts`);
      },
    };
  }