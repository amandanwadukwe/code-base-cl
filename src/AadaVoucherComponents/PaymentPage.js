import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { requestId, email } = location.state || {};

  useEffect(() => {
    // Ensure we have requestId and email before proceeding
    if (!requestId || !email) {
      navigate('/loan-request'); // Redirect to Loan Request Page if data is missing
      return;
    }

    // Store requestId and email in localStorage for later use in the confirmation page
    localStorage.setItem('requestId', requestId);
    localStorage.setItem('email', email);

    // Redirect to Stripe payment link
    const stripePaymentLink = `https://buy.stripe.com/test_6oE03Jgn4gdt0mI3cc`; // Replace with your actual Stripe payment link
    window.location.href = stripePaymentLink;
  }, [requestId, email, navigate]);

  return (
    <div className="payment-page-container">
      <h1>Redirecting to Payment...</h1>
      <p>Please wait while we redirect you to the secure payment page.</p>
    </div>
  );
};

export default PaymentPage;
