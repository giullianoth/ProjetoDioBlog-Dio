import ArrowLeft from "@/assets/icons/arrow-left";
import ArrowRight from "@/assets/icons/arrow-right";
import Link from "next/link";

type Props = {
    navDirection: "previous" | "next";
    title: string;
}

export default function PostNavigation({ navDirection, title }: Props) {
    const textAlignment = navDirection === "previous" ? "text-right" : "text-left";

    return (
        <Link href="/post" className={`flex flex-col px-10 py-8 text-center transition border bg-black/30 hover:bg-black/50 border-white/10 backdrop-blur-lg first:rounded-t-lg last:rounded-b-lg md:first:rounded-tr-none md:last:rounded-bl-none md:first:rounded-l-lg md:last:rounded-r-lg md:${textAlignment}`}>
            <span className="block mb-4 uppercase opacity-60">{navDirection}</span>
            <h3 className="mb-6 text-2xl">{title}</h3>
            {navDirection === "previous" && <ArrowLeft className="mt-auto mx-auto md:mr-0" />}
            {navDirection === "next" && <ArrowRight className="mt-auto mx-auto md:ml-0" />}
        </Link>
    );
}
