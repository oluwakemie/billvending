import React from "react";
import Sidebar from "./global/sidebar";

import Topbar from "./global/topbar";
import { Outlet } from "react-router-dom";


const Home = () => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <div className="w-full ">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
