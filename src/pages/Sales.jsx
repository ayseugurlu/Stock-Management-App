import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";
import SaleModal from "../components/Modals/SaleModal";
import SaleTable from "../components/Tables/SaleTable";

const Purchases = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      brandId: "",
      productId: "",
      quantity: 0,
      price: 0,
    });
  };
  const [initialState, setInitialState] = useState({
    brandId: "",
    productId: "",
    quantity: 0,
    price: 0,
  });

  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("sales");
    getStockData("products");
    getStockData("brands");

  }, []);

  console.log(initialState);

  return (
    <Container>
      <Typography
        align="center"
        color="secondary.main"
        variant="h4"
        component="h1"
        mb={5}
      >
        Sales
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        ADD NEW SALE
      </Button>
      {open && (
        <SaleModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}

      <SaleTable  handleOpen={handleOpen} setInitialState={setInitialState}/>
    </Container>
  );
};

export default Purchases;
