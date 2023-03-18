import { Button } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  
  const login = () => {
    console.log("ya termine el proceso");
    navigate("/shop");
  };

  return (
    <div className={style.btnContenedor}>
      <div style={{ display: "flex", gap: "2px" }}>
        <NavLink to="/login">
          <Button variant="contained">Ir al login</Button>
        </NavLink>

        <NavLink to="/shop">
          <Button variant="contained">Ir a la tienda</Button>
        </NavLink>

        <NavLink to="/cart">
          <Button variant="contained">Ir al carrito</Button>
        </NavLink>
      </div>
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
