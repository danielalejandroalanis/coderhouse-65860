import React from "react";
import { getProductsByCategory } from "../services/products";

export const useProductsByCategory = (category) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProductsByCategory(category)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category]);

  return { products };
};
