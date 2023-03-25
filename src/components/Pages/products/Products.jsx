import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CardProducts from "../../common/Card/CardProducts";

const Products = ({ items, deleteProductByID, updateProductByID }) => {
  return (
    <>
      <Link to="/create-product">
        <Button variant="outlined">Agregar nuevo producto</Button>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "6px",
        }}
      >
        {items.map((element) => (
          <CardProducts key={element.id} item={element} deleteProductByID={deleteProductByID} updateProductByID={updateProductByID}/>
        ))}
      </div>
    </>
  );
};

export default Products;
