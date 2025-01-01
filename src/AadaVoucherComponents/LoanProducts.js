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
    {img:Pound50, amount: 56.44, interestRate: 4.12,description:"Support someone’s dream with this £50 voucher. Help a loved one or local business take the first step toward building a professional website and growing their online presence.", title:"The Foundation Voucher"  },
    { img:Pound100, amount:112.88, interestRate: 4.12, description:"Help a loved one or local business grow with this £100 voucher. It funds the creation of a professional website, giving them the tools to expand their reach and succeed online.", title:"The Momentum Voucher" },
    { img:Pound200, amount: 225.75, interestRate: 4.12,description:"Empower someone special with this £200 voucher. Fund a complete professional website to help their business or project thrive and make a lasting impact online.", title:"The Transformation Voucher"  },
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
      <p>Each voucher includes a 4.12% deposit, refundable if redeemed for a website but non-refundable if redeemed for cash. Vouchers are valid for 1 year from the purchase date.</p>
      <div className="loan-cards">
        {loanOptions.map((loan, index) => (
          <div
            key={index}
            className="loan-card"
            onClick={() => handleSelectLoan(loan)}
          >
            <img src={loan.img} alt='' />
            <p>{loan.title}</p>
            <h2>£{loan.amount}</h2>
            {/* <p>Interest Rate: {loan.interestRate}%</p>
            <p>Total Repayment: £{calculateTotalRepayment(loan.amount, loan.interestRate)}</p> */}
          </div>
        ))}
      </div>

      {selectedLoan && (
        <div className="loan-summary">
          <img src={selectedLoan.img} alt='' />
          <h2>{selectedLoan.title}</h2>
          <p>Amount: £{calculateTotalRepayment(selectedLoan.amount, selectedLoan.interestRate)}</p>
          <p>{selectedLoan.description}</p>
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
