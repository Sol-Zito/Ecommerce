import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const login = () => {
    ///todo el loguep
    console.log("ya termine el proceso");
    navigate("/shop");
  };

  return (
    <div>
      <NavLink
        to="/login"
       
      >
       <button className={style.navBar}>Ir al login</button> 
      </NavLink>

      <NavLink
        to="/shop"
       
      >
       <button className={style.navBar}>Ir a la tienda</button>  
      </NavLink>

      <NavLink
        to="/cart"
        
      >
        <button className={style.navBar}>Ir al carrito</button>
      </NavLink>

      <h1>Bienvenido al home</h1>

      <button onClick={login} className={style.top}>Ingresar</button>
    </div>
  );
};

export default Home;
