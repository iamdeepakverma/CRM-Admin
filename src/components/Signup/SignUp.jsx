import React from "react";
import { Box } from "@mui/material";
import Header from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6 input_width">
                <img
                  className="d-flex mx-auto w-25"
                  src="assets/images/Lock.png"
                  alt=""
                />
                <h2 className="text-center mb-4">Sign Up</h2>
                <div className="text-center mb-4 fw-bolder">
                  Welcome user, please Sign Up to continue
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
                    />
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="confirm-password" className="form-label">
                      Confirm Password
                    </label> */}
                    <input
                      type="password"
                      className="w form-control"
                      id="confirm-password"
                      placeholder="Confirm password"
                      required=""
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
                    <button type="submit" className="btn_class fw-bolder ">
                      Sign Up
                    </button>
                  </div>

                  <div className="text-center mb-3">
                    <Link to="#" className="text-primary">
                      Forgot Password?
                    </Link>
                    <span> | </span>
                    <Link to="/signin" className="link-primary">
                      Sign In
                    </Link>
                  </div>
                  <div className="d-grid mb-2">
                    <button
                      type="button"
                      className="sadow_btn btn fw-bolder"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      <img
                        className="svg_class_svg"
                        src="assets/images/Google.svg"
                        alt=""
                      />{" "}
                      Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid mb-2">
                    <button
                      type="button"
                      className="sadow_btn btn fw-bolder"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      <img
                        className="svg_class_svg"
                        src="assets/images/Facebook.svg"
                        alt=""
                      />{" "}
                      Sign in with Facebook
                    </button>
                  </div>
                  <div className="d-grid mb-2">
                    <button
                      type="button"
                      className="sadow_btn btn fw-bolder"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      <img
                        className="svg_class_svg"
                        src="assets/images/X.svg"
                        alt=""
                      />{" "}
                      Sign in with Twitter
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

export default SignUp;
