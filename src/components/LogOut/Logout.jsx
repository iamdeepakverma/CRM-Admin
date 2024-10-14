import React, { useEffect } from 'react'
import { Navigate,useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';


const Logout = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['token', 'userdetails']);
  const navigate = useNavigate()

  const handleLogout = () => {
    removeCookie("token", { path: '/' });          // Remove token cookie
    removeCookie("userdetails", { path: '/' });    // Remove userdetails cookie
    navigate("/signin"); // Redirect to login page after logout
  };

  useEffect(() => {
    handleLogout(); // Perform logout when component mounts
  }, []);


  return (
    <div>
          Logging Out....
    </div>
  )
}

export default Logout
