import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContexReducer } from "../../../Context/CartContextReducer";
import { useEffect } from "react";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { state, dispatch } = useContext(CartContexReducer);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_PRICE" });
  }, [state.cart]);

  const clearCarrito = () => {
    if (state.totalQuantity > 0) {
      Swal.fire({
        title: "Quiere vaciar el carrito?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si, seguro",
        denyButtonText: `No, me arrepiento`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Carrito vaciado con exito!", "", "success");
          dispatch({ type: "CLEAR_CART" });
        } else if (result.isDenied) {
          Swal.fire("El carrito queda como esta", "", "info");
        }
      });
    } else {
      Swal.fire("Aun no se han agregado productos");
    }
  };

  return (
    <div>
      <CssBaseline />
      <br />
      <h1>Estoy en el cart</h1>
      <br />
      {/* <h2>Productos: {state.totalQuantity}</h2> */}
      {state.totalPrice > 0 ? (
        <h3>Total: ${state.totalPrice} </h3>
      ) : (
        <h3>Totavia no se han agregado productos</h3>
      )}

      <br />
      <Button variant="contained" onClick={() => clearCarrito()}>
        <DeleteIcon />
        Vaciar Carrito
      </Button>

      <Button variant="contained">Finalizar compra</Button>

      {state.cart.map((objeto) => {
        return (
          <Card
            key={objeto.id}
            sx={{ maxWidth: 200, maxHeight: 300, margin: "auto" }}
          >
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
