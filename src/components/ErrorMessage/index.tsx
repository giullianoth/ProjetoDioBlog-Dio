import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function ErrorMessage({ children }: Props) {
    return (
        <p className="text-red-600 bg-red-100/70 py-2 px-4 border-red-400 rounded-md">
            {children}
        </p>
    );
}
