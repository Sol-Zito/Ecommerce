import { Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";

const ItemCount = ({ product }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const onAdd = () => {
    let obj = {
      ...product,
      quantity: count,
    };

    addToCart(obj);
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
        <Button onClick={() => setCount(count - 1)}>-</Button>
        <h3>{count}</h3>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </Stack>
      <Button onClick={onAdd}> Add to cart</Button>
    </div>
  );
};

export default ItemCount;
