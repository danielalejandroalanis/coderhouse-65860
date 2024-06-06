import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
async function getProductsByCategory(categoryId) {
  return axios.get(`https://dummyjson.com/products/category/${categoryId}`);
}

const Category = () => {
  const [products, setProducts] = React.useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProductsByCategory(categoryId).then((res) => {
      setProducts(res.data.products);
    });
  }, [categoryId]);

  return products.map((product, index) => {
    return (
      <div key={index}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    );
  });
};

export default Category;
