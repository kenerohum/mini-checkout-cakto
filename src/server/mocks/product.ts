import "server-only";

export type Product = {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  producer: string;
  format: "digital" | "fisico";
  deliveryTime: string;
};

export const productMock: Product = {
  id: 1,
  name: "Curso de Marketing Digital 2025",
  originalPrice: 497.0,
  currentPrice: 297.0,
  producer: "João Silva",
  format: "digital",
  deliveryTime: "imediato",
};