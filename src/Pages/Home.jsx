import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import BarChart from "../Chart/BarChat/BarChart";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import GetStartedHomne from "../components/GetStarted/GetStartedHomne";
import CreateIcon from "@mui/icons-material/Create";
import RocketIcon from "@mui/icons-material/Rocket";
import AddIcon from "@mui/icons-material/Add";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Devices from "../components/Home/Devices";
import Alarms from "../components/Home/Alarms";
import CountUp from "react-countup";

// clock
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

// import {Button} from "@mui/material";

const quickLinks = (
  <>
  <CardContent>
                  <div className="container">
                    <div className="inner_container">
                      <div className="first_box d-flex justify-content-between">
                        <div>Quicl Links</div>
                        <div>
                          <CreateIcon />
                        </div>
                      </div>
                      <div className="secound_box mt-4 d-flex justify-content-between align-items-center text-center gap-1">
                        <div className="btn_class_tras d-flex  align-items-center gap-2">
                          <span>
                            <RocketIcon />
                          </span>
                          <Link to="">Alarms</Link>
                        </div>
                        <div className="btn_class_tras d-flex align-items-center gap-2">
                          <span>
                            <CompareArrowsIcon />
                          </span>
                          <Link to="">Dasboard</Link>
                       </div>
                      </div>
                      <div className="secound_box mt-4 d-flex justify-content-between align-items-center text-center gap-1">
                        <div className="btn_class_tras d-flex  align-items-center gap-2">
                          <span>
                            <RocketIcon />
                          </span>
                          <Link to="">Devices</Link>
                        </div>
                        <div className="btn_class_tras d-flex align-items-center gap-2">
                          <Link to="" className="m-auto">
                            <AddIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
  </>
)

const Documentation=(
  <>
   <CardContent>
                  <div className="container">
                    <div className="inner_container">
                      <div className="first_box d-flex justify-content-between">
                        <div>Documentation</div>
                        <div>
                          <CreateIcon />
                        </div>
                      </div>
                      <div className="secound_box mt-4 d-flex justify-content-between align-items-center text-center gap-1">
                        <div className="btn_class_tras d-flex  align-items-center gap-2">
                          <span>
                            <RocketIcon />
                          </span>
                          <Link to="">Getting Started</Link>
                        </div>
                        <div className="btn_class_tras d-flex align-items-center gap-2">
                          <span>
                            <CompareArrowsIcon />
                          </span>
                          <Link to=""> Rule Engine</Link>
                        </div>
                      </div>
                      <div className="secound_box mt-4 d-flex justify-content-between align-items-center text-center gap-1">
                        <div className="btn_class_tras d-flex  align-items-center gap-2">
                          <span>
                            <RocketIcon />
                          </span>
                          <Link to="">APi</Link>
                        </div>
                        <div className="btn_class_tras d-flex align-items-center gap-2">
                          <span>
                            <CompareArrowsIcon />
                          </span>
                          <Link to="">Device Profile</Link>
                        </div>
                      </div>
                      <div className="secound_box mt-4 d-flex justify-content-between align-items-center text-center gap-1">
                        <div className="btn_class_tras d-flex align-items-center gap-2">
                          <Link to="" className="m-auto">
                            <AddIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
  </>
)

const Home = () => {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xl={8} lg={8} md={12} sm={12}>
              <Stack
                spacing={2}
                sx={{flexDirection: {md: "row",lg: "row",xl: "row",sm: "column",xs: "column",}}}direction="row">
                <Card sx={{minWidth: {xl: "49.5%",lg: "50",md: "auto",xs: "auto"},}}>
                  {/* imported */}
                  <Devices />
                </Card>
                <Card sx={{minWidth: { xl: "49%", lg: "50", md: "50%", xs: "auto" }}}>
                  {/* imported */}
                  <Alarms />
                </Card>
              </Stack>

              {/* start */}
              <Box height={30} />
              <Stack spacing={2}sx={{
                  flexDirection: {
                    md: "row",
                    lg: "row",
                    xl: "row",
                    sm: "column",
                    xs: "column",
                  },
                }}direction="row">
                <Grid items xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        fontWeight="bold"
                        sx={{ color: "#000000", padding: "10px 0px" }}>
                        Total Numver Devices
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight="bold"
                        sx={{ color: "#1976d2" }}>
                        <CountUp delay={0.2} end={32000} duration={8} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid items xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        fontWeight="bold"
                        sx={{ color: "#000000", padding: "10px 0px" }}>
                        Total Active Devices
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight="bold"
                        sx={{ color: "#1976d2" }}>
                        <CountUp delay={0.2} end={32000} duration={8} />
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid items xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        fontWeight="bold"
                        sx={{ color: "#000000", padding: "2px 0px" }}>
                        Alarm
                      </Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoItem>
                          <MobileTimePicker
                            defaultValue={dayjs("2022-04-17T15:30")}
                          />
                        </DemoItem>
                      </LocalizationProvider>
                    </CardContent>
                  </Card>
                </Grid>
              </Stack>

              {/* end */}

              <Box height={30} />
              <Grid container spacing={2}>
                <Grid item xl={12} lg={12} md={12} xm={12}>
                  <Card sx={{ maxWidth: "auto", height: "50vh" }}>
                    <CardContent>
                      {/* imported */}
                      <BarChart />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    maxWidth: "auto",
                    height: {
                      xl: "89vh",
                      lg: "89vh",
                      md: "90.5vh",
                      sm: "90.5vh",
                      xs: "90.5vh",
                    }}}>
                  <CardContent>
                    {/* imported */}
                    <GetStartedHomne />
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={6}>
              <Card sx={{ maxWidth: "auto", height: "30vh" }}>{quickLinks}</Card>
            </Grid>
            <Grid item xl={4} lg={4} md={6}>
              <Card sx={{ maxWidth: "auto", height: "30vh" }}>{Documentation}</Card>
            </Grid>
            <Grid item xl={4} lg={4} md={6} xs={12}>
              <Card sx={{ maxWidth: "auto", height: "30vh" }}>
                <CardContent>
                  {/* imported */}
                  <Devices />
                  </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
