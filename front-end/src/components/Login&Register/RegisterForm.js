import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../store/auth-context";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#525252",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RegisterForm() {
  const navigate = useNavigate();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //validation

    setIsLoading(true);

    fetch("http://localhost:4000/users/register", {
      method: "PATCH",
      body: JSON.stringify({
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        phone: enteredPhone,
        password: enteredPassword,
      }),
      headers: {},
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Register failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.token);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Typography
        sx={{ fontSize: 42, fontWeight: "bold", textAlign: "center", mb: 10, mt: 3 }}
        color="white"
        gutterBottom
      >
        Sign up
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={submitHandler}>
          <Grid container>
            <Grid container spacing={2} marginBottom={1} justifyContent="center">
              <Grid item xs={2.5} height={1} minWidth={150}>
                <Item>
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    fullWidth={true}
                    InputLabelProps={{
                      sx: { color: "#fff" },
                    }}
                    InputProps={{
                      sx: { color: "#fff" },
                    }}
                    ref={firstNameInputRef}
                  />
                </Item>
              </Grid>

              <Grid item xs={2.5} height={1} minWidth={150}>
                <Item>
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    fullWidth={true}
                    InputLabelProps={{
                      sx: { color: "#fff" },
                    }}
                    InputProps={{
                      sx: { color: "#fff" },
                    }}
                    ref={lastNameInputRef}
                  />
                </Item>
              </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom={1} justifyContent="center">
              <Grid item xs={5} height={1} minWidth={300}>
                <Item>
                  <TextField
                    id="standard-basic"
                    label="E-mail"
                    variant="standard"
                    fullWidth={true}
                    InputLabelProps={{
                      sx: { color: "#fff" },
                    }}
                    InputProps={{
                      sx: { color: "#fff" },
                    }}
                    ref={emailInputRef}
                  />
                </Item>
              </Grid>
            </Grid>
            <Grid container spacing={2} marginBottom={1} justifyContent="center">
              <Grid item xs={2.5} height={1} minWidth={150}>
                <Item>
                  <TextField
                    id="standard-basic"
                    label="Phone number"
                    variant="standard"
                    fullWidth={true}
                    InputLabelProps={{
                      sx: { color: "#fff" },
                    }}
                    InputProps={{
                      sx: { color: "#fff" },
                    }}
                    ref={phoneInputRef}
                  />
                </Item>
              </Grid>
              <Grid item xs={2.5} height={1} minWidth={150}>
                <Item>
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    fullWidth={true}
                    InputLabelProps={{
                      sx: { color: "#fff" },
                    }}
                    InputProps={{
                      sx: { color: "#fff" },
                    }}
                    ref={passwordInputRef}
                  />
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
                <Button variant="contained" fullWidth={true} type="submit">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
