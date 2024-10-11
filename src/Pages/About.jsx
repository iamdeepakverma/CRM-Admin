import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Header />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>About</h1>
          </Box>
      </Box>
    </>
  );
};

export default About;
