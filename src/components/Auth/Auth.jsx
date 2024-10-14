import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

const Auth = () => {

    const [cookies] = useCookies(['token', 'userdetails']);
    const navigate = useNavigate();

    useEffect(()=>{

        const token = cookies.token
        const userdetails = cookies.userdetails
        var path=window.location.pathname;

        // console.log("Current Path:", path);
        // console.log("Token:", token);
        // console.log("User Details:", userdetails);

          // Check if token and user details are available
          if (!token || !userdetails) {
            console.error("Missing authentication token or user details");
            return navigate("/logout");
        }

         // Role-based navigation
         if (path === "/admin" && userdetails !== "admin") {
            console.log("User is not admin, redirecting to logout");
            navigate("/logout");
        } else if (path === "/user" && userdetails !== "user") {
            console.log("User is not user, redirecting to logout");
            navigate("/logout");
        }
    },[cookies, navigate])

  return (
    <></>
  )
}

export default Auth
