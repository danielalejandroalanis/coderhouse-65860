import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import {
  getAllProducts,
  deleteProductById,
  createProduct,
} from "../../services/productsServices";

import "./ItemListContainerComponent.css";
import { Link } from "react-router-dom";

const ItemListContainerComponent = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  const deleteProduct = (id) => {
    deleteProductById(id)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const createNewProduct = () => {
    const newProduct = {
      title: "Nuevo Producto",
    };
    createProduct(newProduct)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="itemListContainer">
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Link to={`/item/${product.id}`}>Ir al detalle</Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainerComponent;
