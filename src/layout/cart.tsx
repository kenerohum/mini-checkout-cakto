'use client';

import Product from "@/components/product";
import useOrder from "@/contexts/useOrder";
import usePayment from "@/contexts/usePayment";
import { calcTotal, formatCurrency } from "@/utils/calcAmount";

export default function Cart() {
    const { order } = useOrder();
    const { paymentMethod, installment } = usePayment();

    const amounts = calcTotal({
        products: order?.products || [],
        paymentMethod: paymentMethod,
        pixTaxPercent: order?.payment.taxPixPercent || 0,
        installmentNumber: installment?.installmentNumber || 1,
        installmentTax: installment?.installmentTax || 0,
        installmentTaxExtra: installment?.installmentTaxExtra || 0,
    })

    return (
        <div className="w-full  ">
            <h1 className="mb-3 text-lg font-bold">Detalhes da compra</h1>
            <div className="bg-secondary-background border-border-background border rounded-xl p-5 divide-y divide-border-background">
                {
                    order?.products.map((product) =>
                        <div key={product.id} className="py-4 first:pt-0 last:pb-0">
                            <Product product={product} />
                        </div>
                    )
                }
              
            </div>

        </div>
    );
}