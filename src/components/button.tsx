"use client";

import { twMerge } from "tailwind-merge";
import Lucide, { Icons } from "./lucide";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconStart?: Icons;  
  iconEnd?: Icons;  
}

export default function Button({ children, iconStart, iconEnd, className, ...props }: ButtonProps) {
    return (
        <button
            className={twMerge([
                "flex h-12 w-full items-center justify-center gap-2 px-5 rounded-xl bg-primary text-foreground transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]",
                className,
            ])}
            {...props}
        >
            {iconStart && <Lucide icon={iconStart} className="stroke-2"/>}
            {children}
            {iconEnd && <Lucide icon={iconEnd} className="stroke-2"/>}
        </button>
    );
}