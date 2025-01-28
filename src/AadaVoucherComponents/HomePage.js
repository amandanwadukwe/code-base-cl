
import React from 'react';
import { Link } from 'react-router-dom';
import '../AadaVoucherStylesheets/HomePage.css';
import '../styleSheets/general.css';
import '../styleSheets/hero.css';
import aiIcon from "../resources/AI-icon.svg";
import websiteIcon from "../resources/website-icon.svg";
import voucherIcon from "../resources/voucher-icon.svg";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="header voucher-header">
        <p ><span className="primary-header">Give the Gift of Growth</span> <br></br>&nbsp;<br></br>Gift a voucher to a family member, friend, or community organization to support their digital journey,whether it’s maintaining their systems, building a new one, or creating tools that truly work for them.</p>
      </div>

      <div className="service-list">
                        <div className="service-list-item"><div><span><strong>Empower Local Dreams</strong></span><p>Buy a voucher to support a family member, friend, or community business in acquiring systems that work for them.</p> </div></div>
                        <div className="service-list-item"><div><span><strong>Make an Impact That Matters</strong></span><p>Fund a website or digital system for a business or charity close to your heart and help them grow, thrive, and make a lasting difference.</p></div></div>
                        <div className="service-list-item"><div><span><strong>Make Flexible Payments</strong></span><p>Split your payment with Klarna and make empowering local dreams simple, affordable, and irresistible.</p></div></div>
                    </div>

      <Link to="/voucher-products" className="secondary-btn">Get Voucher</Link>
    </div>
  );
};

export default HomePage;


// Example Marketing Campaign
// Headline:
// "Your Voucher. Your Impact. Support Yourself and a Cause Today."

// Body Copy:
// "Every time you redeem a voucher, you’re not just unlocking cash for yourself—you’re fueling change. £1 helps keep the system running smoothly, and £1 empowers charities with the tools they need to thrive. It’s not just a purchase; it’s a partnership for progress. Let’s grow, give, and make a difference together."

// Call-to-Action:
// "Get Your Voucher Now and Start Making an Impact!"
