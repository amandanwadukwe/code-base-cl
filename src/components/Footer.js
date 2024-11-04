import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



export default function Footer( { logo } ){

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <footer>
            <div className="left">
            <Link to="/" ><img className="logo" onClick={scrollToTop} src={logo} alt=""/></Link>
                
                <div className="socials">
                <a href="" ><FontAwesomeIcon icon={faGithub} /></a>
                <a href="" ><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                

            </div>
            <div className="right">
                <div className="footer-section">
                    <p><span>Resources</span></p>
                    <ul>
                        <li><a href="">Articles</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <p><span>Products</span></p>
                    <ul>
                        <li><a href="https://rememberjerjourney.com/" target='_blank'>Remember Her Journey</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <p><span>Company</span></p>
                    {/* <ul>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">About us</a></li>
                        
                        <li><a href="/support">Support</a></li>
                        <li><a href="/AADA Ethical Licensing.pdf" download="/AADA Ethical Licensing.pdf">Ethical Licencing Policy</a></li>
                    </ul> */}
                    <ul>
                    
                       
                        
                        <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                        <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                        <li><Link to="/support" onClick={scrollToTop}>Support</Link></li>
                    </ul>
                </div>
            </div>
            <p>Copyright @ 2024. AADA. All rights reserved <br/> Reg Number: </p>
        </footer>
    )
}