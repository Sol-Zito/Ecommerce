import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreIcon from "@mui/icons-material/More";

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
        width: "auto",
        height: "auto",
        margin: "auto",
        gap: "6px",
      }}
    >
      <Card sx={{ width: 400, height: 400 }}>
        <CardMedia
          sx={{ height: 200, width: 300, margin: "auto" }}
          image={item.img}
          title={item.name}
        />
        <CardContent
          sx={{
            padding: " 6px",
            height: "148px",
            width: "auto",
            margin: "auto",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
            <DeleteIcon />
          </Button>
          <Button
            size="small"
            onClick={() => {
              updateProductByID(item);
            }}
          >
            <ModeEditIcon />
          </Button>
          <Link to={`/productDetail/${item.id}`}>
            <Button>
              <MoreIcon />
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardProducts;
