import ClassCard from "../components/Classes/ClassCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useCallback, useEffect } from "react";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchClassesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:4000/classes");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedClasses = [];

      for (const key in data) {
        loadedClasses.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          trainer: data[key].trainer,
          capacity: data[key].capacity,
          date: data[key].date,
        });
      }

      setClasses(loadedClasses);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchClassesHandler();
  }, [fetchClassesHandler]);

  let content = (
    <Typography
      sx={{ fontSize: 25, fontWeight: "bold" }}
      color="white"
      textAlign="center"
      gutterBottom
    >
      Found no classes.
    </Typography>
  );

  if (error) {
    content = (
      <Typography
        sx={{ fontSize: 25, fontWeight: "bold" }}
        color="white"
        textAlign="center"
        gutterBottom
      >
        {error}
      </Typography>
    );
  }

  if (isLoading) {
    content = (
      <Typography
        sx={{ fontSize: 25, fontWeight: "bold" }}
        color="white"
        textAlign="center"
        gutterBottom
      >
        Loading...
      </Typography>
    );
  }

  return (
    <Container>
      <Typography
        sx={{ fontSize: 42, fontWeight: "bold", textAlign: "center", mb: 10, mt: 3 }}
        color="white"
        gutterBottom
      >
        CLasses
      </Typography>
      {classes.length > 0 && (
        <Grid container rowSpacing={3} justifyContent="center">
          {classes.map((element, index) => (
            <Grid item key={index}>
              <ClassCard {...element} />
            </Grid>
          ))}
        </Grid>
      )}
      {classes.length <= 0 && <div>{content} </div>}
    </Container>
  );
}
