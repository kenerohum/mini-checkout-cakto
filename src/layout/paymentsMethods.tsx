'use client';

import Button from "@/components/button";
import Card from "@/components/card";
import MethodItem from "@/components/methodItem";
import Product from "@/components/product";
import Select from "@/components/select";
import ValueItem from "@/components/valueItem";
import useOrder from "@/contexts/useOrder";
import usePayment from "@/contexts/usePayment";
import { calcInstallment, calcTotal, formatCurrency } from "@/utils/calcAmount";

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

    const handlerSelectInstallment = (installmentNumber: number) => {
        usePayment.setState({ installment: order?.payment.installments.find(e => e.installmentNumber === installmentNumber) || null });
    }

    return (
        <div className="w-full">
            <h1 className="mb-3 text-lg font-bold">Métodos de pagamento</h1>


            <div className="flex gap-2 mb-4">
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

            {paymentMethod == "card" &&
                <div className="bg-secondary-background border-border-background border rounded-xl p-5 mb-4">
                    <Card />
                    <div className="mb-4">
                        <p className="text-md mb-1 font-medium">Parcelamento</p>
                        <Select
                            className=""
                            value={installment?.installmentNumber?.toString()}
                            onChange={e => handlerSelectInstallment(Number(e.target.value))}
                            options={order?.payment.installments.map(e => ({ label: `${e.installmentNumber}x ${formatCurrency(calcInstallment(amounts.totalProducts, e.installmentNumber, e.installmentTaxExtra).installmentValue)}`, value: e.installmentNumber?.toString() })) || []}
                        />
                    </div>
                </div>
            }


            <div className="bg-secondary-background border-border-background border rounded-xl p-5 divide-y divide-border-background">

                <div className="">
                    <h3 className="mb-4 text-lg font-bold">Resumo do pedido </h3>
                    <div className="divide-y divide-border-background">
                        <div className="flex flex-col gap-1 mb-3">

                            <ValueItem
                                label="Valor dos produtos"
                                value={formatCurrency(amounts.totalProducts)}
                            />
                            <ValueItem
                                label="Taxa Cakto"
                                value={formatCurrency(amounts.taxCakto)}
                            />
                            <div className="flex justify-between mb-2">
                                <span className="text-lg whitespace-nowrap text-foreground font-medium">
                                    Total
                                </span>
                                <span className="text-lg font-bold whitespace-nowrap text-foreground">
                                    {formatCurrency(amounts.totalProducts)}
                                </span>
                            </div>
                        </div>


                        <div>
                            <div className="flex justify-between ">
                                <span className="text-md whitespace-nowrap text-primary font-medium">
                                    {order?.seller.name || "Vendedor"} receberá
                                </span>
                                <span className="text-md font-semibold whitespace-nowrap text-primary">
                                    {formatCurrency(amounts.sellerReceive)}
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}