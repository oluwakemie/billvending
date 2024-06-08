import React, { useState } from "react";
import Sidebar from "./global/sidebar";

import Topbar from "./global/topbar";
import { Outlet } from "react-router-dom";


const Home = () => {
  const [isOpen,  setIsOpen]=useState(false)

  return (
    <div className="flex ">
      <Sidebar isOpen={isOpen}/>
      <div className="w-full ">
        <Topbar  isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
