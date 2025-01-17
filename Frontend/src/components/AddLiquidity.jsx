import React, { useState } from 'react';
import { ethers } from 'ethers';
import ABI from '../data/LiquidityPool.json';
import Address from '../data/deployed_addresses.json';
import bg from '../assets/images/bg1.jpg'

const AddLiquidity = () => {
    const [amountA, setAmountA] = useState('');
    const [amountB, setAmountB] = useState('');

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    const address = Address['LiquidityModule#LiquidityPool'];

    const handleSubmit = async () => {
        try {
            const contract = new ethers.Contract(address, ABI.abi, signer);
            const tx = await contract.addLiquidity(ethers.utils.parseUnits(amountA, 18), ethers.utils.parseUnits(amountB, 18));
            await tx.wait();
            console.log('Transaction hash:', tx.hash);
        } catch (error) {
            console.error('Error adding liquidity:', error);

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
                <h2 className="text-center text-2xl font-bold text-black">
                    Add Liquidity
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="amountA"
                        className="block text-gray-600 font-medium mb-2"
                    >
                        Amount A:
                    </label>
                    <input
                        type="number"
                        id="amountA"
                        value={amountA}
                        onChange={(e) => setAmountA(e.target.value)}
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        placeholder="Enter amount A"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="amountB"
                        className="block text-gray-600 font-medium mb-2"
                    >
                        Amount B:
                    </label>
                    <input
                        type="number"
                        id="amountB"
                        value={amountB}
                        onChange={(e) => setAmountB(e.target.value)}
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        placeholder="Enter amount B"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
                >
                    Add Liquidity
                </button>
            </div>
        </div>


    );
};

export default AddLiquidity;