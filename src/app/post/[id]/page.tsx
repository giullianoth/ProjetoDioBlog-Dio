import ErrorMessage from "@/components/ErrorMessage";
import PostNavigation from "@/components/PostNavigation";
import { getPostById } from "@/services/services";

type Props = {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const { post, error } = await getPostById(id);

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
        <section className="w-full max-w-216 mx-auto px-4 mb-20 grid md:grid-cols-2">

          <PostNavigation
            title="Lorem ipsum dolor sit amet."
            navDirection="previous" />

          <PostNavigation
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eos accusantium. Non."
            navDirection="next" />
        </section>}
    </>
  );
}
