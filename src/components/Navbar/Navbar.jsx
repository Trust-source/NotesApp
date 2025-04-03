import React from 'react'
import './Navbar.scss'
import { House, Search, SquarePlus, CircleUserRound} from 'lucide-react';
import {motion} from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (path)=>{ navigate(path)}
  return (
    <div className='Navbar'>
        <motion.div className="Home" 
        onClick={()=>{handleClick( "/Home")}}
        animate={{ scale: location.pathname === "/" ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        ><House/></motion.div>
        <motion.div className="Search"
        onClick={()=>{handleClick("/Search")}}
        animate={{ scale: location.pathname === "/Search" ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}><Search/></motion.div>
        <motion.div className="Post"
        onClick={()=>{handleClick("/Post")}}
        animate={{ scale: location.pathname === "/Post" ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}><SquarePlus/></motion.div>
        <motion.div className="Profile"
        onClick={()=>{handleClick("/Profile")}}
        animate={{ scale: location.pathname === "/Profile" ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}><CircleUserRound/></motion.div>
    </div>
  )
}

export default Navbar