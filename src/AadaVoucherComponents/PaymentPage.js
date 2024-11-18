import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../AadaVoucherStylesheets/PaymentPage.css'

const PaymentPage = ( {paymentLink}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { requestId, email } = location.state || {};

  // console.log("paymentLink",paymentLink)

  const paymentLinks ={
    "56.44":"https://buy.stripe.com/14kdTk0aD70F7dKdQS",
    "112.88":"https://buy.stripe.com/3csbLc2iLgBf8hO3cf",
    "225.75":"https://buy.stripe.com/5kAbLcf5x98N9lS3cd"
  }

  useEffect(() => {
    // Ensure we have requestId and email before proceeding
    if (!requestId || !email) {
      navigate('/loan-request'); // Redirect to Loan Request Page if data is missing
      return;
    }

    // Store requestId and email in localStorage for later use in the confirmation page
    localStorage.setItem('requestId', requestId);
    localStorage.setItem('email', email);
    // console.log(paymentLinks[paymentLink.toString()])

    // Redirect to Stripe payment link
    const stripePaymentLink = `${paymentLinks[paymentLink.toString()]}?prefilled_email=${email}`; // Replace with your actual Stripe payment link
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
