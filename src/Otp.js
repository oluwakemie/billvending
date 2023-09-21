import React from "react";

const Otp = () => {
  return (
    <div>
      <div className="flex justify-between px-3">
        <img src="Logo.png" className="w-[120px] " />
        <button className="font-bold border-2 bg-[#124072] text-[10px] w-[100px] rounded-full p-2 text-white ">
          Sign In
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-[9px] w-full mt-[150px]">
        <h1 className="font-bold text-[19px] text-center">Enter OTP</h1>
        <p className="text-gray-400 text-center text-[10px] font-thin">
          We have sent code to your email
        </p>
        <p className="text-black text-center text-[8px] font-thin">
          kemi@gmail.com
        </p>
        <div className="grid grid-cols-5 gap-3">
      {/* {Array.from({ length: 4 }).map((_, index) => ( */}
        <input
          // key={index}
          type="text"
          className="w-8 h-8 text-sm text-center border  border-gray-300 rounded-md"
        />
        <input
          // key={index}
          type="text"
          className="w-8 h-8 text-sm text-center border border-gray-300 rounded-md"
        />
         <input
          // key={index}
          type="text"
          className="w-8 h-8 text-sm text-center border border-gray-300 rounded-md"
        />
         <input
          // key={index}
          type="text"
          className="w-8 h-8 text-sm text-center border border-gray-300 rounded-md"
        />
         <input
          // key={index}
          type="text"
          className="w-8 h-8 text-sm text-center border border-gray-300 rounded "
        />
        </div>
        <button className="font-bold border-2 bg-[#124072] text-[10px] w-[260px] mt-2 rounded-full p-2 text-white ">
          Reset Password
        </button>
        <p className="font-thin text-blue-500 text-[10px]">Resend code in <span className="text-black font-semibold"> <b >59:00</b></span></p>
      </div>
      <div className="text-[10px] mt-[150px] mx-5 text-gray-400 flex justify-between  ">
        <p>Powered by PAYLODE SERVICES LIMITED</p>
        <p>Copyright 2023</p>
      </div>
    </div>
  );
};

export default Otp;
