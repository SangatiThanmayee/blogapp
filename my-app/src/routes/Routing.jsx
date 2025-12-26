import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import ContactUs from "../components/ContactUS/ContactUs";
import CreateBlog from "../components/CreateBlog/CreateBlog";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import EditUserInfo from "../components/EditUserInfo/EditUserInfo";
import AboutUs from "../components/AboutUS/AboutUs";




const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/createNewBlog" element={<CreateBlog />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<EditUserInfo />} />
      </Routes>
    </div>
  );
};

export default Routing;
