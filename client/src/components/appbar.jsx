import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";
export default function MenuAppBar() {
  const [userData, setUserData] = useState([]);
  const [itemInCart, setCartNumber] = useState(0);
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
        setUserData(data);
        setCartNumber(data.products.length);
        console.log(itemInCart);
      }
    }

    ifUser();
  }, [userData.length]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>
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
  );
}
