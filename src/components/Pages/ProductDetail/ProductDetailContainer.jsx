import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductsById,
  updateProducts,
} from "../../../services/ProductServices";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});

  const [showForm, setShowForm] = useState(false);

  const [isUpdated, setIsUpdated] = useState(false); //

  const { id } = useParams();

  useEffect(() => {
    setIsUpdated(false); //

    const products = getProductsById(id);
    products
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [isUpdated]);

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

    setIsUpdated(true);
    updateProducts(product.id, data);
    setShowForm(false);
  };

  return (
    <>
      <ProductDetail
        key={product.id}
        product={product}
        showForm={showForm}
        setShowForm={setShowForm}
        setIsUpdated={setIsUpdated}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ProductDetailContainer;
