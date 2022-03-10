import React, { useEffect, useState } from "react";
import ProductCard from "./productCart";
import Product1 from "../images/product1.jpg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Drawer } from "@mui/material";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Home() {
  
  var list = [Product1, Product2, Product3];
  const [allproducts, setProducts] = useState([]);
  const [itemInCart, setCartNumber] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function addToCart(productName) {
    const res = await fetch(`/addcart/${productName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      setCartNumber(data.products.length);
      setOpen(true);
    }
  }
  useEffect(() => {
    async function ifUser() {
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
  },[allproducts]);
  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product Added To Cart
          </Alert>
        </Snackbar>
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              KaeshurKart
            </Typography>

            <div>
              <Link to="/cart">
                <Badge badgeContent={itemInCart}>
                  <ShoppingCartSharpIcon color="danger" />
                </Badge>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        open={isOpen}
        zIndex="2222"
        onClose={toggleDrawer}
        direction="left"
        width="300"
        className="bla bla bla"
        duration={400}
      >
        <h1>sju3hhuwhewej</h1>
      </Drawer>
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
