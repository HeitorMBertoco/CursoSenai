"use client";

import { useRouter } from "next/navigation";

interface IButtonProps {
    type?: "dark" | "white";
    size?: "s" | "m" | "l";
    onClick?: string;
    text: string;
}

const sizeStyles = {
    s: "w-full p-2",
    m: "w-full p-2.5",
    l: "w-full p-3",
};

const typeStyles = {
    dark: "bg-zinc-950 text-white hover:bg-zinc-800",
    white: "bg-white text-zinc-800 border border-zinc-200 hover:bg-zinc-50",
};

export default function Button({
    type = "white",
    size = "m",
    onClick,
    text,
}: IButtonProps) {
    const router = useRouter();

    return (
        <div
            className={`
                cursor-pointer
                flex
                items-center
                justify-center
                rounded-lg
                font-medium
                text-sm
                transition-colors
                active:scale-[0.99]
                ${typeStyles[type]}
                ${sizeStyles[size]}
            `}
            onClick={() => onClick && router.push(onClick)}
        >
            {text}
        </div>
    );
}