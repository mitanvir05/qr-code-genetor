import React, { useState } from 'react';
import Navbar from './components/Navbar';
import QRCodeGenerator from './components/QRCodeGenerator';
import PaymentForm from './components/PaymentForm';

const App = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const receiverPublicKey = 'GCHLR6LHE77C4V6A2JJX6HTQXM2PJVLTDY24I3BPSOULG4DO7Y6S6AIO'; // Replace with the receiver's public key

  const handlePayClick = () => {
    setShowQRCode(!showQRCode); // Toggle QR code visibility
    setShowPaymentForm(false);  // Hide the form initially
  };

  const handleQRCodeScan = () => {
    setShowPaymentForm(true); // Show the form when the QR code is "scanned"
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onPayClick={handlePayClick} />
      <div className="flex flex-col items-center">
        {showQRCode && (
          <QRCodeGenerator 
            visible={showQRCode} 
            receiverPublicKey={receiverPublicKey} 
            onQRCodeScan={handleQRCodeScan}  // Add the scan handler here
          />
        )}
        {showPaymentForm && <PaymentForm receiverPublicKey={receiverPublicKey} />} {/* Show form on the same page */}
      </div>
    </div>
  );
};

export default App;
