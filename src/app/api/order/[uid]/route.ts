import { NextResponse } from "next/server";
import { productsMock } from "@/server/mocks/products";
import { ordersMock } from "@/server/mocks/orders";

type Context = {
  params: Promise<{ uid: string }>;
};

export async function GET(request: Request, context: Context) {
  const { uid } = await context.params;

  if (!uid) {
    return NextResponse.json(
      { error: "UID is required" },
      { status: 400 }
    );
  }

  const order = ordersMock.find(order => order.uid === uid);

  if (!order) {
    return NextResponse.json(
      { error: "Order not found" },
      { status: 404 }
    );
  }

  const products = productsMock.filter(product => product.orderUid === uid);

  if (products.length === 0) {
    return NextResponse.json(
      { error: "No products found for this order" },
      { status: 404 }
    );
  }
  
  return NextResponse.json({
    order: { ...order, products }
  });
}