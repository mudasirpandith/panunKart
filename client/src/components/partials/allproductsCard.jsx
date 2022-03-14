import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function ProductCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          width="auto"
          image={`https://firebasestorage.googleapis.com/v0/b/uploadfilemudasir.appspot.com/o/${props.productImage}?alt=media&token=10bb6189-756f-42b4-9036-5ff783d5bf8b`}
          alt="produc Image"
        />
        <CardContent style={{ height: "150px" }}>
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
