import React, { useState } from 'react'
import './SignIn.scss'
import { LockKeyhole,Mail} from 'lucide-react';
import { motion } from 'framer-motion';
import {  useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 
import { auth,db} from "../../config/firebaseConfig"



function SignIn() {
  const navigate = useNavigate();

  const [email,setEmail]= useState();
  const [password,setPassword] = useState();

  const login = async ()=>{
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
  
      if (userSnap.exists()) {
        console.log("User data:", userSnap.data());
        console.log("yes")
        navigate('/Home'); 
      } else {
        console.log("No user data found in Firestore.");
      }
  
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  }
 



  return (
    <div className='SignIn'>
        <h3 className="Heading">FlexiGram</h3>

        <h3 className="Login">Log in to FlexiGram</h3>

        <form className='Form'>
        <div className="Container"><input type="text" className='Email' placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)}/> <Mail className='Icon'/></div>
        <div className="Container2"><input type="password" className='Password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/><LockKeyhole className='Icon2'/></div>
        </form>
        <motion.div className='Button'
        onClick={login}
        type="button"
        whileHover={{scale:1.1}}
        transition={{ type: "spring", stiffness: 300 }}>Continue</motion.div>

        <div className="Group">
        <span className="Line"></span>
        <span className='Text'>Don't have an account?</span>
        <span className="Line"></span>

        </div>
        

        <motion.div className='Button2'
        onClick={()=>{navigate('/SignUp')}}
        whileHover={{scale:1.1}}
        transition={{ type: "spring", stiffness: 300 }}>Sign Up</motion.div>


    </div>
  )
}

export default SignIn