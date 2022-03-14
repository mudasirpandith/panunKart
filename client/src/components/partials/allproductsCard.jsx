import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
export default function ProductCard(props) {
  function handleClick() {
    props.onClick(props.productName);
  }
  return (
    <Card style={{ height: "200" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.productImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.productName.slice(0, 36)}...
          </Typography>
          {props.productDes.slice(0, 30)}... <br />
          <p
            style={{
              color: "red",
              fontWeight: "100",
              textDecorationLine: "line-through",
              display: "inline-block",
            }}
          >
            ₹ {props.productPrice + 200}
          </p>
          <p
            style={{
              color: "green",
              display: "inline-block",
              paddingLeft: "5px",
            }}
          >
            {" "}
            <strong> ₹ {props.productPrice} </strong>
            only
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
