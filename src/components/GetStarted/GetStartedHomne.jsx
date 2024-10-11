import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';

function GetStartedHomne() {
  return (
    <Box   p={3} width={'100%'}>
      <Typography sx={{ fontSize: '30px',fontWeight:'bold' }} variant="h6" gutterBottom>
        Get started
      </Typography>
      
      {/* Step 1 */}
      <Accordion 
        defaultExpanded 
        sx={{ 
          '&:before': { display: 'none' },
          boxShadow: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          mb: 1,
          borderRadius: 2
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CircleIcon sx={{ color: 'primary.main', fontSize: '20px', mr: 2 }} />
            <Typography variant="body1" fontWeight="bold">
              1. Create device
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="primary"
            sx={{ marginLeft: 'auto', fontWeight: 'bold' }}
          >
            Devices
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: 150, overflowY: 'auto' }}>
          <Typography variant="body2" color="textSecondary" mb={1}>
            Let's provision your first device to the platform via UI. Follow the documentation on how to do it:
          </Typography>
          <Button variant="contained" size="small">
            How to create Device
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Step 2 */}
      <Accordion 
        sx={{ 
          '&:before': { display: 'none' },
          boxShadow: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          mb: 1,
          borderRadius: 2
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CircleIcon sx={{ color: 'primary.main', fontSize: '20px', mr: 2 }} />
            <Typography variant="body1">
              2. Connect device
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: 150, overflowY: 'auto' }}>
          <Typography variant="body2" color="textSecondary" mb={1}>
            This section will guide you on how to connect your device to the platform.
          </Typography>
          <Button variant="contained" size="small">
            How to connect Device
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Step 3 */}
      <Accordion 
        sx={{ 
          '&:before': { display: 'none' },
          boxShadow: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          mb: 1,
          borderRadius: 2
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CircleIcon sx={{ color: 'primary.main', fontSize: '20px', mr: 2 }} />
            <Typography variant="body1">
              3. Create dashboard
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: 150, overflowY: 'auto' }}>
          <Typography variant="body2" color="textSecondary" mb={1}>
            Learn how to create and customize your own dashboard.
          </Typography>
          <Button variant="contained" size="small">
            How to create Dashboard
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Step 4 */}
      <Accordion 
        sx={{ 
          '&:before': { display: 'none' },
          boxShadow: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          mb: 1,
          borderRadius: 2
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CircleIcon sx={{ color: 'primary.main', fontSize: '20px', mr: 2 }} />
            <Typography variant="body1">
              4. Configure alarm rules
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: 150, overflowY: 'auto' }}>
          <Typography variant="body2" color="textSecondary" mb={1}>
            Set up and manage rules for triggering alarms based on specific conditions.
          </Typography>
          <Button variant="contained" size="small">
            How to configure Alarms
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Step 5 */}
      <Accordion 
        sx={{ 
          '&:before': { display: 'none' },
          boxShadow: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          mb: 1,
          borderRadius: 2
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CircleIcon sx={{ color: 'primary.main', fontSize: '20px', mr: 2 }} />
            <Typography variant="body1">
              5. Create alarm
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: 150, overflowY: 'auto' }}>
          <Typography variant="body2" color="textSecondary" mb={1}>
            Learn how to create and configure alarms to monitor your devices.
          </Typography>
          <Button variant="contained" size="small">
            How to create Alarms
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Step 6 */}
      <Accordion 
        sx={{ 
          '&:before': { display: 'none' },
          boxShadow: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          mb: 1,
          borderRadius: 2
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CircleIcon sx={{ color: 'primary.main', fontSize: '20px', mr: 2 }} />
            <Typography variant="body1">
              6. Create customer and share dashboard
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: 150, overflowY: 'auto' }}>
          <Typography variant="body2" color="textSecondary" mb={1}>
            Steps on how to create a customer account and share the dashboard with them.
          </Typography>
          <Button variant="contained" size="small">
            How to share Dashboard
          </Button>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
}

export default GetStartedHomne;
