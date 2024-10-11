import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography, Button, Switch } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, IconButton } from '@mui/material';
import { TableSortLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';

import {
  TextField, Stepper, Step, StepLabel, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


// icons
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ReplayIcon from "@mui/icons-material/Replay";
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

import PeopleIcon from '@mui/icons-material/People';
import ShareIcon from '@mui/icons-material/Share';
import ReplyIcon from '@mui/icons-material/Reply';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import App from './Addgroupspopup';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-head': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  }));
  
  const data = [
    {
      createdTime: '2024-08-23 23:43:06',
      name: 'All',
      description: '',
      isPublic: false,
    }
  ];
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function EntGroupDevicies(){

  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
   <>
   
          <Box mb={3} >
            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
                <Typography variant='h6'>Devices Group</Typography>
              </Box>
              <Box sx={{ display: "flex", columnGap: "10px" }}>
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
              </Box>
            </Box>
          </Box>
          {/* secound box */}
          <Box>
        <TableContainer>
          <Table aria-label="custom table">
            <TableHead>
              <TableRow>
                <StyledTableCell padding="checkbox">
                  <Checkbox color="primary" />
                </StyledTableCell>
                <StyledTableCell align="left">
                  <TableSortLabel active={true} direction="desc">
                    Created time
                  </TableSortLabel>
                </StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">Public</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell> {/* Action icons header */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <StyledTableRow key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" checked={row.isPublic} />
                  </TableCell>
                  <TableCell>{row.createdTime}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell align="center">
                    {/* People */}
                    <Tooltip title="People">
                        <IconButton>
                        <PeopleIcon />
                        </IconButton>
                      </Tooltip>
                    {/* Share */}
                    <Tooltip title="Share">
                        <IconButton>
                        <ShareIcon />
                        </IconButton>
                      </Tooltip>
                    {/* Share */}
                    <Tooltip title="Reply">
                        <IconButton>
                        <ReplyIcon />
                        </IconButton>
                      </Tooltip>
                   
                   {/* edit */}
                    <Tooltip title="Edit">
                        <IconButton>
                        <EditIcon />
                        </IconButton>
                      </Tooltip>
                   
                    {/* Delete  */}
                      <Tooltip title="Delete">
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          </Box>

          {/* modal popup */}
          <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        </Box>
      </Modal> */}
      </div>

   </>
  )
}




// dialog form and modal like popup
export function AddEntityGroup({ onClose }){
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const steps = ['Entity group details', 'Share entity group'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePerform = () => {
    // Placeholder for form submission logic
    console.log('Form submitted with data:', { name, description });

    // Reset form data and close the dialog
    setName('');
    setDescription('');
    onClose();
  };

  return (
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Add entity group
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          sx={{ position: 'absolute', right: 20,backgroundColor:"rgb(25,118,210)",color:"#ffffff", top: 8,'&:hover':{
            backgroundColor:"rgb(25,118,210)",
            boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
          } }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box>
          {/* Stepper */}
          <Stepper activeStep={activeStep} sx={{ mt: 2 }}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel optional={index === 1 ? <Typography variant="caption">Optional</Typography> : null}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Form Content */}
          {activeStep === 0 && (
            <Box mt={2}>
              <TextField
                fullWidth
                label="Name"
                required
                margin="normal"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Description"
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Box>
          )}
          {activeStep === 1 && (
            <Typography mt={2}>Share entity group step content can be added here.</Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        {activeStep > 0 && (
          <Button onClick={handleBack}>
            Back
          </Button>
        )}
        <Button variant='outlined' onClick={onClose} color="primary">
          Cancel
        </Button>
        {activeStep === 0 ? (
          <Button variant="contained" onClick={handleNext}>
            Add
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handlePerform}>
            Add
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

const App = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" onClick={handleOpen}>
          Open Form
        </Button>
        {open && <AddEntityGroup onClose={handleClose} />}
      </div>
    );
  };
  
  export default App;