import ArrowRight from "@/assets/icons/arrow-right";
import { Post } from "@/types/post";
import Link from "next/link";

type Props = {
    post: Post;
}

export default function PostCard({ post }: Props) {
    return (
        <article className="transition border border-b-0 bg-black/30 hover:bg-black/50 border-white/10 last:border-b first:rounded-t-lg last:rounded-b-lg backdrop-blur-lg">
            <Link href={`/post/${post.id}`} className="block p-8">
                <p className="mb-3 font-bold uppercase opacity-60">
                    {new Date(post.created_at).toLocaleDateString()}
                </p>

                <h2 className="text-2xl md:text-3xl">{post.title}</h2>
                <p className="mt-3 text-lg opacity-60">{post.description}</p>
                <ArrowRight className="mt-4" />
            </Link>
        </article>
    );
}
