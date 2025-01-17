import React, { useState } from 'react';
import { ethers } from 'ethers';
import Address from '../data/deployed_addresses.json'
import ABI from '../data/LiquidityPool.json'
import bg from '../assets/images/bg1.jpg'

const SwapToken = () => {
    const [amountAIn, setAmountAIn] = useState('');
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    const address = Address['LiquidityModule#LiquidityPool']

    const handleSubmit = async () => {
        try {
            const contract = new ethers.Contract(address, ABI.abi, signer);
            const tx = await contract.swapTokens(ethers.utils.parseUnits(amountAIn, 18));
            await tx.wait();
            console.log('Transaction hash:', tx.hash);
        } catch (error) {
            console.error('Error swapping tokens:', error);
        }
    };

    return (
        <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
  style={{ backgroundImage: `url(${bg})` }}
>
  {/* Top-Left Header with Golden Color */}
  <h2 className="absolute top-4 left-4 text-3xl font-bold text-[#FFD700]">
    TokenFlow
  </h2>

  {/* Centered Content */}
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
      Swap Tokens
    </h2>
    <div className="mb-4">
      <label
        htmlFor="amountAIn"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Amount A In:
      </label>
      <input
        type="number"
        id="amountAIn"
        value={amountAIn}
        onChange={(e) => setAmountAIn(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter amount"
      />
    </div>
    <button
      onClick={handleSubmit}
      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
    >
      Swap Tokens
    </button>
  </div>
</div>



    );
};

export default SwapToken;