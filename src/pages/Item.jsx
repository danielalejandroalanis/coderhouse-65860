import React from "react";
import { useProductById } from "../hooks/useProductById";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Item = () => {
  const { id } = useParams();
  const { product, loading } = useProductById(id);

  return loading ? <LoaderComponent /> : <ItemDetailContainer product={product} />;
};

export default Item;
