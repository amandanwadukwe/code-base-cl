import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



export default function Footer( { logo } ){
    return (
        <footer>
            <div className="left">

                <img className="logo" src={logo} alt=""/>
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
                        <li><a href="">Remember Her Journey</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <p><span>Company</span></p>
                    <ul>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">About us</a></li>
                        
                        <li><a href="/support">Support</a></li>
                        <li><a href="../resources/AADA Ethical Licensing .pdf" download="../resources/AADA Ethical Licensing .pdf">Ethical Licencing Policy</a></li>
                    </ul>
                </div>
            </div>
            <p>Copyright @ 2024. AADA. All rights reserved</p>
        </footer>
    )
}