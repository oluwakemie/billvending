import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col m-auto mt-[150px] bg-white pb-[30px] ">
      <div className="flex flex-col justify-center items-center gap-[9px] w-full mt-[10px]">
        <img src="Logo.png" className="w-[250px]" />
        <h1 className="font-bold text-[25px]">Sign in</h1>
        <p className="text-gray-400 text-center text-sm">
          Enter registered E-mail and Password <br /> details{" "}
        </p>
        <input
          type="text"
          placeholder="kemi@gmail.com"
          className="h-[30px] w-[300px] bg-white border-2 border-gray-300
           rounded-md text-[10px] p-3 "
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            id="password"
            name="password"
            className="h-[30px] w-[300px] bg-white border-2 border-gray-300
           rounded-md  p-3 text-[12px] "
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="w-4"/>
      </button>
        </div>
        <div className="">
          <CustomCheckbox />
        </div>
        <button className="font-bold border-2 bg-[#124072] text-[10px] w-[200px] rounded-full p-2 text-white ">
          Sign In
        </button>
        <h1 className="text-[12px] font-bold text-[#124072]">
          Forgot Password?
        </h1>
      </div>
      <div className="text-[10px] mt-10  mx-5 text-gray-400 flex justify-between  ">
        <p>Powered by PAYLODE SERVICES LIMITED</p>
        <p>Copyright 2023</p>
      </div>
    </div>
  );
};

export default Signin;
