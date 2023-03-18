import "./App.css";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Grid } from "@mui/material";

import Swal from "sweetalert2";

const PrimerClase = () => {
  const dispararAlerta = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Registrado con exito",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          //backgroundColor: "primary.dark",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Ingresa tu nombre" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Ingresa tu email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={dispararAlerta}
              >
                Enviar
              </Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Cancelar
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PrimerClase;
