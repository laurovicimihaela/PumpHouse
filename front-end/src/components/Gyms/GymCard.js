import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import GymImage from "../../assets/Gym/gym.jpg";

function GymCard({ name, img }) {
  return (
    <Container>
      <Card sx={{ minWidth: 250, backgroundColor: "text.primary" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 25, fontWeight: "bold" }}
            color="white"
            textAlign="center"
            gutterBottom
          >
            {name}
          </Typography>
          <CardMedia component="img" height="300" image={GymImage} />
        </CardContent>
      </Card>
    </Container>
  );
}

export default GymCard;
