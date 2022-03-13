import React, { useEffect, useState } from "react";
import ProductCard from "../partials/allproductsCard";
import Product1 from "../images/product1.jpg";
import Carousel from "../partials/homeCarousl";
import { Navigate, NavLink } from "react-router-dom";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Navbar from "../partials/navbar";
require("./home.css");

export default function Home() {
  var list = [Product1, Product2, Product3];
  const [allproducts, setProducts] = useState([]);
  const [itemInCart, setCartNumber] = useState(0);
 
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
         
        }
      } catch (err) {
        setCartNumber(0);
      
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
  }, [allproducts.length, itemInCart]);
  return (
    <>
      <Navbar items={itemInCart} />
      <Carousel />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columnGap={2}>
          {allproducts.map((product, index) => {
            var url = `/productDetail/` + product.productName;
            return (
              <>
                <Grid xs={12} xl={2}>
                  <NavLink className="navlink" to={url}>
                    <ProductCard
                      productName={product.productName.slice(0,27)}
                      productDes={product.productDes.slice(0,27)}
                      productPrice={product.productPrice}
                      productImage={list[index]}
                     
                    />{" "}
                  </NavLink>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
