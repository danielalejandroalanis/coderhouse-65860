import React from "react";

const ItemDetailContainer = ({ product }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {product.images ? (
          product.images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={product.title}
                style={{ width: 100, height: 100 }}
              />
            );
          })
        ) : (
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: 100, height: 100 }}
          />
        )}
      </div>
      <div style={{ marginLeft: 100 }}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
