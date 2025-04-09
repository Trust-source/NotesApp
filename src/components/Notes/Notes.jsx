import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Notes.scss'
import { X,NotebookPen  } from 'lucide-react';

function Notes() {
  const { id } = useParams();
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const navigate = useNavigate();

  const post = posts.find((post) => post.id && post.id.toString() === id);

  const handleClick = ()=>{
        navigate("/Home")
  }


  if (!post) {
    return <p>Note not found.</p>;
  }

  return (
    <div className="Notes">
        <div className="h3"><h2 onClick={handleClick}><X/></h2></div>
        <h2 className='Logo'>Notes<NotebookPen/></h2>
        <div className="CaptionContainer"><h3>Title:</h3><h3 className='Caption'>{post.caption}</h3></div>
        <div className="PostContainer"><p className='Note'>{post.notes}</p></div>
      
      <Navbar />
    </div>
  );
}

export default Notes;
