import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createLoanRequest } from '../services/api';
import { useSearchParams } from 'react-router-dom';
import '../AadaVoucherStylesheets/ConfirmationPage.css'

const ConfirmationPage = () => {
  const [status, setStatus] = useState('Loading...');
  const requestId = localStorage.getItem('requestId');
  const email = localStorage.getItem('email');
  const [searchParams] = useSearchParams();

  const sessionId = searchParams.get('session_id');

  useEffect(() => {

    
    const updateRequestStatus = async () => {
      if (requestId && email) {
        try {
          const response = await axios.post('http://localhost:5000/api/request/update-status', {
            requestId,
            email,
            checkoutSessionID : sessionId
          });

          if (response.status === 200) {
            setStatus('Thank you! Your loan request is pending approval.');
          } else {
            setStatus('There was an issue processing your request. Please try again.');
          }
        } catch (error) {
          console.error('Error updating request:', error);
          setStatus('An error occurred. Please try again later.');
        }
      } else {
        setStatus('Request data not found.');
      }
    };

    updateRequestStatus();
  }, [requestId, email]);

  return (
    <div className="confirmation-page-container">
      <h1>{status}</h1>
      <p>We’ve updated the status of your request.</p>
    </div>
  );
};

export default ConfirmationPage;