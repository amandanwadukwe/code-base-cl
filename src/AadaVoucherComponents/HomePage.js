
import React from 'react';
import { Link } from 'react-router-dom';
import '../AadaVoucherStylesheets/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="header">
        {/* <h1>Welcome to QuickCash</h1> */}
        <p>Give the gift of growth—support a business you care about with a professional website.</p>
      </div>

      <section className="features">
        <div className="feature">
          <h2>Make an Impact That Matters</h2>
          <p>Your voucher funds a website for a business close to your heart, helping them grow and succeed.</p>
        </div>
        <div className="feature">
          <h2>Empower Local Dreams</h2>
          <p>Buy a voucher to help a family member, friend, or community business thrive online.</p>
        </div>
      </section>

      <Link to="/voucher-products" className="get-started-button">Buy Now</Link>
    </div>
  );
};

export default HomePage;
