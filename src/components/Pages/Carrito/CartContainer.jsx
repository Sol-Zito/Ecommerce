import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContexReducer } from "../../../Context/CartContextReducer";
import { useEffect } from "react";

const CartContainer = () => {
  const { state, dispatch } = useContext(CartContexReducer);
  console.log(state.cart);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_PRICE" });
  }, [state.cart]);

  return (
    <div>
      <h1>Estoy en el cart</h1>
      <h2>Productos: {state.totalQuantity}</h2>
      <h3>Total: {state.totalPrice} </h3>

      <Button
        variant="contained"
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        <DeleteIcon />
        Vaciar Carrito
      </Button>

      <Button variant="contained">Finalizar compra</Button>

      {state.cart.map((objeto) => {
        return (
          <Card key={objeto.id} sx={{ maxWidth: 200, maxHeight: 300 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {objeto.name}
              </Typography>
              <CardMedia
                sx={{ height: 100, width: 150 }}
                image={objeto.img}
                title={objeto.name}
              />
              <Typography variant="body2" color="text.secondary">
                ${objeto.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cantidad: {objeto.quantity ? `${objeto.quantity}` : "0"}
              </Typography>
              <Button
                onClick={() =>
                  dispatch({ type: "REMOVE_PRODUCT", payload: objeto.id })
                }
              >
                <DeleteIcon />
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CartContainer;
