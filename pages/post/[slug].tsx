import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import { sanityClient, urlFor } from '../../sanity';
import { PortableText } from '@portabletext/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { spawn } from 'child_process';
import { useState } from 'react';
import { Post } from '../../typings';

interface Props {
  post: Post;
}

type Inputs = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

function Post({ post }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <main className="mx-auto max-w-7xl">
      <Header />
      <img
        src={urlFor(post.mainImage).url()!}
        alt="title image"
        className="h-80 w-full object-cover"
      />
      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {post.description}
        </h2>
        <div className="flex items-center gap-2">
          <img
            src={urlFor(post.author.image).url()!}
            alt="image author"
            className="h-10 w-10 rounded-full"
          />
          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="font-semibold text-green-600">
              {post.author.name}
            </span>{' '}
            Published at{' ' + new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="mt-10 ">
          <PortableText value={post.body} />
        </div>
      </article>

      <hr className="my-5 mx-auto max-w-lg border border-green-500" />
      {submitted ? (
        <div className="my-10 mx-auto flex max-w-2xl flex-col bg-green-500 p-10 text-white">
          <h3 className="text-3xl font-bold">Спасибо за Ваш комментарий!</h3>
          <p>Как только он будет одобрен, он появится ниже</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
        >
          <h3 className="text-sm text-green-500">Есть что дополнить?</h3>
          <h4 className="text-3xl font-bold">
            Оставь свой комментарий сейчас!
          </h4>
          <hr className="mt-2 py-3" />

          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post._id}
          />

          <label className="mb-5 block">
            <span className="text-gray-700">Имя</span>
            <input
              className="mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-green-500 focus:ring"
              type="text"
              placeholder="Александр"
              {...register('name', { required: true })}
            />
          </label>

          <label className="mb-5 block">
            <span className="text-gray-700">Email</span>
            <input
              className="mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-green-500 focus:ring"
              type="email"
              placeholder="alexander@gmail.com"
              {...register('email', { required: true })}
            />
          </label>

          <label className="mb-5 block">
            <span className="text-gray-700">Комментарий</span>
            <textarea
              className="block w-full rounded border py-2 px-3 shadow outline-none ring-green-500 focus:ring"
              rows={8}
              placeholder="Вообщем, история такая..."
              {...register('comment', { required: true })}
            />
          </label>

          <div className="mb-4 flex flex-col text-sm">
            {errors.name && <span className="text-red-500">Введите Имя</span>}
            {errors.comment && (
              <span className="text-red-500">Введите ваш Комментарий</span>
            )}
            {errors.email && (
              <span className="text-red-500">Введите Email</span>
            )}
          </div>

          <input
            type="submit"
            className="rounded-full border-2 border-green-600 py-1 px-4 text-green-600 transition-all duration-300
        hover:bg-green-600 hover:text-white"
          />
        </form>
      )}

      {/* Comments */}
      <div
        className="my-10 mx-auto flex max-w-2xl flex-col space-y-2
      p-10 shadow shadow-green-500 "
      >
        <h3 className="text-4xl">Комментарии</h3>
        <hr className="border-green-500 pb-2" />

        {post.comments.map((comment) => (
          <div key={comment._id}>
            <p>
              <span className="text-green-500">{comment.name}: </span>
              <span>{comment.comment}</span>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == 'post'] {
    _id,
  slug {current}
  }`;
  const posts: [Post] = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug][0] {
        _id,
        _createdAt,
        title,
         author -> {
         name, 
         image
       },
       'comments': *[
         _type == 'comment' && 
         post._ref == ^._id &&
         approved == true],
       description,
       mainImage,
       slug,
       body
       }`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
