import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Postbar.scss';
import { motion } from 'framer-motion';
import { usePost } from '../../Context/PostProvider';
import Message from '../Message/Message';
import { databases, storage, ID } from '../../config/Appwrite'; // Import Appwrite services
import { account } from '../../config/Appwrite';

export default function Postbar() {
  const { addPost } = usePost();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [message, setMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isPosting, setIsPosting] = useState(false);

  // Get logged-in user
  const getUser = async () => {
    try {
      return await account.get();
    } catch {
      return null;
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setMessage("Image size should be less than 5MB");
        return;
      }
      setImage(file);
      setMessage("");
    }
  };

  const handlePost = async () => {
    if (isPosting) return;
    
    try {
      setIsPosting(true);
      setUploadProgress(10);
      
      if (!image || !caption) {
        setMessage("Please upload an image and write a caption");
        setIsPosting(false);
        return;
      }

      const user = await getUser();
      if (!user) {
        setMessage("You must be logged in to post.");
        setIsPosting(false);
        return;
      }
      
      setMessage("Uploading image...")
      // Upload image to Appwrite Storage
      const fileId = ID.unique();
      const fileUpload = await storage.createFile("67f36b9f003dee9c279c", fileId, image);
      const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/your_bucket_id/files/${fileId}/view?project=your_project_id`;

      const postData = {
        caption,
        image: imageUrl,
        userId: user.$id,
        username: user.name || "Anonymous",
        createdAt: new Date().toISOString(), // Appwrite assigns createdAt but this is for immediate UI update
        likes: 0,
        shares: 0,
        comments: 0,
      };

      // Add to Appwrite Database
      const response = await databases.createDocument(
        "67f365f000207291f394",
        "67f366220012b7454287",
        ID.unique(),
        postData
      );

      // Immediately update local state
      addPost({
        ...postData,
        id: response.$id,
      });

      setCaption("");
      setImage(null);
      setMessage("Post uploaded successfully!");
    } catch (error) {
      console.error("Error in posting:", error);
      setMessage("An unexpected error occurred.");
    } finally {
      setIsPosting(false);
      setUploadProgress(100);
    }
  };

  return (
    <div className='Postbar'>
      <div className="Image">
        <input 
          type="file" 
          accept="image/*"
          onChange={handleImageChange}
          disabled={isPosting}
        />
        {image && (
          <div className="image-preview">
            <img src={URL.createObjectURL(image)} alt="Preview" />
            <button onClick={() => setImage(null)}>Remove</button>
          </div>
        )}
      </div>

      <input 
        type="text" 
        className='Caption' 
        placeholder='Write a caption...' 
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        disabled={isPosting}
      />

      {message && <Message word={message} type="info" />}

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
