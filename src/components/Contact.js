// import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import instagramCard from "../resources/1000065469.png";


export default function Contact({ isContactRevealed, componentToReveal }){
    // const navigate = useNavigate();


    useEffect(()=>  {
        componentToReveal('contact');
    },[componentToReveal])

    // const handleRefresh = () => {
    //     navigate(0); // This refreshes the page by reloading the current route
    //   };

    

    return (
        <div className="container">
            <p className={`primary-header reveal ${isContactRevealed ? "active" : ""}`}>Contact Us</p>
            <div>
                <p className={`secondary-header reveal ${isContactRevealed ? "active" : ""}`}>Let’s bring your vision to life</p>
                <div className="contact-details-container">
                    <p className={`tertiary-header reveal ${isContactRevealed ? "active" : ""}`}>Contacts</p>
                    <p className={`reveal ${isContactRevealed ? "active" : ""}`}>aada.technology@gmail.com</p>
                    
                </div>
            </div>
            
            <form>
           
            <img className="instagram-img" src={instagramCard} alt="instagram profile card" />
            <div>
                <label className={`reveal ${isContactRevealed ? "active" : ""}`}>First Name <span>*</span><br></br><input type="text" placeholder="Enter Your First Name"/></label><br></br>
                <label className={`reveal ${isContactRevealed ? "active" : ""}`}>Last Name <span>*</span><br></br><input type="text" placeholder="Enter Your Last Name"/></label><br></br>
                <label className={`reveal ${isContactRevealed ? "active" : ""}`}>Company <br></br><input type="text" placeholder="Enter Your Company Name"/></label><br></br>
                <label className={`reveal ${isContactRevealed ? "active" : ""}`}>Email <span>*</span><br></br><input type="text" placeholder="Enter Your Email"/></label><br></br>
                <label className={`reveal ${isContactRevealed ? "active" : ""}`}>Phone Number <span>*</span><br></br><input type="text" placeholder="Enter Your Phone Number"/></label><br></br>
                <label className={`reveal ${isContactRevealed ? "active" : ""}`}>Country <span>*</span><br></br><input type="text" placeholder="Enter Your Country"/></label><br></br>
                <label className={`reveal ${isContactRevealed ? "active" : ""}`}>Message <span>*</span><br></br><textarea placeholder="Enter Your Message"></textarea></label>
                <button className="primary-btn" type="button">Send</button>
                </div>
            </form>

            
        </div>
    )
}