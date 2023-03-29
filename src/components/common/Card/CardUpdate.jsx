import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CardUpdate = ({
  setShowForm,
  updateProduct,
  handleSubmit,
  handleChange,
}) => {
  const { name, price, stock, description, category } = updateProduct;

  return (
    <>
      <Box sx={{ ...style, width: 400 }}>
        <form
          action=""
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            backgroundColor: "white",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="primary"
          >
            Complete los datos:
          </Typography>
          <TextField
            id="name-updateProduct"
            type="text"
            name="name"
            variant="outlined"
            fullWidth
            label={`Nombre: ${name}`}
            onChange={handleChange}
          />
          <TextField
            id="price-updateProduct"
            type="text"
            name="price"
            variant="outlined"
            fullWidth
            label={`Precio: ${price}`}
            onChange={handleChange}
          />
          <TextField
            id="stock-updateProduct"
            type="text"
            name="stock"
            variant="outlined"
            fullWidth
            label={`Stock: ${stock}`}
            onChange={handleChange}
          />
          <TextField
            id="description-updateProduct"
            type="text"
            name="description"
            variant="outlined"
            fullWidth
            label={`Descripcion: ${description}`}
            onChange={handleChange}
          />
          <TextField
            id="category-updateProduct"
            type="text"
            name="category"
            variant="outlined"
            fullWidth
            label={`Categoria: ${category}`}
            onChange={handleChange}
          />
          <TextField
            id="img-updateProduct"
            type="text"
            name="img"
            variant="outlined"
            fullWidth
            label="Imagen del producto"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Enviar
          </Button>

          <Button
            type="button"
            variant="contained"
            onClick={() => setShowForm(false)}
          >
            Cerrar
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CardUpdate;
