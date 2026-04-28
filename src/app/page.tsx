import ErrorMessage from "@/components/ErrorMessage";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/services/services";

export default async function Home() {
  const { posts, error } = await getPosts()

  return (
    <section className="w-full max-w-167.5 mx-auto px-4 mb-20">
      {error || !posts
        ? <ErrorMessage>Erro ao carregar posts.</ErrorMessage>

        : <>
          <h2 className="mb-10 text-center text-2xl md:text-3xl">Blog em NextJS | Tailwind CSS | Supabase</h2>

          <div className="flex flex-col">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </>}


    </section>
  );
}
