import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../../services/ProductServices";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const products = getProductsById(id);
    products
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailContainer;
