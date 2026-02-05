'use client';

import { Product } from "@/components/product";
import useOrder from "@/contexts/use-order";
import { formatCurrency } from "@/utils";

export default function Cart() {
    const { order } = useOrder();
    return (
        <div className="w-full  ">
            <h1 className="mb-4 text-lg font-bold">Detalhes da compra</h1>
            <div className="bg-secondary-background border-border-background border rounded-xl p-5 divide-y divide-border-background">
                {
                    order?.products.map((product) =>
                        <div key={product.id} className="py-4 first:pt-0 last:pb-0">
                            <Product product={product} />
                        </div>
                    )
                }
                <div className="mt-4">
                    <h3 className="mb-4 text-lg font-bold">Subtotal</h3>
                    <div>
                        <div className="flex justify-between">
                            <span className="text-md font-semibold whitespace-nowrap text-text-secondary">
                                Valor do produto
                            </span>
                            <span className="text-md font-semibold whitespace-nowrap text-foreground">
                                {formatCurrency(100)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}