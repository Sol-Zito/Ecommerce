import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    userlastname: "",
    useremail: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("fue registrado");
    navigate("/home");
  };

  return (
    <>
      <h1>Bienvenido ingrese sus datos:</h1>
      <br></br>
      <form
        onSubmit={handlesubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          backgroundColor: "ActiveBorder",
        }}
      >
        <TextField
          type="text"
          placeholder="Ingrese su nombre"
          name="username"
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Ingrese su email"
          name="userlastname"
          onChange={handleChange}
        />
        <TextField
          type="text"
          placeholder="Ingrese su email"
          name="useremail"
          onChange={handleChange}
        />
        <TextField
          type="password"
          placeholder="Ingrese su email"
          name="password"
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" color="success">
          Ingresar
        </Button>
      </form>
    </>
  );
};

export default Login;
