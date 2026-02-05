"use client";

import Lucide, { Icons } from "./lucide";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconStart?: Icons;  
  iconEnd?: Icons;  
}

export function Button({ children, iconStart, iconEnd, ...props }: ButtonProps) {
    return (
        <button
            className="flex h-12 w-full items-center justify-center gap-2 px-5 rounded-full bg-primary text-foreground transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            {...props}
        >
            {iconStart && <Lucide icon={iconStart} className="stroke-2"/>}
            {children}
            {iconEnd && <Lucide icon={iconEnd} className="stroke-2"/>}
        </button>
    );
}