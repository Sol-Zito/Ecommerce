import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    img: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);

    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: 30,
      description: newProduct.description,
      category: newProduct.category,
      img: newProduct.img,
    };

    axios.post("http://localhost:5000/productos", data);

    navigate("/shop");
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <form
            action=""
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
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
              label="nombre del producto"
              onChange={handleChange}
            />
            <TextField
              id="price-product"
              type="text"
              name="price"
              variant="outlined"
              fullWidth
              label="precio del producto"
              onChange={handleChange}
            />
            <TextField
              id="stock-product"
              type="text"
              name="stock"
              variant="outlined"
              fullWidth
              label="stock del producto"
              onChange={handleChange}
            />
            <TextField
              id="description-product"
              type="text"
              name="description"
              variant="outlined"
              fullWidth
              label="description del producto"
              onChange={handleChange}
            />
            <TextField
              id="category-product"
              type="text"
              name="category"
              variant="outlined"
              fullWidth
              label="category del producto"
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
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateProduct;
