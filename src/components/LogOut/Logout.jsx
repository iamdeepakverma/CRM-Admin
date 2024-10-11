import React from 'react'
import { Navigate } from "react-router-dom";


const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userdetails');

  return (
    <div>
          <Navigate to='/'/>
    </div>
  )
}

export default Logout
