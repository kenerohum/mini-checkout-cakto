import { create } from 'zustand'

type Store = {
  order: IOrder | null;
}

const useOrder = create<Store>()((set, get) => ({
    order: null,
}))

export default useOrder;