import { Container, Grid } from "@mui/material";
import React from "react";

const AuthImage = () => {
  return (
    <Grid item width={300} mt={5}>
      <Container>
        <img
          src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_1280.png"
          alt="image"
          style={{ width: "100%" }}
        />
      </Container>
    </Grid>
  );
};

export default AuthImage;
