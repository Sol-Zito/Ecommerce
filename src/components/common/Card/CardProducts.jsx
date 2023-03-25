import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardProducts = ({ item, deleteProductByID, updateProductByID }) => {

  return (
    <div
            style={{
              border: " 2px solid",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "space-around",
              justifyContent: "space-evenly",
              alignItems: "center",
              maxWidth: "300px",
              margin: "auto",
            gap: "6px",
            }}
          >
            <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
              <CardMedia
                sx={{ height: 200, width: 300 }}
                image={item.img}
                title={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    deleteProductByID(item.id);
                  }}
                >
                  Borrar
                </Button>

                <Button
                  size="small"
                  onClick={ () => {updateProductByID(item)}}
                >
                  Editar
                </Button>

                <Link to={`/productDetail/${item.id}`}>
                  <Button>
                    Ver detalle
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
  );
};

export default CardProducts;
