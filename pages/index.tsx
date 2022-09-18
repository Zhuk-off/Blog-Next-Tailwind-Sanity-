import type { NextPage } from 'next';
import Head from 'next/head';
import BannerTop from '../components/BannerTop';
import {Header} from '../components/Header';
import { sanityClient } from '../sanity';

interface prop {
  posts: [Post];
}

const Home: NextPage<prop>  = ({posts}:prop) => {
  console.log(posts);

  return (
    <div className="">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BannerTop />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == 'post'] {_id, title, author -> {name, image} ,description,
  mainImage,
  slug,body,
  }`;
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
