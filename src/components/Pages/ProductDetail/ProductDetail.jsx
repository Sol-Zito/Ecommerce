import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import CardUpdate from "../../common/Card/CardUpdate";
import ItemCount from "../../common/ItemCount/ItemCount";

const ProductDetail = ({
  product,
  showForm,
  setShowForm,
  setIsUpdated,
  handleSubmit,
  handleChange,
}) => {
  return (
    <div>
      <br />
      <h1>Detalles del producto:</h1>
      <br />
      <div
        style={{
          border: " 2px solid",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "space-around",
          justifyContent: "space-evenly",
          alignItems: "center",
          maxWidth: "400px",
          margin: "auto",
          gap: "6px",
        }}
      >
        <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <CardMedia
              sx={{ height: 200, width: 300 }}
              image={product.img}
              title={product.name}
            />
            <Typography variant="body2" color="text.secondary">
              Stock: {product.stock}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descripcion: {product.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Categoria: {product.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${product.price}
            </Typography>
            <ItemCount product={product} />
          </CardContent>
        </Card>
      </div>
      <br />
      <button onClick={() => setShowForm(true)}>Modificar</button>
      {showForm && (
        <CardUpdate
          key={product.id}
          updateProduct={product}
          setShowForm={setShowForm}
          setIsUpdated={setIsUpdated}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default ProductDetail;
