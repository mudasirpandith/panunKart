import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import RemoveShoppingCartRoundedIcon from "@mui/icons-material/RemoveShoppingCartRounded";
export default function ProductsInCartCard(props) {
  function handleClick() {
    props.onClick(props.productName);
  }
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          loading="lazy"
          height="140"
          image={props.productImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.productName}...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.productDes}... <br />
            <p
              style={{
                color: "red",
                fontWeight: "100",
                textDecorationLine: "line-through",
                display: "inline-block",
              }}
            >
              Rs. {props.productPrice + 200}
            </p>
            <p
              style={{
                color: "green",
                display: "inline-block",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <strong> Rs. {props.productPrice} </strong>
              only
            </p>
          </Typography>{" "}
        </CardContent>
      </CardActionArea>
      <Button
        variant="outlined"
        color="error"
        onClick={handleClick}
        startIcon={<RemoveShoppingCartRoundedIcon />}
      >
        Remove From Cart
      </Button>
    </Card>
  );
}
