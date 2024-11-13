import React, { useState } from 'react';
import { approveLoanRequest, rejectLoanRequest } from '../services/api';
import '../styleSheets/DecisionPage.css';
// import '../styles/DecisionPage.css';

const DecisionPage = () => {
  const [requestId, setRequestId] = useState('');
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleDecision = async (decision) => {
    try {
      let response;
      if (decision === 'approve') {
        response = await approveLoanRequest(requestId);
      } else {
        response = await rejectLoanRequest(requestId);
      }
      setStatusMessage(response.message || `Loan request ${decision}d successfully.`);
    } catch (error) {
      console.error(`Error ${decision}ing loan request:`, error);
      setStatusMessage(`Failed to ${decision} the loan request. Please try again.`);
    }
  };

  return (
    <div className="decision-container">
      <h1>Loan Request Decision</h1>
      <label>Request ID:</label>
      <input
        type="text"
        value={requestId}
        onChange={(e) => setRequestId(e.target.value)}
        placeholder="Enter request ID"
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <div>
        <button onClick={() => handleDecision('approve')}>Approve</button>
        <button onClick={() => handleDecision('reject')}>Decline</button>
      </div>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default DecisionPage;
