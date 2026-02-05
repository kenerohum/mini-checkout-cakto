import "server-only";
import { Product } from "./products";

export type Order = {
  uid: string;
  payment: {
    hasPix: boolean;
    hasCreditCard: boolean;
    maxInstallments: number;
    installments: {
      installmentNumber: number;
      installmentValue: number;
    }[]
  },
  products: Product[]
};

export const ordersMock: Order[] = [
  {
    uid: "qwert",
    payment: {
      hasPix: true,
      hasCreditCard: true,
      maxInstallments: 12,
      installments: []
    },
    products: []
  }
]