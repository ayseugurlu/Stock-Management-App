import { Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import AuthHeader from "../components/AuthHeader";
import { LockOpen } from "@mui/icons-material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import AuthImage from "../components/AuthImage";
import { Link } from "react-router-dom";


const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Register = () => {
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
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form>
                  <Box sx={{display:"flex", flexDirection:"column" , gap:3}}>
                  
                    <TextField
                      name="email"
                      label="Email"
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                    />
                    <TextField
                      name="password"
                      id="password"
                      type="password"
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                    />

                    <Button type="submit" variant="contained" color="secondary">SIGN UP</Button>

                  </Box>

              </Form>
            )}
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

export default Register;
