import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={800} ref={ref} variant="filled" {...props} />;
});
require("./admin.css");
export default function Admin() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({
    productName: "",
    productDes: "",
    productLongDes: "",
    productID: "",
    productCompany: "",
    productPrice: 0,
    productCategory: "",
    productImage: "",
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  function handleChange(e) {
    const { name, value } = e.target;
    return setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  }
  async function onsubmit(e) {
    e.preventDefault();
    const res = await fetch("/add/product", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    if (res.status === 200) {
      setOpen(true);
      product("");
    } else {
      window.alert(data.message);
    }
  }

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
      <div className="admin-panel">
        <h1>Welcome to Admin Panel</h1>

        <form method="post" onSubmit={onsubmit}>
          <TextField
            id="outlined-basic"
            onChange={handleChange}
            name="productName"
            label="Product Name"
            value={product.productName}
            variant="outlined"
          />{" "}
          <br /> <br />{" "}
          <TextField
            name="productDes"
            id="outlined-basic"
            onChange={handleChange}
            value={product.productDes}
            label="ProductDes"
            variant="outlined"
          />{" "}
          <br /> <br />
          <TextField
            name="productLongDes"
            value={product.productLongDes}
            id="outlined-basic"
            onChange={handleChange}
            label="ProductLongDes"
            multiline
            variant="outlined"
          />{" "}
          <br /> <br />{" "}
          <TextField
            value={product.productID}
            name="productID"
            id="outlined-basic"
            onChange={handleChange}
            label="ProductId"
            variant="outlined"
          />{" "}
          <br /> <br />
          <TextField
            value={product.productCompany}
            name="productCompany"
            id="outlined-basic"
            onChange={handleChange}
            label="ProductCompany"
            variant="outlined"
          />{" "}
          <br /> <br />{" "}
          <TextField
            value={product.productPrice}
            name="productPrice"
            id="outlined-basic"
            onChange={handleChange}
            label="Product Price"
            variant="outlined"
          />{" "}
          <br /> <br />{" "}
          <TextField
            value={product.productCategory}
            name="productCategory"
            id="outlined-basic"
            onChange={handleChange}
            label="Product Category"
            variant="outlined"
          />{" "}
          <br /> <br />
          <Button variant="contained" color="primary" type="submit">
            Add Product
          </Button>
        </form>
      </div>
    </>
  );
}
