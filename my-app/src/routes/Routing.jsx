import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import ContactUs from "../components/ContactUS/ContactUs";
import CreateBlog from "../components/CreateBlog/CreateBlog";
import Signin from "../components/Signin/Signin";




const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/contactus"   element={<ContactUs/>}/>
        <Route path="/createNewBlog"  element={<CreateBlog/>}/>
        <Route path="/signin" element={<Signin/>}/>
       
      </Routes>
    </div>
  );
};

export default Routing;
