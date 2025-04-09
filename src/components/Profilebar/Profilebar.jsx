import React, {useState } from 'react';
import './Profilebar.scss';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';


function Profilebar() {
  const [following, setFollowing] = useState(false);
  

  return (
    <div className='Profilebar'>
      <div className="Third">
        <motion.div 
          className='Button'
          onClick={() => setFollowing(!following)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {following ? "Following" : "Follow"}
        </motion.div>
      </div>
      <Navbar />
    </div>
  );
}

export default Profilebar;
