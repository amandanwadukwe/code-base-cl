import { useEffect, useState } from "react";
import axios from 'axios';
import instagramCard from "../resources/1000065469.png";

export default function Contact({ isContactRevealed, componentToReveal }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    country: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    componentToReveal('contact');
  }, [componentToReveal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatusMessage(response.data.message);
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        country: '',
        message: '',
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatusMessage("There was an error submitting your request. Please try again.");
    }
  };

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
      
      <form onSubmit={(e) => e.preventDefault()}>
        <img className="instagram-img" src={instagramCard} alt="instagram profile card" />
        <div>
          <label className={`reveal ${isContactRevealed ? "active" : ""}`}>
            First Name <span>*</span><br />
            <input type="text" name="firstName" placeholder="Enter Your First Name" value={formData.firstName} onChange={handleChange} required />
          </label><br />
          <label className={`reveal ${isContactRevealed ? "active" : ""}`}>
            Last Name <span>*</span><br />
            <input type="text" name="lastName" placeholder="Enter Your Last Name" value={formData.lastName} onChange={handleChange} required />
          </label><br />
          <label className={`reveal ${isContactRevealed ? "active" : ""}`}>
            Company<br />
            <input type="text" name="company" placeholder="Enter Your Company Name" value={formData.company} onChange={handleChange} />
          </label><br />
          <label className={`reveal ${isContactRevealed ? "active" : ""}`}>
            Email <span>*</span><br />
            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
          </label><br />
          <label className={`reveal ${isContactRevealed ? "active" : ""}`}>
            Phone Number <span>*</span><br />
            <input type="text" name="phoneNumber" placeholder="Enter Your Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
          </label><br />
          <label className={`reveal ${isContactRevealed ? "active" : ""}`}>
            Country <span>*</span><br />
            <input type="text" name="country" placeholder="Enter Your Country" value={formData.country} onChange={handleChange} required />
          </label><br />
          <label className={`reveal ${isContactRevealed ? "active" : ""}`}>
            Message <span>*</span><br />
            <textarea name="message" placeholder="Enter Your Message" value={formData.message} onChange={handleChange} required></textarea>
          </label>
          <button className="primary-btn" type="button" onClick={handleSubmit}>Send</button>
        </div>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
}
