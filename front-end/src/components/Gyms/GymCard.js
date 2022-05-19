import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

function GymCard({ gym, location, schedule1, schedule2, img }) {
    return (
      <Container>
      <Card sx={{ minWidth: 250, backgroundColor: 'text.primary' }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 25, fontWeight: 'bold' }} color="white" gutterBottom>
          {gym}
        </Typography>
        <CardMedia
        component="img"
        height="140"
        image= {img}
      />
        <Typography sx={{ mb: 1.5 }} variant="h6" component="div" color="white">
          {location}
        </Typography>
        <Typography variant="body2" color="white">
          {schedule1} <br />
        </Typography>
        <Typography variant="body2" color="white">
          {schedule2} <br />
        </Typography>
      </CardContent>
      </Card>
      </Container>
    );
  }
  
  export default GymCard;