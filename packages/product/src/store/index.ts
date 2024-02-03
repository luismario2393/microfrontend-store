import { create } from "zustand";
import { IProduct } from "../interfaces";

interface productState {
  products: IProduct[];
  getProducts: (limit?: number) => Promise<void>;
}

export const useProductsStore = create<productState>()((set) => ({
  products: [],

  getProducts: async (limit?: number) => {
    const products = await (
      await fetch(
        `https://fakestoreapi.com/products${limit ? `?limit=${limit}` : ""}`
      )
    ).json();
    set((state) => ({ ...state, products }));
  },
}));
