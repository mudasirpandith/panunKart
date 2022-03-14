import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
require("./cred.css");
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    return setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }
  async function onsubmit(e) {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.status === 200) {
      window.alert("user logged in succesfully");
      navigate("/");
    } else {
      window.alert(data.message);
      navigate("/login");
    }
  }

  return (
    <>
      {" "}
      <div id="login">
        <h1>Login</h1>
        <form style={{ margin: "20px" }} onSubmit={onsubmit} method="post">
          <TextField
            id="standard-basic"
            label="Username"
            name="userName"
            value={form.userName}
            placeholder="Username"
            onChange={handleChange}
            variant="outlined"
          />
          <br /> <br />
          <TextField
            label="Password"
            id="standard-basic"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            variant="outlined"
          />{" "}
          <br /> <br />
          <Button variant="contained" color="success" type="submit">
            Log In
          </Button>{" "}
          <br />
          <NavLink className="navlink" to="/register">
            Create account
          </NavLink>
          <NavLink className="navlink" to="/">
            <Button endIcon={<CloseIcon />}> Cancel</Button>
          </NavLink>
        </form>{" "}
        <br />
      </div>
    </>
  );
}
