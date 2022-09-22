import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import BannerTop from '../components/BannerTop';
import { Header } from '../components/Header';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface prop {
  posts: [Post];
}

const Home: NextPage<prop> = ({ posts }: prop) => {
  return (
    <div className="mx-auto max-w-7xl ">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BannerTop />
      <div
        className="grid grid-cols-1 gap-4 p-2 sm:grid-cols-2
      md:gap-6 md:p-6 lg:grid-cols-3 lg:gap-10"
      >
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={post.mainImage && urlFor(post.mainImage).url()!}
              />

              <div className="flex items-start justify-between bg-white p-5">
                <div className="">
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs mt-3">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full "
                  src={urlFor(post.author.image).url()!}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
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
