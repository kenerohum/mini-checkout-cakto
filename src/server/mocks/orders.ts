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
      installmentTax: number;
      installmentTaxExtra: number;
    }[]
    taxPixPercent: number;
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
      installments: [
        {
          installmentNumber: 1,
          installmentTax: 3.99,
          installmentTaxExtra: 0,
        },
        {
          installmentNumber: 2,
          installmentTax: 4.99,
          installmentTaxExtra: 2,
        },
        {
          installmentNumber: 3,
          installmentTax: 4.99,
          installmentTaxExtra: 4,
        },
        {
          installmentNumber: 4,
          installmentTax: 4.99,
          installmentTaxExtra: 6,
        },
        {
          installmentNumber: 5,
          installmentTax: 4.99,
          installmentTaxExtra: 8,
        },
        {
          installmentNumber: 6,
          installmentTax: 4.99,
          installmentTaxExtra: 10,
        },
        {
          installmentNumber: 7,
          installmentTax: 4.99,
          installmentTaxExtra: 12,
        },
        {
          installmentNumber: 8,
          installmentTax: 4.99,
          installmentTaxExtra: 14,
        },
        {
          installmentNumber: 9,
          installmentTax: 4.99,
          installmentTaxExtra: 16,
        },
        {
          installmentNumber: 10,
          installmentTax: 4.99,
          installmentTaxExtra: 18,
        },
        {
          installmentNumber: 11,
          installmentTax: 4.99,
          installmentTaxExtra: 20,
        },
        {
          installmentNumber: 12,
          installmentTax: 4.99,
          installmentTaxExtra: 22,
        }
      ],
      taxPixPercent: 0,
    },
    products: []
  }
]