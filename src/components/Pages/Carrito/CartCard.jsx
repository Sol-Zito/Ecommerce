import { Avatar, Button, ButtonBase, Grid, Typography } from "@mui/material";
import React from "react";

const CartCard = ({ removeProduct, objeto }) => {
  return (
    <Grid container spacing={2} margin="9px auto">
      <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Avatar
            sx={{ width: 90, height: 90 }}
            alt={objeto.name}
            src={objeto.img}
          />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              Name: {objeto.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cantidad: {objeto.quantity ? `${objeto.quantity}` : "0"}
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={() => removeProduct(objeto.id)}>Eliminar</Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div" margin="auto">
            ${objeto.price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartCard;
