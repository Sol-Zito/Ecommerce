import React from "react";
import { Button, CssBaseline } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import CartCard from "./CartCard";

const Cart = ({ state, clearCarrito, removeProduct }) => {
  return (
    <>
      <h1>Carrito:</h1>

      {!state.totalPrice.length && (
        <h3>Todavia no se han agregado productos</h3>
      )}

      {state.cart.length > 0 && (
        <>
          <Button variant="contained" onClick={() => clearCarrito()}>
            <DeleteIcon />
            Vaciar Carrito
          </Button>
          <Link to="/cart/checkOut">
            <Button variant="contained">Finalizar compra</Button>
          </Link>

          <h3>Total: ${state.totalPrice} </h3>

          <Paper
            sx={{
              p: 2,
              margin: "auto",
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            {state.cart.map((objeto) => {
              return (
                <CartCard
                  key={objeto.id}
                  removeProduct={removeProduct}
                  objeto={objeto}
                />
              );
            })}
          </Paper>
        </>
      )}
    </>
  );
};

export default Cart;
