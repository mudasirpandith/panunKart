import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const res = await fetch("http://localhost:4000/register", {
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
    }
  }

  return (
    <>
      Register
      <form style={{ margin: "20px" }} onSubmit={onsubmit} method="post">
        <input
          className="form-control"
          type="text"
          name="userName"
          value={form.userName}
          placeholder="userName"
          id="userName"
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="text"
          name="userPhone"
          value={form.userPhone}
          placeholder="userPhone"
          id="userPhone"
          onChange={handleChange}
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
          id="password"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
