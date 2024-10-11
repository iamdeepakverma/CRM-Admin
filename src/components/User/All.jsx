import React from "react";
import axios from 'axios'
import { useState,useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import ReplayIcon from "@mui/icons-material/Replay";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from '@mui/icons-material/Close';
import DeleteIccon from "./Delete";

import {
 Dialog ,DialogContent,Container,TextField,Button,Grid,Box,Typography,
} from '@mui/material';

export function All(){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [pList, setPList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3001/api/v1/auth/getusers").then((response)=>{
      // console.log(response.data.data.users)
      setPList(response.data.data.users)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  const handleDeleteUser = (userId) => {
    // Example delete logic (replace with actual logic e.g., API call)
    console.log(`User with ID ${userId} deleted.`);
    // You can place an API call here to delete the user from the server
  };

  return (
    <>
      <div className="">
        <div className="d-flex justify-content-between align-items-center inner_container">
          <div>
            <p>User Groups</p>
          </div>
          <div>
              {/* //Search Icon */}
              <Tooltip title="">
                  <IconButton>
                  <SearchIcon sx={{backgroundColor:"rgb(25,118,210)",color:"white",width:"45px",height:"45px",borderRadius:"50%",padding:"8px"}} />
                  </IconButton>
                </Tooltip>

               {/* <AddIcon  onClick={handleOpen} /> */}
               <span>
                <Tooltip title="Add New Device  ">
                  <IconButton onClick={handleOpen}>
                  
                    <AddIcon sx={{backgroundColor:"rgb(25,118,210)",color:"white",width:"45px",height:"45px",borderRadius:"50%"}}    />
                  </IconButton>
                </Tooltip>
                {open && <AddEntityGroup onClose={handleClose} />}
                  
                </span>

                <Tooltip title="">
                  <IconButton >
                  <span><ReplayIcon  sx={{backgroundColor:"rgb(25,118,210)",color:"white",width:"45px",height:"45px",borderRadius:"50%",padding:"8px"}}  /></span>
                  </IconButton>
                  </Tooltip>
          </div>
        </div>

        <div className="all_user_container">
          {/* <div className="inner_box">
                <span></span>
                <p>Created Tinme</p>
                <p>Name</p>
            </div> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-box clearfix mt-4">
                  <div className="table-responsive">
                    <table className="table user-list">
                      <thead>
                        <tr>
                          <th>
                            <span>Created</span>
                          </th>
                          <th>
                            <span>Name</span>
                          </th>
                          <th className="text-center">
                            <span>Phone No</span>
                          </th>
                          <th>
                            <span>Description</span>
                          </th>
                          <th>
                            <span>Email</span>
                          </th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      {pList.map((items, index) => (
                        <tbody>
                          <tr>
                            <td>{items.createdAt}</td>
                            <td>{items.name}</td>
                            <td>
                              {items.phoneno}
                            </td>
                            <td>
                              {items.description}
                            </td>
                            <td>
                              <a href="#">{items.email}</a>
                            </td>
                            <td className="icon_edit" style={{ width: "20%" }}>
                              <a href="#" className="table-link">
                                <span className="fa-stack">
                                  <Tooltip title="Edit">
                                    <IconButton>
                                      <EditIcon />
                                    </IconButton>
                                  </Tooltip>
                                </span>
                              </a>
                              <a href="#" className="table-link">
                                <span className="fa-stack">
                                  <Tooltip title="Delete">
                                    <IconButton>
                                    {/* <DeleteIcon  onClick={() => deleteUser(items.id)}  /> */}
                                      <DeleteIccon onDelete={() =>handleDeleteUser(items.id)} />
                                    </IconButton>
                                  </Tooltip>
                                </span>
                              </a>
                              <a href="#" className="table-link">
                                <span className="fa-stack">
                                  <Tooltip title="Edit">
                                    <IconButton>
                                      {/* <EditIcon /> */}{items.userType}
                                    </IconButton>
                                  </Tooltip>
                                </span>
                              </a>
                              
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      
    </>
  );
};

export function AddEntityGroup({ onClose }){

  const [userType, setUserType] = useState('user');
  const [ name , setName ] = useState();
  // const [ phonenumber , setPhone ] = useState();
  const [ email , setEmail ] = useState()
  const [ description , setDescription ] = useState();
  const [ password , setPassword ] = useState()
  const [ confirmPassword , setConfirmPassword ] = useState()
  const [ message , setMessage ] = useState();
  const [ phoneno , setPhoneno ] = useState();

  const handlesubmit=(event)=>{
    event.preventDefault(); // Prevent default form submission

    if  (!userType || !name || !email || !phoneno || !description || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    const userData = { userType, name , phoneno , description , email, password, confirmPassword };
    console.log(userData)

    axios.post("http://localhost:3001/api/v1/auth/signup",userData).then((res)=>{
      // console.log(res)
      setUserType('')
      setName('')
      setConfirmPassword('')
      setPassword('');
      setPhoneno('')
      setEmail('')
      setDescription('')
      onClose();
    }).catch((error)=>{
      console.log(error)
      alert('Error adding user. Please try again.');
    })
  }



  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth
    PaperProps={{
      style: {
        height: '550px',  // Set your fixed height here
         // Optional: set a fixed width if needed
      },
    }}>
      <DialogContent>
        <Box>
          {/* Form Content */}
          <Container maxWidth="sm">
            <Typography mb={4} variant="h4" gutterBottom>
                Add User
            </Typography>
            <Box>
            <IconButton edge="end" color="inherit" onClick={onClose}
            sx={{ position: 'absolute', right: 20, top: 20 ,backgroundColor:"rgb(25,118,210)",color:"white",width:"45px",height:"45px",borderRadius:"50%",
              padding:"8px",
              '&:hover':{
                backgroundColor:"rgb(25,118,210)",
                boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
              }}}>
          <CloseIcon /> 
        </IconButton>
            </Box>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="User Type"
                            name="user type"
                            fullWidth
                            required
                            value={userType}
                            onChange={(e)=>setUserType(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            name="Name"
                            fullWidth
                            required
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone No"
                            name="Phone No"
                            fullWidth
                            required
                            value={phoneno}
                            onChange={(e)=>setPhoneno(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            name="email"
                            fullWidth
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>{message}</Typography>
                        <TextField
                            label="Password"
                            name="password"
                            fullWidth
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <Typography sx={{fontSize:"13px"}}>Password length must be at least 7</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Confirm PAssword"
                            name="confrimPassword"
                            fullWidth
                            required
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            name="description"
                            fullWidth
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="button"  variant="contained" color="primary" onClick={handlesubmit}>
                            Submit
                        </Button>
                        &nbsp;
                        <Button variant='outlined' onClick={onClose} color="primary">
                          Cancel
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
