import React from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import FirmCard from "../components/Cards/FirmCard";

import FirmModal from "../components/Modals/FirmModal";
import { useState } from "react";

const Firms = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
  };
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  console.log(firms);
  const [initialState, setInitialState] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <Container>
      <Typography
        align="center"
        color="secondary.main"
        variant="h4"
        component="h1"
        mb={5}
      >
        Firms
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        ADD NEW FIRM
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        initialState={initialState}
      /> 
      <Grid container spacing={3} mt={3}>
        {firms.map((firm) => (
          <Grid item xs={12} md={6} xl={3} key={firm._id}>
            <FirmCard
              {...firm}
              handleOpen={handleOpen}
              setInitialState={setInitialState}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Firms;
