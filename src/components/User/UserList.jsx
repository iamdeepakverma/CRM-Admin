import React from 'react';
import PropTypes from 'prop-types';
import {Tabs,Box} from '@mui/material';
import Tab from '@mui/material/Tab';
import Card from "@mui/material/Card";
// import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import {All} from './All';
import Groups from './Groups';


  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color:"#000000",
      '&.Mui-selected': {
        color: '#0c828f',
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#30c1d1',
      },
    }),
  );
  

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function UserList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    <Card>
        <CardContent>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="All" {...a11yProps(0)} />
          <StyledTab label="Groups" {...a11yProps(1)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <All/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Groups/>
      </CustomTabPanel>
    </Box>
        </CardContent>
    </Card>
    </>
   
  );
}

// export function AddEntityGroup({ onClose }){
//   const [activeStep, setActiveStep] = useState(0);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const steps = ['Entity group details', 'Share entity group'];

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handlePerform = () => {
//     // Placeholder for form submission logic
//     console.log('Form submitted with data:', { name, description });

//     // Reset form data and close the dialog
//     setName('');
//     setDescription('');
//     onClose();
//   };
//   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


//   return (
//     <Dialog open onClose={onClose} maxWidth="sm" fullWidth
//     PaperProps={{
//       style: {
//         height: '500px',  // Set your fixed height here
//          // Optional: set a fixed width if needed
//       },
//     }}>
//       <DialogTitle>
//         Add entity group
//         <IconButton
//           edge="end"
//           color="inherit"
//           onClick={onClose}
//           sx={{ position: 'absolute', right: 8, top: 8 }}
//         >
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent>
//         <Box>
//           {/* Stepper */}
//           <Stepper activeStep={activeStep} sx={{ mt: 2 }}>
//             {steps.map((label, index) => (
//               <Step key={label}>
//                 <StepLabel optional={index === 1 ? <Typography variant="caption">Optional</Typography> : null}>
//                   {label}
//                 </StepLabel>
//               </Step>
//             ))}
//           </Stepper>

//           {/* Form Content */}
//           {activeStep === 0 && (
//             <Box mt={2}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 required
//                 margin="normal"
//                 variant="outlined"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <TextField
//                 fullWidth
//                 label="Description"
//                 margin="normal"
//                 multiline
//                 rows={4}
//                 variant="outlined"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </Box>
//           )}
//           {activeStep === 1 && (
//             <Typography mt={2}>
//             <Checkbox {...label}  />
//            Share entity group</Typography>
//           )}
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         {activeStep > 0 && (
//           <Button onClick={handleBack}>
//             Back
//           </Button>
//         )}
//         <Button variant='outlined' onClick={onClose} color="primary">
//           Cancel
//         </Button>
//         {activeStep === 0 ? (
//           <>
//            <Button variant="contained" color="primary" onClick={handlePerform}>
//             Add
//           </Button>

//           <Button variant="contained" onClick={handleNext}>
//             Next: Share entity group
//           </Button>  
//           </>
//         ) : (
//           <Button variant="contained" color="primary" onClick={handlePerform}>
//             Add
//           </Button>
//         )}
//       </DialogActions>
//     </Dialog>
//   );
// };

// const App = () => {
//     const [open, setOpen] = useState(false);
  
//     const handleOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };
  
//     return (
//       <div>
//         <Button variant="contained" onClick={handleOpen}>
//           Open Form
//         </Button>
//         {open && <AddEntityGroup onClose={handleClose} />}
//       </div>
//     );
//   };
  
//   export default App;