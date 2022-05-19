import * as React from "react";
import Grid from "@mui/material/Grid";
import GymCard from "../components/Gyms/GymCard";
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";

let gyms_data = [
    {gym: "PumpHouse 1", location: "Some adress", schedule1: "Monday-Friday: 6am - 11pm ", schedule2: "Saturday-Sunday: 8am - 10pm ", img: "https://whateveryourdose.com/wp-content/uploads/2020/08/third-space-luxury-gym.png"},
    {gym: "PumpHouse 2", location: "Some adress", schedule1: "Monday-Friday: 6am - 11pm ", schedule2: "Saturday-Sunday: 8am - 10pm ", img: "https://www.technogym.com/wpress/wp-content/uploads/2021/08/Strength-7.jpg"},
    {gym: "PumpHouse 3", location: "Some adress", schedule1: "Monday-Friday: 6am - 11pm ", schedule2: "Saturday-Sunday: 8am - 10pm ", img: "https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/5JdjUfRJ-gyms-in-Qatar-1200x800.jpg"}
]

function Gyms() {
    return (

    <Container>    
    <Typography sx={{ fontSize: 42, fontWeight: 'bold', textAlign: "center", mb: 10, mt: 3 }} color="white" gutterBottom>
      Our Gyms
    </Typography>
    <Grid container rowSpacing={3} justifyContent= "space-around" >
      
      {gyms_data.map((element, index) => (
        <Grid item key={index}>
          <GymCard {...element} />
        </Grid>
      ))}
    </Grid>
    </Container>
    );
}

export default Gyms;