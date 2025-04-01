import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ logo }) {
    // State to manage the visibility of the navigation menu
    const [isNavVisible, setNavVisible] = useState(false);

    // Toggle navigation menu visibility
    const handleHamburgerClick = () => {
        setNavVisible(!isNavVisible);
    };

    // Close the navigation menu when a link is clicked
    const handleLinkClick = () => {
        setNavVisible(false);
    };

    return (
        <>
            <header className="small-screen-header">
                <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                <nav className={`primary-nav ${isNavVisible ? 'show' : 'hide'}`} id="primary-nav">
                    <ul>
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/learn" onClick={handleLinkClick}>Learn</Link></li>
                    <li><Link to="/play" onClick={handleLinkClick}>Play</Link></li>

                        {/* <li><Link to="/products" onClick={handleLinkClick}>Products</Link></li> */}
                        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>

                    </ul>
                </nav>
                <FontAwesomeIcon 
                    icon={faBars} 
                    style={{ fontSize: '36px' }} 
                    id="hamburger" 
                    className="hamburger" 
                    onClick={handleHamburgerClick} 
                />
            </header>

            <header className="large-screen-header">
                <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                <nav className="primary-nav" id="primary-nav">
                    <ul>
                    <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/learn" onClick={handleLinkClick}>Learn</Link></li>
                    <li><Link to="/play" onClick={handleLinkClick}>Play</Link></li>

                        {/* <li><Link to="/products">Products</Link></li> */}
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
