import React from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = ({ visible, receiverPublicKey, onQRCodeScan }) => {
  const link = `http://localhost:5174/payment-form?receiver=${receiverPublicKey}`;

  if (!visible) return null; // Only render if visible is true

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-xl font-semibold mb-4">Scan to Pay</h2>
      <div className="p-4 border border-gray-300 rounded shadow-lg" onClick={onQRCodeScan}>
        <QRCode value={link} size={256} />
      </div>
      <a href="#" onClick={(e) => { e.preventDefault(); onQRCodeScan(); }} className="mt-4 text-blue-500 underline">
        {link}
      </a>
    </div>
  );
};

export default QRCodeGenerator;
