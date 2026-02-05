"use client";

import { twMerge } from "tailwind-merge";
import Lucide, { Icons } from "./lucide";
import { MASKS } from "@/utils/inputMask";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: Icons;
    error?: string;
    mask?: keyof typeof MASKS;
}

export default function Input({ className, ...props }: InputProps) {

    return (
        <div
            className={twMerge([
                "flex flex-col  w-full  ",
                className
            ])}
        >
            {props.icon && <Lucide icon={props.icon} />}
            <label htmlFor={props.id} className="text-md mb-1">{props.placeholder}</label>
            <div className="border-border-background border rounded-md px-3 py-2 gap-1 text-md text-foreground focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all bg-secondary-background">
                <input
                    className="w-full border-0 ring-0 outline-0 bg-transparent p-0 m-0 text-md text-foreground"
                    {...props}
                    onChange={(e) => {
                        if (props.mask && MASKS[props.mask]) {
                            e.target.value = MASKS[props.mask](e.target.value);
                        }
                        if (props.onChange) {
                            props.onChange(e);
                        }
                    }}
                />
            </div>
            {
                props.error && (
                    <span className="text-sm text-red-500 mt-1">{props.error}</span>
                )
            }
        </div>
    );
}