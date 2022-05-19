import Grid from "@mui/material/Grid";
import TrainerCard from "../components/Trainers/TrainerCard";
import Typography from '@mui/material/Typography';

export default function Trainers() {
  return (
    <><Typography sx={{ fontSize: 42, fontWeight: 'bold', textAlign: "center", mb: 10, mt: 3 }} color="white" gutterBottom>
      Trainers
    </Typography>
    <Grid container rowSpacing={3} justifyContent="center">
      
        <Grid>
          <TrainerCard />
        </Grid>
    
    </Grid></>
  );
}
