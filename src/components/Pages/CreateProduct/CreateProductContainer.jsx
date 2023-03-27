import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewProduct } from "../../../services/ProductServices";
import CreateProduct from "./CreateProduct";

const CreateProductContainer = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    img: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: newProduct.stock,
      description: newProduct.description,
      category: newProduct.category,
      img: newProduct.img,
    };

    const addProduct = createNewProduct(data);
    addProduct
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    navigate("/shop");
  };

  return (
    <>
      <CreateProduct handleSubmit={handleSubmit} handleChange={handleChange} />
    </>
  );
};

export default CreateProductContainer;
