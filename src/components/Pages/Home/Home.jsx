import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext/UserContext";

const Home = () => {
  const navigate = useNavigate();

  const loginFunction = () => {
    console.log("ya termine el proceso");
    navigate("/shop");
  };
  return (
    <>
      <br></br>
      <h1>Bienvenido al home</h1>

      <br></br>
      <Button variant="contained" onClick={loginFunction} color="success">
        Ingresar
      </Button>
    </>
  );
};

export default Home;
