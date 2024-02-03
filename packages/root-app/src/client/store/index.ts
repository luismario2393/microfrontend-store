import { create } from "zustand";
import { IProduct } from "../interfaces";

interface productState {
  product?: IProduct | null;
  getProduct: (id: string) => Promise<void>;
  updateCart: (product: IProduct) => void;
  cart: IProduct[];
  deleteItemCart: (id: number) => void;
}

export const useProductStore = create<productState>()((set) => ({
  product: null,
  cart: [],
  getProduct: async (id: string) => {
    const product = await (
      await fetch(`https://fakestoreapi.com/products/${id}`)
    ).json();
    set((state: productState) => ({ ...state, product }));
  },
  updateCart: (product: IProduct) => {
    set((state: productState) => ({
      ...state,
      cart: [...state.cart, product],
    }));
  },

  deleteItemCart: (id: number) => {
    set((state: productState) => ({
      ...state,
      cart: state.cart.filter((item) => item.idDeleted !== id),
    }));
  },
}));
