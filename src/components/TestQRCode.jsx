import React from 'react';
import QRCode from 'react-qr-code';

const TestQRCode = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <QRCode value="https://example.com" />
    </div>
  );
};

export default TestQRCode;
