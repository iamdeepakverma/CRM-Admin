import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Sidebar'
import Navbar from '../components/Navbar'
import UserList from '../components/User/UserList'


const User = () => {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
      <Header/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <UserList/>
      </Box>
     </Box>
    </>
  )
}

export default User
