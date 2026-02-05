import validateCPF from '@/utils/cpfValidator';
import { create } from 'zustand'

type Store = {
  costumerData: {
    cpf: string;
    email: string;
  };
  error: {
    cpf?: string;
    email?: string;
  },
  setError: (key: string, message: string) => void
  validate: () => boolean;
}

const useCostumerData = create<Store>()((set, get) => ({
  costumerData: {
    cpf: '',
    email: ''
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
    const { costumerData, setError } = get();
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
    set({error});
    return isValid;
  }
}))

export default useCostumerData;