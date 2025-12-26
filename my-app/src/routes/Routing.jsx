import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import ContactUs from "../components/ContactUS/ContactUs";



const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/contactus"   element={<ContactUs/>}/>
      </Routes>
    </div>
  );
};

export default Routing;
