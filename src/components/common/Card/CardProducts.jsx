import React from "react";

const CardProducts = ({ item, deleteProductByID, updateProductByID }) => {
  const { name, price, stock, description, img } = item;

  return (
    <div>
      <h2>{name}</h2>
      <p> Precio: {price}</p>
      <span>Stock: {stock}</span>
      <p>Description: {description}</p>
      <img src={img} style={{ width: "200px", height: "200px" }} />
      <button
        onClick={() => {
          deleteProductByID(item.id);
        }}
      >
        Borrar
      </button>
      <button
        onClick={() => {
          updateProductByID(item.id);
        }}
      >
        Editar
      </button>
    </div>
  );
};

export default CardProducts;
