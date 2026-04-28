import ErrorMessage from "@/components/ErrorMessage";
import PostNavigation from "@/components/PostNavigation";
import { getAdjacentPosts, getPostById } from "@/services/services";
import { notFound } from "next/navigation";

type Props = {
  params:  Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const { post, error } = await getPostById(id);

  if (error || !post) {
    notFound();
  }

  const { prevPost, nextPost } = await getAdjacentPosts(post.created_at);

  return (
    <>
      <section className="w-full max-w-2xl mx-auto px-4 mb-20">
        {error || !post
          ? <ErrorMessage>Erro ao carregar post.</ErrorMessage>

          : <>
            <h2 className="mb-12 text-3xl text-center md:text-5xl leading-16">{post.title}</h2>

            <p className="mb-6 text-xl">{post.description}</p>

            <article
              className="flex flex-col gap-4 font-light text-wrapper"
              dangerouslySetInnerHTML={{ __html: post.body }} />
          </>}
      </section>

      {!error && post &&
        <section className="w-full max-w-216 mx-auto px-4 mb-20 grid md:grid-cols-2 justify-center">

          {prevPost &&
            <PostNavigation
              title={prevPost.title!}
              href={`/post/${prevPost.id}`}
              navDirection="previous" />}

          {nextPost &&
            <PostNavigation
              title={nextPost.title!}
              href={`/post/${nextPost.id}`}
              navDirection="next" />}
        </section>}
    </>
  );
}
