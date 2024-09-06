import React from 'react'
import Profile from '../components/Account/List'
import { Box } from "@mui/material";
import Header from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Account() {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
      <Header/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Profile/>
      </Box>
     </Box>
    </>
  )
}

export default Account
