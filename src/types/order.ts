
interface IGetOrderResponse {
  order: IOrder;
}

interface IOrder {
  uid: string;
  payment: {
    hasPix: boolean;
    hasCreditCard: boolean;
    maxInstallments: number;
    installments: {
      installmentNumber: number;
      installmentTax: number;
      installmentTaxExtra: number
    }[]
    taxPixPercent: number;
  },
  products: IProduct[]
};