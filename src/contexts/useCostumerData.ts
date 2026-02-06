import validateCPF from '@/utils/cpfValidator';
import { create } from 'zustand'

type Store = {
  costumerData: {
    cpf: string;
    email: string;
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  };
  error: {
    cpf?: string;
    email?: string;
    cardNumber?: string;
    cardExpiry?: string;
    cardCVC?: string;
  },
  setError: (key: string, message: string) => void
  validate: (inputKey: string[]) => boolean;
  inputChange: (key: string, valeu: string) => void;
}

const useCostumerData = create<Store>()((set, get) => ({
  costumerData: {
    cpf: '',
    email: '',
    cardCVC: '',
    cardExpiry: '',
    cardNumber: ''
  },
  error: {},
  setError: (key: string, message: string) => {
    set((state) => ({
      ...state,
      error: {
        ...state.error,
        [key]: message
      }
    }))
  },
  validate: () => {
    const { costumerData } = get();
    let isValid = true;

    let error = {};

    if (!costumerData.email) {
      error = {
        ...error,
        email: 'Por favor, insira um e-mail válido.'
      }
      isValid = false;
    }

    if (validateCPF(costumerData.cpf) === false) {
      error = {
        ...error,
        cpf: 'Por favor, insira um CPF válido.'
      }
      isValid = false;
    }

    if (costumerData.cardNumber.replace(/\s/g, '').length < 16) {
      error = {
        ...error,
        cardNumber: 'Número do cartão incompleto.'
      }
      isValid = false;
    }

    if (costumerData.cardExpiry.replace(/\s/g, '').length < 5) {
      error = {
        ...error,
        cardExpiry: 'Data de validade incompleta.'
      }
      isValid = false;
    }

    if (costumerData.cardCVC.replace(/\s/g, '').length < 3) {
      error = {
        ...error,
        cardCVC: 'CVC incompleto.'
      }
      isValid = false;
    }

    set({ error });
    return isValid;
  },
  inputChange: (key, valeu) => {
    set((prev) => ({
      ...prev,
      costumerData: {
        ...prev.costumerData,
        [key]: valeu
      }
    }));
  }
}))

export default useCostumerData;