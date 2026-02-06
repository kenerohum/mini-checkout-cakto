'use client';

import useOrder from "@/contexts/useOrder";
import Cart from "@/layout/cart";
import { useEffect } from "react";
import Form from "./form";
import PaymentsMethods from "./paymentsMethods";
import usePayment from "@/contexts/usePayment";
import Payment from "./payment";

export default function Main({
  order,
}: {
  order: IOrder | null;
}) {

    useEffect(() => {
        console.log("Setting order in context:", order);
        useOrder.setState({ order });
        usePayment.setState({ installment: order?.payment.installments[0] || null });
    }, [order])

  return (
    <div className="px-2 py-5 gap-5 flex flex-col sm:w-150 mx-auto">
      <Cart />
      <Form/>
      <PaymentsMethods/>
      <Payment/>
    </div>
  );
}
