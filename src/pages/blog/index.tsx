import { FaBrain } from 'react-icons/fa6';
import { Fragment } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Container } from 'src/atomic/obj.grid/grid.style';
import { Hbox } from 'src/atomic/obj.hbox/hbox.component';
import { Separator } from 'src/atomic/atm.separator/separator.style';
import { Color } from 'src/atomic/obj.constants/constants';
import { BodySecondary } from 'src/atomic/atm.typography/typography';
import { formatDate } from 'src/app/utils/format-date';
import { PostLink } from 'src/atomic/obj.post/post.style';
import { Post } from 'src/atomic/obj.post/post.types';

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);
  if (!res.ok) {
    return { notFound: true };
  }
  const posts: Post[] = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const orderedPosts = posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).getTime() -
      new Date(a.frontmatter.pubDate).getTime(),
  );
  return (
    <Container>
      <Hbox>
        <Hbox.Item $hAlign={'center'}>
          <FaBrain color={Color.LightOrange} size={'2em'} />
        </Hbox.Item>
      </Hbox>
      <Separator type={'subsection'} />
      {orderedPosts.map((post) => (
        <Fragment key={post.slug}>
          <BodySecondary>{formatDate(post.frontmatter.pubDate)}</BodySecondary>
          <PostLink href={`/blog/${post.slug}`}>
            {post.frontmatter.title}
          </PostLink>
          <Separator type={'subsection'} />
        </Fragment>
      ))}
    </Container>
  );
};

export default Blog;
