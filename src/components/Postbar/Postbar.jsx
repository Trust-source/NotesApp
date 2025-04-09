  import React, { useState } from 'react';
  import Navbar from '../Navbar/Navbar';
  import './Postbar.scss';
  import { motion } from 'framer-motion';
  import Message from '../Message/Message';


  export default function Postbar() {
    const [notes,setNotes]= useState("");
    const [caption,setCaption] = useState("");
    const [message, setMessage] = useState("");
    const [isPosting, setIsPosting] = useState(false);

    const handlePost = () => {
      if (!caption || !notes) {
        setMessage("Please fill all fields");
        return;
      }   

      const generateId = () => Math.floor(100000 + Math.random() * 900000); // 6-digit random ID

    
      setIsPosting(true); // Simulate posting
      setMessage("Posting...");
    
      setTimeout(() => {
        // Create a new post object
        const newPost = { id: generateId(),caption, notes };
    
        // Get the current posts from localStorage
        const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    
        // Add the new post to the list of posts
        existingPosts.push(newPost);
    
        // Save the updated posts list back to localStorage
        localStorage.setItem("posts", JSON.stringify(existingPosts));
    
        setMessage("Posted successfully!");
        setIsPosting(false);
        setCaption("");
        setNotes("");
      }, 2000); 
    };
    

  return (
      <div className='Postbar'>

        <input 
          type="text" 
          className='Caption' 
          placeholder='Write a caption...' 
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          disabled={isPosting}
        />

            <input 
          type="text" 
          className='Notes' 
          placeholder='Write your notes here...' 
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          disabled={isPosting}
        />


        {message && <Message word={message}/>}

        <div className="ButtonContainer">
          <motion.div 
            className={`Button ${isPosting ? 'disabled' : ''}`}
            onClick={!isPosting ? handlePost : null}
            whileHover={!isPosting ? { scale: 1.1 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isPosting ? "Posting..." : "Post"}
          </motion.div>
        </div>
        <Navbar/>
      </div>
    );
  }
