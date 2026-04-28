import ArrowLeft from "@/assets/icons/arrow-left";
import Link from "next/link";

export default function PostCard() {
    return (
        <article className="p-8 transition border border-b-0 bg-black/30 hover:bg-black/50 border-white/10 last:border-b first:rounded-t-lg last:rounded-b-lg">
            <Link href="/post">
                <p className="mb-3 font-bold uppercase opacity-60">28/04/2026</p>
                <h2 className="text-2xl md:text-3xl">Título do Post</h2>
                <p className="mt-3 text-lg opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae similique optio beatae explicabo itaque inventore architecto obcaecati, quos unde?</p>
                <ArrowLeft className="mt-4 text-(--color-theme-primary)" />
            </Link>
        </article>
    );
}
