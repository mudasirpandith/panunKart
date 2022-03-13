import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    userPhone: "",
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
    const res = await fetch("/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.status === 200) {
      window.alert("user registered in succesfully");
      navigate("/login");
    } else {
      window.alert(data.message);
    }
  }

  return (
    <>
      {" "}
      <div id="login">
        <h1>Register</h1>
        <form style={{ margin: "20px" }} onSubmit={onsubmit} method="post">
          <TextField
            id="standard-basic"
            label="Username"
            type="text"
            name="userName"
            value={form.userName}
            placeholder="username"
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Phone Number"
            type="tel"
            name="userPhone"
            value={form.userPhone}
            placeholder="userPhone"
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            name="password"
            placeholder="password"
            value={form.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="success">
            {" "}
            Register
          </Button>{" "}
          <br />
          <NavLink className="navlink" to="/login">
            Login
          </NavLink>
        </form>
      </div>
    </>
  );
}
