import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Component/navbar/Navbar";
import Footer from "../../Component/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
