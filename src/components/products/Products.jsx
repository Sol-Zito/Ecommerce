import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Products = ({ items, deleteProductByID, updateProductByID }) => {
  return (
    
    <div>
      <Link to="/create-product">
        <Button variant="outlined">Agregar nuevo producto</Button>
      </Link>
        
      {items.map((element) => (
        <div style={{
            border: " 2px solid",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "space-around",
            justifyContent: "space-around",
            alignItems: "center",
            maxWidth: "300px",
            margin: "auto",
          }}>

        <Card key={element.id} sx={{ maxWidth: 400 }}>
            <CardMedia 
                sx={{ height: 200 }}
                image={element.img}
                title={element.name}
             />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {element.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              ${element.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {element.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {
                    deleteProductByID(element.id);
                  }}>Borrar</Button>
              <Button size="small" onClick={() => {
                    updateProductByID(element.id);
                  }}>Editar</Button>
            </CardActions>
        </Card>
        </div>

      ))}
    </div>
  );
};

export default Products;
