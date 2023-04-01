import React from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            listStyle: "none",
            width: "95%",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "left",
            gap: "20px",
            padding: "10px",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            paddingInlineStart: "40px",
          }}
        >
          <li>
            <Button>Trabajá con nosotros</Button>
          </li>
          <li>
            <Button>Términos y condiciones</Button>
          </li>
          <li>
            <Button>Cómo cuidamos tu privacidad</Button>
          </li>
          <li>
            <Button>Accesibilidad</Button>
          </li>
          <li>
            <Button>Información al usuario financiero</Button>
          </li>
          <li>
            <Button>Defensa del Consumidor</Button>
          </li>
          <li>
            <Button>Información sobre seguros</Button>
          </li>
          <li>
            <Button>Ayuda</Button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Footer;
