import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import BrandCard from '../components/Cards/BrandCard';
import { useState } from 'react';
import useStockCall from '../hooks/useStockCall';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import BrandModal from  "../components/Modals/BrandModal"
import { loadingStyle } from './Products';


const Brands = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name:"",
      image:""
    })
  }
  const [initialState,setInitialState] =useState({
    name:"",
    image:""
  })

  const { getStockData } = useStockCall();

  const { brands,loading,error} = useSelector((state) => state.stock);
  console.log(brands);

  useEffect(()=> {
    getStockData("brands")
  },[])

 
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
        Brands
      </Typography>
      {loading ?  (<Typography mt={20} ml={20} sx={loadingStyle}></Typography>):  error ? (
        <Typography align="center" variant="h5" component="h3" color="error">
          Something went wrong...
        </Typography>
      ) : (
        <>
            <Button variant="contained" onClick={handleOpen}>
        ADD NEW BRAND
      </Button>
      {open && <BrandModal open={open} handleClose={handleClose} initialState={initialState}/> }
      <Grid container spacing={3} mt={3}>
        {brands.map((brand) => (
          <Grid item xs={12} md={6} xl={3} key={brand._id}>
            <BrandCard {...brand} handleOpen={handleOpen} setInitialState={setInitialState}/>
          </Grid>
        ))}
      </Grid>
        </>
      )}
    
    </Container>
  )
}

export default Brands