import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { updateProducts } from "../../../services/ProductServices";
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

const CardUpdate = ({setOpen, updateProduct}) => {

  const [product, setProduct] = useState(updateProduct)

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      let data = {
        name: product.name,
        price: Number(product.price),
        stock: product.stock,
        description: product.description,
        category: product.category,
        img: product.img,
      };

    updateProducts( product.id, data);
    setOpen(false)

  };

  return (
    <div>
    <Box sx={{ ...style, width: 400 }}>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "5px", backgroundColor: 'white' }}
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
          id="name-product"
          type="text"
          name="name"
          variant="outlined"
          fullWidth
          label={product.name}
          onChange={handleChange}
        />
        <TextField
          id="price-product"
          type="text"
          name="price"
          variant="outlined"
          fullWidth
          label={product.price}
          onChange={handleChange}
        />
        <TextField
          id="stock-product"
          type="text"
          name="stock"
          variant="outlined"
          fullWidth
          label={product.stock}
          onChange={handleChange}
        />
        <TextField
          id="description-product"
          type="text"
          name="description"
          variant="outlined"
          fullWidth
          label={product.description}
          onChange={handleChange}
        />
        <TextField
          id="category-product"
          type="text"
          name="category"
          variant="outlined"
          fullWidth
          label={product.category}
          onChange={handleChange}
        />
        <TextField
          id="img-product"
          type="text"
          name="img"
          variant="outlined"
          fullWidth
          label="img del producto"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>

        <Button type="button" variant="contained" onClick={()=>setOpen(false)}>
          Cerrar
        </Button>
      </form>
      </Box>
    </div>
  );
};

export default CardUpdate;
