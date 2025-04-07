import React, { useEffect, useState } from 'react';
import './Feed.scss';
import { Heart, Repeat2, MessageCircle, MoreHorizontal } from 'lucide-react';
import { databases } from '../../config/Appwrite'; // Import Appwrite Database

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from Appwrite
  const fetchPosts = async () => {
    try {
      const response = await databases.listDocuments(
        "67f365f000207291f394", // Your database ID
        "67f366220012b7454287", // Your collection ID
        [] 
      );

      const postData = response.documents.map((post) => ({
        id: post.$id,
        caption: post.caption,
        image: post.image,
        username: post.username || "Anonymous",
        userProfilePic: post.userProfilePic || "/default-profile.png",
        createdAt: new Date(post.createdAt).toLocaleString(),
        likes: post.likes || 0,
        shares: post.shares || 0,
        comments: post.comments || 0,
      }));

      setPosts(postData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="Feed loading">
        <div className="loading-spinner"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="Feed empty">
        <p>No posts yet. Be the first to post!</p>
      </div>
    );
  }

  return (
    <div className='Feed'>
      {posts.map((post) => (
        <div key={post.id} className="Post">
          <div className="PostHeader">
            <div className="UserInfo">
              <img 
                src={post.userProfilePic} 
                alt={post.username}
                className="ProfilePic"
              />
              <span className="Username">{post.username}</span>
            </div>
            <button className="MoreButton">
              <MoreHorizontal size={18} />
            </button>
          </div>
          
          <div className="PostImage">
            <img src={post.image} alt="Post" />
          </div>
          
          <div className="PostActions">
            <button className="ActionButton">
              <Heart size={24} />
              <span>{post.likes}</span>
            </button>
            <button className="ActionButton">
              <MessageCircle size={24} />
              <span>{post.comments}</span>
            </button>
            <button className="ActionButton">
              <Repeat2 size={24} />
              <span>{post.shares}</span>
            </button>
          </div>
          
          <div className="PostCaption">
            <strong>{post.username}</strong> {post.caption}
          </div>
          
          <div className="PostTime">
            {post.createdAt}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
