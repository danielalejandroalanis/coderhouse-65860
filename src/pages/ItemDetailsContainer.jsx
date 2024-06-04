import React from "react";

import { useParams } from "react-router-dom";

import { getProductById } from "../services/productsServices";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ItemDetailsContainer = () => {
  const [product, setProduct] = React.useState({});

  const { itemId } = useParams();

  React.useEffect(() => {
    getProductById(itemId)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [itemId]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{product.price}</ListGroup.Item>
        <ListGroup.Item>{product.stock}</ListGroup.Item>
        <ListGroup.Item>{product.discountPercentage}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Comprar Ahora</Card.Link>
        <Card.Link href="#">Agregar al carrito</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailsContainer;
