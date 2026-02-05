'use client';

import useOrder from "@/contexts/use-order";
import Cart from "@/layout/cart";
import { useEffect } from "react";

export default function Main({
  order,
}: {
  order: IOrder | null;
}) {

    useEffect(() => {
        console.log("Setting order in context:", order);
        useOrder.setState({ order });
    }, [order])

  return (
    <div className="px-2 py-3">
      <Cart />
    </div>
  );
}
