import React from 'react';
import Signin from './Signin';
import ForgotPw from './ForgotPw';
import Otp from './Otp';
import {  Routes, Route, BrowserRouter} from 'react-router-dom';
import './index.css';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route index element={<Signin/>} />
        <Route path="/forgotpw" element={ <ForgotPw/>} />
       /* <Route path="/otp" element={<Otp />} />
         {/* {<Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App