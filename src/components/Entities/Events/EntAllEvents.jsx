import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, TableSortLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  TextField, Stepper, Step, StepLabel, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

// icons
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from "@mui/icons-material/Add";
import ReplayIcon from "@mui/icons-material/Replay";
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
export function EntAllEvents () {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    
          <Box mb={3} >
            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
                <Typography variant='h6'>Evenet Devices</Typography>
                <Button sx={{ borderColor: "#00695C", color: "#00695C", fontWeight: 'bold' }} variant='outlined'>
                  <FormatAlignCenterIcon sx={{ pr: 1, fontWeight: "bold" }} />Events Filter
                </Button>
              </Box>
              <Box  sx={{ display: "flex", columnGap: "10px" }}>
                {/* //Search  start */}
              <Tooltip title="Search"  placement="top">
                  <IconButton>
                  <SearchIcon sx={{backgroundColor:"rgb(25,118,210)",color:"white",width:"45px",height:"45px",borderRadius:"50%",padding:"8px"}} />
                  </IconButton>
                </Tooltip>
                {/* //Search  end */}
                {/* //Add  start*/}
                 {/* <AddIcon  onClick={handleOpen} /> */}
                <Tooltip title="Add New Device  "  placement="top">
                  <IconButton onClick={handleOpen}>
                  
                    <AddIcon sx={{backgroundColor:"rgb(25,118,210)",color:"white",width:"45px",height:"45px",borderRadius:"50%"}}    />
                  </IconButton>
                </Tooltip>
                {open && <AddEntityGroup onClose={handleClose} />}
                {/* //Add  end*/}
                {/* //Refresh Start*/}
                <Tooltip title="Refresh"  placement="top">
                  <IconButton >
                  <span><ReplayIcon  sx={{backgroundColor:"rgb(25,118,210)",color:"white",width:"45px",height:"45px",borderRadius:"50%",padding:"8px"}}  /></span>
                  </IconButton>
                  </Tooltip>
                {/* //Refresh end*/}
              </Box>
            </Box>
          </Box>

          {/* Table */}
          <Box>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="custom table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        inputProps={{
                          'aria-label': 'select all devices',
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <TableSortLabel active={true} direction="desc">
                      Event Created time
                      </TableSortLabel>
                    </StyledTableCell>
                    <StyledTableCell align="left">Events Name</StyledTableCell>
                    <StyledTableCell align="left">Even profile</StyledTableCell>
                    <StyledTableCell align="left">Label</StyledTableCell>
                    <StyledTableCell align="left">State</StyledTableCell>
                    <StyledTableCell align="left">Customer name</StyledTableCell>
                    <StyledTableCell align="left">Groups</StyledTableCell>
                    <StyledTableCell align="left">Is gateway</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Add table rows here */}
                  <StyledTableRow>
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" />
                    </TableCell>
                    <TableCell>2023-09-11 15:30:00</TableCell>
                    <TableCell>Device 1</TableCell>
                    <TableCell>Profile A</TableCell>
                    <TableCell>Label 1</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>Customer A</TableCell>
                    <TableCell>Group 1, Group 2</TableCell>
                    <TableCell>No</TableCell>
                  </StyledTableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
    </>
  );
};

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
    <Dialog open onClose={onClose} maxWidth="sm" fullWidth
    PaperProps={{
      style: {
        height: '500px',  // Set your fixed height here
         // Optional: set a fixed width if needed
      },
    }}>
      <DialogTitle>
        Add entity group
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
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
            <Typography mt={2}>
            <Checkbox {...label}  />
           Share entity group</Typography>
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
          <>
           <Button variant="contained" color="primary" onClick={handlePerform}>
            Add
          </Button>

          <Button variant="contained" onClick={handleNext}>
            Next: Share entity group
          </Button>  
          </>
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