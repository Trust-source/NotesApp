import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import  supabase from "../config/Supabase"; // Import Supabase instance

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser(); // Get authenticated user

      if (error || !data.user) {
        setUser(null);
      } else {
        setUser(data.user);
      }
      
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
