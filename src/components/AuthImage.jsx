import { Container, Grid } from "@mui/material";
import React from "react";

const AuthImage = () => {
  return (
    <Grid item  mt={5}>
      <Container>
        <img
          src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?t=st=1725542672~exp=1725546272~hmac=c3bdf26d36ae4fa006c718547e15abd213fbbe0bfeb9899ca960b676485e8e71&w=1060"
          alt="image"
          style={{ width: "100%" }}
        />
      </Container>
    </Grid>
  );
};

export default AuthImage;
