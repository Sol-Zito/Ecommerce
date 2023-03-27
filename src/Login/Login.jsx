import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('fue registrado');
    navigate("/home");
  };

  return (
    <>
      <h1>Bienvenido ingrese sus datos:</h1>
      <br></br>
      <form
        onSubmit={handlesubmit}
        style={{ display: "flex", flexDirection: "column", gap: "5px" , backgroundColor:'ActiveBorder'}}
      >
        <TextField
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
        />

        <Button type='submit' variant="contained" color="success">
          Ingresar
        </Button>
      </form>
    </>
  );
};

export default Login;
