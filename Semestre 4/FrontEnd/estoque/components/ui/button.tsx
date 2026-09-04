'use client'
import { useRouter } from "next/navigation"

interface IButtonProps {
    type?: "dark" | "white",
    size?: "s" | "m" | "l",
    onClick?: string,
    text: string
}

const sizeStyles = {
    s : "w-[200px] m-0.5 p-2",
    m : "w-[350px] m-0.5 p-2.5",
    l : "w-[500px] m-0.5 p-3",
}

const typeStyles = { 
    dark : "bg-zinc-950 text-white ",
    white: "bg-white text-black ",
}

export default function Button({ type = "white", size = "m", onClick, text }: IButtonProps) {
    const router = useRouter()
    
    return (
        <div 
            className={`cursor-pointer flex items-center text-center justify-center rounded ${typeStyles[type]} ${sizeStyles[size]}`} 
            
            onClick={() => onClick && router.push(onClick)}
        >
            {text}
        </div>
    )
}
