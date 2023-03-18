import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="nombre del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="precio del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="stock"
          placeholder="stock del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="category del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="img del producto"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CreateProduct;
