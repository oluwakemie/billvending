import React from "react";
import { useLocation } from "react-router-dom";
const Topbar = () => {
  const location = useLocation();
  return (
    <div className="w-full h-[80px]  bg-gray-100 flex justify-between text-black  top-0 p-5">
      <p className="font-bold ">
        {location.pathname === "/"
          ? "Dashboard"
          : location.pathname === "/transaction"
          ? "Transaction"
          : location.pathname === "/clients"
          ? "Clients"
          : location.pathname ==="/wallet"
          ? "Wallet"
          : location.pathname ==="/wallethistory"
          ? "Wallet History"
          : location.pathname === "/biller"
          ? "Biller Management"
          : ""}
      </p>{" "}
      <div className=" flex items-center gap-2">
        <img src="/notifications.svg" alt="" />
        <img src="/Ellipse.svg" alt="" />
        <p className="text-[11px]">Emmanuel .O</p>
      </div>
    </div>
  );
};

export default Topbar;
