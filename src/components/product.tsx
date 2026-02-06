"use client";

import { calcDiscountPercent, formatCurrency } from "@/utils/calcAmount";
import Lucide, { Icons } from "./lucide";

interface ProductProps {
    product: IProduct;
}

export default function Product({ product }: ProductProps) {
    return (
        <div
            className="flex w-full items-center justify-between gap-4 text-foreground transition-colors "
        >
            <div className="flex items-center text-center gap-3">
                <div className="flex items-center justify-center dark:bg-slate-800 bg-slate-200 h-10 min-w-12 rounded-lg" >
                    <Lucide icon="ShoppingBag" className="" />
                </div>

                <div className="flex flex-col items-start">
                    <span className="text-md  text-left text-foreground font-medium">{product.name}</span>
                    <span className="text-xs  text-left text-primary ">{calcDiscountPercent(product.originalPrice, product.currentPrice)} de desconto</span>
                </div>
            </div>
            <div className="flex flex-col justify-end items-end">
                <span className="text-xs font-semibold whitespace-nowrap text-text-secondary line-through">{formatCurrency(product.originalPrice)}</span>
                <span className="text-md font-semibold whitespace-nowrap text-foreground">{formatCurrency(product.currentPrice)}</span>
            </div>
        </div>
    );
}