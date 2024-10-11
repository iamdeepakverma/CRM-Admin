import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import{ UserList }from '../components/User/UserList'
const Reports = () => {
    const [ Report , setReports ] = useState()

    useEffect(()=>{
        if(localStorage.getItem("token") !==null && localStorage.getItem("userdetails")===("admin")){
            setReports(
                <>
                mu admin Reports hu 
                </>
            )
        }
        else if(localStorage.getItem("token") !==null && localStorage.getItem("userdetails")===("user")){
            setReports(
                <>
                
                mai user reports hu </>
            )
        }
        else{
            setReports(
                <>
                Mai normal reports hu 
                </>
            )
        }

    })
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
      <Header/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {Report}
      </Box>
     </Box>
    
    </>
  )
}

export default Reports
