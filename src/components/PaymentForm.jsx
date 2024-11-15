import React, { useState } from 'react';
import { Server, TransactionBuilder, BASE_FEE, Operation, Asset, Keypair, Networks } from 'stellar-sdk';

const PaymentForm = ({ receiverPublicKey }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const senderPublicKey = 'GCMCLKGK7W7G5EQ5GHFE5MJA4GO7FBYXOWPWWUUA4Y7B6CAVTOPNGGGJ'; // Replace with your public key
      const senderSecretKey = 'SB4PU4NKTH3M25WMKFJG7YC4BUTSHKJ3CSS5JJA2YIKZUSQPZIZSOBVI'; // Replace with your secret key

      const server = new Server('https://horizon-testnet.stellar.org');
      
      // Load sender account
      const senderAccount = await server.loadAccount(senderPublicKey);
      
      // Create a Stellar transaction
      const transaction = new TransactionBuilder(senderAccount, {
        fee: BASE_FEE,
        networkPassphrase: Networks.TESTNET,
      })
      .addOperation(Operation.payment({
        destination: receiverPublicKey,
        asset: Asset.native(),
        amount: amount,
      }))
      .setTimeout(120)
      .build();

      // Sign the transaction
      const senderKeypair = Keypair.fromSecret(senderSecretKey);
      transaction.sign(senderKeypair);

      // Submit transaction
      const transactionResult = await server.submitTransaction(transaction);
      console.log('Transaction successful:', transactionResult);
      alert('Transaction successful!');
    } catch (error) {
      // Enhanced error handling for detailed logging
      if (error.response && error.response.data) {
        console.error('Transaction failed:', error.response.data);
        alert(`Transaction failed: ${error.response.data.extras?.result_codes?.transaction || error.response.data.detail}`);
      } else {
        console.error('Transaction failed:', error.message);
        alert('Transaction failed!');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Send Money</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="receiver" className="block text-sm font-medium text-gray-700">Receiver Public Key</label>
          <input
            type="text"
            id="receiver"
            value={receiverPublicKey}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (in XLM)</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
            min="0.0001"   // Minimum allowed value
            step="0.0001"   // Allow amounts up to four decimal places
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send Money
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
