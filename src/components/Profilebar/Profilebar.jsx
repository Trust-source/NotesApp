import React, { useEffect, useState } from 'react';
import './Profilebar.scss';
import Navbar from '../Navbar/Navbar';
import Topbar from '../Topbar/Topbar';
import { motion } from 'framer-motion';
import { auth, db } from "../../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import defaultProfilePic from '../../Assets/Profile.jpg'; // Fallback image

function Profilebar() {
  const [userData, setUserData] = useState({
    username: "Loading...",
    profilePic: defaultProfilePic,
    followers: 0,
    following: 0
  });

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData({
              username: userDoc.data().username || "Anonymous",
              profilePic: userDoc.data().profilePic || defaultProfilePic,
              followers: userDoc.data().followers || 0,
              following: userDoc.data().following || 0
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log("User signed out");
    }).catch((error) => {
      console.error("Logout error:", error);
    });
  };

  return (
    <div className='Profilebar'>
      <Topbar/>
      <div className="First">
        <img src={userData.profilePic} alt="Profile" /> 
        <div className="Followers">
          {userData.followers} <span>Followers</span>
        </div> 
        <div className="Following">
          {userData.following} <span>Following</span>
        </div>
      </div>
      <div className="Second">
        <div className="Username">{userData.username}</div>
      </div>
      <div className="Third">
        <motion.div 
          className='Button'
          onClick={handleLogout}
          whileHover={{scale:1.1}}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Log-Out
        </motion.div>
      </div>
      <Navbar/>
    </div>
  );
}

export default Profilebar;