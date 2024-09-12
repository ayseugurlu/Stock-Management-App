import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";
import PurchaseModal from "../components/Modals/PurchaseModal";
import PurchaseTable from "../components/Tables/Purchasetable";

const Purchases = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      firmId: "",
      brandId: "",
      productId: "",
      quantity: 0,
      price: 0,
    });
  };
  const [initialState, setInitialState] = useState({
    firmId: "",
    brandId: "",
    productId: "",
    quantity: 0,
    price: 0,
  });

  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("purchases");
    getStockData("products");
    getStockData("brands");
    getStockData("categories");
    getStockData("firms");
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
        Purchases
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        ADD NEW PURCHASE
      </Button>
      {open && (
        <PurchaseModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}

      <PurchaseTable  handleOpen={handleOpen} setInitialState={setInitialState}/>
    </Container>
  );
};

export default Purchases;
