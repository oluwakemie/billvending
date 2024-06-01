import { useState } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Topbar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  return (
    <div className="w-full h-[80px]  bg-gray-100 flex justify-between text-black  top-0 p-5">
      <div>
        <svg
          className="cursor-pointer md:hidden "
          onClick={() => setIsOpen(!isOpen)}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20"
            stroke="#1A202C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 12H20"
            stroke="#1A202C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M4 18H20"
            stroke="#1A202C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <p className="font-bold ">
        {location.pathname === "/"
          ? "Dashboard"
          : location.pathname === "/transaction"
          ? "Transaction"
          : location.pathname === "/clients"
          ? "Clients"
          : location.pathname === "/wallet"
          ? "Wallet"
          : location.pathname === "/wallethistory"
          ? "Wallet History"
          : location.pathname === "/biller"
          ? "Biller Management"
          : ""}
      </p>{" "}
      <div className=" flex items-center gap-4">
        <img src="/notifications.svg" alt="" />
        <img src="/Ellipse.svg" alt="" />
        <p className="text-[11px]">Emmanuel .O</p>
        
        <Link to="/signin"> <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg></Link>

         
   
      </div>
    </div>
  );
};

export default Topbar;
