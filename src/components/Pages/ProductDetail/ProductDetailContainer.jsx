import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../../services/ProductServices";
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

  return (
    <>
      <ProductDetail
        product={product}
        showForm={showForm}
        setShowForm={setShowForm}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
};

export default ProductDetailContainer;
