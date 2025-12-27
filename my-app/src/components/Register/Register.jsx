import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import { toast } from "react-toastify";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

    // basic validation
    if (
      !credentials.name ||
      !credentials.email ||
      !credentials.phone ||
      !credentials.password
    ) {
      toast("Please fill all fields");
      return;
    }

    if (credentials.password.length < 6) {
      toast("Password must be at least 6 characters");
      return;
    }

    // build payload compatible with MOST backends
    const payload = {
      // usual expected fields
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,

      // often-required alternates
      username: credentials.name,

      // phone variations
      phone: credentials.phone,
      mobile: credentials.phone,
      phoneNumber: credentials.phone,

      // for confirm password APIs
      confirmPassword: credentials.password,
    };

    try {
      console.log("📤 Sending payload:", payload);

      const res = await fetch(`https://adarshhelvarblogapp.onrender.com/api/v1/auth/registerUser/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      console.log("📥 STATUS:", res.status);
      console.log("📥 BACKEND SAYS:", result);

      if (!res.ok) {
        toast(result.message || result.error || "Registration failed");
        return;
      }

      toast("Registration successful");
      navigate("/signin");
    } catch (err) {
      console.error(err);
      toast("Network or server error");
    }
  };

  return (
    <div className="container">
      <form className="mt-3 form" onSubmit={handleClick}>
        <p className="title">Create Account</p>

        <input
          id="name"
          className="input"
          type="text"
          placeholder="Name"
          value={credentials.name}
          onChange={handleChange}
        />

        <input
          id="email"
          className="input"
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />

        <input
          id="phone"
          className="input"
          type="text"
          placeholder="Phone number"
          value={credentials.phone}
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
          Register
        </button>

        <p className="mt-3 p_tag">
          Already have an account?{" "}
          <Link to="/signin" className="link">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
