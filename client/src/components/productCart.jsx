import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
export default function ProductCard(props) {
  function handleClick() {
    props.onClick(props.productName);
  }
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.productImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.productDes} <br />
            <h2>Rs.{props.productPrice}</h2>
          </Typography>{" "}
        </CardContent>
      </CardActionArea>
      <Button onClick={handleClick}>Add To Cart</Button>
    </Card>
  );
}
