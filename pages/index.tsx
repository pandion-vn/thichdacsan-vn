import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';
import { useRouter } from 'next/router';
import { PostsOrPages } from '@tryghost/content-api';
import { getAllPosts } from '@/common/ghost';
import LoadingWidget from '@/components/widgets/loading';
import HomeBanner from '@/components/home/home_banner';
import HomePostListing from '@/components/home/home_post_listing';
import Layout from '@/components/layout';

interface HomeProps extends WithChildren {
  latestPost: Post;
  posts: Post[];
}

const Home = ({latestPost, posts}: HomeProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingWidget message="Đang tải trang..." />;
  }

  return (
    <Layout>
      <HomeBanner post={latestPost} />
      <HomePostListing posts={posts} />
    </Layout>
  );
}

export default Home;

export async function getStaticProps() {
  const rawPosts = (await getAllPosts({})) as PostsOrPages;

  if (!rawPosts.length) {
    return { props: { latestPost: undefined, posts: [] } }; 
  }

  const latestPost = rawPosts.shift();
  const posts = rawPosts;

  return { props: { latestPost, posts } };
}
