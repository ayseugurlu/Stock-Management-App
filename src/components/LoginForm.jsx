import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { Form } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/\d+/, "Please include at least one digit!")
    .matches(/[a-z]/, "Please include at least one lowercase character.")
    .matches(/[A-Z]/, "Please include at least one uppercase character.")
    .matches(
      /[@$?%&*!+]/,
      "Please include at least one special symbol.(@$?%&*!+)"
    ),
});

const LoginForm = ({ values, errors, touched, handleChange, handleBlur }) => {
  const { loading } = useSelector((state) => state.auth);

  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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
        {!loading ? (<Button type="submit" variant="contained" color="primary">
          LOGIN
        </Button>):(
            <Button variant="contained" color="secondary" disabled={loading}>
            <CircularProgress />
          </Button>
          )}
        
      </Box>
    </Form>
  );
};

export default LoginForm;
