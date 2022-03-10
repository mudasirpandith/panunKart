import React from "react";

import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
const Input = styled("input")({
  display: "none",
});
export default function Admin() {
  return (
    <>
      <h1>Welcome to Admin Panel</h1>

      <form action="" method="post">
        <TextField
          id="outlined-basic"
          label="Name Of Product"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Description"
          multiline
          variant="outlined"
        />{" "}
        <TextField id="outlined-basic" label="Price" variant="outlined" />{" "}
        <TextField id="outlined-basic" label="Product Id" variant="outlined" />
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>{" "}
      </form>
    </>
  );
}
