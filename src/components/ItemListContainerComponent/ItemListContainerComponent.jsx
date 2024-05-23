import React from "react";

import { getAllProducts } from "../../services/products.service";

import "./ItemListContainerComponent.css";

const ItemListContainerComponent = ({ greeting }) => {
  const [products, setProducts] = React.useState([]);

  // const myNums = [1, 2, 3, 4, 5, 6, 7];

  // const myNumsAfterMap = myNums.map((num) => {
  //   return num + 2;
  // });

  // console.log(myNumsAfterMap);

  // const myProducts = [
  //   {
  //     id: "dca9s8da98asd9asd9a8dad98ad8",
  //     name: "Zapatilla Nike Jordan 9.5",
  //     description: "Zapatilla Nike Jordan Unisex - Adultos",
  //     price: 200,
  //     stock: 10,
  //     category: "Urbans",
  //   },
  //   {
  //     id: "dasd90asd9a87da0sd98as09da0s8d",
  //     name: "Zapatilla Nike Air Force 9.5",
  //     description: "Zapatilla Nike Air Force Unisex - Adultos",
  //     price: 120,
  //     stock: 7,
  //     category: "Urbans",
  //   },
  // ];

  React.useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="itemListContainer">
      {/* {myProducts.map((product, index) => {
        return (
          // <div key={index}>
          <div key={product.id}>
            <li>{product.name}</li>
            <li>{product.description}</li>
            <li>{product.price}</li>
            <li>{product.stock}</li>
            <li>{product.category}</li>
          </div>
        );
      })} */}
      {products.map((product, index) => {
        return (
          <div key={product.id}>
            <li>Title: {product.title}</li>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainerComponent;
