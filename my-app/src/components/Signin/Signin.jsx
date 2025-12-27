import { useState } from "react";
import "./sigin.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/config.js";
import { toast } from "react-toastify";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      console.log("STATUS:", res.status);
      console.log("LOGIN RESPONSE:", result);

      if (!res.ok) {
        toast(result.message || "Login failed");
        return;
      }

      // optionally save token/user
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.data));

      toast("Login successful");
      navigate("/");

    } catch (err) {
      console.error(err);
      toast("Network or server error");
    }
  };

  return (
    <div className="container">
      <form className="mt-3 form" onSubmit={handleClick}>
        <p className="title">Login</p>

        <input
          id="email"
          className="input"
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />

        <input
          id="password"
          className="input"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          Login
        </button>

        <p className="mt-5 p_tag">
          Don't have an account?{" "}
          <Link to="/register" className="link">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
