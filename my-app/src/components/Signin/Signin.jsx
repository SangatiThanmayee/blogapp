import React, { useContext, useState } from "react";
import "./sigin.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/config.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { toast } from "react-toastify";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!result.ok) {
        toast(result.message); 
      }
      // console.log(result.token);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data,
        token: result.token,
        role: result.role,
      });
      // toast("Wow so easy!");
      toast(result.message); 
      navigate("/");
      window.location.reload();
    } catch (e) {
      dispatch({ type: "LOGIN_FAILURE", payload: e.message });
      toast.error(e.message);
    }
  };

  return (
    <>
      <div className="container">
        <form className="mt-3 form" onSubmit={handleClick}>
          <p className="title">Login</p>
          <input
            placeholder="E-mail"
            className="username input"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            className="password input"
            type="password"
            id="password"
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Login
          </button>
          <p className="mt-5 p_tag">
            Don't have an account ?{" "}
            <Link to="/register" className="link">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
