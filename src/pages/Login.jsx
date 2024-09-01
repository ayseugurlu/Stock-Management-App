import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AuthHeader from "../components/AuthHeader";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from "@mui/icons-material/Login";
import AuthImage from "../components/AuthImage";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" alignItems="center" direction="column" >
        <AuthHeader />
        <Grid item xs={12} mb={3}>
          <Avatar
            sx={{
              backgroundColor: "lightseagreen",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockOpenIcon />
          </Avatar>
          <Typography
            variant="h5"
            align="center"
            color="gray"
            fontFamily="monospace"
            mt={3}
          >
            LOGIN
          </Typography>
        </Grid>

        <Box component="form" width={500}>
          <Grid item xs={12} mb={3}>
            <TextField
            fullWidth
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} mb={3}>
            <TextField
            fullWidth
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} mb={3} sx={{display:"flex", justifyContent:"center"}}>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              startIcon={<LoginIcon />}
            >
              LOGIN
            </Button>
          </Grid>

         
        </Box>


         <Grid item xs={12}>
          <Link to="/" style={{textAlign:"center", textDecoration: "none", color: "gray" }}>Don't have an account? Sign Up</Link>
        </Grid>
            <AuthImage />

        

        
      </Grid>
    </Container>
  );
};

export default Login;
