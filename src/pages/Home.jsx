import React from "react";

import { useProducts } from "../hooks/useProducts";

import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Home = () => {
  const { products, loading } = useProducts();

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainerComponent products={products} />
  );
};

export default Home;
