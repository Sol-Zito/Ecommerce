import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  const login = () => {
    console.log("ya termine el proceso");
    navigate("/home");
  };

  return (
    <div>
      <br></br>
      <h1>Bienvenido ingrese sus datos:</h1>
      <br></br>
      <Button variant="contained" onClick={login} color="success">
        Ingresar
      </Button>
    </div>
  )
}

export default Login
