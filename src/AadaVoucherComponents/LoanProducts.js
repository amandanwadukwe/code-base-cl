import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AadaVoucherStylesheets/LoanProducts.css';

const LoanProducts = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const navigate = useNavigate();

  const loanOptions = [
    { amount: 50, interestRate: 4.12 },
    { amount: 100, interestRate: 4.12 },
    { amount: 200, interestRate: 4.12 },
  ];

  const calculateTotalRepayment = (amount, interestRate) => {
    return (amount * Math.pow(1 + interestRate / 100, 3)).toFixed(2);
  };

  const handleSelectLoan = (loan) => {
    setSelectedLoan(loan);
  };

  const handleContinue = () => {
    // Navigate to LoanRequestPage, passing selectedLoan data as state
    navigate('/voucher-request', { state: { selectedLoan } });
  };

  return (
    <div className="loan-products-container">
      <h1>Select Your Loan Amount</h1>
      <div className="loan-cards">
        {loanOptions.map((loan, index) => (
          <div
            key={index}
            className="loan-card"
            onClick={() => handleSelectLoan(loan)}
          >
            <h2>£{loan.amount}</h2>
            <p>Interest Rate: {loan.interestRate}%</p>
            <p>Total Repayment: £{calculateTotalRepayment(loan.amount, loan.interestRate)}</p>
          </div>
        ))}
      </div>

      {selectedLoan && (
        <div className="loan-summary">
          <h2>Loan Summary</h2>
          <p>Amount: £{selectedLoan.amount}</p>
          <p>Interest Rate: {selectedLoan.interestRate}%</p>
          <p>Total Repayment: £{calculateTotalRepayment(selectedLoan.amount, selectedLoan.interestRate)}</p>
          <button onClick={handleContinue} className="continue-button">
            Continue
          </button>
          <button onClick={() => setSelectedLoan(null)} className="abort-button">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default LoanProducts;
