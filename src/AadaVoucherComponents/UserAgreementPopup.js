
import React, { useState } from 'react';
import '../AadaVoucherStylesheets/UserAgreementPopup.css';

const UserAgreementPopup = ({ isOpen, onClose }) => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleProceed = () => {
    if (isAgreed) {
      alert("Agreement accepted!");
      onClose();
    } else {
      alert("Please agree to the terms before proceeding.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>User Agreement</h2>
        <p>Please read and agree to the terms before proceeding:</p>
        <div className="agreement-text">
          <p>By using this service, you confirm that you are 18+ years old and agree to the loan terms, including the 4.12% interest rate and payment responsibilities. Additional fees may apply for late payments.</p>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="agreeCheckbox"
            checked={isAgreed}
            onChange={handleAgreeChange}
          />
          <label htmlFor="agreeCheckbox">I agree to the terms and conditions</label>
        </div>
        <button className="proceed-button" onClick={handleProceed} disabled={!isAgreed}>
          Proceed
        </button>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserAgreementPopup;
