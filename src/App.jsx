// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import QRCodeGenerator from './components/QRCodeGenerator';

const App = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  const handlePayClick = () => {
    setShowQRCode(!showQRCode); // Toggle QR code visibility
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onPayClick={handlePayClick} />
      <div className="flex justify-center items-center">
        <QRCodeGenerator visible={showQRCode} />
      </div>
    </div>
  );
};

export default App;
