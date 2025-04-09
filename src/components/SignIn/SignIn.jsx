import React, { useState } from 'react';
import './SignIn.scss';
import { LockKeyhole, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import Message from '../Message/Message';

function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use login function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    if(!email||!password){
      setMessage('Please fill in all fields');
      return;
    }
    try {
      await login(email, password);
      alert('Logged-in');
      navigate('/Home'); // Redirect to home after login
    } catch (error) {
      console.error('Login failed:', error.message);
      setMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='SignIn'>
      <h3 className='Heading'>FlexiNotes</h3>
      <h3 className='Login'>Log in to FlexiNotes</h3>

      <form className='Form'>
        <div className='Container'>
          <input
            type='text'
            className='Email'
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Mail className='Icon' />
        </div>
        <div className='Container2'>
          <input
            type='password'
            className='Password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <LockKeyhole className='Icon2' />
        </div>
      </form>

      {message && <Message word={message} />}
      <motion.div
        className='Button'
        onClick={handleLogin}
        type='button'
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Continue
      </motion.div>

      <div className='Group'>
        <span className='Line'></span>
        <span className='Text'>Don't have an account?</span>
        <span className='Line'></span>
      </div>

      <motion.div
        className='Button2'
        onClick={() => navigate('/SignUp')}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Sign Up
      </motion.div>
    </div>
  );
}

export default SignIn;
