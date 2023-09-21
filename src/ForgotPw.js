import React from "react";

const ForgotPw = () => {
  return (
    <div>
      <div className="flex justify-between">
        <img src="Logo.png" className="w-[120px] " />
        <button className="font-bold border-2 bg-[#124072] text-[10px] w-[100px] rounded-full p-2 text-white ">
          Sign In
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-[9px] w-full mt-[150px]">
        <h1 className="font-bold text-[19px] text-center">
          Need help with your <br /> account?
        </h1>
        <p className="text-gray-400 text-center text-[8px] font-thin">
          Enter the email address associated with your account <br /> and we
          will send you a link to reset your password.
        </p>
        <input
          type="text"
          placeholder="kemi@gmail.com"
          className="h-[30px] w-[200px] bg-white border-2 border-gray-300
           rounded-md text-[10px] p-3 "
        />
         <button className="font-bold border-2 bg-[#124072] text-[10px] w-[200px] rounded-full p-2 text-white ">
         Send Link
        </button>
        <h1 className="text-[10px] font-bold text-[#124072]">
          Forgot Password?
        </h1>
      </div>
      <div className="text-[10px] mt-[150px] mx-5 text-gray-400 flex justify-between  ">
        <p>Powered by PAYLODE SERVICES LIMITED</p>
        <p>Copyright 2023</p>
      </div>
    </div>
  );
};

export default ForgotPw;
