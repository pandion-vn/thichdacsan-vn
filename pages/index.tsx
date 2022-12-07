import HomeBanner from '@/components/home/home_banner';
import HomePostListing from '@/components/home/home_post_listing';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <HomeBanner />
      <HomePostListing />
    </Layout>
  );
}
