import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Home.module.css";

const NavBar = () => {
  return (
    <div className={style.btnContenedor}>
      <div style={{ display: "flex", gap: "2px" }}>
        <NavLink to="/home">
          <Button variant="contained">Ir a home</Button>
        </NavLink>

        <NavLink to="/shop">
          <Button variant="contained">Ir a la tienda</Button>
        </NavLink>

        <NavLink to="/cart">
          <Button variant="contained">Ir al carrito</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
