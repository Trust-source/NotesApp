import React from 'react'
import './SignUp.scss'
import { User,LockKeyhole,Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import {  useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate()
  return (
    <div className='SignUp'>
          <h3 className="Heading">FlexiGram</h3>

<h3 className="Login">Create an account</h3>

<form className='Form'>

<div className="Container"><input type="text" className='Email' placeholder='E-mail'/> <Mail className='Icon'/></div>
<div className="Container3"><input type="text" className='Username' placeholder='Username'/><User className='Icon3'/></div>
<div className="Container2"><input type="password" className='Password' placeholder='Password'/><LockKeyhole className='Icon2'/></div>

</form>
<motion.div className='Button'
onClick={()=>navigate("/Home")}
whileHover={{scale:1.1}}
transition={{ type: "spring", stiffness: 300 }}>Continue</motion.div>

<div className="Group">
<span className="Line"></span>
<span className='Text'>Have an account Already?</span>
<span className="Line"></span>

</div>


<motion.div className='Button2' onClick={()=>navigate("/")}
  whileHover={{scale:1.1}}
  transition={{ type: "spring", stiffness: 300 }}>
    Login</motion.div>

    </div>
  )
}

export default SignUp