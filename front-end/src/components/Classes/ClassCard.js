import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

const BookButton = styled(Button)({
  backgroundColor: "red",
  color: "white",
  "&:hover": {
    backgroundColor: "red",
  },
});

export default function ClassCard({ name, price, trainer }) {
  return (
    <Container>
      <Card sx={{ maxWidth: 260, border: 1, borderColor: "white" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="170"
          image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=639,fit=crop/bronxltdlm/Rectangle-AMPJ7obDkMCEwjKm.png"
        />
        <CardContent>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography gutterBottom variant="h5">
                {name}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Typography variant="subtitle1" color="text.primary">
                Price:
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                {price}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Typography variant="subtitle1" color="text.primary">
                Trainer:
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                {trainer}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <BookButton>Book Membership</BookButton>
        </CardActions>
      </Card>
    </Container>
  );
}