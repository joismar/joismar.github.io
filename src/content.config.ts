import { defineCollection } from "astro:content";
import { PostSchema } from "@/lib/schema";
import { hashnodePostsLoader } from "@/loaders/hashnode";

const posts = defineCollection({
    loader: hashnodePostsLoader(),
    schema: PostSchema,
});

export const collections = {
    posts,
};