import React from 'react'
import './SignUp.scss'
import { User,LockKeyhole,Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import {  useNavigate } from 'react-router-dom';
import { auth,db} from "../../config/firebaseConfig"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 


function SignUp() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword]= useState("")
  const [username,setUsername] = useState("")

  const signUp = async () =>{
    console.log("Sign-up function triggered");

    try{
      const userCredential=await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db,"users",user.uid),{
        uid: user.uid,
        username: username,
        email: user.email,
        createdAt: new Date()
      });

      console.log("User registered and stored in the firestore")
    }
    catch (err){
      console.error(err)
    }
    
};
  return (
    <div className='SignUp'>
          <h3 className="Heading">FlexiGram</h3>

<h3 className="Login">Create an account</h3>

<form className='Form'>

<div className="Container"><input type="text" className='Email' placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)}/> <Mail className='Icon'/></div>
<div className="Container3"><input type="text" className='Username' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/><User className='Icon3'/></div>
<div className="Container2"><input type="password" className='Password' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/><LockKeyhole className='Icon2'/></div>

<motion.div className='Button' 
type="button"
onClick={signUp}
whileHover={{scale:1.1}}
transition={{ type: "spring", stiffness: 300 }}>Continue</motion.div>
</form>


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