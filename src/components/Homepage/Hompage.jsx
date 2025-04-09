import React, { useState } from 'react'
import './Homepage.scss'
import Navbar from '../Navbar/Navbar'
import Topbar from '../Topbar/Topbar'
import { useEffect } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { Trash2 } from 'lucide-react';



 
function Homepage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();


  const handlePreviewClick = (id) => {
    navigate(`/Notes/${id}`);
  };


  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);


  const deleteNote = (id) =>{
   
  const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
  console.log(storedPosts)


  const updatedPosts = storedPosts.filter((post) => post.id && post.id !== id);


  localStorage.setItem("posts", JSON.stringify(updatedPosts));


  setPosts(updatedPosts);

  }
  return (
    <div className='Homepage'>
    <Topbar/>
    <div className="Container">


          {posts.length === 0 ? (
            <p>No posts yet.</p>
          ) : (
            <div className="PostList">
              {posts.map((post) => (
                <div key={post.id} className="PostPreview" onClick={()=>handlePreviewClick(post.id)}>
                  <p>{post.caption}</p>
                  <Trash2 className='Logo' onClick={(e)=>{
                     e.stopPropagation(); 
                     deleteNote(post.id);}
                     }/>
                </div>
              ))}
            </div>
          )}
    </div>
    <Navbar/>
    </div>
  )
}

export default Homepage