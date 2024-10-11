import React, { useState } from 'react';
import axios from 'axios';
import { Delete as DeleteIcon } from '@mui/icons-material'; // Import Delete Icon from Material-UI
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'; // Import Material-UI components

const DeleteIccon = (userId) => {
  const [open, setOpen] = useState(false); // State to manage dialog visibility

  // Function to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle the delete action
  const handleDelete = () => {

       axios.delete(`http://localhost:3001/api/v1/auth/delete/${userId}`).then((res)=>{
        console.log("User Delete Sucessfully",res)
        alert("User Delete Sucessfully")
       }).catch((error)=>{
        console.log(error)
        console.log("Something error")
        alert("Something error")
       })

    console.log('User deleted'); // Placeholder for the delete function

    handleClose();
  };

  return (
    <div>
      {/* Delete Icon that opens the confirmation dialog */}
      <DeleteIcon
        onClick={handleClickOpen}
        style={{ cursor: 'pointer' }}
      />

      {/* Material-UI Dialog for confirmation */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteIccon;
