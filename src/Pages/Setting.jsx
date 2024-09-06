import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Sidebar'
import Navbar from '../components/Navbar'
import List from '../Setting/List'

const Setting = () => {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
      <Header/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <List/>
      </Box>
     </Box>
    </>
  )
}

export default Setting
