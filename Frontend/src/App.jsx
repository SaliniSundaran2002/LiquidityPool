import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddLiquidity from './components/AddLiquidity'
import ConnectWallet from './components/ConnectWallet';
import Home from './components/Home';
import RemoveLiquidity from './components/RemoveLiquidity';
import SwapToken from './components/SwapToken';

const App = () => {
  return (
    <>
    <Router>
      <ToastContainer />
      <Routes>
     <Route path='/' element ={<ConnectWallet />} />
     <Route path='/home' element ={<Home />} />
     <Route path='/addLiquidity' element={<AddLiquidity />} />
     <Route path='/removeLiquidity' element={<RemoveLiquidity />}/>
     <Route path='/swapLiquidity' element={<SwapToken /> }/>

      </Routes>
      </Router>


    </>
  )
}

export default App