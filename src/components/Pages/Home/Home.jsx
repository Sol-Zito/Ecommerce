import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    console.log("ya termine el proceso");
    navigate("/shop");
  };
  return (
    <div>
      <br></br>
      <h1>Bienvenido al home</h1>
      <br></br>
      <Button variant="contained" onClick={login} color="success">
        Ingresar
      </Button>
    </div>
  );
};

export default Home;
