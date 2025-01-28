import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_51PyrA5HpyIlRO5CyTMqOwudUkHBAqREYpGjrIRUul6N1GygeDQlGlhzYFcsprzZT7pL4u2G2vIJEFU8V6lbwBwZt00169mpte2");

const BankDetailsPopup = ({ isModalOpen, onClose }) => {
  const [bankDetails, setBankDetails] = useState({
    accountHolderName: "",
    accountNumber: "",
    sortCode: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    try {
      // Use Stripe to tokenize bank details
      const { token, error } = await stripe.createToken("bank_account", {
        country: "GB", // Specify country
        currency: "GBP", // Currency for the account
        account_holder_name: bankDetails.accountHolderName,
        account_number: bankDetails.accountNumber,
        routing_number: bankDetails.sortCode,
      });

      console.log({ tokenId: token.id, name:bankDetails.accountHolderName, uuid:bankDetails.uuid })

      const response = await fetch("https://amandanwadukwe.a2hosted.com/aada-api-v2/payment/xMaCjJ1WxMMam3xc8gLH", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tokenId: token.id, name:bankDetails.accountHolderName, uuid:bankDetails.uuid  }),
      });
      
    

      if (error) {
        setMessage(`Error: ${error.message}`);
        return;
      }

      // Successfully tokenized, pass the details back to the parent component
      if (response.ok) {
        setMessage("Bank details submitted successfully!");
    
      onClose({
        ...bankDetails,
        stripeToken: token.id, // Include the tokenized Stripe ID
      });}
    } catch (err) {
      setMessage("An error occurred. Please try again.");
      console.error(err);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>Enter Bank Details</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="accountHolderName">Account Holder Name</label>
            <input
              type="text"
              id="accountHolderName"
              name="accountHolderName"
              placeholder="John Doe"
              value={bankDetails.accountHolderName}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="12345678"
              value={bankDetails.accountNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="sortCode">Sort Code</label>
            <input
              type="text"
              id="sortCode"
              name="sortCode"
              placeholder="12-34-56"
              value={bankDetails.sortCode}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => onClose(null)}
              style={styles.closeButton}
            >
              Close
            </button>
          </div>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  },
  submitButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
  closeButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#FF4D4F",
    color: "#fff",
    cursor: "pointer",
  },
  message: {
    marginTop: "16px",
    color: "green",
    fontWeight: "bold",
  },
};

export default BankDetailsPopup;
