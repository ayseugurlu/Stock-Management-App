import { Avatar, Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import AuthHeader from "../components/AuthHeader";
import { LockOpen } from "@mui/icons-material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import AuthImage from "../components/AuthImage";
import { Link } from "react-router-dom";


const SignupSchema = Yup.object().shape({
  username: Yup.string().required("This field is required!").min(3,"Please enter at least 3 characters!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password:Yup.string().required().min(8).matches(/\d+/, "Please include at least one digit!").matches(/[a-z]/, "Please include at least one lowercase character.").matches(/[A-Z]/, "Please include at least one uppercase character.").matches(/[@$?%&*!+]/,"Please include at least one special symbol.(@$?%&*!+)")
});

const Register = () => {
  return (
    <Container maxWidth="lg"sx={{maxHeight:"100vh"}}>
      <Grid container  sx={{display:"flex",flexDirection:"row-reverse", alignItems:"center", flexWrap:"wrap"}}>
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
            color="primary.main"
            align="center"
            mt={3}
            mb={3}
          >
            SIGN UP
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
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
                      name=""
                      label="Username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.username && Boolean(errors.username)}
                    />

                    <TextField
                      name="firstName"
                      label="Firstname"
                      id="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstName && Boolean(errors.firstName)}
                    />
                  
                    <TextField
                      name="lastName"
                      label="Lastname"
                      id="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastName && Boolean(errors.lastName)}
                    />
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
            <Link to="/" style={{textDecoration:"none", color:"primary.second"}}>Already have an account?  Sign In</Link>
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
