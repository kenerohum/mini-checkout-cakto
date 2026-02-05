'use client';

import Button from "@/components/button";
import MethodItem from "@/components/methodItem";
import Product from "@/components/product";
import ValueItem from "@/components/valueItem";
import useOrder from "@/contexts/use-order";
import usePayment from "@/contexts/use-payment";
import { calcTotal, formatCurrency } from "@/utils/calcAmount";

export default function PaymentsMethods() {
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

    const handlerSelectMethod = (method: 'pix' | 'card') => {
        usePayment.setState({ paymentMethod: method });
    }

    return (
        <div className="w-full  mb-20">
            <h1 className="mb-3 text-lg font-bold">Métodos de pagamento</h1>


            <div className="flex gap-2 mb-2">
                <MethodItem
                    title="Pix"
                    icon="Pix"
                    selected={paymentMethod === "pix"}
                    onSelect={() => handlerSelectMethod("pix")}
                    discount={formatCurrency(amounts?.installmentTax)}
                />
                <MethodItem
                    title="Cartão"
                    icon="CreditCard"
                    selected={paymentMethod === "card"}
                    onSelect={() => handlerSelectMethod("card")}
                />
            </div>


            <div className="bg-secondary-background border-border-background border rounded-xl p-5 divide-y divide-border-background">

                <div className="">
                    <h3 className="mb-4 text-lg font-bold">Resumo do pedido </h3>
                    <div className="divide-y divide-border-background">
                        <div className="flex flex-col gap-1 mb-3">

                            <ValueItem
                                label="Valor dos produtos"
                                value={formatCurrency(amounts.total)}
                            />
                            <ValueItem
                                label="Taxa Cakto"
                                value={formatCurrency(amounts.taxCakto)}
                            />
                            <div className="flex justify-between mb-2">
                                <span className="text-lg whitespace-nowrap text-foreground">
                                    Total
                                </span>
                                <span className="text-lg font-bold whitespace-nowrap text-foreground">
                                    {formatCurrency(amounts.total)}
                                </span>
                            </div>
                        </div>


                        <div>
                            <div className="flex justify-between ">
                                <span className="text-md whitespace-nowrap text-primary font-medium">
                                    {order?.seller.name || "Vendedor"} receberá
                                </span>
                                <span className="text-md font-semibold whitespace-nowrap text-gray-300">
                                    {formatCurrency(amounts.sellerReceive)}
                                </span>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

            <Button className="mt-5">
                Pagar
            </Button>

        </div>
    );
}