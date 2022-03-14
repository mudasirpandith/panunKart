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
          image={`https://firebasestorage.googleapis.com/v0/b/uploadfilemudasir.appspot.com/o/${props.productImage}?alt=media&token=10bb6189-756f-42b4-9036-5ff783d5bf8b`}
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
              ₹ {props.productPrice + 200}
            </p>
            <p
              style={{
                color: "green",
                display: "inline-block",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <strong> ₹ {props.productPrice} </strong>
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
