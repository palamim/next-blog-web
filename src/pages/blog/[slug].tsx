import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { Article, Prose } from 'src/atomic/obj.post/post.style';
import { BodySecondary, H1 } from 'src/atomic/atm.typography/typography';
import { Separator } from 'src/atomic/atm.separator/separator.style';
import { formatDate } from 'src/app/utils/format-date';
import { Post } from 'src/atomic/obj.post/post.types';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const res = await fetch(`${process.env.API_URL}/posts/${slug}.md`);
  if (!res.ok) {
    return { notFound: true };
  }
  const post: Post = await res.json();
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

const BlogPost = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Article>
    <Separator type={'subsection'} />
    <H1>{post?.frontmatter.title}</H1>
    <Separator type={'line'} />
    <BodySecondary>
      {formatDate(post.frontmatter.pubDate)} • Leo Palamim
    </BodySecondary>
    <Separator type={'subsection'} />
    <Prose>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {post?.content}
      </ReactMarkdown>
    </Prose>
    <Separator type={'subsection'} />
  </Article>
);

export default BlogPost;
