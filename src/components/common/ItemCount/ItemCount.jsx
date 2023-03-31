import { Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContexReducer } from "../../../Context/CartContextReducer";

const ItemCount = ({ product, addToCartModStock }) => {
  const [count, setCount] = useState(1);
  const { dispatch } = useContext(CartContexReducer);

  const onAdd = () => {
    if (product.stock > 0) {
      let obj = {
        ...product,
        stock: product.stock - count,
        quantity: count,
      };

      addToCartModStock(count);

      dispatch({ type: "ADD_TO_CART", payload: obj });

      alert(`El producto: "${product.name}" fue agregado al carrito`);
      setCount(1);
    } else {
      alert(`No hay stock`);
    }
  };

  const restCount = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const sumCount = () => {
    if (product.stock > count) {
      setCount(count + 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        flexDirection: "column",
        alignContent: "space-around",
        flexWrap: "wrap",
        alignItems: "stretch",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Button onClick={restCount}>-</Button>
        <h3>{count}</h3>
        <Button onClick={sumCount}>+</Button>
      </Stack>
      <Button onClick={onAdd}> Add to cart</Button>
    </div>
  );
};

export default ItemCount;
