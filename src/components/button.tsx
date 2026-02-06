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
                "flex items-center justify-center rounded-xl bg-primary ease-in-out dark:text-foreground text-background font-bold transition-colors hover:bg-primary/70 selection:bg-primary/70 s",
                "h-12 w-full gap-2 px-5",
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