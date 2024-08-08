import React from "react";
import Signin from "./Signin";
import ForgotPw from "./ForgotPw";
import Otp from "./Otp";
import Airtime from "./Airtime";
import NewOtp from "./NewOtp";
import Dashboard from "./Dashboard";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./home";
import Transaction from "./Transaction";
import Clients from "./Clients";
import Wallet from "./Wallet";
import Biller from "./Biller";
import UserManagement from "./UserManagement";
import WalletHistory from "./WalletHistory";
import { SnackbarProvider } from "notistack";
import HomeIndex from "./HomeIndex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgotpw" element={<ForgotPw />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/newotp" element={<NewOtp />} />
            <Route element={<Home />}>
              <Route path="/" element={<HomeIndex />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/airtime" element={<Airtime />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/wallethistory" element={<WalletHistory />} />
              <Route path="/biller" element={<Biller />} />
              <Route path="/usermanagement" element={<UserManagement />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
