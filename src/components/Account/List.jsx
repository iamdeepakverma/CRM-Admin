import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Profile from "./Profile";
import PersonalDetails from "./PersonalDetails";
import MyAccount from "./MyAccount";
import ChangePassword from "./ChangePassword";

export default function List() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CardContent>
        <Card>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Profile" value="1" />
                  <Tab label="Personal Details" value="2" />
                  <Tab label="My Account" value="3" />
                  <Tab label="Change Password" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Profile/>
              </TabPanel>
              <TabPanel value="2">
                <PersonalDetails/>
              </TabPanel>
              <TabPanel value="3">
                <MyAccount/>
              </TabPanel>
              <TabPanel value="4">
                <ChangePassword/>
              </TabPanel>
            </TabContext>
          </Box>
        </Card>
      </CardContent>
    </>
  );
}
