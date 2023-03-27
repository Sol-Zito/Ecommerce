import React from "react";
import TableFooter from "@mui/material/TableFooter";

const Footer = () => {
  return (
    <>
    <br/>
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
          <li>Trabajá con nosotros</li>
          <li>Términos y condiciones</li>
          <li>Cómo cuidamos tu privacidad</li>

          <li>Accesibilidad</li>
          <li>Información al usuario financiero</li>

          <li>Defensa del Consumidor</li>
          <li>Información sobre seguros</li>
          <li>Ayuda</li>
        </ul>
      </nav>
    </>
  );
};

export default Footer;
