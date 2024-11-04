import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

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
import About from './components/About';


function App() {

  const [isHomeRevealed, setIsHomeRevealed] = useState(false);
  const [isContactRevealed, setIsContactRevealed] = useState(false);
  const [isProductRevealed, setIsProductRevealed] = useState(false);
  const [isSupportRevealed, setIsSupportRevealed] = useState(false);
  const [isAboutRevealed, setIsAboutRevealed] = useState(false);

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
            <Header logo={Logo} />
            <Routes>
                <Route path="/" element={<Hero isHomeRevealed={isHomeRevealed} componentToReveal={componentToReveal} />} />
                <Route path="/contact" element={<Contact isContactRevealed={isContactRevealed} componentToReveal={componentToReveal} />} />
                <Route path="/support" element={<Support isSupportRevealed={isSupportRevealed} componentToReveal={componentToReveal} />} />
                <Route path="/products" element={<Products isProductRevealed={isProductRevealed} componentToReveal={componentToReveal} />} />
                <Route path="/about" element={<About isAboutRevealed={isAboutRevealed} componentToReveal={componentToReveal} />} />
                <Route path="*" element={<div className="page-not-found"><p className="primary-header">Page not found</p></div>} />
            </Routes>
            <Footer logo={Logo} />
        </Router>
    </div>
  );
}

export default App;
