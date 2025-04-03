import React from 'react'
import './SignIn.scss'
import { LockKeyhole,Mail} from 'lucide-react';
import { motion } from 'framer-motion';
import { Navigate, useNavigate } from 'react-router-dom';


function SignIn() {
  const navigate = useNavigate();
  return (
    <div className='SignIn'>
        <h3 className="Heading">FlexiGram</h3>

        <h3 className="Login">Log in to FlexiGram</h3>

        <form className='Form'>
        <div className="Container"><input type="text" className='Email' placeholder='E-mail'/> <Mail className='Icon'/></div>
        <div className="Container2"><input type="password" className='Password' placeholder='Password'/><LockKeyhole className='Icon2'/></div>
        </form>
        <motion.div className='Button'
        onClick={()=>{navigate('/Home')}}
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