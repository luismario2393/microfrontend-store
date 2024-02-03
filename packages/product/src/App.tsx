import { useEffect } from "react";
import { useProductsStore } from "./store";
import { shallow } from "zustand/shallow";

import { ProductList } from "./components/list-products";

function App() {
  const { products } = useProductsStore(
    (state) => ({
      products: state.products,
    }),
    shallow
  );
  const { getProducts } = useProductsStore();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
