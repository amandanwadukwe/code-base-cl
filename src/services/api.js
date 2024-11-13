import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/loans'; // Update as needed for your backend URL

const PAYMENT_API_BASE_URL = 'http://localhost:5000/api/payment';

const REQUEST_API_BASE_URL = 'http://localhost:5000/api/request';

// Create a loan request
export const createLoanRequest = async (loanData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/`, loanData);
    return response.data;
  } catch (error) {
    console.error("Error creating loan request:", error);
    throw error;
  }
};
// Update loan request status to 'pending_active' (for confirmation page)
export const updateLoanRequestStatus = async (requestId) => {
  try {
    const response = await axios.post(`${REQUEST_API_BASE_URL}/request/update-status`, { requestId });
    return response.data; // Returns updated loan request status
  } catch (error) {
    console.error("Error updating loan request status:", error);
    throw error;
  }
};

// Process payment for a loan request
export const processPayment = async (loanId) => {
  try {
    const response = await axios.post(`${PAYMENT_API_BASE_URL}/process-payment/${loanId}`);
    return response.data;
  } catch (error) {
    console.error("Error processing payment:", error);
    throw error;
  }
};

// Fetch pending loan requests (optional example function for admin view)
export const getPendingRequests = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pending`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pending requests:", error);
    throw error;
  }
};

// Approve a loan request by ID (optional example function for admin approval)
export const approveLoanRequest = async (id) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}/approve`);
    return response.data;
  } catch (error) {
    console.error("Error approving loan request:", error);
    throw error;
  }
};

// Reject a loan request by ID (optional example function for admin rejection)
export const rejectLoanRequest = async (id) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}/reject`);
    return response.data;
  } catch (error) {
    console.error("Error rejecting loan request:", error);
    throw error;
  }
};


// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api/loans';

// // Create a loan request
// export const createLoanRequest = async (loanData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/`, loanData);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating loan request:", error);
//     throw error;
//   }
// };

// // Get all pending loan requests
// export const getPendingRequests = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/pending`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching pending requests:", error);
//     throw error;
//   }
// };

// // Approve a loan request by ID
// export const approveLoanRequest = async (id) => {
//   try {
//     const response = await axios.put(`${API_BASE_URL}/${id}/approve`);
//     return response.data;
//   } catch (error) {
//     console.error("Error approving loan request:", error);
//     throw error;
//   }
// };

// // Reject a loan request by ID
// export const rejectLoanRequest = async (id) => {
//   try {
//     const response = await axios.put(`${API_BASE_URL}/${id}/reject`);
//     return response.data;
//   } catch (error) {
//     console.error("Error rejecting loan request:", error);
//     throw error;
//   }
// };
