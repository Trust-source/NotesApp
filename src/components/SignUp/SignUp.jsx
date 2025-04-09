import React, { useState } from 'react';
import './SignUp.scss';
import { User, LockKeyhole, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import supabase from '../../config/Supabase'; 
import Message from '../Message/Message';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const signUp = async () => {
    console.log('Sign-up function triggered');
    
    if (!email || !password || !username) {
      setMessage('All fields are required.');
      return;
    }

    try {
      // Create user in Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) throw error;
      console.log('User registered:', data);

      // Get the newly created user ID
      const userId = data?.user?.id;
      if (!userId) {
        setMessage('Error retrieving user ID.');
        return;
      }

    

      alert('Account created! Now login.');
      navigate('/');

    } catch (err) {
      console.error('Sign-up error:', err);
      setMessage(err.message);
    }
  };

  return (
    <div className='SignUp'>
      <h3 className="Heading">FlexiNotes</h3>
      <h3 className="Login">Create an account</h3>

      <form className='Form'>
        <div className="Container">
          <input type="text" className='Email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
          <Mail className='Icon' />
        </div>
        <div className="Container3">
          <input type="text" className='Username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
          <User className='Icon3' />
        </div>
        <div className="Container2">
          <input type="password" className='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <LockKeyhole className='Icon2' />
        </div>
        {message && <Message word={message} />}
        <motion.div className='Button' type="button" onClick={signUp} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          Continue
        </motion.div>
      </form>

      <div className="Group">
        <span className="Line"></span>
        <span className='Text'>Have an account Already?</span>
        <span className="Line"></span>
      </div>

      <motion.div className='Button2' onClick={() => navigate("/")} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
        Login
      </motion.div>
    </div>
  );
}

export default SignUp;
