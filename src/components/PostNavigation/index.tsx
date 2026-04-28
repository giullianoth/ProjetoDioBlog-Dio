import ArrowLeft from "@/assets/icons/arrow-left";
import ArrowRight from "@/assets/icons/arrow-right";
import Link from "next/link";

type Props = {
    navDirection: "previous" | "next";
    title: string;
    href: string;
}

export default function PostNavigation({ navDirection, title, href }: Props) {
    const textAlignment = navDirection === "previous" ? "md:text-right" : "md:text-left";

    return (
        <Link href={href} className={`flex flex-col px-10 py-8 text-center transition border bg-black/30 hover:bg-black/50 border-white/10 backdrop-blur-lg first:rounded-t-lg last:rounded-b-lg md:first:rounded-tr-none md:last:rounded-bl-none md:first:rounded-l-lg md:last:rounded-r-lg ${textAlignment}`}>
            <span className="block mb-4 uppercase opacity-60">{navDirection}</span>
            <h3 className="mb-6 text-2xl">{title}</h3>
            {navDirection === "previous" && <ArrowLeft className="mt-auto mx-auto md:mr-0" />}
            {navDirection === "next" && <ArrowRight className="mt-auto mx-auto md:ml-0" />}
        </Link>
    );
}
