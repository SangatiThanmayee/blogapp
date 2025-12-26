import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL, token } from "../../utils/config";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const EditUserInfo = () => {
  // console.log('user :>> ', user);
  const { id } = useParams();

  const { user, dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //   console.log('formData :>> ', formData);

  const submitHandler = async (event) => {
    // console.log(formData);
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: "put",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      console.log("message update user profile :>> ", message);
        toast.success(message);
      logout()
      navigate("/");
    } catch (e) {
      //   toast.error(e.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        <form className="form" onSubmit={submitHandler}>
          <p className="title">Update profile</p>
          <input
            placeholder="name"
            className="name input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="E-mail"
            className="name input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Phone number"
            className="name input"
            type="text"
            pattern="[0-9]*"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <button className="btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserInfo;
