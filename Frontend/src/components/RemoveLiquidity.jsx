import React, { useState } from 'react';
import { ethers } from 'ethers';
import ABI from '../data/LiquidityPool.json'
import Address from '../data/deployed_addresses.json'
import bg from '../assets/images/bg1.jpg'

const RemoveLiquidity = () => {
    const address = Address['LiquidityModule#LiquidityPool'];
    const [liquidityAmount, setLiquidityAmount] = useState('');
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();

    const handleSubmit = async () => {
        try {
            const contract = new ethers.Contract(address, ABI.abi, signer);
            const tx = await contract.removeLiquidity(ethers.utils.parseUnits(liquidityAmount, 18));
            await tx.wait();
            console.log('Transaction hash:', tx.hash);

        } catch (error) {
            console.error('Error removing liquidity:', error);

        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bg})` }}
        >

            <h2 className="absolute top-4 left-4 text-3xl font-bold text-[#FFD700]">
                LiquidityPool
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Remove Liquidity
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="liquidityAmount"
                        className="block text-gray-600 font-medium mb-2"
                    >
                        Liquidity Amount:
                    </label>
                    <input
                        type="number"
                        id="liquidityAmount"
                        value={liquidityAmount}
                        onChange={(e) => setLiquidityAmount(e.target.value)}
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-red-300 focus:outline-none"
                        placeholder="Enter amount to remove"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
                >
                    Remove Liquidity
                </button>
            </div>
        </div>

    );
};

export default RemoveLiquidity;