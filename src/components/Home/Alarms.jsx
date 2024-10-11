import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import CountUp from "react-countup";



const card1 = (
  <Box>
    <Link to="#">
      <Typography >Critical</Typography>
      <Typography className="Numer_sec">
      <CountUp delay={0.2} end={10} duration={6} />
      </Typography>
    </Link>
  </Box>
);
const card2 = (
  <Box>
    <Link to="#">
      <Typography >Assigned to me</Typography>
      <Typography className="Numer_sec">
      <CountUp delay={0.2} end={15} duration={6} />
      </Typography>
    </Link>
  </Box>
);
const card3 = (
  <Box>
    <Link to="#">
      <Typography>Total</Typography>
      <Typography className="Numer_sec">
      <CountUp delay={0.2} end={25} duration={6} />
      </Typography>
    </Link>
  </Box>
);

export default function Alarms() {
  return (
    <Box sx={{ mt: 1 , p:2}}>
      {/* header section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Alarms <NorthEastIcon sx={{fontSize:"20px",color:"#E9E9E9"}}/></Typography>
      </Box>

      {/* card section */}
      <Grid className="main_class" container spacing={2} sx={{}}>
        <Grid item xs={12} md={4}>
          <Box className="custom_card" sx={{ backgroundColor: "rgba(209, 39, 48, 0.04)" }}>{card1}</Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="custom_card" sx={{ backgroundColor: "rgb(245,249,249)" }}>{card2}</Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="custom_card" sx={{ backgroundColor: "rgb(252,252,252)" }}>{card3}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
