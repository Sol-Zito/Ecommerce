import React, { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../../services/ProductServices";
import CardUpdate from "../../common/Card/CardUpdate";
import Products from "./Products";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [updateProduct, setUpdateProduct] = useState({});

  useEffect(() => {
    setIsChange(false);
    setUpdateProduct({});

    const productos = getProducts();
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isChange, showForm]);

  const deleteProductByID = (id) => {
    deleteProduct(id);
    setIsChange(true);
  };

  const updateProductByID = (item) => {
    setUpdateProduct({ ...item });
    setShowForm(true);
  };

  return (
    <>
      <Products
        items={items}
        deleteProductByID={deleteProductByID}
        updateProductByID={updateProductByID}
      />

      {showForm && (
        <CardUpdate updateProduct={updateProduct} setShowForm={setShowForm} />
      )}
    </>
  );
};

export default ProductsContainer;
