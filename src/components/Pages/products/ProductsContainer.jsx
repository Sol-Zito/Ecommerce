import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  getProducts,
  updateProducts,
} from "../../../services/ProductServices";
import CardUpdate from "../../common/Card/CardUpdate";
import Products from "./Products";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const ProductsContainer = () => {
  const [items, setItems] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const [updateProduct, setUpdateProduct] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsChange(false);
    setUpdateProduct({});
    setIsUpdated(false);

    // let refCollection = collection(db, "products");
    // getDocs(refCollection).then((res) => {
    //   const products = res.docs.map((product) => {
    //     console.log(product);
    //     // return {
    //     //   ...product.data(),
    //     //   id: product.id,
    //     // };
    //   });
    // });

    const productos = getProducts();
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isChange, isUpdated]);

  const deleteProductByID = (id) => {
    deleteProduct(id);
    setIsChange(true);
  };

  const updateProductByID = (item) => {
    setUpdateProduct(item);
    console.log(" producto en update", updateProduct);
    setShowForm(true);
  };

  const handleChange = (e) => {
    setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: updateProduct.name,
      price: Number(updateProduct.price),
      stock: updateProduct.stock,
      description: updateProduct.description,
      category: updateProduct.category,
      img: updateProduct.img,
    };

    setIsUpdated(true);
    updateProducts(updateProduct.id, data);
    setShowForm(false);
  };

  return (
    <>
      <Products
        items={items}
        deleteProductByID={deleteProductByID}
        updateProductByID={updateProductByID}
      />

      {showForm && (
        <CardUpdate
          updateProduct={updateProduct}
          setShowForm={setShowForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default ProductsContainer;
