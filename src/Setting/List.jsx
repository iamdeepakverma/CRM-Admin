import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import HomeSettings from './HomeSettings';
import MailServer from './MailServer';
import Notification from './Notification';
import Domail from './Domail';
import RepositorySetting from './RepositorySetting';
import AutoCommitSetting from './AutoCommitSetting';
import MobileApp from './MobileApp';


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
      fontWeight:"400",
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

export default function BasicTabs() {
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
          <StyledTab label="HomeSettings" {...a11yProps(0)} />
          <StyledTab label="MailServer" {...a11yProps(1)} />
          <StyledTab label="Notification" {...a11yProps(2)} />
          <StyledTab label="Domail" {...a11yProps(3)} />
          <StyledTab label="RepositorySetting" {...a11yProps(4)} />
          <StyledTab label="AutoCommitSetting" {...a11yProps(5)} />
          <StyledTab label="MobileApp" {...a11yProps(6)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <HomeSettings/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MailServer/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Notification/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Domail/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <RepositorySetting/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <AutoCommitSetting/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <MobileApp/>
      </CustomTabPanel>
    </Box>
        </CardContent>
    </Card>
    </>
   
  );
}