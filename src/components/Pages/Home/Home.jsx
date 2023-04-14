import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../Context/Themes";
import "./home.css";

const Home = () => {
  const { state } = useContext(ThemeContext);
  const navigate = useNavigate();

  const loginFunction = () => {
    console.log("ya termine el proceso");
    navigate("/shop");
  };

  return (
    <div className={`${state.theme} div-container`}>
      <h1>Bienvenido al home</h1>
      <Button variant="contained" onClick={loginFunction} color="success">
        Ingresar
      </Button>
    </div>
  );
};

export default Home;
