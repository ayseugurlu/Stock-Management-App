
import { Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import useStockCall from '../hooks/useStockCall'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import KpiCards from '../components/KpiCards'
import { Charts } from '../components/Charts'

const Home = () => {

  const {getStockData}=useStockCall()

  const {sales,purchases,products} =useSelector((state)=>state.stock)


  useEffect(() => {
    getStockData("sales");
    getStockData("purchases");
    getStockData("products");
    

  }, []);

  console.log("products:",products);

  
  return (
   <Container maxWidth={"xl"}>
   <Typography 
   variant='h4' 
   align='center' 
   color="primary.main"
   mb={3}>
   Dashboard
   </Typography>

      <KpiCards/>
      <Charts/>

      
   </Container>
  )
}

export default Home