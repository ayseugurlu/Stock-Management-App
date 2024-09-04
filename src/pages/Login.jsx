import { Avatar, Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AuthHeader from "../components/AuthHeader";
import { LockOpen } from "@mui/icons-material";
import { Formik } from "formik";
import AuthImage from "../components/AuthImage";
import { Link } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";
import LoginForm, { SigninSchema } from "../components/LoginForm";




const Login = () => {

  const {login} = useAuthCall()
  return (
    <Container maxWidth="lg"sx={{maxHeight:"100vh"}}>
      <Grid container  sx={{display:"flex",flexDirection:"row-reverse", flexWrap:"wrap",alignItems:"center"}}>
        <AuthHeader />

        <Grid item xs={12} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.second",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockOpen />
          </Avatar>

          <Typography
            variant="h4"
            color="primary"
            align="center"
            mt={3}
            mb={3}
          >
            SIGN IN
          </Typography>

          <Formik
            initialValues={{
              password: "",
              email: ""
            }}
            validationSchema={SigninSchema}
            onSubmit={(values,actions) => {
              // same shape as initial values
              console.log(values);
              login(values)
              actions.resetForm()
              actions.setSubmitting(false)
            }}

            component={props => <LoginForm {...props}/>}
          >
            
          </Formik>

          <Box textAlign="center" mt={3} fontSize={18}>
            <Link to="/register" style={{textDecoration:"none", color:"primary.second"}}>Don't have an account?  Sign Up</Link>
          </Box>

          
        </Grid>

        <Grid item xs={12} md={6}>
          <AuthImage/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
