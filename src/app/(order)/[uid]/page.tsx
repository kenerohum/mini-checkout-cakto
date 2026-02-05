import Cart from "@/layout/cart";
import Main from "@/layout/main";
import { apiGetOrder } from "@/services/order";
import Image from "next/image";


export default async function Page({
  params,
}: {
  params: { uid: string };
}) {

  const { uid } = await params;

  const order = await apiGetOrder(uid)
    .then((res) => res.data.order) // <- pega o order certo
    .catch(() => null);

  return (
    <Main order={order} />
  );
}
