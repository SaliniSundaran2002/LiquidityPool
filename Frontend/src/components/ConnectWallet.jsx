import React from 'react';
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers';
import { toast } from 'react-toastify'
import bg from '../assets/images/bg.jpg'

const ConnectWallet = () => {
    const navigate = useNavigate();
    async function connectMetamask() {

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        toast.success(`${signer.address} is successfully logged in `);
        navigate('/home')
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h2 className="text-3xl font-bold text-[#FFD700] absolute top-0 left-0 ml-4 mt-4">LiquidityPool</h2>
            <div className="absolute top-0 right-0 z-10 px-4 mt-8">
                <button
                    onClick={connectMetamask}
                    className="bg-blue-500 px-6 py-3 text-white rounded-lg text-lg md:text-xl hover:bg-blue-600 transition"
                >
                    Connect Metamask
                </button>
            </div>
        </div>


    );
};
export default ConnectWallet