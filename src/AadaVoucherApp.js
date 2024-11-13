import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './AadaVoucherComponents/HomePage'; 

const AadaVoucherApp = () => {
  return (
    <HomePage />
    // <Router>
    //   <div >
    //     <Routes>
    //       <Route path="/" element={} />
    //       <Route path="/voucher-products" element={<LoanProducts />} />
    //       <Route path="/voucher-request" element={<LoanRequestPage />} />
    //       <Route path="/payment" element={<PaymentPage />} />
    //       <Route path="/confirmation" element={<ConfirmationPage />} />

    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default AadaVoucherApp;
