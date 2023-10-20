import React from "react";

const WalletPopup = ({ visible, onClose }) => {
  const select = () => {};

  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div onClick={onClose} className="bg-white min-w-[350px] rounded-lg px-3 py-3 shadow-lg absolute top-[350px] left-[50%] transform -translate-x-1/2 -translate-y-1/2  ">
        <div className="flex items-center justify-between mb-2 hover:scale-95 transition">
          <p className="text-[14px] font-semibold">Create Wallet</p>
          <img src="/close.svg" alt="" onClick={onClose} />
        </div>
        <hr />
        <p className="text-[12px] text-gray-500 font-bold mt-5">
          Select Clients
        </p>
        <div className="w-full  flex border px-7 py-2 mt-3 rounded-lg  justify-between relative mb-[120px]">
          <p className="text-[12px] font-bold">Palmpay Limited</p>
          <img src="down.svg" alt="" />
        </div>
        <img 
          src="sicon.svg"
          alt=""
          className="absolute bottom-[10px] top-[95px] left-4 w-6"
        />
        {/* <ul className="bg-white mt-2">
          <li className="p-2 text-sm hover:bg-[#124072] hover:text-white">sample</li>
          <li className="p-2 text-sm hover:bg-[#124072] hover:text-white">sample</li>
          <li className="p-2 text-sm hover:bg-[#124072] hover:text-white">sample</li>
          <li className="p-2 text-sm hover:bg-[#124072] hover:text-white">sample</li>
          <li className="p-2 text-sm hover:bg-[#124072] hover:text-white">sample</li>
        </ul> */}
        <button className="w-full rounded-2xl bg-[#124072] py-2 text-white text-[12px] font-bold">Confirm</button>
      </div>
    </div>
  );
};

export default WalletPopup;
