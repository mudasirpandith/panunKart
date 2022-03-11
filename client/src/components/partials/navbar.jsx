import React, {  useState } from "react";

import {NavLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Drawer } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
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
                <Badge badgeContent={props.items}>
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
          <NavLink className="navlink" to="/cart">
            <Button startIcon={<ShoppingCartIcon />}>Cart</Button>
          </NavLink>{" "}
          <br />
          <NavLink className="navlink" to="/">
            home
          </NavLink>{" "}
          <br />
          <NavLink className="navlink" to="/login">
            <Button startIcon={<AccountCircleIcon />}>Login</Button>
          </NavLink>{" "}
          <br />
          <NavLink className="navlink" to="/admin">
            admin
          </NavLink>{" "}
          <br />
          <NavLink className="navlink" to="/myorders">
            <Button startIcon={<ShoppingBagIcon />}>My Orders</Button>
          </NavLink>{" "}
          <br />{" "}
        </div>
      </Drawer>
    </>
  );
}
