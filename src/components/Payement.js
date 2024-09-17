import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    // Update the payment status on the backend and redirect
    navigate('/committee-dashboard');
  };

  return (
    <div className="payment-container">
      <h2>Payment Required</h2>
      <p>Please complete the payment to access the Committee Leader dashboard.</p>
      <button onClick={handlePaymentSuccess}>Complete Payment</button>
    </div>
  );
};

export default Payment;
