import type { NextPage } from 'next';
import Head from 'next/head';
import BannerTop from '../components/BannerTop';
import Header from '../components/Header';

const Home: NextPage = () => {
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
