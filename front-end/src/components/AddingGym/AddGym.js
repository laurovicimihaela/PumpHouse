import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#525252' : '#525252',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid3() {
  return (
    <><Typography sx={{ fontSize: 42, fontWeight: 'bold', textAlign: "center", mb: 10, mt: 3 }} color="white" gutterBottom>
      Add a new gym
    </Typography>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          
          <Grid container spacing={2} marginBottom={1} justifyContent="center">
            <Grid item xs={3.5} height={1} minWidth={300}>
              <Item><TextField id="standard-basic" label="Gym Name" variant="standard" fullWidth={16} /></Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={1} justifyContent="center">
            <Grid item xs={3.5} height={1} minWidth={300}>
              <Item><TextField id="standard-basic" label="Location" variant="standard" fullWidth={8} /></Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={1} justifyContent="center">
            <Grid item xs={3.5} height={1} minWidth={300} justifyContent="center">
              <Item sx={{backgroundColor: '#0000'}}>
              <Button
                    variant="contained"
                    component="label"
                    justifyContent="center"
                    textAlign="center"
                    >
                    Upload Picture
                    <input
                        type="file"
                        hidden
                    />
                </Button>
                </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={1} marginTop={3} justifyContent="center">
            <Grid item xs={2.5} height={1} minWidth={300}>
              <Button variant="contained" fullWidth={8}>ADD GYM</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box></>
  );
}
