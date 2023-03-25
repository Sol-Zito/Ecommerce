import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h1>ProductDetail</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
