import { defineCollection } from "astro:content";
import { PostSchema } from "@/lib/schema";
import { hashnodePostsLoader } from "@/loaders/hashnode";

const posts = defineCollection({
    loader: hashnodePostsLoader(),
    schema: PostSchema,
});

const projects = defineCollection({
    loader: hashnodePostsLoader(true),
    schema: PostSchema,
});

export const collections = {
    posts,
    projects,
};