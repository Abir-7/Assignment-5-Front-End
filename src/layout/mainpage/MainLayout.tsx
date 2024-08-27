import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Component/navbar/Navbar";
import Footer from "../../Component/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full min-h-[70vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
