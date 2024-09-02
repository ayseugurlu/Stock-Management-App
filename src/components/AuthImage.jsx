import { Container, Grid } from "@mui/material";
import React from "react";

const AuthImage = () => {
  return (
    <Grid item  mt={5}>
      <Container>
        <img
          src="https://cdn.pixabay.com/photo/2023/11/29/03/43/graphic-8418608_1280.png"
          alt="image"
          style={{ width: "100%" }}
        />
      </Container>
    </Grid>
  );
};

export default AuthImage;
