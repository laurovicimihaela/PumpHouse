import Grid from "@mui/material/Grid";
import TrainerCard from "../components/Classes/TrainerCard";

export default function Trainers() {
  return (
    <Grid container rowSpacing={3} justifyContent="center">
      
        <Grid>
          <TrainerCard />
        </Grid>
    
    </Grid>
  );
}
