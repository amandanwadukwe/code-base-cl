import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createLoanRequest } from "../services/api";
import BankDetailsPopup from "./BankDetailsPopup";
import "../AadaVoucherStylesheets/LoanRequestPage.css";
import { v4 as generateUUID } from 'uuid';
const newUUID = generateUUID();



const LoanRequestPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedLoan } = location.state || {}; // Retrieve loan data passed from LoanProducts
  const [orderDetails, setOrderDetails] = useState("");
  const uuid = newUUID;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
    agreeToTerms: false,
  });

  const [isBankDetailsPopupOpen, setIsBankDetailsPopupOpen] = useState(false);
  const [bankDetails, setBankDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleOpenBankDetailsPopup = () => {
    setIsBankDetailsPopupOpen(true);
  };

  const handleCloseBankDetailsPopup = (details) => {
    setIsBankDetailsPopupOpen(false);
    if (details) {
      setBankDetails({...details, ...{uuid:uuid}}); // Save bank details after submission
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    if (!bankDetails) {
      alert("Please provide your bank details before submitting.");
      handleOpenBankDetailsPopup();
      return;
    }

    const loanData = {
      user: formData,
      loanAmount: selectedLoan.amount,
      interestRate: selectedLoan.interestRate,
      totalRepayment: (
        selectedLoan.amount *
        Math.pow(1 + selectedLoan.interestRate / 100, 3)
      ).toFixed(2),
      orderDetails ,
      bankDetails, // Include bank details in the loan data
    };

    try {
      const response = await createLoanRequest(loanData);
      console.log("Loan request created:", response);

      const requestId = response.loanRequest._id;

      // Navigate to PaymentPage with requestId and email after creating the loan request
      // navigate("/payment", { state: { requestId, email: formData.email } });
    } catch (error) {
      console.error("Failed to submit loan request:", error);
      alert("Failed to submit loan request. Please try again.");
    }
  };

  return (
    <div className="loan-request-container">
      <h1>Voucher Request Form</h1>
      <form className="loan-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderDetails">Order Details</label>
          <textarea
            id="orderDetails"
            name="orderDetails"
            placeholder="Enter details of your request here. Include the sort code, account number, and account holder name for the transfer."
            value={orderDetails + uuid}
            onChange={(e) => setOrderDetails(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="address">Billing Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group legal">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          <label htmlFor="agreeToTerms">
            I confirm that the information provided is accurate and agree to the
            terms and conditions.
          </label>
        </div>
        <button
          type="button"
          className="submit-button"
          onClick={handleOpenBankDetailsPopup}
        >
          Enter Bank Details
        </button>
        <button type="submit" className="submit-button">
          Submit Request
        </button>
      </form>

      {/* Bank Details Popup */}
      <BankDetailsPopup
        isModalOpen={isBankDetailsPopupOpen}
        onClose={handleCloseBankDetailsPopup}
      />
    </div>
  );
};

export default LoanRequestPage;
