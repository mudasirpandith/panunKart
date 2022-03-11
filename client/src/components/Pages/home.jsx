import React, { useEffect, useState } from "react";
import ProductCard from "../partials/allproductsCard";
import Product1 from "../images/product1.jpg";

import { Navigate } from "react-router-dom";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import {Grid } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Navbar from '../partials/navbar'
require("./home.css");
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Home() {
  var list = [Product1, Product2, Product3];
  const [allproducts, setProducts] = useState([]);
  const [itemInCart, setCartNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    EuserName: "",
  });
 
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function addToCart(productName) {
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
      Navigate("/login");
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
      const res = await fetch("/getProducts", {
        method: "GET",
      });
      const data = await res.json();
      if (res.status === 200) {
        setProducts(data);
      } else {
        window.alert(data);
      }
    }
    ifUser();
    getProducts();
  }, [allproducts, itemInCart]);
  return (
    <>
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
  <Navbar items={itemInCart}/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnGap={2}>
          {allproducts.map((product, index) => {
            return (
              <>
                <Grid xs={12} xl={2}>
                  <ProductCard
                    productName={product.productName}
                    productDes={product.productDes}
                    productPrice={product.productPrice}
                    productImage={list[index]}
                    onClick={addToCart}
                  />{" "}
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
