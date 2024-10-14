import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import {Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function SignIn() {

  const [email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ cookies, setCookie ] = useCookies()


  const navigate = useNavigate();

  const handleSubmit=()=>{
    const userDetails={"email":email, "password":password,};
    axios.post("http://localhost:3001/api/v1/auth/login",userDetails).then((res)=>{
      const obj = res.data
      if(obj.token!=="error"){
      setCookie("token", obj.token, {
        path: '/',                // Cookie is accessible across the entire site
        maxAge: 3600,             // Cookie expires in 1 hour
        secure: true,             // Cookie will only be set over HTTPS
        sameSite: 'Lax',          // Cookie is not sent with cross-site requests
      });
      setCookie("userdetails",(obj.userdetails), {
        path: '/',
        maxAge: 3600,
      });
      checkRoleandNavigate(obj.token, obj.userdetails);
    } else {
      alert("Login failed");
    }
        console.log("cookis is working",cookies)
    }).catch((err)=>{
      console.log(err)
      alert("somethin error")
    })
  };
  const checkRoleandNavigate=(token, userdetails)=>{
    if(token && userdetails === "admin"){
      navigate("/")
    }else if(token && userdetails === "user"){
      navigate("/")
    }
    else{
      alert("Invalid User")
    }
  }

  useEffect(() => {
    const token = cookies.token;
    const userdetails = cookies.userdetails ? (cookies.userdetails) : null;

    if (token && userdetails) {
      checkRoleandNavigate(token, userdetails); // Check role and navigate
    }
  }, [cookies, navigate]); // Re-run whenever cookies change



  return (
    <>
      
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6 input_width">
                <img className="d-flex mx-auto w-25" src="assets/images/Unlock.png" alt="" />
                <h2 className="text-center mb-4">Sign In</h2>
                <div className="text-center mb-4 fw-bolder">
                  Welcome user, please sign in to continue
                </div>
                <form className="input_text pt-4">
                  <div className="mb-3">
                    {/* <label htmlFor="username" className="form-label">
                      Username/Email
                    </label> */}
                    <input
                      type="email"
                      className="form-control"
                      id="username"
                      placeholder="username or email"
                      required=""
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="password" className="form-label">
                      Password
                    </label> */}
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                      required=""
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                  <div className="d-grid mb-3">
                    <button
                      type="button"
                      className="btn_class fw-bolder "
                      onClick={handleSubmit}
                    >
                      Sign In
                    </button>
                  </div>

                  <div className="text-center mb-3">
                    <Link to="#" className="link-primary">
                      Forgot Password?
                    </Link>
                    <span> | </span>
                    <Link to="/signup" className="link-primary">
                      Sign Up
                    </Link>
                  </div>
                  <div className="d-grid mb-2">
                    <button
                      type="button"
                      className="btn fw-bolder"
                      style={{ backgroundColor: "#e0e0e0" }} 
                    >
                      <img className="svg_class_svg" src="assets/images/Google.svg" alt="" /> Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid mb-2">
                    <button
                      type="button"
                      className="btn fw-bolder"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                       <img className="svg_class_svg" src="assets/images/Facebook.svg" alt="" />  Sign in with Facebook
                    </button>
                  </div>
                  <div className="d-grid mb-2">
                    <button
                      type="button"
                      className="btn fw-bolder"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      <img className="svg_class_svg" src="assets/images/X.svg" alt="" /> Sign in with Twitter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default SignIn;
