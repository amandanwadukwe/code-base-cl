import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AadaVoucherStylesheets/LoanProducts.css';
import Pound100 from '../resources/100.svg';
import Pound50 from '../resources/50.svg';
import Pound200 from '../resources/200.svg';

const LoanProducts = ( {triggerSetPaymentLink}) => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const navigate = useNavigate();

  const loanOptions = [
    {img:Pound50, amount: 56.44, interestRate: 4.12 },
    { img:Pound100, amount:112.88, interestRate: 4.12 },
    { img:Pound200, amount: 225.75, interestRate: 4.12 },
  ];

  const calculateTotalRepayment = (amount, interestRate) => {
    return (amount * Math.pow(1 + interestRate / 100, 3)).toFixed(2);
  };

  const handleSelectLoan = (loan) => {
    setSelectedLoan(loan);
  };

  const handleContinue = () => {
    // Navigate to LoanRequestPage, passing selectedLoan data as state

    triggerSetPaymentLink(selectedLoan.amount)
    // console.log(selectedLoan.amount)

    navigate('/voucher-request', { state: { selectedLoan } });
  };

  return (
    <div className="loan-products-container">
      <h1>Select A Voucher!</h1>
      <p>Hey, just a heads-up! If the voucher’s used to support a business and build their website, the 4.12% fee comes right back to you. If you go for the cash option instead, the fee stays with us. Fair enough, right?</p>
      <div className="loan-cards">
        {loanOptions.map((loan, index) => (
          <div
            key={index}
            className="loan-card"
            onClick={() => handleSelectLoan(loan)}
          >
            <img src={loan.img} alt='' />
            <h2>£{loan.amount}</h2>
            {/* <p>Interest Rate: {loan.interestRate}%</p>
            <p>Total Repayment: £{calculateTotalRepayment(loan.amount, loan.interestRate)}</p> */}
          </div>
        ))}
      </div>

      {selectedLoan && (
        <div className="loan-summary">
          <img src={selectedLoan.img} alt='' />
          <h2>Voucher Summary</h2>
          <p>Amount: £{calculateTotalRepayment(selectedLoan.amount, selectedLoan.interestRate)}</p>

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
