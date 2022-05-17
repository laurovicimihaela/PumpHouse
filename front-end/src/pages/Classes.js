import ClassCard from "../components/Classes/ClassCard";
import Grid from "@mui/material/Grid";

let dummy_data = [
  { id: 1, name: "Class1", price: 150, trainer: "Trainer1" },
  { id: 1, name: "Class1", price: 150, trainer: "Trainer1" },
  { id: 1, name: "Class1", price: 150, trainer: "Trainer1" },
  { id: 1, name: "Class1", price: 150, trainer: "Trainer1" },
  { id: 1, name: "Class1", price: 150, trainer: "Trainer1" },
  { id: 1, name: "Class1", price: 150, trainer: "Trainer1" },
  { id: 1, name: "Class1", price: 150, trainer: "Trainer1" },
  { id: 1, name: "Class1", price: 150, trainer: "Trainer1" },
  { id: 1, name: "Class1", price: 150, trainer: "Trainer1" },
];

export default function Classes() {
  return (
    <Grid container rowSpacing={3} justifyContent="center">
      {dummy_data.map((element, index) => (
        <Grid item key={index}>
          <ClassCard {...element} />
        </Grid>
      ))}
    </Grid>
  );
}
