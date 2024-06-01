import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({isOpen}) => {
  const location = useLocation();
  const [wallet, setWallet] = useState(false);
  

  return (<>
  {isOpen && (
    <div className={`w-[200px] h-screenbg-gray-100 text-white sticky ${isOpen? "block" : "hidden"}  md:block left-0 `}>
      <img src="/logo.png" alt="" className="w-[150px] p-3" />
      <div className="text-white flex flex-col gap-6 p-3">
        <Link to="/">
          <div
            className={`flex gap-2 cursor-pointer px-2 items-center ${
              location.pathname === "/"
                ? "p-3 rounded-lg bg-[#124072] text-white"
                : "text-[#124072]"
            }`}
          >
            <img src="wallet.svg" alt="" />
            <p className="text-[10px] ">Dashboard</p>
          </div>
        </Link>
        <Link to="/transaction">
          <div
            className={`flex gap-2 cursor-pointer px-2 items-center ${
              location.pathname === "/transaction"
                ? "p-3 rounded-lg bg-[#124072] text-white"
                : "text-[#124072]"
            }`}
          >
            <img src="receipt.svg" alt="" cl />
            <p className="text-[10px]  font-bold  ">Transaction</p>
          </div>
        </Link>
        <Link to="/clients">
          <div
            className={`flex gap-2 cursor-pointer px-2 items-center ${
              location.pathname === "/clients"
                ? "p-3 rounded-lg bg-[#124072] text-white"
                : "text-[#124072]"
            }`}
          >
            <img src="users.svg" alt="" cl />
            <p className="text-[10px]  font-bold  ">Clients</p>
          </div>
        </Link>

        {/* wallet */}
        <button
          onClick={() => setWallet(!wallet)}
          className={`flex gap-2 cursor-pointer px-2 items-center ${
            location.pathname === "/wallet" || location.pathname === "/wallethistory"
              ? "p-3 rounded-lg bg-[#124072] text-white"
              : "text-[#124072]"
          }`}
        >
          <img src="users.svg" alt="" cl />
          <p className="text-[10px]  font-bold  ">Create Wallet</p>
        </button>
        {wallet && (
          <div className="border-l ml-3">
            <Link to="/wallet">
              <div
                className={`flex gap-2 ml-2 cursor-pointer px-2 items-center ${
                  location.pathname === "/biller"
                    ? "p-3 rounded-lg text-[#124072] "
                    : "text-gray-500"
                }`}
              >
                <img src="users.svg" alt="" cl />
                <p className="text-[10px]  font-bold  ">wallet </p>
              </div>
            </Link>

            <Link to="/wallethistory">
              <div
                className={`flex gap-2 ml-2 cursor-pointer px-2 items-center ${
                  location.pathname === "/biller"
                    ? "p-3 rounded-lg text-[#124072] "
                    : "text-gray-500"
                }`}
              >
                <img src="users.svg" alt="" cl />
                <p className="text-[10px]  font-bold  ">wallet history</p>
              </div>
            </Link>
          </div>
        )}

        <Link to="/biller">
          <div
            className={`flex gap-2 cursor-pointer px-2 items-center ${
              location.pathname === "/biller"
                ? "p-3 rounded-lg bg-[#124072] text-white"
                : "text-[#124072]"
            }`}
          >
            <img src="users.svg" alt="" cl />
            <p className="text-[10px]  font-bold  ">Biller</p>
          </div>
        </Link>
        <div className="flex items-center gap-7 px-2 ">
          <div className="flex gap-2 items-center">
            <img src="wallet.svg" alt="" />
            <p className="text-[10px] text-[#124072]">Dashboard</p>{" "}
          </div>
          <div>
            <img src="down.svg" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-[54px]  px-2 ">
          <div className="flex gap-2 items-center">
            <img src="global.svg" alt="" />
            <p className="text-[10px] text-[#124072]">Biller</p>{" "}
          </div>
          <div>
            <img src="down.svg" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-[44px] px-2 ">
          <div className="flex gap-2 items-center">
            <img src="group.svg" alt="" />
            <p className="text-[10px] text-[#124072]">Vendor</p>{" "}
          </div>
          <div></div>
        </div>
      </div>
    </div>
    )}</>);
};

export default Sidebar;
