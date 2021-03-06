import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Navbar from "../partials/navbar";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Skeleton from "@mui/material/Skeleton";
import LockIcon from "@mui/icons-material/Lock";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={800} ref={ref} variant="filled" {...props} />;
});
export default function SingleProduct() {
  const navigate = useNavigate();
  const [productsdetial, setProducts] = useState([]);
  const [itemInCart, setCartNumber] = useState(-1);
  const { productName } = useParams();
  const [open, setOpen] = useState(false);
  const [openalert, setOpenAlert] = React.useState(false);
  const [checkAuth, setAuth] = useState(false);
  const [review, setReview] = useState({
    RuserName: "",
    reviewData: "",
    RproductName: "",
    Rdate: "",
  });
  review.RproductName = productName;
  const handleAlertClose = () => {
    navigate("/login");
    setOpenAlert(false);
  };
  function handleChange(e) {
    const { name, value } = e.target;
    return setReview((prev) => {
      return { ...prev, [name]: value };
    });
  }
  const [form, setForm] = useState({
    EuserName: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function onsubmit(e) {
    e.preventDefault();
    const body = {
      RuserName: form.EuserName,
      reviewData: review.reviewData,
      RproductName: review.RproductName,
      Rdate: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    };
    if (review.RuserName === "") {
      window.alert("Refresh the page to review this product");
    }
    const res = await fetch("/addreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      setReview({
        reviewData: "",
      });
      getProducts();
    }
  }
  async function addToCart() {
    console.log(form);
    try {
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
    } catch (err) {
      setOpenAlert(true);
    }
  }

  async function getProducts() {
    const res = await fetch(`/getSingleproduct/${productName}`, {
      method: "GET",
    });
    const data = await res.json();
    if (res.status === 200) {
      setProducts(data[0]);
      setReview({ RproductName: data[0].productName });
    } else {
      window.alert(data);
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
          setReview({ RuserName: data.userName });
          setAuth(true);
        }
      } catch (err) {
        setCartNumber(0);
        setForm("");
        setAuth(false);
      }
    }

    ifUser();
    getProducts();
  }, [productsdetial.length, itemInCart]);
  return productsdetial.productPrice ? (
    <>
      {" "}
      <Dialog
        open={openalert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h4 style={{ color: "red" }}>Product Not added in cart</h4>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <center>{"Please Login to add products in cart"}</center>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertClose}>Login</Button>
        </DialogActions>
      </Dialog>
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
      <br /> <br />
      <Grid container columnGap={2}>
        <Grid style={{ textAlign: "center" }} xs={12} md={5} xl={5}>
          <img
            style={{ width: "360px", height: "auto", textAlign: "center" }}
            src={`https://firebasestorage.googleapis.com/v0/b/uploadfilemudasir.appspot.com/o/${productsdetial.productImage}?alt=media&token=10bb6189-756f-42b4-9036-5ff783d5bf8b`}
            alt="productImage"
          />
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
              paddingLeft: "10px",
            }}
          >
            Rs. {productsdetial.productPrice + 200}
          </p>
          <br />
          <p>
            {" "}
            <strong> Category :</strong> {productsdetial.productCategory}{" "}
          </p>
          <p>
            {" "}
            <strong> Description :</strong>
            {productsdetial.productLongDes}{" "}
          </p>
          <p>
            {" "}
            <strong> Comapany :</strong>
            {productsdetial.productCompany}{" "}
          </p>
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
      <br /> <br /> <br />
      <Grid container columnGap={2}>
        <Grid xs={12} md={8} xl={6}>
          <h3>Reviews</h3>
          {productsdetial.reviews.length > 0 ? (
            productsdetial.reviews
              .slice()
              .reverse()
              .map((re) => {
                return (
                  <>
                    <div
                      style={{
                        paddingLeft: "10px",
                        display: "inline-block",

                        padding: "10px",
                        backgroundColor: "lightgray",
                        margin: "3px 20px ",
                      }}
                    >
                      <p>
                        <strong>{re.review.userName}</strong>
                        <br />
                        {re.review.rev}
                        <br />
                        <span style={{ fontSize: "10px" }}>
                          {re.review.date}
                        </span>
                      </p>
                    </div>{" "}
                    <br /> <br />
                  </>
                );
              })
          ) : (
            <h3>No review Posted Yet</h3>
          )}
        </Grid>
        {checkAuth ? (
          <Grid xs={12} md={4} xl={4}>
            <h3>Add review</h3>
            <form method="POST" onSubmit={onsubmit}>
              <br />
              <TextField
                id="outlined-basic"
                onChange={handleChange}
                name="reviewData"
                required
                label="Review"
                value={review.reviewData}
                variant="outlined"
              />{" "}
              <br /> <br />
              <Button variant="contained" color="success" type="submit">
                Submit review
              </Button>
            </form>
          </Grid>
        ) : (
          <center>
            <NavLink className="navlink" to="/login">
              <Button
                variant="contained"
                color="error"
                startIcon={<LockIcon />}
              >
                Login To Review This Product{" "}
              </Button>
            </NavLink>
          </center>
        )}
      </Grid>
    </>
  ) : (
    <div>
      <Navbar items="0" />
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={window.innerWidth} height={10} />
        <Skeleton
          variant="rectangular"
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </Stack>
    </div>
  );
}
