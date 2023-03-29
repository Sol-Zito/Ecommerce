import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

const CartContainer = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);

  return (
    <div>
      <h1>Estoy en el cart</h1>
      <h2>Productos: {cart.length}</h2>
      <h3>Total: {getTotalPrice}</h3>
      {/* todavia no funciona el getTotalPrice */}

      <Button onClick={() => clearCart()}>
        <DeleteIcon />
        Vaciar Carrito
      </Button>

      {cart.map((objeto) => {
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
                {/* algo se rompe al agregar mas de 1 */}
              </Typography>
              <Button onClick={() => deleteProduct(objeto.id)}>
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
