import { gql, GraphQLClient } from "graphql-request";
import type { AllPostsData, PostData } from "./schema";

export const getClient = () => {
  return new GraphQLClient("https://gql.hashnode.com")
}

const myHashnodeURL = "joismar.hashnode.dev";

export const getAllPosts = async (onlyProjects?: boolean) => {
    const client = getClient();

    const allPosts = await client.request<AllPostsData>(
        gql`
            query Publication {
                publication(host: "${myHashnodeURL}") {
                    id
                    title
                    posts(first: 20) {
                        pageInfo {
                            hasNextPage
                            endCursor
                        }
                        edges {
                            node {
                                id
                                author {
                                    name
                                    profilePicture
                                }
                                title
                                subtitle
                                brief
                                slug
                                coverImage {
                                    url
                                }
                                tags {
                                    name
                                    slug
                                }
                                publishedAt
                                readTimeInMinutes
                                content{
                                  markdown
                                }
                            }
                        }
                    }
                }
            }
        `
    );

    if (onlyProjects) {
        return allPosts.publication.posts.edges.filter((post) =>
            post.node.tags.some((tag) => ["project", "snippet"].includes(tag.slug))
        ).map((post) => post.node);
    }

    return allPosts.publication.posts.edges.map((post) => post.node);
};


export const getPost = async (slug: string) => {
  const client = getClient();

  const data = await client.request<PostData>(
    gql`
      query Publication ($slug: String!) {
        publication(host: "${myHashnodeURL}") {
          id
          post(slug: $slug) {
            id
            author{
              name
              profilePicture
            }
            publishedAt
            title
            subtitle
            readTimeInMinutes
            content{
              markdown
              html
            }
            tags {
              name
              slug
            }
            coverImage {
              url
            }
          }
        }
      }
    `,
    { slug: slug }
  );

  return data.publication.post;
};