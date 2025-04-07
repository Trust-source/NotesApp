import React, { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../config/Appwrite"; // Import Appwrite database instance
import { ID, Query } from "appwrite";
import defaultProfilePic from "../Assets/Profile.jpg"; // Fallback image

export const PostContext = createContext();

export const usePost = () => useContext(PostContext);

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await databases.listDocuments("67f365f000207291f394", "67f366220012b7454287", [
        Query.orderDesc("createdAt"),
      ]);

      const postData = response.documents.map((post) => ({
        id: post.$id,
        ...post,
        username: post.username || "Anonymous",
        userProfilePic: post.userProfilePic || defaultProfilePic,
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

  const addPost = async (newPost) => {
    try {
      const response = await databases.createDocument(
        "67f365f000207291f394",
        "67f366220012b7454287",
        ID.unique(),
        newPost
      );

      setPosts((prevPosts) => [response, ...prevPosts]);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return <PostContext.Provider value={{ posts, addPost, loading }}>{children}</PostContext.Provider>;
}
