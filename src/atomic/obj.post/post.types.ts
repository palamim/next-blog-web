export interface PostFrontmatter {
  title: string;
  description: string;
  pubDate: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}
