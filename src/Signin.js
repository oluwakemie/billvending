import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomCheckbox from "./CustomCheckbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import api from "./api";
import { enqueueSnackbar } from "notistack";
import { setUserData } from "./utils/utils";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleLoginn = (e) => {
  //   e.preventDefault();
  //   return fetch(
  //     "http://94.229.79.27:55412/api/v1/accesss/login",
  //     JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //     {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data.message));
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       "https://billvendingclientapi.paylodeservices.com/api/v2/auth/login",
  //       {
  //         email: email,
  //         password: password,
  //       },
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((data) => {
  //       localStorage.setItem("userData", data.data?.data.accessToken);

  //       if (data.data.isSuccessful === true) {
  //         navigate("/");
  //       }
  //     });
  // };

  async function login() {
    try {
      const response = await api.signIn({ email, password });
      setUserData(response)
      console.log("res of login==>>>>>", response);
      enqueueSnackbar(response.message, { variant: 'success' })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="h-screen relative ">
      <div className="flex flex-col justify-center items-center text-center ">
        <div className="mt-10 text-center">
          <img src="Logo.png" className="mx-auto w-[200px] md:w-[300px] " />
          <h1 className="font-bold text-[20px] md:text-[25px] lg:text-[32px] pb-2">
            Sign in
          </h1>
          <p className="text-gray-400 text-center text-lg">
            Enter registered E-mail and Password <br /> details{" "}
          </p>

          <form onSubmit={login} className=" flex flex-col max-w-[427px] w-[327px] md:w-[427px] self-center gap-4">
            <input
              value={email}
              type="email"
              placeholder="kemi@gmail.com"
              className="h-10 px-4 py-2 placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#124072] text-[16px] leading-[24px] tracking-[0.2px] bg-white border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative mt-3">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                id="password"
                name="password"
                className="h-10 px-4 py-2 placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#124072] text-[16px] leading-[24px] tracking-[0.2px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm w-full "
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
            <div className="">
              <CustomCheckbox /> <h1 className="text-[12px] font-bold text-[#124072]">
            Forgot Password?
          </h1>
            </div>
            <div className="w-full flex justify-center">
              {" "}
              <button
                // onClick={handleLogin}
                type="submit"
                className="font-bold border-1 bg-[#124072] text-[10px]  rounded-[10px] p-3 text-white justify-center mx-auto w-full  "
              >
                Sign In
              </button>
            </div>
          </form>
         
        </div>{" "}
      </div>
      <div className=" w-full flex justify-between absolute bottom-0 left-0 right-0 px-[48px] pb-2 ">
        <p>Powered by PAYLODE SERVICES LIMITED</p>
        <p>Copyright 2023</p>
      </div>
    </div>
  );
};

export default Signin;
