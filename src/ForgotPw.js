import React from "react";

const ForgotPw = () => {
  return (
    <div className="w-full h-screen relative">
      <div className=" flex flex-col justify-center items-center text-center ">
        <div className="mt-10 flex flex-col">
          <img src="Logo.png" className="" />
          {/* <button className="font-bold border-2 bg-[#124072] text-[10px] w-[100px] rounded-full p-2 text-white ">
          Sign In
        </button> */}
          <h1 className="font-bold text-md md:text-lg tracking-wide mt-5">
            Need help with your <br /> account?
          </h1>
          <p className="text-gray-500 text-md md:text-lg font-thin">
            Enter the email address associated with your account <br /> and we
            will send you a link to reset your password.
          </p>
          <input
            type="text"
            placeholder="kemi@gmail.com"
            className=" w-full max-w-[500px] bg-white border-2 border-gray-300
           rounded-md text-md py-2 px-3 mb-5 "
          />
          <button className="font-bold border-2 bg-[#124072] text-md w-full  rounded-full px- md:px-3 py-2  text-white ">
            Send Link
          </button>
          <h1 className="text-lg font-bold text-[#124072]">
            Forgot Password?
          </h1>
        </div>
        <div className=" text-md absolute bottom-0 right-0 md:text-lg left-0 px-3 text-gray-400 flex justify-between  ">
          <p>Powered by PAYLODE SERVICES LIMITED</p>
          <p>Copyright 2023</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default ForgotPw;
