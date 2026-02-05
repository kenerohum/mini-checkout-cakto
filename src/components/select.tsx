import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    placeholder?: string;
}

export default function Select({
    options, placeholder, className, ...props
}: SelectProps) {


    return (

        <select
            className={twMerge([
                "h-12 w-full border-border-background border rounded-lg px-3 py-2 gap-1 text-md text-foreground focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all bg-secondary-background ring-0 outline-0",
                className
            ])}
            {...props}
        >
            <option className='bg-background text-foreground' value="">{placeholder}</option>
            {options.map((option) => (
                <option className='bg-background text-foreground' key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};