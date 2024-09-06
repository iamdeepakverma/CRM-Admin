import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BarChart from "../components/BarChart";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import GetStartedHomne from "../components/GetStartedHomne";
import CreateIcon from "@mui/icons-material/Create";
import RocketIcon from '@mui/icons-material/Rocket';
import AddIcon from '@mui/icons-material/Add';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';


const Home = () => {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: { xl: "32%", lg: "31.6%", md: "31%" } }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="assets/images/img1.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Temperature & Humidity Sensors
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{ minWidth: { xl: "32.5%", lg: "31.6%", md: "31%" } }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image="assets/images/img2.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Smart office
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: { xl: "33%", lg: "32.6%", md: "31%" } }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="assets/images/img3.png"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Fleet tracking
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
              <Box height={30} />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card sx={{ maxWidth: "auto", height: "60vh" }}>
                    <CardContent>
                      <BarChart />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    maxWidth: "auto",
                    height: {
                      xl: "85vh",
                      lg: "90vh",
                      md: "90.5vh",
                      sm: "90.5vh",
                      xs: "90.5vh",
                    },
                  }}
                >
                  <CardContent>
                    <GetStartedHomne />
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card sx={{ maxWidth: "auto", height: "30vh" }}>
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
                          <span><RocketIcon/></span>
                          <a href="#" >Alarms</a>
                        </div>
                        <div className="btn_class_tras d-flex align-items-center gap-2">
                          <span><CompareArrowsIcon/></span>
                          <a href="#" >Dasboard</a>
                        </div>                
                      </div>
                      <div className="secound_box mt-4 d-flex justify-content-between align-items-center text-center gap-1">
                        <div className="btn_class_tras d-flex  align-items-center gap-2">
                          <span><RocketIcon/></span>
                          <a href="#" >Devices</a>
                        </div>
                        <div className="btn_class_tras d-flex align-items-center gap-2">
                          <a href="#" className="m-auto"><AddIcon/></a>
                        </div>                
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ maxWidth: "auto", height: "30vh" }}>
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
                          <span><RocketIcon/></span>
                          <a href="" >Getting Started</a>
                        </div>
                        <div className="btn_class_tras d-flex align-items-center gap-2">
                          <span><CompareArrowsIcon/></span>
                          <a href="" > Rule Engine</a>
                        </div>                
                      </div>
                      <div className="secound_box mt-4 d-flex justify-content-between align-items-center text-center gap-1">
                        <div className="btn_class_tras d-flex  align-items-center gap-2">
                          <span><RocketIcon/></span>
                          <a href="" >APi</a>
                        </div>
                        <div className="btn_class_tras d-flex align-items-center gap-2">
                          <span><CompareArrowsIcon/></span>
                          <a href="" >Device Profile</a>
                        </div> 
                                       
                      </div>
                      <div className="secound_box mt-4 d-flex justify-content-between align-items-center text-center gap-1">
                      <div className="btn_class_tras d-flex align-items-center gap-2">
                          <a href="" className="m-auto"><AddIcon/></a>
                        </div>                  
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card sx={{ maxWidth: "auto", height: "30vh" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: "auto", height: "30vh" }}>
                <CardContent>right</CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
