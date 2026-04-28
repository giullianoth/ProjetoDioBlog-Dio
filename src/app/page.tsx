import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <section className="w-full max-w-167.5 mx-auto px-4 mb-20">
      <div className="flex flex-col">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}
