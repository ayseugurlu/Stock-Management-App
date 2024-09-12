
import { Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import useStockCall from '../hooks/useStockCall'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

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
   <Container>
   <Typography variant='h4' align='center' color="primary.main">Dashboard</Typography>
      <Grid container spacing={4} marginTop={2}>
        <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Card sx={{width:"300px",padding:"1rem", borderRadius:"1rem", borderTop:"5px solid skyblue"}} >
        <Typography variant='h5' align='center'>
          {sales.map((sale)=>sale.amount).reduce((a,b)=>a+b,0)}
        </Typography>
        <Typography variant='body2' color="primary.second">Sales</Typography>
        </Card>
        </Grid>

        <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Card sx={{width:"300px",padding:"1rem", borderRadius:"1rem", borderTop:"5px solid seagreen"}}>
            <Typography variant='h5' align='center'>
            {sales.map((sale)=>sale.amount).reduce((a,b)=>a+b,0)-purchases.map((purchase)=>purchase.amount).reduce((a,b)=>a+b,0) }
            </Typography>
            <Typography variant='body2' color="primary.second">Cash</Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center" gap={2}>

        <Card sx={{width:"300px",padding:"1rem", borderRadius:"1rem", borderTop:"5px solid tomato"}}>
        <Typography variant='h5' align='center' >
        {purchases.map((purchase)=>purchase.amount).reduce((a,b)=>a+b,0)}
        </Typography>
        <Typography variant='body2' color="primary.second">Purchases</Typography>
        </Card>
        </Grid>

      </Grid>

      <Grid>

      </Grid>
   </Container>
  )
}

export default Home