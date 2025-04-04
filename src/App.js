import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LearnHub from './AadaVoucherComponents/LearnHub';
import "./styleSheets/general.css";
import "./styleSheets/hero.css";
import "./styleSheets/contact.css";
import "./styleSheets/support.css";
import "./styleSheets/footer.css";
import "./styleSheets/products.css";
import "./styleSheets/header.css";
import "./styleSheets/about.css";
import Header from './components/Header';
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Support from "./components/Support";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Logo from "./resources/logo.svg";
import Logo2 from "./resources/logo2.svg";
import About from './components/About';
import AadaVoucherDecisionApp from './AadaVoucherDecisionApp';
import AadaVoucherApp from './AadaVoucherApp';
import LoanProducts from './AadaVoucherComponents/LoanProducts';
import LoanRequestPage from './AadaVoucherComponents/LoanRequestPage';
import PaymentPage from './AadaVoucherComponents/PaymentPage';
import ConfirmationPage from './AadaVoucherComponents/ConfirmationPage';
import EventHub from './AadaVoucherComponents/EventHub';
import PlaygroundHub from './AadaVoucherComponents/PlaygroundHub';
import './AadaVoucherStylesheets/App.css';



function App() {

  const [isHomeRevealed, setIsHomeRevealed] = useState(false);
  const [isContactRevealed, setIsContactRevealed] = useState(false);
  const [isProductRevealed, setIsProductRevealed] = useState(false);
  const [isSupportRevealed, setIsSupportRevealed] = useState(false);
  const [isAboutRevealed, setIsAboutRevealed] = useState(false);
  const [paymentLink, setPaymentLink] = useState("");


  function triggerSetPaymentLink(price){
    setPaymentLink(price)
  }

  
  function componentToReveal(component){
    
    switch(component) {
      case "home":
        setIsHomeRevealed(true);
        setIsContactRevealed(false);
        setIsProductRevealed(false);
        setIsSupportRevealed(false);
        setIsAboutRevealed(false);
        break;
      case "contact":
        setIsHomeRevealed(false);
        setIsContactRevealed(true);
        setIsProductRevealed(false);
        setIsSupportRevealed(false);
        setIsAboutRevealed(false);
        break;
        case "about":
        setIsHomeRevealed(false);
        setIsContactRevealed(false);
        setIsProductRevealed(false);
        setIsSupportRevealed(false);
        setIsAboutRevealed(true);
        break;
        case "product":
        setIsHomeRevealed(false);
        setIsContactRevealed(false);
        setIsProductRevealed(true);
        setIsSupportRevealed(false);
        setIsAboutRevealed(false);
        break;
        case "support":
        setIsHomeRevealed(false);
        setIsContactRevealed(false);
        setIsProductRevealed(false);
        setIsSupportRevealed(true);
        setIsAboutRevealed(false);
        break;
    }
  }

  return (
    <div className="App">
      <Router>
            <Header logo={Logo2} />
            <Routes>
                <Route path="/" element={<Hero isHomeRevealed={isHomeRevealed} componentToReveal={componentToReveal} />} />
                <Route path="/contact" element={<Contact isContactRevealed={isContactRevealed} componentToReveal={componentToReveal} />} />
                <Route path="/support" element={<Support isSupportRevealed={isSupportRevealed} componentToReveal={componentToReveal} />} />
                <Route path="/products" element={<Products isProductRevealed={isProductRevealed} componentToReveal={componentToReveal}  />} />
                <Route path="/about" element={<About isAboutRevealed={isAboutRevealed} componentToReveal={componentToReveal} />} />
                <Route path="/123456789" element={<AadaVoucherDecisionApp />} />
                <Route path="/vouchers" element={<AadaVoucherApp />} />
                <Route path="/voucher-products" element={<LoanProducts triggerSetPaymentLink={triggerSetPaymentLink} />} />
                <Route path="/voucher-request" element={<LoanRequestPage  />} />
                <Route path="/payment" element={<PaymentPage paymentLink={paymentLink} />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="*" element={<div className="page-not-found"><p className="primary-header">Page not found</p></div>} />
                <Route path="/learn" element={<div style={{ all: 'initial' }}><LearnHub isSupportRevealed={isSupportRevealed} componentToReveal={componentToReveal} /></div>} />
                <Route path="/play" element={<div style={{ all: 'initial' }}><PlaygroundHub isSupportRevealed={isSupportRevealed} componentToReveal={componentToReveal} /></div>} />
                <Route path="/event" element={<div style={{ all: 'initial' }}><EventHub isSupportRevealed={isSupportRevealed} componentToReveal={componentToReveal} /></div>} />

            </Routes>
            <Footer logo={Logo} />
        </Router>
    </div>
  );
}

export default App;
