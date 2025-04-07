import React, { createContext, useState, useEffect, useContext } from "react";
import { account } from "../config/Appwrite"; // Import Appwrite config

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await account.get(); // Get current user session
        setUser(response);
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      console.log("Session:", session)
      const userData = await account.get();
      setUser(userData);
      return userData;
    } catch (error) {
      console.error(error)
    }
  };

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
