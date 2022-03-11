import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../partials/navbar";
import product1 from "../images/product1.jpg";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={800} ref={ref} variant="filled" {...props} />;
});
export default function SingleProduct() {
  const navigate = useNavigate();
  const [productsdetial, setProducts] = useState([]);
  const [itemInCart, setCartNumber] = useState(0);
  const { productName } = useParams();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    EuserName: "",
  });
  console.log(productName);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  async function addToCart() {
    console.log(form);
    if (form !== "") {
      const res = await fetch(`/addcart/${productName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.status === 200) {
        setCartNumber(data.products.length);
        setOpen(true);
      }
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    async function ifUser() {
      try {
        const res = await fetch(`/auth`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const data = await res.json();
        if (res.status === 200) {
          setCartNumber(data.products.length);
          setForm({ EuserName: data.userName });
        }
      } catch (err) {
        setCartNumber(0);
        setForm("");
      }
    }

    async function getProducts() {
      const res = await fetch(`/getSingleproduct/${productName}`, {
        method: "GET",
      });
      const data = await res.json();
      if (res.status === 200) {
        setProducts(data[0]);
        console.log(productsdetial);
      } else {
        window.alert(data);
      }
    }
    ifUser();
    getProducts();
  }, [productsdetial.length, itemInCart]);
  return productsdetial ? (
    <>
      {" "}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product Added To Cart
          </Alert>
        </Snackbar>
      </Stack>
      <Navbar items={itemInCart} />
      <Grid container columnGap={2}>
        <Grid xs={12} md={5} xl={5}>
          <img style={{ width: "100%" }} src={product1} alt="productImage" />
        </Grid>
        <Grid xs={12} md={5} xl={5}>
          <h1>{productsdetial.productName}</h1>
          <p> {productsdetial.productDes} </p>

          <h3 style={{ color: "green", display: "inline-block" }}>
            Rs. {productsdetial.productPrice}{" "}
          </h3>
          <p
            style={{
              color: "red",
              fontWeight: "100",
              textDecorationLine: "line-through",
              display: "inline-block",
              paddingLeft: "20px",
            }}
          >
            Rs. {productsdetial.productPrice + 200}
          </p>
          <br />
          <p>Category : {productsdetial.productCategory} </p>
          <p>Description : {productsdetial.productLongDes} </p>
          <Button
            variant="contained"
            color="secondary"
            onClick={addToCart}
            startIcon={<ShoppingBasketRoundedIcon />}
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </>
  ) : (
    <div>
      <Navbar items="0" />
      <center>
        <h1>Loading please wait</h1>
      </center>
    </div>
  );
}