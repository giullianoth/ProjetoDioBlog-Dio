import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="pt-26 pb-12">
            <div className="container flex flex-col items-center gap-8 px-4 mx-auto">
                <Link href="/">
                    <Image
                        src="/dio.svg"
                        className="h-auto w-30"
                        width={120}
                        height={60}
                        alt="Dio Logo"
                        loading="eager" />
                </Link>

                <h1 className="text-6xl">
                    <Link href="/">Dio Blog</Link>
                </h1>
            </div>
        </header>
    );
};

export default Header;