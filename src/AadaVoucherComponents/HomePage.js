
import React from 'react';
import { Link } from 'react-router-dom';
import '../AadaVoucherStylesheets/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Welcome to QuickCash</h1>
        <p>Your trusted service for quick and easy loans.</p>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Fast Approval</h2>
          <p>Get your loan approved within an hour.</p>
        </div>
        <div className="feature">
          <h2>Flexible Payments</h2>
          <p>Payback in 3 months with a low 4.12% interest rate.</p>
        </div>
      </section>

      <Link to="/voucher-products" className="get-started-button">Get Started</Link>
    </div>
  );
};

export default HomePage;
