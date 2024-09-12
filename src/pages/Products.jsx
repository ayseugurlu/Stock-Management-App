import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ProductModal from "../components/Modals/ProductModal";
import ProductTable from "../components/Tables/ProductTable";


export const loadingStyle = { display: 'block',
  position: 'relative',
  height: '20px',
  width: '140px',
  backgroundImage: `linear-gradient(#FFF 20px, transparent 0), 
                    linear-gradient(#FFF 20px, transparent 0), 
                    linear-gradient(#FFF 20px, transparent 0), 
                    linear-gradient(#FFF 20px, transparent 0)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '20px auto',
  backgroundPosition: '0 0, 40px 0, 80px 0, 120px 0',
  animation: 'pgfill 1s linear infinite',
  '@keyframes pgfill': {
    '0%': {
      backgroundImage: `linear-gradient(#FFF 20px, transparent 0), 
                        linear-gradient(#FFF 20px, transparent 0), 
                        linear-gradient(#FFF 20px, transparent 0), 
                        linear-gradient(#FFF 20px, transparent 0)`,
    },
    '25%': {
      backgroundImage: `linear-gradient(#FF3D00 20px, transparent 0), 
                        linear-gradient(#FFF 20px, transparent 0), 
                        linear-gradient(#FFF 20px, transparent 0), 
                        linear-gradient(#FFF 20px, transparent 0)`,
    },
    '50%': {
      backgroundImage: `linear-gradient(#FF3D00 20px, transparent 0), 
                        linear-gradient(#FF3D00 20px, transparent 0), 
                        linear-gradient(#FFF 20px, transparent 0), 
                        linear-gradient(#FFF 20px, transparent 0)`,
    },
    '75%': {
      backgroundImage: `linear-gradient(#FF3D00 20px, transparent 0), 
                        linear-gradient(#FF3D00 20px, transparent 0), 
                        linear-gradient(#FF3D00 20px, transparent 0), 
                        linear-gradient(#FFF 20px, transparent 0)`,
    },
    '100%': {
      backgroundImage: `linear-gradient(#FF3D00 20px, transparent 0), 
                        linear-gradient(#FF3D00 20px, transparent 0), 
                        linear-gradient(#FF3D00 20px, transparent 0), 
                        linear-gradient(#FF3D00 20px, transparent 0)`,
    },
  },
}

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
  const {loading, error } = useSelector((state) => state.stock);

  
  

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


      {loading ?  (<Typography mt={20} ml={20} sx={loadingStyle}></Typography>):  error ? (
        <Typography align="center" variant="h5" component="h3" color="error">
          Something went wrong...
        </Typography>
      ) : (
        <>
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
        </>
      )}
     
    </Container>
  );
};

export default Products;
