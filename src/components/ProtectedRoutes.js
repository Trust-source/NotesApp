import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { account } from "../config/Appwrite"; // Import Appwrite account instance

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const session = await account.get(); // Fetch logged-in user
        setUser(session);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
