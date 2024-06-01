import { useEffect } from "react";
import "./App.css";
import { getBrands, getProduct } from "./api/api";
import { getProducts } from "./api/api.product";

function App() {
  useEffect(() => {
    const productId = 9587059;
    const brandId = 115;

    getProduct(productId);
    getProducts();
    getBrands(brandId)
    getBrands();
  }, []);

  return <main>hello world</main>;
}

export default App;
