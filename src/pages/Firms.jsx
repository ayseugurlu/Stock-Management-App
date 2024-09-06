import React from 'react'
import useStockCall from '../hooks/useStockCall'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import FirmCard from '../components/Cards/FirmCard'
import ModalCard from '../components/Cards/ModalCard'
import { useDispatch } from 'react-redux'
import { openModal } from '../features/stockSlice'


const Firms = () => {

  const dispatch =useDispatch()
  const {getStockData}=useStockCall()
  const {firms} = useSelector(state => state.stock)
  console.log(firms);

  useEffect(()=>{
    getStockData("firms");
  },[])

  const handleOpen = () =>{
    dispatch(openModal())
  }
  return (
    <Container>
      <Typography 
      align="center"
      color="secondary.main"
      variant="h4"
      component="h1"
      >
        Firms
      </Typography>
      <ModalCard/>
      <Button variant="contained" 
      onClick={handleOpen}
      >ADD NEW FIRM</Button>

      <Grid container spacing={3} mt={3}>
      {
        firms.map((firm) => (
          <Grid item xs={12} md={6} xl={3} key={firm._id}>
              <FirmCard {...firm}/>

          </Grid>
        ))
      }

      </Grid>
    </Container>
  )
}

export default Firms