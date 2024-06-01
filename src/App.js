import React from "react";
import Signin from "./Signin";
import ForgotPw from "./ForgotPw";
import Otp from "./Otp";
import NewOtp from "./NewOtp";
import Dashboard from "./Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./home";
import Transaction from "./Transaction";
import Clients from "./Clients";
import Wallet from "./Wallet";
import Biller from "./Biller";
import WalletHistory from "./WalletHistory";
import { SnackbarProvider } from "notistack";


const App = () => {
  return (
    <div>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}

      // iconVariant={{
      //   success: '✅',
      //   error: '✖️',
      //   warning: '⚠️',
      //   info: 'ℹ️',
      // }}
      // autoHideDuration={7000}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpw" element={<ForgotPw />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/newotp" element={<NewOtp />} />
          <Route element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallethistory" element={<WalletHistory />} />
            <Route path="/biller" element={<Biller />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
