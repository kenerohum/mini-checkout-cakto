"use client";

import { twMerge } from "tailwind-merge";
import Lucide, { Icons } from "./lucide";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: Icons;  
}

export function Input({ className, ...props }: InputProps) {
    return (
        <div
            className={twMerge([
                "flex h-12 w-full items-center justify-center gap-2 px-5 rounded-full bg-primary text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]",
                className
            ])}
            rel="noopener noreferrer"
        >
            {props.icon && <Lucide icon={props.icon} />}
            <input
                className="flex-1 bg-transparent outline-none text-sm text-background placeholder:text-background/50"
                {...props}
            />
        </div>
    );
}