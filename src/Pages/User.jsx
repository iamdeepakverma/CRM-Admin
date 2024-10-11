import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import{ UserList }from '../components/User/UserList'

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
     {/* <Adduser/> */}
     </Box>
    </>
  )
}

export default User;


