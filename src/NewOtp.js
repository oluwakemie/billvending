import React, { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const NewOtp = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePassword =() =>{
        setShowPassword1(!showPassword1);
  }
  return (
    <div>
      <div className="flex justify-between px-3 py-3">
        <img src="Logo.png" className="w-[120px] " />
        <button className="font-bold border-2 bg-[#124072] text-[10px] w-[100px] rounded-full p-2 text-white ">
          Sign In
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-[9px] w-full mt-[100px]">
        <h1 className="font-bold text-[25px]">Enter New Password</h1>
        <p className="text-gray-400 text-center text-[13px]">
          Enter your new password
        </p>
        <div className="relative">
        <input
            type={showPassword ? "text" : "password"}
            value={password}
            id="password"
            name="password"
            className="h-[30px] w-[300px] bg-white border-2 border-gray-300
           rounded-lg p-3 text-[12px] "
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="w-4"
            /> 
          </button>
        </div>
        <div className="relative mt-2">
          <input
            type={showPassword1 ? "text" : "password"}
            value={password1}
            id="password"
            name="password"
            placeholder="Re-enter New Password"
            className="h-[30px] w-[300px] bg-white border-2 border-gray-300
           rounded-lg  p-3 text-[10px] "
            onChange={(e) => setPassword1(e.target.value)}
          />{" "}
          <button
            type="button"
            onClick={togglePassword}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
          >
            <FontAwesomeIcon
              icon={showPassword1 ? faEyeSlash : faEye}
              className="w-4"
            />
            
          </button>
        </div>
        <button className="font-bold border-2 bg-[#124072] text-[10px] w-[270px] mt-5 rounded-full p-3 text-white ">
         Save New Password
        </button>
        <p className="font-thin text-blue-500 text-[10px]">Remember your password ? <span className="text-black font-semibold"> <b >Sign in</b></span></p>
      </div>
    </div>
  );
};

export default NewOtp;
