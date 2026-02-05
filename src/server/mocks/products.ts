import "server-only";

export type Product = {
  id: number;
  orderUid: string;
  name: string;
  originalPrice: number;
  producer: string;
  format: "digital" | "fisico";
  currentPrice: number;
  deliveryTime: string;
};

export const productsMock: Product[] = [
  {
    id: 1,
    orderUid: "qwert",
    name: "Curso de Marketing Digital 2025",
    originalPrice: 497.0,
    currentPrice: 297.0,
    producer: "João Silva",
    format: "digital",
    deliveryTime: "imediato",
  }
]