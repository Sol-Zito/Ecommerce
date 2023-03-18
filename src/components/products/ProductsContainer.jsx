import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);
  const [isCreated, setIscreated] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);


  useEffect(() => {
    setIscreated(false);
    setIsDelete(false);
    setIsUpdate(false)
    const productos = axios.get("http://localhost:5000/productos");
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isCreated, isDelete, isUpdate]);

  const deleteProductByID = (id) =>{
    axios.delete(`http://localhost:5000/productos/${id}`);
    setIsDelete(true)
  }
  const updateProductByID = (id) =>{
    axios.patch(`http://localhost:5000/productos/${id}`, {price: 6000});
    setIsUpdate(true)
  }

  return (
    <Products items={items} deleteProductByID={deleteProductByID} updateProductByID={updateProductByID}/>
  );
};

export default ProductsContainer;
