import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { CartContexReducer } from "../../../Context/CartContextReducer";

const CheckOut = () => {
  const { cart } = useContext(CartContexReducer);
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "El nombre debe ser de 5 caracteres"),
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("No es un email valido"),
      password: Yup.string().required("Password is required"),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    validateOnChange: false,
  });
  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Finalizar compra
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su nombre"
              name="name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
              //en caso de que no tenga name --> onchange={(e)=> setFieldValue("name", e.target.value)}
            />
            {/* {errors.name && <span>{errors.name}</span>} */}
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su email"
              name="email"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            {/* {errors.name && <span>{errors.name}</span>} */}
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese password"
              name="password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              error={errors.password ? true : false}
              helperText={errors.password}
            />
            {/* {errors.name && <span>{errors.name}</span>} */}
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Vuelva a ingresar password"
              name="passwordConfirmation"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              error={errors.passwordConfirmation ? true : false}
              helperText={errors.passwordConfirmation}
            />
            {/* {errors.name && <span>{errors.name}</span>} */}
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default CheckOut;
