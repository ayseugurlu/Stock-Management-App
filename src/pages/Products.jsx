import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ProductModal from "../components/Modals/ProductModal";
import ProductTable from "../components/Tables/ProductTable";


const Products = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      categoryId: "",
      brandId: "",
    });
  };
  const [initialState, setInitialState] = useState({
    name: "",
    categoryId: "",
    brandId: "",
  });

  const { getStockData } = useStockCall();

  
  

  useEffect(() => {
    getStockData("products");
    getStockData("brands");
    getStockData("categories");
  }, []);

  // console.log(initialState);

  return (
    <Container>
      <Typography
        align="center"
        color="secondary.main"
        variant="h4"
        component="h1"
        mb={5}
      >
        Products
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        ADD NEW PRODUCT
      </Button>
      {open && (
        <ProductModal
        open={open}
          handleClose={handleClose}
          initialState={initialState}
      />)
      }

        <ProductTable/>
    </Container>
  );
};

export default Products;
