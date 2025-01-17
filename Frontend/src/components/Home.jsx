import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/images/bg3.jpg'

const Home = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <header className="absolute top-0 w-full flex justify-between items-center p-4">

                <h2 className="text-3xl font-bold text-[#FFD700] mx-auto">LiquidityPool</h2>

                <nav className="flex space-x-4 mt-4">
                    <Link
                        to="/addLiquidity"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        Add Liquidity
                    </Link>
                    <Link
                        to="/removeLiquidity"
                        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                    >
                        Remove Liquidity
                    </Link>
                    <Link
                        to="/swapLiquidity"
                        className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                    >
                        Swap Tokens
                    </Link>
                </nav>
            </header>

        </div>


    )
}

export default Home