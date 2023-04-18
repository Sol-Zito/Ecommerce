import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const loginFunction = () => {
    console.log("ya termine el proceso");
    navigate("/shop");
  };

  let message =
    "Proin eu lectus ac metus varius vulputate. Donec venenatis rutrum dui ut venenatis. Pellentesque viverra magna id hendrerit condimentum. Aenean et mattis justo.";

  return (
    <>
      <h1>Bienvenido al home</h1>
      <Grid
        container
        spacing={3}
        width="70%"
        margin="auto"
        justifyContent="space-around"
      >
        <Grid item>
          <item>Sobre nosotros</item>
          <Typography>{message}</Typography>
        </Grid>
        <Grid item>
          <item>Contactos</item>
          <Typography>{message}</Typography>
        </Grid>
        <Grid item>
          <item>W</item>
          <Typography>{message}</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={loginFunction} color="success">
            Conocer nuestros productos...
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
