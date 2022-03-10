import React, { useEffect, useState } from "react";
import ProductCard from "./allproductsCard";
import Product1 from "../images/product1.jpg";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Navigate, NavLink } from "react-router-dom";
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
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    EuserName: "",
  });
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
              <NavLink to="/cart">
                <Badge badgeContent={itemInCart}>
                  <ShoppingCartSharpIcon color="danger" />
                </Badge>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        open={isOpen}
        zIndex="2222"
        onClose={toggleDrawer}
        direction="left"
        width="400"
        className="bla bla bla"
        duration={400}
      >
        <div className="drawer-content">
          <h3>KaehsurKart</h3>
          <NavLink to="/">home</NavLink> <br />
          <NavLink to="/cart">Cart</NavLink> <br />
          <NavLink to="/login">Login</NavLink> <br />
          <NavLink to="/admin">admin</NavLink> <br />{" "}
        </div>
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
