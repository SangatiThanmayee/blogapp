import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import Routing from "../../routes/Routing";

const Layout = () => {
  return (
    <>
      <Header />
      <Routing/>
      <Footer />
    </>
  );
};
export default Layout;
