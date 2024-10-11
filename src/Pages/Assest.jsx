import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Sidebar/Sidebar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import EntAllEvents from '../components/Entities/Events/EntAllEvents';
import { EntAllEvents } from '../components/Entities/Assets/AssetsAll';
import { EneGroupsEvents } from '../components/Entities/Assets/AssetsGroups'

export default function Assets() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex'}}>
      <Header/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Card sx={{backgroundColor:"rgb(248 252 255)" }}>
        <CardContent >
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Group" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <EntAllEvents/>
        </TabPanel>
        <TabPanel value="2">
          <EneGroupsEvents/>
        </TabPanel>
      </TabContext>
         </Box>
        </CardContent>
      </Card>
  
      </Box>
     </Box>
    
    </>
  );
}