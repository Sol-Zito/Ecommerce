import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  getProducts,
} from "../../../services/ProductServices";
import CardUpdate from "../../common/Card/CardUpdate";
import Products from "./Products";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const [open, setOpen] = useState(false);
  const  [ updateProduct, setUpdateProduct] = useState({})

  useEffect(() => {
    setIsChange(false);
    setUpdateProduct({})

    const productos = getProducts();
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isChange, open]);

  const deleteProductByID = (id) => {
    deleteProduct(id);
    setIsChange(true);
  };


  const updateProductByID = (item) => {
    setUpdateProduct({...item})
    setOpen(true)
  };

  return (
    <>

    <Products
      items={items}
      deleteProductByID={deleteProductByID}
      updateProductByID={updateProductByID}
    />

    {
      open && <CardUpdate updateProduct={updateProduct} setOpen={setOpen}/>
    }    
    </>
  );
};

export default ProductsContainer;
