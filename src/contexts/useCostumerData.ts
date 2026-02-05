import { create } from 'zustand'

type Store = {
  paymentMethod: 'pix' | 'card';
  installment: {
    installmentNumber: number;
    installmentTax: number;
    installmentTaxExtra: number
  } | null;
}

const usePayment = create<Store>()((set, get) => ({
  paymentMethod: 'pix',
  installment: null,
}))

export default usePayment;