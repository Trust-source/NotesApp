import React, {useState } from 'react';
import './Profilebar.scss';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { useAuth } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';



function Profilebar() {

  const navigate = useNavigate();
  const {logout}= useAuth();
  const handleLogout = () =>{
    logout()
    navigate("/")
    alert("Sign out")
  }
  

  return (
    <div className='Profilebar'>
      <div className="Third">
        <motion.div 
          className='Button'
          onClick={handleLogout }
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Log-out
        </motion.div>
      </div>
      <Navbar />
    </div>
  );
}

export default Profilebar;
