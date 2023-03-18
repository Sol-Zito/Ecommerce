import React from "react";
import { Link } from "react-router-dom";

const Products = ({ items, deleteProductByID, updateProductByID }) => {
  return (
    <div>
      <Link to="/create-product">
        <button>Agregar nuevo producto</button>
      </Link>

      {items.map((element) => (
        <div
          key={element.id}
          style={{
            border: " 2px solid",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "space-around",
            justifyContent: "space-around",
            alignItems: "center",
            maxWidth: "inherit",
            margin: "auto",
          }}
        >
          <h2>{element.name}</h2>
          <p> Precio: {element.price}</p>
          <span>Stock: {element.stock}</span>
          <p>Description: {element.description}</p>
          <img src={element.img} style={{ width: "200px", height: "200px" }} />
          <button
            onClick={() => {
              deleteProductByID(element.id);
            }}
          >
            Borrar
          </button>
          <button
            onClick={() => {
              updateProductByID(element.id);
            }}
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
