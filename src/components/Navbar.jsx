import React from 'react';

const Navbar = ({ onPayClick }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-semibold">My QR App</h1>
      <button
        onClick={onPayClick}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium"
      >
        Pay
      </button>
    </nav>
  );
};

export default Navbar;
