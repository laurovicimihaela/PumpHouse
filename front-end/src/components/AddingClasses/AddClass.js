import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#525252" : "#525252",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid4() {
  const [value, setValue] = React.useState(new Date());
  return (
    <>
      <Typography
        sx={{ fontSize: 42, fontWeight: "bold", textAlign: "center", mb: 10, mt: 3 }}
        color="white"
        gutterBottom
      >
        Add a new class
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid container spacing={2} marginBottom={1} justifyContent="center">
            <Grid item xs={3.5} height={1} minWidth={300}>
              <Item>
                <TextField
                  id="standard-basic"
                  label="Class Name"
                  variant="standard"
                  fullWidth={true}
                  InputLabelProps={{
                    sx: { color: "#fff" },
                  }}
                  InputProps={{
                    sx: { color: "#fff" },
                  }}
                />
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={1} justifyContent="center">
            <Grid item xs={3.5} height={1} minWidth={300}>
              <Item>
                <TextField
                  id="standard-basic"
                  label="Price"
                  variant="standard"
                  fullWidth={true}
                  InputLabelProps={{
                    sx: { color: "#fff" },
                  }}
                  InputProps={{
                    sx: { color: "#fff" },
                  }}
                />
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={1} justifyContent="center">
            <Grid item xs={3.5} height={1} minWidth={300}>
              <Item>
                <TextField
                  id="standard-number"
                  label="Capacity"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                    sx: { color: "#fff" },
                  }}
                  variant="standard"
                  fullWidth={true}
                  InputProps={{
                    sx: { color: "#fff" },
                  }}
                />
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={1} justifyContent="center">
            <Grid item xs={3.5} height={1} minWidth={300}>
              <Item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        variant={"standard"}
                        fullWidth={true}
                        {...params}
                        InputLabelProps={{
                          sx: { color: "#fff" },
                        }}
                        InputProps={{
                          sx: { color: "#fff" },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={1} justifyContent="center">
            <Grid item xs={3.5} height={1} minWidth={300} justifyContent="center">
              <Item sx={{ backgroundColor: "#0000" }}>
                <Button variant="contained" component="label">
                  Upload Picture
                  <input type="file" hidden />
                </Button>
              </Item>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            marginBottom={1}
            marginTop={3}
            justifyContent="center"
          >
            <Grid item xs={2.5} height={1} minWidth={300}>
              <Button variant="contained" fullWidth={true}>
                ADD CLASS
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
